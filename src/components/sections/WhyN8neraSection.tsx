import { CheckCircle2, Zap, Shield, Globe, Server, Scale, Brain, Clock } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "n8n Expertise",
        description: "Certified n8n experts with deep knowledge of workflow automation architecture.",
        color: "text-[#4285F4]",
        bgColor: "bg-[#4285F4]/10",
        hoverBorder: "group-hover:border-[#4285F4]/30",
    },
    {
        icon: CheckCircle2,
        title: "Fully Custom Logic",
        description: "No cookie-cutter templates. Every automation is tailored to your exact business requirements.",
        color: "text-[#34A853]",
        bgColor: "bg-[#34A853]/10",
        hoverBorder: "group-hover:border-[#34A853]/30",
    },
    {
        icon: Globe,
        title: "Multi-Language Support",
        description: "AI voice agents and systems that work in English, Arabic, Urdu, and Hindi.",
        color: "text-[#4285F4]",
        bgColor: "bg-[#4285F4]/10",
        hoverBorder: "group-hover:border-[#4285F4]/30",
    },
    {
        icon: Server,
        title: "Self-Hosted & Secure",
        description: "Deploy on your infrastructure. Your data never leaves your control.",
        color: "text-[#EA4335]",
        bgColor: "bg-[#EA4335]/10",
        hoverBorder: "group-hover:border-[#EA4335]/30",
    },
    {
        icon: Scale,
        title: "Scalable Architecture",
        description: "Built to handle enterprise workloads. Scale from startup to enterprise seamlessly.",
        color: "text-[#34A853]",
        bgColor: "bg-[#34A853]/10",
        hoverBorder: "group-hover:border-[#34A853]/30",
    },
    {
        icon: Brain,
        title: "Enterprise-Ready AI",
        description: "Production-grade AI integrations with GPT, Claude, and custom models.",
        color: "text-[#4285F4]",
        bgColor: "bg-[#4285F4]/10",
        hoverBorder: "group-hover:border-[#4285F4]/30",
    },
    {
        icon: Clock,
        title: "24/7 Monitoring",
        description: "Continuous monitoring and proactive issue resolution for all your automations.",
        color: "text-[#FBBC04]",
        bgColor: "bg-[#FBBC04]/10",
        hoverBorder: "group-hover:border-[#FBBC04]/30",
    },
    {
        icon: Shield,
        title: "Compliance Ready",
        description: "GDPR, data protection, and industry-specific compliance built in from day one.",
        color: "text-[#34A853]",
        bgColor: "bg-[#34A853]/10",
        hoverBorder: "group-hover:border-[#34A853]/30",
    },
];

export default function WhyN8neraSection() {
    return (
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[#f8f9fa]">
            {/* Subtle top border accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4285F4]/30 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                    <span className="inline-block text-sm font-semibold text-[#4285F4] uppercase tracking-wider mb-4">
                        Why Choose n8nera
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4 md:mb-6">
                        The Premium{" "}
                        <span className="text-gradient-blue italic-accent">Automation Partner</span> Your Business Deserves
                    </h2>
                    <p className="text-base md:text-lg text-gray-700">
                        We don&apos;t just build automations—we engineer intelligent systems that give your business an unfair advantage.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="group">
                            <div
                                className={`google-card h-full p-6 bg-white cursor-default ${feature.hoverBorder}`}
                            >
                                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-700">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="google-card inline-block px-8 py-4 bg-white">
                        <p className="text-gray-800 font-medium">
                            Ready to see what&apos;s possible?{" "}
                            <a href="/contact" className="text-[#4285F4] hover:text-[#174ea6] font-bold underline underline-offset-2">
                                Book a free automation audit
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
