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
import React from "react";

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
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#f8f9fa]">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-sm font-semibold text-[#4285F4] uppercase tracking-wider mb-4">
                        Industries We Serve
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
                        Automation Solutions for{" "}
                        <span className="text-gradient-blue italic-accent">Every Industry</span>
                    </h2>
                    <p className="text-lg text-gray-700">
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
                                        className="group google-card flex flex-col items-center gap-4 p-6 bg-white cursor-pointer"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-[#4285F4]/10 flex items-center justify-center group-hover:bg-[#4285F4] transition-colors duration-300">
                                            <Icon className="w-7 h-7 text-[#4285F4] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <span className="text-sm font-semibold text-gray-800 text-center group-hover:text-[#4285F4] transition-colors">
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
                        className="inline-flex items-center gap-2 text-[#4285F4] hover:text-[#174ea6] font-semibold"
                    >
                        See all industries we serve
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
