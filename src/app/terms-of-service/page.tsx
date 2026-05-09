import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowLeft, FileText, Shield, AlertTriangle, Scale, Clock } from "lucide-react";
import { getWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Terms of Service — Fair & Transparent Automation Contracts",
    description: "Clear, fair terms for n8nera automation services. Satisfaction guarantee, IP ownership, SLA commitments & your rights. No hidden clauses.",
    keywords: [
        "n8nera terms of service",
        "automation service agreement",
        "n8n agency contract terms",
        "automation SLA",
        "IP ownership automation",
    ],
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Terms of Service — Fair & Transparent | n8nera",
        description: "Clear, fair terms. Satisfaction guarantee, IP ownership, SLA commitments. No hidden clauses.",
        url: "https://n8nera.tech/terms-of-service/",
        type: "website",
    },
    alternates: {
        canonical: "https://n8nera.tech/terms-of-service/",
    },
};

const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms", icon: FileText },
    { id: "services", title: "2. Services Description", icon: Shield },
    { id: "obligations", title: "3. Client Obligations", icon: Scale },
    { id: "payment", title: "4. Payment Terms", icon: Clock },
    { id: "intellectual-property", title: "5. Intellectual Property", icon: FileText },
    { id: "confidentiality", title: "6. Confidentiality", icon: Shield },
    { id: "warranties", title: "7. Warranties & Disclaimers", icon: AlertTriangle },
    { id: "liability", title: "8. Limitation of Liability", icon: Scale },
    { id: "termination", title: "9. Termination", icon: Clock },
    { id: "governing-law", title: "10. Governing Law", icon: Scale },
];

export default function TermsOfServicePage() {
    const lastUpdated = "January 12, 2026";
    const effectiveDate = "January 12, 2026";

    const legalSchema = {
        "@context": "https://schema.org",
        "@graph": [
            getWebPageSchema({
                url: "https://n8nera.tech/terms-of-service/",
                name: "Terms of Service — n8nera",
                description: "Clear, fair terms for n8nera automation services. Satisfaction guarantee, IP ownership, SLA commitments.",
                type: "WebPage",
                dateModified: "2026-01-12",
                breadcrumbs: [
                    { name: "Home", url: "https://n8nera.tech" },
                    { name: "Terms of Service", url: "https://n8nera.tech/terms-of-service/" },
                ],
            }),
        ],
    };

    return (
        <div className="pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }}
            />
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-white" />
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                </div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center">
                        <Link href="/" className="inline-flex items-center text-sm text-accent-400 hover:text-[#4285F4] mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
                            Terms of <span className="text-[#4285F4]">Service</span>
                        </h1>
                        <p className="text-lg text-gray-400 mb-4">
                            Please read these terms carefully before using our services.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                            <span>Last Updated: {lastUpdated}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>Effective: {effectiveDate}</span>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="relative py-8 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />
                <div className="relative max-w-4xl mx-auto px-4">
                    <AnimatedSection>
                        <div className="google-card p-6 bg-white">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {sections.map((section) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className="flex items-center text-sm text-gray-400 hover:text-[#4285F4] transition-colors py-1"
                                    >
                                        <section.icon className="w-4 h-4 mr-2 text-accent-500/50" />
                                        {section.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Content */}
            <section className="relative py-12 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="prose prose-invert prose-lg max-w-none">
                            {/* Introduction */}
                            <div className="glass-card p-8 mb-8">
                                <p className="text-gray-600 leading-relaxed">
                                    Welcome to n8nera. These Terms of Service (&quot;Terms&quot;) govern your access to and use of
                                    our website, services, and any related content provided by n8nera (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                                    By accessing or using our services, you agree to be bound by these Terms. If you do not agree
                                    to these Terms, please do not use our services.
                                </p>
                            </div>

                            {/* Section 1: Acceptance of Terms */}
                            <div id="acceptance" className="glass-card p-8 mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 flex items-center">
                                    <FileText className="w-6 h-6 mr-3 text-[#4285F4]" />
                                    1. Acceptance of Terms
                                </h2>
                                <div className="text-gray-600 space-y-4">
                                    <p>By accessing or using n8nera&apos;s services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.</p>
                                    <p>You represent and warrant that:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>You are at least 18 years of age or have the legal capacity to enter into contracts</li>
                                        <li>You have the authority to bind the entity you represent (if applicable)</li>
                                        <li>Your use of our services will not violate any applicable laws or regulations</li>
                                        <li>All information you provide to us is accurate and complete</li>
                                    </ul>
                                    <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the modified Terms.</p>
                                </div>
                            </div>

                            {/* Section 2: Services Description */}
                            <div id="services" className="glass-card p-8 mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 flex items-center">
                                    <Shield className="w-6 h-6 mr-3 text-[#4285F4]" />
                                    2. Services Description
                                </h2>
                                <div className="text-gray-600 space-y-4">
                                    <p>n8nera provides premium automation and AI services, including but not limited to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong className="text-gray-900">Workflow Automation:</strong> Design, development, and implementation of n8n-based automation workflows</li>
                                        <li><strong className="text-gray-900">AI Voice Agents:</strong> Development and deployment of AI-powered voice assistants and conversational agents</li>
                                        <li><strong className="text-gray-900">CRM Automation:</strong> Integration and automation of customer relationship management systems</li>
                                        <li><strong className="text-gray-900">Business Process Optimization:</strong> Analysis and improvement of business workflows and operations</li>
                                        <li><strong className="text-gray-900">Custom Integrations:</strong> API development and third-party system integrations</li>
                                        <li><strong className="text-gray-900">Consulting Services:</strong> Strategic automation planning and advisory services</li>
                                    </ul>
                                    <p>The specific scope of services will be defined in individual project agreements, statements of work, or service contracts between n8nera and the client.</p>
                                </div>
                            </div>

                            {/* Section 3: Client Obligations */}
                            <div id="obligations" className="glass-card p-8 mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 flex items-center">
                                    <Scale className="w-6 h-6 mr-3 text-[#4285F4]" />
                                    3. Client Obligations
                                </h2>
                                <div className="text-gray-600 space-y-4">
                                    <p>As a client of n8nera, you agree to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Provide accurate, complete, and timely information necessary for service delivery</li>
                                        <li>Designate a point of contact for project communications</li>
                                        <li>Provide reasonable access to systems, tools, and resources required for project completion</li>
                                        <li>Review and provide feedback on deliverables within agreed timeframes</li>
                                        <li>Ensure you have all necessary rights and permissions to data and systems you provide access to</li>
                                        <li>Use our services and deliverables only for lawful purposes</li>
                                        <li>Not resell, redistribute, or white-label our services without prior written consent</li>
                                        <li>Maintain appropriate security measures for credentials and access we provide</li>
                                    </ul>
                                    <p>Failure to meet these obligations may result in project delays, additional costs, or termination of services.</p>
                                </div>
                            </div>

                            {/* Section 4: Payment Terms */}
                            <div id="payment" className="glass-card p-8 mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 flex items-center">
                                    <Clock className="w-6 h-6 mr-3 text-[#4285F4]" />
                                    4. Payment Terms
                                </h2>
                                <div className="text-gray-600 space-y-4">
                                    <p><strong className="text-gray-900">Pricing:</strong> All fees and pricing for services will be outlined in individual project proposals or service agreements. Prices are quoted in USD unless otherwise specified.</p>
                                    <p><strong className="text-gray-900">Payment Schedule:</strong></p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Project-based work typically requires a 50% deposit before commencement and 50% upon completion</li>
                                        <li>Monthly retainers are billed at the beginning of each service period</li>
                                        <li>Custom payment schedules may be arranged for larger projects</li>
                                    </ul>
                                    <p><strong className="text-gray-900">Payment Methods:</strong> We accept payment via bank transfer, credit card, and major payment platforms. Specific payment instructions will be provided in invoices.</p>
                                    <p><strong className="text-gray-900">Late Payments:</strong> Invoices not paid within 14 days of the due date may incur a late fee of 1.5% per month. We reserve the right to suspend services for accounts with outstanding balances.</p>
                                    <p><strong className="text-gray-900">Refunds:</strong> Deposits are non-refundable once work has commenced. Refund requests for other payments will be evaluated on a case-by-case basis.</p>
                                </div>
                            </div>

                            {/* Section 5: Intellectual Property */}
                            <div id="intellectual-property" className="glass-card p-8 mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 flex items-center">
                                    <FileText className="w-6 h-6 mr-3 text-[#4285F4]" />
                                    5. Intellectual Property
                                </h2>
                                <div className="text-gray-600 space-y-4">
                                    <p><strong className="text-gray-900">Client Materials:</strong> You retain all ownership rights to materials, data, and content you provide to us (&quot;Client Materials&quot;). You grant us a limited license to use Client Materials solely for the purpose of delivering our services.</p>
                                    <p><strong className="text-gray-900">Deliverables:</strong> Upon full payment, you will own the custom workflows, integrations, and configurations created specifically for your project (&quot;Custom Deliverables&quot;).</p>
                                    <p><strong className="text-gray-900">n8nera IP:</strong> We retain ownership of:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Pre-existing tools, templates, methodologies, and frameworks</li>
                                        <li>General concepts, techniques, and know-how developed during projects</li>
                                        <li>Reusable components and code libraries</li>
                                        <li>Our brand, trademarks, and marketing materials</li>
                                    </ul>
                                    <p><strong className="text-gray-900">Third-Party Components:</strong> Deliverables may include third-party software, APIs, or services subject to their own license terms. You agree to comply with all applicable third-party licenses.</p>
                                </div>
                            </div>

                            {/* Section 6: Confidentiality */}
                            <div id="confidentiality" className="glass-card p-8 mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 flex items-center">
                                    <Shield className="w-6 h-6 mr-3 text-[#4285F4]" />
                                    6. Confidentiality
                                </h2>
                                <div className="text-gray-600 space-y-4">
                                    <p>Both parties agree to maintain the confidentiality of proprietary and confidential information disclosed during the course of our engagement.</p>
                                    <p><strong className="text-gray-900">Confidential Information includes:</strong></p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Business strategies, plans, and financial information</li>
                                        <li>Technical specifications and system architectures</li>
                                        <li>Customer data and personal information</li>
                                        <li>Pricing and commercial terms</li>
                                        <li>Any information marked as confidential</li>
                                    </ul>
                                    <p><strong className="text-gray-900">Exceptions:</strong> Confidentiality obligations do not apply to information that is publicly available, independently developed, rightfully obtained from third parties, or required to be disclosed by law.</p>
                                    <p>Confidentiality obligations survive termination of services for a period of three (3) years.</p>
                                </div>
                            </div>

                            {/* Section 7: Warranties & Disclaimers */}
                            <div id="warranties" className="glass-card p-8 mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 flex items-center">
                                    <AlertTriangle className="w-6 h-6 mr-3 text-[#4285F4]" />
                                    7. Warranties & Disclaimers
                                </h2>
                                <div className="text-gray-600 space-y-4">
                                    <p><strong className="text-gray-900">Our Warranties:</strong> We warrant that:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Services will be performed in a professional and workmanlike manner</li>
                                        <li>Deliverables will substantially conform to agreed specifications</li>
                                        <li>We have the right to provide the services and grant the licenses described herein</li>
                                    </ul>
                                    <p><strong className="text-gray-900">Warranty Period:</strong> We provide a 30-day warranty period from delivery during which we will remedy any defects in deliverables at no additional cost.</p>
                                    <p><strong className="text-gray-900">Disclaimers:</strong></p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>EXCEPT AS EXPRESSLY STATED, SERVICES ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND</li>
                                        <li>WE DO NOT GUARANTEE SPECIFIC BUSINESS RESULTS, ROI, OR PERFORMANCE METRICS</li>
                                        <li>WE ARE NOT RESPONSIBLE FOR THIRD-PARTY SERVICE INTERRUPTIONS OR FAILURES</li>
                                        <li>WE DO NOT WARRANT UNINTERRUPTED OR ERROR-FREE OPERATION OF AUTOMATIONS</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 8: Limitation of Liability */}
                            <div id="liability" className="glass-card p-8 mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 flex items-center">
                                    <Scale className="w-6 h-6 mr-3 text-[#4285F4]" />
                                    8. Limitation of Liability
                                </h2>
                                <div className="text-gray-600 space-y-4">
                                    <p><strong className="text-gray-900">Liability Cap:</strong> To the maximum extent permitted by law, n8nera&apos;s total liability for any claims arising from or related to our services shall not exceed the total fees paid by you to n8nera in the twelve (12) months preceding the claim.</p>
                                    <p><strong className="text-gray-900">Exclusion of Damages:</strong> In no event shall n8nera be liable for:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Indirect, incidental, special, consequential, or punitive damages</li>
                                        <li>Loss of profits, revenue, data, or business opportunities</li>
                                        <li>Cost of procurement of substitute services</li>
                                        <li>Damages resulting from unauthorized access to or alteration of your data</li>
                                    </ul>
                                    <p>These limitations apply regardless of the legal theory upon which the claim is based and even if n8nera has been advised of the possibility of such damages.</p>
                                </div>
                            </div>

                            {/* Section 9: Termination */}
                            <div id="termination" className="glass-card p-8 mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 flex items-center">
                                    <Clock className="w-6 h-6 mr-3 text-[#4285F4]" />
                                    9. Termination
                                </h2>
                                <div className="text-gray-600 space-y-4">
                                    <p><strong className="text-gray-900">Termination by Either Party:</strong> Either party may terminate a service agreement with 30 days written notice.</p>
                                    <p><strong className="text-gray-900">Termination for Cause:</strong> Either party may terminate immediately if the other party:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Materially breaches these Terms and fails to cure within 15 days of written notice</li>
                                        <li>Becomes insolvent or files for bankruptcy</li>
                                        <li>Engages in illegal or unethical conduct</li>
                                    </ul>
                                    <p><strong className="text-gray-900">Effect of Termination:</strong></p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>You must pay for all services performed up to the termination date</li>
                                        <li>We will deliver any completed work and work-in-progress</li>
                                        <li>Both parties must return or destroy confidential information</li>
                                        <li>Provisions that by their nature should survive will survive termination</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 10: Governing Law */}
                            <div id="governing-law" className="glass-card p-8 mb-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4 flex items-center">
                                    <Scale className="w-6 h-6 mr-3 text-[#4285F4]" />
                                    10. Governing Law & Dispute Resolution
                                </h2>
                                <div className="text-gray-600 space-y-4">
                                    <p><strong className="text-gray-900">Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, including the federal laws and applicable local laws of the Emirate of Dubai, without regard to conflict of law principles.</p>
                                    <p><strong className="text-gray-900">Dispute Resolution:</strong> Any disputes arising from these Terms or our services shall be resolved through:</p>
                                    <ol className="list-decimal pl-6 space-y-2">
                                        <li><strong className="text-gray-900">Negotiation:</strong> The parties shall first attempt to resolve disputes through good-faith negotiation</li>
                                        <li><strong className="text-gray-900">Mediation:</strong> If negotiation fails, disputes shall be submitted to mediation</li>
                                        <li><strong className="text-gray-900">Arbitration:</strong> If mediation fails, disputes shall be resolved through binding arbitration</li>
                                    </ol>
                                    <p><strong className="text-gray-900">Jurisdiction:</strong> For any matters not subject to arbitration, the courts of the Emirate of Dubai, UAE shall have exclusive jurisdiction.</p>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="glass-card p-8 border-[#4285F4]/30">
                                <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Contact Us</h2>
                                <div className="text-gray-600 space-y-4">
                                    <p>If you have any questions about these Terms of Service, please contact us:</p>
                                    <ul className="list-none space-y-2">
                                        <li><strong className="text-gray-900">Email:</strong> n8nera@gmail.com</li>
                                        <li><strong className="text-gray-900">Phone:</strong> +92-314-160-3089</li>
                                        <li><strong className="text-gray-900">Address:</strong> Satellite Town, Rahim Yar Khan, Pakistan</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Related Links */}
            <section className="relative py-12 overflow-hidden">
                <div className="absolute inset-0 bg-gray-50" />
                <div className="relative max-w-4xl mx-auto px-4">
                    <AnimatedSection>
                        <div className="glass-card p-8 text-center">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Legal Documents</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/privacy-policy" className="btn-secondary text-sm">
                                    Privacy Policy
                                </Link>
                                <Link href="/cookie-policy" className="btn-secondary text-sm">
                                    Cookie Policy
                                </Link>
                                <Link href="/contact" className="btn-primary text-sm">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
