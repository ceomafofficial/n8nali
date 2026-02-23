import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowRight, Zap, Target, Users, Award, Globe, Shield } from "lucide-react";
import { aboutPageSchema, getProfilePageSchema, founderSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "About n8nera — 200+ Workflows Built, 99.8% Satisfaction",
    description: "Meet the team behind 200+ production n8n workflows. Certified n8n partner since 2021. 99.8% client satisfaction. Trusted by 100+ businesses in 4 countries. See why Fortune 500 companies choose us →",
    keywords: [
        "about n8nera",
        "n8n automation agency",
        "n8n certified partner",
        "automation experts",
        "workflow automation team",
        "n8n agency reviews",
    ],
    openGraph: {
        title: "About n8nera — The Team Behind 200+ n8n Workflows",
        description: "Certified n8n partner. 200+ workflows. 99.8% satisfaction. See why 100+ businesses trust us with their automation.",
        url: "https://n8nera.tech/about-us/",
        type: "profile",
    },
    twitter: {
        card: "summary_large_image",
        site: "@n8nera",
        creator: "@n8nera",
        title: "About n8nera — 200+ Workflows Built, 99.8% Satisfaction",
        description: "Certified n8n partner. Meet the team behind 200+ workflows for 100+ businesses across USA, UAE, Canada & Netherlands.",
    },
    alternates: {
        canonical: "https://n8nera.tech/about-us/",
    },
};

const values = [
    { icon: Target, title: "Results-Driven", description: "Every automation we build is measured by the value it delivers to your business." },
    { icon: Zap, title: "Technical Excellence", description: "We stay at the cutting edge of automation and AI technology." },
    { icon: Users, title: "Partnership Mindset", description: "We become an extension of your team, not just a vendor." },
    { icon: Shield, title: "Security First", description: "Enterprise-grade security is built into everything we do." },
    { icon: Globe, title: "Global Understanding", description: "Deep knowledge of business landscapes across USA, UAE, Canada & Netherlands." },
    { icon: Award, title: "Quality Obsessed", description: "We don't ship until it's perfect. No compromises." },
];

const stats = [
    { value: "500+", label: "Automations Built" },
    { value: "50+", label: "Happy Clients" },
    { value: "95%", label: "Client Retention" },
    { value: "24/7", label: "Support Available" },
];

export default function AboutPage() {
    // 2026 Semantic SEO: ProfilePage + founder Person + BreadcrumbList
    const aboutSchema = {
        "@context": "https://schema.org",
        "@graph": [
            aboutPageSchema,
            getProfilePageSchema({
                url: "https://n8nera.tech/about-us",
                name: "About n8nera — Certified n8n Automation & AI Agency",
                description: "Learn about n8nera, a certified n8n implementation partner serving businesses across USA, UAE, Canada & Netherlands with workflow automation, AI voice agents, and business process optimization.",
                dateModified: "2026-02-12",
            }),
            founderSchema,
            getBreadcrumbSchema([
                { name: "Home", url: "https://n8nera.tech" },
                { name: "About Us", url: "https://n8nera.tech/about-us" },
            ]),
        ],
    };

    return (
        <div className="pt-20">
            {/* Schema Markup — ProfilePage + E-E-A-T */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(aboutSchema),
                }}
            />

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-premium-pattern" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center max-w-4xl mx-auto">
                        <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">About n8nera</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                            We Build Systems That <span className="text-gradient">Run Your Business</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 mb-8">
                            n8nera is a premium automation and AI agency helping businesses across the USA, UAE, Canada & Netherlands eliminate manual work,
                            reduce costs, and scale operations through intelligent automation.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Stats */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-5xl mx-auto px-4">
                    <AnimatedSection>
                        <div className="glass-card p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {stats.map((stat, index) => (
                                <div key={index}>
                                    <div className="text-3xl md:text-4xl font-display font-bold text-gradient-purple mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Our Story */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Our Story</h2>
                        <div className="glass-card p-8 space-y-6 text-gray-400">
                            <p>
                                n8nera was founded with a clear mission: to bring enterprise-grade automation capabilities to businesses of all sizes worldwide.
                            </p>
                            <p>
                                We recognized that while large enterprises had access to sophisticated automation tools and dedicated teams,
                                SMEs and growing businesses were left behind—stuck with manual processes that consumed time and created errors.
                            </p>
                            <p>
                                Today, n8nera is the go-to automation partner for businesses across the USA, UAE, Canada & Netherlands.
                                Based in Pakistan, we serve clients globally and fully remotely — delivering the same quality, speed, and results
                                without the overhead of a local office. Our expertise in n8n workflow automation, AI voice agents, and intelligent system design helps our clients achieve
                                operational excellence without the enterprise-level investment.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Our Values */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">Our Values</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide everything we do.</p>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent-500/30 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-4">
                                        <value.icon className="w-6 h-6 text-accent-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                                    <p className="text-sm text-gray-400">{value.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-950/50 via-dark-950 to-primary-950/50" />
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl font-display font-bold text-white mb-4">Ready to Work Together?</h2>
                        <p className="text-lg text-gray-400 mb-8">Let&apos;s discuss how n8nera can transform your business operations.</p>
                        <Link href="/contact" className="btn-primary">
                            Book Free Consultation <ArrowRight className="w-5 h-5" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
