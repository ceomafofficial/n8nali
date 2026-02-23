import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/data/case-studies";

export default function CaseStudiesSection() {
    // Take the first 3 case studies
    const featuredStudies = caseStudies.slice(0, 3);

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-dark-950">
                <div className="absolute inset-0 grid-lines opacity-20" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                        Case Studies
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                        Real Results from{" "}
                        <span className="text-gradient">Real Businesses</span>
                    </h2>
                    <p className="text-lg text-gray-400">
                        See how businesses are transforming their operations with n8nera automation solutions.
                    </p>
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
                    {featuredStudies.map((study) => (
                        <div key={study.id}>
                            <div
                                className="group h-full hover:-translate-y-2 transition-transform duration-300"
                            >
                                <Link href={`/case-studies/${study.id}`}>
                                    <div className="glass-card h-full p-8 cursor-pointer hover:border-accent-500/30 transition-all relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-8 opacity-10">
                                            {/* Optional background icon */}
                                        </div>

                                        {/* Industry Badge */}
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent-500/10 text-accent-300 border border-accent-500/20">
                                                {study.industry}
                                            </span>
                                            <span className="text-xs font-medium text-gray-400">
                                                {study.category}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-accent-300 transition-colors">
                                            {study.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-gray-400 mb-8 line-clamp-3">
                                            {study.shortDescription}
                                        </p>

                                        {/* Results */}
                                        <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-white/5">
                                            {study.results.slice(0, 3).map((result, i) => (
                                                <div key={i} className="text-center">
                                                    <div className="text-lg font-bold text-white mb-1">{result.metric}</div>
                                                    <div className="text-xs text-gray-500">{result.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Read More */}
                                        <div className="flex items-center gap-2 text-sm font-medium text-accent-400 group-hover:text-accent-300">
                                            View Case Study
                                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link href="/case-studies" className="btn-secondary inline-flex">
                        View All Case Studies
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
