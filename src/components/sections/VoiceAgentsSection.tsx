import Link from "next/link";
import { Mic, ArrowRight, Phone, Check } from "lucide-react";

const voiceAgents = [
    {
        id: "ai-call-center-agent",
        title: "AI Call Center Agent",
        description: "Handle customer calls 24/7 with human-like conversation",
        capabilities: ["Inbound support", "FAQ handling", "Issue resolution", "Smart escalation"],
    },
    {
        id: "appointment-booking-voice-bot",
        title: "Appointment Booking Bot",
        description: "Automate scheduling across all your locations",
        capabilities: ["Real-time availability", "Multi-location support", "SMS confirmations", "Rescheduling"],
    },
    {
        id: "sales-voice-ai-agent",
        title: "Sales Voice AI Agent",
        description: "Qualify leads and book meetings automatically",
        capabilities: ["Lead qualification", "Objection handling", "Meeting scheduling", "CRM integration"],
    },
    {
        id: "hotel-restaurant-voice-agent",
        title: "Hospitality Voice Agent",
        description: "Reservations and guest services in multiple languages",
        capabilities: ["Room bookings", "Table reservations", "Room service", "Concierge info"],
    },
];

const features = [
    "Multi-language: English, Arabic, Urdu, Hindi",
    "Natural conversation with context understanding",
    "CRM & system integration",
    "24/7 availability",
    "Seamless human handoff",
    "Call recording & analytics",
];

export default function VoiceAgentsSection() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-white">
            {/* Subtle background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4285F4]/5 rounded-full blur-[120px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="inline-block text-sm font-semibold text-[#4285F4] uppercase tracking-wider mb-4">
                            AI Voice Agents
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
                            Your Business,{" "}
                            <span className="text-gradient-blue italic-accent">Always Available</span>
                        </h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Deploy enterprise-grade AI voice agents that handle customer calls with human-like conversation.
                            No hold times, no missed opportunities - just seamless, intelligent engagement around the clock.
                        </p>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-[#34A853] flex-shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium text-gray-800">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                            <Link href="/services/ai-call-center-agent" className="btn-primary">
                                Get a Custom AI Agent
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/contact" className="btn-secondary">
                                <Phone className="w-5 h-5" />
                                Talk to an Expert
                            </Link>
                        </div>
                    </div>

                    {/* Right - Voice Agent Cards */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {voiceAgents.map((agent) => (
                                <div
                                    key={agent.id}
                                    className="group hover:-translate-y-1 transition-transform duration-300"
                                >
                                    <Link href={`/services/${agent.id}`}>
                                        <div className="google-card h-full p-5 cursor-pointer bg-white">
                                            {/* Icon */}
                                            <div className="w-12 h-12 rounded-xl bg-[#4285F4]/10 flex items-center justify-center mb-4 group-hover:bg-[#4285F4] transition-colors">
                                                <Mic className="w-6 h-6 text-[#4285F4] group-hover:text-white transition-colors" />
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#4285F4] transition-colors">
                                                {agent.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-xs text-gray-700 mb-4">
                                                {agent.description}
                                            </p>

                                            {/* Capabilities */}
                                            <div className="flex flex-wrap gap-1">
                                                {agent.capabilities.slice(0, 2).map((cap, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-[10px] px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium"
                                                    >
                                                        {cap}
                                                    </span>
                                                ))}
                                                {agent.capabilities.length > 2 && (
                                                    <span className="text-[10px] px-2 py-1 rounded-full bg-[#4285F4]/10 text-[#4285F4] font-semibold">
                                                        +{agent.capabilities.length - 2} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* View All */}
                        <div className="text-center mt-6">
                            <Link
                                href="/services#voice-agents"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4285F4] hover:text-[#174ea6]"
                            >
                                View all voice agents
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
