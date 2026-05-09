import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/contact/ContactForm";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    MessageSquare,
    Calendar,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Free Automation Audit ($500 Value) — We Show Your Exact Savings Before You Pay",
    description:
        "Most clients find 10+ tasks to automate in the first call. Avg savings: 40hrs/week & $8,400/mo. Zero commitment. We respond in 2 hours. Book your free audit → see the money before you spend a cent.",
    keywords: [
        "free automation audit",
        "contact n8nera",
        "automation consultation",
        "book automation audit",
        "n8n consultation",
        "workflow audit free",
        "automation ROI calculator",
    ],
    openGraph: {
        title: "Before You Spend $1 — Let Us Show You Exactly How Much You'll Save (Free)",
        description: "10+ automatable tasks found per client. Avg $8,400/mo saved. 2-hour response. Zero commitment. Book free audit →",
        url: "https://n8nera.tech/contact/",
        type: "website",
    },    twitter: {
        card: "summary_large_image",
        site: "@n8nera",
        creator: "@n8nera",
        title: "Free Automation Audit — 10+ Tasks Found, $8,400/mo Avg Saved | n8nera",
        description: "We map your workflows & show exact ROI. 2-hour response. Zero commitment. 127 businesses already audited →",
    },    alternates: {
        canonical: "https://n8nera.tech/contact/",
    },
};

export default function ContactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ContactPage",
                "name": "Contact n8nera",
                "description": "Get in touch with n8nera for enterprise automation solutions. Pakistan-based, serving USA, UAE, Canada & Netherlands globally.",
                "url": "https://n8nera.tech/contact"
            },
            {
                "@type": "ProfessionalService",
                "@id": "https://n8nera.tech",
                "name": "n8nera - AI & Automation Agency",
                "image": "https://n8nera.tech/logo.webp",
                "telephone": "+92-314-1603089",
                "email": "n8nera@gmail.com",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Satellite Town",
                    "addressLocality": "Rahim Yar Khan",
                    "addressRegion": "Punjab",
                    "addressCountry": "PK"
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                },
                "priceRange": "$$$",
                "areaServed": [
                    { "@type": "Country", "name": "United States" },
                    { "@type": "Country", "name": "United Arab Emirates" },
                    { "@type": "Country", "name": "Canada" },
                    { "@type": "Country", "name": "Netherlands" },
                    { "@type": "City", "name": "Dubai" },
                    { "@type": "City", "name": "New York" },
                    { "@type": "City", "name": "Toronto" },
                    { "@type": "City", "name": "Amsterdam" }
                ]
            }
        ]
    };

    return (
        <div className="pt-16 md:pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-white" />
                    <div className="absolute top-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-accent-600/10 rounded-full blur-[80px] md:blur-[120px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                        <span className="inline-block text-xs md:text-sm font-semibold text-accent-400 uppercase tracking-wider mb-3 md:mb-4">
                            Contact Us
                        </span>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-gray-900 mb-4 md:mb-6">
                            Let&apos;s <span className="text-[#4285F4]">Transform</span> Your Business
                        </h1>
                        <p className="text-sm md:text-base lg:text-lg text-gray-400 px-4 md:px-0">
                            Book a free automation audit or reach out to discuss your project.
                            We respond within 24 hours.
                        </p>
                    </AnimatedSection>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Contact Form */}
                        <AnimatedSection delay={0.1}>
                            <div className="glass-card p-5 md:p-8">
                                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
                                    Book a Free Automation Audit
                                </h2>
                                <ContactForm />
                            </div>
                        </AnimatedSection>

                        {/* Contact Info */}
                        <AnimatedSection delay={0.2}>
                            <div className="space-y-8">
                                {/* Quick Contact */}
                                <div className="google-card p-6 bg-white">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                        <Calendar className="w-5 h-5 text-[#4285F4]" />
                                        Prefer a Quick Chat?
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Skip the form and connect with us directly via WhatsApp.
                                        We typically respond within minutes during business hours.
                                    </p>
                                    <Link
                                        href="https://wa.me/923141603089?text=Hi%20n8nera!%20I%27m%20interested%20in%20learning%20about%20your%20automation%20services."
                                        target="_blank"
                                        className="whatsapp-btn w-full justify-center"
                                    >
                                        <WhatsAppIcon className="w-5 h-5" />
                                        Chat on WhatsApp
                                    </Link>
                                </div>

                                {/* Contact Details */}
                                <div className="glass-card p-6 space-y-6">
                                    <h3 className="text-lg font-semibold text-white">Contact Details</h3>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#4285F4]/10 flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 h-5 text-[#4285F4]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Email</p>
                                            <a
                                                href="mailto:n8nera@gmail.com"
                                                className="text-white hover:text-[#4285F4] transition-colors"
                                            >
                                                n8nera@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#4285F4]/10 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-5 h-5 text-[#4285F4]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Phone / WhatsApp</p>
                                            <a
                                                href="tel:+923141603089"
                                                className="text-white hover:text-[#4285F4] transition-colors"
                                            >
                                                +92 314 160 3089
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#4285F4]/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-[#4285F4]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Headquarters</p>
                                            <p className="text-gray-900">
                                                Rahim Yar Khan, Pakistan
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Serving USA, UAE, Canada & Netherlands
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#4285F4]/10 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-5 h-5 text-[#4285F4]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Business Hours</p>
                                            <p className="text-gray-900">
                                                Mon - Fri: 9:00 AM - 6:00 PM (GST)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Languages */}
                                <div className="google-card p-6 bg-white">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                        <MessageSquare className="w-5 h-5 text-[#4285F4]" />
                                        Languages We Support
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {["English", "Arabic", "Urdu", "Hindi"].map((lang) => (
                                            <span
                                                key={lang}
                                                className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-300"
                                            >
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section >
        </div >
    );
}
