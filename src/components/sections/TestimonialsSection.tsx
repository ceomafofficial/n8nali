"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const testimonial = testimonials[current];
    if (!testimonial) return null;

    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-white">
            {/* Subtle blue glow top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#4285F4]/5 rounded-full blur-[80px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-sm font-semibold text-[#4285F4] uppercase tracking-wider mb-4">
                        Client Success Stories
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
                        Trusted by{" "}
                        <span className="text-gradient-blue italic-accent">Leading Businesses</span> Worldwide
                    </h2>
                    <p className="text-lg text-gray-700">
                        See how businesses across industries are transforming their operations with n8nera automation.
                    </p>
                </div>

                {/* Testimonial Carousel */}
                <div>
                    <div className="relative max-w-4xl mx-auto">
                        {/* Main Card */}
                        <div className="google-card p-6 md:p-10 lg:p-12 bg-white relative">
                            {/* Quote Icon */}
                            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-[#4285F4] to-[#34A853] flex items-center justify-center shadow-md">
                                <Quote className="w-5 h-5 text-white" />
                            </div>

                            <div>
                                <div
                                    key={current}
                                    className="animate-fade-in"
                                >
                                    {/* Stars */}
                                    <div className="flex items-center gap-1 mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-900 font-semibold leading-relaxed mb-8">
                                        &ldquo;{testimonial.content}&rdquo;
                                    </blockquote>

                                    {/* Author */}
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4285F4]/20 to-[#34A853]/20 flex items-center justify-center text-xl font-bold text-[#4285F4] border border-[#4285F4]/20">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">{testimonial.name}</div>
                                                <div className="text-sm text-gray-700">
                                                    {testimonial.role}, {testimonial.company}
                                                </div>
                                                <div className="text-xs text-gray-600 font-medium">{testimonial.location}</div>
                                            </div>
                                        </div>

                                        {/* Results */}
                                        {testimonial.results && (
                                            <div className="flex flex-wrap gap-4">
                                                {testimonial.results.map((result, i) => (
                                                    <div key={i} className="text-center px-4 py-2 rounded-lg bg-[#4285F4]/5 border border-[#4285F4]/10">
                                                        <div className="text-lg font-bold text-[#4285F4]">{result.value}</div>
                                                        <div className="text-xs text-gray-700 font-medium">{result.metric}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                onClick={prev}
                                className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-[#4285F4] hover:text-white hover:border-[#4285F4] transition-all"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Dots */}
                            <div className="flex items-center gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrent(index)}
                                        className={`h-2 rounded-full transition-all ${index === current
                                                ? "w-6 bg-[#4285F4]"
                                                : "w-2 bg-gray-300 hover:bg-gray-400"
                                            }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={next}
                                className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-[#4285F4] hover:text-white hover:border-[#4285F4] transition-all"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
