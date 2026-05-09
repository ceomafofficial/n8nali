import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { getHomepageSchema } from "@/lib/schema";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://n8nera.tech"),
  title: {
    default: "Stop Doing It Manually — We Automate 85% of Your Ops in 14 Days | n8nera",
    template: "%s | n8nera",
  },
  description:
    "127 businesses already automated their ops with us. Avg result: 40hrs saved/week, $8,400/mo recovered. n8n workflows, AI agents, CRM & WhatsApp automation. Free audit shows your exact ROI — zero commitment.",
  keywords: [
    // Primary high-intent cluster
    "n8n automation agency",
    "n8n workflow automation",
    "hire n8n developer",
    "n8n integrations",
    "n8n AI automation",
    // Commercial intent
    "AI voice agents",
    "business process automation",
    "CRM automation",
    "WhatsApp Business API automation",
    "workflow automation agency",
    // Long-tail converters
    "enterprise automation solutions",
    "AI automation consultants",
    "agentic AI workflows",
    "n8n consulting",
    "best n8n agency",
    // USA GEO
    "n8n automation agency USA",
    "n8n developer United States",
    "automation agency New York",
    "hire n8n developer USA",
    // UAE GEO
    "automation agency Dubai",
    "n8n automation UAE",
    // Canada GEO
    "n8n automation agency Canada",
    "n8n developer Toronto",
    "hire n8n developer Canada",
    // Netherlands GEO
    "n8n automation Netherlands",
    "n8n automatisering Nederland",
    "n8n developer Amsterdam",
    "n8n agency Europe",
  ],
  authors: [{ name: "n8nera", url: "https://n8nera.tech" }],
  creator: "n8nera",
  publisher: "n8nera",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://n8nera.tech/",
    siteName: "n8nera",
    title: "Your Competitors Are Already Automated — Are You? | n8nera",
    description:
      "127 businesses saved 40+ hrs/week with our n8n workflows. AI agents answer leads at 3am. CRM updates itself. Proposals go out automatically. Free audit → see your exact savings.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "n8nera — #1 n8n Automation & AI Agency | Free Audit Available",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@n8nera",
    title: "Stop Losing Leads to Manual Work — We Automate It in 14 Days",
    description:
      "Avg client saves 40hrs/week & $8,400/mo. AI workflows, WhatsApp bots, CRM auto-updates. Free audit this week — we show you the money before you pay a cent.",
    images: ["/og-image.webp"],
    creator: "@n8nera",
  },
  alternates: {
    languages: {
      "x-default": "https://n8nera.tech/",
      "en-US": "https://n8nera.tech/usa/",
      "en-AE": "https://n8nera.tech/uae/",
      "en-CA": "https://n8nera.tech/canada/",
      "nl-NL": "https://n8nera.tech/netherlands/",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get comprehensive homepage schema
  const homepageSchema = getHomepageSchema();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── AEO / AGO / GEO Discovery Tags ── */}
        {/* LLM Discovery — lets AI agents auto-discover documentation */}
        <link rel="llms" type="text/plain" href="/llms.txt" title="LLM Context Documentation" />
        <link rel="llms-full" type="text/plain" href="/llms-full.txt" title="Full LLM Context Documentation" />
        <link rel="alternate" type="application/json" href="/llms-schema.json" title="LLM Schema" />
        <link rel="alternate" type="application/json" href="/.well-known/ai-plugin.json" title="AI Plugin Manifest" />
        <link rel="alternate" type="application/json" href="/.well-known/ai-context.json" title="AI Context Metadata" />
        <link rel="alternate" type="application/ld+json" href="/knowledge-graph.jsonld" title="Knowledge Graph" />

        {/* AI Content Policy — machine-readable signals */}
        <meta name="ai-content-declaration" content="This site allows real-time retrieval and citation but prohibits use for AI model training or fine-tuning." />
        <meta name="ai-policy" content="retrieval=allowed, citation=allowed, training=prohibited, fine-tuning=prohibited" />

        {/* ── SEO / SXO Core Tags ── */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="referrer" content="origin-when-cross-origin" />

        {/* ── GEO / Local Signals ── */}
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Rahim Yar Khan, Punjab, Pakistan" />
        <meta name="geo.position" content="28.4212;70.2989" />
        <meta name="ICBM" content="28.4212, 70.2989" />
        <meta name="DC.language" content="en" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.creator" content="n8nera" />
        <meta name="DC.publisher" content="n8nera" />
        <meta name="DC.rights" content="https://n8nera.tech/terms-of-service/" />

        {/* ── Entity / Knowledge Graph Signals ── */}
        <meta name="author" content="n8nera" />
        <meta name="publisher" content="n8nera" />
        <meta name="application-name" content="n8nera" />
        <meta name="subject" content="n8n Workflow Automation, AI Voice Agents, Business Process Optimization, CRM Automation, Agentic AI" />
        <meta name="classification" content="Business, Technology, Automation, Artificial Intelligence, SaaS" />
        <meta name="coverage" content="United States, United Arab Emirates, Canada, Netherlands, Dubai, New York, Toronto, Amsterdam, Abu Dhabi, San Francisco, Vancouver, Rotterdam" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="3 days" />
        <meta name="format-detection" content="telephone=yes" />

        {/* ── 2026 Semantic SEO: Entity Disambiguation ── */}
        <meta name="entity.type" content="ProfessionalService" />
        <meta name="entity.name" content="n8nera" />
        <meta name="entity.sameAs" content="https://linkedin.com/company/n8nera, https://twitter.com/n8nera" />
        <meta name="entity.knowsAbout" content="n8n workflow automation, AI voice agents, CRM automation, business process automation, WhatsApp automation, agentic AI" />

        {/* ── SXO: Preconnect for performance ── */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          id="clarity-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "uzkw573rxo");
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homepageSchema),
          }}
        />

        {/* ── Google AdSense ── */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9320947540115773"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QCSTG3JLGQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QCSTG3JLGQ');
          `}
        </Script>
      </head>
      <body
        className={`${jakarta.variable} ${instrument.variable} antialiased bg-white text-dark-950 min-h-screen`}
        suppressHydrationWarning
      >
        <Navbar />
        <main id="main-content" className="relative">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
