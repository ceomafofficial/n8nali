import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { uaeCities, industries } from "@/lib/data/industries";
import { services } from "@/lib/data/services";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getBreadcrumbSchema, getGeoTargetedServiceSchema } from "@/lib/schema";
import {
    ArrowRight,
    MapPin,
    CheckCircle2,
    Zap,
    Phone,
    Building2,
} from "lucide-react";

interface CityPageProps {
    params: Promise<{
        city: string;
    }>;
}

export async function generateStaticParams() {
    return uaeCities.map((city) => ({
        city: city.id,
    }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
    const { city: cityId } = await params;
    const city = uaeCities.find((c) => c.id === cityId);

    if (!city) {
        return { title: "City Not Found" };
    }

    return {
        title: `${city.name} Businesses Are Cutting Costs 85% With n8n — See How | n8nera`,
        description: `WhatsApp bots that sell at 3am. AI agents that never miss a ${city.name} lead. CRM that updates itself. Free 30-min audit shows your exact ROI — zero risk, zero commitment.`,
        keywords: [
            `automation agency ${city.name}`,
            `n8n automation ${city.name}`,
            `AI voice agents ${city.name}`,
            `CRM automation ${city.name}`,
            `workflow automation ${city.name} UAE`,
            `WhatsApp automation ${city.name}`,
            `hire n8n developer ${city.name}`,
        ],
        openGraph: {
            title: `Is Your ${city.name} Business Still Running on Manual Work? Fix It Free.`,
            description: `Avg ${city.name} client saves $3,200/mo & 40hrs/week after going live. WhatsApp bots, AI agents, CRM automation. Free audit → exact numbers, zero sales pitch.`,
            url: `https://n8nera.tech/uae/${cityId}/`,
            type: "website",
        },
        alternates: {
            canonical: `https://n8nera.tech/uae/${cityId}/`,
        },
    };
}

export default async function CityPage({ params }: CityPageProps) {
    const { city: cityId } = await params;
    const city = uaeCities.find((c) => c.id === cityId);

    if (!city) {
        notFound();
    }

    // Get popular services for this location
    const popularServices = services.slice(0, 8);

    // GEO-optimized schema with BreadcrumbList + FAQPage + ProfessionalService
    const geoSchema = getGeoTargetedServiceSchema({
        cityName: city.name,
        citySlug: cityId,
        services: popularServices.map(s => ({
            name: s.title,
            url: `https://n8nera.tech/uae/${cityId}/${s.id}/`,
        })),
    });

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: "Home", url: "https://n8nera.tech" },
        { name: "UAE Locations", url: "https://n8nera.tech/uae/" },
        { name: city.name, url: `https://n8nera.tech/uae/${cityId}/` },
    ]);

    // City-specific FAQ schema for AEO
    const cityFAQSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: `Does n8nera serve businesses in ${city.name}?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `Yes. n8nera provides premium n8n workflow automation, AI voice agents, CRM automation, and business process optimization services to businesses in ${city.name}, UAE. All services are delivered remotely from Pakistan with UAE timezone coverage.`,
                },
            },
            {
                "@type": "Question",
                name: `What automation services are available in ${city.name}?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `n8nera offers the full range of automation services in ${city.name}: business process automation, CRM & sales automation, e-commerce automation, WhatsApp automation, AI voice agents, data integration, and more. Pricing starts at $500 for starter packages.`,
                },
            },
            {
                "@type": "Question",
                name: `How does n8nera work with ${city.name} businesses remotely?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `n8nera operates during UAE business hours (GST) and communicates via video calls, email, WhatsApp, and project management tools. All automation work — from discovery to deployment — is handled remotely with the same quality and responsiveness as a local agency.`,
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
            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(combinedSchema),
                }}
            />

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-premium-pattern" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                            <Link href="/" className="hover:text-white transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            <Link href="/uae" className="hover:text-white transition-colors">
                                Locations
                            </Link>
                            <span>/</span>
                            <span className="text-white">{city.name}</span>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <MapPin className="w-6 h-6 text-accent-400" />
                                    <span className="text-accent-400 font-medium">{city.name}, UAE</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                    Premier Automation & AI Agency in{" "}
                                    <span className="text-gradient">{city.name}</span>
                                </h1>
                                <p className="text-lg text-gray-400 mb-8">
                                    n8nera delivers enterprise-grade n8n workflow automation, AI voice
                                    agents, CRM automation, and business process optimization to
                                    businesses across {city.name}. We help local companies automate
                                    operations, reduce costs, and scale efficiently.
                                </p>

                                {/* Key Points */}
                                <ul className="space-y-3 mb-8">
                                    {[
                                        `Local expertise in ${city.name} business landscape`,
                                        "Multi-language support: English, Arabic, Urdu, Hindi",
                                        "Self-hosted options for data security",
                                        "24/7 support for critical automations",
                                    ].map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-300">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTAs */}
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/contact" className="btn-primary">
                                        Book Free Audit in {city.name}
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        href="https://wa.me/923141603089"
                                        target="_blank"
                                        className="btn-secondary"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Quick Call
                                    </Link>
                                </div>
                            </div>

                            {/* Stats Card */}
                            <div className="glass-card p-8">
                                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                    <Building2 className="w-5 h-5 text-accent-400" />
                                    Our Impact in {city.name}
                                </h3>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { value: "50+", label: "Automations Deployed" },
                                        { value: "85%", label: "Avg. Task Reduction" },
                                        { value: "24/7", label: "System Uptime" },
                                        { value: "3x", label: "Avg. ROI" },
                                    ].map((stat, i) => (
                                        <div key={i} className="text-center p-4 rounded-lg bg-white/5">
                                            <div className="text-2xl font-bold text-gradient-purple mb-1">
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-gray-400">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Industries in City */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-display font-bold text-white mb-4">
                                Industries We Serve in {city.name}
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Tailored automation solutions for key sectors driving {city.name}&apos;s economy.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.slice(0, 4).map((industry) => (
                                <Link
                                    key={industry.id}
                                    href={`/industries/${industry.id}`}
                                    className="glass-card p-6 group hover:border-accent-500/30 transition-all text-center"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mx-auto mb-4">
                                        <Building2 className="w-6 h-6 text-accent-400 group-hover:scale-110 transition-transform" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-300 transition-colors">
                                        {industry.name}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        Automation for {city.name} {industry.name.toLowerCase()}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Services in This City */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            Automation Services in {city.name}
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Explore our full range of automation and AI services available to
                            businesses in {city.name}, UAE.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {popularServices.map((service, index) => (
                            <AnimatedSection key={service.id} delay={index * 0.05}>
                                <Link href={`/services/${service.id}`} className="group block">
                                    <div className="glass-card h-full p-6">
                                        <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center mb-4">
                                            <Zap className="w-5 h-5 text-accent-400" />
                                        </div>
                                        <h3 className="text-base font-semibold text-white mb-2 group-hover:text-accent-300 transition-colors">
                                            {service.shortTitle} in {city.name}
                                        </h3>
                                        <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center gap-1 text-sm text-accent-400">
                                            Learn more
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
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

            {/* Local Specific Content – Guide */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-10">
                            <span className="text-accent-400 font-semibold tracking-wider uppercase text-sm">
                                Local Insights
                            </span>
                            <h2 className="text-3xl font-display font-bold text-white mt-2 mb-4">
                                Business Automation Guide for {city.name}
                            </h2>
                            <p className="text-gray-400">
                                Navigating the digital landscape in {city.name} with intelligent automation.
                            </p>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <h3 className="text-xl font-semibold text-white mb-4">
                                Why Automation is Critical for {city.name} Businesses in 2026
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                As {city.name} continues to evolve as a key economic hub in the UAE, the competitive landscape demands higher efficiency and faster response times.
                                Businesses in {city.name} are increasingly adopting <Link href="/services/business-process-automation" className="text-accent-400 hover:text-accent-300">process automation</Link> to reduce operational overhead specifically associated with local labor costs and administrative compliance.
                            </p>

                            <h3 className="text-xl font-semibold text-white mb-4">
                                Key Automation Opportunities in {city.name}
                            </h3>
                            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                                <li className="bg-white/5 p-4 rounded-lg border border-white/10">
                                    <strong className="text-white block mb-2">Customer Service</strong>
                                    <span className="text-gray-400 text-sm">
                                        Use <Link href="/services/ai-call-center-agent" className="text-accent-400 hover:text-accent-300">AI Voice Agents</Link> to handle multilingual inquiries (Arabic/English/Hindi/Urdu) common in {city.name}&apos;s diverse demographic.
                                    </span>
                                </li>
                                <li className="bg-white/5 p-4 rounded-lg border border-white/10">
                                    <strong className="text-white block mb-2">Sales Operations</strong>
                                    <span className="text-gray-400 text-sm">
                                        Implement <Link href="/services/crm-sales-automation" className="text-accent-400 hover:text-accent-300">CRM automation</Link> to track leads from various local channels and automate follow-ups.
                                    </span>
                                </li>
                                <li className="bg-white/5 p-4 rounded-lg border border-white/10">
                                    <strong className="text-white block mb-2">Communication</strong>
                                    <span className="text-gray-400 text-sm">
                                        Deploy <Link href="/services/whatsapp-messaging-automation" className="text-accent-400 hover:text-accent-300">WhatsApp bots</Link>, as WhatsApp is the primary business communication tool in {city.name}.
                                    </span>
                                </li>
                                <li className="bg-white/5 p-4 rounded-lg border border-white/10">
                                    <strong className="text-white block mb-2">Data Management</strong>
                                    <span className="text-gray-400 text-sm">
                                        Sync data between local accounting software and global tools using custom <Link href="/services/data-integration-sync" className="text-accent-400 hover:text-accent-300">integration workflows</Link>.
                                    </span>
                                </li>
                            </ul>

                            <h3 className="text-xl font-semibold text-white mb-4">
                                Regulatory Compliance & Data Privacy in {city.name}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Our solutions are designed with UAE data privacy laws in mind. For businesses in {city.name}, where data sovereignty is often a priority, we offer self-hosted n8n deployments that ensure your sensitive customer data remains secure and compliant with local regulations.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Other Cities */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            We Also Serve
                        </h2>
                        <p className="text-gray-400">
                            Explore our automation services in other UAE locations
                        </p>
                    </AnimatedSection>

                    <div className="flex flex-wrap justify-center gap-4">
                        {uaeCities
                            .filter((c) => c.id !== cityId)
                            .map((otherCity) => (
                                <Link
                                    key={otherCity.id}
                                    href={`/uae/${otherCity.id}`}
                                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-accent-500/30 hover:bg-white/10 transition-all"
                                >
                                    <MapPin className="w-4 h-4 text-accent-400" />
                                    <span className="text-white">{otherCity.name}</span>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-950/50 via-dark-950 to-primary-950/50" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Ready to Automate Your {city.name} Business?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Book a free consultation and discover how n8nera can help your
                            business in {city.name} operate more efficiently.
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
