import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import {
    ArrowRight,
    CheckCircle,
    Code2,
    Clock,
    ShieldCheck,
    Headphones,
    Rocket,
    MessagesSquare,
    GitBranch,
    Gauge,
    Star,
    UserCheck,
    Briefcase,
} from "lucide-react";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Hire n8n Developer — Vetted Experts, Ready in 48hrs",
    description:
        "Hire pre-vetted n8n developers who've built 200+ production workflows. Hourly ($25/hr), monthly, or project-based. 48-hour matching. Custom nodes, AI agents, API integrations & enterprise automation. Satisfaction guaranteed or money back.",
    keywords: [
        "hire n8n developer",
        "n8n developer for hire",
        "hire n8n developer USA",
        "hire n8n developer Dubai",
        "hire n8n developer Canada",
        "hire n8n developer Netherlands",
        "dedicated n8n developer",
        "freelance n8n developer",
        "n8n expert for hire",
        "n8n consultant",
        "n8n specialist",
        "n8n workflow developer",
        "hire automation developer",
        "remote n8n developer",
        "certified n8n developer",
    ],
    openGraph: {
        title: "Hire n8n Developer — 48hr Match, 200+ Workflows Built | n8nera",
        description:
            "Pre-vetted n8n developers ready in 48 hours. Hourly, monthly, or project-based. 200+ production workflows delivered. Satisfaction guaranteed.",
        url: "https://n8nera.tech/hire-n8n-developer/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@n8nera",
        creator: "@n8nera",
        title: "Hire n8n Developer — Vetted Experts, Ready in 48hrs | n8nera",
        description: "Pre-vetted n8n developers ready in 48 hours. 200+ production workflows delivered. Satisfaction guaranteed.",
    },
    alternates: {
        canonical: "https://n8nera.tech/hire-n8n-developer/",
    },
};

const skills = [
    "n8n workflow design & optimization",
    "API & webhook integrations",
    "Custom n8n node development",
    "AI/LLM workflow implementation",
    "Database design & queries (PostgreSQL, MongoDB)",
    "Error handling & retry logic",
    "n8n self-hosting & server management",
    "JavaScript/TypeScript for custom code nodes",
    "Data transformation & ETL pipelines",
    "Security best practices & credential management",
];

const hiringModels = [
    {
        icon: Clock,
        title: "Hourly",
        subtitle: "Pay As You Go",
        description:
            "Perfect for small tasks, quick fixes, or occasional automation needs. You only pay for the hours worked. No minimum commitment.",
        ideal: "Bug fixes, small workflows, consulting calls",
    },
    {
        icon: Briefcase,
        title: "Monthly Dedicated",
        subtitle: "Full-Time Focus",
        description:
            "A dedicated n8n developer working exclusively on your projects. Full availability during business hours. Daily standup updates and weekly progress reports.",
        ideal: "Ongoing automation programs, complex systems",
    },
    {
        icon: Rocket,
        title: "Project-Based",
        subtitle: "Fixed Scope & Price",
        description:
            "Clear deliverables, fixed timeline, fixed price. We scope the project upfront, agree on milestones, and deliver on schedule. No surprises.",
        ideal: "Defined projects with clear requirements",
    },
];

const process = [
    {
        step: "01",
        title: "Tell Us What You Need",
        description:
            "Share your automation goals, tech stack, and timeline. We'll ask the right questions to understand your exact requirements.",
    },
    {
        step: "02",
        title: "We Match the Right Developer",
        description:
            "Based on your project needs, we assign a developer with relevant experience — not just any available person.",
    },
    {
        step: "03",
        title: "Trial Period Begins",
        description:
            "Start with a short trial task or sprint. See the quality of work, communication, and speed before making any commitment.",
    },
    {
        step: "04",
        title: "Scale & Deliver",
        description:
            "Once you're happy, we ramp up. Your developer builds, tests, documents, and deploys. You get daily updates and full transparency.",
    },
];

const whyUs = [
    {
        icon: UserCheck,
        title: "Pre-Vetted Experts",
        description:
            "Every developer on our team has built 50+ production workflows. We don't hire beginners. You get someone who's already solved problems like yours.",
    },
    {
        icon: ShieldCheck,
        title: "Your Code, Your Data",
        description:
            "Everything we build belongs to you. Full source access, complete documentation, zero lock-in. Walk away anytime with everything in hand.",
    },
    {
        icon: Headphones,
        title: "Direct Communication",
        description:
            "No account managers in between. You talk directly to your developer on Slack, WhatsApp, or your preferred channel. Fast responses, real conversations.",
    },
    {
        icon: Gauge,
        title: "Quality Guaranteed",
        description:
            "Every workflow includes error handling, logging, documentation, and testing. If something doesn't work as promised, we fix it — no extra charge.",
    },
    {
        icon: MessagesSquare,
        title: "UAE Time Zone Coverage",
        description:
            "Our developers work during UAE business hours (GMT+4). No midnight meetings. No 12-hour delays. Real-time collaboration when you need it.",
    },
    {
        icon: GitBranch,
        title: "Version Control & CI/CD",
        description:
            "We use Git for every project. Full version history, proper branching, automated deployments. Professional development practices from day one.",
    },
];

const faqs = [
    {
        question: "What does an n8n developer actually do?",
        answer: "An n8n developer designs, builds, and maintains automated workflows using the n8n platform. This includes connecting APIs, setting up triggers, building conditional logic, handling errors, writing custom code nodes, integrating AI models, managing n8n server infrastructure, and optimizing workflow performance. Think of them as the engineer who builds the automation backbone of your business.",
    },
    {
        question: "How is hiring through n8nera different from freelance platforms?",
        answer: "On Upwork or Fiverr, you're gambling on random profiles. With us, every developer has been vetted through real projects, knows our standards, and follows our quality processes. You also get project management, documentation, and backup support — if your developer is sick, someone else picks up immediately. No single point of failure.",
    },
    {
        question: "Can I hire a developer for just a few hours?",
        answer: "Yes, absolutely. Our hourly model is designed exactly for that. Need someone to fix a broken workflow? Build a quick integration? Review your existing setup? Book a few hours, get it done, pay only for time used. No retainers, no minimums.",
    },
    {
        question: "What if I'm not happy with the developer?",
        answer: "We offer a satisfaction guarantee. If you're not happy with the work within the first week, we'll assign a different developer or refund your payment. No questions, no drama. We want long-term partnerships, not forced contracts.",
    },
    {
        question: "Do your developers work on-site or remotely?",
        answer: "Our developers work remotely from Pakistan and are fully available during UAE business hours (9 AM - 6 PM GST). Same timezone overlap, direct communication, no delays. Remote or on-site, the communication and quality standards are identical.",
    },
    {
        question: "What happens after the project is done?",
        answer: "You get complete ownership of everything — all workflows, documentation, credentials, and code. We provide a thorough handover session and training for your team. If you want ongoing support and maintenance, we offer affordable monthly plans. But you're never locked in.",
    },
];

export default function HireN8nDeveloperPage() {
    const serviceSchema = getServiceSchema(
        "Hire n8n Developer",
        "/hire-n8n-developer",
        "Hire dedicated n8n developers for workflow automation, API integrations, AI workflows, and custom node development. Flexible hourly, monthly, or project-based hiring."
    );

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: "Home", url: "https://n8nera.tech" },
        { name: "Hire n8n Developer", url: "https://n8nera.tech/hire-n8n-developer" },
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
                    <div className="absolute inset-0 bg-premium-pattern" />
                    <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center max-w-4xl mx-auto">
                        <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                            Hire n8n Developer
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                            Get a Dedicated n8n Expert <span className="text-gradient">On Your Team</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                            Stop searching for unicorn automation developers. Hire a pre-vetted n8n specialist who&apos;s already built what you need — available hourly, monthly, or per project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">
                                Hire a Developer <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="https://wa.me/923141603089?text=Hi%20n8nera!%20I%20want%20to%20hire%20an%20n8n%20developer." target="_blank" className="btn-secondary">
                                <WhatsAppIcon className="w-5 h-5" /> WhatsApp Us
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* The Problem */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <article className="prose prose-invert prose-lg max-w-none">
                            <h2 className="text-3xl font-display font-bold text-white mb-6 text-center">
                                Finding an n8n Developer Is Harder Than It Should Be
                            </h2>
                            <div className="glass-card p-8 space-y-5 text-gray-300 leading-relaxed">
                                <p>
                                    You&apos;ve decided to automate. Great. Now you need someone who actually knows n8n — not just &ldquo;watched a YouTube tutorial&rdquo; level, but someone who&apos;s built complex, production-grade workflows that handle thousands of records without breaking.
                                </p>
                                <p>
                                    The problem? n8n is still relatively niche. Most freelance platforms are flooded with people who list &ldquo;n8n&rdquo; as a skill but have never built anything beyond a basic Slack notification. You don&apos;t have time to interview 20 people, run test projects, and hope for the best.
                                </p>
                                <p>
                                    <strong className="text-white">That&apos;s why we exist.</strong> n8nera gives you instant access to developers who live and breathe n8n. Every developer on our team has built 50+ workflows, handled enterprise-grade integrations, and knows exactly how to turn your ideas into working systems.
                                </p>
                            </div>
                        </article>
                    </AnimatedSection>
                </div>
            </section>

            {/* Skills */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            What Our n8n Developers Can Do
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Not just workflow builders. Full-stack automation engineers.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection>
                        <div className="glass-card p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {skills.map((skill, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0" />
                                        <span className="text-gray-300 text-sm">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Hiring Models */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            Flexible Hiring Models
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Choose what works for your budget and timeline. Scale up or down anytime.
                        </p>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {hiringModels.map((model, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="glass-card p-6 h-full flex flex-col text-center">
                                    <div className="w-14 h-14 rounded-xl bg-accent-500/10 flex items-center justify-center mx-auto mb-4">
                                        <model.icon className="w-7 h-7 text-accent-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-1">{model.title}</h3>
                                    <span className="text-sm text-accent-300 mb-3">{model.subtitle}</span>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow">{model.description}</p>
                                    <div className="pt-3 border-t border-white/5">
                                        <span className="text-xs text-gray-500">Ideal for: </span>
                                        <span className="text-xs text-gray-300">{model.ideal}</span>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                    <AnimatedSection className="text-center mt-8">
                        <Link href="/pricing" className="btn-secondary">
                            View Pricing <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Process */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            How Hiring Works
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            From first message to working developer in under 48 hours.
                        </p>
                    </AnimatedSection>
                    <div className="space-y-6">
                        {process.map((step, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="glass-card p-6 flex items-start gap-6">
                                    <div className="text-3xl font-bold text-accent-400/30 font-display flex-shrink-0 w-12">
                                        {step.step}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            Why Hire Through n8nera?
                        </h2>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyUs.map((item, index) => (
                            <AnimatedSection key={index} delay={index * 0.08}>
                                <div className="glass-card p-6 h-full">
                                    <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-accent-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="glass-card p-8 text-center">
                            <div className="flex justify-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <blockquote className="text-lg text-gray-300 italic mb-4 leading-relaxed">
                                &ldquo;We tried hiring n8n freelancers before — it was a nightmare. With n8nera, we got a developer who understood our industry, built workflows that actually worked, and delivered on time. Best automation investment we&apos;ve made.&rdquo;
                            </blockquote>
                            <div className="text-white font-semibold">Operations Director</div>
                            <div className="text-sm text-gray-400">E-commerce Company, UAE</div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* FAQ */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            Hiring Questions Answered
                        </h2>
                    </AnimatedSection>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AnimatedSection key={index} delay={index * 0.05}>
                                <details className="group glass-card overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-semibold hover:text-accent-300 transition-colors">
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

            {/* Related Page Cross-Link */}
            <section className="relative py-12 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <div className="glass-card p-6 border border-accent-500/20">
                            <p className="text-gray-400 text-sm mb-2">Looking for more information?</p>
                            <Link href="/looking-for-n8n-developer" className="text-accent-400 hover:underline font-semibold text-lg">
                                Read Our Complete Guide: Looking for an n8n Developer →
                            </Link>
                            <p className="text-gray-500 text-sm mt-2">
                                In-depth guide covering skills to look for, cost analysis, hiring channels &amp; comparison of agencies vs freelancers.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-950/50 via-dark-950 to-primary-950/50" />
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <AnimatedSection>
                        <Code2 className="w-12 h-12 text-accent-400 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Your n8n Developer Is One Message Away
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                            Tell us what you need. We&apos;ll match you with the right developer and get started within 48 hours. No long interviews. No BS. Just results.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">
                                Hire Now <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="https://wa.me/923141603089?text=Hi%20n8nera!%20I%20want%20to%20hire%20an%20n8n%20developer%20for%20my%20project." target="_blank" className="btn-secondary">
                                <WhatsAppIcon className="w-5 h-5" /> Quick Chat on WhatsApp
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
