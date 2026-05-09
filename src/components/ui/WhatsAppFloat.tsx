"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function WhatsAppFloat() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 transition-all duration-500 ${
                visible ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
        >
            <Link
                href="https://wa.me/923141603089?text=Hi%20n8nera!%20I'm%20interested%20in%20learning%20about%20your%20automation%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center"
                aria-label="Chat with us on WhatsApp"
            >
                {/* Tooltip — hidden on mobile to save space */}
                <div className="hidden sm:block absolute right-full mr-4 px-4 py-2 bg-gray-900 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
                    <span className="text-sm text-white font-medium">Chat with us on WhatsApp</span>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
                </div>

                {/* Button */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
                    <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" />
                </div>
            </Link>
        </div>
    );
}
