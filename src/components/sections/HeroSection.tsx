import Link from "next/link";
import {
    ArrowRight,
    Zap,
    Shield,
    Globe,
    Server,
    Scale,
    Brain,
    CheckCircle2,
    Play,
} from "lucide-react";

const stats = [
    { value: "500+", label: "Automations Built" },
    { value: "95%", label: "Task Reduction" },
    { value: "24/7", label: "Always Running" },
    { value: "4x", label: "ROI Average" },
];

const valueProps = [
    { icon: CheckCircle2, text: "Fully Custom Logic" },
    { icon: Globe, text: "Multi-Language Support" },
    { icon: Server, text: "Self-Hosted & Secure" },
    { icon: Scale, text: "Scalable Architecture" },
    { icon: Brain, text: "Enterprise-Ready AI" },
    { icon: Zap, text: "n8n Experts" },
];

export default function HeroSection() {
    return (
        <section
            className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
            data-speakable="true"
            aria-label="n8nera — UAE's leading n8n automation and AI agency"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-dark-950">
                {/* Grid Pattern */}
                <div className="absolute inset-0 grid-lines opacity-30" />

                {/* Static Gradient Orbs - no pulse animation */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-600/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-deep-600/20 rounded-full blur-[128px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/10 rounded-full blur-[128px]" />

                {/* Static Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#9333ea" stopOpacity="0" />
                            <stop offset="50%" stopColor="#9333ea" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <line
                        x1="0"
                        y1="20%"
                        x2="100%"
                        y2="80%"
                        stroke="url(#grad1)"
                        strokeWidth="1"
                    />
                    <line
                        x1="100%"
                        y1="30%"
                        x2="0"
                        y2="70%"
                        stroke="url(#grad1)"
                        strokeWidth="1"
                    />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 lg:py-32">
                <div className="text-center max-w-5xl mx-auto px-2 md:px-0">
                    {/* Badge */}
                    <div
                        className="hero-fade-in inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-4 md:mb-8"
                    >
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent-400 animate-pulse" />
                        <span className="text-xs md:text-sm font-medium text-accent-300">
                            #1 Global n8n Automation Agency
                        </span>
                    </div>

                    {/* Main Headline — primary AEO target */}
                    <h1
                        className="hero-fade-in [animation-delay:100ms] text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-[1.1] mb-4 md:mb-6"
                        data-speakable="true"
                    >
                        Automate Your Business.
                        <br className="hidden sm:block" />
                        <span className="text-gradient"> Scale Without Limits.</span>
                    </h1>

                    {/* Subheadline — semantic description for AI comprehension */}
                    <p
                        className="hero-fade-in [animation-delay:200ms] text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-6 md:mb-8 px-4 md:px-0"
                        data-speakable="true"
                    >
                        We build enterprise-grade{" "}
                        <span className="text-white font-medium">n8n workflow automations</span>,{" "}
                        <span className="text-white font-medium">AI voice agents</span>, and{" "}
                        <span className="text-white font-medium">intelligent systems</span> that
                        eliminate manual work, reduce costs, and let you focus on growth.
                    </p>

                    {/* Value Props Pills */}
                    <div
                        className="hero-fade-in [animation-delay:300ms] hidden sm:flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-10"
                    >
                        {valueProps.slice(0, 4).map((prop, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-gray-300"
                            >
                                <prop.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent-400" />
                                {prop.text}
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div
                        className="hero-fade-in [animation-delay:400ms] flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-16 w-full px-4 md:px-0"
                    >
                        <Link href="/contact" className="btn-primary text-sm md:text-base px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                            Book Free Audit
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </Link>
                        <Link href="/services" className="btn-secondary text-sm md:text-base px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                            <Play className="w-4 h-4 md:w-5 md:h-5" />
                            See How It Works
                        </Link>
                    </div>

                    {/* Stats Bar */}
                    <div
                        className="hero-fade-in [animation-delay:500ms] glass-card p-6 md:p-8"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-display font-bold text-gradient-purple mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div
                        className="hero-fade-in [animation-delay:700ms] mt-12 flex flex-col items-center gap-4"
                    >
                        <p className="text-sm text-gray-500">Trusted by businesses across USA, UAE, Canada &amp; Netherlands</p>
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm text-gray-400">
                                Enterprise-Grade Security | Self-Hosted Options | GDPR Compliant
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="hero-fade-in [animation-delay:1000ms] absolute bottom-8 left-1/2 -translate-x-1/2"
                aria-hidden="true"
                role="presentation"
            >
                <div
                    className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2 animate-bounce-slow"
                >
                    <div className="w-1 h-2 rounded-full bg-accent-400" />
                </div>
            </div>
        </section>
    );
}
