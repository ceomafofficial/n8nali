import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import {
    ArrowRight,
    Brain,
    MessageSquare,
    FileSearch,
    Bot,
    Sparkles,
    Cpu,
    Mail,
    Image,
    BarChart3,
    Zap,
} from "lucide-react";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "n8n AI Automation — GPT Agents & Smart Workflows [2026]",
    description:
        "Build AI agents & GPT-powered workflows with n8n. Intelligent document processing, conversational bots, AI voice agents & multi-agent orchestration. 50+ AI workflows deployed. From $500/project →",
    keywords: [
        "n8n AI automation",
        "n8n AI agents",
        "n8n GPT integration",
        "AI workflow automation",
        "n8n OpenAI integration",
        "n8n LLM automation",
        "AI chatbot n8n",
        "AI document processing n8n",
        "intelligent automation",
        "agentic AI workflows",
        "n8n AI automation USA",
        "n8n AI automation Dubai",
        "n8n AI automation Canada",
        "n8n AI automation Netherlands",
    ],
    openGraph: {
        title: "n8n AI Automation — Build GPT Agents That Work 24/7 | n8nera",
        description:
            "AI agents, GPT workflows, intelligent document processing & conversational bots built with n8n. 50+ AI workflows deployed. See results in 2 weeks.",
        url: "https://n8nera.tech/n8n-ai-automation/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@n8nera",
        creator: "@n8nera",
        title: "n8n AI Automation — GPT Agents & Smart Workflows | n8nera",
        description: "AI agents, GPT workflows & conversational bots. 50+ AI workflows deployed. See results in 2 weeks.",
    },
    alternates: {
        canonical: "https://n8nera.tech/n8n-ai-automation/",
    },
};

const aiCapabilities = [
    {
        icon: Bot,
        title: "AI Agents & Assistants",
        description:
            "Build autonomous AI agents that handle customer inquiries, qualify leads, book appointments, and resolve support tickets — all without human intervention. They learn from your data and follow your rules.",
    },
    {
        icon: MessageSquare,
        title: "AI Chatbots & Conversational AI",
        description:
            "Deploy GPT-powered chatbots on WhatsApp, your website, Telegram, or Slack. They understand context, remember previous conversations, and respond like a real team member — not a robot.",
    },
    {
        icon: FileSearch,
        title: "Intelligent Document Processing",
        description:
            "Extract data from invoices, contracts, receipts, and PDFs automatically. Our AI reads documents, pulls the important information, validates it, and pushes it to your systems. No manual data entry.",
    },
    {
        icon: Mail,
        title: "Smart Email Processing",
        description:
            "Let AI read your incoming emails, classify them by intent (support request, sales inquiry, complaint), extract key details, and route them to the right person with a suggested response ready to go.",
    },
    {
        icon: Image,
        title: "Image & Vision AI",
        description:
            "Analyze product images, verify ID documents, read handwritten text, or classify visual content automatically. Perfect for e-commerce quality checks, KYC verification, and content moderation.",
    },
    {
        icon: BarChart3,
        title: "AI-Powered Analytics",
        description:
            "Feed your business data to AI models that spot trends, predict outcomes, and generate natural-language summaries. Get insights delivered to Slack or email every morning — no dashboards needed.",
    },
];

const aiModels = [
    { name: "OpenAI GPT-4o", use: "General reasoning, content, analysis" },
    { name: "Claude (Anthropic)", use: "Complex reasoning, long documents" },
    { name: "Google Gemini", use: "Multimodal tasks, vision + text" },
    { name: "Mistral / Llama", use: "Self-hosted, privacy-first AI" },
    { name: "Whisper", use: "Speech-to-text transcription" },
    { name: "DALL-E / Stable Diffusion", use: "Image generation" },
    { name: "Custom Fine-tuned Models", use: "Domain-specific AI tasks" },
    { name: "Embedding Models", use: "Semantic search & RAG systems" },
];

const useCases = [
    {
        title: "AI Customer Support Agent",
        description:
            "A WhatsApp bot that answers product questions using your knowledge base, creates support tickets for complex issues, and escalates to humans when needed. Handles 80% of queries without human involvement.",
        results: "Response time: 8 seconds. Customer satisfaction: 92%.",
    },
    {
        title: "Intelligent Lead Qualification",
        description:
            "AI reads incoming leads, researches the company on LinkedIn, scores their fit against your ideal customer profile, writes a personalized first email, and routes hot leads to sales immediately.",
        results: "Lead response time: Under 2 minutes. Conversion rate: +35%.",
    },
    {
        title: "Automated Content Pipeline",
        description:
            "AI monitors your industry news, identifies trending topics, drafts blog posts and social media content, schedules publications, and repurposes content across channels — all with your brand voice.",
        results: "Content output: 5x increase. Cost per piece: -70%.",
    },
    {
        title: "Invoice Processing Automation",
        description:
            "AI reads invoices (PDF, email, photo), extracts vendor, amount, line items, and due date, matches against purchase orders, flags discrepancies, and pushes clean data to your accounting software.",
        results: "Processing time: 95% reduction. Accuracy: 99.2%.",
    },
];

const faqs = [
    {
        question: "What is n8n AI automation?",
        answer: "n8n AI automation combines n8n's workflow engine with AI models like GPT-4, Claude, and Gemini. Instead of just moving data between apps, your workflows can now understand text, make decisions, generate content, and have conversations. For example, an AI workflow can read customer emails, understand what they're asking, draft a response, and send it — all automatically.",
    },
    {
        question: "Which AI models does n8n support?",
        answer: "n8n supports all major AI models including OpenAI GPT-4o, Anthropic Claude, Google Gemini, Mistral, Llama, and any model accessible via API. It also has native nodes for vector databases (Pinecone, Qdrant, Supabase) for building RAG systems, plus Whisper for speech-to-text and DALL-E for image generation.",
    },
    {
        question: "Can AI agents really replace human workers?",
        answer: "Not entirely — and that's not the goal. AI agents handle repetitive, rule-based tasks that eat up your team's time: answering common questions, processing documents, qualifying leads, writing first drafts. Your team then focuses on decisions, relationships, and creative work that AI can't do. Think of it as giving every employee a tireless assistant.",
    },
    {
        question: "Is my business data safe when using AI?",
        answer: "Yes. We self-host n8n and can use self-hosted AI models (like Llama or Mistral) so your data never leaves your servers. When using cloud AI services like OpenAI, we configure data handling agreements and ensure sensitive data is anonymized before processing. You're always in control of what data goes where.",
    },
    {
        question: "How much does AI automation cost compared to hiring?",
        answer: "An AI agent that handles 80% of customer support queries costs roughly $500-1,500/month to run — compared to $3,000-5,000/month for a full-time support agent. And it works 24/7 without breaks. The exact ROI depends on your use case, but most clients see 3-5x return within the first three months.",
    },
    {
        question: "How long does it take to build an AI workflow?",
        answer: "Simple AI workflows (like email classification or content generation) take 3-5 days. AI chatbots with knowledge base integration take 1-2 weeks. Full AI agent systems with multiple capabilities take 2-4 weeks. We start with your highest-impact use case and expand from there.",
    },
];

export default function N8nAiAutomationPage() {
    const serviceSchema = getServiceSchema(
        "n8n AI Automation Services",
        "/n8n-ai-automation",
        "Build intelligent AI automation with n8n. AI agents, GPT-powered workflows, smart document processing, and conversational bots for businesses worldwide."
    );

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: "Home", url: "https://n8nera.tech" },
        { name: "n8n AI Automation", url: "https://n8nera.tech/n8n-ai-automation" },
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
                    <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center max-w-4xl mx-auto">
                        <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                            n8n AI Automation
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                            AI That Actually <span className="text-gradient-purple">Works for You</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                            Not just hype. Real AI workflows that read emails, qualify leads, answer customers, process documents, and make decisions — running 24/7 inside your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">
                                Explore AI Solutions <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="https://wa.me/923141603089?text=Hi%20n8nera!%20I%20want%20to%20explore%20AI%20automation%20for%20my%20business." target="_blank" className="btn-secondary">
                                <WhatsAppIcon className="w-5 h-5" /> WhatsApp Us
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* What AI Automation Is */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <article className="prose prose-invert prose-lg max-w-none">
                            <h2 className="text-3xl font-display font-bold text-white mb-6 text-center">
                                Automation Was Good. AI Makes It Brilliant.
                            </h2>
                            <div className="glass-card p-8 space-y-5 text-gray-300 leading-relaxed">
                                <p>
                                    Traditional automation follows rules: <em>&ldquo;When X happens, do Y.&rdquo;</em> It&apos;s great for predictable tasks. But what about the messy stuff? Emails that need to be understood. Customer questions that don&apos;t fit a template. Documents with different formats.
                                </p>
                                <p>
                                    <strong className="text-white">That&apos;s where AI comes in.</strong> By adding AI models — GPT-4, Claude, Gemini — to your n8n workflows, your automation can now <em>think</em>. It can read a customer email and understand the intent. It can look at an invoice and extract every line item. It can have a natural conversation on WhatsApp that feels human.
                                </p>
                                <p>
                                    We&apos;re not talking about science fiction. These are production-ready AI systems running right now for businesses worldwide. And we build them on <Link href="/n8n-automation-agency" className="text-accent-400 hover:text-accent-300">n8n</Link> — the only platform that gives you full control, self-hosting, and zero per-task fees.
                                </p>
                            </div>
                        </article>
                    </AnimatedSection>
                </div>
            </section>

            {/* AI Capabilities */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            What AI Can Do Inside Your n8n Workflows
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            These aren&apos;t buzzwords. These are things we build every week for real businesses.
                        </p>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {aiCapabilities.map((capability, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="glass-card p-6 h-full">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                                        <capability.icon className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{capability.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{capability.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Models */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            AI Models We Work With
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We&apos;re model-agnostic. We pick the right AI for the job — not just the most popular one.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection>
                        <div className="glass-card overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {aiModels.map((model, index) => (
                                    <div key={index} className="p-5 border-b border-r border-white/5 last:border-b-0 flex items-start gap-3">
                                        <Cpu className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="text-white font-medium text-sm">{model.name}</div>
                                            <div className="text-gray-400 text-xs">{model.use}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Real Use Cases */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            Real AI Automation Projects We&apos;ve Built
                        </h2>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {useCases.map((useCase, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="glass-card p-6 h-full flex flex-col">
                                    <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow">{useCase.description}</p>
                                    <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                                        <Sparkles className="w-4 h-4 text-accent-400 flex-shrink-0" />
                                        <span className="text-xs text-accent-300 font-medium">{useCase.results}</span>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                    <AnimatedSection className="text-center mt-10">
                        <Link href="/case-studies" className="btn-secondary">
                            More Case Studies <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Why AI + n8n */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            Why Build AI on n8n?
                        </h2>
                    </AnimatedSection>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Full Data Control", desc: "Self-host everything. Your data never leaves your servers unless you want it to." },
                            { title: "No Per-Task Fees", desc: "Run 10,000 AI tasks a day. Same price. No surprise bills from Zapier or Make." },
                            { title: "Model Freedom", desc: "Switch between GPT-4, Claude, Gemini, or self-hosted models anytime. No vendor lock-in." },
                            { title: "Complex Logic", desc: "Chain AI calls, add human-in-the-loop steps, retry on failure — n8n handles it all." },
                        ].map((item, i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <div className="glass-card p-6 text-center h-full">
                                    <Zap className="w-8 h-8 text-accent-400 mx-auto mb-3" />
                                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            AI Automation Questions Answered
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

            {/* CTA */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-dark-950 to-accent-950/50" />
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <AnimatedSection>
                        <Brain className="w-12 h-12 text-purple-400 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Give Your Business an AI Brain
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                            Tell us your biggest time-waster. We&apos;ll show you how AI can handle it — and send you a free proof-of-concept within 48 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">
                                Get Free AI Consultation <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="https://wa.me/923141603089?text=Hi%20n8nera!%20I%20want%20to%20explore%20AI%20automation%20for%20my%20business." target="_blank" className="btn-secondary">
                                <WhatsAppIcon className="w-5 h-5" /> Chat on WhatsApp
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
