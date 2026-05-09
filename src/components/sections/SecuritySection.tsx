import { Shield, Server, Lock, Eye, FileCheck, Database } from "lucide-react";

const securityFeatures = [
    {
        icon: Server,
        title: "Self-Hosted Infrastructure",
        description: "Deploy on your own servers or private cloud. Your automation infrastructure remains entirely under your control.",
    },
    {
        icon: Lock,
        title: "End-to-End Encryption",
        description: "All data in transit is encrypted with TLS 1.3. Sensitive data at rest is encrypted using AES-256.",
    },
    {
        icon: Eye,
        title: "Complete Data Visibility",
        description: "Full audit logs of all automation activities. Know exactly what data is being processed and when.",
    },
    {
        icon: FileCheck,
        title: "Compliance Ready",
        description: "Built with GDPR, CCPA, PIPEDA, and local data protection regulations in mind. Compliance documentation included.",
    },
    {
        icon: Shield,
        title: "Access Controls",
        description: "Role-based access control for your automation workflows. Define who can view, edit, or execute each automation.",
    },
    {
        icon: Database,
        title: "Data Residency",
        description: "Keep your data in any region you choose—US, EU, UAE, or Canada. We support local data residency requirements.",
    },
];

export default function SecuritySection() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#f8f9fa]">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="inline-block text-sm font-semibold text-[#4285F4] uppercase tracking-wider mb-4">
                            Security & Compliance
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
                            Enterprise-Grade{" "}
                            <span className="text-gradient-blue italic-accent">Security</span> by Default
                        </h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Your data security is non-negotiable. Unlike cloud-only automation tools,
                            n8nera offers complete control over your data with self-hosted options,
                            enterprise-grade encryption, and compliance-ready architecture.
                        </p>

                        {/* Security Badges */}
                        <div className="flex flex-wrap gap-2 md:gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#34A853]/10 border border-[#34A853]/20">
                                <Shield className="w-4 h-4 text-[#34A853]" />
                                <span className="text-sm font-semibold text-[#1e7e34]">GDPR Compliant</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#4285F4]/10 border border-[#4285F4]/20">
                                <Lock className="w-4 h-4 text-[#4285F4]" />
                                <span className="text-sm font-semibold text-[#174ea6]">SOC 2 Ready</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FBBC04]/10 border border-[#FBBC04]/30">
                                <Server className="w-4 h-4 text-[#e37400]" />
                                <span className="text-sm font-semibold text-[#a05000]">Self-Hosted Available</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Features Grid */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {securityFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="google-card p-5 hover:border-[#34A853]/30 transition-colors bg-white"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#34A853]/10 flex items-center justify-center mb-4">
                                        <feature.icon className="w-5 h-5 text-[#34A853]" />
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-700">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
