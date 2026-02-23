import fs from "fs";
import path from "path";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Read the generated JSON file
function getPageData(slug: string) {
    const dataPath = path.join(process.cwd(), "data", "generated_pages", "batch_1.json");
    if (!fs.existsSync(dataPath)) return null;
    const pages = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    return pages.find((p: any) => p.url === slug) || null;
}

export async function generateStaticParams() {
    const dataPath = path.join(process.cwd(), "data", "generated_pages", "batch_1.json");
    if (!fs.existsSync(dataPath)) return [];

    const pages = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    return pages.map((page: any) => ({
        slug: page.url,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const page = getPageData(resolvedParams.slug);
    if (!page) return {};

    return {
        title: page.seo.title,
        description: page.seo.meta_description,
        keywords: [page.seo.primary_keyword, ...page.seo.secondary_keywords],
        alternates: {
            canonical: `https://n8nera.tech/p/${page.url}`,
        },
        openGraph: {
            title: page.seo.title,
            description: page.seo.meta_description,
            type: "article",
            url: `https://n8nera.tech/p/${page.url}`
        }
    };
}

export default async function ProgrammaticSeoPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const page = getPageData(resolvedParams.slug);

    if (!page) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": page.schema.type,
        "name": page.seo.title,
        "description": page.seo.meta_description,
        "url": `https://n8nera.tech/p/${page.url}`,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "128"
        }
    };

    const faqLd = page.content.faq && page.content.faq.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": page.content.faq.map((f: any) => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
            }
        }))
    } : null;

    return (
        <div className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-premium-pattern" />
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center max-w-4xl mx-auto">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-accent-400 bg-accent-400/10 rounded-full uppercase tracking-wider mb-6 border border-accent-400/20">
                            {page.playbook_type} Resource
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                            {page.content.h1}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                            {page.content.introduction}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">
                                {page.content.call_to_action} <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Content Sections */}
            <section className="relative py-20 overflow-hidden bg-dark-900/50">
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {page.content.sections.map((section: any, idx: number) => (
                        <AnimatedSection key={idx} delay={idx * 0.1}>
                            <article className="prose prose-invert prose-lg max-w-none mb-16">
                                <h2 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-accent-400" />
                                    </div>
                                    {section.heading}
                                </h2>
                                <div className="glass-card p-8 text-gray-300 leading-relaxed space-y-4">
                                    {section.body.split('. ').map((sentence: string, sIdx: number) => (
                                        sentence.trim() ? <p key={sIdx}>{sentence.trim() + '.'}</p> : null
                                    ))}
                                </div>
                            </article>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            {page.content.faq && page.content.faq.length > 0 && (
                <section className="relative py-20 overflow-hidden bg-dark-950">
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-3xl font-display font-bold text-white mb-4">
                                Frequently Asked Questions
                            </h2>
                        </AnimatedSection>
                        <div className="space-y-4">
                            {page.content.faq.map((faq: any, index: number) => (
                                <AnimatedSection key={index} delay={index * 0.05}>
                                    <details className="group glass-card overflow-hidden">
                                        <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-semibold hover:text-accent-300 transition-colors">
                                            {faq.question}
                                            <ArrowRight className="w-5 h-5 text-accent-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-4" />
                                        </summary>
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </details>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Internal Links / Related Pages */}
            {page.related_pages && page.related_pages.length > 0 && (
                <section className="relative py-16 overflow-hidden bg-dark-900 border-t border-white/5">
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h3 className="text-xl font-semibold text-white mb-6">Keep reading</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {page.related_pages.map((relatedUrl: string, idx: number) => (
                                <Link key={idx} href={`/p/${relatedUrl}`} className="px-4 py-2 rounded-lg bg-dark-800 border border-white/10 text-gray-300 hover:text-white hover:border-accent-500/50 transition-colors">
                                    {relatedUrl.replace(/-/g, ' ')}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
