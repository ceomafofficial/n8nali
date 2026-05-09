"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { blogCategories } from "@/lib/data/blog";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";
import type { BlogPost } from "@/lib/data/blog";

interface BlogPageClientProps {
    allPosts: BlogPost[];
}

export default function BlogPageClient({ allPosts }: BlogPageClientProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const featuredPost = allPosts[0];

    // Filter posts based on selected category
    const filteredPosts = selectedCategory
        ? allPosts.filter(post => post.category === selectedCategory)
        : allPosts.slice(1); // Show all except featured if no filter selected

    return (
        <div className="pt-16 md:pt-20 bg-white">
            {/* Hero Section */}
            <section className="relative py-12 md:py-20 overflow-hidden bg-[#f8f9fa] border-b border-gray-100">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#4285F4]/8 rounded-full blur-[80px]" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <span className="inline-block text-xs md:text-sm font-semibold text-[#4285F4] uppercase tracking-wider mb-3 md:mb-4">
                            Blog &amp; Insights
                        </span>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4 md:mb-6">
                            Automation <span className="text-gradient-blue italic-accent">Knowledge Hub</span>
                        </h1>
                        <p className="text-sm md:text-base lg:text-lg text-gray-700 max-w-2xl mx-auto px-4 md:px-0">
                            Expert insights, guides, and strategies on workflow automation, AI, and business process optimization.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Categories */}
            <section className="relative py-4 md:py-8 bg-white border-b border-gray-100">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex overflow-x-auto no-scrollbar gap-2 md:gap-3 pb-1 justify-start md:justify-center md:flex-wrap">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${selectedCategory === null
                                ? "bg-[#4285F4] text-white shadow-sm"
                                : "bg-gray-100 text-gray-600 hover:bg-[#4285F4]/10 hover:text-[#4285F4]"
                                }`}
                        >
                            All Posts
                        </button>
                        {blogCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.name)}
                                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${selectedCategory === category.name
                                    ? "bg-[#4285F4] text-white shadow-sm"
                                    : "bg-gray-100 text-gray-600 hover:bg-[#4285F4]/10 hover:text-[#4285F4]"
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className="relative py-16 overflow-hidden bg-white">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection>
                            <Link href={`/blog/${featuredPost.slug}`} className="group block">
                                <div className="google-card p-8 md:p-12 bg-gradient-to-br from-[#4285F4]/5 to-[#34A853]/5">
                                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                                        <div>
                                            <span className="inline-block px-3 py-1 rounded-full bg-[#4285F4]/10 text-[#4285F4] text-sm font-medium mb-4">
                                                Featured
                                            </span>
                                            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4 group-hover:text-[#4285F4] transition-colors">
                                                {featuredPost.title}
                                            </h2>
                                            <p className="text-gray-700 mb-6">
                                                {featuredPost.excerpt}
                                            </p>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                                                <span className="flex items-center gap-1">
                                                    <User className="w-4 h-4" />
                                                    {featuredPost.author.name}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {featuredPost.readTime} min read
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-[#4285F4] font-medium group-hover:text-blue-700">
                                                Read Full Article
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                        <div className="hidden lg:block">
                                            <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#4285F4]/10 to-[#34A853]/10">
                                                {featuredPost.featuredImage ? (
                                                    <Image
                                                        src={featuredPost.featuredImage}
                                                        alt={featuredPost.title}
                                                        fill
                                                        sizes="(min-width: 1024px) 40vw, 100vw"
                                                        className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                                                        priority
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <span className="text-6xl">📚</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </AnimatedSection>
                    </div>
                </section>
            )}

            {/* Recent Posts Grid */}
            <section className="relative py-16 overflow-hidden bg-[#f8f9fa]">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="mb-12">
                        <h2 className="text-2xl font-display font-bold text-gray-900">
                            {selectedCategory ? `${selectedCategory} Articles` : "Recent Articles"}
                            <span className="text-gray-500 text-base ml-3">({filteredPosts.length})</span>
                        </h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <AnimatedSection key={post.id} delay={index * 0.1}>
                                <Link href={`/blog/${post.slug}`} className="group block h-full">
                                    <article className="google-card h-full overflow-hidden flex flex-col bg-white">
                                        {/* Featured Image */}
                                        {post.featuredImage && (
                                            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[#4285F4]/10 to-[#34A853]/10">
                                                <Image
                                                    src={post.featuredImage}
                                                    alt={post.title}
                                                    fill
                                                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        )}
                                        <div className="p-6 flex flex-col flex-grow">
                                        {/* Category */}
                                        <span className="inline-block px-3 py-1 rounded-full bg-[#4285F4]/10 text-[#4285F4] text-xs font-medium mb-4 self-start">
                                            {post.category}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#4285F4] transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-sm text-gray-700 mb-4 flex-grow line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta */}
                                        <div className="flex items-center justify-between text-xs text-gray-600 pt-4 border-t border-gray-100">
                                            <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {post.readTime} min
                                            </span>
                                        </div>
                                        </div>
                                    </article>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="relative py-20 overflow-hidden bg-[#0D0D0D] dark-cta-section">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4285F4]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#34A853]/10 rounded-full blur-[120px]" />
                <div className="relative max-w-3xl mx-auto px-4 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            Stay Updated on Automation Trends
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Get weekly insights on automation strategies, AI developments, and business optimization tips delivered to your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#4285F4] transition-colors"
                            />
                            <button type="submit" className="btn-primary whitespace-nowrap">
                                Subscribe
                            </button>
                        </form>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
