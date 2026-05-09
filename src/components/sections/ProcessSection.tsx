import { Search, Lightbulb, Code, Rocket } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
    {
        number: "01",
        icon: Search,
        title: "Discovery & Audit",
        description: "We analyze your current processes, identify automation opportunities, and map out the highest-impact areas for optimization.",
        details: [
            "Process mapping",
            "Pain point identification",
            "ROI assessment",
            "Technical feasibility",
        ],
    },
    {
        number: "02",
        icon: Lightbulb,
        title: "Strategy & Design",
        description: "Our experts design a custom automation architecture tailored to your unique business requirements and integration needs.",
        details: [
            "Custom architecture",
            "Integration planning",
            "Workflow design",
            "Timeline planning",
        ],
    },
    {
        number: "03",
        icon: Code,
        title: "Build & Test",
        description: "We develop your automation solutions with enterprise-grade standards, including thorough testing and quality assurance.",
        details: [
            "n8n development",
            "API integrations",
            "AI/ML modeling",
            "Rigorous testing",
        ],
    },
    {
        number: "04",
        icon: Rocket,
        title: "Deploy & Optimize",
        description: "Your automations go live with our full support. We monitor performance and continuously optimize for maximum efficiency.",
        details: [
            "Production deployment",
            "Team training",
            "Performance tracking",
            "Continuous iteration",
        ],
    },
];

export default function ProcessSection() {
    return (
        <section className="relative py-16 md:py-32 bg-white border-t border-gray-100">
            {/* Light Pattern Background */}
            <div className="absolute inset-0 bg-[#f8f9fa] opacity-30" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
                    
                    {/* Sticky Left Column - The Narrative */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 mb-16 lg:mb-0">
                        <AnimatedSection>
                            <span className="inline-block text-xs font-semibold text-[#4285F4] uppercase tracking-[0.2em] mb-6">
                                Our Methodology
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold text-gray-900 mb-6 leading-[1.1]">
                                How We <br/><span className="text-[#4285F4] italic font-light">Transform</span><br/> Operations
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-10 max-w-md leading-relaxed">
                                A proven, human-centric methodology that takes you from manual chaos to bespoke automated efficiency in weeks, not months.
                            </p>
                            
                            {/* Premium Stat Anchor */}
                            <div className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                                <div className="w-14 h-14 rounded-full bg-[#4285F4]/10 border border-[#4285F4]/20 flex items-center justify-center shrink-0">
                                    <span className="text-[#4285F4] font-display font-bold text-lg">1-2</span>
                                </div>
                                <div>
                                    <div className="text-gray-900 font-medium text-lg">Weeks to launch</div>
                                    <div className="text-sm text-gray-700">Average time to first automation</div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Scrolling Right Column - The Steps */}
                    <div className="lg:col-span-7 space-y-6">
                        {steps.map((step, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="group relative p-5 md:p-8 lg:p-10 google-card overflow-hidden">
                                    {/* Soft Hover Illumination */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#4285F4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="relative z-10">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                                            <div>
                                                <div className="flex items-center gap-4 mb-4">
                                                    <span className="text-sm font-bold text-[#4285F4] tracking-widest">
                                                        STEP {step.number}
                                                    </span>
                                                    <div className="h-px w-12 bg-[#4285F4]/30" />
                                                </div>
                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-gray-900 group-hover:text-[#4285F4] transition-colors duration-300">
                                                    {step.title}
                                                </h3>
                                            </div>
                                            
                                            {/* Icon morphs on hover */}
                                            <div className="hidden md:flex w-14 h-14 rounded-full bg-gray-50 border border-gray-200 items-center justify-center shrink-0 group-hover:bg-[#4285F4] group-hover:border-[#4285F4] group-hover:scale-110 transition-all duration-500">
                                                <step.icon className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors duration-500" />
                                            </div>
                                        </div>
                                        
                                        <p className="text-gray-700 text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-2xl">
                                            {step.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-3">
                                            {step.details.map((detail, i) => (
                                                <span key={i} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-50 text-gray-700 border border-gray-200 group-hover:bg-[#34A853]/10 group-hover:text-[#34A853] group-hover:border-[#34A853]/20 transition-colors duration-300">
                                                    {detail}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
