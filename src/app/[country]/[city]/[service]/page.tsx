import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocations, getServices, Location, Service } from '@/lib/csv';
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

    const services = getServices();
    const paths: { country: string; city: string; service: string }[] = [];
    locations.forEach(loc => {
        services.forEach(srv => {
            if (loc.country_slug && loc.city_slug && srv.service_slug) {
                let mappedCountry = loc.country_slug;
                if (mappedCountry === 'united-states') mappedCountry = 'usa';
                if (mappedCountry === 'united-kingdom') mappedCountry = 'uk';

                paths.push({
                    country: mappedCountry,
                    city: loc.city_slug,
                    service: srv.service_slug
                });
            }
        });
    });
    return paths;
}

function generateAlgorithmicFAQs(cityName: string, serviceName: string) {
    return [
        { q: `What is the typical timeline to implement ${serviceName} for businesses in ${cityName}?`, a: `Implementation timelines for ${serviceName} in ${cityName} usually range from 2 to 4 weeks depending on the complexity of your current tech stack. We offer a rapid deployment model for local businesses.` },
        { q: `Do you provide ongoing support for ${serviceName} local to the ${cityName} area?`, a: `Yes! While our systems are highly autonomous, we provide dedicated support and maintenance to ensure your ${serviceName} automation continues running flawlessly in the ${cityName} market.` },
        { q: `Can ${serviceName} integrate with the software tools my ${cityName} company already uses?`, a: `Absolutely. We use n8n to ensure your ${serviceName} seamlessly connects with virtually any API or platform your business in ${cityName} relies on.` },
        { q: `How does ${serviceName} provide a competitive advantage in ${cityName}?`, a: `By automating manual workflows with ${serviceName}, your ${cityName} business reduces operational overhead, speeds up response times, and allows your team to focus on high-level growth.` },
        { q: `What is the ROI of implementing a custom AI agent like ${serviceName} in ${cityName}?`, a: `Most of our clients in ${cityName} see a positive ROI within the first 3 months. By delegating repetitive tasks to the ${serviceName} agent, you reclaim thousands of human hours per year.` }
    ];
}

export async function generateMetadata({ params }: { params: Promise<{ country: string, city: string, service: string }> }): Promise<Metadata> {
    const resolved = await params;
    const loc = resolveLocation(resolved.country, resolved.city);
    const services = getServices();
    const srv = services.find(s => s.service_slug === resolved.service);

    if (!loc || !srv) {
        return { title: "Local AI Agency | n8nera", description: "Expert n8n AI agent developers." };
    }

    const { metadata } = await processPseoTemplate({ loc, item: srv, type: 'service' });

    return {
        title: metadata.title,
        description: metadata.description,
        keywords: metadata.keywords ? metadata.keywords.split(',').map(k => k.trim()) : [],
        alternates: { canonical: `https://n8nera.tech/${resolved.country}/${resolved.city}/${resolved.service}` }
    };
}

export default async function LocalizedAgentPage({ params }: { params: Promise<{ country: string, city: string, service: string }> }) {
    const resolved = await params;
    const loc = resolveLocation(resolved.country, resolved.city);
    const services = getServices();
    const srv = services.find(s => s.service_slug === resolved.service);

    if (!loc || !srv) {
        if (resolved.country === '%5Bcountry%5D' || resolved.country === '[country]') {
            return <div className="pt-20 min-h-screen bg-dark-950 flex items-center justify-center text-white">Preparing optimized local page...</div>;
        }
        notFound();
    }

    const { metadata, content } = await processPseoTemplate({ loc, item: srv, type: 'service' });
    const faqs = generateAlgorithmicFAQs(loc.city_name, srv.service_name);

    const schemaLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": metadata.title,
                "serviceType": srv.service_name,
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "n8nera",
                    "image": "https://n8nera.tech/logo.png",
                    "address": { "@type": "PostalAddress", "addressLocality": loc.city_name, "addressCountry": loc.country_name },
                    "priceRange": "$$$"
                },
                "areaServed": { "@type": "City", "name": loc.city_name },
                "description": metadata.description,
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Free Implementation Audit", "availability": "https://schema.org/InStock", "url": `https://n8nera.tech/${resolved.country}/${resolved.city}/${resolved.service}` },
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
                item_slug={srv.service_slug}
                item_name={srv.service_name}
                type="service"
            />

            <PseoMap 
                city_name={loc.city_name}
                country_name={loc.country_name}
                lat={loc.lat}
                lng={loc.lng}
                type="service"
                item_name={srv.service_name}
            />

            <PseoFaq 
                faqs={faqs}
                city_name={loc.city_name}
                type="service"
            />
        </div>
    );
}
