"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/data/faq";

const categories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "General" },
    { id: "services", label: "Services" },
    { id: "pricing", label: "Pricing" },
    { id: "technical", label: "Technical" },
    { id: "security", label: "Security" },
];

export default function FAQSection() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [openItems, setOpenItems] = useState<string[]>([]);

    const filteredFAQs = activeCategory === "all"
        ? faqs
        : faqs.filter((faq) => faq.category === activeCategory);

    const toggleItem = (id: string) => {
        setOpenItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                        Frequently Asked{" "}
                        <span className="text-gradient">Questions</span>
                    </h2>
                    <p className="text-lg text-gray-400">
                        Everything you need to know about n8nera&apos;s automation services.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="mb-10">
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category.id
                                        ? "bg-accent-500 text-white"
                                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* FAQ Items */}
                <div>
                    <div className="space-y-4">
                        {filteredFAQs.map((faq) => (
                            <div
                                key={faq.id}
                                className="glass-card overflow-hidden"
                            >
                                    <button
                                        onClick={() => toggleItem(faq.id)}
                                        className="w-full flex items-center justify-between gap-4 p-6 text-left"
                                        aria-expanded={openItems.includes(faq.id)}
                                    >
                                        <span className="text-base md:text-lg font-medium text-white pr-8">
                                            {faq.question}
                                        </span>
                                        <div
                                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openItems.includes(faq.id)
                                                    ? "bg-accent-500 text-white"
                                                    : "bg-white/10 text-gray-400"
                                                }`}
                                        >
                                            {openItems.includes(faq.id) ? (
                                                <Minus className="w-4 h-4" />
                                            ) : (
                                                <Plus className="w-4 h-4" />
                                            )}
                                        </div>
                                    </button>

                                    <div
                                        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                                        style={{ gridTemplateRows: openItems.includes(faq.id) ? "1fr" : "0fr" }}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-6 pb-6 pt-0">
                                                <div className="h-px bg-white/5 mb-4" />
                                                <p className="text-gray-400 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Still Have Questions */}
                <div className="mt-12 text-center">
                    <div className="glass-card inline-block px-8 py-4">
                        <p className="text-gray-400">
                            Still have questions?{" "}
                            <a href="/contact" className="text-accent-400 hover:text-accent-300 font-medium animated-underline">
                                Talk to an automation expert
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
