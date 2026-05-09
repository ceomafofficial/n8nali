import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import {
    ArrowRight,
    Plug,
    ShoppingCart,
    MessageSquare,
    Mail,
    Database,
    FileText,
    CreditCard,
    Users,
    Cloud,
    Globe,
    Webhook,
} from "lucide-react";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "n8n Integrations — Connect 400+ Apps in Days, Not Months",
    description:
        "Connect CRM, e-commerce, WhatsApp, Slack, Google Workspace & 400+ apps with n8n. Custom API integrations, webhooks & data pipelines. Average setup: 3-5 days. From $500. See our integration catalog →",
    keywords: [
        "n8n integrations",
        "n8n app integrations",
        "n8n API integration",
        "n8n CRM integration",
        "n8n Shopify integration",
        "n8n WhatsApp integration",
        "n8n Google integration",
        "connect apps n8n",
        "n8n custom integration",
        "n8n integration agency",
        "n8n integrations USA",
        "n8n integrations Dubai",
        "n8n integrations Canada",
        "n8n integrations Netherlands",
    ],
    openGraph: {
        title: "n8n Integrations — 400+ Apps Connected in Days | n8nera",
        description:
            "Connect your entire tech stack with n8n. CRM, e-commerce, messaging, payments & 400+ apps. Custom API integrations in 3-5 days.",
        url: "https://n8nera.tech/n8n-integrations/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@n8nera",
        creator: "@n8nera",
        title: "n8n Integrations — Connect 400+ Apps in Days | n8nera",
        description: "CRM, e-commerce, messaging, payments & 400+ apps. Custom API integrations in 3-5 days.",
    },
    alternates: {
        canonical: "https://n8nera.tech/n8n-integrations/",
    },
};

const popularIntegrations = [
    {
        category: "CRM & Sales",
        icon: Users,
        tools: ["HubSpot", "Salesforce", "Pipedrive", "Zoho CRM", "Monday.com"],
        description:
            "Capture leads from any source, enrich data automatically, sync contacts across platforms, and trigger follow-ups without lifting a finger.",
    },
    {
        category: "E-commerce",
        icon: ShoppingCart,
        tools: ["Shopify", "WooCommerce", "Amazon", "Stripe", "PayPal"],
        description:
            "Sync orders, inventory, and customer data across all your sales channels. Auto-generate invoices and shipping labels.",
    },
    {
        category: "Messaging & Communication",
        icon: MessageSquare,
        tools: ["WhatsApp Business API", "Slack", "Telegram", "Microsoft Teams", "Discord"],
        description:
            "Send automated messages, route conversations to the right team, and create chatbot flows that feel natural and helpful.",
    },
    {
        category: "Email & Marketing",
        icon: Mail,
        tools: ["Mailchimp", "SendGrid", "ActiveCampaign", "Brevo", "Gmail"],
        description:
            "Automate email campaigns, segment audiences based on behavior, and sync subscriber lists across all your marketing tools.",
    },
    {
        category: "Databases & Storage",
        icon: Database,
        tools: ["PostgreSQL", "MySQL", "MongoDB", "Airtable", "Google Sheets"],
        description:
            "Read, write, and transform data across databases and spreadsheets. Keep everything in sync without manual data entry.",
    },
    {
        category: "Accounting & Finance",
        icon: CreditCard,
        tools: ["QuickBooks", "Xero", "FreshBooks", "Stripe", "Razorpay"],
        description:
            "Auto-reconcile payments, generate financial reports, push transactions to your accounting software, and track cash flow.",
    },
    {
        category: "Productivity & Docs",
        icon: FileText,
        tools: ["Google Workspace", "Notion", "Microsoft 365", "Trello", "Asana"],
        description:
            "Create documents from templates, manage project tasks, and automate approvals — all triggered by your existing workflows.",
    },
    {
        category: "Cloud & DevOps",
        icon: Cloud,
        tools: ["AWS", "Google Cloud", "GitHub", "Docker", "Vercel"],
        description:
            "Monitor deployments, automate CI/CD notifications, manage cloud resources, and integrate development pipelines.",
    },
];

const integrationMethods = [
    {
        icon: Plug,
        title: "Built-in Nodes",
        description:
            "n8n has 400+ pre-built connectors. For most popular apps, we just configure the node, authenticate, and your integration is live in minutes.",
    },
    {
        icon: Globe,
        title: "REST API / HTTP Requests",
        description:
            "For apps without pre-built nodes, we use HTTP request nodes to call any REST API. If your tool has an API, we can connect it.",
    },
    {
        icon: Webhook,
        title: "Webhooks",
        description:
            "We set up webhook endpoints inside n8n so external apps can push data in real-time. Perfect for instant notifications and triggers.",
    },
    {
        icon: Database,
        title: "Direct Database",
        description:
            "When APIs aren't available or efficient enough, we connect directly to your database. Read, write, and transform data at the source.",
    },
];

const faqs = [
    {
        question: "What apps can n8n integrate with?",
        answer: "n8n has 400+ built-in integrations covering CRMs, e-commerce platforms, messaging apps, databases, accounting tools, and more. For any app that has an API or supports webhooks, we can build a custom integration. If it exists online and has any way to connect, we can connect it.",
    },
    {
        question: "Can you integrate custom or internal tools?",
        answer: "Yes. If your internal tool has a REST API, GraphQL endpoint, or database, we can integrate it with n8n. We've connected custom ERPs, proprietary CRMs, internal dashboards, and bespoke tools that have no public documentation. We work with your dev team to map the APIs and build reliable connections.",
    },
    {
        question: "How long does an integration project take?",
        answer: "Simple integrations (e.g., syncing two apps) take 1-3 days. Medium complexity projects with 3-5 apps and conditional logic take 1-2 weeks. Enterprise-grade integrations with multiple systems, data transformation, and error handling take 2-4 weeks. We give you a clear timeline before starting.",
    },
    {
        question: "Will my data be secure during integration?",
        answer: "Absolutely. We self-host n8n on your infrastructure or a dedicated server, so your data never passes through third-party servers. All connections use encrypted protocols (HTTPS, SSL/TLS). We follow data handling best practices and can sign NDAs or DPAs as needed.",
    },
    {
        question: "What if one of my apps updates its API?",
        answer: "API changes happen. When they do, n8n's community typically updates the node quickly. For custom integrations, we include maintenance in our support plans — so we update your workflows before the old API version is deprecated. You won't even notice the change.",
    },
    {
        question: "Can n8n handle high-volume data transfers?",
        answer: "Yes. n8n handles batch processing, pagination, and parallel execution natively. We've built workflows that process 50,000+ records daily without breaking a sweat. For very high volumes, we optimize with database queues, chunked processing, and horizontal scaling.",
    },
];

export default function N8nIntegrationsPage() {
    const serviceSchema = getServiceSchema(
        "n8n Integration Services",
        "/n8n-integrations",
        "Expert n8n integration services. Connect CRM, e-commerce, messaging, payment gateways, and 400+ apps into one automated system."
    );

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: "Home", url: "https://n8nera.tech" },
        { name: "n8n Integrations", url: "https://n8nera.tech/n8n-integrations" },
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
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center max-w-4xl mx-auto">
                        <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                            n8n Integrations
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                            Connect Every App Your Business <span className="text-[#4285F4]">Relies On</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                            Your tools shouldn&apos;t work in silos. We integrate CRMs, e-commerce platforms, messaging apps, payment gateways, and 400+ more tools into one connected system using n8n.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">
                                Discuss Your Integration <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="https://wa.me/923141603089?text=Hi%20n8nera!%20I%20need%20help%20integrating%20my%20apps." target="_blank" className="btn-secondary">
                                <WhatsAppIcon className="w-5 h-5" /> WhatsApp Us
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Why Integrations Matter */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <article className="prose prose-invert prose-lg max-w-none">
                            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 text-center">
                                Why App Integration Matters More Than You Think
                            </h2>
                            <div className="glass-card p-8 space-y-5 text-gray-300 leading-relaxed">
                                <p>
                                    How much time does your team spend copying data between apps? Moving contacts from a Google Form to your CRM. Updating inventory in one place, then another. Sending the same report by email every Monday morning.
                                </p>
                                <p>
                                    It adds up. Fast. A single employee might waste <strong className="text-gray-900">5-10 hours per week</strong> on manual data transfer. That&apos;s not productive work — it&apos;s duct tape.
                                </p>
                                <p>
                                    <strong className="text-gray-900">App integration fixes this.</strong> When your tools talk to each other automatically, data flows in real-time, errors drop to zero, and your team actually does the work they were hired to do.
                                </p>
                                <p>
                                    We use <Link href="/n8n-automation-agency" className="text-[#4285F4] hover:text-[#4285F4]">n8n</Link> as our integration engine because it&apos;s open-source, self-hosted, and handles complex logic that tools like Zapier simply can&apos;t. And because your data stays on your servers — not someone else&apos;s.
                                </p>
                            </div>
                        </article>
                    </AnimatedSection>
                </div>
            </section>

            {/* Popular Integrations */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                            Popular n8n Integrations We Build
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We&apos;ve integrated hundreds of tools. Here are the categories our clients ask about most.
                        </p>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {popularIntegrations.map((integration, index) => (
                            <AnimatedSection key={index} delay={index * 0.08}>
                                <div className="glass-card p-6 h-full flex flex-col">
                                    <div className="w-12 h-12 rounded-xl bg-[#4285F4]/10 flex items-center justify-center mb-4">
                                        <integration.icon className="w-6 h-6 text-[#4285F4]" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.category}</h3>
                                    <p className="text-sm text-gray-400 mb-4 flex-grow">{integration.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {integration.tools.map((tool) => (
                                            <span key={tool} className="text-xs px-2 py-1 rounded-full bg-dark-800 text-gray-300 border border-white/5">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Integrate */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                            Four Ways We Connect Your Apps
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Different apps need different approaches. Here&apos;s how we make connections that are fast, reliable, and secure.
                        </p>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {integrationMethods.map((method, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="glass-card p-6 h-full flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                                        <method.icon className="w-6 h-6 text-primary-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{method.description}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r [#4285F4]" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { number: "400+", label: "Built-in Connectors" },
                                { number: "∞", label: "API Integrations Possible" },
                                { number: "50K+", label: "Records Processed Daily" },
                                { number: "99.9%", label: "Uptime Guarantee" },
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.number}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* FAQ */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                            Frequently Asked Questions About n8n Integrations
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
                <div className="absolute inset-0 bg-gray-50" />
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <AnimatedSection>
                        <Plug className="w-12 h-12 text-accent-400 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                            Ready to Connect Your Apps?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                            Tell us which tools you use and what you need connected. We&apos;ll send you a plan with exactly how we&apos;ll do it, how long it&apos;ll take, and what it&apos;ll cost.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">
                                Get Integration Plan <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="https://wa.me/923141603089?text=Hi%20n8nera!%20I%20need%20help%20integrating%20my%20business%20apps." target="_blank" className="btn-secondary">
                                <WhatsAppIcon className="w-5 h-5" /> Quick Chat on WhatsApp
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
