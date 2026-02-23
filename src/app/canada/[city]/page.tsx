import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { canadaCities, getCountryById } from "@/lib/data/countries";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getBreadcrumbSchema, getInternationalGeoSchema } from "@/lib/schema";
import { ArrowRight, MapPin, CheckCircle2, Zap, Phone, Building2 } from "lucide-react";

interface CityPageProps {
    params: Promise<{ city: string }>;
}

const country = getCountryById("canada")!;

export async function generateStaticParams() {
    return canadaCities.map((city) => ({ city: city.id }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
    const { city: cityId } = await params;
    const city = canadaCities.find((c) => c.id === cityId);

    if (!city) return { title: "City Not Found" };

    return {
        title: `n8n Automation & AI Agency in ${city.name}, ${city.state} — n8n Workflow Experts`,
        description: `n8nera provides premium n8n workflow automation, AI voice agents, CRM automation, and business process optimization services in ${city.name}, ${city.state}, Canada. PIPEDA compliant. Book a free automation audit today.`,
        keywords: [
            `n8n automation ${city.name}`,
            `n8n developer ${city.name}`,
            `automation agency ${city.name}`,
            `workflow automation ${city.name}`,
            `AI automation ${city.name}`,
            `hire n8n developer ${city.name}`,
            `n8n expert ${city.name} Canada`,
            `business process automation ${city.name}`,
            `n8n consulting ${city.name}`,
        ],
        openGraph: {
            title: `n8n Automation Agency in ${city.name}, Canada | n8nera`,
            description: `Premium n8n automation solutions for businesses in ${city.name}, ${city.state}. PIPEDA compliant.`,
            url: `https://n8nera.tech/canada/${cityId}/`,
            type: "website",
        },
        alternates: { canonical: `https://n8nera.tech/canada/${cityId}/` },
    };
}

export default async function CanadaCityPage({ params }: CityPageProps) {
    const { city: cityId } = await params;
    const city = canadaCities.find((c) => c.id === cityId);

    if (!city) notFound();

    const popularServices = services.slice(0, 8);

    const geoSchema = getInternationalGeoSchema({
        cityName: city.name,
        citySlug: cityId,
        countryName: "Canada",
        countryCode: "CA",
        countrySlug: "canada",
        services: popularServices.map(s => ({
            name: s.title,
            url: `https://n8nera.tech/services/${s.id}/`,
        })),
    });

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: "Home", url: "https://n8nera.tech" },
        { name: "Canada", url: "https://n8nera.tech/canada/" },
        { name: city.name, url: `https://n8nera.tech/canada/${cityId}/` },
    ]);

    const cityFAQSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: `Does n8nera serve businesses in ${city.name}, ${city.state}?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `Yes. n8nera provides premium n8n workflow automation, AI voice agents, CRM automation, and business process optimization services to businesses in ${city.name}, ${city.state}. All services are PIPEDA compliant and delivered remotely with Canadian timezone coverage.`,
                },
            },
            {
                "@type": "Question",
                name: `What n8n automation services are available in ${city.name}?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `n8nera offers the full range of automation services in ${city.name}: business process automation, CRM & sales automation, e-commerce automation, WhatsApp automation, AI voice agents, data integration, and more. All solutions comply with PIPEDA and provincial privacy laws.`,
                },
            },
            {
                "@type": "Question",
                name: `How does n8nera work with ${city.name} businesses remotely?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `n8nera operates during Canadian business hours (EST/PST) and communicates via video calls, email, Slack, and project management tools. We offer Canadian-hosted n8n deployments on AWS Canada for data sovereignty.`,
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
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/canada" className="hover:text-white transition-colors">Canada</Link>
                            <span>/</span>
                            <span className="text-white">{city.name}</span>
                        </nav>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <MapPin className="w-6 h-6 text-accent-400" />
                                    <span className="text-accent-400 font-medium">{city.name}, {city.state}, Canada</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                    Premier n8n Automation Agency in{" "}
                                    <span className="text-gradient">{city.name}</span>
                                </h1>
                                <p className="text-lg text-gray-400 mb-8" data-speakable="true">
                                    n8nera delivers enterprise-grade n8n workflow automation, AI voice agents, CRM automation, and business process optimization to companies in {city.name}, {city.state}. PIPEDA compliant. Canadian-hosted deployments available.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        `Tailored automation for ${city.name}'s business landscape`,
                                        "PIPEDA & provincial privacy law compliant",
                                        "Canadian-hosted n8n (AWS Canada-Montreal)",
                                        "Bilingual support (English & French)",
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
                                    <p className="text-sm text-gray-400">Automation for {city.name} {industry.name.toLowerCase()}</p>
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
                        <h2 className="text-3xl font-display font-bold text-white mb-4">n8n Automation Services in {city.name}</h2>
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
                                        <span className="text-sm text-accent-400">Learn more <ArrowRight className="w-4 h-4 inline group-hover:translate-x-1 transition-transform" /></span>
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
                            <h2 className="text-3xl font-display font-bold text-white mb-6">Business Automation Guide for {city.name}</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                {city.name} is a thriving business center in {city.state}, Canada. Companies in {city.name} are adopting n8n workflow automation to compete in an increasingly digital market. From CRM automation to AI voice agents, n8nera helps {city.name} businesses automate operations while maintaining full PIPEDA compliance.
                            </p>
                            <h3 className="text-xl font-semibold text-white mb-4">Data Privacy & Compliance</h3>
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
                        <h2 className="text-3xl font-display font-bold text-white mb-4">Other Canadian Locations</h2>
                    </AnimatedSection>
                    <div className="flex flex-wrap justify-center gap-4">
                        {canadaCities.filter(c => c.id !== cityId).map(otherCity => (
                            <Link key={otherCity.id} href={`/canada/${otherCity.id}`}
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
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Ready to Automate Your {city.name} Business?</h2>
                        <p className="text-lg text-gray-400 mb-8">Book a free consultation and discover how n8nera can help your business in {city.name} scale with n8n automation.</p>
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
