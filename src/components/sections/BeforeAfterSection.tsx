"use client";

import { useState } from "react";
import {
  Clock,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Zap,
  Mail,
  Phone,
  FileText,
  Database,
  MessageSquare,
  Bot,
  TrendingDown,
  TrendingUp,
  Timer,
  DollarSign,
  RefreshCw,
  XCircle,
  ChevronRight,
} from "lucide-react";

/* ─── Manual Process Steps ─────────────────────────────── */
const manualSteps = [
  {
    id: 1,
    icon: Mail,
    title: "Lead arrives in inbox",
    detail: "Manually check email every 1–2 hrs",
    time: "1–2 hrs",
    status: "slow",
    color: "#EA4335",
  },
  {
    id: 2,
    icon: FileText,
    title: "Copy data to spreadsheet",
    detail: "Manually enter name, email, company",
    time: "15 min",
    status: "tedious",
    color: "#FBBC04",
  },
  {
    id: 3,
    icon: Phone,
    title: "Research the prospect",
    detail: "Google company, LinkedIn, size estimate",
    time: "30 min",
    status: "tedious",
    color: "#FBBC04",
  },
  {
    id: 4,
    icon: Database,
    title: "Enter into CRM manually",
    detail: "Copy-paste to HubSpot / Salesforce",
    time: "10 min",
    status: "error-prone",
    color: "#EA4335",
  },
  {
    id: 5,
    icon: MessageSquare,
    title: "Assign to sales rep",
    detail: "Email or Slack the rep — they might miss it",
    time: "20 min",
    status: "slow",
    color: "#FBBC04",
  },
  {
    id: 6,
    icon: Mail,
    title: "Send follow-up email",
    detail: "Manually write and send — often forgotten",
    time: "15 min",
    status: "error-prone",
    color: "#EA4335",
  },
];

/* ─── AI Automation Steps ──────────────────────────────── */
const autoSteps = [
  {
    id: 1,
    icon: Zap,
    title: "Lead captured instantly",
    detail: "n8n webhook fires the moment form submits",
    time: "0 sec",
    status: "instant",
    color: "#34A853",
  },
  {
    id: 2,
    icon: Bot,
    title: "AI enriches lead data",
    detail: "Clearbit / Apollo pulls company size, industry, LinkedIn",
    time: "3 sec",
    status: "instant",
    color: "#34A853",
  },
  {
    id: 3,
    icon: Database,
    title: "CRM updated automatically",
    detail: "Lead created in HubSpot with all fields populated",
    time: "1 sec",
    status: "instant",
    color: "#34A853",
  },
  {
    id: 4,
    icon: RefreshCw,
    title: "Lead scored & routed",
    detail: "AI qualifies: high/mid/low — assigns correct rep",
    time: "2 sec",
    status: "instant",
    color: "#34A853",
  },
  {
    id: 5,
    icon: MessageSquare,
    title: "Rep notified via Slack + SMS",
    detail: "Instant Slack ping with full context & LinkedIn",
    time: "1 sec",
    status: "instant",
    color: "#34A853",
  },
  {
    id: 6,
    icon: Mail,
    title: "Personalized email sent",
    detail: "GPT-4 writes a custom intro email — sent immediately",
    time: "4 sec",
    status: "instant",
    color: "#34A853",
  },
];

/* ─── Metric Cards ─────────────────────────────────────── */
const metrics = [
  {
    icon: Timer,
    label: "Response Time",
    before: "3–4 hours",
    after: "< 11 seconds",
    improvement: "99% faster",
    positive: true,
  },
  {
    icon: Clock,
    label: "Staff Time per Lead",
    before: "90 min/lead",
    after: "0 min",
    improvement: "100% saved",
    positive: true,
  },
  {
    icon: DollarSign,
    label: "Cost per Lead Processed",
    before: "$22–$35",
    after: "$0.08",
    improvement: "-97% cost",
    positive: true,
  },
  {
    icon: AlertTriangle,
    label: "Human Errors",
    before: "1 in 5 leads",
    after: "< 0.01%",
    improvement: "99.9% accurate",
    positive: true,
  },
];

const statusColors: Record<string, string> = {
  slow: "bg-red-50 border-red-200 text-red-700",
  tedious: "bg-amber-50 border-amber-200 text-amber-700",
  "error-prone": "bg-orange-50 border-orange-200 text-orange-700",
  instant: "bg-green-50 border-green-200 text-green-700",
};

const statusIcons: Record<string, React.ReactNode> = {
  slow: <XCircle className="w-3.5 h-3.5" />,
  tedious: <AlertTriangle className="w-3.5 h-3.5" />,
  "error-prone": <XCircle className="w-3.5 h-3.5" />,
  instant: <CheckCircle2 className="w-3.5 h-3.5" />,
};

export default function BeforeAfterSection() {
  const [activeTab, setActiveTab] = useState<"both" | "before" | "after">("both");

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#111827 1px, transparent 1px), linear-gradient(90deg, #111827 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold text-[#4285F4] uppercase tracking-wider mb-4">
            Real-World Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-5 leading-tight">
            Your Sales Process,{" "}
            <span className="text-gradient-blue italic-accent">Before & After</span>
            {" "}n8n Automation
          </h2>
          <p className="text-lg text-gray-600">
            See exactly how a typical <strong className="text-gray-900">Lead Qualification workflow</strong> transforms from a 90-minute manual ordeal into an 11-second fully automated pipeline.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center rounded-xl border border-gray-200 bg-gray-50 p-1 gap-1">
            {[
              { id: "both", label: "Side by Side", shortLabel: "Both" },
              { id: "before", label: "❌ Manual", shortLabel: "❌ Manual" },
              { id: "after", label: "✅ Automated", shortLabel: "✅ Auto" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-white text-gray-900 shadow-sm border border-gray-200"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="sm:hidden">{tab.shortLabel}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Comparison */}
        <div
          className={`grid gap-6 md:gap-8 mb-12 md:mb-16 ${
            activeTab === "both"
              ? "grid-cols-1 xl:grid-cols-2"
              : "grid-cols-1 max-w-2xl mx-auto"
          }`}
        >
          {/* ── BEFORE Panel ── */}
          {(activeTab === "both" || activeTab === "before") && (
            <div className="relative">
              {/* Panel Header */}
              <div className="flex items-center gap-3 mb-6 p-4 rounded-2xl bg-red-50 border border-red-100">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">Manual Process</div>
                  <div className="text-sm text-red-600 font-medium flex items-center gap-1">
                    <TrendingDown className="w-3.5 h-3.5" /> 3–4 hours per lead · High error rate
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-3">
                {manualSteps.map((step, i) => (
                  <div
                    key={step.id}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200 shadow-sm"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {/* Step Number */}
                    <div className="flex flex-col items-center shrink-0">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.id}
                      </div>
                      {i < manualSteps.length - 1 && (
                        <div className="w-px h-6 bg-gray-200 mt-2" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <step.icon className="w-4 h-4 text-gray-500 shrink-0" />
                        <span className="font-semibold text-gray-900 text-sm">{step.title}</span>
                        <span
                          className={`ml-auto inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${statusColors[step.status]}`}
                        >
                          {statusIcons[step.status]}
                          {step.status}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 ml-6 mb-1">{step.detail}</p>
                      <div className="ml-6 flex items-center gap-1 text-xs font-semibold text-red-500">
                        <Clock className="w-3 h-3" /> {step.time} wasted
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total banner */}
              <div className="mt-5 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Total time per lead</div>
                  <div className="text-2xl font-bold text-red-600">90+ minutes</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">Cost per lead</div>
                  <div className="text-2xl font-bold text-red-600">$22–$35</div>
                </div>
              </div>
            </div>
          )}

          {/* ── AFTER Panel ── */}
          {(activeTab === "both" || activeTab === "after") && (
            <div className="relative">
              {/* Panel Header */}
              <div className="flex items-center gap-3 mb-6 p-4 rounded-2xl bg-green-50 border border-green-100">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">n8n AI Automation</div>
                  <div className="text-sm text-green-600 font-medium flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> 11 seconds total · Zero errors
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-3">
                {autoSteps.map((step, i) => (
                  <div
                    key={step.id}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-green-100 shadow-sm"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {/* Step Number */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white bg-[#34A853]">
                        {step.id}
                      </div>
                      {i < autoSteps.length - 1 && (
                        <div className="w-px h-6 bg-green-100 mt-2" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <step.icon className="w-4 h-4 text-[#34A853] shrink-0" />
                        <span className="font-semibold text-gray-900 text-sm">{step.title}</span>
                        <span className="ml-auto inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border bg-green-50 border-green-200 text-green-700">
                          <CheckCircle2 className="w-3.5 h-3.5" /> instant
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 ml-6 mb-1">{step.detail}</p>
                      <div className="ml-6 flex items-center gap-1 text-xs font-semibold text-green-600">
                        <Zap className="w-3 h-3" /> {step.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total banner */}
              <div className="mt-5 p-4 rounded-xl bg-green-50 border border-green-200 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Total time per lead</div>
                  <div className="text-2xl font-bold text-green-600">11 seconds</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">Cost per lead</div>
                  <div className="text-2xl font-bold text-green-600">$0.08</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Metrics Row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-14">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="google-card p-5 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-[#4285F4]/10 flex items-center justify-center mx-auto mb-3">
                <m.icon className="w-5 h-5 text-[#4285F4]" />
              </div>
              <div className="text-xs text-gray-500 mb-3 font-medium">{m.label}</div>
              <div className="flex items-center justify-center gap-2 mb-3 flex-wrap">
                <span className="text-xs font-semibold text-red-500 line-through bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                  {m.before}
                </span>
                <ChevronRight className="w-3 h-3 text-gray-400" />
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                  {m.after}
                </span>
              </div>
              <div className="text-sm font-bold text-[#4285F4]">{m.improvement}</div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="text-center">
          <p className="text-gray-600 mb-6 text-lg">
            This is just <strong className="text-gray-900">one workflow</strong>. Imagine every process in your business running like this.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact" className="btn-primary text-base px-8 py-4">
              Automate My Business
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/services" className="btn-secondary text-base px-8 py-4">
              See All Workflows
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Free audit · No commitment · Results in 2 weeks
          </p>
        </div>
      </div>
    </section>
  );
}
