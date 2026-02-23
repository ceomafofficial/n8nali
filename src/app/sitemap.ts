import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { industries, uaeCities } from "@/lib/data/industries";
import { allBlogPosts } from "@/lib/data/blog-all";
import { caseStudies } from "@/lib/data/case-studies";
import { openPositions } from "@/lib/data/careers";
import { usaCities, canadaCities, netherlandsCities } from "@/lib/data/countries";

const BASE = "https://n8nera.tech";

export const dynamic = "force-static";

// ── Semantic SEO 2026: Use realistic lastModified dates ─────────────────
const CONTENT_UPDATED = "2026-02-12T00:00:00.000Z";   // last major content update
const LEGAL_UPDATED = "2025-06-01T00:00:00.000Z";     // legal pages rarely change

const CHUNK_SIZE = 40000;

export async function generateSitemaps() {
    // Core sitemap is ID 0
    const sitemaps = [{ id: 0 }];

    // We estimate around 270,000 URLs for the local expansions (1632 cities * 166 services/skills)
    const locCount = 1632;
    const srvCount = 127;
    const sklCount = 39;
    const totalLocal = (locCount * srvCount) + (locCount * sklCount);

    const programmaticChunks = Math.ceil(totalLocal / CHUNK_SIZE);

    for (let i = 1; i <= programmaticChunks; i++) {
        sitemaps.push({ id: i });
    }
    return sitemaps;
}

export default function sitemap({ id }: { id: string | number }): MetadataRoute.Sitemap {

    const sitemapId = Number(id);

    if (sitemapId === 0) {
        // -----------------------------------------------------------------------
        // Static / main pages — SXO: changeFrequency signals crawl urgency
        // -----------------------------------------------------------------------
        const staticPages: MetadataRoute.Sitemap = [
            { url: `${BASE}/`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 1.0 },
            { url: `${BASE}/services/`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.9 },
            { url: `${BASE}/about-us/`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 0.8 },
            { url: `${BASE}/contact/`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 0.9 },
            { url: `${BASE}/pricing/`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.9 },
            { url: `${BASE}/case-studies/`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.8 },
            { url: `${BASE}/blog/`, lastModified: CONTENT_UPDATED, changeFrequency: "daily", priority: 0.8 },
            { url: `${BASE}/industries/`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 0.8 },
            { url: `${BASE}/uae/`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 0.8 },
            // International GEO landing pages — high-value SEO targets
            { url: `${BASE}/usa/`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.9 },
            { url: `${BASE}/canada/`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.9 },
            { url: `${BASE}/netherlands/`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.9 },
            { url: `${BASE}/faq/`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.7 },
            { url: `${BASE}/careers/`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.6 },
            // Core n8n service pages — high-value AEO targets
            { url: `${BASE}/n8n-automation-agency/`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.9 },
            { url: `${BASE}/n8n-workflow-automation/`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.9 },
            { url: `${BASE}/n8n-integrations/`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.9 },
            { url: `${BASE}/n8n-ai-automation/`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.9 },
            { url: `${BASE}/hire-n8n-developer/`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.9 },
            { url: `${BASE}/looking-for-n8n-developer/`, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 0.9 },
            // Legal
            { url: `${BASE}/terms-of-service/`, lastModified: LEGAL_UPDATED, changeFrequency: "yearly", priority: 0.4 },
            { url: `${BASE}/privacy-policy/`, lastModified: LEGAL_UPDATED, changeFrequency: "yearly", priority: 0.4 },
            { url: `${BASE}/cookie-policy/`, lastModified: LEGAL_UPDATED, changeFrequency: "yearly", priority: 0.4 },
            { url: `${BASE}/security-compliance/`, lastModified: CONTENT_UPDATED, changeFrequency: "monthly", priority: 0.6 },
        ];

        const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
            url: `${BASE}/services/${s.id}/`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: "monthly" as const,
            priority: 0.85,
        }));

        const industryPages: MetadataRoute.Sitemap = industries.map((i) => ({
            url: `${BASE}/industries/${i.id}/`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: "monthly" as const,
            priority: 0.75,
        }));

        const blogPages: MetadataRoute.Sitemap = allBlogPosts.map((p) => ({
            url: `${BASE}/blog/${p.slug}/`,
            lastModified: p.updatedAt || p.publishedAt || CONTENT_UPDATED,
            changeFrequency: "weekly" as const,
            priority: 0.7,
        }));

        const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
            url: `${BASE}/case-studies/${cs.id}/`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: "monthly" as const,
            priority: 0.7,
        }));

        const careerPages: MetadataRoute.Sitemap = openPositions.map((pos) => ({
            url: `${BASE}/careers/${pos.id}/`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: "weekly" as const,
            priority: 0.5,
        }));

        const cityPages: MetadataRoute.Sitemap = uaeCities.map((city) => ({
            url: `${BASE}/uae/${city.id}/`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        }));

        const cityServicePages: MetadataRoute.Sitemap = uaeCities.flatMap((city) =>
            services.map((s) => ({
                url: `${BASE}/uae/${city.id}/${s.id}/`,
                lastModified: CONTENT_UPDATED,
                changeFrequency: "monthly" as const,
                priority: 0.65,
            }))
        );

        const usaCityPages: MetadataRoute.Sitemap = usaCities.map((city) => ({
            url: `${BASE}/usa/${city.id}/`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        }));

        const canadaCityPages: MetadataRoute.Sitemap = canadaCities.map((city) => ({
            url: `${BASE}/canada/${city.id}/`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        }));

        const netherlandsCityPages: MetadataRoute.Sitemap = netherlandsCities.map((city) => ({
            url: `${BASE}/netherlands/${city.id}/`,
            lastModified: CONTENT_UPDATED,
            changeFrequency: "monthly" as const,
            priority: 0.8,
        }));

        const fs = require('fs');
        const path = require('path');
        let generatedBasePages: MetadataRoute.Sitemap = [];
        try {
            const batchPath = path.join(process.cwd(), 'data/generated_pages/batch_1.json');
            if (fs.existsSync(batchPath)) {
                const pages = JSON.parse(fs.readFileSync(batchPath, 'utf8'));
                generatedBasePages = pages.map((p: any) => ({
                    url: `${BASE}/p/${p.url}/`,
                    lastModified: CONTENT_UPDATED,
                    changeFrequency: "monthly" as const,
                    priority: 0.7,
                }));
            }
        } catch (e) { }

        return [
            ...staticPages,
            ...servicePages,
            ...industryPages,
            ...blogPages,
            ...caseStudyPages,
            ...careerPages,
            ...cityPages,
            ...cityServicePages,
            ...usaCityPages,
            ...canadaCityPages,
            ...netherlandsCityPages,
            ...generatedBasePages
        ];
    }

    // -----------------------------------------------------------------------
    // Localized Programmatic SEO Generation (id > 0 Chunks)
    // -----------------------------------------------------------------------
    const { getLocations, getServices, getSkills } = require('@/lib/csv');
    let allGeneratedUrls: MetadataRoute.Sitemap = [];

    try {
        const locationData = getLocations();
        const serviceData = getServices();
        const skillData = getSkills();

        locationData.forEach((loc: any) => {
            serviceData.forEach((srv: any) => {
                allGeneratedUrls.push({
                    url: `${BASE}/${loc.country_slug}/${loc.city_slug}/${srv.service_slug}/`,
                    lastModified: CONTENT_UPDATED,
                    changeFrequency: "monthly" as const,
                    priority: 0.75,
                });
            });

            skillData.forEach((skl: any) => {
                allGeneratedUrls.push({
                    url: `${BASE}/${loc.country_slug}/${loc.city_slug}/skills/${skl.skill_slug}/`,
                    lastModified: CONTENT_UPDATED,
                    changeFrequency: "monthly" as const,
                    priority: 0.65,
                });
            });
        });
    } catch (e) { }

    const startIndex = (sitemapId - 1) * CHUNK_SIZE;
    const endIndex = startIndex + CHUNK_SIZE;

    return allGeneratedUrls.slice(startIndex, endIndex);
}