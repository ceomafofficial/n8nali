
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { caseStudies } from "@/lib/data/case-studies";
import { getBreadcrumbSchema, getSpeakableSchema } from "@/lib/schema";
import {
    ArrowRight,
    Zap,
    Layers,
    Cpu,
    Code2,
    Key,
} from "lucide-react";

interface CaseStudyProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.id,
    }));
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.id === slug);

    if (!study) {
        return { title: "Case Study Not Found" };
    }

    return {
        title: `${study.title} - Case Study`,
        description: study.shortDescription,
        keywords: [study.category, "n8n workflow", "automation case study", "AI agent"],
        openGraph: {
            title: `${study.title} | n8nera Case Studies`,
            description: study.shortDescription,
            url: `https://n8nera.tech/case-studies/${slug}/`,
            type: "article",
        },
        alternates: {
            canonical: `https://n8nera.tech/case-studies/${slug}/`,
        },
    };
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.id === slug);

    if (!study) {
        notFound();
    }

    const caseStudySchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": `https://n8nera.tech/case-studies/${slug}/#article`,
                headline: study.title,
                description: study.shortDescription,
                image: study.image ? `https://n8nera.tech${study.image}` : "https://n8nera.tech/og-image.webp",
                author: {
                    "@type": "Organization",
                    name: "n8nera",
                    url: "https://n8nera.tech",
                },
                publisher: {
                    "@type": "Organization",
                    name: "n8nera",
                    logo: { "@type": "ImageObject", url: "https://n8nera.tech/logo.webp" },
                },
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": `https://n8nera.tech/case-studies/${slug}/`,
                },
                about: {
                    "@type": "Thing",
                    name: study.category,
                },
                articleSection: study.category,
                keywords: [study.category, study.industry, "n8n workflow", "automation case study"].join(", "),
                speakable: getSpeakableSchema(`https://n8nera.tech/case-studies/${slug}/`),
            },
            getBreadcrumbSchema([
                { name: "Home", url: "https://n8nera.tech" },
                { name: "Case Studies", url: "https://n8nera.tech/case-studies/" },
                { name: study.title, url: `https://n8nera.tech/case-studies/${slug}/` },
            ]),
        ],
    };

    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
        />
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-premium-pattern" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                            <Link href="/case-studies" className="hover:text-white transition-colors">
                                Case Studies
                            </Link>
                            <span>/</span>
                            <span className="text-white">{study.title}</span>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent-500/10 text-accent-400 border border-accent-500/20 mb-6">
                                    {study.category}
                                </span>
                                <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                                    {study.title}
                                </h1>
                                <p className="text-lg text-gray-400 mb-8">
                                    {study.fullDescription}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/contact" className="btn-primary">
                                        {"Build This For Me"}
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <Link href="#workflow" className="btn-secondary">
                                        {"View Workflow"}
                                        <Layers className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {study.results.map((result, i) => (
                                    <div key={i} className="glass-card p-6 text-center">
                                        <div className="text-3xl font-bold text-gradient-purple mb-1">
                                            {result.metric}
                                        </div>
                                        <div className="text-sm text-gray-400">
                                            {result.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Workflow Visual Section */}
            <section id="workflow" className="relative py-20 overflow-hidden bg-white/[0.02]">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <h2 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                            <Layers className="w-6 h-6 text-accent-400" />
                            Workflow Architecture
                        </h2>
                        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl glass-card p-2">
                            <div className="relative w-full h-full rounded-xl overflow-hidden bg-dark-900">
                                <Image
                                    src={study.image}
                                    alt="n8n Workflow Diagram"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-4">
                            Visual representation of the n8n automation flow
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Problem / Solution */}
                            <div className="space-y-8">
                                <div className="glass-card p-8 bg-red-500/5 border-red-500/10">
                                    <h3 className="text-xl font-semibold text-white mb-4">The Challenge</h3>
                                    <p className="text-gray-400">{study.challenge}</p>
                                </div>
                                <div className="glass-card p-8 bg-emerald-500/5 border-emerald-500/10">
                                    <h3 className="text-xl font-semibold text-white mb-4">The Solution</h3>
                                    <p className="text-gray-400">{study.solution}</p>
                                </div>
                            </div>

                            {/* Features List */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                                <div className="space-y-6">
                                    {study.keyFeatures.map((feature, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                                                {feature.icon ? <feature.icon className="w-6 h-6 text-accent-400" /> : <Zap className="w-6 h-6 text-accent-400" />}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-white mb-1">
                                                    {feature.title}
                                                </h4>
                                                <p className="text-gray-400 text-sm">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Technical Details Section */}
            <section className="relative py-20 overflow-hidden bg-dark-900/50">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <h2 className="text-2xl font-display font-bold text-white mb-12 text-center">
                            Technical Deep Dive
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {study.nodesUsed.map((node, i) => (
                                <div key={i} className="glass-card p-6 border border-white/5 hover:border-accent-500/30 transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                                        <Cpu className="w-5 h-5 text-gray-300" />
                                    </div>
                                    <h4 className="font-semibold text-white mb-2">{node.name}</h4>
                                    <p className="text-xs text-gray-400">{node.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Prerequisites */}
                            <div className="glass-card p-8">
                                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                    <Key className="w-5 h-5 text-accent-400" />
                                    Prerequisites
                                </h3>
                                <ul className="space-y-3">
                                    {study.prerequisites.map((req, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Implementation Steps */}
                            <div className="glass-card p-8">
                                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                    <Code2 className="w-5 h-5 text-accent-400" />
                                    How It Works
                                </h3>
                                <ol className="space-y-4">
                                    {study.instructions.map((step, i) => (
                                        <li key={i} className="flex gap-4">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono text-accent-400">
                                                {i + 1}
                                            </span>
                                            <p className="text-sm text-gray-300 pt-0.5">{step}</p>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>

                    </AnimatedSection>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-950/50 via-dark-950 to-primary-950/50" />
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            Need this exact workflow?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            We can deploy and customize this agent for your specific business needs in less than 48 hours.
                        </p>
                        <Link href="/contact" className="btn-primary">
                            Get This Agent <ArrowRight className="w-5 h-5" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
        </>
    );
}
