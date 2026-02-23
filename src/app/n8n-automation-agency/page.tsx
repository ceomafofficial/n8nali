import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import {
    ArrowRight,
    CheckCircle,
    Zap,
    DollarSign,
    Shield,
    Users,
    BarChart3,
    Headphones,
    Star,
    Building,
    Globe,
} from "lucide-react";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "#1 n8n Automation Agency — Save 20+ Hrs/Week [Free Audit]",
    description:
        "Top-rated n8n automation agency. We build workflows that save 20+ hrs/week & cut costs 60%. CRM, WhatsApp bots, AI voice agents. 200+ workflows delivered for 100+ businesses. Get your free automation audit today →",
    keywords: [
        "n8n automation agency",
        "n8n automation agency USA",
        "n8n automation agency Dubai",
        "n8n automation agency Canada",
        "n8n automation agency Netherlands",
        "best n8n agency",
        "n8n workflow agency",
        "n8n experts",
        "n8n consulting",
        "workflow automation agency",
        "automation agency New York",
        "automation agency Toronto",
        "automation agency Amsterdam",
    ],
    openGraph: {
        title: "#1 n8n Automation Agency — 200+ Workflows, 60% Cost Savings | n8nera",
        description:
            "Workflows that save 20+ hrs/week. CRM, WhatsApp, AI voice agents. 200+ implementations for 100+ businesses. Book your free audit →",
        url: "https://n8nera.tech/n8n-automation-agency/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@n8nera",
        creator: "@n8nera",
        title: "#1 n8n Automation Agency — Save 20+ Hrs/Week | n8nera",
        description: "200+ workflows, 60% cost savings. CRM, WhatsApp, AI voice agents. Free audit available.",
    },
    alternates: {
        canonical: "https://n8nera.tech/n8n-automation-agency/",
    },
};

const results = [
    { value: "500+", label: "Workflows Delivered" },
    { value: "60%", label: "Average Cost Savings" },
    { value: "20hrs", label: "Saved Per Week" },
    { value: "3-6mo", label: "Typical ROI Payback" },
];

const whyUs = [
    {
        icon: Zap,
        title: "n8n-First Approach",
        description:
            "We don't juggle ten different tools. n8n is our bread and butter. Every workflow we build is optimized, tested, and production-ready from day one.",
    },
    {
        icon: DollarSign,
        title: "Transparent Pricing",
        description:
            "No hidden fees. No surprise invoices. You know exactly what you're paying before we write a single line of code.",
    },
    {
        icon: Shield,
        title: "Enterprise-Grade Security",
        description:
            "Your data stays yours. We follow industry best practices — encrypted connections, role-based access, and full compliance with UAE data laws.",
    },
    {
        icon: Users,
        title: "Dedicated Team",
        description:
            "You get a project manager, a senior developer, and a QA engineer. Not a random freelancer who disappears after delivery.",
    },
    {
        icon: Headphones,
        title: "Ongoing Support",
        description:
            "We don't vanish after go-live. Our support team monitors your workflows 24/7 and fixes issues before you even notice them.",
    },
    {
        icon: Globe,
        title: "Built for Global Businesses",
        description:
            "We serve businesses across the USA, UAE, Canada & Netherlands — WhatsApp-first communication, multilingual support, compliance with local regulations, and region-specific integrations.",
    },
];

const processSteps = [
    {
        step: "01",
        title: "Free Automation Audit",
        description:
            "We look at your current operations — what's manual, what's breaking, what's costing you money. You get a clear report with specific automation opportunities and expected ROI. No cost, no obligation.",
    },
    {
        step: "02",
        title: "Strategy & Blueprint",
        description:
            "We map out every workflow, every integration, every edge case. You approve the plan before we touch any code. No surprises down the road.",
    },
    {
        step: "03",
        title: "Build & Test",
        description:
            "Our engineers build your workflows in n8n, connect your tools, and run thorough tests with real data. We don't ship anything that hasn't been stress-tested.",
    },
    {
        step: "04",
        title: "Launch & Monitor",
        description:
            "We deploy to production, monitor the first 30 days closely, and optimize based on real performance. Then we hand you the keys — or stay on for ongoing support.",
    },
];

const services = [
    "Business process automation",
    "CRM & sales pipeline automation",
    "E-commerce order & inventory sync",
    "WhatsApp & messaging automation",
    "Lead capture & nurturing workflows",
    "Data migration & system integration",
    "AI-powered document processing",
    "Custom API development & webhooks",
    "Scheduled reporting & alerts",
    "Multi-platform social media automation",
];

const faqs = [
    {
        question: "What is an n8n automation agency?",
        answer: "An n8n automation agency is a specialized team that uses the n8n platform to build custom workflow automations for businesses. Instead of you figuring out complex integrations yourself, we design, build, and maintain automated workflows that connect your tools, eliminate repetitive tasks, and save your team hours every week.",
    },
    {
        question: "How much does it cost to hire an n8n automation agency?",
        answer: "Our projects typically start from $500 for simple workflows and go up based on complexity. Most small-to-medium business automation projects fall in the $1,500 to $5,000 range. We offer a free automation audit so you know exactly what you need and what it costs before committing.",
    },
    {
        question: "How long does it take to build an n8n automation?",
        answer: "Simple workflows take 3-5 business days. More complex projects with multiple integrations and custom logic usually take 2-4 weeks. We give you a clear timeline during the planning phase and keep you updated throughout.",
    },
    {
        question: "Can you automate my existing tools and software?",
        answer: "Almost certainly, yes. n8n connects with 400+ apps out of the box — including HubSpot, Salesforce, Shopify, Google Workspace, Slack, WhatsApp, and many more. If your tool has an API, we can integrate it.",
    },
    {
        question: "Do I need technical knowledge to use n8n workflows?",
        answer: "Not at all. We build everything so your team can use it without any coding skills. You get a clean dashboard, clear documentation, and training. If something needs changing, we handle it for you.",
    },
    {
        question: "Why choose n8nera over other automation agencies?",
        answer: "We're n8n specialists, not generalists. Our entire team focuses on n8n day in and day out. That means faster delivery, fewer bugs, and workflows that actually scale. We serve clients across the USA, UAE, Canada & Netherlands — with coverage across all time zones, competitive rates, and deep understanding of regional business needs.",
    },
];

export default function N8nAutomationAgencyPage() {
    const serviceSchema = getServiceSchema(
        "n8n Automation Agency Services",
        "/n8n-automation-agency",
        "Professional n8n automation agency based in Pakistan, serving businesses across USA, UAE, Canada & Netherlands. Custom workflow automation, system integrations, and AI-powered business process optimization."
    );

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: "Home", url: "https://n8nera.tech" },
        { name: "n8n Automation Agency", url: "https://n8nera.tech/n8n-automation-agency" },
    ]);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <div className="pt-20">
            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [serviceSchema, breadcrumbSchema, faqSchema],
                    }),
                }}
            />

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-premium-pattern" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center max-w-4xl mx-auto">
                        <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                            n8n Automation Agency
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                            Stop Doing <span className="text-gradient">Busywork.</span>{" "}
                            Start Growing.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                            We&apos;re an n8n automation agency based in Pakistan, serving businesses across the USA, UAE, Canada & Netherlands. We build custom workflows that
                            handle the repetitive stuff — so your team can focus on what actually makes money.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">
                                Get Your Free Audit <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="https://wa.me/923141603089?text=Hi%20n8nera!%20I%27m%20interested%20in%20your%20automation%20services."
                                target="_blank"
                                className="btn-secondary"
                            >
                                <WhatsAppIcon className="w-5 h-5" />
                                WhatsApp Us
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Results Bar */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-5xl mx-auto px-4">
                    <AnimatedSection>
                        <div className="glass-card p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {results.map((stat, index) => (
                                <div key={index}>
                                    <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* What We Do — Introduction */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <article className="prose prose-invert prose-lg max-w-none">
                            <h2 className="text-3xl font-display font-bold text-white mb-6 text-center">
                                What Does an n8n Automation Agency Actually Do?
                            </h2>
                            <div className="glass-card p-8 space-y-5 text-gray-300 leading-relaxed">
                                <p>
                                    Let&apos;s be honest — most businesses run on a messy mix of spreadsheets, copy-pasting between apps, and manual follow-ups that eat up half the day. Sound familiar?
                                </p>
                                <p>
                                    That&apos;s exactly what we fix. As an <strong className="text-white">n8n automation agency</strong>, we take those time-wasting tasks and turn them into automated workflows that run 24/7 without anyone touching them.
                                </p>
                                <p>
                                    New lead comes in through your website? It goes straight into your CRM, gets a welcome email, and your sales rep gets a WhatsApp notification — all within seconds. Order placed on Shopify? Inventory updates, invoice generates, shipping label prints. Automatically.
                                </p>
                                <p>
                                    We use <strong className="text-white">n8n</strong> because it&apos;s the most flexible automation platform out there. Unlike Zapier or Make, n8n gives us full control over your data, runs on your own server if you want, and handles complex logic that other tools simply can&apos;t.
                                </p>
                            </div>
                        </article>
                    </AnimatedSection>
                </div>
            </section>

            {/* Services List */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            What We Automate for You
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            From lead generation to order fulfillment — if it&apos;s repetitive, we can automate it.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {services.map((service, index) => (
                            <AnimatedSection key={index} delay={index * 0.05}>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent-500/30 transition-colors">
                                    <CheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0" />
                                    <span className="text-gray-300">{service}</span>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection className="text-center mt-10">
                        <Link href="/services" className="btn-secondary">
                            See All Services <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Why Us */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            Why Businesses Choose <span className="text-gradient">n8nera</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We&apos;re not a generalist agency that does a bit of everything. We&apos;re n8n specialists who do one thing really well.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyUs.map((item, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="glass-card p-6 h-full">
                                    <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-accent-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-400">{item.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            How It Works
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            From first call to live automation — here&apos;s the exact process.
                        </p>
                    </AnimatedSection>

                    <div className="space-y-6">
                        {processSteps.map((item, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="glass-card p-6 flex gap-6 items-start">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500/20 to-primary-600/20 flex items-center justify-center">
                                        <span className="text-xl font-display font-bold text-accent-400">{item.step}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl font-display font-bold text-white mb-6 text-center">
                            Industries We Serve
                        </h2>
                        <div className="glass-card p-8 text-gray-300 leading-relaxed space-y-4">
                            <p>
                                We&apos;ve built automations for nearly every industry you can think of — <Link href="/industries/retail-shops" className="text-accent-400 hover:text-accent-300">retail shops</Link>, <Link href="/industries/ecommerce" className="text-accent-400 hover:text-accent-300">e-commerce brands</Link>, <Link href="/industries/real-estate" className="text-accent-400 hover:text-accent-300">real estate agencies</Link>, <Link href="/industries/healthcare" className="text-accent-400 hover:text-accent-300">healthcare clinics</Link>, <Link href="/industries/logistics" className="text-accent-400 hover:text-accent-300">logistics companies</Link>, and more.
                            </p>
                            <p>
                                Whether you&apos;re a startup with 5 employees or an enterprise with 500, the principle is the same: find the bottleneck, automate it, measure the results.
                            </p>
                        </div>
                        <div className="text-center mt-8">
                            <Link href="/industries" className="btn-secondary">
                                <Building className="w-4 h-4" /> Browse All Industries
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Social Proof */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            Trusted by Growing Businesses
                        </h2>
                    </AnimatedSection>
                    <AnimatedSection>
                        <div className="glass-card p-8">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <blockquote className="text-xl text-white font-medium leading-relaxed mb-6">
                                &ldquo;n8nera automated our entire lead-to-customer pipeline. What used to take our sales team 4 hours a day now happens on its own. We closed 30% more deals in the first quarter after going live.&rdquo;
                            </blockquote>
                            <div>
                                <p className="text-white font-semibold">Ahmed K.</p>
                                <p className="text-sm text-gray-400">Operations Manager, Dubai</p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* FAQ Section — AEO Optimized */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-400">Quick answers about working with an n8n automation agency.</p>
                    </AnimatedSection>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AnimatedSection key={index} delay={index * 0.05}>
                                <details className="group glass-card overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-semibold hover:text-accent-300 transition-colors">
                                        {faq.question}
                                        <ArrowRight className="w-5 h-5 text-accent-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-4" />
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </details>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-950/50 via-dark-950 to-primary-950/50" />
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <AnimatedSection>
                        <BarChart3 className="w-12 h-12 text-accent-400 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Ready to Put Your Business on Autopilot?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                            Book a free automation audit. We&apos;ll show you exactly what you can automate, how much time you&apos;ll save, and what it costs. Zero pressure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">
                                Book Free Audit <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/pricing" className="btn-secondary">
                                View Pricing
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
