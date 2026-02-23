import Link from "next/link";
import { Cog, ArrowRight } from "lucide-react";
import { services as allServices } from "@/lib/data/services";
import { iconMap } from "@/lib/icon-map";

/** Color palette for the service cards, cycled by index. */
const cardColors = [
    "from-purple-500 to-indigo-600",
    "from-blue-500 to-cyan-600",
    "from-emerald-500 to-teal-600",
    "from-green-500 to-emerald-600",
    "from-orange-500 to-amber-600",
    "from-pink-500 to-rose-600",
    "from-violet-500 to-purple-600",
    "from-sky-500 to-blue-600",
];

/** Show the first 8 services on the homepage. */
const services = allServices.slice(0, 8);

export default function ServicesSection() {
    return (
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden" data-speakable="true" aria-label="n8nera automation and AI services for businesses worldwide">
            {/* Background */}
            <div className="absolute inset-0 bg-dark-950">
                <div className="absolute inset-0 bg-premium-pattern" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                    <span className="inline-block text-xs md:text-sm font-semibold text-accent-400 uppercase tracking-wider mb-3 md:mb-4">
                        Our Services
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6">
                        Enterprise-Grade{" "}
                        <span className="text-gradient">Automation</span>
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-gray-400 px-4 md:px-0">
                        From workflow automation to AI voice agents, we build intelligent systems
                        that transform how your business operates.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {services.map((service, index) => {
                        const Icon = iconMap[service.icon] || Cog;
                        const color = cardColors[index % cardColors.length];
                        return (
                            <div key={service.id} className="group">
                                <Link href={`/services/${service.id}`}>
                                    <div
                                        className="glass-card h-full p-5 md:p-6 cursor-pointer hover:-translate-y-2 transition-transform duration-300"
                                    >
                                        {/* Icon */}
                                        <div
                                            className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 md:mb-5 group-hover:shadow-glow-sm transition-shadow`}
                                        >
                                            <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-base md:text-lg font-semibold text-white mb-2 group-hover:text-accent-300 transition-colors">
                                            {service.shortTitle}
                                        </h3>
                                        <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4 line-clamp-2">
                                            {service.description}
                                        </p>

                                        {/* Link */}
                                        <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-accent-400 group-hover:text-accent-300">
                                            Learn more
                                            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
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
