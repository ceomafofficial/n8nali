import Link from "next/link";
import { Cog, ArrowRight } from "lucide-react";
import { services as allServices } from "@/lib/data/services";
import { iconMap } from "@/lib/icon-map";

/** Show the first 8 services on the homepage. */
const services = allServices.slice(0, 8);

export default function ServicesSection() {
    return (
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-white" data-speakable="true" aria-label="n8nera automation and AI services for businesses worldwide">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                    <span className="inline-block text-xs md:text-sm font-semibold text-[#4285F4] uppercase tracking-wider mb-3 md:mb-4">
                        Our Services
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4 md:mb-6">
                        Enterprise-Grade{" "}
                        <span className="text-gradient-blue italic-accent">Automation</span>
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 px-4 md:px-0">
                        From workflow automation to AI voice agents, we build intelligent systems
                        that transform how your business operates.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {services.map((service) => {
                        const Icon = iconMap[service.icon] || Cog;
                        return (
                            <div key={service.id} className="group">
                                <Link href={`/services/${service.id}`}>
                                    <div
                                        className="google-card h-full p-5 md:p-6 cursor-pointer flex flex-col"
                                    >
                                        {/* Icon */}
                                        <div
                                            className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-4 md:mb-5 group-hover:bg-[#4285F4] group-hover:border-[#4285F4] transition-colors duration-300"
                                        >
                                            <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#4285F4] group-hover:text-white transition-colors duration-300" />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-[#4285F4] transition-colors">
                                            {service.shortTitle}
                                        </h3>
                                        <p className="text-xs md:text-sm text-gray-700 mb-6 flex-grow">
                                            {service.description}
                                        </p>

                                        {/* Link */}
                                        <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-[#4285F4]">
                                            Learn more
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link href="/services" className="btn-secondary inline-flex">
                        View All Services
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
