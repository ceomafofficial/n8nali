import Link from "next/link";
import {
    Store,
    Building,
    TrendingUp,
    Building2,
    Users,
    ShoppingBag,
    Home,
    UserCheck,
    Cloud,
    Rocket,
    ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    Store,
    Building,
    TrendingUp,
    Building2,
    Users,
    ShoppingBag,
    Home,
    UserCheck,
    Cloud,
    Rocket,
};

const industries = [
    { id: "retail-shops", name: "Retail & Shops", icon: "Store" },
    { id: "local-businesses", name: "Local Businesses", icon: "Building" },
    { id: "smes", name: "SMEs", icon: "TrendingUp" },
    { id: "enterprises", name: "Enterprises", icon: "Building2" },
    { id: "agencies", name: "Agencies", icon: "Users" },
    { id: "ecommerce", name: "E-commerce", icon: "ShoppingBag" },
    { id: "real-estate", name: "Real Estate", icon: "Home" },
    { id: "consultants", name: "Consultants", icon: "UserCheck" },
    { id: "saas", name: "SaaS Companies", icon: "Cloud" },
    { id: "startups", name: "Startups", icon: "Rocket" },
];

export default function IndustriesSection() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />
            <div className="absolute inset-0 bg-premium-pattern" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                        Industries We Serve
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                        Automation Solutions for{" "}
                        <span className="text-gradient">Every Industry</span>
                    </h2>
                    <p className="text-lg text-gray-400">
                        From local businesses to global enterprises, we&apos;ve built automation systems across diverse industries worldwide.
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {industries.map((industry) => {
                        const Icon = iconMap[industry.icon] || Building;
                        return (
                            <div key={industry.id}>
                                <Link href={`/industries/${industry.id}`}>
                                    <div
                                        className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent-500/30 hover:bg-white/[0.04] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500/10 to-primary-600/10 flex items-center justify-center group-hover:from-accent-500/20 group-hover:to-primary-600/20 transition-colors">
                                            <Icon className="w-7 h-7 text-accent-400" />
                                        </div>
                                        <span className="text-sm font-medium text-white text-center group-hover:text-accent-300 transition-colors">
                                            {industry.name}
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* View All Link */}
                <div className="text-center mt-10">
                    <Link
                        href="/industries"
                        className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 font-medium animated-underline"
                    >
                        See all industries we serve
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
