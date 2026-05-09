import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { usaCities, getCountryById } from "@/lib/data/countries";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getBreadcrumbSchema, getInternationalGeoSchema } from "@/lib/schema";
import { ArrowRight, MapPin, CheckCircle2, Zap, Phone, Building2 } from "lucide-react";

interface CityPageProps {
    params: Promise<{ city: string }>;
}

const country = getCountryById("usa")!;

export async function generateStaticParams() {
    return usaCities.map((city) => ({ city: city.id }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
    const { city: cityId } = await params;
    const city = usaCities.find((c) => c.id === cityId);

    if (!city) return { title: "City Not Found" };

    return {
        title: `${city.name} Businesses Losing 40hrs/Week to Manual Work — We Fix It Free`,
        description: `Your ${city.name} competitors already automated this. Avg client: 40hrs/week recovered, $8,400/mo saved, live in 14 days. SOC 2 compliant. Free audit → see your exact ROI before you pay.`,
        keywords: [
            `n8n automation ${city.name}`,
            `n8n developer ${city.name}`,
            `automation agency ${city.name}`,
            `workflow automation ${city.name}`,
            `AI automation ${city.name}`,
            `hire n8n developer ${city.name}`,
            `n8n expert ${city.name} ${city.state}`,
            `business process automation ${city.name}`,
            `CRM automation ${city.name}`,
            `n8n consulting ${city.name}`,
        ],
        openGraph: {
            title: `Is Your ${city.name} Business Still Doing Manually What Bots Do Instantly?`,
            description: `127 clients automated. Avg ${city.name} business saves 40hrs/week & $8,400/mo. n8n workflows, AI agents, CRM automation. Free audit shows exact savings — no pitch.`,
            url: `https://n8nera.tech/usa/${cityId}/`,
            type: "website",
        },
        alternates: {
            canonical: `https://n8nera.tech/usa/${cityId}/`,
        },
    };
}

export default async function USACityPage({ params }: CityPageProps) {
    const { city: cityId } = await params;
    const city = usaCities.find((c) => c.id === cityId);

    if (!city) notFound();

    const popularServices = services.slice(0, 8);

    const geoSchema = getInternationalGeoSchema({
        cityName: city.name,
        citySlug: cityId,
        countryName: "United States",
        countryCode: "US",
        countrySlug: "usa",
        services: popularServices.map(s => ({
            name: s.title,
            url: `https://n8nera.tech/services/${s.id}/`,
        })),
    });

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: "Home", url: "https://n8nera.tech" },
        { name: "USA", url: "https://n8nera.tech/usa/" },
        { name: city.name, url: `https://n8nera.tech/usa/${cityId}/` },
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
                    text: `Yes. n8nera provides premium n8n workflow automation, AI voice agents, CRM automation, and business process optimization services to businesses in ${city.name}, ${city.state}. All services are delivered remotely with full US timezone coverage.`,
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
                    text: `n8nera operates during US business hours (EST/CST/PST) and communicates via video calls, email, Slack, and project management tools. All automation work — from discovery to deployment — is handled remotely with enterprise-grade security and SOC 2 compliance.`,
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
            />

            {/* Hero */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#f8f9ff] to-white">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4285F4]/10 rounded-full blur-[120px]" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                            <Link href="/" className="hover:text-[#4285F4] transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/usa" className="hover:text-[#4285F4] transition-colors">USA</Link>
                            <span>/</span>
                            <span className="text-gray-900 font-medium">{city.name}</span>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <MapPin className="w-6 h-6 text-[#4285F4]" />
                                    <span className="text-[#4285F4] font-medium">{city.name}, {city.state}</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                                    Premier n8n Automation Agency in{" "}
                                    <span className="text-[#4285F4]">{city.name}</span>
                                </h1>
                                <p className="text-lg text-gray-600 mb-8" data-speakable="true">
                                    n8nera delivers enterprise-grade n8n workflow automation, AI voice agents, CRM automation, and business process optimization to companies in {city.name}, {city.state}. We help {city.name} businesses automate operations, reduce costs by up to 85%, and scale efficiently.
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {[
                                        `Deep expertise in ${city.name}'s business landscape`,
                                        "SOC 2 Type II & CCPA compliant solutions",
                                        "Self-hosted n8n on US infrastructure (AWS/GCP)",
                                        "Full US timezone coverage (EST/CST/MST/PST)",
                                    ].map((point, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#34A853] flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{point}</span>
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

                            <div className="google-card p-8 bg-white">
                                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                                    <Building2 className="w-5 h-5 text-[#4285F4]" />
                                    Our Impact in {city.name}
                                </h3>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { value: "50+", label: "Automations Deployed" },
                                        { value: "85%", label: "Avg. Cost Reduction" },
                                        { value: "99.9%", label: "System Uptime" },
                                        { value: "4x", label: "Avg. ROI" },
                                    ].map((stat, i) => (
                                        <div key={i} className="text-center p-4 rounded-lg bg-gray-50 border border-gray-100">
                                            <div className="text-2xl font-bold text-[#4285F4] mb-1">{stat.value}</div>
                                            <div className="text-sm text-gray-500">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Industries */}
            <section className="relative py-20 overflow-hidden bg-gray-50">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Industries We Serve in {city.name}</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">Tailored automation solutions for key sectors in {city.name}&apos;s economy.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries.slice(0, 4).map((industry) => (
                                <Link key={industry.id} href={`/industries/${industry.id}`}
                                    className="google-card p-6 group hover:border-[#4285F4]/30 transition-all text-center bg-white">
                                    <div className="w-12 h-12 rounded-xl bg-[#4285F4]/10 flex items-center justify-center mx-auto mb-4">
                                        <Building2 className="w-6 h-6 text-[#4285F4] group-hover:scale-110 transition-transform" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#4285F4] transition-colors">{industry.name}</h3>
                                    <p className="text-sm text-gray-500">Automation for {city.name} {industry.name.toLowerCase()}</p>
                                </Link>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Services */}
            <section className="relative py-20 overflow-hidden bg-white">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">n8n Automation Services in {city.name}</h2>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {popularServices.map((service, index) => (
                            <AnimatedSection key={service.id} delay={index * 0.05}>
                                <Link href={`/services/${service.id}`} className="group block">
                                    <div className="google-card h-full p-6 bg-white">
                                        <Zap className="w-5 h-5 text-[#FBBC04] mb-4" />
                                        <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-[#4285F4] transition-colors">
                                            {service.shortTitle} in {city.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{service.description}</p>
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

            {/* Content-rich SEO section */}
            <section className="relative py-20 overflow-hidden bg-gray-50">
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mt-2 mb-4">
                                Business Automation Guide for {city.name}
                            </h2>
                        </div>
                        <div className="prose max-w-none">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Why n8n Automation Matters for {city.name} Businesses in 2026</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                As {city.name} continues to be a major business hub in the United States, companies face increasing pressure to optimize operations and reduce costs. n8n workflow automation enables {city.name} businesses to automate repetitive tasks, integrate disparate systems, and deploy AI-powered agents — all while maintaining SOC 2 compliance and US data residency.
                            </p>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Automation Opportunities</h3>
                            <ul className="grid sm:grid-cols-2 gap-4 mb-8 list-none pl-0">
                                {[
                                    { title: "Sales & CRM", text: `Automate lead scoring, follow-ups, and pipeline management for ${city.name} sales teams using n8n + Salesforce/HubSpot.` },
                                    { title: "Customer Support", text: `Deploy AI voice agents and chatbots to handle customer inquiries 24/7 in ${city.name}.` },
                                    { title: "E-commerce", text: `Automate order processing, inventory sync, and shipping notifications for ${city.name} online retailers.` },
                                    { title: "Data Operations", text: `Sync data across tools like Stripe, QuickBooks, Slack, and custom APIs with n8n workflows.` },
                                ].map((item, i) => (
                                    <li key={i} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                        <strong className="text-gray-900 block mb-2">{item.title}</strong>
                                        <span className="text-gray-600 text-sm">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance & Data Privacy</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {country.complianceNote} For {city.name} businesses with strict data residency requirements, we offer self-hosted n8n deployments on US-based cloud infrastructure.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Other US Cities */}
            <section className="relative py-20 overflow-hidden bg-white">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Other US Locations We Serve</h2>
                    </AnimatedSection>
                    <div className="flex flex-wrap justify-center gap-4">
                        {usaCities.filter(c => c.id !== cityId).map(otherCity => (
                            <Link key={otherCity.id} href={`/usa/${otherCity.id}`}
                                className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-50 border border-gray-200 hover:border-[#4285F4]/40 hover:bg-[#4285F4]/5 transition-all">
                                <MapPin className="w-4 h-4 text-[#4285F4]" />
                                <span className="text-gray-800">{otherCity.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-20 overflow-hidden bg-[#4285F4]">
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Ready to Automate Your {city.name} Business?
                        </h2>
                        <p className="text-lg text-blue-100 mb-8">
                            Book a free consultation and discover how n8nera can help your business in {city.name} operate more efficiently with n8n.
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
