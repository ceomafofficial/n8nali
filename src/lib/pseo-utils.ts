import fs from 'fs/promises';
import path from 'path';
import { cache } from 'react';
import { Location, Service, Skill, getLocations } from './csv';

/**
 * Deterministic seeded random number generator.
 * This guarantees that a specific city+service combination ALWAYS gets the exact same
 * spintax variation, preventing SEO index thrashing across builds.
 */
function seededRandom(seedStr: string) {
    let h = 1779033703 ^ seedStr.length;
    for (let i = 0; i < seedStr.length; i++) {
        h = Math.imul(h ^ seedStr.charCodeAt(i), 3432918353);
        h = h << 13 | h >>> 19;
    }
    return function() {
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        return ((h ^= h >>> 16) >>> 0) / 4294967296;
    };
}

/**
 * Parses spintax like {A|B|C} deterministically.
 */
export function parseSpintax(text: string, seed: string): string {
    const random = seededRandom(seed);
    const spintaxRegex = /\{([^{}]+)\}/g;
    
    let parsedText = text;
    let match;
    
    // Iteratively resolve spintax (supports simple nesting if processed multiple times, but keeping it flat for performance)
    while ((match = spintaxRegex.exec(parsedText)) !== null) {
        const options = (match[1] || '').split('|');
        const choiceIndex = Math.floor(random() * options.length);
        const choice = options[choiceIndex] || options[0];
        parsedText = parsedText.substring(0, match.index) + choice + parsedText.substring(match.index + match[0].length);
        // Reset regex index because we modified the string
        spintaxRegex.lastIndex = 0;
    }
    
    return parsedText;
}

const getTemplate = cache(async (templateName: string) => {
    const templatePath = path.join(process.cwd(), `src/content/templates/${templateName}`);
    try {
        return await fs.readFile(templatePath, 'utf-8');
    } catch (e) {
        console.error(`Failed to load template ${templateName}`, e);
        return '';
    }
});

interface PseoData {
    loc: Location;
    item: Service | Skill;
    type: 'service' | 'skill';
}

export async function processPseoTemplate(data: PseoData): Promise<{ metadata: Record<string, string>, content: string }> {
    const templateName = data.type === 'service' ? 'Agent.md' : 'Skill.md';
    let rawContent = await getTemplate(templateName);

    const srv = data.item as Service;
    const skl = data.item as Skill;
    
    const itemName = data.type === 'service' ? srv.service_name : skl.skill_name;
    const itemSlug = data.type === 'service' ? srv.service_slug : skl.skill_slug;
    const itemDesc = data.item.short_description || '';
    
    let integratedTool = '';
    if (data.type === 'skill') {
        integratedTool = skl.category;
        const lowerName = skl.skill_name.toLowerCase();
        if (lowerName.includes('whatsapp')) integratedTool = 'WhatsApp';
        else if (lowerName.includes('stripe')) integratedTool = 'Stripe';
        else if (lowerName.includes('slack')) integratedTool = 'Slack';
        else if (lowerName.includes('hubspot')) integratedTool = 'HubSpot';
        else if (lowerName.includes('shopify')) integratedTool = 'Shopify';
    }

    // 1. Variable Replacement
    let rendered = rawContent
        .replace(/{service_name}/g, itemName)
        .replace(/{skill_name}/g, itemName)
        .replace(/{city_name}/g, data.loc.city_name)
        .replace(/{country_name}/g, data.loc.country_name)
        .replace(/{service_slug}/g, itemSlug)
        .replace(/{skill_slug}/g, itemSlug)
        .replace(/{city_slug}/g, data.loc.city_slug)
        .replace(/{country_slug}/g, data.loc.country_slug)
        .replace(/{short_description}/g, itemDesc)
        .replace(/{skill_short_description}/g, itemDesc)
        .replace(/{integrated_tool}/g, integratedTool);

    // 2. Spintax Resolution (using city+slug as seed to guarantee stability)
    const seed = `${data.loc.city_slug}-${itemSlug}`;
    rendered = parseSpintax(rendered, seed);

    // 3. Extract Frontmatter
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = rendered.match(frontmatterRegex);

    let metadata: Record<string, string> = {};
    let markdownContent = rendered;

    if (match) {
        const frontmatterStr = match[1] || '';
        markdownContent = match[2] || '';

        frontmatterStr.split('\n').forEach(line => {
            const colonIdx = line.indexOf(':');
            if (colonIdx !== -1) {
                const key = line.substring(0, colonIdx).trim();
                let val = line.substring(colonIdx + 1).trim();
                if (val.startsWith('"') && val.endsWith('"')) {
                    val = val.substring(1, val.length - 1);
                }
                metadata[key] = val;
            }
        });
    }

    return { metadata, content: markdownContent };
}

export function resolveLocation(countryParam: string, cityParam: string): Location | undefined {
    let searchCountry = countryParam;
    if (searchCountry === 'usa') searchCountry = 'united-states';
    if (searchCountry === 'uk') searchCountry = 'united-kingdom';
    
    const locations = getLocations();
    return locations.find(l => l.country_slug === searchCountry && l.city_slug === cityParam);
}
