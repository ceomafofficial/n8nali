import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MarkdownRenderer from "@/components/ui/MarkdownRenderer";
import { allBlogPosts } from "@/lib/data/blog-all";
import { getBreadcrumbSchema } from "@/lib/schema";
import { ArrowLeft, ArrowRight, Clock, Calendar, Linkedin, Twitter } from "lucide-react";

const allPosts = allBlogPosts;

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = allPosts.find((p) => p.slug === slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: post.metaTitle,
        description: post.metaDescription,
        keywords: post.keywords,
        authors: [{ name: post.author.name }],
        openGraph: {
            title: post.metaTitle,
            description: post.metaDescription,
            type: "article",
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt,
            authors: [post.author.name],
            url: `https://n8nera.tech/blog/${slug}/`,
            siteName: "n8nera",
            images: post.featuredImage
                ? [{ url: post.featuredImage, width: 1200, height: 630, alt: post.title }]
                : [{ url: "/og-image.webp", width: 1200, height: 630, alt: "n8nera Blog" }],
        },
        alternates: {
            canonical: `https://n8nera.tech/blog/${slug}/`,
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = allPosts.find((p) => p.slug === slug);

    if (!post) notFound();

    const currentIndex = allPosts.findIndex((p) => p.slug === slug);
    const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
    const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

    const relatedPosts = allPosts
        .filter((p) => p.slug !== slug && p.category === post.category)
        .slice(0, 3);

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: post.featuredImage || "https://n8nera.tech/og-image.webp",
        author: { "@type": "Person", name: post.author.name },
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        publisher: {
            "@type": "Organization",
            name: "n8nera",
            url: "https://n8nera.tech",
            logo: {
                "@type": "ImageObject",
                url: "https://n8nera.tech/logo.webp",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://n8nera.tech/blog/${slug}/`,
        },
        keywords: post.keywords?.join(", "),
        articleSection: post.category,
        wordCount: post.content.split(/\s+/).length,
        speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["article", "h1", ".prose"],
        },
        isPartOf: {
            "@id": "https://n8nera.tech/blog#blog",
        },
    };

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: "Home", url: "https://n8nera.tech" },
        { name: "Blog", url: "https://n8nera.tech/blog/" },
        { name: post.title, url: `https://n8nera.tech/blog/${slug}/` },
    ]);

    return (
        <div className="pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Header */}
            <section className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-premium-pattern" />
                </div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                            <Link href="/" className="hover:text-white">Home</Link>
                            <span>/</span>
                            <Link href="/blog" className="hover:text-white">Blog</Link>
                            <span>/</span>
                            <span className="text-white truncate">{post.title.slice(0, 30)}...</span>
                        </nav>

                        <span className="inline-block px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 text-sm font-medium mb-4">
                            {post.category}
                        </span>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                            {post.title}
                        </h1>

                        <p className="text-xl text-gray-400 mb-8">{post.excerpt}</p>

                        {/* Featured Image */}
                        {post.featuredImage && (
                            <div className="relative mt-8 aspect-video w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl shadow-accent-500/10">
                                <Image
                                    src={post.featuredImage}
                                    alt={post.title}
                                    fill
                                    sizes="(min-width: 1024px) 896px, 100vw"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}

                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mt-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-accent-500/30 flex items-center justify-center text-white font-bold">
                                    {post.author.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-white font-medium">{post.author.name}</div>
                                    <div className="text-gray-500">{post.author.role}</div>
                                </div>
                            </div>
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime} min read
                            </span>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Content */}
            <section className="relative py-12 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <article className="prose prose-invert prose-lg max-w-none">
                            <MarkdownRenderer content={post.content} />
                        </article>
                    </AnimatedSection>

                    {/* Tags */}
                    <AnimatedSection delay={0.2} className="mt-12 pt-8 border-t border-white/10">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm text-gray-500">Tags:</span>
                            {post.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-400">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Share */}
                    <AnimatedSection delay={0.3} className="mt-8">
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-500">Share:</span>
                            <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://n8nera.tech/blog/${slug}/`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Share on Twitter"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-accent-400 hover:bg-accent-500/20 transition-colors"
                            >
                                <Twitter className="w-5 h-5" aria-hidden="true" />
                            </a>
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://n8nera.tech/blog/${slug}/`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Share on LinkedIn"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-accent-400 hover:bg-accent-500/20 transition-colors"
                            >
                                <Linkedin className="w-5 h-5" aria-hidden="true" />
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Navigation */}
            <section className="relative py-12 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {prevPost && (
                            <Link href={`/blog/${prevPost.slug}`} className="group glass-card p-6">
                                <span className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                    <ArrowLeft className="w-4 h-4" /> Previous
                                </span>
                                <span className="text-white group-hover:text-accent-300 transition-colors line-clamp-2">
                                    {prevPost.title}
                                </span>
                            </Link>
                        )}
                        {nextPost && (
                            <Link href={`/blog/${nextPost.slug}`} className="group glass-card p-6 md:text-right md:ml-auto">
                                <span className="flex items-center justify-end gap-2 text-sm text-gray-500 mb-2">
                                    Next <ArrowRight className="w-4 h-4" />
                                </span>
                                <span className="text-white group-hover:text-accent-300 transition-colors line-clamp-2">
                                    {nextPost.title}
                                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="relative py-16 overflow-hidden">
                    <div className="absolute inset-0 bg-dark-900/50" />
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-2xl font-display font-bold text-white">Related Articles</h2>
                        </AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((related, index) => (
                                <AnimatedSection key={related.id} delay={index * 0.1}>
                                    <Link href={`/blog/${related.slug}`} className="group block glass-card overflow-hidden">
                                        {related.featuredImage && (
                                            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-accent-500/10 to-primary-600/10">
                                                <Image
                                                    src={related.featuredImage}
                                                    alt={related.title}
                                                    fill
                                                    sizes="(min-width: 768px) 33vw, 100vw"
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <span className="text-xs text-accent-400">{related.category}</span>
                                            <h3 className="text-lg font-semibold text-white mt-2 group-hover:text-accent-300 transition-colors line-clamp-2">
                                                {related.title}
                                            </h3>
                                            <p className="text-sm text-gray-400 mt-2 line-clamp-2">{related.excerpt}</p>
                                        </div>
                                    </Link>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-950/50 via-dark-950 to-primary-950/50" />
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl font-display font-bold text-white mb-4">
                            Ready to Implement These Strategies?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Book a free consultation with our automation experts and discover how n8nera can help transform your business.
                        </p>
                        <Link href="/contact" className="btn-primary">
                            Book Free Consultation <ArrowRight className="w-5 h-5" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
