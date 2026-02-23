export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    industry: string;
    location: string;
    content: string;
    rating: number;
    image?: string;
    results?: {
        metric: string;
        value: string;
    }[];
}

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Ahmed Al-Rashid",
        role: "CEO",
        company: "Gulf Logistics Solutions",
        industry: "Logistics",
        location: "Dubai, UAE",
        content: "n8nera transformed our entire logistics operation. What used to take 6 hours of manual work daily now happens automatically in seconds. Their AI voice agent handles 80% of our customer tracking inquiries without any human intervention. The ROI was visible within the first month.",
        rating: 5,
        results: [
            { metric: "Manual Work Reduced", value: "85%" },
            { metric: "Customer Response Time", value: "< 30 sec" },
            { metric: "Cost Savings", value: "AED 150K/year" },
        ],
    },
    {
        id: "2",
        name: "Sarah Mitchell",
        role: "Operations Director",
        company: "Emirates Retail Group",
        industry: "E-commerce",
        location: "Abu Dhabi, UAE",
        content: "We were drowning in manual order processing across our 5 online stores. n8nera built an automation system that syncs inventory, processes orders, and updates customers automatically. We've scaled 3x without adding a single operations person.",
        rating: 5,
        results: [
            { metric: "Orders Processed/Day", value: "2,500+" },
            { metric: "Inventory Accuracy", value: "99.8%" },
            { metric: "Processing Time", value: "-90%" },
        ],
    },
    {
        id: "3",
        name: "Dr. Fatima Al-Zahra",
        role: "Medical Director",
        company: "Premium Healthcare Clinic",
        industry: "Healthcare",
        location: "Sharjah, UAE",
        content: "The appointment booking voice bot has been a game-changer for our clinic. Patients can book, reschedule, or cancel appointments 24/7 in Arabic or English. No-shows dropped by 40% thanks to the automated reminder system. Highly recommend n8nera.",
        rating: 5,
        results: [
            { metric: "No-Show Reduction", value: "40%" },
            { metric: "Appointments Booked After Hours", value: "35%" },
            { metric: "Staff Time Saved", value: "4 hrs/day" },
        ],
    },
    {
        id: "4",
        name: "Ravi Kapoor",
        role: "Founder",
        company: "TechStart UAE",
        industry: "SaaS",
        location: "Dubai, UAE",
        content: "As a startup, we needed enterprise-level automation without enterprise-level costs. n8nera's SaaS automation service gives us exactly that. They manage everything—we just focus on building our product. Their team truly understands what startups need.",
        rating: 5,
        results: [
            { metric: "Setup Time", value: "< 1 week" },
            { metric: "Workflows Running", value: "35+" },
            { metric: "Monthly Savings", value: "AED 25K" },
        ],
    },
    {
        id: "5",
        name: "Omar Hassan",
        role: "Sales Manager",
        company: "Dubai Properties Elite",
        industry: "Real Estate",
        location: "Dubai, UAE",
        content: "Our sales team was losing leads because of slow follow-up. n8nera automated our entire lead pipeline—from capture to qualification to assignment. The AI sales voice agent handles initial outreach and books qualified appointments directly into our calendars.",
        rating: 5,
        results: [
            { metric: "Lead Response Time", value: "< 2 min" },
            { metric: "Qualified Meetings Booked", value: "+65%" },
            { metric: "Lead Conversion", value: "+42%" },
        ],
    },
    {
        id: "6",
        name: "Lisa Chen",
        role: "Marketing Head",
        company: "Influencer Agency ME",
        industry: "Agency",
        location: "Abu Dhabi, UAE",
        content: "Managing social media automation for 50+ clients was chaos before n8nera. Now we have unified workflows, automated reporting, and real-time alerts. Our team can focus on strategy instead of manual tasks. They're not just vendors—they're partners.",
        rating: 5,
        results: [
            { metric: "Clients Managed", value: "50+" },
            { metric: "Reporting Time", value: "-75%" },
            { metric: "Campaign Efficiency", value: "+60%" },
        ],
    },
];
