import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { caseStudies } from "@/lib/data/case-studies";
import { ArrowRight } from "lucide-react";
import { getCollectionPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "Case Studies — Real Results: 60% Cost Savings [Proof]",
    description:
        "See how businesses saved 20+ hrs/week & cut costs 60% with n8n automation. Real case studies with measurable ROI. E-commerce, SaaS, healthcare & more. Browse results →",
    keywords: ["n8n case studies", "automation success stories", "n8n workflow examples", "automation ROI proof", "n8n results"],
    openGraph: {
        title: "n8n Automation Case Studies — See Real ROI Numbers | n8nera",
        description: "Real businesses, real results. 60% cost savings, 20+ hrs/week saved. Browse case studies with measurable ROI.",
        url: "https://n8nera.tech/case-studies/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@n8nera",
        creator: "@n8nera",
        title: "Case Studies — Real Results: 60% Cost Savings [Proof] | n8nera",
        description: "Real businesses, real results. 60% cost savings, 20+ hrs/week saved. Browse measurable ROI case studies.",
    },
    alternates: {
        canonical: "https://n8nera.tech/case-studies/",
    },
};

export default function CaseStudiesPage() {
    const caseStudiesSchema = getCollectionPageSchema({
        url: "https://n8nera.tech/case-studies/",
        name: "Case Studies & Automation Workflows",
        description: "Explore our library of n8n automation workflows, AI agents, and success stories. See how we solve complex business problems.",
        items: caseStudies.map(cs => ({
            name: cs.title,
            url: `https://n8nera.tech/case-studies/${cs.id}/`,
            description: cs.shortDescription,
        })),
        breadcrumbs: [
            { name: "Home", url: "https://n8nera.tech" },
            { name: "Case Studies", url: "https://n8nera.tech/case-studies/" },
        ],
    });

    return (
        <div className="pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }}
            />
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-white" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                            Our Work
                        </span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            Automation <span className="text-[#4285F4]">Success Stories</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                            Browse our portfolio of enterprise-grade n8n workflows and AI agents.
                            From intelligent email sorting to complex CRM integrations.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="relative pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <AnimatedSection key={study.id} delay={index * 0.1}>
                                <Link href={`/case-studies/${study.id}`} className="group block h-full">
                                    <div className="google-card h-full bg-white overflow-hidden hover:border-[#4285F4]/30 transition-all duration-300 flex flex-col">
                                        {/* Image Container */}
                                        <div className="relative h-48 w-full overflow-hidden border-b border-white/5 bg-gray-50">
                                            <Image
                                                src={study.image}
                                                alt={study.title}
                                                fill
                                                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
                                            <div className="absolute bottom-4 left-4">
                                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent-500/20 text-accent-300 backdrop-blur-md border border-accent-500/20">
                                                    {study.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#4285F4] transition-colors">
                                                {study.title}
                                            </h3>
                                            <p className="text-sm text-gray-400 mb-6 flex-grow line-clamp-3">
                                                {study.shortDescription}
                                            </p>

                                            <div className="flex items-center text-sm font-medium text-white group-hover:text-[#4285F4] transition-colors pt-4 border-t border-white/5">
                                                View Solution
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
