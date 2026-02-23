import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyN8neraSection from "@/components/sections/WhyN8neraSection";
import ProcessSection from "@/components/sections/ProcessSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import VoiceAgentsSection from "@/components/sections/VoiceAgentsSection";
import SecuritySection from "@/components/sections/SecuritySection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContentRichSection from "@/components/sections/ContentRichSection";

export const metadata: Metadata = {
  title: {
    absolute: "n8nera — #1 n8n Automation Agency | Save 20+ Hrs/Week ✓ Free Audit",
  },
  description:
    "Certified n8n automation agency trusted by 100+ businesses. AI workflows that save 20+ hrs/week & cut costs 60%. CRM, WhatsApp bots, AI voice agents & 400+ app integrations. USA, UAE, Canada & Netherlands. Book your free automation audit today →",
  openGraph: {
    title: "n8nera — #1 n8n Automation Agency | 200+ Workflows Delivered",
    description:
      "AI workflows that save 20+ hrs/week & cut costs 60%. CRM, WhatsApp, AI voice agents. Trusted by 100+ businesses. Free automation audit available →",
    url: "https://n8nera.tech/",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyN8neraSection />
      <ProcessSection />
      <VoiceAgentsSection />
      <ContentRichSection />
      <IndustriesSection />
      <SecuritySection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
