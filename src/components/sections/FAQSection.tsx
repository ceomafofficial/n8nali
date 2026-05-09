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
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[#f8f9fa]">
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block text-sm font-semibold text-[#4285F4] uppercase tracking-wider mb-4">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
                        Frequently Asked{" "}
                        <span className="text-gradient-blue italic-accent">Questions</span>
                    </h2>
                    <p className="text-lg text-gray-700">
                        Everything you need to know about n8nera&apos;s automation services.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="mb-8 md:mb-10">
                    <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar justify-start md:justify-center md:flex-wrap">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${activeCategory === category.id
                                        ? "bg-[#4285F4] text-white shadow-sm"
                                        : "bg-white text-gray-700 border border-gray-200 hover:border-[#4285F4] hover:text-[#4285F4]"
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
                                className="google-card overflow-hidden bg-white"
                            >
                                    <button
                                        onClick={() => toggleItem(faq.id)}
                                        className="w-full flex items-center justify-between gap-4 p-6 text-left"
                                        aria-expanded={openItems.includes(faq.id)}
                                    >
                                        <span className="text-base md:text-lg font-semibold text-gray-900 pr-8">
                                            {faq.question}
                                        </span>
                                        <div
                                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openItems.includes(faq.id)
                                                    ? "bg-[#4285F4] text-white"
                                                    : "bg-gray-100 text-gray-700"
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
                                                <div className="h-px bg-gray-100 mb-4" />
                                                <p className="text-gray-700 leading-relaxed">
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
                    <div className="google-card inline-block px-8 py-4 bg-white">
                        <p className="text-gray-800 font-medium">
                            Still have questions?{" "}
                            <a href="/contact" className="text-[#4285F4] hover:text-[#174ea6] font-semibold underline underline-offset-2">
                                Talk to an automation expert
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
