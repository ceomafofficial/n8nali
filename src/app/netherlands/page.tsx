import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { netherlandsCities, getCountryById } from "@/lib/data/countries";
import { services } from "@/lib/data/services";
import { MapPin, ArrowRight, Globe, Shield, Zap, Clock } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getCollectionPageSchema } from "@/lib/schema";

const country = getCountryById("netherlands")!;

export const metadata: Metadata = {
    title: "n8n Automatisering Nederland — GDPR/AVG Compliant [Gratis Audit]",
    description:
        "#1 n8n automation agency voor Nederland. GDPR/AVG compliant. CRM, WhatsApp, AI voice agents & workflow automatisering. Amsterdam, Rotterdam, Den Haag & alle provincies. Gratis audit →",
    keywords: [
        "n8n automation agency Netherlands",
        "n8n automatisering Nederland",
        "workflow automatisering Nederland",
        "AI automatisering Nederland",
        "n8n developer Netherlands",
        "hire n8n developer Netherlands",
        "n8n automation Amsterdam",
        "n8n automation Rotterdam",
        "n8n agency Holland",
        "n8n agency Europe",
        "best n8n agency Netherlands",
        "n8n developer Amsterdam",
        "GDPR compliant automation",
    ],
    openGraph: {
        title: "n8n Automatisering Nederland — GDPR/AVG Compliant | n8nera",
        description:
            "n8n workflow automatisering voor Nederlandse bedrijven. GDPR/AVG compliant. Alle provincies. Gratis audit beschikbaar.",
        url: "https://n8nera.tech/netherlands/",
        type: "website",
        locale: "nl_NL",
    },
    twitter: {
        card: "summary_large_image",
        title: "n8n Automatisering Nederland — Gratis Audit | n8nera",
        description: "n8n automation voor Nederlandse bedrijven. GDPR/AVG compliant. Gratis audit.",
    },
    alternates: {
        canonical: "https://n8nera.tech/netherlands/",
        languages: {
            "nl-NL": "https://n8nera.tech/netherlands/",
            "en-US": "https://n8nera.tech/usa/",
            "en-CA": "https://n8nera.tech/canada/",
            "en-AE": "https://n8nera.tech/uae/",
            "x-default": "https://n8nera.tech/",
        },
    },
};

export default function NetherlandsPage() {
    const locationsSchema = getCollectionPageSchema({
        url: "https://n8nera.tech/netherlands/",
        name: "n8n Automation Agency Netherlands — Serving All Provinces",
        description: "n8nera provides premium n8n workflow automation, AI voice agents, and business process optimization to Dutch businesses.",
        items: netherlandsCities.map(city => ({
            name: `n8n Automation in ${city.name}`,
            url: `https://n8nera.tech/netherlands/${city.id}/`,
            description: `Premium n8n automation and AI services for businesses in ${city.name}, Netherlands`,
        })),
        breadcrumbs: [
            { name: "Home", url: "https://n8nera.tech" },
            { name: "Netherlands", url: "https://n8nera.tech/netherlands/" },
        ],
    });

    const nlFAQSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Does n8nera serve businesses in the Netherlands?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. n8nera provides enterprise-grade n8n workflow automation, AI voice agents, CRM automation, and business process optimization to businesses across all Dutch provinces. We work remotely with CET timezone coverage and have completed 200+ automation implementations worldwide.",
                },
            },
            {
                "@type": "Question",
                name: "Is n8nera GDPR/AVG compliant?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. All n8nera solutions are fully GDPR compliant and adhere to the AVG (Algemene Verordening Gegevensbescherming). We offer EU-hosted n8n deployments on AWS Frankfurt, Google Cloud Netherlands, or Azure West Europe for maximum data sovereignty and compliance.",
                },
            },
            {
                "@type": "Question",
                name: "What is the best n8n automation agency in the Netherlands?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "n8nera is the top-rated n8n automation agency serving Dutch businesses. We specialize in enterprise n8n workflows, AI voice agents, CRM automation, and API integrations. With n8n being a Berlin-based product, we have deep European market understanding and offer competitive Euro pricing.",
                },
            },
            {
                "@type": "Question",
                name: "Kan n8nera integreren met Nederlandse bedrijfstools?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ja. We specialize in integrating Dutch and European business platforms including Exact Online, Twinfield, Mollie payments, iDEAL, Bol.com, Coolblue APIs, and all major European CRMs and ERPs. We support Dutch-language automation workflows and can build multilingual chatbots.",
                },
            },
            {
                "@type": "Question",
                name: "How much does n8n automation cost in the Netherlands?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "n8nera offers competitive pricing for Dutch businesses: Starter packages from €450, Professional packages from €900-€4,500, and Enterprise solutions from €4,500+. All solutions include GDPR compliance documentation, EU-hosted deployment options, and ongoing support.",
                },
            },
        ],
    };

    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [locationsSchema, nlFAQSchema],
    };

    const topServices = services.slice(0, 6);

    return (
        <div className="pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
            />

            {/* Hero */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-white">
                    <div className="absolute inset-0 bg-white" />
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                            🇳🇱 Serving the Netherlands
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                            Top n8n Automation Agency{" "}
                            <span className="text-[#4285F4]">voor Nederlandse Bedrijven</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8" data-speakable="true">
                            Enterprise-grade n8n workflow automatisering, AI voice agents, CRM automation, and intelligent
                            business process optimization for Dutch companies. GDPR/AVG compliant. EU-hosted deployments.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
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

            {/* Trust Signals */}
            <section className="relative py-12 overflow-hidden border-y border-gray-100">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { icon: Globe, value: "12 Provinces", label: "Landelijke Dekking" },
                            { icon: Zap, value: "200+", label: "Implementations" },
                            { icon: Shield, value: "GDPR/AVG", label: "Compliant" },
                            { icon: Clock, value: "CET", label: "EU Timezone" },
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

            {/* Cities */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                            n8n Automatisering in heel Nederland
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Premium automation solutions for businesses in every major Dutch city.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        {netherlandsCities.map((city, index) => (
                            <AnimatedSection key={city.id} delay={index * 0.05}>
                                <Link href={`/netherlands/${city.id}`} className="group block">
                                    <div className="google-card h-full bg-white p-5 text-center hover:border-[#4285F4]/30 transition-all">
                                        <MapPin className="w-6 h-6 text-accent-400 mx-auto mb-2" />
                                        <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#4285F4] transition-colors">
                                            {city.name}
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-1">{city.province}</p>
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

            {/* Services */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-white" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                            n8n Automation Services voor Nederlandse Bedrijven
                        </h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topServices.map((service, index) => (
                            <AnimatedSection key={service.id} delay={index * 0.05}>
                                <Link href={`/services/${service.id}`} className="group block">
                                    <div className="google-card h-full p-6 bg-white">
                                        <Zap className="w-5 h-5 text-accent-400 mb-4" />
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#4285F4] transition-colors">
                                            {service.shortTitle} in Netherlands
                                        </h3>
                                        <p className="text-sm text-gray-400 mb-3 line-clamp-3">{service.description}</p>
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

            {/* Why Netherlands */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                Waarom Nederlandse Bedrijven Kiezen voor n8nera
                            </h2>
                        </div>
                        <div className="prose prose-invert max-w-none" data-speakable="true">
                            <p className="text-gray-300 leading-relaxed mb-6">
                                The Netherlands is one of Europe&apos;s most digitally advanced economies. With n8n being a European-born
                                automation platform (Berlin, Germany), n8nera brings deep understanding of the European market and GDPR
                                requirements to Dutch businesses — from Amsterdam&apos;s startup ecosystem to Rotterdam&apos;s
                                logistics powerhouse.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Dutch Market Advantages</h3>
                            <ul className="space-y-3 mb-8 list-none pl-0">
                                {[
                                    "CET timezone alignment — real-time collaboration during Dutch business hours",
                                    "Full GDPR/AVG compliance with DPA (Data Processing Agreement) included",
                                    "EU-hosted n8n deployments (AWS Frankfurt, GCP Netherlands, Azure West Europe)",
                                    "Integration with Dutch platforms: Exact Online, Twinfield, Mollie, iDEAL, Bol.com",
                                    "Dutch-language chatbots and multilingual automation workflows",
                                    "Competitive Euro pricing — enterprise quality at SME-friendly rates",
                                ].map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <Zap className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Industries in the Netherlands</h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We serve Dutch businesses across Logistics &amp; Supply Chain (Port of Rotterdam), E-commerce (Bol.com ecosystem),
                                FinTech, AgriTech, SaaS, Professional Services, and Enterprise IT. The Netherlands&apos; position as a
                                European logistics and trade hub makes workflow automation particularly impactful for Dutch companies.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Gegevensbescherming & Compliance</h3>
                            <p className="text-gray-300 leading-relaxed">{country.complianceNote}</p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Other Countries */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-white" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-8">
                        <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">We Also Serve</h2>
                    </AnimatedSection>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { href: "/uae/", label: "🇦🇪 United Arab Emirates" },
                            { href: "/usa/", label: "🇺🇸 United States" },
                            { href: "/canada/", label: "🇨🇦 Canada" },
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
                            Klaar om uw Nederlandse Bedrijf te Automatiseren?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Book a free automation audit and discover how n8nera can transform your Dutch business with n8n.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">Book Free Consultation <ArrowRight className="w-5 h-5" /></Link>
                            <Link href="https://wa.me/923141603089" target="_blank" className="whatsapp-btn">
                                <WhatsAppIcon className="w-5 h-5" /> WhatsApp Us
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}

