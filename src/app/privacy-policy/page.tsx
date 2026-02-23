import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowLeft, Shield, Database, Eye, Lock, UserCheck, Globe, Mail } from "lucide-react";
import { getWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Privacy Policy — How We Protect Your Data | GDPR & CCPA",
    description: "Your data, your rights. See how n8nera collects, protects & handles personal information. GDPR, CCPA & PIPEDA compliant. Enterprise-grade data protection.",
    keywords: [
        "n8nera privacy policy",
        "automation data protection",
        "GDPR compliance automation",
        "CCPA privacy automation",
        "PIPEDA data handling",
    ],
    robots: { index: true, follow: true },
    openGraph: {
        title: "Privacy Policy — How n8nera Protects Your Data | GDPR & CCPA",
        description: "Enterprise-grade data protection. GDPR, CCPA & PIPEDA compliant. See how n8nera safeguards your information.",
        url: "https://n8nera.tech/privacy-policy/",
        type: "website",
    },
    alternates: {
        canonical: "https://n8nera.tech/privacy-policy/",
    },
};

export default function PrivacyPolicyPage() {
    const lastUpdated = "January 12, 2026";

    const legalSchema = {
        "@context": "https://schema.org",
        "@graph": [
            getWebPageSchema({
                url: "https://n8nera.tech/privacy-policy/",
                name: "Privacy Policy — n8nera",
                description: "How n8nera collects, protects & handles personal information. GDPR, CCPA & PIPEDA compliant.",
                type: "WebPage",
                dateModified: "2026-01-12",
                breadcrumbs: [
                    { name: "Home", url: "https://n8nera.tech" },
                    { name: "Privacy Policy", url: "https://n8nera.tech/privacy-policy/" },
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
                    <div className="absolute inset-0 bg-premium-pattern" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]" />
                </div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center">
                        <Link href="/" className="inline-flex items-center text-sm text-accent-400 hover:text-accent-300 mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            Privacy <span className="text-gradient">Policy</span>
                        </h1>
                        <p className="text-lg text-gray-400 mb-4">Your privacy is important to us.</p>
                        <p className="text-sm text-gray-500">Last Updated: {lastUpdated}</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Content */}
            <section className="relative py-12 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="space-y-8">
                            {/* Introduction */}
                            <div className="glass-card p-8">
                                <p className="text-gray-400">
                                    n8nera (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy.
                                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                                    when you visit our website or use our services.
                                </p>
                            </div>

                            {/* Section 1 */}
                            <div className="glass-card p-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center">
                                    <Database className="w-6 h-6 mr-3 text-primary-400" />
                                    1. Information We Collect
                                </h2>
                                <div className="text-gray-400 space-y-4">
                                    <p><strong className="text-white">Personal Information You Provide:</strong></p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Contact Information: Name, email, phone number, company name</li>
                                        <li>Account Information: Username, password, preferences</li>
                                        <li>Communication Data: Messages and feedback you send us</li>
                                        <li>Payment Information: Billing details (processed by secure third-party processors)</li>
                                        <li>Project Data: Information for service delivery</li>
                                    </ul>
                                    <p><strong className="text-white">Information Collected Automatically:</strong></p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Device Information: IP address, browser type, operating system</li>
                                        <li>Usage Data: Pages visited, time spent, click patterns</li>
                                        <li>Cookies: Session and persistent cookies</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div className="glass-card p-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center">
                                    <Eye className="w-6 h-6 mr-3 text-primary-400" />
                                    2. How We Use Your Information
                                </h2>
                                <div className="text-gray-400 space-y-4">
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong className="text-white">Service Delivery:</strong> Provide and improve our automation services</li>
                                        <li><strong className="text-white">Communication:</strong> Respond to inquiries and send project updates</li>
                                        <li><strong className="text-white">Marketing:</strong> Send promotional materials (with your consent)</li>
                                        <li><strong className="text-white">Analytics:</strong> Understand website usage and improve experience</li>
                                        <li><strong className="text-white">Security:</strong> Detect and prevent fraud and security threats</li>
                                        <li><strong className="text-white">Legal Compliance:</strong> Comply with applicable laws</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div className="glass-card p-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center">
                                    <Globe className="w-6 h-6 mr-3 text-primary-400" />
                                    3. Data Sharing & Disclosure
                                </h2>
                                <div className="text-gray-400 space-y-4">
                                    <p>We do not sell your personal information. We may share data with:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong className="text-white">Service Providers:</strong> Third-party vendors for operations (hosting, analytics, payments)</li>
                                        <li><strong className="text-white">Business Partners:</strong> When required for integrations</li>
                                        <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights</li>
                                        <li><strong className="text-white">Business Transfers:</strong> In connection with mergers or acquisitions</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div className="glass-card p-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center">
                                    <Lock className="w-6 h-6 mr-3 text-primary-400" />
                                    4. Data Security
                                </h2>
                                <div className="text-gray-400 space-y-4">
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong className="text-white">Encryption:</strong> TLS 1.3 for data in transit, AES-256 for data at rest</li>
                                        <li><strong className="text-white">Access Controls:</strong> Role-based access for authorized personnel only</li>
                                        <li><strong className="text-white">Infrastructure:</strong> Enterprise-grade cloud platforms with SOC 2 compliance</li>
                                        <li><strong className="text-white">Monitoring:</strong> Continuous security monitoring and logging</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 5 */}
                            <div className="glass-card p-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center">
                                    <Database className="w-6 h-6 mr-3 text-primary-400" />
                                    5. Data Retention
                                </h2>
                                <div className="text-gray-400 space-y-4">
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong className="text-white">Active Client Data:</strong> Retained for business relationship plus 3 years</li>
                                        <li><strong className="text-white">Project Deliverables:</strong> Retained for 2 years after completion</li>
                                        <li><strong className="text-white">Marketing Data:</strong> Until you unsubscribe or request deletion</li>
                                        <li><strong className="text-white">Legal Records:</strong> As required by law (typically 7 years)</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 6 */}
                            <div className="glass-card p-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center">
                                    <UserCheck className="w-6 h-6 mr-3 text-primary-400" />
                                    6. Your Rights
                                </h2>
                                <div className="text-gray-400 space-y-4">
                                    <p>You may have the following rights regarding your personal data:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong className="text-white">Access:</strong> Request a copy of your personal information</li>
                                        <li><strong className="text-white">Rectification:</strong> Request correction of inaccurate data</li>
                                        <li><strong className="text-white">Erasure:</strong> Request deletion (&quot;right to be forgotten&quot;)</li>
                                        <li><strong className="text-white">Restrict Processing:</strong> Limit how we use your data</li>
                                        <li><strong className="text-white">Data Portability:</strong> Receive data in a machine-readable format</li>
                                        <li><strong className="text-white">Object:</strong> Object to processing for marketing purposes</li>
                                        <li><strong className="text-white">Withdraw Consent:</strong> Withdraw consent at any time</li>
                                    </ul>
                                    <p>To exercise these rights, contact us at n8nera@gmail.com.</p>
                                </div>
                            </div>

                            {/* Section 7 */}
                            <div className="glass-card p-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center">
                                    <Eye className="w-6 h-6 mr-3 text-primary-400" />
                                    7. Cookies & Tracking
                                </h2>
                                <div className="text-gray-400 space-y-4">
                                    <p>We use cookies and similar technologies:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong className="text-white">Essential Cookies:</strong> Required for website functionality</li>
                                        <li><strong className="text-white">Analytics Cookies:</strong> Understand how visitors use our website</li>
                                        <li><strong className="text-white">Marketing Cookies:</strong> Deliver relevant advertisements</li>
                                    </ul>
                                    <p>See our <Link href="/cookie-policy" className="text-accent-400 hover:text-accent-300">Cookie Policy</Link> for details.</p>
                                </div>
                            </div>

                            {/* Section 8 */}
                            <div className="glass-card p-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center">
                                    <Globe className="w-6 h-6 mr-3 text-primary-400" />
                                    8. International Transfers
                                </h2>
                                <div className="text-gray-400 space-y-4">
                                    <p>Your information may be transferred to countries other than your country of residence. We ensure appropriate safeguards are in place for international transfers including data processing agreements and encryption.</p>
                                </div>
                            </div>

                            {/* Section 9 */}
                            <div className="glass-card p-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center">
                                    <Shield className="w-6 h-6 mr-3 text-primary-400" />
                                    9. Children&apos;s Privacy
                                </h2>
                                <div className="text-gray-400 space-y-4">
                                    <p>Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you believe a child has provided us with information, please contact us immediately.</p>
                                </div>
                            </div>

                            {/* Section 10 */}
                            <div className="glass-card p-8 scroll-mt-24">
                                <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center">
                                    <Mail className="w-6 h-6 mr-3 text-primary-400" />
                                    10. Changes to This Policy
                                </h2>
                                <div className="text-gray-400 space-y-4">
                                    <p>We may update this Privacy Policy from time to time. Material changes will be posted on our website with an updated effective date. Your continued use of our services constitutes acceptance of the updated policy.</p>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="glass-card p-8 border-primary-500/30">
                                <h2 className="text-2xl font-display font-bold text-white mb-4">Contact Us</h2>
                                <div className="text-gray-400 space-y-2">
                                    <p>Questions about this Privacy Policy? Contact us:</p>
                                    <p><strong className="text-white">Email:</strong> n8nera@gmail.com</p>
                                    <p><strong className="text-white">Phone:</strong> +92-314-160-3089</p>
                                    <p><strong className="text-white">Address:</strong> Satellite Town, Rahim Yar Khan, Pakistan</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Related Links */}
            <section className="relative py-12 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-4xl mx-auto px-4">
                    <AnimatedSection>
                        <div className="glass-card p-8 text-center">
                            <h3 className="text-xl font-semibold text-white mb-4">Related Legal Documents</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/terms-of-service" className="btn-secondary text-sm">Terms of Service</Link>
                                <Link href="/cookie-policy" className="btn-secondary text-sm">Cookie Policy</Link>
                                <Link href="/contact" className="btn-primary text-sm">Contact Us</Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
