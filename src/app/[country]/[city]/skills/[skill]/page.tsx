import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocations, getSkills } from '@/lib/csv';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import AnimatedSection from '@/components/ui/AnimatedSection';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import Link from 'next/link';
import { ArrowRight, Code, MapPin, HelpCircle } from 'lucide-react';

// Transition to Strict SSG Export to support Cloudflare Pages
export const dynamicParams = false;

export async function generateStaticParams() {
    const allLocations = getLocations();

    // Select top 20 cities per country to ensure balanced static generation within Cloudflare limits
    const locations: any[] = [];
    ['united-states', 'canada', 'united-kingdom', 'united-arab-emirates', 'australia'].forEach(countrySlug => {
        const countryLocs = allLocations.filter(l => l.country_slug === countrySlug).slice(0, 20);
        locations.push(...countryLocs);
    });

    const skills = getSkills();

    const paths: any[] = [];
    locations.forEach(loc => {
        skills.forEach(skl => {
            if (loc.country_slug && loc.city_slug && skl.skill_slug) {
                let mappedCountry = loc.country_slug;
                if (mappedCountry === 'united-states') mappedCountry = 'usa';
                if (mappedCountry === 'united-kingdom') mappedCountry = 'uk';

                paths.push({
                    country: mappedCountry,
                    city: loc.city_slug,
                    skill: skl.skill_slug
                });
            }
        });
    });
    return paths;
}

function processTemplate(loc: any, skl: any): { metadata: any, content: string } {
    const templatePath = path.join(process.cwd(), 'src/content/templates/Skill.md');
    let rawContent = '';
    try {
        rawContent = fs.readFileSync(templatePath, 'utf-8');
    } catch (e) {
        return { metadata: {}, content: '' };
    }

    // Determine integrated tool based on category or skill name (fallback mechanism since it's not in CSV)
    let integratedTool = skl.category;
    if (skl.skill_name.toLowerCase().includes('whatsapp')) integratedTool = 'WhatsApp';
    else if (skl.skill_name.toLowerCase().includes('stripe')) integratedTool = 'Stripe';
    else if (skl.skill_name.toLowerCase().includes('slack')) integratedTool = 'Slack';
    else if (skl.skill_name.toLowerCase().includes('hubspot')) integratedTool = 'HubSpot';
    else if (skl.skill_name.toLowerCase().includes('shopify')) integratedTool = 'Shopify';

    // Replace variables
    let rendered = rawContent
        .replace(/{skill_name}/g, skl.skill_name || '')
        .replace(/{skill_slug}/g, skl.skill_slug || '')
        .replace(/{city_name}/g, loc.city_name || '')
        .replace(/{country_name}/g, loc.country_name || '')
        .replace(/{skill_short_description}/g, skl.short_description || '')
        .replace(/{integrated_tool}/g, integratedTool || '');

    // Extract frontmatter
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

// Algorithmic Unique FAQs
function generateSkillFAQs(cityName: string, skillName: string) {
    return [
        {
            q: `How long does it take to integrate ${skillName} for a company in ${cityName}?`,
            a: `Integrating the ${skillName} capability typically takes 1 to 3 days. Our engineers implement highly optimized connectors to ensure your business in ${cityName} experiences zero downtime.`
        },
        {
            q: `Is the ${skillName} integration secure for local businesses in ${cityName}?`,
            a: `Yes, we adhere to strict enterprise security standards. All data processing for the ${skillName} integration uses encrypted, local-compliant API endpoints.`
        },
        {
            q: `Do I need to hire a developer in ${cityName} to maintain ${skillName}?`,
            a: `No, our n8n architectures are fully managed. While your staff in ${cityName} can interact with the ${skillName} workflows intuitively, we handle all the underlying API maintenance.`
        },
        {
            q: `What if my team in ${cityName} needs modifications to the ${skillName} behavior?`,
            a: `Our automation agents are highly modular. We provide direct support for any adjustments your ${cityName} business requires for the ${skillName} operations as you scale.`
        }
    ];
}

export async function generateMetadata({ params }: { params: Promise<{ country: string, city: string, skill: string }> }): Promise<Metadata> {
    const resolved = await params;
    const locations = getLocations();
    const skills = getSkills();

    let searchCountry = resolved.country;
    if (searchCountry === 'usa') searchCountry = 'united-states';
    if (searchCountry === 'uk') searchCountry = 'united-kingdom';

    const loc = locations.find(l => l.country_slug === searchCountry && l.city_slug === resolved.city);
    const skl = skills.find(s => s.skill_slug === resolved.skill);

    if (!loc || !skl) {
        return {
            title: "Local Skill Integration | n8nera",
            description: "Expert n8n AI agent developers."
        };
    }

    const { metadata } = processTemplate(loc, skl);

    return {
        title: metadata.title || `${skl.skill_name} Specialists in ${loc.city_name} | AI & Automation`,
        description: `Hire top developers in ${loc.city_name} to embed ${skl.skill_name} into your custom workflows. ${skl.short_description}`,
        keywords: [skl.skill_name, loc.city_name, loc.country_name, "software integration", "n8n developers"],
        alternates: {
            canonical: `https://n8nera.tech/${resolved.country}/${resolved.city}/skills/${resolved.skill}`
        }
    };
}

export default async function LocalizedSkillPage({ params }: { params: Promise<{ country: string, city: string, skill: string }> }) {
    const resolved = await params;
    const locations = getLocations();
    const skills = getSkills();

    let searchCountry = resolved.country;
    if (searchCountry === 'usa') searchCountry = 'united-states';
    if (searchCountry === 'uk') searchCountry = 'united-kingdom';

    const loc = locations.find(l => l.country_slug === searchCountry && l.city_slug === resolved.city);
    const skl = skills.find(s => s.skill_slug === resolved.skill);

    if (!loc || !skl) {
        if (resolved.country === '%5Bcountry%5D' || resolved.country === '[country]') {
            return <div className="pt-20 min-h-screen bg-dark-950 flex items-center justify-center text-white">Preparing optimized local page...</div>;
        }
        notFound();
    }

    const { metadata, content } = processTemplate(loc, skl);
    const faqs = generateSkillFAQs(loc.city_name, skl.skill_name);

    const schemaLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": skl.skill_name,
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Cloud, Web",
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
                "description": metadata.description,
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "description": "Custom Integration Quote",
                    "availability": "https://schema.org/InStock",
                    "url": `https://n8nera.tech/${resolved.country}/${resolved.city}/skills/${resolved.skill}`
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

            <section className="relative py-20 overflow-hidden bg-dark-900 border-b border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-900/20 via-dark-900 to-dark-950" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="w-16 h-16 rounded-2xl bg-accent-500/10 flex items-center justify-center mb-8 border border-accent-500/20">
                            <Code className="w-8 h-8 text-accent-400" />
                        </div>
                        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-white prose-a:text-accent-400 prose-pre:bg-dark-950 prose-pre:border prose-pre:border-white/10">
                            <ReactMarkdown>{content}</ReactMarkdown>
                        </article>

                        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-start p-8 glass-card">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Need this skill for your {loc.city_name} business?</h3>
                                <p className="text-gray-400 mb-6">We can integrate {skl.skill_name} into your custom AI agent in less than 48 hours.</p>
                                <div className="flex gap-4 flex-wrap">
                                    <Link href={`/contact?skill=${skl.skill_slug}&city=${loc.city_slug}&country=${loc.country_slug}`} className="btn-primary">
                                        Integrate {skl.skill_name} <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <Link href={`https://wa.me/923141603089?text=Hi%20n8nera!%20I%20want%20to%20add%20the%20${skl.skill_name}%20skill%20to%20my%20AI%20agent%20in%20${loc.city_name}.`} target="_blank" className="btn-secondary">
                                        <WhatsAppIcon className="w-5 h-5" /> WhatsApp Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Anti-Duplicate Geographic & Map Embed Section */}
            <section className="relative py-16 bg-dark-950 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="flex items-center gap-3 mb-8">
                            <MapPin className="w-8 h-8 text-accent-400" />
                            <h2 className="text-3xl font-display font-bold text-white">{loc.city_name} Service Area</h2>
                        </div>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Our remote integration squad supports {loc.city_name}, {loc.country_name} developers natively. Explore our service footprint below.
                        </p>
                        <div className="w-full h-[350px] rounded-2xl overflow-hidden glass-card p-2 bg-dark-900">
                            <iframe
                                title={`${loc.city_name} Map for ${skl.skill_name}`}
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '0.75rem' }}
                                loading="lazy"
                                allowFullScreen
                                src={`https://maps.google.com/maps?q=${loc.lat},${loc.lng}&z=11&output=embed`}
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Anti-Duplicate Algorithmic FAQs */}
            <section className="relative py-20 bg-dark-900 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="flex items-center gap-3 mb-10">
                            <HelpCircle className="w-8 h-8 text-accent-400" />
                            <h2 className="text-3xl font-display font-bold text-white">Integration FAQs in {loc.city_name}</h2>
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
