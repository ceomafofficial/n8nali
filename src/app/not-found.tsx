import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Search, Home } from "lucide-react";

export const metadata: Metadata = {
    title: "Page Not Found | n8nera",
    description: "The page you were looking for doesn't exist. Find automation services, case studies, and more at n8nera.",
    robots: {
        index: false,
        follow: true, // Allow link equity to flow to navigation links
    },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 rounded-2xl bg-[#4285F4]/10 flex items-center justify-center mx-auto mb-8 border border-[#4285F4]/20">
          <Search className="w-10 h-10 text-[#4285F4]" />
        </div>

        <h1 className="text-6xl md:text-8xl font-display font-bold text-[#4285F4] mb-4">
          404
        </h1>
        <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary w-full sm:w-auto">
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link href="/services" className="btn-secondary w-full sm:w-auto">
            <ArrowLeft className="w-5 h-5" />
            Browse Services
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-4">Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Services", href: "/services" },
              { label: "About Us", href: "/about-us" },
              { label: "Contact", href: "/contact" },
              { label: "Blog", href: "/blog" },
              { label: "Pricing", href: "/pricing" },
              { label: "Case Studies", href: "/case-studies" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-sm hover:bg-[#4285F4]/10 hover:text-[#4285F4] hover:border-[#4285F4]/30 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
