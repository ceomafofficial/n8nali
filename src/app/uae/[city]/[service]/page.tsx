import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/lib/data/services";
import { uaeCities, industries } from "@/lib/data/industries";
import { ArrowRight, MapPin, CheckCircle2, Phone, Star, Zap } from "lucide-react";

interface CityServicePageProps {
    params: Promise<{ city: string; service: string }>;
}

export async function generateStaticParams() {
    const params: { city: string; service: string }[] = [];
    uaeCities.forEach((city) => {
        services.forEach((service) => {
            params.push({ city: city.id, service: service.id });
        });
    });
    return params;
}

export async function generateMetadata({ params }: CityServicePageProps): Promise<Metadata> {
    const { city: cityId, service: serviceId } = await params;
    const city = uaeCities.find((c) => c.id === cityId);
    const service = services.find((s) => s.id === serviceId);

    if (!city || !service) return { title: "Not Found" };

    return {
        title: `${service.title} in ${city.name} | n8nera UAE`,
        description: `Professional ${service.title.toLowerCase()} services in ${city.name}, UAE. We help ${city.name} businesses automate operations and scale efficiently. Free consultation available.`,
        keywords: [
            `${service.shortTitle} ${city.name}`,
            `${service.category} automation ${city.name}`,
            `n8n automation ${city.name}`,
            ...service.keywords.slice(0, 3),
        ],
        openGraph: {
            title: `${service.title} in ${city.name} | n8nera UAE`,
            description: `Professional ${service.title.toLowerCase()} services in ${city.name}, UAE. Automate operations and scale efficiently.`,
            url: `https://n8nera.tech/uae/${cityId}/${serviceId}/`,
            type: "website",
        },
        alternates: {
            canonical: `https://n8nera.tech/uae/${cityId}/${serviceId}/`,
        },
    };
}

export default async function CityServicePage({ params }: CityServicePageProps) {
    const { city: cityId, service: serviceId } = await params;
    const city = uaeCities.find((c) => c.id === cityId);
    const service = services.find((s) => s.id === serviceId);

    if (!city || !service) notFound();

    const relatedServices = services
        .filter((s) => s.category === service.category && s.id !== service.id)
        .slice(0, 4);

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${service.title} in ${city.name}`,
        description: service.longDescription,
        provider: {
            "@type": "Organization",
            name: "n8nera",
            url: "https://n8nera.tech",
        },
        areaServed: {
            "@type": "City",
            name: city.name,
            addressCountry: "AE",
        },
        serviceType: service.category,
    };

    return (
        <div className="pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            {/* Hero */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-premium-pattern" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                            <Link href="/" className="hover:text-white">Home</Link>
                            <span>/</span>
                            <Link href="/uae" className="hover:text-white">Locations</Link>
                            <span>/</span>
                            <Link href={`/uae/${city.id}`} className="hover:text-white">{city.name}</Link>
                            <span>/</span>
                            <span className="text-white">{service.shortTitle}</span>
                        </nav>

                        <div className="flex items-center gap-3 mb-4">
                            <MapPin className="w-5 h-5 text-accent-400" />
                            <span className="text-accent-400 font-medium">{city.name}, UAE</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            {service.title} in{" "}
                            <span className="text-gradient">{city.name}</span>
                        </h1>

                        <p className="text-lg text-gray-400 max-w-3xl mb-8">
                            Looking for professional {service.title.toLowerCase()} services in {city.name}?
                            n8nera helps {city.name} businesses automate their operations, reduce costs, and scale
                            efficiently with enterprise-grade {service.category} solutions.
                        </p>

                        {/* AI Quick Answers (AEO) */}
                        <div className="mb-8 p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-2xl">
                            <h3 className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Zap className="w-4 h-4" />
                                {service.shortTitle} in {city.name} - Quick Facts
                            </h3>
                            <div className="space-y-3">
                                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                                    <span className="text-sm font-medium text-white min-w-[120px]">Service Area:</span>
                                    <span className="text-sm text-gray-400">Available throughout {city.name}, UAE</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                                    <span className="text-sm font-medium text-white min-w-[120px]">Target Audience:</span>
                                    <span className="text-sm text-gray-400">Local businesses, SMEs, and Enterprises in {city.name}</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                                    <span className="text-sm font-medium text-white min-w-[120px]">Expected ROI:</span>
                                    <span className="text-sm text-gray-400">Average 3x ROI within first 6 months of deployment</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                                    <span className="text-sm font-medium text-white min-w-[120px]">Local Support:</span>
                                    <span className="text-sm text-gray-400">24/7 Monitoring & dedicated {city.name}-based support</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="btn-primary">
                                Get Started in {city.name}
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="https://wa.me/923141603089" target="_blank" className="btn-secondary">
                                <Phone className="w-5 h-5" />
                                Quick Call
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Service Details */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <AnimatedSection>
                            <h2 className="text-2xl font-display font-bold text-white mb-6">
                                About {service.title} in {city.name}
                            </h2>
                            <p className="text-gray-400 mb-6">{service.longDescription}</p>
                            <p className="text-gray-400 mb-6">
                                For businesses in {city.name}, {service.title.toLowerCase()} is becoming essential
                                to stay competitive in the UAE market. Whether you&apos;re a startup in {city.name}&apos;s
                                growing tech scene or an established enterprise, our solutions are tailored to meet
                                your specific needs.
                            </p>

                            <h3 className="text-lg font-semibold text-white mb-4">Key Benefits for {city.name} Businesses:</h3>
                            <ul className="space-y-3">
                                {service.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="glass-card p-8">
                                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                    <Star className="w-5 h-5 text-amber-400" />
                                    What You Get
                                </h3>
                                <div className="space-y-4">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                                            <span className="text-accent-400 font-bold">{String(i + 1).padStart(2, "0")}</span>
                                            <span className="text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            How {city.name} Businesses Use {service.shortTitle}
                        </h2>
                        <p className="text-gray-400">Real applications for companies in {city.name}</p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {service.useCases.map((useCase, i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <div className="glass-card p-6 h-full">
                                    <span className="text-3xl font-bold text-accent-400/30 mb-4 block">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <p className="text-gray-300">{useCase}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
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
                                Transform your industry with {service.shortTitle} solutions in {city.name}.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {industries
                                .filter(ind => ind.services.includes(service.id) || ['smes', 'startups', 'enterprises', 'local-businesses'].includes(ind.id))
                                .slice(0, 4)
                                .map((industry) => (
                                    <Link
                                        key={industry.id}
                                        href={`/industries/${industry.id}`}
                                        className="glass-card p-6 group hover:border-accent-500/30 transition-all text-center"
                                    >
                                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-300 transition-colors">
                                            {industry.name}
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            {service.shortTitle} for {city.name} {industry.name.toLowerCase()}
                                        </p>
                                    </Link>
                                ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Related Services in This City */}
            {relatedServices.length > 0 && (
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-dark-900/50" />
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-2xl font-display font-bold text-white mb-4">
                                Related Services in {city.name}
                            </h2>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedServices.map((related, i) => (
                                <AnimatedSection key={related.id} delay={i * 0.1}>
                                    <Link href={`/uae/${city.id}/${related.id}`} className="group block glass-card p-6">
                                        <h3 className="text-base font-semibold text-white mb-2 group-hover:text-accent-300 transition-colors">
                                            {related.shortTitle}
                                        </h3>
                                        <p className="text-sm text-gray-400 line-clamp-2">{related.description}</p>
                                    </Link>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Other Cities */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-2xl font-display font-bold text-white mb-4">
                            {service.shortTitle} in Other UAE Cities
                        </h2>
                    </AnimatedSection>

                    <div className="flex flex-wrap justify-center gap-3">
                        {uaeCities.filter((c) => c.id !== city.id).map((otherCity) => (
                            <Link
                                key={otherCity.id}
                                href={`/uae/${otherCity.id}/${service.id}`}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-accent-500/30 hover:bg-white/10 transition-all text-sm"
                            >
                                <MapPin className="w-3 h-3 text-accent-400" />
                                <span className="text-gray-300">{otherCity.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-950/50 via-dark-950 to-primary-950/50" />
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            Ready for {service.shortTitle} in {city.name}?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Book a free consultation and discover how n8nera can help your {city.name} business automate and scale.
                        </p>
                        <Link href="/contact" className="btn-primary">
                            Book Free Consultation <ArrowRight className="w-5 h-5" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
