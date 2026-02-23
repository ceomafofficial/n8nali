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
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-dark-950">
                <div className="absolute inset-0 bg-gradient-radial from-accent-950/20 via-transparent to-transparent" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4">
                        Client Success Stories
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                        Trusted by{" "}
                        <span className="text-gradient">Leading Businesses</span> Worldwide
                    </h2>
                    <p className="text-lg text-gray-400">
                        See how businesses across industries are transforming their operations with n8nera automation.
                    </p>
                </div>

                {/* Testimonial Carousel */}
                <div>
                    <div className="relative max-w-4xl mx-auto">
                        {/* Main Card */}
                        <div className="glass-card p-8 md:p-12">
                            {/* Quote Icon */}
                            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-accent-500 to-primary-600 flex items-center justify-center shadow-glow-sm">
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
                                            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                                        &ldquo;{testimonial.content}&rdquo;
                                    </blockquote>

                                    {/* Author */}
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-500/30 to-primary-600/30 flex items-center justify-center text-xl font-bold text-white">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-white">{testimonial.name}</div>
                                                <div className="text-sm text-gray-400">
                                                    {testimonial.role}, {testimonial.company}
                                                </div>
                                                <div className="text-xs text-gray-500">{testimonial.location}</div>
                                            </div>
                                        </div>

                                        {/* Results */}
                                        {testimonial.results && (
                                            <div className="flex flex-wrap gap-4">
                                                {testimonial.results.map((result, i) => (
                                                    <div key={i} className="text-center px-4 py-2 rounded-lg bg-white/5">
                                                        <div className="text-lg font-bold text-accent-400">{result.value}</div>
                                                        <div className="text-xs text-gray-400">{result.metric}</div>
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
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-accent-500/50 transition-all"
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
                                        className={`w-2 h-2 rounded-full transition-all ${index === current
                                                ? "w-6 bg-accent-500"
                                                : "bg-white/20 hover:bg-white/40"
                                            }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={next}
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-accent-500/50 transition-all"
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
