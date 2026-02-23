import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocations, getServices } from '@/lib/csv';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import AnimatedSection from '@/components/ui/AnimatedSection';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import Link from 'next/link';
import { ArrowRight, MapPin, HelpCircle } from 'lucide-react';

// For 200,000+ pages, generating all paths at build time (SSG) will cause OOM errors.
// By returning [] and setting dynamicParams = true, Next.js uses On-Demand ISR.
// Transition to Strict SSG Export to support Cloudflare Pages
export const dynamicParams = false;

export async function generateStaticParams() {
    const locations = getLocations().slice(0, 100);
    const services = getServices();

    const paths: any[] = [];
    locations.forEach(loc => {
        services.forEach(srv => {
            if (loc.country_slug && loc.city_slug && srv.service_slug) {
                paths.push({
                    country: loc.country_slug,
                    city: loc.city_slug,
                    service: srv.service_slug
                });
            }
        });
    });
    return paths;
}

function processTemplate(loc: any, srv: any): { metadata: any, content: string } {
    const templatePath = path.join(process.cwd(), 'src/content/templates/Agent.md');
    let rawContent = '';
    try {
        rawContent = fs.readFileSync(templatePath, 'utf-8');
    } catch (e) {
        return { metadata: {}, content: '' };
    }

    // Advanced Localized Variable Replacement
    let rendered = rawContent
        .replace(/{service_name}/g, srv.service_name || '')
        .replace(/{city_name}/g, loc.city_name || '')
        .replace(/{country_name}/g, loc.country_name || '')
        .replace(/{service_slug}/g, srv.service_slug || '')
        .replace(/{city_slug}/g, loc.city_slug || '')
        .replace(/{country_slug}/g, loc.country_slug || '')
        .replace(/{short_description}/g, srv.short_description || '');

    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = rendered.match(frontmatterRegex);

    let metadata: any = {};
    let markdownContent = rendered;

    if (match) {
        const frontmatterStr = match[1] || '';
        markdownContent = match[2] || '';

        frontmatterStr.split('\n').forEach(line => {
            const colonIdx = line.indexOf(':');
            if (colonIdx !== -1) {
                const key = line.substring(0, colonIdx).trim();
                let val = line.substring(colonIdx + 1).trim();
                if (val.startsWith('"') && val.endsWith('"')) {
                    val = val.substring(1, val.length - 1);
                }
                metadata[key] = val;
            }
        });
    }

    return { metadata, content: markdownContent };
}

// Dynamically generate programmatic FAQs to prevent Duplicate Content penalties
function generateAlgorithmicFAQs(cityName: string, serviceName: string) {
    return [
        {
            q: `What is the typical timeline to implement ${serviceName} for businesses in ${cityName}?`,
            a: `Implementation timelines for ${serviceName} in ${cityName} usually range from 2 to 4 weeks depending on the complexity of your current tech stack. We offer a rapid deployment model for local businesses.`
        },
        {
            q: `Do you provide ongoing support for ${serviceName} local to the ${cityName} area?`,
            a: `Yes! While our systems are highly autonomous, we provide dedicated support and maintenance to ensure your ${serviceName} automation continues running flawlessly in the ${cityName} market.`
        },
        {
            q: `Can ${serviceName} integrate with the software tools my ${cityName} company already uses?`,
            a: `Absolutely. We use n8n to ensure your ${serviceName} seamlessly connects with virtually any API or platform your business in ${cityName} relies on.`
        },
        {
            q: `How does ${serviceName} provide a competitive advantage in ${cityName}?`,
            a: `By automating manual workflows with ${serviceName}, your ${cityName} business reduces operational overhead, speeds up response times, and allows your team to focus on high-level growth.`
        },
        {
            q: `What is the ROI of implementing a custom AI agent like ${serviceName} in ${cityName}?`,
            a: `Most of our clients in ${cityName} see a positive ROI within the first 3 months. By delegating repetitive tasks to the ${serviceName} agent, you reclaim thousands of human hours per year.`
        }
    ];
}

export async function generateMetadata({ params }: { params: Promise<{ country: string, city: string, service: string }> }): Promise<Metadata> {
    const resolved = await params;
    const locations = getLocations();
    const services = getServices();

    const loc = locations.find(l => l.country_slug === resolved.country && l.city_slug === resolved.city);
    const srv = services.find(s => s.service_slug === resolved.service);

    if (!loc || !srv) {
        return {
            title: "Local AI Agency | n8nera",
            description: "Expert n8n AI agent developers."
        };
    }

    const { metadata } = processTemplate(loc, srv);

    return {
        title: metadata.title || `${srv.service_name} Agency in ${loc.city_name} | n8nera`,
        description: `Looking to implement ${srv.service_name} in ${loc.city_name}? We build top-tier n8n automation and custom AI agents for ${loc.country_name} businesses. ${srv.short_description}`,
        keywords: [srv.service_name, loc.city_name, loc.country_name, "n8n automation", "AI agent agency"],
        alternates: {
            canonical: `https://n8nera.tech/${resolved.country}/${resolved.city}/${resolved.service}`
        }
    };
}

export default async function LocalizedAgentPage({ params }: { params: Promise<{ country: string, city: string, service: string }> }) {
    const resolved = await params;
    const locations = getLocations();
    const services = getServices();

    const loc = locations.find(l => l.country_slug === resolved.country && l.city_slug === resolved.city);
    const srv = services.find(s => s.service_slug === resolved.service);

    if (!loc || !srv) {
        if (resolved.country === '%5Bcountry%5D' || resolved.country === '[country]') {
            return <div className="pt-20 min-h-screen bg-dark-950 flex items-center justify-center text-white">Preparing optimized local page...</div>;
        }
        notFound();
    }

    const { metadata, content } = processTemplate(loc, srv);
    const faqs = generateAlgorithmicFAQs(loc.city_name, srv.service_name);

    const schemaLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": metadata.title || `${srv.service_name} in ${loc.city_name}`,
                "serviceType": srv.service_name,
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "n8nera",
                    "image": "https://n8nera.tech/logo.png",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": loc.city_name,
                        "addressCountry": loc.country_name
                    },
                    "priceRange": "$$$"
                },
                "areaServed": {
                    "@type": "City",
                    "name": loc.city_name
                },
                "description": metadata.description,
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "description": "Free Implementation Audit",
                    "availability": "https://schema.org/InStock",
                    "url": `https://n8nera.tech/${resolved.country}/${resolved.city}/${resolved.service}`
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "128"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": f.a
                    }
                }))
            }
        ]
    };

    return (
        <div className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLd) }} />

            {/* Premium Pattern Hero */}
            <section className="relative py-20 overflow-hidden bg-dark-950">
                <div className="absolute inset-0 bg-premium-pattern" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-white prose-a:text-accent-400">
                            <ReactMarkdown>{content}</ReactMarkdown>
                        </article>

                        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-start">
                            <Link href={`/contact?service=${srv.service_slug}&city=${loc.city_slug}&country=${loc.country_slug}`} className="btn-primary">
                                Book Free Audit Now <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href={`https://wa.me/923141603089?text=Hi%20n8nera!%20I%20am%20from%20${loc.city_name}%20and%20interested%20in%20${srv.service_name}.`} target="_blank" className="btn-secondary">
                                <WhatsAppIcon className="w-5 h-5" /> Chat on WhatsApp
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Anti-Duplicate Geographic & Map Embed Section */}
            <section className="relative py-16 bg-dark-900 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="flex items-center gap-3 mb-8">
                            <MapPin className="w-8 h-8 text-accent-400" />
                            <h2 className="text-3xl font-display font-bold text-white">Serving {loc.city_name} Businesses</h2>
                        </div>
                        <p className="text-gray-400 mb-8 max-w-2xl leading-relaxed">
                            We deploy highly tailored {srv.service_name} solutions optimized specifically for the unique economic footprint and local systems of {loc.city_name}, {loc.country_name}. See our local coverage zone below.
                        </p>
                        <div className="w-full h-[400px] rounded-2xl overflow-hidden glass-card p-2 bg-dark-950/50">
                            <iframe
                                title={`${loc.city_name} Coverage Map`}
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '0.75rem' }}
                                loading="lazy"
                                allowFullScreen
                                src={`https://maps.google.com/maps?q=${loc.lat},${loc.lng}&z=10&output=embed`}
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Anti-Duplicate Algorithmic FAQs */}
            <section className="relative py-20 bg-dark-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="flex items-center gap-3 mb-10">
                            <HelpCircle className="w-8 h-8 text-accent-400" />
                            <h2 className="text-3xl font-display font-bold text-white">Frequently Asked Questions in {loc.city_name}</h2>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <details key={idx} className="group glass-card overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-semibold hover:text-accent-300 transition-colors">
                                        {faq.q}
                                        <ArrowRight className="w-5 h-5 text-accent-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-4" />
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
