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
        <div className="pt-20 bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Header */}
            <section className="relative py-16 overflow-hidden bg-[#f8f9fa] border-b border-gray-100">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#4285F4]/8 rounded-full blur-[80px]" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                            <Link href="/" className="hover:text-[#4285F4] transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/blog" className="hover:text-[#4285F4] transition-colors">Blog</Link>
                            <span>/</span>
                            <span className="text-gray-800 truncate">{post.title.slice(0, 30)}...</span>
                        </nav>

                        <span className="inline-block px-3 py-1 rounded-full bg-[#4285F4]/10 text-[#4285F4] text-sm font-medium mb-4">
                            {post.category}
                        </span>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
                            {post.title}
                        </h1>

                        <p className="text-xl text-gray-700 mb-8">{post.excerpt}</p>

                        {/* Featured Image */}
                        {post.featuredImage && (
                            <div className="relative mt-8 aspect-video w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg">
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

                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mt-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#4285F4]/20 flex items-center justify-center text-[#4285F4] font-bold">
                                    {post.author.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-gray-900 font-medium">{post.author.name}</div>
                                    <div className="text-gray-500 text-xs">{post.author.role}</div>
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
            <section className="relative py-12 overflow-hidden bg-white">
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <article className="prose prose-lg max-w-none">
                            <MarkdownRenderer content={post.content} />
                        </article>
                    </AnimatedSection>

                    {/* Tags */}
                    <AnimatedSection delay={0.2} className="mt-12 pt-8 border-t border-gray-100">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm text-gray-600">Tags:</span>
                            {post.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700 border border-gray-200">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Share */}
                    <AnimatedSection delay={0.3} className="mt-8">
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-600">Share:</span>
                            <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://n8nera.tech/blog/${slug}/`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Share on Twitter"
                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-[#4285F4] hover:bg-[#4285F4]/10 transition-colors border border-gray-200"
                            >
                                <Twitter className="w-5 h-5" aria-hidden="true" />
                            </a>
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://n8nera.tech/blog/${slug}/`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Share on LinkedIn"
                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-[#4285F4] hover:bg-[#4285F4]/10 transition-colors border border-gray-200"
                            >
                                <Linkedin className="w-5 h-5" aria-hidden="true" />
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Navigation */}
            <section className="relative py-12 overflow-hidden bg-[#f8f9fa] border-t border-gray-100">
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {prevPost && (
                            <Link href={`/blog/${prevPost.slug}`} className="group google-card p-6 bg-white">
                                <span className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                    <ArrowLeft className="w-4 h-4" /> Previous
                                </span>
                                <span className="text-gray-900 group-hover:text-[#4285F4] transition-colors line-clamp-2 font-medium">
                                    {prevPost.title}
                                </span>
                            </Link>
                        )}
                        {nextPost && (
                            <Link href={`/blog/${nextPost.slug}`} className="group google-card p-6 bg-white md:text-right md:ml-auto">
                                <span className="flex items-center justify-end gap-2 text-sm text-gray-500 mb-2">
                                    Next <ArrowRight className="w-4 h-4" />
                                </span>
                                <span className="text-gray-900 group-hover:text-[#4285F4] transition-colors line-clamp-2 font-medium">
                                    {nextPost.title}
                                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="relative py-16 overflow-hidden bg-white">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedSection className="text-center mb-12">
                            <h2 className="text-2xl font-display font-bold text-gray-900">Related Articles</h2>
                        </AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedPosts.map((related, index) => (
                                <AnimatedSection key={related.id} delay={index * 0.1}>
                                    <Link href={`/blog/${related.slug}`} className="group block google-card overflow-hidden bg-white">
                                        {related.featuredImage && (
                                            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[#4285F4]/10 to-[#34A853]/10">
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
                                            <span className="text-xs text-[#4285F4] font-medium">{related.category}</span>
                                            <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-[#4285F4] transition-colors line-clamp-2">
                                                {related.title}
                                            </h3>
                                            <p className="text-sm text-gray-700 mt-2 line-clamp-2">{related.excerpt}</p>
                                        </div>
                                    </Link>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="relative py-20 overflow-hidden bg-[#0D0D0D] dark-cta-section">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4285F4]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#34A853]/10 rounded-full blur-[120px]" />
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
