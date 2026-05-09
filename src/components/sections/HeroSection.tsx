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
    TrendingUp,
    MousePointerClick,
    CircleDollarSign
} from "lucide-react";

const valueProps = [
    { icon: CheckCircle2, text: "Fully Custom Logic" },
    { icon: Globe, text: "Multi-Language Support" },
    { icon: Server, text: "Self-Hosted & Secure" },
    { icon: Scale, text: "Scalable Architecture" },
];

export default function HeroSection() {
    return (
        <section
            className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 bg-[#ffffff]"
            aria-label="n8nera — #1 n8n automation agency"
        >
            {/* Light Mode Background Effects */}
            <div className="absolute inset-0">
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 grid-lines opacity-10" />

                {/* Light Orbs */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#4285F4]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#34A853]/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FBBC04]/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
                    {/* Badge */}
                    <div
                        className="hero-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4285F4]/10 border border-[#4285F4]/20 mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#4285F4] animate-pulse" />
                        <span className="text-sm font-semibold text-[#174ea6]">
                            Google Premier Automation Partner
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1
                    className="hero-fade-in [animation-delay:100ms] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-gray-900 leading-[1.1] mb-6"
                    >
                        Automate Your Business.
                        <br className="hidden sm:block" />
                        <span className="text-gradient-blue italic-accent"> Scale Without Limits.</span>
                    </h1>

                    {/* Subheadline */}
                    <p
                        className="hero-fade-in [animation-delay:200ms] text-base md:text-lg lg:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0"
                    >
                        We build enterprise-grade{" "}
                        <span className="text-gray-900 font-semibold">n8n workflow automations</span> and{" "}
                        <span className="text-gray-900 font-semibold">AI voice agents</span> that
                        eliminate manual work, reduce costs, and accelerate your growth engine.
                    </p>

                    {/* Value Props Pills */}
                    <div
                        className="hero-fade-in [animation-delay:300ms] flex flex-wrap justify-center lg:justify-start gap-2 mb-8 md:mb-10"
                    >
                        {valueProps.map((prop, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white border border-gray-200 shadow-sm text-xs md:text-sm font-medium text-gray-700"
                            >
                                <prop.icon className="w-4 h-4 text-[#34A853]" />
                                {prop.text}
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div
                        className="hero-fade-in [animation-delay:400ms] flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                    >
                        <Link href="/contact" className="btn-primary w-full sm:w-auto">
                            Book Free Audit
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/services" className="btn-secondary w-full sm:w-auto">
                            <Play className="w-5 h-5" />
                            See How It Works
                        </Link>
                    </div>
                </div>

                {/* Right Content - Fake Google Ads Dashboard */}
                <div className="flex-1 w-full max-w-lg mx-auto lg:max-w-none relative hero-fade-in [animation-delay:500ms]">
                    
                    {/* Dashboard Container */}
                    <div className="google-card p-4 md:p-6 lg:p-8 relative bg-white z-10">
                        
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-[#4285F4]" />
                                    Automation Performance
                                </h3>
                                <p className="text-sm text-gray-700">Last 30 Days vs Previous Period</p>
                            </div>
                            <div className="px-3 py-1 rounded bg-[#34A853]/10 text-[#34A853] text-sm font-bold flex items-center gap-1">
                                <TrendingUp className="w-4 h-4" /> +342%
                            </div>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 gap-3 md:gap-6 mb-6 md:mb-8">
                            {/* Metric 1 */}
                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                                <div className="flex items-center gap-2 text-gray-700 text-sm font-medium mb-2">
                                    <CircleDollarSign className="w-4 h-4 text-[#EA4335]" />
                                    Cost Per Lead
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">$2.40</div>
                                <div className="text-sm font-bold text-[#34A853] flex items-center gap-1">
                                    <TrendingUp className="w-3 h-3 rotate-180" /> -68.4%
                                </div>
                            </div>

                            {/* Metric 2 */}
                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                                <div className="flex items-center gap-2 text-gray-700 text-sm font-medium mb-2">
                                    <MousePointerClick className="w-4 h-4 text-[#FBBC04]" />
                                    Conversion Rate
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">14.8%</div>
                                <div className="text-sm font-bold text-[#34A853] flex items-center gap-1">
                                    <TrendingUp className="w-3 h-3" /> +4.2%
                                </div>
                            </div>
                            
                            {/* Metric 3 - Full Width */}
                            <div className="col-span-2 p-4 rounded-xl bg-gradient-to-r from-[#4285F4]/10 to-[#34A853]/10 border border-[#4285F4]/20">
                                <div className="flex items-center gap-2 text-gray-700 text-sm font-medium mb-2">
                                    <Zap className="w-4 h-4 text-[#4285F4]" />
                                    Manual Hours Saved
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-[#174ea6] mb-1">320+ hrs/mo</div>
                                <div className="text-sm font-semibold text-gray-600">
                                    Equivalent to 2 full-time hires
                                </div>
                            </div>
                        </div>
                        
                        {/* Trust Indicator inside Dashboard */}
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                            <Shield className="w-4 h-4 text-[#34A853]" />
                            Verified by real client data
                        </div>
                    </div>
                    
                    {/* Decorative Background Element for Dashboard */}
                    <div className="absolute -inset-4 bg-gradient-to-tr from-[#4285F4]/20 to-[#34A853]/20 rounded-2xl blur-lg -z-10 opacity-70" />
                </div>
            </div>
        </section>
    );
}
