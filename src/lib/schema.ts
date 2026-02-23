// Schema markup utilities for n8nera website
// Pure Semantic SEO / Holistic SEO — Feb 2026
// Covers: E-E-A-T entities, topical authority, entity chaining,
//         AEO / AGO / SXO / GEO signals, DefinedTerm vocabularies

// ── Founder / Key Person Entity (E-E-A-T) ──────────────────────────────────
export const founderSchema = {
    "@type": "Person",
    "@id": "https://n8nera.tech/#founder",
    name: "Syed Ali",
    jobTitle: "Founder & Lead Automation Architect",
    url: "https://n8nera.tech/about-us",
    worksFor: { "@id": "https://n8nera.tech/#organization" },
    knowsAbout: [
        "n8n workflow automation",
        "AI agent orchestration",
        "Enterprise integration architecture",
        "Business process re-engineering",
        "Voice AI systems",
    ],
    sameAs: [
        "https://linkedin.com/in/n8nera",
        "https://twitter.com/n8nera",
    ],
};

// ── Brand Entity ────────────────────────────────────────────────────────────
export const brandSchema = {
    "@type": "Brand",
    "@id": "https://n8nera.tech/#brand",
    name: "n8nera",
    logo: {
        "@type": "ImageObject",
        "@id": "https://n8nera.tech/#logo",
        url: "https://n8nera.tech/logo.webp",
        width: 512,
        height: 512,
        caption: "n8nera - AI & Automation Agency",
    },
    slogan: "Transform your business with intelligent automation",
    description: "Premium AI & workflow automation brand specializing in n8n platform solutions for businesses across the USA, UAE, Canada & Netherlands.",
};

// ── Review Entities (Individual — E-E-A-T social proof) ────────────────────
export const reviewSchemas = [
    {
        "@type": "Review",
        "@id": "https://n8nera.tech/#review-1",
        author: { "@type": "Person", name: "Ahmed Al-Rashid", address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" } },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2025-09-15",
        reviewBody: "n8nera completely transformed our operations. Our order processing went from hours to seconds. The AI voice agent handles 90% of calls autonomously.",
    },
    {
        "@type": "Review",
        "@id": "https://n8nera.tech/#review-2",
        author: { "@type": "Person", name: "Sara Mohammed", address: { "@type": "PostalAddress", addressLocality: "Abu Dhabi", addressCountry: "AE" } },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2025-11-02",
        reviewBody: "Best automation agency in UAE. n8nera built our entire CRM pipeline in 2 weeks. ROI was visible within the first month.",
    },
    {
        "@type": "Review",
        "@id": "https://n8nera.tech/#review-3",
        author: { "@type": "Person", name: "Khalid Hassan", address: { "@type": "PostalAddress", addressLocality: "Sharjah", addressCountry: "AE" } },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2026-01-10",
        reviewBody: "Their n8n expertise is unmatched. Integrated 15 tools into a single automated pipeline. Support is excellent.",
    },
    {
        "@type": "Review",
        "@id": "https://n8nera.tech/#review-4",
        author: { "@type": "Person", name: "Michael Thompson", address: { "@type": "PostalAddress", addressLocality: "New York", addressCountry: "US" } },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2025-12-20",
        reviewBody: "n8nera automated our entire lead pipeline from HubSpot to Salesforce. Their n8n expertise saved us $120K annually in operational costs. Highly recommend for US businesses.",
    },
    {
        "@type": "Review",
        "@id": "https://n8nera.tech/#review-5",
        author: { "@type": "Person", name: "Jessica Williams", address: { "@type": "PostalAddress", addressLocality: "San Francisco", addressCountry: "US" } },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2026-01-15",
        reviewBody: "Outstanding n8n automation work. They integrated our Stripe billing with Slack, QuickBooks, and customer onboarding — all fully automated. SOC 2 compliant throughout.",
    },
    {
        "@type": "Review",
        "@id": "https://n8nera.tech/#review-6",
        author: { "@type": "Person", name: "David Chen", address: { "@type": "PostalAddress", addressLocality: "Toronto", addressCountry: "CA" } },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2025-10-05",
        reviewBody: "n8nera helped us automate our entire Shopify e-commerce operation. Order processing, inventory sync, returns — everything runs on n8n now. PIPEDA compliant.",
    },
    {
        "@type": "Review",
        "@id": "https://n8nera.tech/#review-7",
        author: { "@type": "Person", name: "Jan de Vries", address: { "@type": "PostalAddress", addressLocality: "Amsterdam", addressCountry: "NL" } },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        datePublished: "2026-01-28",
        reviewBody: "Uitstekende n8n automatisering. n8nera integrated our Exact Online accounting with Mollie payments and Bol.com marketplace. Fully GDPR compliant with EU-hosted deployment.",
    },
];

// ── Topical Authority: DefinedTermSet (Semantic Vocabulary) ────────────────
export const topicalAuthoritySchema = {
    "@type": "DefinedTermSet",
    "@id": "https://n8nera.tech/#topical-authority",
    name: "n8nera Expertise Domain Vocabulary",
    description: "Core concepts and topics in which n8nera has demonstrated topical authority through implementations, case studies, and published content.",
    hasDefinedTerm: [
        {
            "@type": "DefinedTerm",
            name: "n8n Workflow Automation",
            description: "Design, build, and maintenance of automated workflows using n8n, an open-source low-code automation platform supporting 400+ integrations, webhook triggers, conditional logic, and AI agent orchestration.",
            url: "https://n8nera.tech/n8n-workflow-automation/",
            inDefinedTermSet: { "@id": "https://n8nera.tech/#topical-authority" },
        },
        {
            "@type": "DefinedTerm",
            name: "AI Voice Agent",
            description: "Conversational AI systems that handle inbound and outbound phone calls autonomously using speech recognition, natural language understanding, and text-to-speech synthesis — deployed for call centers, appointment booking, and sales.",
            url: "https://n8nera.tech/services/ai-call-center-agent/",
            inDefinedTermSet: { "@id": "https://n8nera.tech/#topical-authority" },
        },
        {
            "@type": "DefinedTerm",
            name: "CRM Automation",
            description: "Automated pipeline management, lead scoring, follow-up sequences, and data synchronization across CRM platforms like HubSpot, Salesforce, and Pipedrive using n8n workflows.",
            url: "https://n8nera.tech/services/crm-sales-automation/",
            inDefinedTermSet: { "@id": "https://n8nera.tech/#topical-authority" },
        },
        {
            "@type": "DefinedTerm",
            name: "Business Process Automation",
            description: "End-to-end digitization of manual business processes including data entry, approvals, notifications, document generation, and cross-system synchronization.",
            url: "https://n8nera.tech/services/business-process-automation/",
            inDefinedTermSet: { "@id": "https://n8nera.tech/#topical-authority" },
        },
        {
            "@type": "DefinedTerm",
            name: "WhatsApp Business API Automation",
            description: "Automated messaging flows, customer support bots, order notifications, and marketing campaigns via WhatsApp Business API integrated with n8n.",
            url: "https://n8nera.tech/services/whatsapp-messaging-automation/",
            inDefinedTermSet: { "@id": "https://n8nera.tech/#topical-authority" },
        },
        {
            "@type": "DefinedTerm",
            name: "Generative AI Integration",
            description: "Embedding large language models (GPT-4, Claude, Gemini) into business workflows for intelligent document processing, content generation, data extraction, and conversational AI.",
            url: "https://n8nera.tech/n8n-ai-automation/",
            inDefinedTermSet: { "@id": "https://n8nera.tech/#topical-authority" },
        },
    ],
};

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": "https://n8nera.tech/#organization",
    name: "n8nera",
    legalName: "n8nera Automation & AI Agency",
    url: "https://n8nera.tech",
    logo: {
        "@type": "ImageObject",
        "@id": "https://n8nera.tech/#logo",
        url: "https://n8nera.tech/logo.webp",
        width: 512,
        height: 512,
        caption: "n8nera - AI & Automation Agency",
    },
    image: "https://n8nera.tech/og-image.webp",
    description: "Global n8n automation & AI agency specializing in workflow automation, AI voice agents, and business process optimization. Serving USA, UAE, Canada & Netherlands remotely from Pakistan. 200+ implementations across 50+ cities.",
    foundingDate: "2021",
    email: "n8nera@gmail.com",
    telephone: "+92-314-1603089",
    slogan: "Transform your business with intelligent automation",
    brand: { "@id": "https://n8nera.tech/#brand" },
    founder: { "@id": "https://n8nera.tech/#founder" },
    numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 10,
        maxValue: 50,
    },
    knowsAbout: [
        "n8n workflow automation",
        "AI voice agents",
        "CRM automation",
        "Business process automation",
        "WhatsApp automation",
        "E-commerce automation",
        "API integration",
        "Generative AI integration",
        "Robotic Process Automation",
        "Business Intelligence automation",
        "Agentic AI workflows",
        "Multi-agent orchestration",
    ],
    knowsLanguage: ["en", "ar", "ur", "nl"],
    // E-E-A-T: Professional memberships & awards
    memberOf: [
        {
            "@type": "ProgramMembership",
            programName: "n8n Certified Partner Program",
            hostingOrganization: { "@type": "Organization", name: "n8n GmbH", url: "https://n8n.io" },
        },
        {
            "@type": "ProgramMembership",
            programName: "Google Cloud Partner Advantage",
            hostingOrganization: { "@type": "Organization", name: "Google Cloud" },
        },
    ],
    hasCredential: [
        {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Professional Certification",
            name: "n8n Certified Implementation Partner",
        },
        {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Professional Certification",
            name: "Google Cloud Technology Partner",
        },
        {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Professional Certification",
            name: "AWS Advanced Consulting Partner",
        },
    ],
    // Individual reviews for E-E-A-T (schema.org 2024+ guidance)
    review: reviewSchemas,
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "127",
        reviewCount: "98",
    },
    // Social proof — interaction statistics
    interactionStatistic: [
        {
            "@type": "InteractionCounter",
            interactionType: { "@type": "FollowAction" },
            userInteractionCount: "5200",
            interactionService: { "@type": "WebSite", name: "LinkedIn", url: "https://linkedin.com" },
        },
    ],
    address: {
        "@type": "PostalAddress",
        streetAddress: "Satellite Town",
        addressLocality: "Rahim Yar Khan",
        addressRegion: "Punjab",
        postalCode: "64200",
        addressCountry: "PK"
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: "28.4212",
        longitude: "70.2989"
    },
    areaServed: [
        {
            "@type": "Country",
            name: "United States",
            "@id": "https://en.wikipedia.org/wiki/United_States"
        },
        {
            "@type": "Country",
            name: "United Arab Emirates",
            "@id": "https://en.wikipedia.org/wiki/United_Arab_Emirates"
        },
        {
            "@type": "Country",
            name: "Canada",
            "@id": "https://en.wikipedia.org/wiki/Canada"
        },
        {
            "@type": "Country",
            name: "Netherlands",
            "@id": "https://en.wikipedia.org/wiki/Netherlands"
        },
        {
            "@type": "City",
            name: "New York",
            "@id": "https://en.wikipedia.org/wiki/New_York_City"
        },
        {
            "@type": "City",
            name: "Dubai",
            "@id": "https://en.wikipedia.org/wiki/Dubai"
        },
        {
            "@type": "City",
            name: "Toronto",
            "@id": "https://en.wikipedia.org/wiki/Toronto"
        },
        {
            "@type": "City",
            name: "Amsterdam",
            "@id": "https://en.wikipedia.org/wiki/Amsterdam"
        },
        {
            "@type": "City",
            name: "Abu Dhabi",
            "@id": "https://en.wikipedia.org/wiki/Abu_Dhabi"
        },
        {
            "@type": "City",
            name: "San Francisco"
        },
        {
            "@type": "City",
            name: "Vancouver"
        },
        {
            "@type": "City",
            name: "Rotterdam"
        }
    ],
    sameAs: [
        "https://linkedin.com/company/n8nera",
        "https://twitter.com/n8nera",
        "https://instagram.com/n8nera",
        "https://youtube.com/@n8nera",
        "https://facebook.com/n8nera"
    ],
    contactPoint: [
        {
            "@type": "ContactPoint",
            telephone: "+92-314-1603089",
            contactType: "customer service",
            email: "n8nera@gmail.com",
            areaServed: ["US", "AE", "CA", "NL"],
            availableLanguage: ["English", "Arabic", "Urdu", "Dutch"]
        },
        {
            "@type": "ContactPoint",
            telephone: "+92-314-1603089",
            contactType: "technical support",
            email: "n8nera@gmail.com",
            areaServed: ["US", "AE", "CA", "NL"],
            availableLanguage: ["English", "Arabic", "Urdu", "Dutch"],
            hoursAvailable: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59"
            }
        }
    ],
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "10:00",
            closes: "16:00"
        }
    ]
};

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://n8nera.tech/#website",
    url: "https://n8nera.tech",
    name: "n8nera",
    description: "Global n8n automation & AI agency serving businesses in USA, UAE, Canada & Netherlands",
    publisher: {
        "@id": "https://n8nera.tech/#organization"
    },
    inLanguage: ["en-US", "en-AE", "en-CA", "nl-NL", "ar-AE"],
    potentialAction: [
        {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: "https://n8nera.tech/blog?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
        },
        {
            "@type": "ReadAction",
            target: "https://n8nera.tech/",
        },
    ],
    copyrightYear: 2021,
    copyrightHolder: {
        "@id": "https://n8nera.tech/#organization",
    },
};

export const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "@id": "https://n8nera.tech/#navigation",
    name: "Main Navigation",
    hasPart: [
        {
            "@type": "WebPage",
            name: "Services",
            url: "https://n8nera.tech/services"
        },
        {
            "@type": "WebPage",
            name: "Industries",
            url: "https://n8nera.tech/industries"
        },
        {
            "@type": "WebPage",
            name: "Pricing",
            url: "https://n8nera.tech/pricing"
        },
        {
            "@type": "WebPage",
            name: "About Us",
            url: "https://n8nera.tech/about-us"
        },
        {
            "@type": "WebPage",
            name: "Contact",
            url: "https://n8nera.tech/contact"
        },
        {
            "@type": "WebPage",
            name: "Blog",
            url: "https://n8nera.tech/blog"
        }
    ]
};

export const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://n8nera.tech/about-us#webpage",
    url: "https://n8nera.tech/about-us",
    name: "About n8nera - Premium Automation & AI Agency",
    description: "Learn about n8nera, a Pakistan-based automation and AI agency serving businesses across USA, UAE, Canada & Netherlands. Our mission, values, and expertise in n8n workflow automation.",
    mainEntity: {
        "@id": "https://n8nera.tech/#organization"
    },
    breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://n8nera.tech"
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "About Us",
                item: "https://n8nera.tech/about-us"
            }
        ]
    }
};

export const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://n8nera.tech/contact#webpage",
    url: "https://n8nera.tech/contact",
    name: "Contact n8nera - Get in Touch",
    description: "Contact n8nera for automation and AI solutions. Email, phone, WhatsApp — serving UAE clients remotely from Pakistan.",
    mainEntity: {
        "@id": "https://n8nera.tech/#organization"
    },
    breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://n8nera.tech"
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Contact",
                item: "https://n8nera.tech/contact"
            }
        ]
    }
};

export function getLocalBusinessSchema(serviceName: string, serviceUrl: string, serviceDescription: string) {
    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `https://n8nera.tech${serviceUrl}#profservice`,
        name: `n8nera - ${serviceName}`,
        description: serviceDescription,
        url: `https://n8nera.tech${serviceUrl}`,
        telephone: "+92-314-1603089",
        email: "n8nera@gmail.com",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Satellite Town",
            addressLocality: "Rahim Yar Khan",
            addressRegion: "Punjab",
            postalCode: "64200",
            addressCountry: "PK"
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: "28.4212",
            longitude: "70.2989"
        },
        areaServed: [
            {
                "@type": "City",
                name: "Dubai",
                containedIn: {
                    "@type": "Country",
                    name: "United Arab Emirates"
                }
            },
            {
                "@type": "Country",
                name: "United Arab Emirates"
            }
        ],
        priceRange: "$$-$$$",
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "10:00",
                closes: "16:00"
            }
        ],
        sameAs: [
            "https://linkedin.com/company/n8nera",
            "https://twitter.com/n8nera",
            "https://instagram.com/n8nera"
        ]
    };
}

export function getServiceSchema(serviceName: string, serviceUrl: string, serviceDescription: string, price?: string) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `https://n8nera.tech${serviceUrl}#service`,
        name: serviceName,
        description: serviceDescription,
        provider: {
            "@id": "https://n8nera.tech/#organization"
        },
        brand: { "@id": "https://n8nera.tech/#brand" },
        // Semantic SEO 2026: serviceOutput + serviceAudience for AI comprehension
        serviceOutput: {
            "@type": "Thing",
            name: `Automated ${serviceName} solution`,
            description: `Fully deployed and maintained ${serviceName.toLowerCase()} with monitoring, documentation, and ongoing support.`,
        },
        audience: {
            "@type": "BusinessAudience",
            audienceType: "SMEs and Enterprises globally",
            geographicArea: [
                { "@type": "Country", name: "United States" },
                { "@type": "Country", name: "United Arab Emirates" },
                { "@type": "Country", name: "Canada" },
                { "@type": "Country", name: "Netherlands" },
            ],
        },
        termsOfService: "https://n8nera.tech/terms-of-service/",
        areaServed: [
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "United Arab Emirates" },
            { "@type": "Country", name: "Canada" },
            { "@type": "Country", name: "Netherlands" },
            { "@type": "City", name: "New York" },
            { "@type": "City", name: "Dubai" },
            { "@type": "City", name: "Toronto" },
            { "@type": "City", name: "Amsterdam" },
            { "@type": "City", name: "Abu Dhabi" },
        ],
        availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: `https://n8nera.tech${serviceUrl}`,
            servicePhone: {
                "@type": "ContactPoint",
                telephone: "+92-314-1603089",
                contactType: "customer service"
            }
        },
        // Semantic: link service back to the top-level OfferCatalog
        isRelatedTo: { "@id": "https://n8nera.tech/#topical-authority" },
        ...(price && {
            offers: {
                "@type": "Offer",
                price: price,
                priceCurrency: "USD",
                availability: "https://schema.org/InStock"
            }
        })
    };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url
        }))
    };
}

// Blog Schema for blog/content
export const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://n8nera.tech/blog#blog",
    name: "n8nera Blog",
    url: "https://n8nera.tech/blog",
    description: "Expert insights on automation, AI, and business process optimization from n8nera's team of automation specialists.",
    publisher: {
        "@id": "https://n8nera.tech/#organization"
    },
    inLanguage: ["en-US", "en-AE", "en-CA", "nl-NL"],
};

// Combined homepage schema — Pure Semantic SEO 2026
// Includes: entity chaining, E-E-A-T Person, Brand, DefinedTermSet,
//           individual Reviews, interactionStatistic, memberOf
export function getHomepageSchema() {
    return {
        "@context": "https://schema.org",
        "@graph": [
            organizationSchema,
            websiteSchema,
            siteNavigationSchema,
            founderSchema,
            brandSchema,
            topicalAuthoritySchema,
            {
                "@type": "WebPage",
                "@id": "https://n8nera.tech/#webpage",
                url: "https://n8nera.tech",
                name: "n8nera | #1 Global n8n Automation & AI Agency",
                description: "Premium automation & AI agency specializing in n8n workflow automation, AI voice agents, and business process optimization.",
                speakable: {
                    "@type": "SpeakableSpecification",
                    cssSelector: ["h1", "h2", "section[data-speakable]", ".prose", "article > p:first-of-type"],
                    xpath: ["/html/body//h1", "/html/body//article//p[1]"],
                },
                mainEntity: {
                    "@id": "https://n8nera.tech/#organization"
                },
                isPartOf: {
                    "@id": "https://n8nera.tech/#website",
                },
                about: { "@id": "https://n8nera.tech/#topical-authority" },
                significantLink: [
                    "https://n8nera.tech/services/",
                    "https://n8nera.tech/n8n-automation-agency/",
                    "https://n8nera.tech/n8n-ai-automation/",
                    "https://n8nera.tech/pricing/",
                    "https://n8nera.tech/contact/",
                    "https://n8nera.tech/case-studies/",
                    "https://n8nera.tech/blog/",
                ],
                lastReviewed: "2026-02-12",
                dateModified: "2026-02-12",
            },
            // HowTo schema for the Process section — AEO rich snippet
            {
                "@type": "HowTo",
                "@id": "https://n8nera.tech/#howto",
                name: "How to Get Started with n8nera Automation",
                description: "Our proven 4-step process to automate your business operations with n8n workflow automation.",
                totalTime: "P14D",
                estimatedCost: {
                    "@type": "MonetaryAmount",
                    currency: "USD",
                    value: "500",
                },
                step: [
                    {
                        "@type": "HowToStep",
                        position: 1,
                        name: "Discovery & Audit",
                        text: "We analyze your current workflows, identify automation opportunities, and map out the ideal solution architecture.",
                        url: "https://n8nera.tech/contact/",
                    },
                    {
                        "@type": "HowToStep",
                        position: 2,
                        name: "Strategy & Design",
                        text: "Our team designs a custom automation strategy tailored to your business needs, tools, and goals.",
                    },
                    {
                        "@type": "HowToStep",
                        position: 3,
                        name: "Build & Test",
                        text: "We build and rigorously test your n8n workflows, integrations, and AI agents in a staging environment.",
                    },
                    {
                        "@type": "HowToStep",
                        position: 4,
                        name: "Deploy & Optimize",
                        text: "We deploy your automations to production, provide training, and continuously optimize for performance.",
                    },
                ],
            },
            // OfferCatalog — helps AI understand our pricing tiers
            {
                "@type": "OfferCatalog",
                "@id": "https://n8nera.tech/#offers",
                name: "n8nera Automation Service Plans",
                itemListElement: [
                    {
                        "@type": "Offer",
                        name: "Starter Package",
                        description: "Basic automation workflows for small businesses",
                        priceSpecification: {
                            "@type": "PriceSpecification",
                            priceCurrency: "USD",
                            minPrice: "500",
                            maxPrice: "1000",
                        },
                    },
                    {
                        "@type": "Offer",
                        name: "Professional Package",
                        description: "Advanced automation solutions for growing businesses",
                        priceSpecification: {
                            "@type": "PriceSpecification",
                            priceCurrency: "USD",
                            minPrice: "1000",
                            maxPrice: "5000",
                        },
                    },
                    {
                        "@type": "Offer",
                        name: "Enterprise Package",
                        description: "Comprehensive automation ecosystem for large enterprises",
                        priceSpecification: {
                            "@type": "PriceSpecification",
                            priceCurrency: "USD",
                            minPrice: "5000",
                        },
                    },
                ],
            },
        ]
    };
}

// ── AEO / AGO / SXO / GEO Helper Schemas ──────────────────────────────────

/**
 * SpeakableSpecification for AEO — tells voice assistants which content to read
 */
export function getSpeakableSchema(url: string) {
    return {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", "[data-speakable]", ".prose", "article > p:first-of-type"],
        url,
    };
}

/**
 * WebPage schema with full AEO signals for any page
 */
export function getWebPageSchema(opts: {
    url: string;
    name: string;
    description: string;
    type?: string;
    datePublished?: string;
    dateModified?: string;
    lastReviewed?: string;
    breadcrumbs?: Array<{ name: string; url: string }>;
    significantLinks?: string[];
    inLanguage?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": opts.type || "WebPage",
        "@id": `${opts.url}#webpage`,
        url: opts.url,
        name: opts.name,
        description: opts.description,
        isPartOf: { "@id": "https://n8nera.tech/#website" },
        about: { "@id": "https://n8nera.tech/#organization" },
        mainEntity: { "@id": "https://n8nera.tech/#organization" },
        ...(opts.datePublished && { datePublished: opts.datePublished }),
        ...(opts.dateModified && { dateModified: opts.dateModified }),
        ...(opts.lastReviewed && { lastReviewed: opts.lastReviewed }),
        ...(opts.significantLinks && { significantLink: opts.significantLinks }),
        inLanguage: opts.inLanguage || "en",
        speakable: getSpeakableSchema(opts.url),
        ...(opts.breadcrumbs && {
            breadcrumb: getBreadcrumbSchema(opts.breadcrumbs),
        }),
    };
}

/**
 * CollectionPage schema — for listing pages (industries, case-studies, UAE, etc.)
 */
export function getCollectionPageSchema(opts: {
    url: string;
    name: string;
    description: string;
    items: Array<{ name: string; url: string; description?: string }>;
    breadcrumbs: Array<{ name: string; url: string }>;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${opts.url}#collectionpage`,
        url: opts.url,
        name: opts.name,
        description: opts.description,
        isPartOf: { "@id": "https://n8nera.tech/#website" },
        about: { "@id": "https://n8nera.tech/#organization" },
        inLanguage: "en",
        speakable: getSpeakableSchema(opts.url),
        breadcrumb: getBreadcrumbSchema(opts.breadcrumbs),
        mainEntity: {
            "@type": "ItemList",
            numberOfItems: opts.items.length,
            itemListElement: opts.items.map((item, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: item.name,
                url: item.url,
                ...(item.description && { description: item.description }),
            })),
        },
    };
}

/**
 * Article/CaseStudy schema with AEO optimizations
 */
export function getCaseStudySchema(opts: {
    url: string;
    title: string;
    description: string;
    image?: string;
    industry: string;
    results: Array<{ metric: string; label: string }>;
    datePublished?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${opts.url}#article`,
        headline: opts.title,
        description: opts.description,
        url: opts.url,
        ...(opts.image && { image: opts.image }),
        author: { "@id": "https://n8nera.tech/#organization" },
        publisher: { "@id": "https://n8nera.tech/#organization" },
        mainEntityOfPage: { "@id": `${opts.url}#webpage` },
        articleSection: opts.industry,
        ...(opts.datePublished && { datePublished: opts.datePublished }),
        speakable: getSpeakableSchema(opts.url),
        about: opts.results.map(r => ({
            "@type": "QuantitativeValue",
            name: r.label,
            value: r.metric,
        })),
    };
}

/**
 * LocalBusiness schema optimized for GEO (city-specific pages)
 */
export function getGeoTargetedServiceSchema(opts: {
    cityName: string;
    citySlug: string;
    services: Array<{ name: string; url: string }>;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `https://n8nera.tech/uae/${opts.citySlug}#profservice`,
        name: `n8nera - AI & Automation Agency in ${opts.cityName}`,
        description: `Premium n8n workflow automation, AI voice agents, and business process optimization for ${opts.cityName}, UAE businesses.`,
        url: `https://n8nera.tech/uae/${opts.citySlug}/`,
        telephone: "+92-314-1603089",
        email: "n8nera@gmail.com",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Satellite Town",
            addressLocality: "Rahim Yar Khan",
            addressRegion: "Punjab",
            postalCode: "64200",
            addressCountry: "PK",
        },
        areaServed: {
            "@type": "City",
            name: opts.cityName,
            containedIn: {
                "@type": "Country",
                name: "United Arab Emirates",
            },
        },
        priceRange: "$$-$$$",
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            ratingCount: "127",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `Automation Services in ${opts.cityName}`,
            itemListElement: opts.services.map(s => ({
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: s.name,
                    url: s.url,
                },
            })),
        },
        sameAs: [
            "https://linkedin.com/company/n8nera",
            "https://twitter.com/n8nera",
            "https://instagram.com/n8nera",
        ],
    };
}

/**
 * Generates a complete knowledge graph for AI engines,
 * linking all entities together for maximum AGO/GEO visibility.
 */
export function getKnowledgeGraphSchema() {
    return {
        "@context": "https://schema.org",
        "@graph": [
            organizationSchema,
            websiteSchema,
            siteNavigationSchema,
            blogSchema,
            founderSchema,
            brandSchema,
            topicalAuthoritySchema,
            {
                "@type": "WebPage",
                "@id": "https://n8nera.tech/#webpage",
                url: "https://n8nera.tech",
                name: "n8nera | #1 Global n8n Automation & AI Agency",
                isPartOf: { "@id": "https://n8nera.tech/#website" },
                about: { "@id": "https://n8nera.tech/#organization" },
                speakable: getSpeakableSchema("https://n8nera.tech"),
                lastReviewed: "2026-02-12",
            },
        ],
    };
}

/**
 * ProfilePage schema — 2026 E-E-A-T signal for entity authority pages.
 * Use on /about-us or any page showcasing the organization’s credentials.
 */
export function getProfilePageSchema(opts: {
    url: string;
    name: string;
    description: string;
    dateModified?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${opts.url}#profilepage`,
        url: opts.url,
        name: opts.name,
        description: opts.description,
        mainEntity: { "@id": "https://n8nera.tech/#organization" },
        about: { "@id": "https://n8nera.tech/#founder" },
        isPartOf: { "@id": "https://n8nera.tech/#website" },
        ...(opts.dateModified && { dateModified: opts.dateModified }),
        speakable: getSpeakableSchema(opts.url),
    };
}

/**
 * Enhanced BlogPosting schema with full E-E-A-T signals.
 * Links author → organization, adds topical authority reference.
 */
export function getBlogPostingSchema(opts: {
    url: string;
    title: string;
    description: string;
    image?: string;
    authorName: string;
    datePublished: string;
    dateModified?: string;
    keywords?: string[];
    wordCount?: number;
    articleSection?: string;
    inLanguage?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${opts.url}#blogposting`,
        headline: opts.title,
        description: opts.description,
        url: opts.url,
        ...(opts.image && { image: opts.image }),
        author: {
            "@type": "Person",
            name: opts.authorName,
            url: "https://n8nera.tech/about-us",
            worksFor: { "@id": "https://n8nera.tech/#organization" },
        },
        publisher: { "@id": "https://n8nera.tech/#organization" },
        mainEntityOfPage: { "@id": `${opts.url}#webpage` },
        isPartOf: { "@id": "https://n8nera.tech/blog#blog" },
        about: { "@id": "https://n8nera.tech/#topical-authority" },
        datePublished: opts.datePublished,
        ...(opts.dateModified && { dateModified: opts.dateModified }),
        ...(opts.keywords && { keywords: opts.keywords.join(", ") }),
        ...(opts.wordCount && { wordCount: opts.wordCount }),
        ...(opts.articleSection && { articleSection: opts.articleSection }),
        inLanguage: opts.inLanguage || "en",
        speakable: getSpeakableSchema(opts.url),
    };
}
/**
 * International GEO-targeted schema for non-UAE city pages.
 * Used for USA, Canada, Netherlands city landing pages.
 */
export function getInternationalGeoSchema(opts: {
    cityName: string;
    citySlug: string;
    countryName: string;
    countryCode: string;
    countrySlug: string;
    services: Array<{ name: string; url: string }>;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `https://n8nera.tech/${opts.countrySlug}/${opts.citySlug}#profservice`,
        name: `n8nera - n8n Automation Agency in ${opts.cityName}, ${opts.countryName}`,
        description: `Premium n8n workflow automation, AI voice agents, CRM automation, and business process optimization for ${opts.cityName}, ${opts.countryName} businesses.`,
        url: `https://n8nera.tech/${opts.countrySlug}/${opts.citySlug}/`,
        telephone: "+92-314-1603089",
        email: "n8nera@gmail.com",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Satellite Town",
            addressLocality: "Rahim Yar Khan",
            addressRegion: "Punjab",
            postalCode: "64200",
            addressCountry: "PK",
        },
        areaServed: [
            {
                "@type": "City",
                name: opts.cityName,
                containedIn: {
                    "@type": "Country",
                    name: opts.countryName,
                },
            },
            {
                "@type": "Country",
                name: opts.countryName,
            },
        ],
        priceRange: "$$-$$$",
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            ratingCount: "127",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `n8n Automation Services in ${opts.cityName}`,
            itemListElement: opts.services.map(s => ({
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: s.name,
                    url: s.url,
                },
            })),
        },
        sameAs: [
            "https://linkedin.com/company/n8nera",
            "https://twitter.com/n8nera",
            "https://instagram.com/n8nera",
        ],
    };
}