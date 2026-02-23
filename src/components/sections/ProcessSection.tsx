import { Search, Lightbulb, Code, Rocket, ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: Search,
        title: "Discovery & Audit",
        description: "We analyze your current processes, identify automation opportunities, and map out the highest-impact areas for optimization.",
        details: [
            "Process mapping & analysis",
            "Pain point identification",
            "ROI opportunity assessment",
            "Technical feasibility review",
        ],
        color: "from-purple-500 to-indigo-600",
    },
    {
        number: "02",
        icon: Lightbulb,
        title: "Strategy & Design",
        description: "Our experts design a custom automation architecture tailored to your unique business requirements and integration needs.",
        details: [
            "Custom solution architecture",
            "Integration planning",
            "Workflow design",
            "Timeline & milestone planning",
        ],
        color: "from-blue-500 to-cyan-600",
    },
    {
        number: "03",
        icon: Code,
        title: "Build & Test",
        description: "We develop your automation solutions with enterprise-grade standards, including thorough testing and quality assurance.",
        details: [
            "n8n workflow development",
            "API integrations",
            "AI/ML implementations",
            "Rigorous testing protocols",
        ],
        color: "from-emerald-500 to-teal-600",
    },
    {
        number: "04",
        icon: Rocket,
        title: "Deploy & Optimize",
        description: "Your automations go live with our full support. We monitor performance and continuously optimize for maximum efficiency.",
        details: [
            "Production deployment",
            "Team training",
            "Performance monitoring",
            "Continuous optimization",
        ],
        color: "from-orange-500 to-amber-600",
    },
];

export default function ProcessSection() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-dark-950">
                <div className="absolute inset-0 grid-lines opacity-20" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                        Our Process
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                        How We <span className="text-gradient">Transform</span> Your Operations
                    </h2>
                    <p className="text-lg text-gray-400">
                        A proven methodology that takes you from manual chaos to automated efficiency in weeks, not months.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative">
                    {/* Connecting Line - Desktop */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/20 via-emerald-500/20 to-orange-500/20" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                        {steps.map((step, index) => (
                            <div key={index}>
                                <div
                                    className="relative group hover:-translate-y-1 transition-transform duration-300"
                                >
                                    {/* Number Badge */}
                                    <div className="absolute -top-3 -left-3 w-12 h-12 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center z-10 group-hover:border-accent-500/50 transition-colors">
                                        <span className="text-sm font-bold text-gradient-purple">{step.number}</span>
                                    </div>

                                    {/* Card */}
                                    <div className="glass-card h-full p-6 pt-10">
                                        {/* Icon */}
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-glow-sm`}>
                                            <step.icon className="w-7 h-7 text-white" />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-gray-400 mb-5">
                                            {step.description}
                                        </p>

                                        {/* Details */}
                                        <ul className="space-y-2">
                                            {step.details.map((detail, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 flex-shrink-0" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Arrow - Desktop */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:flex absolute top-20 -right-6 w-12 h-12 items-center justify-center text-gray-600 z-10">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="mt-16">
                    <div className="glass-card p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-display font-bold text-white mb-2">1-2 Weeks</div>
                            <p className="text-sm text-gray-400">Average time to first automation</p>
                        </div>
                        <div>
                            <div className="text-3xl font-display font-bold text-white mb-2">95%</div>
                            <p className="text-sm text-gray-400">Client satisfaction rate</p>
                        </div>
                        <div>
                            <div className="text-3xl font-display font-bold text-white mb-2">Ongoing</div>
                            <p className="text-sm text-gray-400">Support & optimization included</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
