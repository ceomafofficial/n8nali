import Link from "next/link";
import { Calendar, MessageSquare, Phone, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function CTASection() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden dark-cta-section">
            {/* Dark Background */}
            <div className="absolute inset-0 bg-[#0D0D0D]" />

            {/* Subtle Blue Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4285F4]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#34A853]/10 rounded-full blur-[120px]" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                        Ready to <span className="text-gradient-blue">Automate</span> Your Business?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        Book a free automation audit with our experts. We&apos;ll analyze your processes,
                        identify opportunities, and show you exactly how much time and money you can save.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Link href="/contact" className="btn-primary text-base px-8 py-4">
                            <Calendar className="w-5 h-5" />
                            Book a Free Automation Audit
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://wa.me/923141603089?text=Hi%20n8nera!%20I%27m%20interested%20in%20learning%20about%20your%20automation%20services."
                            target="_blank"
                            className="whatsapp-btn text-base px-8 py-4"
                        >
                            <WhatsAppIcon className="w-5 h-5" />
                            WhatsApp Us Now
                        </Link>
                    </div>

                    {/* Contact Options */}
                    <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                        <a
                            href="tel:+923141603089"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            +92 314 160 3089
                        </a>
                        <a
                            href="mailto:n8nera@gmail.com"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <MessageSquare className="w-4 h-4" />
                            n8nera@gmail.com
                        </a>
                    </div>
                </div>

                {/* Trust Row */}
                <div className="mt-16">
                    <div
                        className="flex flex-wrap justify-center gap-6 text-sm text-gray-500"
                    >
                        <span>✓ No commitment required</span>
                        <span>✓ Free ROI analysis</span>
                        <span>✓ Response within 24 hours</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
