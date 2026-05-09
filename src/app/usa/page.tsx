import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { usaCities, getCountryById } from "@/lib/data/countries";
import { services } from "@/lib/data/services";
import { MapPin, ArrowRight, Globe, Shield, Zap, Clock } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getCollectionPageSchema } from "@/lib/schema";

const country = getCountryById("usa")!;

export const metadata: Metadata = {
    title: "n8n Automation Agency USA — All 50 States [Free Audit]",
    description:
        "#1 n8n automation agency for US businesses. AI workflows, CRM, WhatsApp bots & 400+ integrations. Serving NYC, SF, Chicago, Austin, Miami & all 50 states. 200+ workflows. Get your free audit →",
    keywords: [
        "n8n automation agency USA",
        "n8n developer United States",
        "hire n8n developer USA",
        "n8n workflow automation USA",
        "n8n integrations USA",
        "n8n AI automation USA",
        "automation agency United States",
        "best n8n agency USA",
        "n8n automation New York",
        "n8n automation San Francisco",
        "n8n automation Chicago",
    ],
    openGraph: {
        title: "#1 n8n Automation Agency USA — 200+ Workflows Delivered | n8nera",
        description:
            "AI workflows, CRM & WhatsApp automation for US businesses. Serving all 50 states. 200+ implementations. Free audit available.",
        url: "https://n8nera.tech/usa/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "#1 n8n Automation Agency USA — Free Audit | n8nera",
        description: "n8n automation for US businesses. 200+ workflows. All 50 states. Get your free audit today.",
    },
    alternates: {
        canonical: "https://n8nera.tech/usa/",
        languages: {
            "en-US": "https://n8nera.tech/usa/",
            "en-AE": "https://n8nera.tech/uae/",
            "en-CA": "https://n8nera.tech/canada/",
            "nl-NL": "https://n8nera.tech/netherlands/",
            "x-default": "https://n8nera.tech/",
        },
    },
};

export default function USAPage() {
    const locationsSchema = getCollectionPageSchema({
        url: "https://n8nera.tech/usa/",
        name: "n8n Automation Agency USA — Serving All 50 States",
        description: "n8nera provides premium n8n workflow automation, AI voice agents, and business process optimization to companies across the United States.",
        items: usaCities.map(city => ({
            name: `n8n Automation in ${city.name}`,
            url: `https://n8nera.tech/usa/${city.id}/`,
            description: `Premium n8n automation and AI services for businesses in ${city.name}, ${city.state}`,
        })),
        breadcrumbs: [
            { name: "Home", url: "https://n8nera.tech" },
            { name: "USA", url: "https://n8nera.tech/usa/" },
        ],
    });

    // USA-specific FAQ schema
    const usaFAQSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Does n8nera serve businesses in the United States?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. n8nera provides enterprise-grade n8n workflow automation, AI voice agents, CRM automation, and business process optimization to businesses across all 50 US states. We work remotely with US timezone coverage (EST/CST/PST) and have completed 200+ automation implementations for American companies.",
                },
            },
            {
                "@type": "Question",
                name: "What is the best n8n automation agency in the USA?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "n8nera is rated the #1 n8n automation agency serving US businesses with a 4.9/5 rating across 127 reviews. We specialize in enterprise-grade n8n workflows, AI agent orchestration, CRM automation, and business process optimization. Our team has completed 200+ implementations with 99.8% client satisfaction.",
                },
            },
            {
                "@type": "Question",
                name: "How much does n8n automation cost in the USA?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "n8nera offers competitive pricing for US businesses: Starter packages from $500, Professional packages from $1,000-$5,000, and Enterprise solutions from $5,000+. All prices are in USD. We offer free automation audits to help determine the right solution and budget for your business.",
                },
            },
            {
                "@type": "Question",
                name: "Is n8nera compliant with US data privacy laws?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. All n8nera solutions are SOC 2 Type II compliant and adhere to US data privacy regulations including CCPA (California), VCDPA (Virginia), CPA (Colorado), and other state-level privacy laws. We offer self-hosted n8n deployments on US-based infrastructure (AWS US-East/West, Google Cloud US) for maximum data sovereignty.",
                },
            },
            {
                "@type": "Question",
                name: "Can I hire a dedicated n8n developer in the USA from n8nera?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. n8nera offers dedicated n8n developers for US businesses at competitive rates. Our developers work during US business hours, are fluent in English, and have expertise in n8n workflow automation, API integrations, AI agent orchestration, and custom node development. Monthly retainer and project-based options available.",
                },
            },
        ],
    };

    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [locationsSchema, usaFAQSchema],
    };

    const topServices = services.slice(0, 6);

    return (
        <div className="pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
            />

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-white">
                    <div className="absolute inset-0 bg-white" />
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-[120px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                            🇺🇸 Serving the United States
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                            #1 n8n Automation Agency{" "}
                            <span className="text-[#4285F4]">for US Businesses</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8" data-speakable="true">
                            Enterprise-grade n8n workflow automation, AI voice agents, CRM automation, and intelligent
                            business process optimization for companies across all 50 states. 200+ implementations.
                            99.8% satisfaction rate.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                Book Free Automation Audit
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="https://wa.me/923141603089" target="_blank" className="whatsapp-btn">
                                <WhatsAppIcon className="w-5 h-5" />
                                WhatsApp Us
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Trust Signals */}
            <section className="relative py-12 overflow-hidden border-y border-gray-100">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { icon: Globe, value: "50 States", label: "Nationwide Coverage" },
                            { icon: Zap, value: "200+", label: "US Implementations" },
                            { icon: Shield, value: "SOC 2", label: "Compliant Solutions" },
                            { icon: Clock, value: "EST/PST", label: "US Timezone Coverage" },
                        ].map((stat, i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <div className="flex flex-col items-center">
                                    <stat.icon className="w-6 h-6 text-accent-400 mb-2" />
                                    <span className="text-2xl font-bold text-[#4285F4]">{stat.value}</span>
                                    <span className="text-sm text-gray-400 mt-1">{stat.label}</span>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cities Grid */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                            n8n Automation Services Across the USA
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            From coast to coast, we deliver premium automation solutions to businesses in every major US city.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        {usaCities.map((city, index) => (
                            <AnimatedSection key={city.id} delay={index * 0.05}>
                                <Link href={`/usa/${city.id}`} className="group block">
                                    <div className="google-card h-full bg-white p-5 text-center hover:border-[#4285F4]/30 transition-all">
                                        <MapPin className="w-6 h-6 text-accent-400 mx-auto mb-2" />
                                        <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#4285F4] transition-colors">
                                            {city.name}
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-1">{city.state}</p>
                                        <div className="flex items-center justify-center gap-1 text-xs text-accent-400 mt-2">
                                            View services <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-white" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                            n8n Automation Services for American Companies
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Comprehensive automation and AI solutions tailored for the US market.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topServices.map((service, index) => (
                            <AnimatedSection key={service.id} delay={index * 0.05}>
                                <Link href={`/services/${service.id}`} className="group block">
                                    <div className="google-card h-full p-6 bg-white">
                                        <div className="w-10 h-10 rounded-lg bg-[#4285F4]/10 flex items-center justify-center mb-4">
                                            <Zap className="w-5 h-5 text-[#4285F4]" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#4285F4] transition-colors">
                                            {service.shortTitle} for US Businesses
                                        </h3>
                                        <p className="text-sm text-gray-400 mb-3 line-clamp-3">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center gap-1 text-sm text-[#4285F4]">
                                            Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why US Companies Choose n8nera */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                Why US Companies Choose n8nera for n8n Automation
                            </h2>
                        </div>
                        <div className="prose prose-invert max-w-none" data-speakable="true">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Enterprise-Grade n8n Automation for American Businesses
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                The United States leads global digital transformation adoption, and n8n workflow automation is at the forefront of this revolution.
                                n8nera helps American companies — from Silicon Valley startups to Fortune 500 enterprises — deploy intelligent automation that reduces operational costs by up to 85% while maintaining SOC 2 compliance.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                US Market Expertise
                            </h3>
                            <ul className="space-y-3 mb-8 list-none pl-0">
                                {[
                                    "Full US timezone coverage (EST, CST, MST, PST) — real-time collaboration during your business hours",
                                    "SOC 2 Type II & CCPA compliant automation solutions",
                                    "Self-hosted n8n deployments on AWS US-East/West or Google Cloud US",
                                    "Integration with US-popular tools: Salesforce, HubSpot, Stripe, Shopify, QuickBooks, Slack",
                                    "Dedicated project manager for each US client engagement",
                                    "Support for US payment processors, tax compliance, and financial regulations",
                                ].map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <Zap className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Industries We Automate in the USA
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We serve US businesses across SaaS, E-commerce, Financial Services, Healthcare Tech, Real Estate, Marketing Agencies, 
                                Logistics & Supply Chain, Professional Services, and Enterprise IT. Our automation solutions are tailored to meet 
                                industry-specific compliance requirements including HIPAA, SOX, and PCI DSS where applicable.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Data Privacy & Compliance
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {country.complianceNote} We offer on-premise and private cloud n8n deployments for organizations with strict data residency requirements.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Other Countries */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-white" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-8">
                        <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                            We Also Serve
                        </h2>
                    </AnimatedSection>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { href: "/uae/", label: "🇦🇪 United Arab Emirates" },
                            { href: "/canada/", label: "🇨🇦 Canada" },
                            { href: "/netherlands/", label: "🇳🇱 Netherlands" },
                        ].map(loc => (
                            <Link key={loc.href} href={loc.href}
                                className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-50 border border-gray-200 hover:border-[#4285F4]/30 hover:bg-[#4285F4]/5 transition-all text-white">
                                {loc.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br [#4285F4]" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                            Ready to Automate Your US Business?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Book a free automation audit and discover how n8nera can transform your operations with n8n workflow automation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                Book Free Automation Audit <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="https://wa.me/923141603089" target="_blank" className="whatsapp-btn">
                                <WhatsAppIcon className="w-5 h-5" />
                                WhatsApp Us
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}

