import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { canadaCities, getCountryById } from "@/lib/data/countries";
import { services } from "@/lib/data/services";
import { MapPin, ArrowRight, Globe, Shield, Zap, Clock } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getCollectionPageSchema } from "@/lib/schema";

const country = getCountryById("canada")!;

export const metadata: Metadata = {
    title: "n8n Automation Agency Canada — PIPEDA Compliant [Free Audit]",
    description:
        "Top n8n automation agency for Canadian businesses. PIPEDA compliant. CRM, WhatsApp, AI voice agents & workflow automation. Serving Toronto, Vancouver, Montreal & all provinces. Free audit →",
    keywords: [
        "n8n automation agency Canada",
        "n8n developer Canada",
        "hire n8n developer Canada",
        "n8n workflow automation Canada",
        "n8n integrations Canada",
        "n8n AI automation Canada",
        "automation agency Canada",
        "best n8n agency Canada",
        "n8n automation Toronto",
        "n8n automation Vancouver",
        "n8n automation Montreal",
        "PIPEDA compliant automation",
    ],
    openGraph: {
        title: "n8n Automation Agency Canada — PIPEDA Compliant | n8nera",
        description:
            "n8n automation for Canadian businesses. PIPEDA compliant. Serving Toronto, Vancouver, Montreal & all provinces. Free audit.",
        url: "https://n8nera.tech/canada/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "n8n Automation Agency Canada — PIPEDA Compliant | n8nera",
        description: "n8n automation for Canadian businesses. PIPEDA compliant. All provinces. Free audit.",
    },
    alternates: {
        canonical: "https://n8nera.tech/canada/",
        languages: {
            "en-CA": "https://n8nera.tech/canada/",
            "en-US": "https://n8nera.tech/usa/",
            "en-AE": "https://n8nera.tech/uae/",
            "nl-NL": "https://n8nera.tech/netherlands/",
            "x-default": "https://n8nera.tech/",
        },
    },
};

export default function CanadaPage() {
    const locationsSchema = getCollectionPageSchema({
        url: "https://n8nera.tech/canada/",
        name: "n8n Automation Agency Canada — Serving All Provinces",
        description: "n8nera provides premium n8n workflow automation, AI voice agents, and business process optimization to businesses across Canada.",
        items: canadaCities.map(city => ({
            name: `n8n Automation in ${city.name}`,
            url: `https://n8nera.tech/canada/${city.id}/`,
            description: `Premium n8n automation and AI services for businesses in ${city.name}, ${city.state}`,
        })),
        breadcrumbs: [
            { name: "Home", url: "https://n8nera.tech" },
            { name: "Canada", url: "https://n8nera.tech/canada/" },
        ],
    });

    const canadaFAQSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Does n8nera serve businesses in Canada?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. n8nera provides enterprise-grade n8n workflow automation, AI voice agents, CRM automation, and business process optimization to businesses across all Canadian provinces. We work remotely with EST/PST timezone coverage and have completed 200+ automation implementations.",
                },
            },
            {
                "@type": "Question",
                name: "Is n8nera PIPEDA compliant?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. All n8nera solutions comply with PIPEDA (Personal Information Protection and Electronic Documents Act) and provincial privacy legislation including Ontario's FIPPA and Quebec's Law 25. We offer Canadian-hosted n8n deployments on AWS Canada (Montreal) for data sovereignty.",
                },
            },
            {
                "@type": "Question",
                name: "What is the best n8n automation agency in Canada?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "n8nera is the top-rated n8n automation agency serving Canadian businesses with a 4.9/5 rating. We specialize in enterprise n8n workflows, AI voice agents, CRM automation, and multi-system integrations. Our pricing is competitive for the Canadian market with packages starting at $500 USD.",
                },
            },
            {
                "@type": "Question",
                name: "Can n8nera integrate with Canadian business tools?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. We specialize in integrating Canadian-popular platforms including Shopify (Canadian-founded), Interac, Xero, FreshBooks, Wave, Hootsuite, and all major CRMs. We also support bilingual (English/French) automation workflows for Quebec-based businesses.",
                },
            },
        ],
    };

    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [locationsSchema, canadaFAQSchema],
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
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                            🇨🇦 Serving Canada
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                            Leading n8n Automation Agency{" "}
                            <span className="text-[#4285F4]">for Canadian Businesses</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8" data-speakable="true">
                            Enterprise-grade n8n workflow automation, AI voice agents, and business process optimization
                            for companies across all Canadian provinces. PIPEDA compliant. 200+ implementations.
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
                            { icon: Globe, value: "10 Provinces", label: "Coast-to-Coast" },
                            { icon: Zap, value: "200+", label: "Implementations" },
                            { icon: Shield, value: "PIPEDA", label: "Compliant" },
                            { icon: Clock, value: "EST/PST", label: "CA Timezone Coverage" },
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
                            n8n Automation Services Across Canada
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Premium automation solutions for businesses in every major Canadian city.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        {canadaCities.map((city, index) => (
                            <AnimatedSection key={city.id} delay={index * 0.05}>
                                <Link href={`/canada/${city.id}`} className="group block">
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

            {/* Services */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-white" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                            n8n Automation Services for Canadian Companies
                        </h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topServices.map((service, index) => (
                            <AnimatedSection key={service.id} delay={index * 0.05}>
                                <Link href={`/services/${service.id}`} className="group block">
                                    <div className="google-card h-full p-6 bg-white">
                                        <Zap className="w-5 h-5 text-accent-400 mb-4" />
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#4285F4] transition-colors">
                                            {service.shortTitle} in Canada
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

            {/* Why Canada — Content Rich */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                                Why Canadian Companies Choose n8nera
                            </h2>
                        </div>
                        <div className="prose prose-invert max-w-none" data-speakable="true">
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Canada&apos;s thriving tech ecosystem — from Toronto&apos;s AI corridor to Vancouver&apos;s startup scene — demands cutting-edge automation.
                                n8nera helps Canadian businesses deploy n8n workflow automation that integrates seamlessly with Canadian-popular platforms
                                like Shopify, FreshBooks, Hootsuite, and major banking APIs.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Canadian Market Advantages</h3>
                            <ul className="space-y-3 mb-8 list-none pl-0">
                                {[
                                    "Bilingual automation support (English & French) for Quebec operations",
                                    "PIPEDA & provincial privacy law compliance built into every solution",
                                    "Canadian-hosted n8n deployments (AWS Canada-Montreal, GCP Montréal)",
                                    "Integration with Interac, Canadian banking APIs, and local payment processors",
                                    "Competitive CAD pricing — same quality as Big 4 consulting at a fraction of the cost",
                                ].map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <Zap className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Privacy & Compliance</h3>
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
                            Ready to Automate Your Canadian Business?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Book a free automation audit and discover how n8nera can help your Canadian business scale with n8n.
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

