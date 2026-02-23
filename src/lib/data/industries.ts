export interface Industry {
    id: string;
    name: string;
    description: string;
    icon: string;
    useCases: string[];
    services: string[];
}

export const industries: Industry[] = [
    {
        id: "retail-shops",
        name: "Retail & Shops",
        description: "Automate inventory, sales, and customer engagement for physical and online retail businesses.",
        icon: "Store",
        useCases: [
            "Inventory sync across locations",
            "Automated reorder notifications",
            "Customer loyalty automation",
            "POS data synchronization",
            "Multi-channel order management",
        ],
        services: ["ecommerce-automation", "crm-sales-automation", "whatsapp-messaging-automation"],
    },
    {
        id: "local-businesses",
        name: "Local Businesses",
        description: "Streamline operations and customer communication for service-based local businesses.",
        icon: "Building",
        useCases: [
            "Appointment scheduling automation",
            "Customer review collection",
            "Local SEO automation",
            "Quotation & invoice automation",
            "Google Business integration",
        ],
        services: ["business-process-automation", "appointment-booking-voice-bot", "whatsapp-messaging-automation"],
    },
    {
        id: "smes",
        name: "SMEs",
        description: "Enterprise-grade automation at SME budgets to compete with larger competitors.",
        icon: "TrendingUp",
        useCases: [
            "CRM pipeline automation",
            "Financial reporting automation",
            "HR & payroll integration",
            "Vendor management workflows",
            "Business intelligence dashboards",
        ],
        services: ["business-process-automation", "crm-sales-automation", "data-integration-sync"],
    },
    {
        id: "enterprises",
        name: "Enterprises",
        description: "Scalable, secure automation infrastructure for complex enterprise operations.",
        icon: "Building2",
        useCases: [
            "Cross-departmental workflow automation",
            "Enterprise system integration",
            "Compliance & audit automation",
            "Global data synchronization",
            "Custom reporting solutions",
        ],
        services: ["business-process-automation", "data-integration-sync", "monitoring-alert-systems"],
    },
    {
        id: "agencies",
        name: "Agencies",
        description: "White-label automation solutions and managed services for marketing and digital agencies.",
        icon: "Users",
        useCases: [
            "Client reporting automation",
            "Campaign management workflows",
            "Multi-client data management",
            "White-label automation offering",
            "Resource allocation automation",
        ],
        services: ["social-media-automation", "freelancing-agency-services", "saas-automation-service"],
    },
    {
        id: "ecommerce",
        name: "E-commerce Brands",
        description: "End-to-end automation for online stores from marketing to fulfillment.",
        icon: "ShoppingBag",
        useCases: [
            "Order fulfillment automation",
            "Multi-marketplace sync",
            "Abandoned cart recovery",
            "Customer lifecycle automation",
            "Inventory forecasting",
        ],
        services: ["ecommerce-automation", "whatsapp-messaging-automation", "data-integration-sync"],
    },
    {
        id: "real-estate",
        name: "Real Estate",
        description: "Automate property management, lead handling, and client communication.",
        icon: "Home",
        useCases: [
            "Lead capture & nurturing",
            "Property listing sync",
            "Viewing scheduling automation",
            "Document management workflows",
            "Commission tracking",
        ],
        services: ["crm-sales-automation", "appointment-booking-voice-bot", "sales-voice-ai-agent"],
    },
    {
        id: "consultants",
        name: "Consultants",
        description: "Streamline client management, proposals, and project delivery automation.",
        icon: "UserCheck",
        useCases: [
            "Proposal & contract automation",
            "Client onboarding workflows",
            "Time tracking integration",
            "Project milestone automation",
            "Invoice & payment automation",
        ],
        services: ["business-process-automation", "crm-sales-automation", "appointment-booking-voice-bot"],
    },
    {
        id: "saas",
        name: "SaaS Companies",
        description: "Automate customer onboarding, support, and product-led growth motions.",
        icon: "Cloud",
        useCases: [
            "User onboarding automation",
            "Feature adoption tracking",
            "Churn prediction workflows",
            "Support ticket automation",
            "Product analytics integration",
        ],
        services: ["ai-based-automation", "monitoring-alert-systems", "ai-call-center-agent"],
    },
    {
        id: "startups",
        name: "Startups",
        description: "Move fast with automation that scales from MVP to enterprise.",
        icon: "Rocket",
        useCases: [
            "Rapid workflow prototyping",
            "Growth automation experiments",
            "Investor reporting automation",
            "Team productivity workflows",
            "Customer feedback loops",
        ],
        services: ["saas-automation-service", "crm-sales-automation", "social-media-automation"],
    },
    {
        id: "hospitality",
        name: "Hotels & Restaurants",
        description: "Elevate guest experience with intelligent automation and AI voice agents.",
        icon: "UtensilsCrossed",
        useCases: [
            "Reservation management",
            "Guest communication automation",
            "Room service automation",
            "Review response workflows",
            "Staff scheduling integration",
        ],
        services: ["hotel-restaurant-voice-agent", "appointment-booking-voice-bot", "whatsapp-messaging-automation"],
    },
    {
        id: "logistics",
        name: "Logistics & Delivery",
        description: "Optimize delivery operations with real-time tracking and customer updates.",
        icon: "Package",
        useCases: [
            "Delivery tracking automation",
            "Route optimization integration",
            "Customer notification workflows",
            "Proof of delivery automation",
            "Claims processing",
        ],
        services: ["logistics-delivery-voice-agent", "monitoring-alert-systems", "whatsapp-messaging-automation"],
    },
];

export const uaeCities = [
    { id: "dubai", name: "Dubai", nameAr: "دبي" },
    { id: "abu-dhabi", name: "Abu Dhabi", nameAr: "أبو ظبي" },
    { id: "sharjah", name: "Sharjah", nameAr: "الشارقة" },
    { id: "ajman", name: "Ajman", nameAr: "عجمان" },
    { id: "ras-al-khaimah", name: "Ras Al Khaimah", nameAr: "رأس الخيمة" },
    { id: "fujairah", name: "Fujairah", nameAr: "الفجيرة" },
    { id: "al-ain", name: "Al Ain", nameAr: "العين" },
    { id: "umm-al-quwain", name: "Umm Al Quwain", nameAr: "أم القيوين" },
];
