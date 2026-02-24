import fs from 'fs';
import path from 'path';

// minimal version of csv parsing
const parseCSV = (filePath) => {
    if (!fs.existsSync(filePath)) return [];
    const csvData = fs.readFileSync(filePath, 'utf-8');
    const rows = csvData.split('\n');
    const keys = rows[0].split(',').map(k => k.trim());
    return rows.slice(1).map(row => {
        const values = row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || [];
        return keys.reduce((obj, key, i) => {
            const val = values[i] ? values[i].replace(/(^"|"$)/g, '') : '';
            obj[key] = val;
            return obj;
        }, {});
    }).filter(row => Object.keys(row).length > 1);
};

const locationsPath = path.join(process.cwd(), 'data', 'csv', 'locations.csv');
const servicesPath = path.join(process.cwd(), 'data', 'csv', 'services.csv');

const allLocations = parseCSV(locationsPath);
const services = parseCSV(servicesPath);

console.log(`Total locations parsed: ${allLocations.length}`);
console.log(`Total services parsed: ${services.length}`);

const locations = [];
['united-states', 'canada', 'united-kingdom', 'united-arab-emirates', 'australia'].forEach(countrySlug => {
    const countryLocs = allLocations.filter(l => l.country_slug === countrySlug).slice(0, 20);
    console.log(`Found ${countryLocs.length} locations for ${countrySlug}`);
    locations.push(...countryLocs);
});

const paths = [];
locations.forEach(loc => {
    services.forEach(srv => {
        if (loc.country_slug && loc.city_slug && srv.service_slug) {
            let mappedCountry = loc.country_slug;
            if (mappedCountry === 'united-states') mappedCountry = 'usa';
            if (mappedCountry === 'united-kingdom') mappedCountry = 'uk';

            paths.push({
                country: mappedCountry,
                city: loc.city_slug,
                service: srv.service_slug
            });
        }
    });
});

console.log(`Total generated paths: ${paths.length}`);
const usaPaths = paths.filter(p => p.country === 'usa');
console.log(`Total USA paths: ${usaPaths.length}`);
if (usaPaths.length > 0) {
    console.log(`Sample USA path:`, usaPaths[0]);
}

