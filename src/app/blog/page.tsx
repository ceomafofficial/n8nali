import { Metadata } from "next";
import { allBlogPosts } from "@/lib/data/blog-all";
import BlogPageClient from "./BlogPageClient";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "n8n Automation Blog — Tutorials, Guides & AI Tips [2026]",
    description:
        "Learn n8n automation from certified experts. Step-by-step tutorials, workflow templates, AI integration guides & ROI strategies. Updated weekly. 50+ articles from 200+ implementation experience →",
    keywords: ["n8n blog", "n8n tutorials", "n8n automation guides", "workflow automation tips", "AI automation articles", "n8n workflow templates"],
    openGraph: {
        title: "n8n Automation Blog — Learn from 200+ Implementations | n8nera",
        description:
            "Step-by-step n8n tutorials, AI guides & workflow templates from certified experts. Updated weekly.",
        url: "https://n8nera.tech/blog/",
        type: "website",
    },
    alternates: {
        canonical: "https://n8nera.tech/blog/",
    },
};

const allPosts = allBlogPosts;

export default function BlogPage() {
    const blogCollectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "n8nera Blog & Insights - Automation Knowledge Hub",
        description: "Expert insights, guides, and strategies on workflow automation, AI, and business process optimization.",
        url: "https://n8nera.tech/blog/",
        publisher: {
            "@type": "Organization",
            name: "n8nera",
            url: "https://n8nera.tech",
        },
        mainEntity: {
            "@type": "ItemList",
            numberOfItems: allPosts.length,
            itemListElement: allPosts.slice(0, 20).map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                    "@type": "BlogPosting",
                    headline: post.title,
                    description: post.excerpt,
                    url: `https://n8nera.tech/blog/${post.slug}/`,
                    datePublished: post.publishedAt,
                    dateModified: post.updatedAt,
                    author: { "@type": "Person", name: post.author.name },
                    publisher: { "@type": "Organization", name: "n8nera" },
                },
            })),
        },
    };

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: "Home", url: "https://n8nera.tech" },
        { name: "Blog", url: "https://n8nera.tech/blog" },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <BlogPageClient allPosts={allPosts} />
        </>
    );
}
