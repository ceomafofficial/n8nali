import { services } from "@/lib/data/services";
import { blogPosts } from "@/lib/data/blog";
import { additionalBlogPosts } from "@/lib/data/blog-additional";
import { selfHostN8nPost } from "@/lib/data/blog-selfhost-n8n";
import { n8nVsZapierPost } from "@/lib/data/blog-n8n-vs-zapier";
import { n8nVsMakePost } from "@/lib/data/blog-n8n-vs-make";
import { n8nEcommercePost } from "@/lib/data/blog-n8n-ecommerce";
import { industries } from "@/lib/data/industries";

export interface SearchResult {
    title: string;
    description: string;
    href: string;
    category: "Service" | "Blog" | "Industry" | "Page";
}

/** Static pages that should be searchable but aren't in a data file. */
const staticPages: SearchResult[] = [
    { title: "Home", description: "n8nera – AI & Automation Agency for UAE Businesses", href: "/", category: "Page" },
    { title: "About Us", description: "Learn about n8nera, our mission, and our team.", href: "/about-us", category: "Page" },
    { title: "Contact", description: "Get in touch with us for a free consultation.", href: "/contact", category: "Page" },
    { title: "Pricing", description: "Explore our automation pricing plans.", href: "/pricing", category: "Page" },
    { title: "Case Studies", description: "See real automation success stories.", href: "/case-studies", category: "Page" },
    { title: "Careers", description: "Join the n8nera team.", href: "/careers", category: "Page" },
    { title: "FAQ", description: "Frequently asked questions about n8nera and automation.", href: "/faq", category: "Page" },
];

/** Build the full searchable index (called once, then cached). */
function buildIndex(): SearchResult[] {
    const results: SearchResult[] = [];

    // Services
    for (const s of services) {
        results.push({
            title: s.title,
            description: s.description,
            href: `/services/${s.id}`,
            category: "Service",
        });
    }

    // Blog posts
    const allPosts = [...blogPosts, ...additionalBlogPosts, selfHostN8nPost, n8nVsZapierPost, n8nVsMakePost, n8nEcommercePost];
    for (const p of allPosts) {
        results.push({
            title: p.title,
            description: p.excerpt,
            href: `/blog/${p.slug}`,
            category: "Blog",
        });
    }

    // Industries
    for (const i of industries) {
        results.push({
            title: i.name,
            description: i.description,
            href: `/industries/${i.id}`,
            category: "Industry",
        });
    }

    // Static pages
    results.push(...staticPages);

    return results;
}

let cachedIndex: SearchResult[] | null = null;

function getIndex(): SearchResult[] {
    if (!cachedIndex) {
        cachedIndex = buildIndex();
    }
    return cachedIndex;
}

/**
 * Search the site index.
 * Simple case-insensitive substring match across title + description.
 * Returns at most `limit` results.
 */
export function search(query: string, limit = 8): SearchResult[] {
    if (!query.trim()) return [];

    const terms = query
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean);

    const index = getIndex();

    const scored: { result: SearchResult; score: number }[] = [];

    for (const item of index) {
        const haystack = `${item.title} ${item.description} ${item.category}`.toLowerCase();
        let score = 0;

        for (const term of terms) {
            if (item.title.toLowerCase().includes(term)) {
                score += 3; // title match weighted higher
            } else if (haystack.includes(term)) {
                score += 1;
            }
        }

        if (score > 0) {
            scored.push({ result: item, score });
        }
    }

    scored.sort((a, b) => b.score - a.score);

    return scored.slice(0, limit).map((s) => s.result);
}
