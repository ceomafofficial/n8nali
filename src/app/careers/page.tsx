import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { benefits, values, getPositionSummaries } from "@/lib/data/careers";
import { getWebPageSchema } from "@/lib/schema";
import {
    Briefcase,
    MapPin,
    Clock,
    DollarSign,
    ArrowRight,
    CheckCircle2,
    Send,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Careers at n8nera — Join the #1 Remote n8n Agency [Hiring]",
    description:
        "Build the future of automation. Remote-first, competitive pay ($2K-$8K/mo), flexible hours & cutting-edge n8n/AI projects. n8n developers, AI engineers & automation architects wanted. Apply now →",
    keywords: [
        "n8nera careers",
        "n8n developer jobs",
        "remote automation jobs",
        "AI automation jobs",
        "n8n jobs remote",
        "automation engineer jobs",
    ],
    openGraph: {
        title: "Careers at n8nera — Remote-First, Competitive Pay | We’re Hiring",
        description:
            "Remote-first culture. Competitive pay. Cutting-edge n8n & AI projects. Join the team behind 200+ automation workflows.",
        url: "https://n8nera.tech/careers/",
        type: "website",
    },
    alternates: {
        canonical: "https://n8nera.tech/careers/",
    },
};

const openPositions = getPositionSummaries();

export default function CareersPage() {
    const careersSchema = {
        "@context": "https://schema.org",
        "@graph": [
            getWebPageSchema({
                url: "https://n8nera.tech/careers/",
                name: "Careers at n8nera — Join the #1 Remote n8n Agency",
                description: "Remote-first automation agency hiring n8n developers, AI engineers & automation architects. Competitive pay, flexible hours.",
                type: "WebPage",
                dateModified: "2026-02-12",
                breadcrumbs: [
                    { name: "Home", url: "https://n8nera.tech" },
                    { name: "Careers", url: "https://n8nera.tech/careers/" },
                ],
            }),
            {
                "@type": "EmployerAggregateRating",
                "@id": "https://n8nera.tech/careers/#rating",
                itemReviewed: { "@id": "https://n8nera.tech/#organization" },
                ratingValue: "4.8",
                bestRating: "5",
                ratingCount: "32",
            },
        ],
    };

    return (
        <div className="pt-16 md:pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }}
            />
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-premium-pattern" />
                    <div className="absolute top-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-accent-600/10 rounded-full blur-[80px] md:blur-[120px]" />
                    <div className="absolute bottom-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary-600/10 rounded-full blur-[80px] md:blur-[120px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <span className="inline-block text-xs md:text-sm font-semibold text-accent-400 uppercase tracking-wider mb-3 md:mb-4">
                            Join Our Team
                        </span>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-4 md:mb-6">
                            Build the Future of{" "}
                            <span className="text-gradient">Automation</span>
                        </h1>
                        <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto mb-8 px-4 md:px-0">
                            Join a team of passionate engineers, designers, and problem-solvers
                            who are transforming how businesses operate through intelligent
                            automation and AI.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#positions" className="btn-primary">
                                View Open Positions
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <Link href="/about-us" className="btn-secondary">
                                Learn About Us
                            </Link>
                        </div>
                    </AnimatedSection>

                    {/* Quick Stats */}
                    <AnimatedSection delay={0.2} className="mt-12 md:mt-16">
                        <div className="glass-card p-6 md:p-8 max-w-3xl mx-auto">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                                {[
                                    { value: "100%", label: "Remote" },
                                    { value: "15+", label: "Team Members" },
                                    { value: "8+", label: "Countries" },
                                    { value: "4.9★", label: "Glassdoor" },
                                ].map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <div className="text-xl md:text-2xl font-bold text-gradient-purple mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs md:text-sm text-gray-400">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Our Values */}
            <section className="relative py-16 md:py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-10 md:mb-12">
                        <span className="inline-block text-xs md:text-sm font-semibold text-accent-400 uppercase tracking-wider mb-3">
                            Our Culture
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                            What We <span className="text-gradient">Stand For</span>
                        </h2>
                        <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
                            Our values guide everything we do, from how we build products to
                            how we treat each other.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {values.map((value, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="glass-card h-full p-5 md:p-6 text-center">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-accent-500 to-primary-600 flex items-center justify-center mx-auto mb-4">
                                        <value.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-400">
                                        {value.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="relative py-16 md:py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-10 md:mb-12">
                        <span className="inline-block text-xs md:text-sm font-semibold text-accent-400 uppercase tracking-wider mb-3">
                            Benefits & Perks
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                            Why You&apos;ll <span className="text-gradient">Love</span> Working Here
                        </h2>
                        <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
                            We invest in our team because great people build great products.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {benefits.map((benefit, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="glass-card h-full p-5 md:p-6 flex items-start gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-accent-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-gray-400">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="positions" className="relative py-16 md:py-20 overflow-hidden scroll-mt-20">
                <div className="absolute inset-0 bg-dark-900/50" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-10 md:mb-12">
                        <span className="inline-block text-xs md:text-sm font-semibold text-accent-400 uppercase tracking-wider mb-3">
                            Open Positions
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                            Find Your <span className="text-gradient">Role</span>
                        </h2>
                        <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
                            We&apos;re always looking for talented individuals to join our growing team.
                        </p>
                    </AnimatedSection>

                    <div className="space-y-4 md:space-y-6">
                        {openPositions.map((position, index) => (
                            <AnimatedSection key={position.id} delay={index * 0.1}>
                                <div className="glass-card p-5 md:p-6 hover:border-accent-500/30 transition-all">
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                                                <h3 className="text-lg md:text-xl font-semibold text-white">
                                                    {position.title}
                                                </h3>
                                                <span className="px-2 py-0.5 rounded-full bg-accent-500/10 text-accent-400 text-xs font-medium">
                                                    {position.department}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-400 mb-3">
                                                {position.description}
                                            </p>
                                            <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="w-3.5 h-3.5" />
                                                    {position.location}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {position.type}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <DollarSign className="w-3.5 h-3.5" />
                                                    {position.salary}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Link
                                                href={`/careers/${position.id}`}
                                                className="btn-primary text-sm w-full lg:w-auto justify-center"
                                            >
                                                Apply Now
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Requirements Preview */}
                                    <div className="mt-4 pt-4 border-t border-white/5">
                                        <p className="text-xs text-gray-500 mb-2">Key Requirements:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {position.requirements.slice(0, 3).map((req, i) => (
                                                <span
                                                    key={i}
                                                    className="inline-flex items-center gap-1 text-xs text-gray-400"
                                                >
                                                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                                    {req}
                                                </span>
                                            ))}
                                            {position.requirements.length > 3 && (
                                                <span className="text-xs text-gray-500">
                                                    +{position.requirements.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Don't See Your Role */}
            <section className="relative py-16 md:py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-950/50 via-dark-950 to-primary-950/50" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <div className="glass-card p-6 md:p-10">
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-primary-600 flex items-center justify-center mx-auto mb-6">
                                <Briefcase className="w-7 h-7 md:w-8 md:h-8 text-white" />
                            </div>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-white mb-3">
                                Don&apos;t See Your Perfect Role?
                            </h2>
                            <p className="text-sm md:text-base text-gray-400 mb-6 max-w-xl mx-auto">
                                We&apos;re always interested in meeting talented people. Send us your
                                resume and tell us how you can contribute to our mission.
                            </p>
                            <Link
                                href="mailto:careers@n8nera.tech?subject=General Application - n8nera"
                                className="btn-primary inline-flex"
                            >
                                <Send className="w-5 h-5" />
                                Send General Application
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Hiring Process */}
            <section className="relative py-16 md:py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-10 md:mb-12">
                        <span className="inline-block text-xs md:text-sm font-semibold text-accent-400 uppercase tracking-wider mb-3">
                            Our Process
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                            What to <span className="text-gradient">Expect</span>
                        </h2>
                        <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
                            Our hiring process is designed to be respectful of your time while
                            helping us find the best fit.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                        {[
                            {
                                step: "01",
                                title: "Application",
                                description: "Submit your application. We review every single one.",
                            },
                            {
                                step: "02",
                                title: "Initial Call",
                                description: "30-minute chat to learn about you and answer questions.",
                            },
                            {
                                step: "03",
                                title: "Technical Round",
                                description: "Skills assessment relevant to the role (take-home or live).",
                            },
                            {
                                step: "04",
                                title: "Final Interview",
                                description: "Meet the team and discuss culture fit and expectations.",
                            },
                        ].map((item, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="glass-card h-full p-5 md:p-6 relative">
                                    <div className="text-4xl md:text-5xl font-bold text-white/5 absolute top-4 right-4">
                                        {item.step}
                                    </div>
                                    <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center mb-4">
                                        <span className="text-sm font-bold text-accent-400">
                                            {item.step}
                                        </span>
                                    </div>
                                    <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-400">
                                        {item.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection delay={0.5} className="text-center mt-10">
                        <p className="text-sm text-gray-500">
                            Average time from application to offer:{" "}
                            <span className="text-white font-medium">2-3 weeks</span>
                        </p>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
