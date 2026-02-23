import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { openPositions, getPositionById } from "@/lib/data/careers";
import {
    ArrowLeft,
    MapPin,
    DollarSign,
    Briefcase,
    CheckCircle2,
    Send,
    Upload,
    Building2,
    Users,
    Zap,
} from "lucide-react";

interface CareerPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    return openPositions.map((position) => ({
        id: position.id,
    }));
}

export async function generateMetadata({ params }: CareerPageProps): Promise<Metadata> {
    const { id } = await params;
    const position = getPositionById(id);

    if (!position) {
        return { title: "Position Not Found" };
    }

    return {
        title: `${position.title} | Careers`,
        description: position.description,
        keywords: [
            position.title.toLowerCase(),
            "n8nera careers",
            "remote automation jobs",
            "n8n developer jobs",
            `${position.type?.toLowerCase() || "full-time"} automation jobs`,
            "AI automation career",
        ],
        openGraph: {
            title: `${position.title} | Careers at n8nera`,
            description: position.description,
            url: `https://n8nera.tech/careers/${id}/`,
            type: "website",
        },
        alternates: {
            canonical: `https://n8nera.tech/careers/${id}/`,
        },
    };
}

export default async function CareerApplicationPage({ params }: CareerPageProps) {
    const { id } = await params;
    const position = getPositionById(id);

    if (!position) {
        notFound();
    }

    const jobPostingSchema = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: position.title,
        description: position.description,
        datePosted: new Date().toISOString().split("T")[0],
        employmentType: position.type === "Full-time" ? "FULL_TIME" : position.type === "Part-time" ? "PART_TIME" : "CONTRACTOR",
        hiringOrganization: {
            "@type": "Organization",
            name: "n8nera",
            sameAs: "https://n8nera.tech",
            logo: "https://n8nera.tech/logo.webp",
        },
        jobLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Rahim Yar Khan",
                addressRegion: "Punjab",
                addressCountry: "PK",
            },
        },
        jobLocationType: "TELECOMMUTE",
        applicantLocationRequirements: {
            "@type": "Country",
            name: "Pakistan",
        },
        baseSalary: {
            "@type": "MonetaryAmount",
            currency: "PKR",
            value: {
                "@type": "QuantitativeValue",
                value: position.salary,
                unitText: "MONTH",
            },
        },
        responsibilities: position.responsibilities?.join(", "),
        qualifications: position.requirements?.join(", "),
        industry: "Technology",
        occupationalCategory: "15-1252.00",
    };

    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
        />
        <div className="pt-16 md:pt-20">
            {/* Header */}
            <section className="relative py-12 md:py-16 overflow-hidden">
                <div className="absolute inset-0 bg-dark-950">
                    <div className="absolute inset-0 bg-premium-pattern" />
                    <div className="absolute top-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-accent-600/10 rounded-full blur-[80px] md:blur-[120px]" />
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        {/* Back Link */}
                        <Link
                            href="/careers"
                            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to All Positions
                        </Link>

                        {/* Position Header */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                            <div>
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <span className="px-3 py-1 rounded-full bg-accent-500/10 text-accent-400 text-sm font-medium">
                                        {position.department}
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium">
                                        {position.type}
                                    </span>
                                </div>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4">
                                    {position.title}
                                </h1>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                    <span className="flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4" />
                                        {position.location}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <DollarSign className="w-4 h-4" />
                                        {position.salary}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Briefcase className="w-4 h-4" />
                                        {position.experience}
                                    </span>
                                </div>
                            </div>

                            <a
                                href="#apply"
                                className="btn-primary whitespace-nowrap self-start"
                            >
                                Apply Now
                                <Send className="w-4 h-4" />
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Content */}
            <section className="relative py-12 md:py-16 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Job Details */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* About the Role */}
                            <AnimatedSection>
                                <div className="glass-card p-6 md:p-8">
                                    <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                        <Briefcase className="w-5 h-5 text-accent-400" />
                                        About the Role
                                    </h2>
                                    <p className="text-gray-400 leading-relaxed">
                                        {position.description}
                                    </p>
                                </div>
                            </AnimatedSection>

                            {/* Responsibilities */}
                            <AnimatedSection delay={0.1}>
                                <div className="glass-card p-6 md:p-8">
                                    <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-accent-400" />
                                        Responsibilities
                                    </h2>
                                    <ul className="space-y-3">
                                        {position.responsibilities.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-400">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>

                            {/* Requirements */}
                            <AnimatedSection delay={0.2}>
                                <div className="glass-card p-6 md:p-8">
                                    <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                        <Users className="w-5 h-5 text-accent-400" />
                                        Requirements
                                    </h2>
                                    <ul className="space-y-3">
                                        {position.requirements.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-400">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>

                            {/* Nice to Have */}
                            <AnimatedSection delay={0.3}>
                                <div className="glass-card p-6 md:p-8">
                                    <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                        <Building2 className="w-5 h-5 text-accent-400" />
                                        Nice to Have
                                    </h2>
                                    <ul className="space-y-3">
                                        {position.niceToHave.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-500">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Quick Info */}
                            <AnimatedSection delay={0.1}>
                                <div className="glass-card p-6 sticky top-24">
                                    <h3 className="text-lg font-semibold text-white mb-4">
                                        Quick Info
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400">Department</span>
                                            <span className="text-white font-medium">
                                                {position.department}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400">Location</span>
                                            <span className="text-white font-medium">Remote</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400">Type</span>
                                            <span className="text-white font-medium">
                                                {position.type}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400">Experience</span>
                                            <span className="text-white font-medium">
                                                {position.experience}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-400">Salary</span>
                                            <span className="text-white font-medium">
                                                {position.salary}
                                            </span>
                                        </div>
                                    </div>

                                    <hr className="border-white/10 my-6" />

                                    <a
                                        href="#apply"
                                        className="btn-primary w-full justify-center"
                                    >
                                        Apply for this Role
                                    </a>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section id="apply" className="relative py-12 md:py-16 overflow-hidden scroll-mt-20">
                <div className="absolute inset-0 bg-dark-950" />

                <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                            Apply for <span className="text-gradient">{position.title}</span>
                        </h2>
                        <p className="text-gray-400">
                            Fill out the form below and we&apos;ll get back to you within 48 hours.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <form className="glass-card p-6 md:p-8 space-y-6">
                            {/* Hidden position field */}
                            <input type="hidden" name="position" value={position.title} />

                            {/* Personal Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        required
                                        className="input-premium"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        required
                                        className="input-premium"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="input-premium"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="input-premium"
                                        placeholder="+1 234 567 8900"
                                    />
                                </div>
                            </div>

                            {/* Professional Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="linkedin"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        LinkedIn Profile
                                    </label>
                                    <input
                                        type="url"
                                        id="linkedin"
                                        name="linkedin"
                                        className="input-premium"
                                        placeholder="https://linkedin.com/in/johndoe"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="portfolio"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Portfolio/GitHub
                                    </label>
                                    <input
                                        type="url"
                                        id="portfolio"
                                        name="portfolio"
                                        className="input-premium"
                                        placeholder="https://github.com/johndoe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="experience"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Years of Relevant Experience *
                                </label>
                                <select
                                    id="experience"
                                    name="experience"
                                    required
                                    className="input-premium"
                                >
                                    <option value="">Select experience level</option>
                                    <option value="0-1">0-1 years</option>
                                    <option value="1-3">1-3 years</option>
                                    <option value="3-5">3-5 years</option>
                                    <option value="5-7">5-7 years</option>
                                    <option value="7+">7+ years</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="salary"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Expected Salary (USD/year)
                                </label>
                                <input
                                    type="text"
                                    id="salary"
                                    name="salary"
                                    className="input-premium"
                                    placeholder="e.g., $70,000"
                                />
                            </div>

                            {/* Resume Upload */}
                            <div>
                                <label
                                    htmlFor="resume"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Resume/CV *
                                </label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        id="resume"
                                        name="resume"
                                        required
                                        accept=".pdf,.doc,.docx"
                                        className="hidden"
                                    />
                                    <label
                                        htmlFor="resume"
                                        className="flex items-center justify-center gap-3 w-full p-6 rounded-lg border-2 border-dashed border-white/10 hover:border-accent-500/50 bg-white/5 cursor-pointer transition-colors"
                                    >
                                        <Upload className="w-6 h-6 text-accent-400" />
                                        <span className="text-gray-400">
                                            Click to upload your resume (PDF, DOC, DOCX)
                                        </span>
                                    </label>
                                </div>
                            </div>

                            {/* Cover Letter */}
                            <div>
                                <label
                                    htmlFor="coverLetter"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Cover Letter / Why do you want to join n8nera? *
                                </label>
                                <textarea
                                    id="coverLetter"
                                    name="coverLetter"
                                    required
                                    rows={5}
                                    className="input-premium resize-none"
                                    placeholder="Tell us why you're excited about this role and what makes you a great fit..."
                                />
                            </div>

                            {/* Additional Questions */}
                            <div>
                                <label
                                    htmlFor="availability"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    When can you start?
                                </label>
                                <select
                                    id="availability"
                                    name="availability"
                                    className="input-premium"
                                >
                                    <option value="">Select availability</option>
                                    <option value="immediately">Immediately</option>
                                    <option value="2-weeks">2 weeks notice</option>
                                    <option value="1-month">1 month notice</option>
                                    <option value="2-months">2 months notice</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="referral"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    How did you hear about us?
                                </label>
                                <select
                                    id="referral"
                                    name="referral"
                                    className="input-premium"
                                >
                                    <option value="">Select option</option>
                                    <option value="linkedin">LinkedIn</option>
                                    <option value="website">Our Website</option>
                                    <option value="referral">Employee Referral</option>
                                    <option value="job-board">Job Board</option>
                                    <option value="social">Social Media</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Submit */}
                            <button type="submit" className="btn-primary w-full justify-center">
                                <Send className="w-5 h-5" />
                                Submit Application
                            </button>

                            <p className="text-xs text-gray-500 text-center">
                                By submitting this application, you agree to our{" "}
                                <Link href="/privacy-policy" className="text-accent-400 hover:underline">
                                    Privacy Policy
                                </Link>{" "}
                                and consent to us processing your data for recruitment purposes.
                            </p>
                        </form>
                    </AnimatedSection>
                </div>
            </section>

            {/* Other Positions */}
            <section className="relative py-12 md:py-16 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/50" />

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-8">
                        <h2 className="text-xl md:text-2xl font-display font-bold text-white">
                            Other Open Positions
                        </h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {openPositions
                            .filter((p) => p.id !== position.id)
                            .slice(0, 4)
                            .map((otherPosition) => (
                                <AnimatedSection key={otherPosition.id}>
                                    <Link
                                        href={`/careers/${otherPosition.id}`}
                                        className="block glass-card p-5 hover:border-accent-500/30 transition-all group"
                                    >
                                        <h3 className="text-base font-semibold text-white group-hover:text-accent-300 transition-colors mb-2">
                                            {otherPosition.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                                            <span>{otherPosition.department}</span>
                                            <span>•</span>
                                            <span>{otherPosition.salary}</span>
                                        </div>
                                    </Link>
                                </AnimatedSection>
                            ))}
                    </div>

                    <AnimatedSection className="text-center mt-8">
                        <Link href="/careers" className="btn-secondary">
                            View All Positions
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
        </>
    );
}
