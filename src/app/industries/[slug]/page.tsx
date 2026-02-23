import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { industries } from "@/lib/data/industries";
import { services } from "@/lib/data/services";
import { getIcon } from "@/lib/icon-map";
import {
    ArrowRight,
    ArrowLeft,
    CheckCircle,
    Zap,
    Target,
    LineChart,
    Shield,
    Clock,
    DollarSign,
} from "lucide-react";

// Extended industry details for sub-pages
const industryDetails: Record<string, {
    heroSubtitle: string;
    stats: { value: string; label: string }[];
    challenges: string[];
    benefits: { icon: React.ElementType; title: string; description: string }[];
    caseStudy?: { title: string; result: string; metric: string };
}> = {
    "retail-shops": {
        heroSubtitle: "Streamline operations, sync inventory across channels, and create seamless customer experiences with intelligent automation.",
        stats: [
            { value: "40%", label: "Inventory Management Time Saved" },
            { value: "99.5%", label: "Stock Accuracy" },
            { value: "3x", label: "Faster Order Processing" },
        ],
        challenges: [
            "Manual inventory tracking across multiple locations",
            "Inconsistent customer data between POS and CRM",
            "Time-consuming order fulfillment processes",
            "Difficulty managing multi-channel sales",
            "Poor visibility into sales performance",
        ],
        benefits: [
            { icon: Zap, title: "Real-time Inventory Sync", description: "Automatic stock updates across all sales channels and locations" },
            { icon: Target, title: "Customer 360 View", description: "Unified customer profiles with purchase history and preferences" },
            { icon: Clock, title: "Automated Reordering", description: "Smart alerts and automatic purchase order generation" },
            { icon: DollarSign, title: "Revenue Optimization", description: "Data-driven pricing and promotion automation" },
        ],
    },
    "local-businesses": {
        heroSubtitle: "Compete with larger players through smart automation that handles bookings, customer communication, and reviews.",
        stats: [
            { value: "60%", label: "Less Time on Admin" },
            { value: "85%", label: "Review Response Rate" },
            { value: "2x", label: "Customer Retention" },
        ],
        challenges: [
            "Managing appointments and scheduling manually",
            "Responding to customer inquiries promptly",
            "Collecting and managing customer reviews",
            "Generating quotes and invoices efficiently",
            "Keeping Google Business profile updated",
        ],
        benefits: [
            { icon: Clock, title: "24/7 Booking System", description: "AI-powered appointment scheduling that never sleeps" },
            { icon: Target, title: "Automated Review Management", description: "Request, respond, and analyze customer reviews automatically" },
            { icon: Zap, title: "Instant Quotes", description: "Generate and send professional quotes in seconds" },
            { icon: LineChart, title: "Local SEO Automation", description: "Keep your online presence updated and optimized" },
        ],
    },
    "smes": {
        heroSubtitle: "Get enterprise-level automation capabilities at a fraction of the cost. Scale your operations without scaling your team.",
        stats: [
            { value: "70%", label: "Process Automation" },
            { value: "50%", label: "Cost Reduction" },
            { value: "5x", label: "Team Productivity" },
        ],
        challenges: [
            "Limited resources for manual processes",
            "Disconnected business systems and data silos",
            "Scaling operations without proportional hiring",
            "Competing with larger, well-resourced competitors",
            "Lack of real-time business insights",
        ],
        benefits: [
            { icon: LineChart, title: "Business Intelligence", description: "Real-time dashboards and automated reporting" },
            { icon: Zap, title: "Process Automation", description: "Eliminate repetitive tasks across all departments" },
            { icon: Shield, title: "Enterprise Integration", description: "Connect all your tools into one unified system" },
            { icon: DollarSign, title: "Cost Efficiency", description: "Do more with less through smart automation" },
        ],
    },
    "enterprises": {
        heroSubtitle: "Mission-critical automation infrastructure that scales with your global operations while maintaining security and compliance.",
        stats: [
            { value: "99.9%", label: "System Uptime" },
            { value: "80%", label: "Faster Reporting" },
            { value: "100%", label: "Audit Compliance" },
        ],
        challenges: [
            "Complex cross-departmental workflows",
            "Legacy system integration challenges",
            "Strict compliance and audit requirements",
            "Global data synchronization needs",
            "Managing automation at scale",
        ],
        benefits: [
            { icon: Shield, title: "Enterprise Security", description: "SOC2-compliant automation with full audit trails" },
            { icon: Zap, title: "Global Scale", description: "Infrastructure that handles millions of operations daily" },
            { icon: Target, title: "System Integration", description: "Connect SAP, Oracle, Salesforce, and 400+ enterprise tools" },
            { icon: LineChart, title: "Custom Reporting", description: "Automated reports tailored to your KPIs" },
        ],
    },
    "agencies": {
        heroSubtitle: "Scale your agency with white-label automation solutions and managed services for your clients.",
        stats: [
            { value: "10x", label: "Client Capacity" },
            { value: "90%", label: "Reporting Time Saved" },
            { value: "40%", label: "Higher Margins" },
        ],
        challenges: [
            "Manual client reporting consuming billable hours",
            "Managing multiple client accounts efficiently",
            "Scaling services without proportional hiring",
            "Offering competitive automation services",
            "Resource allocation across projects",
        ],
        benefits: [
            { icon: Zap, title: "White-Label Solutions", description: "Offer automation services under your own brand" },
            { icon: LineChart, title: "Automated Reporting", description: "Generate client reports automatically" },
            { icon: Target, title: "Multi-Client Management", description: "Handle more clients with less overhead" },
            { icon: DollarSign, title: "New Revenue Streams", description: "Add automation services to your offerings" },
        ],
    },
    "ecommerce": {
        heroSubtitle: "From cart to delivery, automate every step of your e-commerce operation for maximum efficiency and customer satisfaction.",
        stats: [
            { value: "45%", label: "Cart Recovery Rate" },
            { value: "99%", label: "Order Accuracy" },
            { value: "4x", label: "Faster Fulfillment" },
        ],
        challenges: [
            "Managing orders across multiple marketplaces",
            "High cart abandonment rates",
            "Complex inventory management",
            "Customer lifecycle engagement",
            "Returns and refunds processing",
        ],
        benefits: [
            { icon: Target, title: "Multi-Channel Sync", description: "Unified dashboard for Amazon, Shopify, WooCommerce, and more" },
            { icon: Zap, title: "Abandoned Cart Recovery", description: "Automated sequences that bring customers back" },
            { icon: Clock, title: "Instant Fulfillment", description: "Automatic order routing and shipping label generation" },
            { icon: LineChart, title: "Customer Lifecycle", description: "Automated re-engagement and upsell campaigns" },
        ],
    },
    "real-estate": {
        heroSubtitle: "Close more deals faster with automated lead nurturing, property matching, and AI-powered client communication.",
        stats: [
            { value: "3x", label: "Lead Conversion" },
            { value: "80%", label: "Less Manual Data Entry" },
            { value: "24/7", label: "Lead Response Time" },
        ],
        challenges: [
            "Slow lead follow-up losing potential clients",
            "Manual property matching is time-consuming",
            "Document management overhead",
            "Scheduling viewings efficiently",
            "Tracking commissions and deals",
        ],
        benefits: [
            { icon: Zap, title: "Instant Lead Response", description: "AI agents that respond to inquiries 24/7" },
            { icon: Target, title: "Smart Property Matching", description: "Automatic matching based on buyer preferences" },
            { icon: Clock, title: "Viewing Automation", description: "Self-service scheduling with calendar integration" },
            { icon: LineChart, title: "Deal Tracking", description: "Complete pipeline visibility and commission tracking" },
        ],
    },
    "consultants": {
        heroSubtitle: "Spend less time on admin and more time delivering value. Automate proposals, contracts, and project workflows.",
        stats: [
            { value: "10hrs", label: "Saved Weekly" },
            { value: "50%", label: "Faster Onboarding" },
            { value: "95%", label: "On-Time Invoicing" },
        ],
        challenges: [
            "Time-consuming proposal creation",
            "Inconsistent client onboarding",
            "Tracking billable hours accurately",
            "Managing multiple projects simultaneously",
            "Delayed invoicing and payment collection",
        ],
        benefits: [
            { icon: Zap, title: "Proposal Automation", description: "Generate professional proposals in minutes" },
            { icon: Target, title: "Client Onboarding", description: "Smooth, consistent onboarding for every client" },
            { icon: Clock, title: "Time & Billing", description: "Automatic time tracking and invoice generation" },
            { icon: LineChart, title: "Project Workflows", description: "Automated milestone updates and deliverables" },
        ],
    },
    "saas": {
        heroSubtitle: "Automate user onboarding, reduce churn, and scale customer success with intelligent workflows.",
        stats: [
            { value: "40%", label: "Improved Activation" },
            { value: "30%", label: "Reduced Churn" },
            { value: "5x", label: "Support Efficiency" },
        ],
        challenges: [
            "Poor user onboarding and activation",
            "High customer churn rates",
            "Scaling customer success operations",
            "Managing support tickets efficiently",
            "Tracking feature adoption and usage",
        ],
        benefits: [
            { icon: Zap, title: "Onboarding Automation", description: "Guide users to their 'aha moment' faster" },
            { icon: Target, title: "Churn Prevention", description: "Predict and prevent customer churn proactively" },
            { icon: Shield, title: "AI Support", description: "Intelligent ticket routing and auto-responses" },
            { icon: LineChart, title: "Product Analytics", description: "Track feature adoption and user behavior" },
        ],
    },
    "startups": {
        heroSubtitle: "Move fast and break nothing. Get enterprise-grade automation from day one that scales as you grow.",
        stats: [
            { value: "10x", label: "Faster Execution" },
            { value: "60%", label: "Less Manual Work" },
            { value: "MVP+", label: "Ready for Scale" },
        ],
        challenges: [
            "Limited resources and tight timelines",
            "Need to move fast and iterate quickly",
            "Building scalable processes from scratch",
            "Managing investor and stakeholder reporting",
            "Team productivity and collaboration",
        ],
        benefits: [
            { icon: Zap, title: "Rapid Deployment", description: "Get automation live in days, not months" },
            { icon: Target, title: "Growth Automation", description: "Test and optimize growth experiments automatically" },
            { icon: LineChart, title: "Investor Reporting", description: "Automated KPI tracking and report generation" },
            { icon: Clock, title: "Team Productivity", description: "Streamline collaboration and task management" },
        ],
    },
    "hospitality": {
        heroSubtitle: "Delight guests with AI-powered communication, seamless reservations, and personalized experiences at scale.",
        stats: [
            { value: "50%", label: "Call Volume Reduction" },
            { value: "4.8⭐", label: "Average Guest Rating" },
            { value: "24/7", label: "Guest Support" },
        ],
        challenges: [
            "High call volumes for reservations",
            "Inconsistent guest communication",
            "Managing room service and requests",
            "Responding to online reviews",
            "Staff scheduling complexities",
        ],
        benefits: [
            { icon: Zap, title: "AI Voice Agents", description: "Handle reservations and inquiries 24/7" },
            { icon: Target, title: "Guest Communication", description: "Personalized messages throughout the stay" },
            { icon: Clock, title: "Service Automation", description: "Instant room service and request handling" },
            { icon: LineChart, title: "Review Management", description: "Monitor and respond to reviews automatically" },
        ],
    },
    "logistics": {
        heroSubtitle: "Optimize routes, automate customer updates, and streamline operations with real-time delivery automation.",
        stats: [
            { value: "25%", label: "Delivery Cost Reduction" },
            { value: "99%", label: "Customer Update Rate" },
            { value: "Real-time", label: "Tracking Updates" },
        ],
        challenges: [
            "Manual delivery tracking and updates",
            "Inefficient route planning",
            "Customer communication overhead",
            "Proof of delivery management",
            "Claims and exception handling",
        ],
        benefits: [
            { icon: Zap, title: "Real-time Tracking", description: "Automatic status updates to customers" },
            { icon: Target, title: "Route Optimization", description: "Smart routing for faster deliveries" },
            { icon: Clock, title: "Customer Notifications", description: "Proactive updates via WhatsApp and SMS" },
            { icon: LineChart, title: "Analytics Dashboard", description: "Complete visibility into delivery performance" },
        ],
    },
};

export async function generateStaticParams() {
    return industries.map((industry) => ({
        slug: industry.id,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const industry = industries.find((i) => i.id === slug);

    if (!industry) {
        return {
            title: "Industry Not Found | n8nera",
        };
    }

    return {
        title: `${industry.name} Automation Solutions UAE`,
        description: `${industry.description} Expert automation services for ${industry.name.toLowerCase()} in Dubai, Abu Dhabi, and across the UAE.`,
        keywords: [
            `${industry.name.toLowerCase()} automation UAE`,
            `${industry.name.toLowerCase()} automation Dubai`,
            `n8n automation ${industry.name.toLowerCase()}`,
            ...industry.useCases.map((uc) => uc.toLowerCase()),
        ],
        openGraph: {
            title: `${industry.name} Automation Solutions | n8nera`,
            description: industry.description,
            url: `https://n8nera.tech/industries/${slug}/`,
            type: "website",
        },
        alternates: {
            canonical: `https://n8nera.tech/industries/${slug}/`,
        },
    };
}

export default async function IndustryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const industry = industries.find((i) => i.id === slug);

    if (!industry) {
        notFound();
    }

    const Icon = getIcon(industry.icon);
    const details = industryDetails[industry.id] ?? industryDetails["smes"];
    if (!details) {
        notFound();
    }
    const industryServices = industry.services
        .map((id) => services.find((s) => s.id === id))
        .filter((s): s is NonNullable<typeof s> => s != null);

    // Get other industries for navigation
    const otherIndustries = industries.filter((i) => i.id !== industry.id).slice(0, 4);

    // Industry Schema.org structured data
    const industrySchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${industry.name} Automation Solutions`,
        description: `${industry.description} Expert automation services for ${industry.name.toLowerCase()} in Dubai, Abu Dhabi, and across the UAE.`,
        url: `https://n8nera.tech/industries/${slug}/`,
        provider: {
            "@type": "Organization",
            name: "n8nera",
            url: "https://n8nera.tech",
            "@id": "https://n8nera.tech/#organization",
        },
        areaServed: {
            "@type": "Country",
            name: "United Arab Emirates",
        },
        serviceType: `${industry.name} Automation`,
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${industry.name} Automation Services`,
            itemListElement: industryServices.map((s) => ({
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: s.title,
                    description: s.longDescription,
                },
            })),
        },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://n8nera.tech" },
            { "@type": "ListItem", position: 2, name: "Industries", item: "https://n8nera.tech/industries" },
            { "@type": "ListItem", position: 3, name: industry.name, item: `https://n8nera.tech/industries/${slug}` },
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: `What automation solutions does n8nera offer for ${industry.name.toLowerCase()}?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `n8nera provides ${industryServices.map((s) => s.title.toLowerCase()).join(", ")} for ${industry.name.toLowerCase()} businesses in the UAE. ${industry.description}`,
                },
            },
            {
                "@type": "Question",
                name: `How much does ${industry.name.toLowerCase()} automation cost?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `Pricing starts at $500 for starter packages, $1,000-$5,000 for professional solutions, and $5,000+ for enterprise setups. Contact n8nera for a custom quote tailored to your ${industry.name.toLowerCase()} needs.`,
                },
            },
            {
                "@type": "Question",
                name: `What results can ${industry.name.toLowerCase()} businesses expect from automation?`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `${industry.name} clients typically see ${details.stats.map((s) => `${s.value} ${s.label}`).join(", ")}. ROI is usually achieved within 3-6 months.`,
                },
            },
        ],
    };

    return (
        <div className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(industrySchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-premium-pattern" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <Link
                            href="/industries"
                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to All Industries
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500/20 to-primary-600/20 flex items-center justify-center">
                                <Icon className="w-8 h-8 text-accent-400" />
                            </div>
                            <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider">
                                Industry Automation
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                            Automation for{" "}
                            <span className="text-gradient">{industry.name}</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-8">
                            {details.heroSubtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="btn-primary">
                                Get Free Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/case-studies" className="btn-secondary">
                                View Case Studies
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative py-12 overflow-hidden border-y border-white/5">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-3 gap-8">
                        {details.stats.map((stat, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="text-center">
                                    <p className="text-3xl md:text-4xl font-display font-bold text-gradient-purple mb-2">
                                        {stat.value}
                                    </p>
                                    <p className="text-sm text-gray-400">{stat.label}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenges Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <AnimatedSection>
                            <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4 block">
                                The Challenge
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                                Common {industry.name} Pain Points We Solve
                            </h2>
                            <p className="text-gray-400 mb-8">
                                Many {industry.name.toLowerCase()} businesses struggle with manual processes
                                that slow growth and drain resources. We&apos;ve helped dozens of companies
                                overcome these exact challenges.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="space-y-4">
                                {details.challenges.map((challenge, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 p-4 rounded-xl bg-dark-900/50 border border-white/5"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                                            <span className="text-red-400 text-sm font-bold">{index + 1}</span>
                                        </div>
                                        <p className="text-gray-300">{challenge}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4 block">
                                The Solution
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                                How We Transform Your Operations
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Our automation solutions are specifically designed for {industry.name.toLowerCase()}
                                businesses, addressing your unique challenges and unlocking new growth potential.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {details.benefits.map((benefit, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="glass-card p-6 h-full group hover:border-accent-500/30 transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/10 to-primary-600/10 flex items-center justify-center mb-4 group-hover:from-accent-500/20 group-hover:to-primary-600/20 transition-colors">
                                        <benefit.icon className="w-6 h-6 text-accent-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-gray-400">{benefit.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4 block">
                                Use Cases
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                                What We Automate for {industry.name}
                            </h2>
                        </div>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industry.useCases.map((useCase, index) => (
                            <AnimatedSection key={index} delay={index * 0.05}>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-dark-900/50 border border-white/5 hover:border-accent-500/20 transition-colors">
                                    <CheckCircle className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                                    <p className="text-gray-300">{useCase}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recommended Services Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4 block">
                                Recommended Services
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                                Perfect Solutions for {industry.name}
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Based on our experience with {industry.name.toLowerCase()} clients,
                                these services deliver the highest impact for your business.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8">
                        {industryServices.map((service, index) => (
                            <AnimatedSection key={service!.id} delay={index * 0.1}>
                                <Link href={`/services/${service!.id}`} className="block group">
                                    <div className="glass-card p-6 h-full hover:border-accent-500/30 transition-all">
                                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-300 transition-colors">
                                            {service!.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4">
                                            {service!.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-accent-400 text-sm font-medium">
                                            Learn More
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Industries Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center mb-12">
                            <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4 block">
                                Explore More
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                                Other Industries We Serve
                            </h2>
                        </div>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {otherIndustries.map((ind, index) => {
                            const IndIcon = getIcon(ind.icon);
                            return (
                                <AnimatedSection key={ind.id} delay={index * 0.1}>
                                    <Link href={`/industries/${ind.id}`} className="block group">
                                        <div className="glass-card p-6 hover:border-accent-500/30 transition-all">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/10 to-primary-600/10 flex items-center justify-center mb-4">
                                                <IndIcon className="w-6 h-6 text-accent-400" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-300 transition-colors">
                                                {ind.name}
                                            </h3>
                                            <p className="text-sm text-gray-400 line-clamp-2">
                                                {ind.description}
                                            </p>
                                        </div>
                                    </Link>
                                </AnimatedSection>
                            );
                        })}
                    </div>

                    <div className="text-center mt-8">
                        <Link href="/industries" className="btn-secondary">
                            View All Industries
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-950/50 via-dark-950 to-primary-950/50" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Ready to Transform Your {industry.name} Business?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Book a free consultation and discover how we can automate your
                            operations, reduce costs, and accelerate growth.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                Get Free Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/case-studies" className="btn-secondary">
                                View Success Stories
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
