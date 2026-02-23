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

const generateSitemapString = () => {
    let urls = [];

    // Core Pages
    urls.push(`<url><loc>${BASE}/</loc><lastmod>${CONTENT_UPDATED}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>`);
    urls.push(`<url><loc>${BASE}/services/</loc><lastmod>${CONTENT_UPDATED}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>`);
    urls.push(`<url><loc>${BASE}/about-us/</loc><lastmod>${CONTENT_UPDATED}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`);
    urls.push(`<url><loc>${BASE}/contact/</loc><lastmod>${CONTENT_UPDATED}</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>`);

    // PSEO Pages (Capped for standard Cloudflare deployment size)
    const locations = parseCSV(path.join(process.cwd(), 'data/csv/locations.csv'));
    const services = parseCSV(path.join(process.cwd(), 'data/csv/services.csv'));
    const skills = parseCSV(path.join(process.cwd(), 'data/csv/skills.csv'));

    // Cloudflare limits SSG outputs to 20,000 files total per fast build. 
    // We limit local generation here to 100 top cities * 160 skills/services = ~16,000 URLs to perfectly fit limits.
    const exportLocations = locations.slice(0, 100);

    exportLocations.forEach(loc => {
        services.forEach(srv => {
            if (loc.country_slug && loc.city_slug && srv.service_slug) {
                urls.push(`<url><loc>${BASE}/${loc.country_slug}/${loc.city_slug}/${srv.service_slug}/</loc><lastmod>${CONTENT_UPDATED}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`);
            }
        });

        skills.forEach(skl => {
            if (loc.country_slug && loc.city_slug && skl.skill_slug) {
                urls.push(`<url><loc>${BASE}/${loc.country_slug}/${loc.city_slug}/skills/${skl.skill_slug}/</loc><lastmod>${CONTENT_UPDATED}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`);
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
