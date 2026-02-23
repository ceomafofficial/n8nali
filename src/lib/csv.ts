import fs from 'fs';
import path from 'path';

export interface Location {
    country_slug: string;
    country_name: string;
    city_slug: string;
    city_name: string;
    lat: string;
    lng: string;
}

export interface Service {
    service_slug: string;
    service_name: string;
    category: string;
    short_description: string;
}

export interface Skill {
    skill_slug: string;
    skill_name: string;
    category: string;
    short_description: string;
}

function parseCSV<T>(filePath: string): T[] {
    if (!fs.existsSync(filePath)) return [];
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split('\n').filter(line => line.trim() !== '');
    if (lines.length < 2) return [];

    const headers = (lines[0] || '').split(',').map(h => h.trim());
    const data: T[] = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i] || '';
        const cols = line.split(',').map(col => col.trim());
        if (cols.length === headers.length) {
            const obj: any = {};
            for (let j = 0; j < headers.length; j++) {
                const header = headers[j];
                if (!header) continue;
                let val = cols[j] || '';

                if (val.startsWith('"') && val.endsWith('"')) {
                    val = val.substring(1, val.length - 1);
                }
                obj[header] = val;
            }
            data.push(obj as T);
        }
    }

    return data;
}

export function getLocations(): Location[] {
    return parseCSV<Location>(path.join(process.cwd(), 'data/csv/locations.csv'));
}

export function getServices(): Service[] {
    return parseCSV<Service>(path.join(process.cwd(), 'data/csv/services.csv'));
}

export function getSkills(): Skill[] {
    return parseCSV<Skill>(path.join(process.cwd(), 'data/csv/skills.csv'));
}
