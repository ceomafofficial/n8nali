import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import {
    ArrowRight,
    CheckCircle,
    Workflow,
    Clock,
    RefreshCcw,
    Plug,
    ShieldCheck,
    Lightbulb,
    Layers,
} from "lucide-react";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "n8n Workflow Automation — Eliminate Manual Work in 2 Weeks",
    description:
        "Custom n8n workflows that run your business 24/7. Automate orders, invoices, lead routing, onboarding & 100+ tasks. Save 20+ hrs/week. 200+ workflows built. Avg ROI in 30 days. Get your free workflow audit →",
    keywords: [
        "n8n workflow automation",
        "n8n workflows",
        "automated workflows",
        "business workflow automation",
        "n8n workflow builder",
        "custom workflows n8n",
        "workflow automation agency",
        "n8n workflow automation USA",
        "n8n workflow automation Dubai",
        "n8n workflow automation Canada",
        "n8n workflow automation Netherlands",
    ],
    openGraph: {
        title: "n8n Workflow Automation — Save 20+ Hrs/Week, ROI in 30 Days | n8nera",
        description:
            "Custom workflows that run 24/7. Automate orders, CRM, invoicing & 100+ tasks. 200+ workflows built. See ROI in 30 days.",
        url: "https://n8nera.tech/n8n-workflow-automation/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@n8nera",
        creator: "@n8nera",
        title: "n8n Workflow Automation — Eliminate Manual Work in 2 Weeks | n8nera",
        description: "Custom workflows that run 24/7. 200+ workflows built. ROI in 30 days.",
    },
    alternates: {
        canonical: "https://n8nera.tech/n8n-workflow-automation/",
    },
};

const workflowTypes = [
    {
        icon: RefreshCcw,
        title: "Trigger-Based Workflows",
        description:
            "Something happens — your workflow fires. New form submission, new order, incoming email, Slack message — any trigger you need. The workflow handles the rest without anyone lifting a finger.",
    },
    {
        icon: Clock,
        title: "Scheduled Workflows",
        description:
            "Need a report every Monday at 9am? Daily inventory sync? Weekly invoice reminders? Scheduled workflows run like clockwork — reliably, every single time.",
    },
    {
        icon: Plug,
        title: "Multi-App Workflows",
        description:
            "Connect Shopify to your accounting software. Sync HubSpot with WhatsApp. Pull data from Google Sheets into your CRM. We connect everything so your data flows where it needs to go.",
    },
    {
        icon: Lightbulb,
        title: "Conditional Logic Workflows",
        description:
            "Not every situation is the same, and your workflows shouldn't be either. We build smart branching logic — if this, do that. If amount is above $1,000, route to senior sales. If customer is VIP, skip the queue.",
    },
    {
        icon: Layers,
        title: "Error-Handling Workflows",
        description:
            "Things break sometimes. That's normal. But your workflow shouldn't just stop. We build fallback paths, retry logic, and alert systems so nothing slips through the cracks.",
    },
    {
        icon: ShieldCheck,
        title: "Data Transformation Workflows",
        description:
            "Different apps speak different languages. We translate between them — reformatting dates, mapping fields, cleaning data — so everything arrives exactly where it should, in the right format.",
    },
];

const useCases = [
    {
        title: "Lead Management",
        items: [
            "Auto-capture leads from website, ads, WhatsApp",
            "Enrich lead data from LinkedIn/Google",
            "Score leads and route to right sales rep",
            "Send personalized follow-up sequences",
        ],
    },
    {
        title: "E-commerce Operations",
        items: [
            "Sync orders across Shopify, WooCommerce, Amazon",
            "Auto-generate invoices and shipping labels",
            "Update inventory in real-time across channels",
            "Send order status updates via WhatsApp/SMS",
        ],
    },
    {
        title: "Finance & Reporting",
        items: [
            "Auto-reconcile payments with invoices",
            "Generate daily/weekly financial reports",
            "Push data to QuickBooks, Xero automatically",
            "Alert on overdue payments & anomalies",
        ],
    },
    {
        title: "HR & Operations",
        items: [
            "Onboard new employees automatically",
            "Collect timesheets and calculate hours",
            "Schedule reviews and send reminders",
            "Sync data between HR tools and payroll",
        ],
    },
];

const faqs = [
    {
        question: "What is n8n workflow automation?",
        answer: "n8n workflow automation means using the n8n platform to create automated sequences of tasks that connect your business tools. For example, when a customer fills out a form on your website, n8n can automatically add them to your CRM, send a welcome email, notify your sales team on Slack, and create a follow-up task — all without anyone doing anything manually.",
    },
    {
        question: "How is n8n different from Zapier or Make?",
        answer: "n8n is open-source and can be self-hosted, giving you full control over your data. It handles complex logic, loops, and error handling much better than Zapier or Make. It's also more cost-effective for businesses with high-volume workflows because there are no per-task fees. And unlike those tools, n8n lets developers write custom code when standard nodes aren't enough.",
    },
    {
        question: "Can n8n handle complex business logic?",
        answer: "Absolutely. n8n supports if/else branching, loops, merge nodes, sub-workflows, error handling, and custom JavaScript/Python code. We've built workflows with 50+ nodes handling thousands of records daily. If you can describe the logic, we can build it.",
    },
    {
        question: "What happens if a workflow breaks?",
        answer: "Every workflow we build includes error handling and monitoring. If something fails, the system retries automatically, logs the error, and alerts our team (or yours) immediately. We also run proactive health checks so issues are caught before they impact your business.",
    },
    {
        question: "Can I see my workflows and make changes myself?",
        answer: "Yes, 100%. We build everything inside your own n8n instance. You have full access to see, duplicate, and modify any workflow. We also provide documentation and training so your team can make simple changes independently.",
    },
    {
        question: "How many apps can n8n connect to?",
        answer: "n8n has 400+ built-in integrations including Google Workspace, Salesforce, HubSpot, Shopify, Slack, WhatsApp, Airtable, PostgreSQL, and many more. For apps without built-in nodes, we use HTTP/API requests and webhooks — so practically any tool with an API can be connected.",
    },
];

export default function N8nWorkflowAutomationPage() {
    const serviceSchema = getServiceSchema(
        "n8n Workflow Automation Services",
        "/n8n-workflow-automation",
        "Custom n8n workflow automation for businesses worldwide. We design, build, and manage workflows that connect your apps and eliminate manual tasks."
    );

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: "Home", url: "https://n8nera.tech" },
        { name: "n8n Workflow Automation", url: "https://n8nera.tech/n8n-workflow-automation" },
    ]);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
    };

    return (
        <div className="pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [serviceSchema, breadcrumbSchema, faqSchema] }),
                }}
            />

            {/* Hero */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-white" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center max-w-4xl mx-auto">
                        <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                            n8n Workflow Automation
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                            Workflows That Run While <span className="text-[#4285F4]">You Sleep</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                            We build n8n workflows that connect your apps, move your data, and handle the boring stuff automatically.
                            Your team stays focused on high-value work. The workflows handle everything else.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">
                                Get Free Workflow Audit <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="https://wa.me/923141603089?text=Hi%20n8nera!%20I%20need%20help%20with%20workflow%20automation." target="_blank" className="btn-secondary">
                                <WhatsAppIcon className="w-5 h-5" /> WhatsApp Us
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* What Is It */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <article className="prose prose-invert prose-lg max-w-none">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 text-center">
                                What Is n8n Workflow Automation?
                            </h2>
                            <div className="glass-card p-8 space-y-5 text-gray-300 leading-relaxed">
                                <p>
                                    Think of a workflow as a set of instructions: <em>&ldquo;When this happens, do these things in this order.&rdquo;</em> That&apos;s it. No magic, no jargon.
                                </p>
                                <p>
                                    <strong className="text-gray-900">n8n</strong> is the platform we use to build those instructions. It&apos;s open-source, incredibly flexible, and connects to over 400 apps your business probably already uses — Google Sheets, Slack, HubSpot, Shopify, WhatsApp, you name it.
                                </p>
                                <p>
                                    The difference between doing this yourself and hiring us? We&apos;ve built hundreds of these. We know what breaks, what scales, and what saves the most time. You get a workflow that works perfectly from day one — not a DIY experiment that falls apart when your data gets messy.
                                </p>
                            </div>
                        </article>
                    </AnimatedSection>
                </div>
            </section>

            {/* Types of Workflows */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                            Types of Workflows We Build
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Every business is different. Here are the most common workflow patterns we deliver.
                        </p>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {workflowTypes.map((type, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="glass-card p-6 h-full">
                                    <div className="w-12 h-12 rounded-xl bg-[#4285F4]/10 flex items-center justify-center mb-4">
                                        <type.icon className="w-6 h-6 text-[#4285F4]" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{type.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                            Real Workflow Use Cases
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            These aren&apos;t hypothetical. These are workflows we build every week for real businesses.
                        </p>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {useCases.map((useCase, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="glass-card p-6 h-full">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{useCase.title}</h3>
                                    <ul className="space-y-2">
                                        {useCase.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                                <CheckCircle className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                    <AnimatedSection className="text-center mt-10">
                        <Link href="/case-studies" className="btn-secondary">
                            View Case Studies <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Comparison */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
                            n8n vs. Zapier vs. Make
                        </h2>
                        <div className="glass-card overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left p-4 text-gray-400 font-medium">Feature</th>
                                            <th className="text-center p-4 text-accent-400 font-semibold">n8n</th>
                                            <th className="text-center p-4 text-gray-400 font-medium">Zapier</th>
                                            <th className="text-center p-4 text-gray-400 font-medium">Make</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        {[
                                            ["Self-hosting option", "✅", "❌", "❌"],
                                            ["Complex logic & loops", "✅", "Limited", "✅"],
                                            ["Custom code support", "✅", "❌", "Limited"],
                                            ["No per-task pricing", "✅", "❌", "❌"],
                                            ["400+ integrations", "✅", "✅", "✅"],
                                            ["Full data control", "✅", "❌", "❌"],
                                            ["Error handling", "Advanced", "Basic", "Good"],
                                            ["Open source", "✅", "❌", "❌"],
                                        ].map((row, i) => (
                                            <tr key={i} className="border-b border-white/5">
                                                <td className="p-4 font-medium text-white">{row[0]}</td>
                                                <td className="p-4 text-center text-[#4285F4]">{row[1]}</td>
                                                <td className="p-4 text-center">{row[2]}</td>
                                                <td className="p-4 text-center">{row[3]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* FAQ */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                            Common Questions About Workflow Automation
                        </h2>
                    </AnimatedSection>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AnimatedSection key={index} delay={index * 0.05}>
                                <details className="group glass-card overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-semibold hover:text-[#4285F4] transition-colors">
                                        {faq.question}
                                        <ArrowRight className="w-5 h-5 text-accent-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-4" />
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">{faq.answer}</div>
                                </details>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br [#4285F4]" />
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <AnimatedSection>
                        <Workflow className="w-12 h-12 text-accent-400 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                            Let&apos;s Build Your First Workflow
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                            Tell us what&apos;s eating your team&apos;s time. We&apos;ll show you how to automate it — with a clear plan, timeline, and price. No strings attached.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">
                                Start Free Audit <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/n8n-automation-agency" className="btn-secondary">
                                About Our Agency
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
