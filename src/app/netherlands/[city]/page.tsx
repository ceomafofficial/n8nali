import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { netherlandsCities, getCountryById } from "@/lib/data/countries";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getBreadcrumbSchema, getInternationalGeoSchema } from "@/lib/schema";
import { ArrowRight, MapPin, CheckCircle2, Zap, Phone, Building2 } from "lucide-react";

interface CityPageProps {
    params: Promise<{ city: string }>;
}

const country = getCountryById("netherlands")!;

export async function generateStaticParams() {
    return netherlandsCities.map((city) => ({ city: city.id }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
    const { city: cityId } = await params;
    const city = netherlandsCities.find((c) => c.id === cityId);

    if (!city) return { title: "City Not Found" };

    return {
        title: `${city.name} Bedrijven Besparen 40uur/Week — Gratis n8n Automatisering Audit`,
        description: `Uw ${city.name} concurrenten werken al op autopilot. Gem. resultaat: 40uur/week bespaard, kosten 85% omlaag, live in 14 dagen. AVG-compliant. Gratis audit → exacte ROI, nul verkoopdruk.`,
        keywords: [
            `n8n automation ${city.name}`,
            `n8n developer ${city.name}`,
            `automation agency ${city.name}`,
            `workflow automation ${city.name}`,
            `n8n automatisering ${city.name}`,
            `hire n8n developer ${city.name}`,
            `n8n expert ${city.name} Netherlands`,
            `workflow automatisering ${city.name}`,
            `AI automatisering ${city.name}`,
            `n8n consulting ${city.name}`,
        ],
        openGraph: {
            title: `Draait uw ${city.name} Bedrijf nog op Handmatig Werk? Wij Lossen het Op.`,
            description: `127 bedrijven geautomatiseerd. Gem. ${city.name} klant bespaart 40uur/week & €7.800/mo. AVG-compliant, EU-hosted. Gratis 30-min audit → exacte cijfers, geen verkooppraat.`,
            url: `https://n8nera.tech/netherlands/${cityId}/`,
            type: "website",
            locale: "nl_NL",
        },
        alternates: { canonical: `https://n8nera.tech/netherlands/${cityId}/` },
    };
}

export default async function NetherlandsCityPage({ params }: CityPageProps) {
    const { city: cityId } = await params;
    const city = netherlandsCities.find((c) => c.id === cityId);

    if (!city) notFound();

    const popularServices = services.slice(0, 8);

    const geoSchema = getInternationalGeoSchema({
        cityName: city.name,
        citySlug: cityId,
        countryName: "Netherlands",
        countryCode: "NL",
        countrySlug: "netherlands",
        services: popularServices.map(s => ({
            name: s.title,
            url: `https://n8nera.tech/services/${s.id}/`,
        })),
    });

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: "Home", url: "https://n8nera.tech" },
        { name: "Netherlands", url: "https://n8nera.tech/netherlands/" },
        { name: city.name, url: `https://n8nera.tech/netherlands/${cityId}/` },
    ]);

    const cityFAQSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: `Does n8nera serve businesses in ${city.name}, Netherlands?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `Yes. n8nera provides enterprise-grade n8n workflow automation, AI voice agents, CRM automation, and business process optimization services to businesses in ${city.name}, ${city.province}. All services are GDPR/AVG compliant with EU-hosted deployment options.`,
                },
            },
            {
                "@type": "Question",
                name: `Welke automatiseringsservices zijn beschikbaar in ${city.name}?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `n8nera biedt een volledig scala aan automatiseringsservices in ${city.name}: business process automation, CRM & sales automation, e-commerce automation, WhatsApp automation, AI voice agents, data integration, en meer. Alle oplossingen zijn AVG-compliant.`,
                },
            },
            {
                "@type": "Question",
                name: `How does n8nera work with ${city.name} businesses?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `n8nera operates during CET business hours and communicates via video calls, email, and project management tools. We offer EU-hosted n8n deployments on AWS Frankfurt or GCP Netherlands for GDPR compliance and data sovereignty.`,
                },
            },
        ],
    };

    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [geoSchema, breadcrumbSchema, cityFAQSchema],
    };

    return (
        <div className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />

            {/* Hero */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-premium-pattern" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/netherlands" className="hover:text-white transition-colors">Netherlands</Link>
                            <span>/</span>
                            <span className="text-white">{city.name}</span>
                        </nav>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <MapPin className="w-6 h-6 text-accent-400" />
                                    <span className="text-accent-400 font-medium">{city.name}, {city.province}, Netherlands 🇳🇱</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                    Premier n8n Automation Agency in{" "}
                                    <span className="text-gradient">{city.name}</span>
                                </h1>
                                <p className="text-lg text-gray-400 mb-8" data-speakable="true">
                                    n8nera delivers enterprise-grade n8n workflow automatisering, AI voice agents, CRM automation, and business process optimization to businesses in {city.name}, Netherlands. GDPR/AVG compliant. EU-hosted deployments.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        `Deep expertise in ${city.name}'s business ecosystem`,
                                        "Full GDPR/AVG compliance with DPA included",
                                        "EU-hosted n8n (AWS Frankfurt / GCP Netherlands)",
                                        "CET timezone — real-time Dutch business hours coverage",
                                    ].map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-300">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/contact" className="btn-primary">
                                        Book Free Audit in {city.name} <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <Link href="https://wa.me/923141603089" target="_blank" className="btn-secondary">
                                        <Phone className="w-5 h-5" /> Quick Call
                                    </Link>
                                </div>
                            </div>
                            <div className="glass-card p-8">
                                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                    <Building2 className="w-5 h-5 text-accent-400" />
                                    Our Impact in {city.name}
                                </h3>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { value: "50+", label: "Automations Deployed" },
                                        { value: "85%", label: "Avg. Cost Reduction" },
                                        { value: "99.9%", label: "System Uptime" },
                                        { value: "4x", label: "Avg. ROI" },
                                    ].map((stat, i) => (
                                        <div key={i} className="text-center p-4 rounded-lg bg-white/5">
                                            <div className="text-2xl font-bold text-gradient-purple mb-1">{stat.value}</div>
                                            <div className="text-sm text-gray-400">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Industries */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-display font-bold text-white mb-4">Industries We Serve in {city.name}</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.slice(0, 4).map((industry) => (
                                <Link key={industry.id} href={`/industries/${industry.id}`}
                                    className="glass-card p-6 group hover:border-accent-500/30 transition-all text-center">
                                    <Building2 className="w-6 h-6 text-accent-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-300 transition-colors">{industry.name}</h3>
                                    <p className="text-sm text-gray-400">Automatisering for {city.name} {industry.name.toLowerCase()}</p>
                                </Link>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Services */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">n8n Automatisering Services in {city.name}</h2>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {popularServices.map((service, index) => (
                            <AnimatedSection key={service.id} delay={index * 0.05}>
                                <Link href={`/services/${service.id}`} className="group block">
                                    <div className="glass-card h-full p-6">
                                        <Zap className="w-5 h-5 text-accent-400 mb-4" />
                                        <h3 className="text-base font-semibold text-white mb-2 group-hover:text-accent-300 transition-colors">
                                            {service.shortTitle} in {city.name}
                                        </h3>
                                        <p className="text-sm text-gray-400 mb-3 line-clamp-2">{service.description}</p>
                                        <span className="text-sm text-accent-400">Learn more <ArrowRight className="w-4 h-4 inline" /></span>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="prose prose-invert max-w-none">
                            <h2 className="text-3xl font-display font-bold text-white mb-6">Automatisering Gids voor {city.name}</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {city.name} is een belangrijk zakelijk centrum in {city.province}, Nederland. Bedrijven in {city.name} adopteren n8n workflow automatisering om te concurreren in een steeds digitalere markt. Van CRM automation tot AI voice agents, n8nera helpt {city.name} bedrijven hun operations te automatiseren met volledige AVG-compliance.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                As a European-born automation platform, n8n is perfectly suited for Dutch businesses. n8nera brings deep understanding of the European market, GDPR requirements, and Dutch business platforms like Exact Online, Mollie, and iDEAL to deliver automation solutions that truly fit the {city.name} market.
                            </p>
                            <h3 className="text-xl font-semibold text-white mb-4">Gegevensbescherming & Compliance</h3>
                            <p className="text-gray-300 leading-relaxed">{country.complianceNote}</p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Other Cities */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">Andere Nederlandse Steden</h2>
                    </AnimatedSection>
                    <div className="flex flex-wrap justify-center gap-4">
                        {netherlandsCities.filter(c => c.id !== cityId).map(otherCity => (
                            <Link key={otherCity.id} href={`/netherlands/${otherCity.id}`}
                                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-accent-500/30 hover:bg-white/10 transition-all">
                                <MapPin className="w-4 h-4 text-accent-400" />
                                <span className="text-white">{otherCity.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-950/50 via-dark-950 to-primary-950/50" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Klaar om uw {city.name} Bedrijf te Automatiseren?</h2>
                        <p className="text-lg text-gray-400 mb-8">Book a free consultation and discover how n8nera can help your business in {city.name} with n8n automation.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">Book Free Consultation <ArrowRight className="w-5 h-5" /></Link>
                            <Link href="https://wa.me/923141603089" target="_blank" className="whatsapp-btn"><WhatsAppIcon className="w-5 h-5" /> WhatsApp Us</Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
