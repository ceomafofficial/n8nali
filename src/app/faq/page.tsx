import { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FAQSection from "@/components/sections/FAQSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { faqs, generateFAQSchema } from "@/lib/data/faq";
import { getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
    title: "n8n Automation FAQ — 30+ Expert Answers [Updated 2026]",
    description:
        "Get instant answers to 30+ common n8n automation questions. Pricing, timelines, ROI, security, integrations & more. Written by certified n8n experts with 200+ implementations.",
    keywords: ["n8n automation FAQ", "n8n questions", "workflow automation help", "n8n support", "n8n pricing FAQ", "automation ROI"],
    openGraph: {
        title: "n8n Automation FAQ — 30+ Expert Answers | n8nera",
        description: "Instant answers on n8n pricing, timelines, ROI, security & integrations. Updated for 2026.",
        url: "https://n8nera.tech/faq/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@n8nera",
        creator: "@n8nera",
        title: "n8n Automation FAQ — 30+ Expert Answers [2026] | n8nera",
        description: "Instant answers on n8n pricing, timelines, ROI, security & integrations.",
    },
    alternates: {
        canonical: "https://n8nera.tech/faq/",
    },
};

export default function FAQPage() {
    // Generate FAQ schema server-side with ALL FAQs for reliable AI crawling
    const faqSchema = generateFAQSchema(faqs);
    const breadcrumbSchema = getBreadcrumbSchema([
        { name: "Home", url: "https://n8nera.tech" },
        { name: "FAQ", url: "https://n8nera.tech/faq" },
    ]);

    return (
        <div className="pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {/* Hero */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-white" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                            Help Center
                        </span>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                            Frequently Asked <span className="text-[#4285F4]">Questions</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Everything you need to know about n8nera&apos;s automation services. Can&apos;t find what you&apos;re looking for? Contact us directly.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* FAQ Component */}
            <FAQSection />

            {/* Still Need Help */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br [#4285F4]" />
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                            Still Have Questions?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Our team is happy to help. Reach out via WhatsApp or book a call to discuss your specific needs.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                Contact Us <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="https://wa.me/923141603089" target="_blank" className="whatsapp-btn">
                                <WhatsAppIcon className="w-5 h-5" />
                                WhatsApp Us
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
