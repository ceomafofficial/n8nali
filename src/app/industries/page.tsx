import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { industries } from "@/lib/data/industries";
import { services } from "@/lib/data/services";
import { getIcon } from "@/lib/icon-map";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getCollectionPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Industries — n8n Automation for 15+ Sectors [Use Cases]",
    description:
        "See how n8n automation transforms 15+ industries: e-commerce, healthcare, real estate, SaaS, finance, logistics & more. Industry-specific workflows with proven ROI. Explore use cases →",
    keywords: [
        "n8n automation industries",
        "automation for retail",
        "enterprise automation",
        "SME automation solutions",
        "e-commerce automation n8n",
        "healthcare automation",
        "real estate automation",
        "SaaS automation",
    ],
    openGraph: {
        title: "n8n Automation for 15+ Industries — See Use Cases | n8nera",
        description: "Industry-specific n8n workflows for e-commerce, healthcare, finance, SaaS & 11 more sectors. Proven ROI.",
        url: "https://n8nera.tech/industries/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@n8nera",
        creator: "@n8nera",
        title: "n8n Automation for 15+ Industries [Use Cases] | n8nera",
        description: "Industry-specific n8n workflows for e-commerce, healthcare, finance, SaaS & more. Proven ROI.",
    },
    alternates: {
        canonical: "https://n8nera.tech/industries/",
    },
};

export default function IndustriesPage() {
    const industriesSchema = getCollectionPageSchema({
        url: "https://n8nera.tech/industries/",
        name: "Industries We Serve - Automation Solutions UAE",
        description: "n8nera provides automation solutions for retail, SMEs, enterprises, e-commerce, real estate, SaaS, hospitality, and more across Dubai, Abu Dhabi, and UAE.",
        items: industries.map(ind => ({
            name: ind.name,
            url: `https://n8nera.tech/industries/${ind.id}/`,
            description: ind.description,
        })),
        breadcrumbs: [
            { name: "Home", url: "https://n8nera.tech" },
            { name: "Industries", url: "https://n8nera.tech/industries/" },
        ],
    });

    return (
        <div className="pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesSchema) }}
            />
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-white" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                            Industries We Serve
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                            Automation Solutions for{" "}
                            <span className="text-[#4285F4]">Every Industry</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                            From local shops to global enterprises, we&apos;ve built automation
                            systems that transform operations across diverse industries in the
                            UAE and beyond.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Every industry faces unique operational challenges, and n8nera has developed specialized automation solutions that address the specific needs of businesses across diverse sectors in the UAE. From retail shops managing inventory and customer orders to enterprises coordinating complex workflows across departments, our industry-specific automation expertise ensures you get solutions that truly understand your business context.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Our portfolio spans retail and e-commerce businesses automating order fulfillment, real estate agencies streamlining lead management, hospitality venues implementing AI voice agents for reservations, logistics companies optimizing delivery tracking, SaaS platforms automating user onboarding, and consulting firms eliminating administrative overhead. Each solution is built on proven frameworks refined through 200+ successful implementations across Dubai, Abu Dhabi, and the broader Middle East region.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Whether you&apos;re a local SME looking to compete with larger players through automation, a growing startup needing to scale operations efficiently, or an established enterprise seeking to modernize legacy processes, we bring deep industry knowledge combined with technical excellence in n8n workflow automation and AI voice technology. Our clients consistently report 40-60% cost reductions, 95%+ error elimination, and the ability to handle 10x volume without proportional staff increases.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, index) => {
                            const Icon = getIcon(industry.icon);
                            const industryServices = industry.services
                                .map((id) => services.find((s) => s.id === id))
                                .filter((s): s is NonNullable<typeof s> => s != null);

                            return (
                                <AnimatedSection key={industry.id} delay={index * 0.1}>
                                    <div className="google-card h-full bg-white p-6 group hover:border-[#4285F4]/30 transition-all">
                                        {/* Header */}
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500/10 to-primary-600/10 flex items-center justify-center flex-shrink-0 group-hover:from-accent-500/20 group-hover:to-primary-600/20 transition-colors">
                                                <Icon className="w-7 h-7 text-[#4285F4]" />
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-[#4285F4] transition-colors">
                                                    {industry.name}
                                                </h2>
                                                <p className="text-sm text-gray-500">{industry.useCases.length} use cases</p>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm mb-4">
                                            {industry.description}
                                        </p>

                                        {/* Use Cases */}
                                        <div className="mb-4">
                                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                                                Common Use Cases:
                                            </p>
                                            <ul className="space-y-1">
                                                {industry.useCases.slice(0, 3).map((useCase, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                                        <span className="w-1 h-1 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                                                        {useCase}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Relevant Services */}
                                        <div className="pt-4 border-t border-white/5">
                                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                                                Recommended Services:
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {industryServices.slice(0, 3).map((service) => (
                                                    <Link
                                                        key={service.id}
                                                        href={`/services/${service.id}`}
                                                        className="text-xs px-3 py-1 rounded-full bg-gray-50 text-gray-400 hover:bg-accent-500/20 hover:text-[#4285F4] transition-colors"
                                                    >
                                                        {service.shortTitle}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <Link
                                            href={`/industries/${industry.id}`}
                                            className="flex items-center gap-2 mt-4 text-sm font-medium text-accent-400 group-hover:text-[#4285F4]"
                                        >
                                            Learn more
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br [#4285F4]" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                            Don&apos;t See Your Industry?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            We build custom automation solutions for any industry. Tell us about
                            your business and we&apos;ll show you what&apos;s possible.
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
