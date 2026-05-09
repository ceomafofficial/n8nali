import * as fs from 'fs';
import * as path from 'path';

const BASE = "https://n8nera.tech";
const CONTENT_UPDATED = "2026-02-12T00:00:00.000Z";

const parseCSV = (filePath) => {
    if (!fs.existsSync(filePath)) return [];
    const csvData = fs.readFileSync(filePath, 'utf8');
    const lines = csvData.split('\n').filter(l => l.trim() !== '');
    if (lines.length < 2) return [];

    const headers = lines[0].split(',').map(h => h.trim());
    return lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim());
        const obj = {};
        headers.forEach((header, index) => {
            obj[header] = values[index];
        });
        return obj;
    });
};

const getBadUrls = () => {
    try {
        const badUrlsPath = path.join(process.cwd(), 'clean_bad_urls.json');
        if (fs.existsSync(badUrlsPath)) {
            const arr = JSON.parse(fs.readFileSync(badUrlsPath, 'utf8'));
            return new Set(arr.map(u => u.replace(/\/$/, ''))); 
        }
    } catch (e) {
        console.error("Could not load clean_bad_urls.json", e);
    }
    return new Set();
};

const generateSitemapString = () => {
    let urls = [];
    const badUrls = getBadUrls();
    
    const addUrl = (urlPath, priority, changefreq) => {
        const normalizedPath = urlPath.replace(/\/$/, '');
        if (!badUrls.has(normalizedPath) && !badUrls.has(normalizedPath + '/')) {
            urls.push(`<url><loc>${BASE}${urlPath}</loc><lastmod>${CONTENT_UPDATED}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`);
        }
    };

    // Core Pages
    addUrl('/', '1.0', 'weekly');
    addUrl('/services/', '0.9', 'weekly');
    addUrl('/about-us/', '0.8', 'monthly');
    addUrl('/contact/', '0.9', 'monthly');

    const allLocations = parseCSV(path.join(process.cwd(), 'data/csv/locations.csv'));
    const services = parseCSV(path.join(process.cwd(), 'data/csv/services.csv'));
    const skills = parseCSV(path.join(process.cwd(), 'data/csv/skills.csv'));

    // STRICT MATCH WITH page.tsx `generateStaticParams()`
    // We must only generate sitemap URLs for exactly the top 20 cities of these 5 countries
    const targetCountries = ['united-states', 'canada', 'united-kingdom', 'united-arab-emirates', 'australia'];
    const exportLocations = [];

    targetCountries.forEach(countrySlug => {
        const countryLocs = allLocations.filter(l => l.country_slug === countrySlug).slice(0, 20);
        exportLocations.push(...countryLocs);
    });

    exportLocations.forEach(loc => {
        let mappedCountry = loc.country_slug;
        if (mappedCountry === 'united-states') mappedCountry = 'usa';
        if (mappedCountry === 'united-kingdom') mappedCountry = 'uk';

        services.forEach(srv => {
            if (loc.country_slug && loc.city_slug && srv.service_slug) {
                addUrl(`/${mappedCountry}/${loc.city_slug}/${srv.service_slug}/`, '0.7', 'monthly');
            }
        });

        skills.forEach(skl => {
            if (loc.country_slug && loc.city_slug && skl.skill_slug) {
                addUrl(`/${mappedCountry}/${loc.city_slug}/skills/${skl.skill_slug}/`, '0.6', 'monthly');
            }
        });
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
};

try {
    const sitemapContent = generateSitemapString();
    fs.writeFileSync(path.join(process.cwd(), 'public/sitemap.xml'), sitemapContent);
    console.log(`✅ Pre-build Sitemap Generated successfully with ${sitemapContent.match(/<url>/g).length} URLs.`);
} catch (e) {
    console.error("❌ Sitemap Generation Failed:", e);
}
