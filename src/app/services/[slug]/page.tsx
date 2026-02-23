import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/lib/data/services";
import { uaeCities, industries } from "@/lib/data/industries";
import { usaCities, canadaCities, netherlandsCities } from "@/lib/data/countries";
import { faqs, generateFAQSchema } from "@/lib/data/faq";
import { getBreadcrumbSchema, getSpeakableSchema } from "@/lib/schema";
import {
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    Zap,
    Star,
    MapPin,
} from "lucide-react";

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.id,
    }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.id === slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} — n8n Experts | From $500`,
        description: `${service.longDescription} Get a free consultation →`,
        keywords: [...service.keywords, "n8nera", "n8n automation", "workflow automation", "n8n experts"],
        openGraph: {
            title: `${service.title} — Proven Results | n8nera`,
            description: service.description,
            url: `https://n8nera.tech/services/${slug}/`,
            type: "website",
        },
        alternates: {
            canonical: `https://n8nera.tech/services/${slug}/`,
        },
    };
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = services.find((s) => s.id === slug);

    if (!service) {
        notFound();
    }

    // Get related services (same category)
    const relatedServices = services
        .filter((s) => s.category === service.category && s.id !== service.id)
        .slice(0, 3);

    // Get relevant FAQs
    const relevantFAQs = faqs.filter(
        (faq) => faq.category === "services" || faq.category === "general"
    ).slice(0, 4);

    // Service Schema — Pure Semantic SEO 2026
    // Includes: serviceOutput, audience, brand, termsOfService, entity chaining
    const serviceSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": `https://n8nera.tech/services/${slug}/#service`,
                name: service.title,
                description: service.longDescription,
                url: `https://n8nera.tech/services/${slug}/`,
                provider: {
                    "@id": "https://n8nera.tech/#organization",
                },
                brand: { "@id": "https://n8nera.tech/#brand" },
                serviceOutput: {
                    "@type": "Thing",
                    name: `Automated ${service.title} solution`,
                    description: `Fully deployed and maintained ${service.title.toLowerCase()} with monitoring, documentation, and ongoing support.`,
                },
                audience: {
                    "@type": "BusinessAudience",
                    audienceType: "SMEs and Enterprises globally",
                    geographicArea: [
                        { "@type": "Country", name: "United States" },
                        { "@type": "Country", name: "United Arab Emirates" },
                        { "@type": "Country", name: "Canada" },
                        { "@type": "Country", name: "Netherlands" },
                    ],
                },
                termsOfService: "https://n8nera.tech/terms-of-service/",
                areaServed: service.cities.map((city) => ({
                    "@type": "City",
                    name: city,
                })),
                serviceType: service.category === "voice-ai" ? "AI Voice Agent" : service.category === "integration" ? "System Integration" : "Workflow Automation",
                isRelatedTo: { "@id": "https://n8nera.tech/#topical-authority" },
            },
            // BreadcrumbList — was missing in original (visual-only breadcrumb)
            getBreadcrumbSchema([
                { name: "Home", url: "https://n8nera.tech" },
                { name: "Services", url: "https://n8nera.tech/services" },
                { name: service.shortTitle, url: `https://n8nera.tech/services/${slug}` },
            ]),
            // WebPage with speakable for AEO
            {
                "@type": "WebPage",
                "@id": `https://n8nera.tech/services/${slug}/#webpage`,
                url: `https://n8nera.tech/services/${slug}/`,
                name: `${service.title} — n8n Automation Service`,
                description: service.longDescription,
                isPartOf: { "@id": "https://n8nera.tech/#website" },
                about: { "@id": `https://n8nera.tech/services/${slug}/#service` },
                speakable: getSpeakableSchema(`https://n8nera.tech/services/${slug}/`),
                lastReviewed: "2026-02-12",
            },
        ],
    };

    return (
        <div className="pt-20">
            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(relevantFAQs)),
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
                            <Link href="/services" className="hover:text-white transition-colors">
                                Services
                            </Link>
                            <span>/</span>
                            <span className="text-white">{service.shortTitle}</span>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Content */}
                            <div>
                                <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                                    {service.category === "voice-ai"
                                        ? "AI Voice Agent"
                                        : service.category === "integration"
                                            ? "Integration & Monitoring"
                                            : "Workflow Automation"}
                                </span>
                                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                    {service.title}
                                </h1>
                                <p className="text-lg text-gray-400 mb-8">
                                    {service.longDescription}
                                </p>

                                {/* AI Quick Answers (AEO) */}
                                <div className="mb-8 p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <h3 className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <Zap className="w-4 h-4" />
                                        Quick Facts
                                    </h3>
                                    <div className="space-y-3">
                                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                                            <span className="text-sm font-medium text-white min-w-[100px]">Best For:</span>
                                            <span className="text-sm text-gray-400">SMEs, Enterprises & Startups scaling operations</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                                            <span className="text-sm font-medium text-white min-w-[100px]">Key Benefit:</span>
                                            <span className="text-sm text-gray-400">Reduce manual work by ~80% & cut operational costs</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                                            <span className="text-sm font-medium text-white min-w-[100px]">Time to Live:</span>
                                            <span className="text-sm text-gray-400">Typically 2-4 weeks for full deployment</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                                            <span className="text-sm font-medium text-white min-w-[100px]">Compliance:</span>
                                            <span className="text-sm text-gray-400">GDPR, SOC 2, and UAE Data Protection Law compliant</span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTAs */}
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/contact" className="btn-primary">
                                        Get Started
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        href="https://wa.me/923141603089"
                                        target="_blank"
                                        className="btn-secondary"
                                    >
                                        Quick Chat
                                    </Link>
                                </div>
                            </div>

                            {/* Right - Key Benefits */}
                            <div className="glass-card p-8">
                                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                    <Star className="w-5 h-5 text-amber-400" />
                                    Key Benefits
                                </h3>
                                <ul className="space-y-4">
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-300">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">
                            What&apos;s Included
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent-500/30 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center mb-4">
                                        <Zap className="w-5 h-5 text-accent-400" />
                                    </div>
                                    <p className="text-white">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">
                            Common Use Cases
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.useCases.map((useCase, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-6 glass-card"
                                >
                                    <span className="text-2xl font-bold text-accent-400/50">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <p className="text-gray-300">{useCase}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Cities Served */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-display font-bold text-white mb-4">
                                Available Globally
                            </h2>
                            <p className="text-gray-400">
                                We provide {service.shortTitle} services to businesses in:
                            </p>
                        </div>

                        {/* UAE */}
                        <h3 className="text-lg font-semibold text-accent-300 mb-3 text-center">🇦🇪 UAE</h3>
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            {uaeCities.map((city) => (
                                <Link
                                    key={city.id}
                                    href={`/uae/${city.id}/${service.id}`}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-accent-500/30 hover:bg-white/10 transition-all text-sm"
                                >
                                    <MapPin className="w-3.5 h-3.5 text-accent-400" />
                                    <span className="text-white">{city.name}</span>
                                </Link>
                            ))}
                        </div>

                        {/* USA */}
                        <h3 className="text-lg font-semibold text-accent-300 mb-3 text-center">🇺🇸 USA</h3>
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            {usaCities.slice(0, 6).map((city) => (
                                <Link
                                    key={city.id}
                                    href={`/usa/${city.id}`}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-accent-500/30 hover:bg-white/10 transition-all text-sm"
                                >
                                    <MapPin className="w-3.5 h-3.5 text-accent-400" />
                                    <span className="text-white">{city.name}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Canada */}
                        <h3 className="text-lg font-semibold text-accent-300 mb-3 text-center">🇨🇦 Canada</h3>
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            {canadaCities.slice(0, 5).map((city) => (
                                <Link
                                    key={city.id}
                                    href={`/canada/${city.id}`}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-accent-500/30 hover:bg-white/10 transition-all text-sm"
                                >
                                    <MapPin className="w-3.5 h-3.5 text-accent-400" />
                                    <span className="text-white">{city.name}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Netherlands */}
                        <h3 className="text-lg font-semibold text-accent-300 mb-3 text-center">🇳🇱 Netherlands</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {netherlandsCities.slice(0, 5).map((city) => (
                                <Link
                                    key={city.id}
                                    href={`/netherlands/${city.id}`}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-accent-500/30 hover:bg-white/10 transition-all text-sm"
                                >
                                    <MapPin className="w-3.5 h-3.5 text-accent-400" />
                                    <span className="text-white">{city.name}</span>
                                </Link>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section >

            {/* Industries Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">
                            Industries We Transform
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {industries
                                .filter(ind => ind.services.includes(service.id) || ['smes', 'startups', 'enterprises'].includes(ind.id))
                                .slice(0, 3)
                                .map((industry) => (
                                    <Link
                                        key={industry.id}
                                        href={`/industries/${industry.id}`}
                                        className="glass-card p-6 group hover:border-accent-500/30 transition-all"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center">
                                                {/* Use a generic icon or dynamic import if possible, for now Lucide generic */}
                                                <Zap className="w-5 h-5 text-accent-400" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-white group-hover:text-accent-300 transition-colors">
                                                {industry.name}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-gray-400 mb-4">
                                            {industry.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm font-medium text-accent-400">
                                            Explore Solutions
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Related Services */}
            {
                relatedServices.length > 0 && (
                    <section className="relative py-20 overflow-hidden">
                        <div className="absolute inset-0 bg-dark-950" />

                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <AnimatedSection>
                                <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">
                                    Related Services
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {relatedServices.map((related) => (
                                        <Link
                                            key={related.id}
                                            href={`/services/${related.id}`}
                                            className="group glass-card p-6"
                                        >
                                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-300 transition-colors">
                                                {related.title}
                                            </h3>
                                            <p className="text-sm text-gray-400 mb-4">
                                                {related.description}
                                            </p>
                                            <div className="flex items-center gap-2 text-sm font-medium text-accent-400">
                                                Learn more
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </AnimatedSection>
                        </div>
                    </section>
                )
            }

            {/* CTA Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-950/50 via-dark-950 to-primary-950/50" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Ready to Get Started with {service.shortTitle}?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Book a free consultation and discover how {service.title} can
                            transform your business operations.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                Book Free Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/services" className="btn-secondary">
                                <ArrowLeft className="w-5 h-5" />
                                View All Services
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div >
    );
}
