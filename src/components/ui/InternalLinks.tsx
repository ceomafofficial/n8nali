import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedLink {
    title: string;
    href: string;
    description?: string;
}

interface InternalLinksProps {
    heading?: string;
    links: RelatedLink[];
    className?: string;
}

/**
 * SEO Internal Linking Component
 * Distributes PageRank across the site via contextual cross-links.
 * Use on service pages, blog posts, and geo landing pages for topical clustering.
 */
export default function InternalLinks({
    heading = "Explore Related Services",
    links,
    className = "",
}: InternalLinksProps) {
    if (!links || links.length === 0) return null;

    return (
        <section className={`py-12 ${className}`} aria-label={heading}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                    {heading}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {links.map((link, idx) => (
                        <Link
                            key={idx}
                            href={link.href}
                            className="group google-card p-5 transition-all duration-300"
                        >
                            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#4285F4] transition-colors flex items-center justify-between">
                                {link.title}
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" />
                            </h3>
                            {link.description && (
                                <p className="text-xs text-gray-700 mt-2 line-clamp-2">
                                    {link.description}
                                </p>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
