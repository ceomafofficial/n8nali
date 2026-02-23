"use client";

import { useState, useEffect, useCallback, FormEvent } from "react";
import Link from "next/link";
import { Send, CheckCircle2, AlertCircle, Mail, MessageCircle, Loader2, Clock } from "lucide-react";

/** Cooldown duration in milliseconds (5 minutes) */
const COOLDOWN_MS = 5 * 60 * 1000;

function getCooldownRemaining(): number {
    const lastSubmit = localStorage.getItem("n8nera_last_submit");
    if (!lastSubmit) return 0;
    const elapsed = Date.now() - Number(lastSubmit);
    return Math.max(0, COOLDOWN_MS - elapsed);
}

function formatCooldown(ms: number): string {
    const minutes = Math.floor(ms / 60_000);
    const seconds = Math.ceil((ms % 60_000) / 1000);
    return minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
}

export default function ContactForm() {
    const [showBusinessTypeOther, setShowBusinessTypeOther] = useState(false);
    const [showPrimaryGoalOther, setShowPrimaryGoalOther] = useState(false);
    const [showBudgetRangeOther, setShowBudgetRangeOther] = useState(false);
    const [showPreferredLanguageOther, setShowPreferredLanguageOther] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [submittedName, setSubmittedName] = useState("");
    const [cooldownLeft, setCooldownLeft] = useState(0);

    // Cooldown timer — allows re-submission after 5 minutes
    useEffect(() => {
        const remaining = getCooldownRemaining();
        if (remaining <= 0) return;

        setCooldownLeft(remaining);
        const interval = setInterval(() => {
            const r = getCooldownRemaining();
            setCooldownLeft(r);
            if (r <= 0) clearInterval(interval);
        }, 1000);

        return () => clearInterval(interval);
    }, [isSubmitted]);

    const handleSelectChange = (
        e: React.ChangeEvent<HTMLSelectElement>,
        setShowOther: (show: boolean) => void
    ) => {
        setShowOther(e.target.value === "Other");
    };

    const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Check cooldown before submitting
        const remaining = getCooldownRemaining();
        if (remaining > 0) {
            setCooldownLeft(remaining);
            return;
        }

        setIsSubmitting(true);
        setIsError(false);
        setErrorMessage("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Store name for thank you message
        const name = formData.get("name") as string;
        setSubmittedName(name);

        // Honeypot check — hidden "website" field should be empty
        const honeypot = formData.get("website");
        if (honeypot) {
            // Pretend success so bots think it worked
            setIsSubmitted(true);
            setIsSubmitting(false);
            return;
        }

        // Remove honeypot field before sending
        formData.delete("website");

        const GOOGLE_SCRIPT_URL =
            process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ??
            "https://script.google.com/macros/s/AKfycby9CjrQglYO9TUqt4ejbygmKNcMNxAtbG4eM7RQixCv5cKb0TJF8MyxiYKBphtbgCtX/exec";

        const submitWithRetry = async (retries = 2, delay = 1500): Promise<void> => {
            try {
                await fetch(GOOGLE_SCRIPT_URL, {
                    method: "POST",
                    body: formData,
                    mode: "no-cors",
                });

                // Google Apps Script with no-cors returns opaque response;
                // if fetch didn't throw, the request was sent successfully.
                localStorage.setItem("n8nera_last_submit", String(Date.now()));
                setIsSubmitted(true);
            } catch (error) {
                if (retries > 0) {
                    console.warn(`Submission failed, retrying in ${delay}ms... (${retries} attempts left)`);
                    await new Promise(resolve => setTimeout(resolve, delay));
                    return submitWithRetry(retries - 1, delay * 2);
                } else {
                    console.error("All retry attempts failed:", error);
                    setErrorMessage(
                        error instanceof Error ? error.message : "An unexpected error occurred."
                    );
                    setIsError(true);
                    setIsSubmitted(true);
                }
            }
        };

        await submitWithRetry();
        setIsSubmitting(false);
    }, []);

    // Thank You Page
    if (isSubmitted) {
        return (
            <div className="min-h-[600px] flex items-center justify-center">
                <div className="text-center max-w-2xl mx-auto px-6">
                    {/* Success Icon */}
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${isError ? 'from-red-500/20 to-red-600/20' : 'from-accent-500/20 to-accent-600/20'} mb-6 animate-scale-in`}>
                        {isError ? <AlertCircle className="w-12 h-12 text-red-500" /> : <CheckCircle2 className="w-12 h-12 text-accent-500" />}
                    </div>

                    {/* Thank You Message */}
                    <h2 className="heading-2 mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                        {isError ? "Something went wrong!" : `Thank You${submittedName && `, ${submittedName}`}!`}
                    </h2>

                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        {isError
                            ? (errorMessage || "We encountered an issue submitting your form. Please don\u2019t worry \u2013 you can contact us directly via WhatsApp or Email below.")
                            : "Your request has been successfully submitted. Our team will review your information and get back to you within 24 hours."}
                    </p>

                    {/* Contact Information Cards */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {/* WhatsApp Card */}
                        <a
                            href="https://wa.me/923141603089" // Replace with your WhatsApp number
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-premium group hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex items-center gap-4 p-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                                    <MessageCircle className="w-6 h-6 text-green-500" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
                                    <p className="text-white font-semibold">+92 314 160 3089</p>
                                </div>
                            </div>
                        </a>

                        {/* Email Card */}
                        <a
                            href="mailto:n8nera@gmail.com" // Replace with your email
                            className="card-premium group hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex items-center gap-4 p-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-500/10 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                                    <Mail className="w-6 h-6 text-accent-500" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm text-gray-400 mb-1">Email</p>
                                    <p className="text-white font-semibold">n8nera@gmail.com</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Next Steps */}
                    <div className="card-premium p-6 text-left">
                        <h3 className="text-xl font-semibold text-white mb-4">What Happens Next?</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-500 text-sm font-semibold mt-0.5">1</span>
                                <span>We&apos;ll review your requirements and assess how we can help</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-500 text-sm font-semibold mt-0.5">2</span>
                                <span>Our team will reach out to schedule a discovery call</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-500 text-sm font-semibold mt-0.5">3</span>
                                <span>We&apos;ll present a customized automation strategy for your business</span>
                            </li>
                        </ul>
                    </div>

                    {/* Back to Home Button */}
                    <div className="mt-8">
                        <Link
                            href="/"
                            className="btn-secondary inline-flex items-center"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Form Page
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span className="text-accent-500">*</span>
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    disabled={isSubmitting}
                    className="input-premium w-full"
                    placeholder="Your name"
                />
            </div>

            {/* Company */}
            <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company <span className="text-accent-500">*</span>
                </label>
                <input
                    type="text"
                    name="company"
                    id="company"
                    required
                    disabled={isSubmitting}
                    className="input-premium w-full"
                    placeholder="Company name"
                />
            </div>

            {/* Website URL */}
            <div>
                <label htmlFor="website_url" className="block text-sm font-medium text-gray-300 mb-2">
                    Website URL <span className="text-accent-500">*</span>
                </label>
                <input
                    type="url"
                    name="website_url"
                    id="website_url"
                    required
                    disabled={isSubmitting}
                    className="input-premium w-full"
                    placeholder="https://example.com"
                />
            </div>

            {/* Business Type */}
            <div>
                <label htmlFor="business_type" className="block text-sm font-medium text-gray-300 mb-2">
                    Business Type <span className="text-accent-500">*</span>
                </label>
                <select
                    name="business_type"
                    id="business_type"
                    required
                    disabled={isSubmitting}
                    className="input-premium w-full"
                    onChange={(e) => handleSelectChange(e, setShowBusinessTypeOther)}
                >
                    <option value="">Select</option>
                    <option>Startup</option>
                    <option>E-commerce</option>
                    <option>Agency</option>
                    <option>Corporate</option>
                    <option value="Other">Other</option>
                </select>
                {showBusinessTypeOther && (
                    <input
                        type="text"
                        name="business_type_other"
                        id="business_type_other"
                        required
                        disabled={isSubmitting}
                        className="input-premium w-full mt-3"
                        placeholder="Please specify"
                    />
                )}
            </div>

            {/* Primary Goal */}
            <div>
                <label htmlFor="primary_goal" className="block text-sm font-medium text-gray-300 mb-2">
                    Primary Goal <span className="text-accent-500">*</span>
                </label>
                <select
                    name="primary_goal"
                    id="primary_goal"
                    required
                    disabled={isSubmitting}
                    className="input-premium w-full"
                    onChange={(e) => handleSelectChange(e, setShowPrimaryGoalOther)}
                >
                    <option value="">Select</option>
                    <option>Lead Generation</option>
                    <option>Sales</option>
                    <option>Brand Awareness</option>
                    <option value="Other">Other</option>
                </select>
                {showPrimaryGoalOther && (
                    <input
                        type="text"
                        name="primary_goal_other"
                        id="primary_goal_other"
                        required
                        disabled={isSubmitting}
                        className="input-premium w-full mt-3"
                        placeholder="Please specify"
                    />
                )}
            </div>

            {/* Budget Range */}
            <div>
                <label htmlFor="budget_range" className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range <span className="text-accent-500">*</span>
                </label>
                <select
                    name="budget_range"
                    id="budget_range"
                    required
                    disabled={isSubmitting}
                    className="input-premium w-full"
                    onChange={(e) => handleSelectChange(e, setShowBudgetRangeOther)}
                >
                    <option value="">Select</option>
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $5,000</option>
                    <option>$5,000+</option>
                    <option value="Other">Other</option>
                </select>
                {showBudgetRangeOther && (
                    <input
                        type="text"
                        name="budget_range_other"
                        id="budget_range_other"
                        required
                        disabled={isSubmitting}
                        className="input-premium w-full mt-3"
                        placeholder="Please specify"
                    />
                )}
            </div>

            {/* Preferred Language */}
            <div>
                <label htmlFor="preferred_language" className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Language <span className="text-accent-500">*</span>
                </label>
                <select
                    name="preferred_language"
                    id="preferred_language"
                    required
                    disabled={isSubmitting}
                    className="input-premium w-full"
                    onChange={(e) => handleSelectChange(e, setShowPreferredLanguageOther)}
                >
                    <option value="">Select</option>
                    <option>English</option>
                    <option>Urdu</option>
                    <option>Arabic</option>
                    <option value="Other">Other</option>
                </select>
                {showPreferredLanguageOther && (
                    <input
                        type="text"
                        name="preferred_language_other"
                        id="preferred_language_other"
                        required
                        disabled={isSubmitting}
                        className="input-premium w-full mt-3"
                        placeholder="Please specify"
                    />
                )}
            </div>

            {/* Best Time to Contact */}
            <div>
                <label htmlFor="best_time" className="block text-sm font-medium text-gray-300 mb-2">
                    Best Time to Contact <span className="text-accent-500">*</span>
                </label>
                <select
                    name="best_time"
                    id="best_time"
                    required
                    disabled={isSubmitting}
                    className="input-premium w-full"
                >
                    <option value="">Select</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                </select>
            </div>

            {/* Challenge Description */}
            <div>
                <label htmlFor="challenge" className="block text-sm font-medium text-gray-300 mb-2">
                    Challenge Description <span className="text-accent-500">*</span>
                </label>
                <textarea
                    name="challenge"
                    id="challenge"
                    required
                    disabled={isSubmitting}
                    rows={4}
                    className="input-premium w-full resize-vertical"
                    placeholder="Describe your current challenge..."
                ></textarea>
            </div>

            {/* Honeypot field — hidden from real users, bots auto-fill it */}
            <div className="absolute opacity-0 -z-10 h-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                    type="text"
                    name="website"
                    id="website"
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>

            {/* Hidden Tracking Fields */}
            <input type="hidden" name="source" value="Website" />

            {cooldownLeft > 0 && (
                <p className="flex items-center gap-2 text-sm text-amber-400">
                    <Clock className="w-4 h-4" />
                    You can submit again in {formatCooldown(cooldownLeft)}
                </p>
            )}

            <button
                type="submit"
                disabled={isSubmitting || cooldownLeft > 0}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit
                    </>
                )}
            </button>
        </form>
    );
}
