export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: "general" | "services" | "pricing" | "technical" | "security";
}

export const faqs: FAQ[] = [
    // General FAQs
    {
        id: "what-is-n8nera",
        question: "What is n8nera and what services do you offer?",
        answer: "n8nera is a premium automation and AI agency specializing in n8n-based workflow automation, AI voice agents, CRM automation, and business process optimization. We help businesses across the USA, UAE, Canada, and the Netherlands automate their operations, reduce manual work, and scale efficiently with enterprise-grade solutions.",
        category: "general",
    },
    {
        id: "who-are-your-clients",
        question: "What types of businesses do you work with?",
        answer: "We work with a diverse range of clients including retail shops, local businesses, SMEs, enterprises, marketing agencies, e-commerce brands, real estate companies, consultants, SaaS companies, and startups. Our solutions are tailored to each industry's unique requirements, whether you're a small local business or a large enterprise.",
        category: "general",
    },
    {
        id: "uae-coverage",
        question: "Which countries and regions do you serve?",
        answer: "We serve clients globally with a focus on four key markets: the United States (New York, Los Angeles, Chicago, Houston, and more), the United Arab Emirates (all seven emirates), Canada (Toronto, Vancouver, Montreal, and more), and the Netherlands (Amsterdam, Rotterdam, The Hague, and more). We work remotely with clients in all time zones.",
        category: "general",
    },
    {
        id: "language-support",
        question: "What languages do your AI voice agents support?",
        answer: "Our AI voice agents support multiple languages including English (Primary), Arabic (Native UAE dialect support), Dutch, French, Urdu, and Hindi. This multi-language capability ensures your business can serve customers in their preferred language across the USA, UAE, Canada, and the Netherlands.",
        category: "general",
    },
    // Service FAQs
    {
        id: "what-is-n8n",
        question: "What is n8n and why do you use it for automation?",
        answer: "n8n is an enterprise-grade, open-source workflow automation platform that allows us to build complex, scalable automations with complete flexibility. Unlike limited tools like Zapier, n8n gives us full control over logic, can be self-hosted for data security, and scales to handle enterprise workloads. It's the foundation for our robust automation solutions.",
        category: "services",
    },
    {
        id: "voice-ai-how-it-works",
        question: "How do AI Voice Agents work?",
        answer: "Our AI Voice Agents use advanced natural language processing (NLP) to understand and respond to human speech in real-time. They can handle inbound calls, make outbound calls, understand context and intent, integrate with your existing systems (CRM, calendar, etc.), and either resolve inquiries autonomously or seamlessly transfer to human agents when needed.",
        category: "services",
    },
    {
        id: "integration-capabilities",
        question: "What systems and tools can you integrate?",
        answer: "We integrate with virtually any system that has an API. Common integrations include CRMs (HubSpot, Salesforce, Zoho, Pipedrive), e-commerce platforms (Shopify, WooCommerce, Magento), accounting software (QuickBooks, Xero), ERPs, marketing tools, communication platforms (WhatsApp, Slack, Teams), and custom internal systems.",
        category: "services",
    },
    {
        id: "custom-solutions",
        question: "Can you build custom automation solutions for unique requirements?",
        answer: "Absolutely. Every business is unique, and we specialize in building fully custom automation solutions tailored to your specific workflows, systems, and goals. We don't believe in one-size-fits-all—our team works closely with you to design and implement solutions that address your exact challenges.",
        category: "services",
    },
    // Pricing FAQs
    {
        id: "pricing-model",
        question: "How does your pricing work?",
        answer: "We offer flexible pricing models based on your needs: project-based pricing for one-time implementations, monthly retainers for ongoing automation management and support, and SaaS-style subscriptions for our managed automation infrastructure. We provide custom quotes after understanding your requirements during a free consultation.",
        category: "pricing",
    },
    {
        id: "roi-timeline",
        question: "What ROI can I expect and how quickly?",
        answer: "Most clients see positive ROI within 1-3 months of implementation. Typical results include 60-80% reduction in manual work, 40%+ improvement in response times, significant cost savings from reduced headcount requirements, and increased revenue from faster, more consistent operations. We provide detailed ROI projections during our consultation.",
        category: "pricing",
    },
    {
        id: "free-consultation",
        question: "Do you offer a free consultation?",
        answer: "Yes, we offer a complimentary Automation Audit where we analyze your current processes, identify automation opportunities, and provide recommendations with expected ROI. This helps you understand exactly what's possible before making any commitment. Book your free audit through our website or WhatsApp.",
        category: "pricing",
    },
    // Technical FAQs
    {
        id: "implementation-timeline",
        question: "How long does it take to implement automation solutions?",
        answer: "Implementation timelines vary based on complexity. Simple workflows can be live within 1-2 weeks. More complex enterprise integrations typically take 4-8 weeks. AI Voice Agents usually require 2-4 weeks including training and testing. We provide detailed timelines during the planning phase.",
        category: "technical",
    },
    {
        id: "ongoing-support",
        question: "What kind of support do you provide after implementation?",
        answer: "We offer comprehensive post-implementation support including 24/7 monitoring of critical workflows, regular performance optimization, bug fixes and updates, addition of new features as needed, and dedicated account management. Support packages are tailored to your requirements and budget.",
        category: "technical",
    },
    {
        id: "training-provided",
        question: "Do you provide training for our team?",
        answer: "Yes, we provide thorough training and documentation for all implementations. Your team will understand how the automations work, how to monitor them, and how to make basic adjustments. For clients who want to build internal automation capabilities, we offer advanced training programs.",
        category: "technical",
    },
    // Security FAQs
    {
        id: "data-security",
        question: "How do you ensure data security?",
        answer: "Security is paramount. We offer self-hosted solutions where your data never leaves your infrastructure. All data in transit is encrypted with TLS 1.3. We implement role-based access controls, maintain detailed audit logs, and follow security best practices. For enterprises, we can work within your existing security frameworks.",
        category: "security",
    },
    {
        id: "compliance",
        question: "Do you support compliance requirements (GDPR, etc.)?",
        answer: "Yes, our solutions are designed with compliance in mind. We support GDPR (EU/Netherlands), CCPA/SOC 2 (USA), PIPEDA (Canada), and regional UAE data protection requirements. We implement data retention policies, consent management, right to erasure capabilities, and can work with your compliance team to meet specific regulatory requirements in any of our target markets.",
        category: "security",
    },
    {
        id: "self-hosted",
        question: "Can automations be self-hosted on our infrastructure?",
        answer: "Absolutely. One of the key advantages of our n8n-based approach is the ability to self-host. This means your automation infrastructure and all data can run entirely on your own servers or private cloud, giving you complete control and meeting the strictest security and compliance requirements.",
        category: "security",
    },
];

// FAQ Schema for SEO
export function generateFAQSchema(faqList: FAQ[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqList.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}
