import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { ArrowRight, MapPin, HelpCircle, Code } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

interface PseoHeroProps {
    content: string;
    city_name: string;
    city_slug: string;
    country_slug: string;
    item_slug: string;
    item_name: string;
    type: 'service' | 'skill';
}

export function PseoHero({ content, city_name, city_slug, country_slug, item_slug, item_name, type }: PseoHeroProps) {
    const isSkill = type === 'skill';
    
    return (
        <section className={`relative py-12 sm:py-20 overflow-hidden ${isSkill ? 'bg-[#f8f9fa] border-b border-gray-100' : 'bg-white'}`}>
            {isSkill ? (
                <div className="absolute inset-0 bg-gradient-to-b from-[#4285F4]/5 via-[#f8f9fa] to-[#f8f9fa]" />
            ) : (
                <>
                    <div className="absolute inset-0 bg-[#f8f9fa] opacity-30" />
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#4285F4]/10 rounded-full blur-[120px]" />
                </>
            )}

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    {isSkill && (
                        <div className="w-16 h-16 rounded-2xl bg-[#4285F4]/10 flex items-center justify-center mb-8 border border-[#4285F4]/20">
                            <Code className="w-8 h-8 text-[#4285F4]" />
                        </div>
                    )}
                    
                    <article className={`prose prose-lg max-w-none prose-headings:font-display prose-headings:text-gray-900 prose-a:text-[#4285F4] prose-p:text-gray-800 prose-li:text-gray-800 ${isSkill ? 'prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200 prose-pre:text-gray-800' : ''}`}>
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </article>

                    <div className={`mt-12 flex flex-col sm:flex-row gap-4 justify-start ${isSkill ? 'p-8 google-card bg-white' : ''}`}>
                        {isSkill ? (
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Need this skill for your {city_name} business?</h3>
                                <p className="text-gray-700 mb-6">We can integrate {item_name} into your custom AI agent in less than 48 hours.</p>
                                <div className="flex gap-4 flex-wrap">
                                    <Link href={`/contact?skill=${item_slug}&city=${city_slug}&country=${country_slug}`} className="btn-primary">
                                        Integrate {item_name} <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <Link href={`https://wa.me/923141603089?text=Hi%20n8nera!%20I%20want%20to%20add%20the%20${item_name}%20skill%20to%20my%20AI%20agent%20in%20${city_name}.`} target="_blank" className="btn-secondary">
                                        <WhatsAppIcon className="w-5 h-5" /> WhatsApp Us
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <>
                                <Link href={`/contact?service=${item_slug}&city=${city_slug}&country=${country_slug}`} className="btn-primary">
                                    Book Free Audit Now <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link href={`https://wa.me/923141603089?text=Hi%20n8nera!%20I%20am%20from%20${city_name}%20and%20interested%20in%20${item_name}.`} target="_blank" className="btn-secondary">
                                    <WhatsAppIcon className="w-5 h-5" /> Chat on WhatsApp
                                </Link>
                            </>
                        )}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

interface PseoMapProps {
    city_name: string;
    country_name: string;
    lat: string;
    lng: string;
    type: 'service' | 'skill';
    item_name: string;
}

export function PseoMap({ city_name, country_name, lat, lng, type, item_name }: PseoMapProps) {
    const isSkill = type === 'skill';
    
    return (
        <section className={`relative py-12 sm:py-16 ${isSkill ? 'bg-white' : 'bg-[#f8f9fa]'} border-t border-gray-100`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <div className="flex items-center gap-3 mb-8">
                        <MapPin className="w-8 h-8 text-[#EA4335]" />
                        <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900">
                            {isSkill ? `${city_name} Service Area` : `Serving ${city_name} Businesses`}
                        </h2>
                    </div>
                    <p className="text-gray-700 mb-8 max-w-2xl leading-relaxed">
                        {isSkill 
                            ? `Our remote integration squad supports ${city_name}, ${country_name} developers natively. Explore our service footprint below.`
                            : `We deploy highly tailored ${item_name} solutions optimized specifically for the unique economic footprint and local systems of ${city_name}, ${country_name}. See our local coverage zone below.`
                        }
                    </p>
                    <div className={`w-full ${isSkill ? 'h-[250px] sm:h-[350px]' : 'h-[300px] sm:h-[400px]'} rounded-2xl overflow-hidden google-card p-2 bg-white`}>
                        <iframe
                            title={`${city_name} Map`}
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '0.75rem' }}
                            loading="lazy"
                            allowFullScreen
                            src={`https://maps.google.com/maps?q=${lat},${lng}&z=${isSkill ? '11' : '10'}&output=embed`}
                        />
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

interface FaqItem { q: string; a: string; }
interface PseoFaqProps {
    faqs: FaqItem[];
    city_name: string;
    type: 'service' | 'skill';
}

export function PseoFaq({ faqs, city_name, type }: PseoFaqProps) {
    const isSkill = type === 'skill';
    
    return (
        <section className={`relative py-12 sm:py-20 ${isSkill ? 'bg-[#f8f9fa] border-t border-gray-100' : 'bg-white'}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <div className="flex items-center gap-3 mb-10">
                        <HelpCircle className="w-8 h-8 text-[#FBBC04]" />
                        <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900">
                            {isSkill ? `Integration FAQs in ${city_name}` : `Frequently Asked Questions in ${city_name}`}
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <details key={idx} className="group google-card overflow-hidden bg-white">
                                <summary className="flex items-center justify-between p-6 cursor-pointer text-gray-900 font-semibold hover:text-[#4285F4] transition-colors">
                                    {faq.q}
                                    <ArrowRight className="w-5 h-5 text-[#4285F4] transition-transform group-open:rotate-90 flex-shrink-0 ml-4" />
                                </summary>
                                <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
