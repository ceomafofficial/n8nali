import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocations, getSkills, Location, Skill } from '@/lib/csv';
import { processPseoTemplate, resolveLocation } from '@/lib/pseo-utils';
import { PseoHero, PseoMap, PseoFaq } from '@/components/pseo/PseoComponents';

export const dynamicParams = false;

export async function generateStaticParams() {
    const allLocations = getLocations();
    const locations: Location[] = [];
    ['united-states', 'canada', 'united-kingdom', 'united-arab-emirates', 'australia'].forEach(countrySlug => {
        const countryLocs = allLocations.filter(l => l.country_slug === countrySlug).slice(0, 20);
        locations.push(...countryLocs);
    });

    const skills = getSkills();
    const paths: { country: string; city: string; skill: string }[] = [];
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

function generateSkillFAQs(cityName: string, skillName: string) {
    return [
        { q: `How long does it take to integrate ${skillName} for a company in ${cityName}?`, a: `Integrating the ${skillName} capability typically takes 1 to 3 days. Our engineers implement highly optimized connectors to ensure your business in ${cityName} experiences zero downtime.` },
        { q: `Is the ${skillName} integration secure for local businesses in ${cityName}?`, a: `Yes, we adhere to strict enterprise security standards. All data processing for the ${skillName} integration uses encrypted, local-compliant API endpoints.` },
        { q: `Do I need to hire a developer in ${cityName} to maintain ${skillName}?`, a: `No, our n8n architectures are fully managed. While your staff in ${cityName} can interact with the ${skillName} workflows intuitively, we handle all the underlying API maintenance.` },
        { q: `What if my team in ${cityName} needs modifications to the ${skillName} behavior?`, a: `Our automation agents are highly modular. We provide direct support for any adjustments your ${cityName} business requires for the ${skillName} operations as you scale.` }
    ];
}

export async function generateMetadata({ params }: { params: Promise<{ country: string, city: string, skill: string }> }): Promise<Metadata> {
    const resolved = await params;
    const loc = resolveLocation(resolved.country, resolved.city);
    const skills = getSkills();
    const skl = skills.find(s => s.skill_slug === resolved.skill);

    if (!loc || !skl) {
        return { title: "Local Skill Integration | n8nera", description: "Expert n8n AI agent developers." };
    }

    const { metadata } = await processPseoTemplate({ loc, item: skl, type: 'skill' });

    return {
        title: metadata.title,
        description: metadata.description,
        keywords: metadata.keywords ? metadata.keywords.split(',').map(k => k.trim()) : [],
        alternates: { canonical: `https://n8nera.tech/${resolved.country}/${resolved.city}/skills/${resolved.skill}` }
    };
}

export default async function LocalizedSkillPage({ params }: { params: Promise<{ country: string, city: string, skill: string }> }) {
    const resolved = await params;
    const loc = resolveLocation(resolved.country, resolved.city);
    const skills = getSkills();
    const skl = skills.find(s => s.skill_slug === resolved.skill);

    if (!loc || !skl) {
        if (resolved.country === '%5Bcountry%5D' || resolved.country === '[country]') {
            return <div className="pt-20 min-h-screen bg-dark-950 flex items-center justify-center text-white">Preparing optimized local page...</div>;
        }
        notFound();
    }

    const { metadata, content } = await processPseoTemplate({ loc, item: skl, type: 'skill' });
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
                    "address": { "@type": "PostalAddress", "addressLocality": loc.city_name, "addressCountry": loc.country_name },
                    "priceRange": "$$$"
                },
                "description": metadata.description,
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Custom Integration Quote", "availability": "https://schema.org/InStock", "url": `https://n8nera.tech/${resolved.country}/${resolved.city}/skills/${resolved.skill}` },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "128" }
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
            }
        ]
    };

    return (
        <div className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLd) }} />

            <PseoHero 
                content={content}
                city_name={loc.city_name}
                city_slug={loc.city_slug}
                country_slug={loc.country_slug}
                item_slug={skl.skill_slug}
                item_name={skl.skill_name}
                type="skill"
            />

            <PseoMap 
                city_name={loc.city_name}
                country_name={loc.country_name}
                lat={loc.lat}
                lng={loc.lng}
                type="skill"
                item_name={skl.skill_name}
            />

            <PseoFaq 
                faqs={faqs}
                city_name={loc.city_name}
                type="skill"
            />
        </div>
    );
}
