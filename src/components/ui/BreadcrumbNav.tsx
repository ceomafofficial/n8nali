"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbNavProps {
    items: BreadcrumbItem[];
    className?: string;
}

/**
 * SEO-optimized visual breadcrumb navigation.
 * Renders an accessible <nav> with semantic aria-labels.
 * Pairs with JSON-LD BreadcrumbList schema for maximum crawl signal.
 */
export default function BreadcrumbNav({ items, className = "" }: BreadcrumbNavProps) {
    return (
        <nav
            aria-label="Breadcrumb"
            className={`flex items-center text-xs sm:text-sm text-gray-700 flex-wrap gap-y-1 ${className}`}
        >
            <Link
                href="/"
                className="flex items-center hover:text-[#4285F4] transition-colors"
                aria-label="Home"
            >
                <Home className="w-3.5 h-3.5" />
            </Link>

            {items.map((item, idx) => (
                <span key={idx} className="flex items-center">
                    <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-gray-400" aria-hidden="true" />
                    {item.href && idx < items.length - 1 ? (
                        <Link
                            href={item.href}
                            className="hover:text-[#4285F4] transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-gray-900 font-semibold" aria-current="page">
                            {item.label}
                        </span>
                    )}
                </span>
            ))}
        </nav>
    );
}
