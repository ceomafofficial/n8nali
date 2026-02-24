import fs from 'fs';
import path from 'path';

const usaCities = [
    { id: "new-york", name: "New York", lat: 40.7128, lng: -74.0060 },
    { id: "los-angeles", name: "Los Angeles", lat: 34.0522, lng: -118.2437 },
    { id: "chicago", name: "Chicago", lat: 41.8781, lng: -87.6298 },
    { id: "houston", name: "Houston", lat: 29.7604, lng: -95.3698 },
    { id: "san-francisco", name: "San Francisco", lat: 37.7749, lng: -122.4194 },
    { id: "miami", name: "Miami", lat: 25.7617, lng: -80.1918 },
    { id: "seattle", name: "Seattle", lat: 47.6062, lng: -122.3321 },
    { id: "austin", name: "Austin", lat: 30.2672, lng: -97.7431 },
    { id: "boston", name: "Boston", lat: 42.3601, lng: -71.0589 },
    { id: "denver", name: "Denver", lat: 39.7392, lng: -104.9903 },
    { id: "atlanta", name: "Atlanta", lat: 33.7490, lng: -84.3880 },
    { id: "dallas", name: "Dallas", lat: 32.7767, lng: -96.7970 },
    { id: "phoenix", name: "Phoenix", lat: 33.4484, lng: -112.0740 },
    { id: "san-diego", name: "San Diego", lat: 32.7157, lng: -117.1611 },
    { id: "washington-dc", name: "Washington D.C.", lat: 38.9072, lng: -77.0369 },
];

const canadaCities = [
    { id: "toronto", name: "Toronto", lat: 43.651070, lng: -79.347015 },
    { id: "vancouver", name: "Vancouver", lat: 49.2827, lng: -123.1207 },
    { id: "montreal", name: "Montreal", lat: 45.5017, lng: -73.5673 },
    { id: "calgary", name: "Calgary", lat: 51.0447, lng: -114.0719 },
    { id: "ottawa", name: "Ottawa", lat: 45.4215, lng: -75.6972 },
    { id: "edmonton", name: "Edmonton", lat: 53.5461, lng: -113.4938 },
    { id: "winnipeg", name: "Winnipeg", lat: 49.8951, lng: -97.1384 },
    { id: "mississauga", name: "Mississauga", lat: 43.5890, lng: -79.6441 },
    { id: "brampton", name: "Brampton", lat: 43.7315, lng: -79.7624 },
    { id: "halifax", name: "Halifax", lat: 44.6488, lng: -63.5752 },
];

const ukCities = [
    { id: "london", name: "London", lat: 51.5074, lng: -0.1278 },
    { id: "manchester", name: "Manchester", lat: 53.4808, lng: -2.2426 },
    { id: "birmingham", name: "Birmingham", lat: 52.4862, lng: -1.8904 },
    { id: "edinburgh", name: "Edinburgh", lat: 55.9533, lng: -3.1883 },
    { id: "glasgow", name: "Glasgow", lat: 55.8642, lng: -4.2518 },
    { id: "bristol", name: "Bristol", lat: 51.4545, lng: -2.5879 },
    { id: "liverpool", name: "Liverpool", lat: 53.4084, lng: -2.9916 },
    { id: "leeds", name: "Leeds", lat: 53.8008, lng: -1.5491 },
    { id: "sheffield", name: "Sheffield", lat: 53.3811, lng: -1.4701 },
    { id: "newcastle", name: "Newcastle", lat: 54.9783, lng: -1.6178 },
];

const nlCities = [
    { id: "amsterdam", name: "Amsterdam", lat: 52.3676, lng: 4.9041 },
    { id: "rotterdam", name: "Rotterdam", lat: 51.9225, lng: 4.4791 },
    { id: "the-hague", name: "The Hague", lat: 52.0705, lng: 4.3007 },
    { id: "utrecht", name: "Utrecht", lat: 52.0907, lng: 5.1214 },
    { id: "eindhoven", name: "Eindhoven", lat: 51.4416, lng: 5.4697 },
    { id: "groningen", name: "Groningen", lat: 53.2194, lng: 6.5665 },
    { id: "tilburg", name: "Tilburg", lat: 51.5555, lng: 5.0913 },
    { id: "almere", name: "Almere", lat: 52.3702, lng: 5.2141 },
    { id: "breda", name: "Breda", lat: 51.5855, lng: 4.7730 },
    { id: "nijmegen", name: "Nijmegen", lat: 51.8126, lng: 5.8372 },
];


let appendedData = '\n';
usaCities.forEach(c => {
    appendedData += `united-states,United States,${c.id},${c.name},${c.lat},${c.lng}\n`;
});
canadaCities.forEach(c => {
    appendedData += `canada,Canada,${c.id},${c.name},${c.lat},${c.lng}\n`;
});
ukCities.forEach(c => {
    appendedData += `united-kingdom,United Kingdom,${c.id},${c.name},${c.lat},${c.lng}\n`;
});
nlCities.forEach(c => {
    appendedData += `netherlands,Netherlands,${c.id},${c.name},${c.lat},${c.lng}\n`;
});

const csvPath = path.join(process.cwd(), 'data', 'csv', 'locations.csv');
const current = fs.readFileSync(csvPath, 'utf-8');

// remove any trailing new lines so we dont inject empty lines
const cleaned = current.replace(/\n$/, '');

fs.writeFileSync(csvPath, cleaned + appendedData);
console.log('Successfully injected Tier 1 locations into locations.csv');
