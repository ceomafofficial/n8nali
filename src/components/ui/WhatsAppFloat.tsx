"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function WhatsAppFloat() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${visible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        >
            <Link
                href="https://wa.me/923141603089?text=Hi%20n8nera!%20I'm%20interested%20in%20learning%20about%20your%20automation%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center"
                aria-label="Chat with us on WhatsApp"
            >
                {/* Tooltip */}
                <div className="absolute right-full mr-4 px-4 py-2 bg-dark-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    <span className="text-sm text-white font-medium">Chat with us on WhatsApp</span>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-dark-800 rotate-45" />
                </div>

                {/* Button */}
                <div className="whatsapp-float group-hover:scale-110 transition-transform">
                    {/* Icon */}
                    <WhatsAppIcon className="w-7 h-7 text-white relative z-10" />
                </div>
            </Link>
        </div>
    );
}
