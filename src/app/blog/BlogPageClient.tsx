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
        <div className="pt-16 md:pt-20">
            {/* Hero Section */}
            <section className="relative py-12 md:py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-premium-pattern" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <span className="inline-block text-xs md:text-sm font-semibold text-accent-400 uppercase tracking-wider mb-3 md:mb-4">
                            Blog & Insights
                        </span>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6">
                            Automation <span className="text-gradient">Knowledge Hub</span>
                        </h1>
                        <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4 md:px-0">
                            Expert insights, guides, and strategies on workflow automation, AI, and business process optimization.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Categories */}
            <section className="relative py-4 md:py-8 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${selectedCategory === null
                                ? "bg-accent-500 text-white shadow-premium"
                                : "bg-white/5 text-gray-400 hover:bg-accent-500/20 hover:text-accent-300"
                                }`}
                        >
                            All Posts
                        </button>
                        {blogCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.name)}
                                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${selectedCategory === category.name
                                    ? "bg-accent-500 text-white shadow-premium"
                                    : "bg-white/5 text-gray-400 hover:bg-accent-500/20 hover:text-accent-300"
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
                <section className="relative py-16 overflow-hidden">
                    <div className="absolute inset-0 bg-dark-950" />
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection>
                            <Link href={`/blog/${featuredPost.slug}`} className="group block">
                                <div className="glass-card p-8 md:p-12 bg-gradient-to-br from-accent-500/10 to-primary-600/10">
                                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                                        <div>
                                            <span className="inline-block px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium mb-4">
                                                Featured
                                            </span>
                                            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-accent-300 transition-colors">
                                                {featuredPost.title}
                                            </h2>
                                            <p className="text-gray-400 mb-6">
                                                {featuredPost.excerpt}
                                            </p>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
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
                                            <div className="flex items-center gap-2 text-accent-400 font-medium group-hover:text-accent-300">
                                                Read Full Article
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                        <div className="hidden lg:block">
                                            <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-accent-500/20 to-primary-600/20">
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
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="mb-12">
                        <h2 className="text-2xl font-display font-bold text-white">
                            {selectedCategory ? `${selectedCategory} Articles` : "Recent Articles"}
                            <span className="text-gray-500 text-base ml-3">({filteredPosts.length})</span>
                        </h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <AnimatedSection key={post.id} delay={index * 0.1}>
                                <Link href={`/blog/${post.slug}`} className="group block h-full">
                                    <article className="glass-card h-full overflow-hidden flex flex-col">
                                        {/* Featured Image */}
                                        {post.featuredImage && (
                                            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-accent-500/10 to-primary-600/10">
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
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-gray-400 text-xs font-medium mb-4 self-start">
                                            {post.category}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-accent-300 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-sm text-gray-400 mb-4 flex-grow line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta */}
                                        <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-white/5">
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
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-950/50 via-dark-950 to-primary-950/50" />
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
                                className="input-premium flex-grow"
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
