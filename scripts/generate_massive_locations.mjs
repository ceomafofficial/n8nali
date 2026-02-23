import fs from 'fs';
import path from 'path';

// Import the massive local cities database (approx 100k+ cities)
const citiesPath = path.join(process.cwd(), 'node_modules', 'cities.json', 'cities.json');
const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf8'));

// We want 1,600 highly relevant, tier-1/tier-2 cities from premium business markets.
const premiumCountries = {
    "US": "United States", "GB": "United Kingdom", "CA": "Canada", "AU": "Australia",
    "AE": "United Arab Emirates", "SA": "Saudi Arabia", "DE": "Germany", "FR": "France",
    "NL": "Netherlands", "SE": "Sweden", "CH": "Switzerland", "SG": "Singapore",
    "IE": "Ireland", "NO": "Norway", "DK": "Denmark", "FI": "Finland", "JP": "Japan",
    "KR": "South Korea", "NZ": "New Zealand", "IN": "India"
};

async function generateMassiveLocations() {
    console.log(`Loaded ${cities.length} global cities from local package.`);

    // Filter down to major markets
    let targetCities = cities.filter(c => premiumCountries[c.country]);

    // Shuffle deterministicly or just sort by a loose metric (e.g. string length to get diverse sizes, or just take first 1600)
    // cities.json is roughly ordered by country. We will ensure we get an even spread.
    const spreadCities = [];
    const countryCounts = {};

    for (const city of targetCities) {
        if (!countryCounts[city.country]) countryCounts[city.country] = 0;

        // We want USA to have max 300, UK max 150, India max 150, etc.
        let limit = 100;
        if (city.country === 'US') limit = 350;
        else if (city.country === 'GB') limit = 150;
        else if (city.country === 'CA') limit = 150;
        else if (city.country === 'AU') limit = 150;
        else if (city.country === 'DE') limit = 150;
        else if (city.country === 'IN') limit = 150;

        if (countryCounts[city.country] < limit) {
            spreadCities.push(city);
            countryCounts[city.country]++;
        }
    }

    let finalSelection = spreadCities.slice(0, 1650);

    const csvLines = ["country_slug,country_name,city_slug,city_name,lat,lng"];
    const slugify = (text) => text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');

    let added = 0;
    const uniqueSlugs = new Set();

    for (const loc of finalSelection) {
        if (added >= 1620) break;

        const cName = premiumCountries[loc.country];
        const ciName = loc.name;
        // The cities.json has lat and lng as numbers or strings
        const lat = loc.lat;
        const lng = loc.lng;

        const cSlug = slugify(cName);
        const ciSlug = slugify(ciName);

        const uid = `${cSlug}-${ciSlug}`;

        // Prevent dupes and ensure valid data
        if (!uniqueSlugs.has(uid) && cSlug && ciSlug && lat && lng) {
            uniqueSlugs.add(uid);

            // Clean output for CSV
            const safeCName = cName.includes(',') ? `"${cName}"` : cName;
            const safeCiName = ciName.includes(',') ? `"${ciName}"` : ciName;

            csvLines.push(`${cSlug},${safeCName},${ciSlug},${safeCiName},${lat},${lng}`);
            added++;
        }
    }

    const csvContent = csvLines.join("\n");
    const outputPath = path.join(process.cwd(), 'data/csv/locations.csv');

    fs.writeFileSync(outputPath, csvContent, 'utf-8');
    console.log(`Successfully compiled ${added} hyper-localized global cities with Lat/Lng coordinates.`);
    console.log(`Saved strictly to ${outputPath} for PSEO Matrix injection.`);
}

generateMassiveLocations();
