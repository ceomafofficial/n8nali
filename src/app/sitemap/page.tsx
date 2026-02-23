import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, MapPin, Shield, Layers, Briefcase } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { blogPosts } from "@/lib/data/blog";
import { caseStudies } from "@/lib/data/case-studies";

export const metadata: Metadata = {
    title: "Sitemap — Browse All Pages & Services",
    description:
        "Complete sitemap of n8nera. Browse all 16 automation services, 15+ industries, 50+ city pages, blog posts, case studies & resources.",
    robots: {
        index: false,
        follow: true,
    },
    alternates: {
        canonical: "https://n8nera.tech/sitemap/",
    },
};

export default function SitemapPage() {
    // Define static routes structure
    const siteStructure = [
        {
            category: "Main Pages",
            icon: Layers,
            links: [
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about-us" },
                { name: "Contact", href: "/contact" },
                { name: "Pricing", href: "/pricing" },
                { name: "Careers", href: "/careers" },
                { name: "Industries", href: "/industries" },
                { name: "Services", href: "/services" },
            ]
        },
        {
            category: "Services",
            icon: Briefcase,
            links: [
                { name: "Business Process Automation", href: "/services/business-process-automation" },
                { name: "CRM & Sales Automation", href: "/services/crm-sales-automation" },
                { name: "E-commerce Automation", href: "/services/ecommerce-automation" },
                { name: "WhatsApp Automation", href: "/services/whatsapp-messaging-automation" },
                { name: "Social Media Automation", href: "/services/social-media-automation" },
                { name: "AI-Based Automation", href: "/services/ai-based-automation" },
                { name: "Data Integration & Sync", href: "/services/data-integration-sync" },
                { name: "Monitoring & Alerts", href: "/services/monitoring-alert-systems" },
                { name: "SaaS Automation", href: "/services/saas-automation-service" },
                { name: "AI Call Center Agent", href: "/services/ai-call-center-agent" },
                { name: "Appointment Booking Bot", href: "/services/appointment-booking-voice-bot" },
                { name: "Hotel & Restaurant Agent", href: "/services/hotel-restaurant-voice-agent" },
                { name: "Sales Voice AI", href: "/services/sales-voice-ai-agent" },
            ]
        },
        {
            category: "Locations",
            icon: MapPin,
            links: [
                { name: "Dubai", href: "/uae/dubai" },
                { name: "Abu Dhabi", href: "/uae/abu-dhabi" },
                { name: "Sharjah", href: "/uae/sharjah" },
                { name: "Ajman", href: "/uae/ajman" },
                { name: "Ras Al Khaimah", href: "/uae/ras-al-khaimah" },
            ]
        },
        {
            category: "Legal",
            icon: Shield,
            links: [
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms-of-service" },
                { name: "Cookie Policy", href: "/cookie-policy" },
                { name: "Security & Compliance", href: "/security-compliance" },
            ]
        }
    ];

    return (
        <div className="pt-24 pb-20">
            {/* Header */}
            <section className="relative py-12 md:py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-premium-pattern opacity-30" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                            Sitemap
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            A complete overview of all pages available on n8nera.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

                    {/* Static Categories */}
                    {siteStructure.map((section, index) => (
                        <AnimatedSection key={section.category} delay={index * 0.1}>
                            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 h-full hover:border-accent-500/30 transition-colors">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center text-accent-400">
                                        <section.icon className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-xl font-bold text-white">{section.category}</h2>
                                </div>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                            >
                                                <ArrowRight className="w-3.5 h-3.5 text-accent-500/50 group-hover:text-accent-400 transition-colors" />
                                                <span className="text-sm font-medium">{link.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>
                    ))}

                    {/* Blog Posts */}
                    <AnimatedSection delay={0.4}>
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 h-full hover:border-accent-500/30 transition-colors">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center text-accent-400">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl font-bold text-white">Latest Articles</h2>
                            </div>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        href="/blog"
                                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
                                    >
                                        <ArrowRight className="w-3.5 h-3.5 text-accent-500/50 group-hover:text-accent-400 transition-colors" />
                                        <span className="text-sm font-bold text-accent-400">View All Articles</span>
                                    </Link>
                                </li>
                                {blogPosts.map((post) => (
                                    <li key={post.slug}>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="group flex items-start gap-2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <ArrowRight className="w-3.5 h-3.5 text-accent-500/50 group-hover:text-accent-400 transition-colors mt-1 flex-shrink-0" />
                                            <span className="text-sm font-medium line-clamp-1" title={post.title}>{post.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>

                    {/* Case Studies */}
                    <AnimatedSection delay={0.5}>
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10 h-full hover:border-accent-500/30 transition-colors">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center text-accent-400">
                                    <Briefcase className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl font-bold text-white">Case Studies</h2>
                            </div>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        href="/case-studies"
                                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
                                    >
                                        <ArrowRight className="w-3.5 h-3.5 text-accent-500/50 group-hover:text-accent-400 transition-colors" />
                                        <span className="text-sm font-bold text-accent-400">View All Case Studies</span>
                                    </Link>
                                </li>
                                {caseStudies.map((study) => (
                                    <li key={study.id}>
                                        <Link
                                            href={`/case-studies/${study.id}`}
                                            className="group flex items-start gap-2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <ArrowRight className="w-3.5 h-3.5 text-accent-500/50 group-hover:text-accent-400 transition-colors mt-1 flex-shrink-0" />
                                            <span className="text-sm font-medium line-clamp-1" title={study.title}>{study.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>

                </div>
            </div>
        </div>
    );
}
