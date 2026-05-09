import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { uaeCities } from "@/lib/data/industries";
import { services } from "@/lib/data/services";
import { MapPin, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getCollectionPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "n8n Automation Agency UAE — Dubai, Abu Dhabi & All Emirates",
    description:
        "#1 n8n automation agency in UAE. Serving Dubai, Abu Dhabi, Sharjah & all emirates. CRM, WhatsApp bots, AI voice agents. 50+ UAE clients. Free automation audit →",
    keywords: [
        "n8n automation agency UAE",
        "automation agency Dubai",
        "n8n automation Abu Dhabi",
        "AI agency Sharjah",
        "n8n automation UAE",
        "n8n developer Dubai",
        "hire n8n developer UAE",
    ],
    openGraph: {
        title: "n8n Automation Agency UAE — 50+ Clients Across All Emirates | n8nera",
        description: "Serving Dubai, Abu Dhabi, Sharjah & all 7 emirates. 50+ UAE clients. Free audit available.",
        url: "https://n8nera.tech/uae/",
        type: "website",
        locale: "en_AE",
        siteName: "n8nera",
        images: [
            {
                url: "/og-image.webp",
                width: 1200,
                height: 630,
                alt: "n8nera — #1 n8n Automation Agency UAE | Dubai, Abu Dhabi & All Emirates",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@n8nera",
        creator: "@n8nera",
        title: "n8n Automation Agency UAE — Dubai, Abu Dhabi & All Emirates | n8nera",
        description: "#1 n8n automation agency in UAE. 50+ UAE clients. CRM, WhatsApp bots, AI voice agents. Free audit →",
        images: ["/og-image.webp"],
    },
    alternates: {
        canonical: "https://n8nera.tech/uae/",
        languages: {
            "x-default": "https://n8nera.tech/",
            "en-AE": "https://n8nera.tech/uae/",
            "en-US": "https://n8nera.tech/usa/",
            "en-CA": "https://n8nera.tech/canada/",
            "nl-NL": "https://n8nera.tech/netherlands/",
        },
    },
};

export default function LocationsPage() {
    const locationsSchema = getCollectionPageSchema({
        url: "https://n8nera.tech/uae/",
        name: "UAE Locations - Automation Across Emirates",
        description: "n8nera serves businesses across all UAE emirates including Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Al Ain, and Umm Al Quwain.",
        items: uaeCities.map(city => ({
            name: `n8n Automation in ${city.name}`,
            url: `https://n8nera.tech/uae/${city.id}/`,
            description: `Premium automation and AI services for businesses in ${city.name}, UAE`,
        })),
        breadcrumbs: [
            { name: "Home", url: "https://n8nera.tech" },
            { name: "UAE Locations", url: "https://n8nera.tech/uae/" },
        ],
    });

    return (
        <div className="pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsSchema) }}
            />
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-white">
                    <div className="absolute inset-0 bg-white" />
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                            Our Locations
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                            Serving Businesses{" "}
                            <span className="text-[#4285F4]">Across the UAE</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            From Dubai to Abu Dhabi, Sharjah to Ras Al Khaimah, we provide
                            premium automation and AI services to businesses in every emirate.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Cities Grid */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {uaeCities.map((city, index) => (
                            <AnimatedSection key={city.id} delay={index * 0.1}>
                                <Link href={`/uae/${city.id}`} className="group block">
                                    <div className="google-card h-full bg-white p-6 text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500/10 to-primary-600/10 flex items-center justify-center mx-auto mb-4 group-hover:from-accent-500/20 group-hover:to-primary-600/20 transition-colors">
                                            <MapPin className="w-8 h-8 text-[#4285F4]" />
                                        </div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#4285F4] transition-colors">
                                            {city.name}
                                        </h2>
                                        <p className="text-sm text-gray-500 mb-4">{city.nameAr}</p>
                                        <div className="flex items-center justify-center gap-2 text-sm text-[#4285F4]">
                                            View services
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services in All Locations */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-white" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                            Services Available in All Locations
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            All our automation and AI services are available across every UAE
                            emirate with local support.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {services.slice(0, 8).map((service, index) => (
                            <AnimatedSection key={service.id} delay={index * 0.05}>
                                <Link
                                    href={`/services/${service.id}`}
                                    className="block p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#4285F4]/30 transition-colors text-center"
                                >
                                    <span className="text-sm text-gray-300 hover:text-white transition-colors">
                                        {service.shortTitle}
                                    </span>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection delay={0.5} className="text-center mt-10">
                        <Link href="/services" className="btn-secondary">
                            View All Services
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Other Locations */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                            We Also Serve
                        </h2>
                        <p className="text-gray-600">Explore our n8n automation services in other countries</p>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: "United States", href: "/usa", flag: "🇺🇸", cities: "New York, Los Angeles, Chicago, Houston & more" },
                            { name: "Canada", href: "/canada", flag: "🇨🇦", cities: "Toronto, Vancouver, Montreal, Calgary & more" },
                            { name: "Netherlands", href: "/netherlands", flag: "🇳🇱", cities: "Amsterdam, Rotterdam, The Hague, Utrecht & more" },
                        ].map((country) => (
                            <AnimatedSection key={country.name}>
                                <Link href={country.href} className="group block">
                                    <div className="glass-card p-6 text-center h-full">
                                        <span className="text-4xl mb-3 block">{country.flag}</span>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#4285F4] transition-colors">
                                            {country.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-3">{country.cities}</p>
                                        <span className="text-sm text-accent-400 flex items-center justify-center gap-1">
                                            View locations <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br [#4285F4]" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                            Which City Are You In?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Wherever you are in the UAE, n8nera can help automate your business.
                            Contact us for a free consultation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                Book Free Consultation
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
        </div>
    );
}

