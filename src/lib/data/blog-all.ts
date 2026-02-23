/**
 * Centralized blog post accessor.
 * Import `allBlogPosts` (pre-sorted, newest first) from this file
 * instead of manually spreading every blog data source.
 */
import type { BlogPost } from "./blog";
import { blogPosts } from "./blog";
import { additionalBlogPosts } from "./blog-additional";
import { selfHostN8nPost } from "./blog-selfhost-n8n";
import { n8nVsZapierPost } from "./blog-n8n-vs-zapier";
import { n8nVsMakePost } from "./blog-n8n-vs-make";
import { n8nEcommercePost } from "./blog-n8n-ecommerce";
import { automationAgencyPosts } from "./blog-automation-agency";
import { blogSeoBoostPosts } from "./blog-seo-boost";
import { realEstateCrmPost } from "./blog-real-estate-crm";
import { automationToolsAbuDhabiPost } from "./blog-automation-tools-abudhabi";
import { n8nGithubPost } from "./blog-n8n-github";
import { openclawTelegramWhatsappPost } from "./blog-openclaw-agent";
import { integrateOpenclawN8nPost } from "./blog-integrate-openclaw";
import { n8nServicesUaePost } from "./blog-n8n-services-uae";
import { n8nAutomationIdeasPost } from "./blog-n8n-automation-ideas";
import { n8nRealEstatePost } from "./blog-n8n-real-estate";
import { realEstateChatbotN8nPost } from "./blog-real-estate-chatbot";
import { lookingForN8nDeveloperPost } from "./blog-looking-for-n8n-developer";
import { needN8nHelpPost } from "./blog-need-n8n-help";
import { businessProcessAutomationPost } from "./blog-business-process-automation";
import { crmAutomationExpertsUaePost } from "./blog-crm-automation-experts-uae";
import { processManagementAutomationUaePost } from "./blog-process-management-automation-uae";

/** Every blog post, sorted newest-first by `publishedAt`. */
export const allBlogPosts: BlogPost[] = [
    ...blogPosts,
    ...additionalBlogPosts,
    selfHostN8nPost,
    n8nVsZapierPost,
    n8nVsMakePost,
    n8nEcommercePost,
    ...automationAgencyPosts,
    ...blogSeoBoostPosts,
    realEstateCrmPost,
    automationToolsAbuDhabiPost,
    n8nGithubPost,
    openclawTelegramWhatsappPost,
    integrateOpenclawN8nPost,
    n8nServicesUaePost,
    n8nAutomationIdeasPost,
    n8nRealEstatePost,
    realEstateChatbotN8nPost,
    lookingForN8nDeveloperPost,
    needN8nHelpPost,
    businessProcessAutomationPost,
    crmAutomationExpertsUaePost,
    processManagementAutomationUaePost,
].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);
