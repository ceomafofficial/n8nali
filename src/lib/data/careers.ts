import type { LucideIcon } from "lucide-react";
import {
  Laptop,
  DollarSign,
  GraduationCap,
  Clock,
  Heart,
  Coffee,
  Rocket,
  Users,
  Zap,
  Globe,
} from "lucide-react";

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────

export interface CareerBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CareerValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface OpenPositionSummary {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
}

export interface OpenPositionDetail extends OpenPositionSummary {
  experience: string;
  responsibilities: string[];
  niceToHave: string[];
}

// ──────────────────────────────────────────────
// Benefits & Values
// ──────────────────────────────────────────────

export const benefits: CareerBenefit[] = [
  {
    icon: Laptop,
    title: "Remote-First",
    description:
      "Work from anywhere in the world. We believe in flexibility and trust.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description:
      "Market-rate salaries with performance bonuses and profit sharing.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description:
      "$1,000/year for courses, certifications, and conferences.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description:
      "Async-first culture. Work when you're most productive.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive health coverage and mental wellness support.",
  },
  {
    icon: Coffee,
    title: "Team Retreats",
    description:
      "Annual team meetups in exciting destinations worldwide.",
  },
];

export const values: CareerValue[] = [
  {
    icon: Rocket,
    title: "Ship Fast, Learn Faster",
    description:
      "We move quickly, iterate based on feedback, and continuously improve.",
  },
  {
    icon: Users,
    title: "Customer Obsession",
    description:
      "Every decision starts with 'How does this help our clients succeed?'",
  },
  {
    icon: Zap,
    title: "Automate Everything",
    description:
      "We practice what we preach. If it can be automated, it should be.",
  },
  {
    icon: Globe,
    title: "Think Global",
    description:
      "We serve clients worldwide and embrace diverse perspectives.",
  },
];

// ──────────────────────────────────────────────
// Open Positions (shared between list & detail)
// ──────────────────────────────────────────────

export const openPositions: OpenPositionDetail[] = [
  {
    id: "senior-n8n-developer",
    title: "Senior n8n Developer",
    department: "Engineering",
    location: "Remote (Worldwide)",
    type: "Full-time",
    salary: "$60K - $90K",
    experience: "3+ years",
    description:
      "We're looking for an experienced n8n developer to design and build complex workflows for our enterprise clients. You'll lead automation architecture decisions and mentor junior developers.",
    responsibilities: [
      "Design and implement complex n8n workflows for enterprise clients",
      "Lead automation architecture decisions and best practices",
      "Integrate n8n with various APIs, databases, and third-party services",
      "Mentor junior developers and conduct code reviews",
      "Document workflows and create technical specifications",
      "Collaborate with clients to understand requirements and propose solutions",
      "Troubleshoot and optimize existing workflows for performance",
      "Stay updated with n8n releases and new node capabilities",
    ],
    requirements: [
      "3+ years of experience with n8n or similar workflow automation platforms",
      "Strong JavaScript/TypeScript programming skills",
      "Extensive experience with REST APIs and webhooks",
      "Database knowledge (PostgreSQL, MongoDB, MySQL)",
      "Understanding of authentication protocols (OAuth, JWT, API keys)",
      "Experience with cloud platforms (AWS, GCP, or Azure)",
      "Excellent problem-solving and debugging abilities",
      "Strong written and verbal communication skills",
    ],
    niceToHave: [
      "Experience with Make (Integromat) or Zapier",
      "Knowledge of Docker and containerization",
      "Familiarity with CI/CD pipelines",
      "Previous consulting or agency experience",
    ],
  },
  {
    id: "ai-voice-agent-engineer",
    title: "AI Voice Agent Engineer",
    department: "AI & Voice",
    location: "Remote (Worldwide)",
    type: "Full-time",
    salary: "$70K - $100K",
    experience: "3+ years",
    description:
      "Join our AI team to build intelligent voice agents using cutting-edge technology. You'll work with NLP, speech-to-text, and conversational AI to create human-like phone interactions.",
    responsibilities: [
      "Design and develop AI-powered voice agents for various use cases",
      "Implement natural language understanding and dialog management",
      "Integrate voice agents with telephony systems (Twilio, Vonage)",
      "Train and fine-tune conversation models for specific domains",
      "Build real-time speech-to-text and text-to-speech pipelines",
      "Develop context-aware conversation flows",
      "Monitor and optimize voice agent performance metrics",
      "Collaborate with clients to customize voice personalities",
    ],
    requirements: [
      "3+ years experience in conversational AI or voice technology",
      "Strong Python programming skills",
      "Experience with NLP frameworks (spaCy, Hugging Face, etc.)",
      "Knowledge of speech processing and telephony protocols (SIP, WebRTC)",
      "Experience with cloud AI services (OpenAI, Google Cloud AI, AWS)",
      "Understanding of dialog management and intent recognition",
      "Familiarity with voice synthesis technologies",
      "Strong analytical and problem-solving skills",
    ],
    niceToHave: [
      "Experience with Twilio or Vonage APIs",
      "Knowledge of LangChain or similar frameworks",
      "Background in linguistics or speech science",
      "Multi-language support experience (Arabic, Hindi, Urdu)",
    ],
  },
  {
    id: "solutions-architect",
    title: "Solutions Architect",
    department: "Client Success",
    location: "Remote (UAE Preferred)",
    type: "Full-time",
    salary: "$80K - $120K",
    experience: "5+ years",
    description:
      "We need a Solutions Architect to design automation solutions for enterprise clients. You'll bridge technical and business requirements, leading discovery sessions and creating comprehensive solution designs.",
    responsibilities: [
      "Lead technical discovery sessions with enterprise clients",
      "Design end-to-end automation solutions aligned with business goals",
      "Create detailed technical specifications and architecture diagrams",
      "Present solutions to C-level executives and technical stakeholders",
      "Collaborate with development teams on implementation",
      "Identify opportunities for automation and process optimization",
      "Develop proof-of-concepts and pilot programs",
      "Build long-term technical relationships with key accounts",
    ],
    requirements: [
      "5+ years in solutions architecture or technical consulting",
      "Strong understanding of enterprise software integration",
      "Experience with CRM, ERP, and business systems",
      "Excellent presentation and communication skills",
      "Ability to translate business requirements into technical solutions",
      "Experience with workflow automation concepts",
      "Strong project management capabilities",
      "Bachelor's degree in Computer Science or related field",
    ],
    niceToHave: [
      "Arabic language proficiency",
      "Experience in the UAE/GCC market",
      "Knowledge of n8n or similar platforms",
      "Previous pre-sales or consulting experience",
    ],
  },
  {
    id: "automation-consultant",
    title: "Automation Consultant",
    department: "Consulting",
    location: "Remote (MENA Region)",
    type: "Full-time",
    salary: "$50K - $70K",
    experience: "2+ years",
    description:
      "Work directly with clients to analyze their processes and implement automation solutions. You'll conduct assessments, recommend improvements, and guide implementation.",
    responsibilities: [
      "Conduct business process assessments and audits",
      "Document current workflows and identify automation opportunities",
      "Develop automation roadmaps and priority matrices",
      "Guide clients through implementation and change management",
      "Provide training on automation tools and best practices",
      "Track automation ROI and success metrics",
      "Build and maintain client relationships",
      "Create case studies and success stories",
    ],
    requirements: [
      "2+ years in business process consulting or analysis",
      "Experience with workflow automation tools",
      "Strong analytical and documentation skills",
      "Excellent client-facing and presentation abilities",
      "Understanding of business operations and KPIs",
      "Ability to work independently and manage multiple projects",
      "Strong attention to detail",
      "Bachelor's degree in Business or related field",
    ],
    niceToHave: [
      "Experience with n8n, Zapier, or Make",
      "Arabic language skills",
      "Previous agency or consulting experience",
      "Six Sigma or process improvement certification",
    ],
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote (Worldwide)",
    type: "Full-time",
    salary: "$50K - $80K",
    experience: "3+ years",
    description:
      "Build beautiful, responsive web applications using Next.js, React, and modern frontend technologies. You'll create custom dashboards, client portals, and internal tools.",
    responsibilities: [
      "Develop responsive web applications using React and Next.js",
      "Create custom automation dashboards and monitoring UIs",
      "Build client portals for workflow management",
      "Implement pixel-perfect designs with attention to UX",
      "Optimize applications for performance and accessibility",
      "Write clean, maintainable, and well-documented code",
      "Collaborate with designers and backend developers",
      "Conduct code reviews and mentor junior developers",
    ],
    requirements: [
      "3+ years of frontend development experience",
      "Expert-level React and Next.js skills",
      "Strong CSS/Tailwind CSS proficiency",
      "Experience with TypeScript",
      "Understanding of responsive design principles",
      "Familiarity with REST APIs and data fetching",
      "Eye for design and attention to detail",
      "Experience with Git and collaborative development",
    ],
    niceToHave: [
      "Experience with Framer Motion or animation libraries",
      "Knowledge of backend development (Node.js)",
      "UI/UX design skills",
      "Open source contributions",
    ],
  },
  {
    id: "sales-development-representative",
    title: "Sales Development Representative",
    department: "Sales",
    location: "Remote (UAE/GCC)",
    type: "Full-time",
    salary: "$40K - $60K + Commission",
    experience: "1+ years",
    description:
      "Generate and qualify leads for our automation services. You'll be the first point of contact for prospective clients, understanding their needs and connecting them with solutions.",
    responsibilities: [
      "Generate leads through outbound prospecting and campaigns",
      "Qualify inbound leads and schedule discovery calls",
      "Research target accounts and identify decision-makers",
      "Conduct initial discovery calls to understand client needs",
      "Maintain accurate CRM records and activity logs",
      "Collaborate with marketing on lead generation campaigns",
      "Meet or exceed monthly meeting and pipeline targets",
      "Stay informed about automation trends and use cases",
    ],
    requirements: [
      "1+ years in B2B sales or SDR role",
      "Excellent English verbal and written communication",
      "Experience with CRM tools (HubSpot, Salesforce)",
      "Strong organizational and time management skills",
      "Ability to learn and articulate technical concepts",
      "Self-motivated with a results-driven mindset",
      "Comfortable with cold outreach and rejection",
      "Tech-savvy and quick learner",
    ],
    niceToHave: [
      "Arabic language proficiency",
      "Experience in SaaS or technology sales",
      "Knowledge of automation or AI industry",
      "Previous startup experience",
    ],
  },
];

/**
 * Helper to get a summary-only view of positions for the careers listing page.
 * Avoids shipping full detail fields (responsibilities, niceToHave) to the list page.
 */
export function getPositionSummaries(): OpenPositionSummary[] {
  return openPositions.map(
    ({ id, title, department, location, type, salary, description, requirements }) => ({
      id,
      title,
      department,
      location,
      type,
      salary,
      description,
      requirements,
    })
  );
}

/**
 * Find a specific position by ID. Returns undefined if not found.
 */
export function getPositionById(id: string): OpenPositionDetail | undefined {
  return openPositions.find((p) => p.id === id);
}
