import { CheckCircle2, Zap, Shield, Globe, Server, Scale, Brain, Clock } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "n8n Expertise",
        description: "Certified n8n experts with deep knowledge of workflow automation architecture.",
        color: "text-purple-400",
        bgColor: "bg-purple-500/10",
    },
    {
        icon: CheckCircle2,
        title: "Fully Custom Logic",
        description: "No cookie-cutter templates. Every automation is tailored to your exact business requirements.",
        color: "text-emerald-400",
        bgColor: "bg-emerald-500/10",
    },
    {
        icon: Globe,
        title: "Multi-Language Support",
        description: "AI voice agents and systems that work in English, Arabic, Urdu, and Hindi.",
        color: "text-blue-400",
        bgColor: "bg-blue-500/10",
    },
    {
        icon: Server,
        title: "Self-Hosted & Secure",
        description: "Deploy on your infrastructure. Your data never leaves your control.",
        color: "text-orange-400",
        bgColor: "bg-orange-500/10",
    },
    {
        icon: Scale,
        title: "Scalable Architecture",
        description: "Built to handle enterprise workloads. Scale from startup to enterprise seamlessly.",
        color: "text-cyan-400",
        bgColor: "bg-cyan-500/10",
    },
    {
        icon: Brain,
        title: "Enterprise-Ready AI",
        description: "Production-grade AI integrations with GPT, Claude, and custom models.",
        color: "text-pink-400",
        bgColor: "bg-pink-500/10",
    },
    {
        icon: Clock,
        title: "24/7 Monitoring",
        description: "Continuous monitoring and proactive issue resolution for all your automations.",
        color: "text-amber-400",
        bgColor: "bg-amber-500/10",
    },
    {
        icon: Shield,
        title: "Compliance Ready",
        description: "GDPR, data protection, and industry-specific compliance built in from day one.",
        color: "text-teal-400",
        bgColor: "bg-teal-500/10",
    },
];

export default function WhyN8neraSection() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

            {/* Gradient Accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                        Why Choose n8nera
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                        The Premium{" "}
                        <span className="text-gradient">Automation Partner</span> Your Business Deserves
                    </h2>
                    <p className="text-lg text-gray-400">
                        We don&apos;t just build automations—we engineer intelligent systems that give your business an unfair advantage.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index}>
                            <div
                                className="group h-full p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent-500/30 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="glass-card inline-block px-8 py-4">
                        <p className="text-gray-400">
                            Ready to see what&apos;s possible?{" "}
                            <a href="/contact" className="text-accent-400 hover:text-accent-300 font-medium animated-underline">
                                Book a free automation audit
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
