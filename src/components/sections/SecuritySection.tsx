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
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-dark-950" />
            <div className="absolute inset-0 bg-premium-pattern opacity-50" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                            Security & Compliance
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                            Enterprise-Grade{" "}
                            <span className="text-gradient">Security</span> by Default
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Your data security is non-negotiable. Unlike cloud-only automation tools,
                            n8nera offers complete control over your data with self-hosted options,
                            enterprise-grade encryption, and compliance-ready architecture.
                        </p>

                        {/* Security Badges */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                <Shield className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm text-emerald-400">GDPR Compliant</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                                <Lock className="w-4 h-4 text-blue-400" />
                                <span className="text-sm text-blue-400">SOC 2 Ready</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                                <Server className="w-4 h-4 text-purple-400" />
                                <span className="text-sm text-purple-400">Self-Hosted Available</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Features Grid */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {securityFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                                        <feature.icon className="w-5 h-5 text-emerald-400" />
                                    </div>
                                    <h3 className="text-base font-semibold text-white mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-400">
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
