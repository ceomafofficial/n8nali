import Link from "next/link";
import Image from "next/image";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import FooterCTAWrapper from "@/components/layout/FooterCTAWrapper";
import {
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
    Linkedin,
    Twitter,
    Instagram,
    Youtube,
    Facebook,
} from "lucide-react";

const footerLinks = {
    services: [
        { name: "n8n Automation Agency", href: "/n8n-automation-agency" },
        { name: "n8n Workflow Automation", href: "/n8n-workflow-automation" },
        { name: "n8n Integrations", href: "/n8n-integrations" },
        { name: "n8n AI Automation", href: "/n8n-ai-automation" },
        { name: "Hire n8n Developer", href: "/hire-n8n-developer" },
        { name: "Looking for n8n Developer", href: "/looking-for-n8n-developer" },
        { name: "AI Voice Agents", href: "/services/ai-call-center-agent" },
    ],
    company: [
        { name: "About Us", href: "/about-us" },
        { name: "Contact Us", href: "/contact" },
        { name: "Pricing", href: "/pricing" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Industries", href: "/industries" },
        { name: "Blog", href: "/blog" },
        { name: "FAQ", href: "/faq" },
        { name: "Careers", href: "/careers" },
    ],
    locations: [
        { name: "USA", href: "/usa" },
        { name: "UAE", href: "/uae" },
        { name: "Canada", href: "/canada" },
        { name: "Netherlands", href: "/netherlands" },
        { name: "Dubai", href: "/uae/dubai" },
        { name: "New York", href: "/usa/new-york" },
        { name: "Toronto", href: "/canada/toronto" },
        { name: "Amsterdam", href: "/netherlands/amsterdam" },
    ],
    legal: [
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Cookie Policy", href: "/cookie-policy" },
        { name: "Security & Compliance", href: "/security-compliance" },
        { name: "HTML Sitemap", href: "/sitemap" },
        { name: "XML Sitemap", href: "/sitemap.xml" },
    ],
};

const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/n8nera", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/n8nera", icon: Twitter },
    { name: "Instagram", href: "https://instagram.com/n8nera", icon: Instagram },
    { name: "YouTube", href: "https://youtube.com/@n8nera", icon: Youtube },
    { name: "Facebook", href: "https://facebook.com/n8nera", icon: Facebook },

];

export default function Footer() {
    return (
        <footer className="relative bg-dark-950 border-t border-white/5">
            {/* Gradient Overlay */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    background:
                        "radial-gradient(ellipse at bottom, rgba(147, 51, 234, 0.1) 0%, transparent 70%)",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* CTA Section - Hidden on careers pages */}
                <FooterCTAWrapper>
                    <div className="py-10 md:py-16 border-b border-white/5">
                        <div className="glass-card p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                                    Ready to Transform Your Business?
                                </h3>
                                <p className="text-gray-400 max-w-xl">
                                    Book a free automation audit and discover how n8nera can save you
                                    time, reduce costs, and scale your operations.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                <Link href="/contact" className="btn-primary whitespace-nowrap">
                                    Book Free Audit
                                    <ArrowUpRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="https://wa.me/923141603089"
                                    target="_blank"
                                    className="whatsapp-btn whitespace-nowrap"
                                >
                                    <WhatsAppIcon className="w-5 h-5" />
                                    WhatsApp Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </FooterCTAWrapper>

                {/* Main Footer Content */}
                <div className="py-10 md:py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <Image
                                src="/logo.webp"
                                alt="n8nera Logo"
                                width={150}
                                height={48}
                                className="h-10 md:h-12 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6 max-w-xs">
                            Premium automation & AI agency specializing in n8n workflow
                            automation, AI voice agents, and business process optimization.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                                <a
                                    href="mailto:n8nera@gmail.com"
                                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    <Mail className="w-4 h-4 text-accent-400" />
                                    n8nera@gmail.com
                                </a>
                                <a
                                    href="https://wa.me/923141603089"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    <Phone className="w-4 h-4 text-accent-400" />
                                    +92 314 160 3089
                                </a>
                                <div className="flex items-start gap-3 text-sm text-gray-400">
                                    <MapPin className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                                    <span>Rahim Yar Khan, Pakistan<br /><span className="text-xs text-gray-500">Serving clients in USA, UAE, Canada & Netherlands</span></span>
                                </div>
                            </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 mt-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-accent-500/50 transition-all"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors animated-underline"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors animated-underline"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Locations
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.locations.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors animated-underline"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors animated-underline"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Business Hours & Map */}
                    <div className="col-span-2">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Business Hours
                        </h4>
                        <div className="space-y-2 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Monday - Friday</span>
                                <span className="text-white">9:00 AM - 6:00 PM GST</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Saturday</span>
                                <span className="text-white">10:00 AM - 4:00 PM GST</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Sunday</span>
                                <span className="text-white">Closed</span>
                            </div>
                            <div className="flex justify-between text-sm pt-2 border-t border-white/5">
                                <span className="text-gray-400">Emergency Support</span>
                                <span className="text-accent-400">24/7 Available</span>
                            </div>
                        </div>

                        {/* Remote Service Note */}
                        <div className="rounded-lg border border-white/10 p-4 text-center">
                            <p className="text-sm text-gray-400">Based in Pakistan 🇵🇰 · Serving USA 🇺🇸 UAE 🇦🇪 Canada 🇨🇦 Netherlands 🇳🇱</p>
                            <p className="text-xs text-gray-500 mt-1">Available across all time zones · 24/7 Support</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-4 md:py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
                    <p className="text-xs md:text-sm text-gray-500 text-center md:text-left">
                        © {new Date().getFullYear()} n8nera. All rights reserved.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-6">
                        <span className="text-xs md:text-sm text-gray-500">
                            Based in Pakistan · Serving USA, UAE, Canada & Netherlands globally
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="text-xs md:text-sm text-gray-500">Languages:</span>
                            <span className="text-xs md:text-sm text-gray-400">EN</span>
                            <span className="text-xs md:text-sm text-gray-600">|</span>
                            <span className="text-xs md:text-sm text-gray-400">AR</span>
                            <span className="text-xs md:text-sm text-gray-600">|</span>
                            <span className="text-xs md:text-sm text-gray-400">NL</span>
                            <span className="text-xs md:text-sm text-gray-600">|</span>
                            <span className="text-xs md:text-sm text-gray-400">UR</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
