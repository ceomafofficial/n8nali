export interface SEOContent {
    title: string;
    meta_description: string;
    primary_keyword: string;
    secondary_keywords: string[];
    search_intent: string;
}

export interface FAQItem {
    question?: string;
    answer?: string;
    q?: string;
    a?: string;
}

export interface ContentSection {
    heading: string;
    body: string;
}

export interface PageContent {
    h1: string;
    introduction: string;
    sections: ContentSection[];
    faq?: FAQItem[];
    call_to_action: string;
}

export interface PageSchema {
    type: string;
    structured_data: Record<string, unknown>;
}

export interface DataRequirement {
    tool: string;
    format: string;
}

export interface PageData {
    url: string;
    playbook_type: string;
    seo: SEOContent;
    content: PageContent;
    schema: PageSchema;
    internal_links: string[];
    related_pages: string[];
    data_requirements_used?: DataRequirement[];
}
