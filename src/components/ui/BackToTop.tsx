"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-20 right-4 sm:bottom-8 sm:right-[5.5rem] z-40 p-2.5 sm:p-3 rounded-full bg-[#4285F4] text-white shadow-lg hover:bg-[#2b6ada] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:ring-offset-2 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
            }`}
            aria-label="Back to top"
        >
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
    );
}
