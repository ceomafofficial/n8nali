import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services, serviceCategories } from "@/lib/data/services";
import { getIcon } from "@/lib/icon-map";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "16 n8n Automation Services — From $500/Project [2026]",
    description:
        "Explore 16 battle-tested n8n automation services: CRM automation, AI voice agents, WhatsApp bots, data pipelines & more. 200+ workflows delivered. Average ROI in 30 days. See pricing & get your free audit →",
    keywords: [
        "n8n automation services",
        "n8n services",
        "AI voice agents",
        "CRM automation",
        "WhatsApp automation",
        "business process automation",
        "n8n services pricing",
        "automation solutions",
    ],
    openGraph: {
        title: "16 n8n Automation Services — See What We Can Automate | n8nera",
        description: "CRM, WhatsApp, AI voice agents, data pipelines & 12 more services. 200+ workflows built. From $500/project. Free audit available.",
        url: "https://n8nera.tech/services/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@n8nera",
        creator: "@n8nera",
        title: "16 n8n Automation Services — From $500/Project | n8nera",
        description: "CRM, WhatsApp, AI voice agents & 12 more services. 200+ workflows built. Free audit available.",
    },
    alternates: {
        canonical: "https://n8nera.tech/services/",
    },
};

export default function ServicesPage() {
    // Group services by category
    const automationServices = services.filter((s) => s.category === "automation");
    const voiceAIServices = services.filter((s) => s.category === "voice-ai");
    const integrationServices = services.filter((s) => s.category === "integration");

    const [automationCat, voiceAICat, integrationCat] = serviceCategories;
    if (!automationCat || !voiceAICat || !integrationCat) {
        throw new Error("Missing service categories configuration");
    }

    const groupedServices = [
        { category: automationCat, services: automationServices },
        { category: voiceAICat, services: voiceAIServices },
        { category: integrationCat, services: integrationServices },
    ];

    // Generate ItemList + Service schemas for AI models
    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "n8nera Automation & AI Services",
        description: "Complete list of automation and AI services offered by n8nera for businesses in USA, UAE, Canada & Netherlands",
        numberOfItems: services.length,
        itemListElement: services.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
                "@type": "Service",
                name: service.title,
                description: service.description,
                url: `https://n8nera.tech/services/${service.id}/`,
                provider: {
                    "@type": "Organization",
                    name: "n8nera",
                    url: "https://n8nera.tech",
                },
                areaServed: {
                    "@type": "Country",
                    name: "United Arab Emirates",
                },
                serviceType: service.category === "voice-ai" ? "AI Voice Agent" : service.category === "integration" ? "System Integration" : "Workflow Automation",
            },
        })),
    };

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: "Home", url: "https://n8nera.tech" },
        { name: "Services", url: "https://n8nera.tech/services" },
    ]);

    return (
        <div className="pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
                            Our Services
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                            Automation Solutions That{" "}
                            <span className="text-[#4285F4]">Scale Your Business</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                            From workflow automation to AI voice agents, discover the complete
                            range of services that help businesses worldwide operate smarter, faster,
                            and more efficiently.
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
                                n8nera is a Pakistan-based automation and AI agency, specializing in transforming business operations through intelligent workflow automation and cutting-edge AI voice agents. We serve businesses across the USA, UAE, Canada & Netherlands remotely, delivering premium results at competitive rates. Our comprehensive suite of services is designed to help businesses eliminate repetitive tasks, reduce operational costs by up to 60%, and scale effortlessly without proportional increases in headcount.
                            </p>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                From small local businesses to large enterprises across Dubai, Abu Dhabi, and all UAE emirates, we deliver custom automation solutions that drive measurable results. Our expertise spans business process automation, CRM integration, WhatsApp automation, e-commerce optimization, and advanced AI voice agents that handle customer interactions 24/7 with human-like conversations in English, Arabic, and Urdu.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Whether you need to automate order processing, streamline lead management, implement intelligent customer support, or integrate disparate systems, our team of certified n8n specialists and AI engineers will design, build, and deploy solutions tailored to your unique business needs. Every automation we create is built for scalability, reliability, and maximum ROI, with most clients seeing payback within 3-6 months.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Services by Category */}
            {groupedServices.map((group, groupIndex) => {
                const CategoryIcon = getIcon(group.category.icon);

                return (
                    <section
                        key={group.category.id}
                        id={group.category.id}
                        className="relative py-20 overflow-hidden"
                    >
                        {/* Alternating Background */}
                        <div className={`absolute inset-0 ${groupIndex % 2 === 0 ? 'bg-dark-950' : 'bg-dark-900/50'}`} />

                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            {/* Category Header */}
                            <AnimatedSection className="flex items-center gap-4 mb-12">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500/20 to-primary-600/20 flex items-center justify-center">
                                    <CategoryIcon className="w-7 h-7 text-[#4285F4]" />
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                                        {group.category.title}
                                    </h2>
                                    <p className="text-gray-400">{group.category.description}</p>
                                </div>
                            </AnimatedSection>

                            {/* Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {group.services.map((service, index) => {
                                    const Icon = getIcon(service.icon);
                                    return (
                                        <AnimatedSection key={service.id} delay={index * 0.1}>
                                            <Link href={`/services/${service.id}`} className="group block h-full">
                                                <div className="google-card h-full bg-white p-6">
                                                    {/* Icon */}
                                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/10 to-primary-600/10 flex items-center justify-center mb-4 group-hover:from-accent-500/20 group-hover:to-primary-600/20 transition-colors">
                                                        <Icon className="w-6 h-6 text-[#4285F4]" />
                                                    </div>

                                                    {/* Content */}
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#4285F4] transition-colors">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-400 mb-4">
                                                        {service.description}
                                                    </p>

                                                    {/* Features Preview */}
                                                    <ul className="space-y-1 mb-4">
                                                        {service.features.slice(0, 3).map((feature, i) => (
                                                            <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                                                                <span className="w-1 h-1 rounded-full bg-accent-500 mt-1.5 flex-shrink-0" />
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    {/* CTA */}
                                                    <div className="flex items-center gap-2 text-sm font-medium text-accent-400 group-hover:text-[#4285F4]">
                                                        Learn more
                                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </AnimatedSection>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* CTA Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br [#4285F4]" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                            Not Sure Which Service You Need?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Book a free consultation and we&apos;ll help you identify the automation
                            opportunities with the highest ROI for your business.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                Book Free Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="https://wa.me/923141603089" target="_blank" className="whatsapp-btn">
                                <WhatsAppIcon />
                                WhatsApp Us
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
