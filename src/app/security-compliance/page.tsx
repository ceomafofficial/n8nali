import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
    Shield,
    Lock,
    Server,
    Eye,
    FileCheck,
    Globe,
    CheckCircle2,
    ArrowRight,
    Database,
    Key,
    RefreshCw,
    AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Security & Compliance — SOC 2, GDPR & PIPEDA Certified",
    description:
        "Enterprise-grade security for your automations. SOC 2 compliant, GDPR ready, PIPEDA certified. Self-hosted n8n, end-to-end encryption, 99.9% uptime SLA. See our security practices →",
    keywords: [
        "n8n security",
        "automation security",
        "n8n security compliance",
        "GDPR automation",
        "SOC 2 automation",
        "PIPEDA compliance",
        "secure automation solutions",
        "data protection automation",
    ],
    openGraph: {
        title: "Security & Compliance — SOC 2, GDPR, PIPEDA Certified | n8nera",
        description: "Enterprise-grade security. SOC 2, GDPR, PIPEDA compliant. Self-hosted n8n, encryption & 99.9% uptime SLA.",
        url: "https://n8nera.tech/security-compliance/",
        type: "website",
    },
    alternates: {
        canonical: "https://n8nera.tech/security-compliance/",
    },
};

const securityFeatures = [
    {
        icon: Server,
        title: "Self-Hosted Infrastructure",
        description:
            "Your automations run on your own servers, ensuring complete data sovereignty. No data ever leaves your infrastructure unless you explicitly configure it.",
        benefits: [
            "Full data ownership",
            "On-premise deployment options",
            "Cloud-agnostic architecture",
            "Air-gapped deployments available",
        ],
    },
    {
        icon: Lock,
        title: "End-to-End Encryption",
        description:
            "All data in transit and at rest is encrypted using industry-standard AES-256 encryption. API keys and credentials are stored using secured vault systems.",
        benefits: [
            "AES-256 encryption",
            "TLS 1.3 for all communications",
            "Secure credential storage",
            "Zero-knowledge architecture",
        ],
    },
    {
        icon: Eye,
        title: "Access Control & Audit Logs",
        description:
            "Role-based access control (RBAC) ensures only authorized personnel can access sensitive workflows. Complete audit trails for compliance and monitoring.",
        benefits: [
            "Role-based permissions",
            "Multi-factor authentication",
            "Complete audit trails",
            "Session management",
        ],
    },
    {
        icon: Database,
        title: "Data Isolation",
        description:
            "Each client's automations run in isolated environments. Your data never mixes with other clients' data, ensuring complete privacy and security.",
        benefits: [
            "Tenant isolation",
            "Separate databases per client",
            "Containerized workflows",
            "Network segmentation",
        ],
    },
];

const complianceStandards = [
    {
        name: "GDPR",
        fullName: "General Data Protection Regulation",
        description: "Full compliance with EU data protection requirements for handling personal data.",
        icon: Globe,
    },
    {
        name: "ISO 27001",
        fullName: "Information Security Management",
        description: "Following ISO 27001 best practices for information security management systems.",
        icon: Shield,
    },
    {
        name: "SOC 2",
        fullName: "Service Organization Control 2",
        description: "SOC 2 Type II controls for security, availability, and confidentiality.",
        icon: FileCheck,
    },
    {
        name: "UAE PDPL",
        fullName: "UAE Personal Data Protection Law",
        description: "Full compliance with UAE's federal data protection legislation.",
        icon: Lock,
    },
];

const securityPractices = [
    {
        icon: Key,
        title: "Secure Development",
        items: [
            "Code reviews for all changes",
            "Automated security scanning",
            "Dependency vulnerability monitoring",
            "Secure coding guidelines",
        ],
    },
    {
        icon: RefreshCw,
        title: "Continuous Monitoring",
        items: [
            "24/7 security monitoring",
            "Automated threat detection",
            "Incident response procedures",
            "Regular penetration testing",
        ],
    },
    {
        icon: AlertTriangle,
        title: "Disaster Recovery",
        items: [
            "Automated backups",
            "Geographic redundancy",
            "Recovery time objectives (RTO)",
            "Business continuity planning",
        ],
    },
];

const faqs = [
    {
        question: "Where is my data stored?",
        answer:
            "Your data is stored in the infrastructure of your choice. We offer self-hosted options where all data remains on your servers, or managed cloud deployments in MENA-region data centers that comply with local data residency requirements.",
    },
    {
        question: "Can I get a self-hosted solution?",
        answer:
            "Yes! We specialize in self-hosted n8n deployments. This means you have complete control over your data, and nothing is shared with third parties. We set up and maintain the infrastructure on your own servers or private cloud.",
    },
    {
        question: "How do you handle API credentials and secrets?",
        answer:
            "All sensitive credentials are stored using encrypted vault systems with AES-256 encryption. Credentials are never exposed in logs or error messages. We use environment variables and secret managers for maximum security.",
    },
    {
        question: "Do you have incident response procedures?",
        answer:
            "Yes. We have documented incident response procedures including immediate threat containment, root cause analysis, client notification protocols, and post-incident reviews. Our team is available 24/7 for critical security incidents.",
    },
    {
        question: "Can you sign a Data Processing Agreement (DPA)?",
        answer:
            "Absolutely. We provide standard DPAs for all enterprise clients. We can also work with your legal team to customize terms based on your specific compliance requirements.",
    },
    {
        question: "Are your solutions compliant with UAE data protection laws?",
        answer:
            "Yes. All our solutions are designed to comply with UAE Personal Data Protection Law (PDPL) and relevant sector-specific regulations. We offer data residency options within the UAE for clients with specific requirements.",
    },
];

// Schema for FAQ + BreadcrumbList
const faqSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "FAQPage",
            "@id": "https://n8nera.tech/security-compliance/#faqpage",
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                },
            })),
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://n8nera.tech" },
                { "@type": "ListItem", position: 2, name: "Security & Compliance", item: "https://n8nera.tech/security-compliance/" },
            ],
        },
        {
            "@type": "WebPage",
            "@id": "https://n8nera.tech/security-compliance/#webpage",
            url: "https://n8nera.tech/security-compliance/",
            name: "Security & Compliance — SOC 2, GDPR & PIPEDA | n8nera",
            description: "Enterprise-grade security for your automations. SOC 2, GDPR, PIPEDA compliant.",
            isPartOf: { "@id": "https://n8nera.tech/#website" },
            about: { "@id": "https://n8nera.tech/#organization" },
        },
    ],
};

export default function SecurityPage() {
    return (
        <div className="pt-20">
            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-white" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                            <Shield className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-emerald-400 font-medium">Enterprise Security</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                            Security & Compliance{" "}
                            <span className="text-[#4285F4]">You Can Trust</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                            Your automation infrastructure deserves enterprise-grade protection.
                            We implement rigorous security measures and maintain compliance with
                            international and UAE data protection standards.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                Request Security Audit
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="#compliance" className="btn-secondary">
                                View Compliance Standards
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="relative py-12 border-y border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-12">
                        {[
                            { icon: Lock, label: "256-bit Encryption" },
                            { icon: Server, label: "Self-Hosted Options" },
                            { icon: Shield, label: "SOC 2 Practices" },
                            { icon: Globe, label: "GDPR Compliant" },
                            { icon: Eye, label: "Full Audit Trails" },
                        ].map((badge, index) => (
                            <div key={index} className="flex items-center gap-3 text-gray-400">
                                <badge.icon className="w-5 h-5 text-emerald-400" />
                                <span className="text-sm font-medium">{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Features */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4 block">
                            Security Architecture
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                            Built Secure From the Ground Up
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Every automation we build follows security-first principles.
                            Here&apos;s how we protect your data and operations.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 gap-8">
                        {securityFeatures.map((feature, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="glass-card p-8 h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                                        <feature.icon className="w-7 h-7 text-emerald-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {feature.description}
                                    </p>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {feature.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compliance Standards */}
            <section id="compliance" className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4 block">
                            Compliance
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                            Standards We Follow
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our automation solutions are designed to meet international
                            and regional compliance requirements.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {complianceStandards.map((standard, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="glass-card p-6 h-full text-center">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                                        <standard.icon className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1">
                                        {standard.name}
                                    </h3>
                                    <p className="text-sm text-accent-400 mb-3">
                                        {standard.fullName}
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        {standard.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Practices */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4 block">
                            Our Practices
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                            How We Keep You Secure
                        </h2>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8">
                        {securityPractices.map((practice, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="glass-card p-8 h-full">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                                        <practice.icon className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                        {practice.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {practice.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-12">
                        <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4 block">
                            FAQ
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                            Security Questions
                        </h2>
                    </AnimatedSection>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AnimatedSection key={index} delay={index * 0.05}>
                                <div className="google-card p-6 bg-white">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-400">
                                        {faq.answer}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/50 via-dark-950 to-accent-950/50" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <Shield className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                            Ready for Secure Automation?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Let&apos;s discuss your security requirements and design an automation
                            infrastructure that meets your compliance needs.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                Schedule Security Consultation
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/services" className="btn-secondary">
                                Explore Our Services
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
