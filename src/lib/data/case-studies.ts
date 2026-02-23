import { LucideIcon, Mail, Brain, Clock, FolderGit2, FileText, Settings, MessageCircle, Image as ImageIcon, Code, Cloud, Phone, ShoppingCart, Building2, Users, CalendarCheck, BarChart3, Headphones } from "lucide-react";

export interface CaseStudy {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    category: "Workflow Automation" | "AI Agents" | "CRM & Sales" | "Integration";
    industry: "SaaS" | "E-commerce" | "Agency" | "Professional Services" | "General";
    challenge: string;
    solution: string;
    keyFeatures: {
        title: string;
        description: string;
        icon?: LucideIcon;
    }[];
    nodesUsed: {
        name: string;
        description: string;
        icon?: LucideIcon;
    }[];
    results: {
        metric: string;
        label: string;
    }[];
    prerequisites: string[];
    instructions: string[];
}

export const caseStudies: CaseStudy[] = [
    {
        id: "ai-gmail-categorization-agent",
        title: "AI-Powered Gmail Categorization Agent",
        shortDescription: "Automate email sorting and labeling using n8n, OpenAI, and Gmail API to maintain a pristine inbox.",
        fullDescription: "This workflow automates email categorization in Gmail using the Gmail API and OpenAI's language model. It periodically checks for new emails, reads their content, and categorizes them based on existing Gmail labels. If no matching label is found, the workflow creates a new label and assigns it to the email, ensuring a dynamic and self-organizing inbox system.",
        image: "/images/portfolio/gmail-ai-classifier.png",
        category: "AI Agents",
        industry: "General",
        challenge: "Professionals and teams are overwhelmed by high volumes of unorganized email, leading to missed opportunities, lost productivity, and manual sorting fatigue.",
        solution: "A smart n8n workflow that acts as a 24/7 inbox assistant. It intelligently reads, analyzes, and tags every incoming email using GPT-4-level understanding, creating new categories on the fly if needed.",
        keyFeatures: [
            {
                title: "Smart Polling",
                description: "Triggers every 5 minutes to check for new emails, ensuring near real-time organization.",
                icon: Clock
            },
            {
                title: "Dynamic Labeling",
                description: "If no suitable label exists, the AI creates one dynamically based on context.",
                icon: FolderGit2
            },
            {
                title: "OpenAI Analysis",
                description: "Uses LLMs to deeply understand email intent (e.g., Invoice, Lead, Spam) beyond simple keywords.",
                icon: Brain
            },
            {
                title: "Intelligent Filtering",
                description: "Automatically removes non-essential emails like ads and creates a focused workspace.",
                icon: FileText
            }
        ],
        nodesUsed: [
            {
                name: "Gmail Trigger",
                description: "Polls inbox for new messages.",
                icon: Mail
            },
            {
                name: "OpenAI Chat Model",
                description: "The 'brain' that analyzes content.",
                icon: Brain
            },
            {
                name: "Gmail - Read/Create Labels",
                description: "Manages the label taxonomy.",
                icon: Settings
            },
            {
                name: "Gmail - Add Label",
                description: "Applies the final classification.",
                icon: FolderGit2
            }
        ],
        results: [
            { metric: "100%", label: "Emails Processed" },
            { metric: "5hrs+", label: "Saved Weekly" },
            { metric: "24/7", label: "Inbox Monitoring" },
            { metric: "0", label: "Manual Sorting" }
        ],
        prerequisites: [
            "Gmail API Credentials (OAuth2) configured in n8n",
            "OpenAI API Key for the LLM node",
            "A structured or semi-structured Gmail label system (optional)"
        ],
        instructions: [
            "Add your Gmail API credentials to the Gmail nodes.",
            "Add your OpenAI API credentials to the OpenAI Chat Model node.",
            "Activate the workflow to start polling every 5 minutes.",
            "Monitor initial runs and refine the system prompt if categorization needs tweaking."
        ]
    },
    {
        id: "ai-text-to-image-agent",
        title: "Automated AI Text-to-Image Generation Agent",
        shortDescription: "A fully automated, prompt-driven AI image generator using n8n, Google Gemini (or Flux/OpenAI), and Telegram.",
        fullDescription: "This advanced n8n template demonstrates how to use AI to generate custom images from scratch - fully automated, prompt-driven, and ready to deploy at scale. It triggers via Telegram or API, parses natural language prompts, creates structured image generation parameters, generates high-quality visuals using models like Flux or Gemini, and delivers the result instantly.",
        image: "/images/portfolio/ai-image-generator.png",
        category: "AI Agents",
        industry: "Agency",
        challenge: "Creating custom, high-quality visuals for marketing, social media, or storyboards is time-consuming and often requires expensive software or manual prompt engineering.",
        solution: "An automated bot that takes simple chat messages, refines them into expert design prompts using an LLM, and instantly generates production-ready images via top-tier AI models.",
        keyFeatures: [
            {
                title: "Multi-Channel Triggering",
                description: "Initiate generation via Telegram, n8n Chat, or API calls.",
                icon: MessageCircle
            },
            {
                title: "Smart Prompt Refinement",
                description: "Uses an AI Agent to rewrite simple inputs into detailed, high-quality image prompts.",
                icon: Brain
            },
            {
                title: "Model Flexibility",
                description: "Supports Flux, Google Gemini, OpenAI DALL-E 3, and more.",
                icon: ImageIcon
            },
            {
                title: "Automated Delivery",
                description: "Sends the generated image back to chat or saves it to local disk/cloud.",
                icon: Cloud
            }
        ],
        nodesUsed: [
            {
                name: "Telegram Trigger",
                description: "Receives user prompts.",
                icon: MessageCircle
            },
            {
                name: "AI Agent (Gemini)",
                description: "Processes & refines prompts.",
                icon: Brain
            },
            {
                name: "HTTP Request",
                description: "Fetches generated image data.",
                icon: Cloud
            },
            {
                name: "Code Node",
                description: "Cleans JSON & sets filenames.",
                icon: Code
            }
        ],
        results: [
            { metric: "<10s", label: "Generation Time" },
            { metric: "100%", label: "Automated" },
            { metric: "∞", label: "Creative Possibilities" },
            { metric: "Multi", label: "Model Support" }
        ],
        prerequisites: [
            "Google Gemini / OpenAI account with image generation access",
            "Telegram Bot Token (if using Telegram trigger)",
            "n8n instance with file system access (optional)"
        ],
        instructions: [
            "Import the workflow package into n8n.",
            "Configure Telegram Trigger and AI Agent credentials.",
            "Customize the 'Fields - Set Values' node for default resolution (e.g., 1080x1920) and model (Flux, Gemini).",
            "Open your Telegram bot, type a prompt, and watch the magic happen."
        ]
    },
    {
        id: "ecommerce-order-automation-shopify",
        title: "E-Commerce Order Automation for Shopify Store",
        shortDescription: "End-to-end order processing automation reducing manual work by 95% for a Dubai fashion e-commerce brand.",
        fullDescription: "A comprehensive n8n workflow that automates the complete order lifecycle for a Shopify-based fashion store in Dubai. From order received to delivery confirmed, every step is automated — including payment verification, inventory sync, shipping label generation, WhatsApp notifications, and post-delivery review collection.",
        image: "/images/portfolio/shopify-order-automation.svg",
        category: "Workflow Automation",
        industry: "E-commerce",
        challenge: "The client processed 100+ orders daily manually. Each order required 15 minutes of staff time — checking payment, updating inventory, creating shipping labels, and sending customer confirmations. This consumed 2 full-time employees and errors were common.",
        solution: "n8nera built a fully automated order processing pipeline using n8n + Shopify + Aramex shipping + WhatsApp Business API. The entire order-to-delivery flow now runs autonomously with zero manual intervention for standard orders.",
        keyFeatures: [
            { title: "Instant Order Processing", description: "New Shopify orders are processed within 30 seconds — payment verified, inventory updated, shipping label created.", icon: ShoppingCart },
            { title: "WhatsApp Notifications", description: "Customers receive order confirmation, shipping tracking, and delivery confirmation via WhatsApp automatically.", icon: MessageCircle },
            { title: "Multi-Channel Inventory Sync", description: "Stock levels synchronized across Shopify, noon, and Instagram Shop in real-time.", icon: Cloud },
            { title: "Abandoned Cart Recovery", description: "3-step WhatsApp sequence recovers 22% of abandoned carts with personalized messages and incentives.", icon: BarChart3 }
        ],
        nodesUsed: [
            { name: "Shopify Trigger", description: "Detects new orders instantly.", icon: ShoppingCart },
            { name: "HTTP Request", description: "Creates shipping labels via Aramex API.", icon: Cloud },
            { name: "WhatsApp Cloud API", description: "Sends automated customer messages.", icon: MessageCircle },
            { name: "Google Sheets", description: "Logs all transactions for reporting.", icon: FileText }
        ],
        results: [
            { metric: "95%", label: "Manual Work Reduced" },
            { metric: "0", label: "Processing Errors" },
            { metric: "22%", label: "Cart Recovery Rate" },
            { metric: "$4,200", label: "Monthly Savings" }
        ],
        prerequisites: [
            "Shopify store with API access",
            "WhatsApp Business API credentials",
            "Shipping provider API (Aramex, FedEx, etc.)",
            "n8n instance (cloud or self-hosted)"
        ],
        instructions: [
            "Connect Shopify store to n8n via Shopify API credentials.",
            "Configure WhatsApp Business API for automated messaging.",
            "Set up shipping provider integration for label generation.",
            "Configure inventory sync triggers for multi-channel updates.",
            "Activate abandoned cart recovery sequence."
        ]
    },
    {
        id: "real-estate-crm-lead-automation",
        title: "Real Estate CRM & Lead Automation for Dubai Agency",
        shortDescription: "Automated lead capture, AI scoring, property matching, and follow-ups — resulting in 3.5x conversion improvement.",
        fullDescription: "A Dubai real estate agency receiving 150+ leads daily from Property Finder, Bayut, website, and WhatsApp needed a way to respond faster and never lose a lead. n8nera built an AI-powered CRM automation system that captures leads from all channels, scores them with GPT-4, matches them with properties, and runs personalized follow-up sequences.",
        image: "/images/portfolio/real-estate-crm-automation.svg",
        category: "CRM & Sales",
        industry: "Professional Services",
        challenge: "With 150+ leads daily across 5 channels and 12 agents, the agency had a 4-hour average response time. Leads went cold, duplicates piled up, and follow-ups were inconsistent. Conversion rate was only 1.8%.",
        solution: "n8nera implemented a centralized lead automation system using n8n + HubSpot + WhatsApp + OpenAI. Every lead gets captured, deduplicated, AI-scored, matched with properties, and nurtured automatically — with response time under 30 seconds.",
        keyFeatures: [
            { title: "Multi-Channel Lead Capture", description: "Leads from Property Finder, Bayut, website forms, WhatsApp, and Instagram all flow into one CRM pipeline.", icon: Users },
            { title: "AI Lead Scoring", description: "GPT-4 analyzes lead messages to determine intent, budget, and urgency — scores from 0-100.", icon: Brain },
            { title: "Smart Property Matching", description: "Algorithm matches lead requirements with available listings and sends personalized shortlist via WhatsApp.", icon: Building2 },
            { title: "Automated Follow-Up Sequences", description: "7-touch WhatsApp + email sequence over 30 days with personalized content based on lead behavior.", icon: MessageCircle }
        ],
        nodesUsed: [
            { name: "Webhook", description: "Captures leads from all channels.", icon: Cloud },
            { name: "OpenAI Chat Model", description: "Scores and qualifies leads.", icon: Brain },
            { name: "HubSpot", description: "CRM pipeline management.", icon: Users },
            { name: "WhatsApp Cloud API", description: "Automated follow-ups.", icon: MessageCircle }
        ],
        results: [
            { metric: "27s", label: "Avg Response Time" },
            { metric: "3.5x", label: "Conversion Improvement" },
            { metric: "AED 8M", label: "Additional Revenue (Q1)" },
            { metric: "4hrs", label: "Agent Time Saved Daily" }
        ],
        prerequisites: [
            "HubSpot CRM account (Free tier works)",
            "WhatsApp Business API credentials",
            "OpenAI API Key",
            "Property Finder / Bayut lead email forwarding"
        ],
        instructions: [
            "Set up HubSpot CRM with custom properties for real estate.",
            "Configure webhook endpoints for each lead source.",
            "Set up OpenAI-powered scoring workflow with real estate criteria.",
            "Build property matching algorithm using listings database.",
            "Create multi-touch follow-up sequences in n8n.",
            "Train agents on the new CRM workflow."
        ]
    },
    {
        id: "ai-voice-agent-restaurant-reservations",
        title: "AI Voice Agent for Restaurant Reservation Management",
        shortDescription: "24/7 AI phone agent handling 300+ daily reservation calls for a popular Dubai restaurant chain.",
        fullDescription: "A popular restaurant chain in Dubai with 4 locations was missing 40% of inbound calls due to peak-hour congestion. n8nera deployed an AI voice agent that handles all reservation calls — checking availability, booking tables, sending WhatsApp confirmations, and managing cancellations. The agent speaks English and Arabic fluently.",
        image: "/images/portfolio/voice-agent-restaurant.svg",
        category: "AI Agents",
        industry: "Professional Services",
        challenge: "The restaurant received 400+ calls daily across 4 locations. During lunch and dinner rush, 40% of calls went unanswered. Each missed call was a potential lost reservation worth AED 200-500. Staff were stressed juggling phones and service.",
        solution: "n8nera deployed an AI voice agent powered by GPT-4, ElevenLabs voice synthesis, and Twilio telephony. The agent handles all reservation calls, checks real-time table availability, books slots, sends WhatsApp confirmations, and escalates special requests to the host.",
        keyFeatures: [
            { title: "Natural Conversation", description: "AI agent conducts natural phone conversations in English and Arabic, handling accents and background noise.", icon: Headphones },
            { title: "Real-Time Availability", description: "Checks table availability in real-time across all 4 locations before confirming bookings.", icon: CalendarCheck },
            { title: "WhatsApp Confirmation", description: "Sends instant booking confirmation via WhatsApp with date, time, party size, and special requests.", icon: MessageCircle },
            { title: "Automated Reminders", description: "24-hour and 1-hour reminders reduce no-shows by 62%.", icon: Clock }
        ],
        nodesUsed: [
            { name: "Twilio", description: "Handles inbound/outbound phone calls.", icon: Phone },
            { name: "OpenAI Chat Model", description: "Powers natural conversation.", icon: Brain },
            { name: "Google Calendar", description: "Manages reservation slots.", icon: CalendarCheck },
            { name: "WhatsApp Cloud API", description: "Sends booking confirmations.", icon: MessageCircle }
        ],
        results: [
            { metric: "100%", label: "Calls Answered" },
            { metric: "300+", label: "Calls Handled Daily" },
            { metric: "62%", label: "No-Show Reduction" },
            { metric: "AED 25K", label: "Monthly Savings" }
        ],
        prerequisites: [
            "Twilio account with phone number",
            "OpenAI API Key (GPT-4)",
            "ElevenLabs API for voice synthesis",
            "Google Calendar or reservation management system"
        ],
        instructions: [
            "Set up Twilio phone number and configure call routing.",
            "Design conversation flow with restaurant-specific menus and policies.",
            "Configure table availability checks against the reservation system.",
            "Set up WhatsApp confirmation and reminder workflows.",
            "Test with 50+ sample calls before going live.",
            "Gradual rollout: start with 25% of calls, scale to 100% in 2 weeks."
        ]
    },
    {
        id: "whatsapp-customer-support-automation",
        title: "WhatsApp Customer Support Automation for E-Commerce",
        shortDescription: "AI-powered WhatsApp support bot handling 85% of customer inquiries without human intervention.",
        fullDescription: "A fast-growing UAE e-commerce brand was drowning in 500+ WhatsApp messages daily — order status inquiries, returns, product questions, and complaints. n8nera built an AI-powered WhatsApp chatbot that handles 85% of inquiries autonomously, with seamless handoff to human agents for complex cases.",
        image: "/images/portfolio/whatsapp-support-automation.svg",
        category: "AI Agents",
        industry: "E-commerce",
        challenge: "500+ daily WhatsApp messages required 3 full-time support staff. Average response time was 2 hours during peak periods. Customer satisfaction was declining, and support costs were AED 18,000/month.",
        solution: "n8nera built a GPT-4-powered WhatsApp chatbot using n8n + WhatsApp Business API + Shopify + Zendesk. The bot handles order tracking, product inquiries, return requests, and FAQs instantly. Complex issues are seamlessly handed off to human agents with full conversation context.",
        keyFeatures: [
            { title: "AI Intent Classification", description: "GPT-4 understands customer intent from free-form messages — not just keywords, but actual meaning.", icon: Brain },
            { title: "Order Status Lookup", description: "Customer sends order number → bot fetches status from Shopify → sends real-time update with tracking link.", icon: ShoppingCart },
            { title: "Automated Returns", description: "Bot guides customer through return process, generates return label, and creates Zendesk ticket.", icon: FileText },
            { title: "Human Handoff", description: "When the bot can't resolve (15% of cases), it transfers to a human with full conversation context.", icon: Users }
        ],
        nodesUsed: [
            { name: "WhatsApp Cloud API", description: "Receives and sends messages.", icon: MessageCircle },
            { name: "OpenAI Chat Model", description: "Understands intent and generates responses.", icon: Brain },
            { name: "Shopify", description: "Looks up order data.", icon: ShoppingCart },
            { name: "Zendesk", description: "Creates tickets for human handoff.", icon: Headphones }
        ],
        results: [
            { metric: "85%", label: "Auto-Resolution Rate" },
            { metric: "<30s", label: "Average Response Time" },
            { metric: "60%", label: "Support Cost Reduction" },
            { metric: "4.7/5", label: "Customer Satisfaction" }
        ],
        prerequisites: [
            "WhatsApp Business API access",
            "OpenAI API Key",
            "Shopify store API credentials",
            "Zendesk or similar helpdesk (optional)"
        ],
        instructions: [
            "Configure WhatsApp Business API and verify phone number.",
            "Build intent classification workflow with GPT-4.",
            "Connect Shopify for order status lookups.",
            "Create response templates for common inquiries.",
            "Set up human handoff workflow with Zendesk integration.",
            "Test with 100+ sample conversations before launch."
        ]
    },
    {
        id: "sales-pipeline-automation-hubspot",
        title: "Automated Sales Pipeline & Lead Nurturing for SaaS Startup",
        shortDescription: "Full-funnel sales automation from lead capture to deal closed — doubling conversion rate in 60 days.",
        fullDescription: "A UAE-based SaaS startup was struggling to manage their growing lead volume. With 80+ leads/week and a 4-person sales team, follow-ups were inconsistent and many leads went cold. n8nera built a complete sales automation system that captures leads, scores them with AI, nurtures with personalized sequences, and manages the deal pipeline automatically.",
        image: "/images/portfolio/sales-pipeline-hubspot.svg",
        category: "CRM & Sales",
        industry: "SaaS",
        challenge: "The startup received 80+ leads weekly from their website, LinkedIn, and partner referrals. With only 4 sales reps, response time averaged 6 hours, and 60% of leads never received a second follow-up. Conversion rate was 3.2%.",
        solution: "n8nera built an end-to-end sales automation pipeline using n8n + HubSpot + LinkedIn Sales Navigator + WhatsApp + GPT-4. The system captures leads from all channels, AI-scores them, assigns to reps, and runs personalized nurture sequences until the deal is won or lost.",
        keyFeatures: [
            { title: "AI Lead Scoring", description: "GPT-4 analyzes company data, message content, and behavior signals to score leads 0-100 in real-time.", icon: Brain },
            { title: "Automated Assignment", description: "Hot leads (80+) go to senior reps instantly. Warm leads enter nurture sequence. Cold leads get newsletter.", icon: Users },
            { title: "Multi-Channel Nurture", description: "Personalized email + WhatsApp sequences over 21 days, adapting content based on engagement.", icon: MessageCircle },
            { title: "Pipeline Analytics", description: "Weekly automated reports with pipeline value, conversion by source, rep performance, and forecast.", icon: BarChart3 }
        ],
        nodesUsed: [
            { name: "Webhook", description: "Captures leads from all sources.", icon: Cloud },
            { name: "OpenAI Chat Model", description: "Scores and enriches leads.", icon: Brain },
            { name: "HubSpot", description: "Manages pipeline and deals.", icon: Users },
            { name: "Gmail + WhatsApp", description: "Multi-channel nurture sequences.", icon: MessageCircle }
        ],
        results: [
            { metric: "2x", label: "Conversion Rate (3.2% → 6.8%)" },
            { metric: "<2min", label: "Lead Response Time" },
            { metric: "100%", label: "Follow-Up Compliance" },
            { metric: "$45K", label: "Additional MRR in 60 Days" }
        ],
        prerequisites: [
            "HubSpot CRM (Free or Starter tier)",
            "OpenAI API Key",
            "WhatsApp Business API",
            "Google Mail / Outlook account"
        ],
        instructions: [
            "Set up HubSpot pipeline stages matching your sales process.",
            "Configure lead capture webhooks for website, LinkedIn, and referrals.",
            "Build AI scoring workflow with industry-specific criteria.",
            "Create multi-channel nurture sequences in n8n.",
            "Set up automated reporting with weekly PDF generation.",
            "Train sales team on the new automated pipeline."
        ]
    },
    {
        id: "multi-location-business-automation",
        title: "Multi-Location Business Operations Automation",
        shortDescription: "Centralized operations automation for a retail chain with 6 UAE locations — inventory, staffing, and reporting unified.",
        fullDescription: "A UAE retail chain with 6 locations across Dubai, Abu Dhabi, and Sharjah was struggling with disconnected operations. Each store managed inventory, staffing, and sales reporting independently, leading to stock imbalances, overstaffing, and delayed management visibility. n8nera centralized all operations into automated n8n workflows.",
        image: "/images/portfolio/multi-location-automation.svg",
        category: "Workflow Automation",
        industry: "E-commerce",
        challenge: "6 retail locations, each with separate inventory systems, staffing spreadsheets, and manual reporting. Head office received daily reports via email — if managers remembered to send them. Stock transfers between locations were requested by phone. Monthly reconciliation took 3 days.",
        solution: "n8nera built a centralized automation hub that connects all 6 POS systems, syncs inventory in real-time, automates daily reporting, manages inter-store transfers, and provides the head office with a live operational dashboard.",
        keyFeatures: [
            { title: "Real-Time Inventory Sync", description: "All 6 locations share a unified inventory view. When stock is low at one location, it checks availability at others.", icon: ShoppingCart },
            { title: "Automated Daily Reports", description: "Sales, inventory, and staffing reports generated and sent to management at 9 PM daily — no manual effort.", icon: BarChart3 },
            { title: "Smart Staff Scheduling", description: "Based on historical sales data, suggests optimal staffing for each location and day of week.", icon: Users },
            { title: "Inter-Store Transfer Automation", description: "Low stock alert → check other locations → request transfer → update both inventories → confirm.", icon: Building2 }
        ],
        nodesUsed: [
            { name: "HTTP Request", description: "Connects to POS APIs at each location.", icon: Cloud },
            { name: "Google Sheets", description: "Centralized data hub for reporting.", icon: FileText },
            { name: "WhatsApp Cloud API", description: "Alerts and transfer approvals.", icon: MessageCircle },
            { name: "Schedule Trigger", description: "Automated daily reporting.", icon: Clock }
        ],
        results: [
            { metric: "40%", label: "Stock-Out Reduction" },
            { metric: "3 days→0", label: "Reconciliation Time" },
            { metric: "AED 35K", label: "Monthly Savings" },
            { metric: "Real-time", label: "Management Visibility" }
        ],
        prerequisites: [
            "POS system with API access at each location",
            "Google Workspace or similar for centralized reporting",
            "WhatsApp Business API for team communication",
            "n8n instance capable of handling multiple concurrent workflows"
        ],
        instructions: [
            "Connect all POS systems to n8n via API integrations.",
            "Build centralized inventory database with real-time sync.",
            "Create automated daily reporting workflow.",
            "Set up low-stock detection and inter-store transfer automation.",
            "Configure management dashboard with key metrics.",
            "Train store managers on the new system."
        ]    }
];