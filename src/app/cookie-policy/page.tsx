import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowLeft, Cookie, Settings, BarChart3, Target, Shield, ToggleLeft } from "lucide-react";
import { getWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Cookie Policy — Your Privacy Choices | GDPR Compliant",
    description: "Understand how n8nera uses cookies. Manage your preferences, control tracking & exercise your privacy rights. Transparent & GDPR compliant.",
    keywords: [
        "n8nera cookie policy",
        "website cookies automation",
        "GDPR cookie compliance",
        "privacy preferences",
        "cookie management",
    ],
    robots: { index: true, follow: true },
    openGraph: {
        title: "Cookie Policy — Your Privacy Choices | n8nera",
        description: "Manage your cookie preferences. GDPR compliant. Transparent tracking controls.",
        url: "https://n8nera.tech/cookie-policy/",
        type: "website",
    },
    alternates: {
        canonical: "https://n8nera.tech/cookie-policy/",
    },
};

const cookieTypes = [
    {
        icon: Shield,
        title: "Essential Cookies",
        description: "Required for core website functionality. Cannot be disabled.",
        examples: ["Session management", "Security tokens", "Load balancing"],
        duration: "Session to 1 year",
        canDisable: false,
    },
    {
        icon: BarChart3,
        title: "Analytics Cookies",
        description: "Help us understand how visitors interact with our website.",
        examples: ["Google Analytics", "Page view tracking", "User journey analysis"],
        duration: "Up to 2 years",
        canDisable: true,
    },
    {
        icon: Target,
        title: "Marketing Cookies",
        description: "Used to deliver relevant advertisements and track campaign performance.",
        examples: ["Ad targeting", "Conversion tracking", "Remarketing"],
        duration: "Up to 2 years",
        canDisable: true,
    },
    {
        icon: Settings,
        title: "Preference Cookies",
        description: "Remember your settings and personalization choices.",
        examples: ["Language preferences", "Theme settings", "Region selection"],
        duration: "Up to 1 year",
        canDisable: true,
    },
];

export default function CookiePolicyPage() {
    const lastUpdated = "January 12, 2026";

    const legalSchema = {
        "@context": "https://schema.org",
        "@graph": [
            getWebPageSchema({
                url: "https://n8nera.tech/cookie-policy/",
                name: "Cookie Policy — n8nera",
                description: "How n8nera uses cookies. Manage your preferences and exercise your privacy rights.",
                type: "WebPage",
                dateModified: "2026-01-12",
                breadcrumbs: [
                    { name: "Home", url: "https://n8nera.tech" },
                    { name: "Cookie Policy", url: "https://n8nera.tech/cookie-policy/" },
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
                    <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                </div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center">
                        <Link href="/" className="inline-flex items-center text-sm text-accent-400 hover:text-accent-300 mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                        </Link>
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-500/10 mb-6">
                            <Cookie className="w-8 h-8 text-accent-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            Cookie <span className="text-gradient">Policy</span>
                        </h1>
                        <p className="text-lg text-gray-400 mb-4">
                            Understanding how we use cookies and your choices.
                        </p>
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
                                <h2 className="text-2xl font-display font-bold text-white mb-4">What Are Cookies?</h2>
                                <div className="text-gray-400 space-y-4">
                                    <p>
                                        Cookies are small text files that are stored on your device (computer, tablet, or mobile)
                                        when you visit a website. They are widely used to make websites work more efficiently,
                                        provide a better user experience, and give website owners useful information about how
                                        their site is being used.
                                    </p>
                                    <p>
                                        This Cookie Policy explains what cookies are, how n8nera (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses them,
                                        the types of cookies we use, and how you can manage your cookie preferences.
                                    </p>
                                </div>
                            </div>

                            {/* Why We Use Cookies */}
                            <div className="glass-card p-8">
                                <h2 className="text-2xl font-display font-bold text-white mb-4">Why We Use Cookies</h2>
                                <div className="text-gray-400 space-y-4">
                                    <p>We use cookies and similar technologies for several purposes:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong className="text-white">Essential Operations:</strong> To ensure our website functions correctly and securely</li>
                                        <li><strong className="text-white">Performance Analysis:</strong> To understand how visitors use our website and identify areas for improvement</li>
                                        <li><strong className="text-white">Personalization:</strong> To remember your preferences and provide a tailored experience</li>
                                        <li><strong className="text-white">Marketing:</strong> To deliver relevant content and measure the effectiveness of our campaigns</li>
                                        <li><strong className="text-white">Security:</strong> To protect against fraud and ensure safe browsing</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Types of Cookies */}
                            <div className="glass-card p-8">
                                <h2 className="text-2xl font-display font-bold text-white mb-6">Types of Cookies We Use</h2>
                                <div className="grid gap-6">
                                    {cookieTypes.map((cookie, index) => (
                                        <div key={index} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                                                    <cookie.icon className="w-6 h-6 text-accent-400" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h3 className="text-lg font-semibold text-white">{cookie.title}</h3>
                                                        <span className={`text-xs px-2 py-1 rounded-full ${cookie.canDisable ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>
                                                            {cookie.canDisable ? 'Can Disable' : 'Required'}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-400 text-sm mb-3">{cookie.description}</p>
                                                    <div className="flex flex-wrap gap-2 mb-2">
                                                        {cookie.examples.map((example, i) => (
                                                            <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-500">
                                                                {example}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <p className="text-xs text-gray-500">Duration: {cookie.duration}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Specific Cookies */}
                            <div className="glass-card p-8">
                                <h2 className="text-2xl font-display font-bold text-white mb-4">Specific Cookies We Use</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-white/10">
                                                <th className="text-left py-3 px-4 text-white font-semibold">Cookie Name</th>
                                                <th className="text-left py-3 px-4 text-white font-semibold">Provider</th>
                                                <th className="text-left py-3 px-4 text-white font-semibold">Purpose</th>
                                                <th className="text-left py-3 px-4 text-white font-semibold">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-400">
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4">_ga</td>
                                                <td className="py-3 px-4">Google Analytics</td>
                                                <td className="py-3 px-4">Distinguishes unique users</td>
                                                <td className="py-3 px-4">2 years</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4">_ga_*</td>
                                                <td className="py-3 px-4">Google Analytics</td>
                                                <td className="py-3 px-4">Persists session state</td>
                                                <td className="py-3 px-4">2 years</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4">_gid</td>
                                                <td className="py-3 px-4">Google Analytics</td>
                                                <td className="py-3 px-4">Distinguishes users</td>
                                                <td className="py-3 px-4">24 hours</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4">cookie_consent</td>
                                                <td className="py-3 px-4">n8nera</td>
                                                <td className="py-3 px-4">Stores cookie preferences</td>
                                                <td className="py-3 px-4">1 year</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="py-3 px-4">session_id</td>
                                                <td className="py-3 px-4">n8nera</td>
                                                <td className="py-3 px-4">Session management</td>
                                                <td className="py-3 px-4">Session</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Third-Party Cookies */}
                            <div className="glass-card p-8">
                                <h2 className="text-2xl font-display font-bold text-white mb-4">Third-Party Cookies</h2>
                                <div className="text-gray-400 space-y-4">
                                    <p>
                                        Some cookies on our website are set by third-party services we use. These services
                                        have their own privacy policies governing the use of cookies:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong className="text-white">Google Analytics:</strong> Web analytics service - <a href="https://policies.google.com/privacy" className="text-accent-400 hover:text-accent-300" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                                        <li><strong className="text-white">Google Tag Manager:</strong> Tag management - <a href="https://policies.google.com/privacy" className="text-accent-400 hover:text-accent-300" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                                        <li><strong className="text-white">LinkedIn:</strong> Social sharing and tracking - <a href="https://www.linkedin.com/legal/cookie-policy" className="text-accent-400 hover:text-accent-300" target="_blank" rel="noopener noreferrer">Cookie Policy</a></li>
                                        <li><strong className="text-white">Facebook/Meta:</strong> Social plugins and analytics - <a href="https://www.facebook.com/policies/cookies/" className="text-accent-400 hover:text-accent-300" target="_blank" rel="noopener noreferrer">Cookie Policy</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Managing Cookies */}
                            <div className="glass-card p-8">
                                <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center">
                                    <ToggleLeft className="w-6 h-6 mr-3 text-accent-400" />
                                    Managing Your Cookie Preferences
                                </h2>
                                <div className="text-gray-400 space-y-4">
                                    <p><strong className="text-white">Browser Settings:</strong></p>
                                    <p>Most web browsers allow you to control cookies through their settings. Here&apos;s how to manage cookies in popular browsers:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong className="text-white">Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                                        <li><strong className="text-white">Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                                        <li><strong className="text-white">Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                                        <li><strong className="text-white">Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</li>
                                    </ul>

                                    <p><strong className="text-white">Opt-Out Links:</strong></p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-accent-400 hover:text-accent-300" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                                        <li>Network Advertising Initiative: <a href="https://optout.networkadvertising.org/" className="text-accent-400 hover:text-accent-300" target="_blank" rel="noopener noreferrer">NAI Opt-out</a></li>
                                        <li>Digital Advertising Alliance: <a href="https://optout.aboutads.info/" className="text-accent-400 hover:text-accent-300" target="_blank" rel="noopener noreferrer">DAA Opt-out</a></li>
                                    </ul>

                                    <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20 mt-4">
                                        <p className="text-yellow-400 text-sm">
                                            <strong>Note:</strong> Disabling cookies may affect website functionality. Some features may not work as expected if cookies are disabled.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Do Not Track */}
                            <div className="glass-card p-8">
                                <h2 className="text-2xl font-display font-bold text-white mb-4">Do Not Track Signals</h2>
                                <div className="text-gray-400 space-y-4">
                                    <p>
                                        Some browsers have a &quot;Do Not Track&quot; (DNT) feature that lets you tell websites you don&apos;t want
                                        your online activities tracked. Currently, there is no uniform standard for how websites should
                                        respond to DNT signals. Our website does not currently respond to DNT signals, but we honor
                                        your cookie preferences set through our cookie management tools.
                                    </p>
                                </div>
                            </div>

                            {/* Updates */}
                            <div className="glass-card p-8">
                                <h2 className="text-2xl font-display font-bold text-white mb-4">Updates to This Policy</h2>
                                <div className="text-gray-400 space-y-4">
                                    <p>
                                        We may update this Cookie Policy from time to time to reflect changes in technology,
                                        legislation, or our data practices. When we make changes, we will update the &quot;Last Updated&quot;
                                        date at the top of this policy. We encourage you to review this policy periodically.
                                    </p>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="glass-card p-8 border-accent-500/30">
                                <h2 className="text-2xl font-display font-bold text-white mb-4">Questions?</h2>
                                <div className="text-gray-400 space-y-2">
                                    <p>If you have any questions about our use of cookies, please contact us:</p>
                                    <p><strong className="text-white">Email:</strong> n8nera@gmail.com</p>
                                    <p><strong className="text-white">Phone:</strong> +92-314-160-3089</p>
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
                                <Link href="/privacy-policy" className="btn-secondary text-sm">Privacy Policy</Link>
                                <Link href="/contact" className="btn-primary text-sm">Contact Us</Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
