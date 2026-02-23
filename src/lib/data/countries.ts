// ── International GEO Data — USA, Canada, Netherlands ──────────────────
// High-value n8n automation markets for geo-targeted SEO

export interface CountryCity {
    id: string;
    name: string;
    state?: string;     // US/CA province
    province?: string;  // NL province
    population?: string;
    businessHub?: boolean;
}

export interface Country {
    id: string;
    name: string;
    code: string;       // ISO 3166-1 alpha-2
    locale: string;     // BCP 47
    currency: string;
    timezone: string;
    flag: string;
    wikiId: string;
    description: string;
    cities: CountryCity[];
    keywords: string[];
    industries: string[];
    complianceNote: string;
}

// ── USA ─────────────────────────────────────────────────────────────────
export const usaCities: CountryCity[] = [
    { id: "new-york", name: "New York", state: "New York", businessHub: true },
    { id: "los-angeles", name: "Los Angeles", state: "California", businessHub: true },
    { id: "chicago", name: "Chicago", state: "Illinois", businessHub: true },
    { id: "houston", name: "Houston", state: "Texas", businessHub: true },
    { id: "san-francisco", name: "San Francisco", state: "California", businessHub: true },
    { id: "miami", name: "Miami", state: "Florida", businessHub: true },
    { id: "seattle", name: "Seattle", state: "Washington", businessHub: true },
    { id: "austin", name: "Austin", state: "Texas", businessHub: true },
    { id: "boston", name: "Boston", state: "Massachusetts", businessHub: true },
    { id: "denver", name: "Denver", state: "Colorado", businessHub: true },
    { id: "atlanta", name: "Atlanta", state: "Georgia", businessHub: true },
    { id: "dallas", name: "Dallas", state: "Texas", businessHub: true },
    { id: "phoenix", name: "Phoenix", state: "Arizona" },
    { id: "san-diego", name: "San Diego", state: "California" },
    { id: "washington-dc", name: "Washington D.C.", state: "District of Columbia", businessHub: true },
];

// ── Canada ──────────────────────────────────────────────────────────────
export const canadaCities: CountryCity[] = [
    { id: "toronto", name: "Toronto", state: "Ontario", businessHub: true },
    { id: "vancouver", name: "Vancouver", state: "British Columbia", businessHub: true },
    { id: "montreal", name: "Montreal", state: "Quebec", businessHub: true },
    { id: "calgary", name: "Calgary", state: "Alberta", businessHub: true },
    { id: "ottawa", name: "Ottawa", state: "Ontario", businessHub: true },
    { id: "edmonton", name: "Edmonton", state: "Alberta" },
    { id: "winnipeg", name: "Winnipeg", state: "Manitoba" },
    { id: "mississauga", name: "Mississauga", state: "Ontario" },
    { id: "brampton", name: "Brampton", state: "Ontario" },
    { id: "halifax", name: "Halifax", state: "Nova Scotia" },
];

// ── Netherlands ─────────────────────────────────────────────────────────
export const netherlandsCities: CountryCity[] = [
    { id: "amsterdam", name: "Amsterdam", province: "North Holland", businessHub: true },
    { id: "rotterdam", name: "Rotterdam", province: "South Holland", businessHub: true },
    { id: "the-hague", name: "The Hague", province: "South Holland", businessHub: true },
    { id: "utrecht", name: "Utrecht", province: "Utrecht", businessHub: true },
    { id: "eindhoven", name: "Eindhoven", province: "North Brabant", businessHub: true },
    { id: "groningen", name: "Groningen", province: "Groningen" },
    { id: "tilburg", name: "Tilburg", province: "North Brabant" },
    { id: "almere", name: "Almere", province: "Flevoland" },
    { id: "breda", name: "Breda", province: "North Brabant" },
    { id: "nijmegen", name: "Nijmegen", province: "Gelderland" },
];

// ── Country Definitions ────────────────────────────────────────────────
export const countries: Country[] = [
    {
        id: "usa",
        name: "United States",
        code: "US",
        locale: "en-US",
        currency: "USD",
        timezone: "America/New_York",
        flag: "🇺🇸",
        wikiId: "https://en.wikipedia.org/wiki/United_States",
        description: "n8nera delivers enterprise-grade n8n workflow automation, AI agents, and business process optimization to companies across the United States. From startups in Silicon Valley to enterprises in New York, we help American businesses automate at scale.",
        cities: usaCities,
        keywords: [
            "n8n automation agency USA",
            "n8n developer United States",
            "hire n8n developer USA",
            "n8n workflow automation USA",
            "n8n integrations USA",
            "n8n AI automation USA",
            "automation agency United States",
            "workflow automation agency USA",
            "n8n consulting USA",
            "n8n expert USA",
            "business process automation USA",
            "AI voice agents USA",
            "CRM automation USA",
            "n8n automation services America",
            "best n8n agency USA",
        ],
        industries: ["saas", "ecommerce", "enterprises", "startups", "agencies"],
        complianceNote: "All solutions are SOC 2 Type II compliant and adhere to US data privacy regulations including CCPA and state-level privacy laws.",
    },
    {
        id: "canada",
        name: "Canada",
        code: "CA",
        locale: "en-CA",
        currency: "CAD",
        timezone: "America/Toronto",
        flag: "🇨🇦",
        wikiId: "https://en.wikipedia.org/wiki/Canada",
        description: "n8nera provides premium n8n workflow automation and AI solutions to Canadian businesses. From Toronto's financial district to Vancouver's tech corridor, we empower Canadian companies with intelligent automation.",
        cities: canadaCities,
        keywords: [
            "n8n automation agency Canada",
            "n8n developer Canada",
            "hire n8n developer Canada",
            "n8n workflow automation Canada",
            "n8n integrations Canada",
            "n8n AI automation Canada",
            "automation agency Canada",
            "workflow automation agency Canada",
            "n8n consulting Canada",
            "n8n expert Canada",
            "business process automation Canada",
            "AI voice agents Canada",
            "CRM automation Canada",
            "n8n automation services Canada",
            "best n8n agency Canada",
        ],
        industries: ["enterprises", "saas", "ecommerce", "consultants", "real-estate"],
        complianceNote: "Our solutions comply with PIPEDA (Personal Information Protection and Electronic Documents Act) and provincial privacy legislation including Ontario's FIPPA and Quebec's Law 25.",
    },
    {
        id: "netherlands",
        name: "Netherlands",
        code: "NL",
        locale: "nl-NL",
        currency: "EUR",
        timezone: "Europe/Amsterdam",
        flag: "🇳🇱",
        wikiId: "https://en.wikipedia.org/wiki/Netherlands",
        description: "n8nera serves Dutch businesses with world-class n8n workflow automation and AI integration services. From Amsterdam's startup ecosystem to Rotterdam's logistics hub, we help Netherlands-based companies streamline operations with intelligent automation.",
        cities: netherlandsCities,
        keywords: [
            "n8n automation agency Netherlands",
            "n8n developer Netherlands",
            "hire n8n developer Netherlands",
            "n8n workflow automation Netherlands",
            "n8n integrations Netherlands",
            "n8n AI automation Netherlands",
            "automation agency Netherlands",
            "workflow automation Netherlands",
            "n8n consulting Netherlands",
            "n8n expert Netherlands",
            "n8n automatisering Nederland",
            "workflow automatisering Nederland",
            "AI automatisering Nederland",
            "n8n automation Amsterdam",
            "best n8n agency Europe",
            "n8n agency Holland",
        ],
        industries: ["logistics", "ecommerce", "saas", "enterprises", "agencies"],
        complianceNote: "All solutions are fully GDPR compliant and adhere to the AVG (Algemene Verordening Gegevensbescherming). We offer EU-hosted n8n deployments for data sovereignty requirements.",
    },
];

// ── Helper functions ────────────────────────────────────────────────────
export function getCountryById(id: string): Country | undefined {
    return countries.find(c => c.id === id);
}

export function getCityById(countryId: string, cityId: string): CountryCity | undefined {
    const country = getCountryById(countryId);
    return country?.cities.find(c => c.id === cityId);
}

export function getAllCountryCities(): Array<{ countryId: string; countryName: string; city: CountryCity }> {
    return countries.flatMap(country =>
        country.cities.map(city => ({
            countryId: country.id,
            countryName: country.name,
            city,
        }))
    );
}
