import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "n8n Automation Pricing — Avg Client Saves $8,400/mo. Investment Starts $500",
    description: "See exactly what our automation costs before you commit. Clients save avg $8,400/mo after going live. Starter from $500, Professional from $2K, Enterprise custom. No hidden fees. Free audit shows your exact ROI first.",
    keywords: ["n8n automation pricing", "automation costs", "AI voice agent pricing", "n8n pricing", "workflow automation cost", "n8n agency rates", "automation ROI"],
    openGraph: {
        title: "What Does Automation Actually Cost? (And What Does It Save You?)",
        description: "Avg client saves $8,400/mo. Investment starts at $500. Transparent pricing, zero hidden fees. Free audit tells you the ROI before you spend a dollar.",
        url: "https://n8nera.tech/pricing/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@n8nera",
        creator: "@n8nera",
        title: "n8n Automation from $500 — Avg Client Saves $8,400/mo | n8nera",
        description: "Transparent pricing. No hidden fees. Free audit shows your exact ROI before you invest. Starter $500 → see full breakdown.",
    },
    alternates: {
        canonical: "https://n8nera.tech/pricing/",
    },
};

const pricingTiers = [
    {
        name: "Starter",
        description: "Perfect for small businesses starting their automation journey",
        price: "Get Quote",
        period: "tailored to your needs",
        features: [
            "Up to 3 automation workflows",
            "Basic integrations (CRM, Email, Sheets)",
            "Self-hosted or cloud deployment",
            "2 weeks implementation",
            "30 days post-launch support",
            "Documentation & training",
        ],
        highlight: false,
        cta: "Get Started",
    },
    {
        name: "Professional",
        description: "For growing businesses with complex automation needs",
        price: "Get Quote",
        period: "tailored to your needs",
        features: [
            "Up to 10 automation workflows",
            "Advanced integrations (any system)",
            "Custom logic & AI integration",
            "WhatsApp Business automation",
            "4 weeks implementation",
            "90 days post-launch support",
            "Priority support channel",
            "Monthly optimization review",
        ],
        highlight: true,
        cta: "Most Popular",
    },
    {
        name: "Enterprise",
        description: "Full-scale automation transformation for large organizations",
        price: "Custom",
        period: "contact for quote",
        features: [
            "Unlimited automation workflows",
            "Enterprise system integration",
            "AI Voice Agents included",
            "Dedicated automation architect",
            "Self-hosted infrastructure setup",
            "24/7 priority support",
            "Quarterly strategy reviews",
            "SLA-backed uptime guarantee",
            "Team training workshops",
        ],
        highlight: false,
        cta: "Contact Sales",
    },
];

const addOns = [
    { name: "AI Voice Agent Setup", price: "Custom", description: "Per agent, includes training and integration" },
    { name: "Monthly Maintenance", price: "Custom", description: "Monitoring, updates, and ongoing optimization" },
    { name: "Additional Workflows", price: "Custom", description: "Per workflow, depends on complexity" },
    { name: "Emergency Support", price: "Custom", description: "Outside business hours support" },
];


export default function PricingPage() {
    const pricingSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "n8nera Automation & AI Services",
        description: "Enterprise-grade automation and AI solutions for businesses worldwide. Custom workflow automation, AI voice agents, and business process optimization.",
        brand: {
            "@type": "Organization",
            name: "n8nera",
            url: "https://n8nera.tech",
        },
        offers: {
            "@type": "AggregateOffer",
            lowPrice: "500",
            highPrice: "10000",
            priceCurrency: "USD",
            offerCount: 3,
            offers: [
                {
                    "@type": "Offer",
                    name: "Starter Package",
                    description: "Up to 3 automation workflows, basic integrations, 30-day support",
                    priceSpecification: {
                        "@type": "PriceSpecification",
                        price: "500",
                        minPrice: "500",
                        maxPrice: "1000",
                        priceCurrency: "USD",
                    },
                    availability: "https://schema.org/InStock",
                },
                {
                    "@type": "Offer",
                    name: "Professional Package",
                    description: "Up to 10 workflows, advanced integrations, AI integration, 90-day support",
                    priceSpecification: {
                        "@type": "PriceSpecification",
                        price: "1000",
                        minPrice: "1000",
                        maxPrice: "5000",
                        priceCurrency: "USD",
                    },
                    availability: "https://schema.org/InStock",
                },
                {
                    "@type": "Offer",
                    name: "Enterprise Package",
                    description: "Unlimited workflows, enterprise integration, AI voice agents, dedicated architect, 24/7 support",
                    priceSpecification: {
                        "@type": "PriceSpecification",
                        price: "5000",
                        minPrice: "5000",
                        priceCurrency: "USD",
                    },
                    availability: "https://schema.org/InStock",
                },
            ],
        },
    };

    const pricingFAQSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            { "@type": "Question", name: "What's included in the one-time setup fee?", acceptedAnswer: { "@type": "Answer", text: "Discovery session, workflow design, development, testing, deployment, documentation, and post-launch support for the specified period." } },
            { "@type": "Question", name: "Do you offer monthly payment plans?", acceptedAnswer: { "@type": "Answer", text: "Yes, for larger projects we can arrange monthly payment plans. Contact us to discuss options." } },
            { "@type": "Question", name: "What if I need changes after the project is complete?", acceptedAnswer: { "@type": "Answer", text: "Post-launch support is included. Additional changes beyond scope are billed at our hourly rate or as a new project." } },
            { "@type": "Question", name: "Is there a money-back guarantee?", acceptedAnswer: { "@type": "Answer", text: "We work closely with you throughout the project. If we can't deliver what we promised, we'll make it right or refund your investment." } },
        ],
    };

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: "Home", url: "https://n8nera.tech" },
        { name: "Pricing", url: "https://n8nera.tech/pricing" },
    ]);

    return (
        <div className="pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFAQSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {/* Hero */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-white" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                            Pricing
                        </span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            Transparent, Value-Based <span className="text-[#4285F4]">Pricing</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            No hidden fees. No surprises. Just clear pricing for automation solutions that deliver measurable ROI.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricingTiers.map((tier, index) => (
                            <AnimatedSection key={tier.name} delay={index * 0.1}>
                                <div className={`glass-card h-full p-8 flex flex-col ${tier.highlight ? "border-accent-500/50 ring-1 ring-accent-500/20" : ""}`}>
                                    {tier.highlight && (
                                        <span className="inline-block px-3 py-1 rounded-full bg-accent-500 text-white text-xs font-semibold mb-4 self-start">
                                            Most Popular
                                        </span>
                                    )}

                                    <h3 className="text-2xl font-display font-bold text-white mb-2">{tier.name}</h3>
                                    <p className="text-sm text-gray-400 mb-6">{tier.description}</p>

                                    <div className="mb-6">
                                        <span className="text-4xl font-display font-bold text-white">{tier.price}</span>
                                        <span className="text-sm text-gray-500 ml-2">{tier.period}</span>
                                    </div>

                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href="/contact"
                                        className={tier.highlight ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}
                                    >
                                        {tier.cta}
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Add-Ons */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Add-On Services</h2>
                        <p className="text-gray-400">Extend your automation with additional services</p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {addOns.map((addon, index) => (
                            <AnimatedSection key={addon.name} delay={index * 0.1}>
                                <div className="flex items-start justify-between p-6 rounded-xl bg-white/[0.02] border border-white/5">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">{addon.name}</h3>
                                        <p className="text-sm text-gray-400">{addon.description}</p>
                                    </div>
                                    <span className="text-[#4285F4] font-semibold whitespace-nowrap ml-4">{addon.price}</span>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />
                <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Pricing Questions</h2>
                    </AnimatedSection>

                    <div className="space-y-4">
                        {[
                            { q: "What's included in the one-time setup fee?", a: "Discovery session, workflow design, development, testing, deployment, documentation, and post-launch support for the specified period." },
                            { q: "Do you offer monthly payment plans?", a: "Yes, for larger projects we can arrange monthly payment plans. Contact us to discuss options." },
                            { q: "What if I need changes after the project is complete?", a: "Post-launch support is included. Additional changes beyond scope are billed at our hourly rate or as a new project." },
                            { q: "Is there a money-back guarantee?", a: "We work closely with you throughout the project. If we can't deliver what we promised, we'll make it right or refund your investment." },
                        ].map((item, i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <div className="google-card p-6 bg-white">
                                    <h3 className="flex items-start gap-3 text-white font-medium mb-2">
                                        <HelpCircle className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                                        {item.q}
                                    </h3>
                                    <p className="text-sm text-gray-400 pl-8">{item.a}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br [#4285F4]" />
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                            Not Sure Which Plan Fits?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Book a free consultation. We&apos;ll analyze your needs and recommend the best approach—no pressure.
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
