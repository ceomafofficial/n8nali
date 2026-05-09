"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Menu,
    X,
    ChevronDown,
    Zap,
    Brain,
    Mic,
    ArrowRight,
    Search,
    FileText,
    Briefcase,
    Factory,
    Globe,
} from "lucide-react";
import { search as siteSearch, type SearchResult } from "@/lib/search";

const navLinks = [
    { name: "Home", href: "/" },
    {
        name: "Services",
        href: "/services",
        submenu: [
            {
                category: "Workflow Automation",
                icon: Zap,
                items: [
                    { name: "Business Process Automation", href: "/services/business-process-automation" },
                    { name: "CRM & Sales Automation", href: "/services/crm-sales-automation" },
                    { name: "E-commerce Automation", href: "/services/ecommerce-automation" },
                    { name: "WhatsApp Automation", href: "/services/whatsapp-messaging-automation" },
                    { name: "Social Media Automation", href: "/services/social-media-automation" },
                ],
            },
            {
                category: "AI & Integration",
                icon: Brain,
                items: [
                    { name: "AI-Based Automation", href: "/services/ai-based-automation" },
                    { name: "Data Integration & Sync", href: "/services/data-integration-sync" },
                    { name: "Monitoring & Alerts", href: "/services/monitoring-alert-systems" },
                    { name: "SaaS Automation", href: "/services/saas-automation-service" },
                ],
            },
            {
                category: "AI Voice Agents",
                icon: Mic,
                items: [
                    { name: "AI Call Center Agent", href: "/services/ai-call-center-agent" },
                    { name: "Appointment Booking Bot", href: "/services/appointment-booking-voice-bot" },
                    { name: "Hotel & Restaurant Agent", href: "/services/hotel-restaurant-voice-agent" },
                    { name: "Sales Voice AI", href: "/services/sales-voice-ai-agent" },
                ],
            },
        ],
    },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact" },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Returns all focusable elements within a container. */
function getFocusableElements(container: HTMLElement): HTMLElement[] {
    return Array.from(
        container.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
    );
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

    const mobileMenuRef = useRef<HTMLElement>(null);
    const mobileToggleRef = useRef<HTMLButtonElement>(null);
    const submenuCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const searchContainerRef = useRef<HTMLDivElement>(null);

    // -----------------------------------------------------------------------
    // Scroll handler
    // -----------------------------------------------------------------------
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // -----------------------------------------------------------------------
    // Lock body scroll when mobile menu is open
    // -----------------------------------------------------------------------
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    // -----------------------------------------------------------------------
    // Mobile menu – focus trap & Escape key
    // -----------------------------------------------------------------------
    useEffect(() => {
        if (!isMobileMenuOpen) return;

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setIsMobileMenuOpen(false);
                mobileToggleRef.current?.focus();
                return;
            }

            if (e.key !== "Tab") return;

            const panel = mobileMenuRef.current;
            if (!panel) return;

            const focusable = getFocusableElements(panel);
            if (focusable.length === 0) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last?.focus();
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first?.focus();
                }
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        // Move focus into the panel on open
        requestAnimationFrame(() => {
            const panel = mobileMenuRef.current;
            if (panel) {
                const first = getFocusableElements(panel)[0];
                first?.focus();
            }
        });

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isMobileMenuOpen]);

    // -----------------------------------------------------------------------
    // Search overlay – Escape key + reset on close
    // -----------------------------------------------------------------------
    useEffect(() => {
        if (!isSearchOpen) {
            setSearchQuery("");
            setSearchResults([]);
            return;
        }

        function handleKey(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setIsSearchOpen(false);
            }
        }

        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [isSearchOpen]);

    // -----------------------------------------------------------------------
    // Search – debounced query
    // -----------------------------------------------------------------------
    useEffect(() => {
        if (!searchQuery.trim()) {
            setSearchResults([]);
            return;
        }
        const timer = setTimeout(() => {
            setSearchResults(siteSearch(searchQuery));
        }, 150);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    const categoryIcon = useCallback((cat: SearchResult["category"]) => {
        switch (cat) {
            case "Service": return <Briefcase className="w-4 h-4 text-accent-400" aria-hidden="true" />;
            case "Blog": return <FileText className="w-4 h-4 text-emerald-400" aria-hidden="true" />;
            case "Industry": return <Factory className="w-4 h-4 text-amber-400" aria-hidden="true" />;
            case "Page": return <Globe className="w-4 h-4 text-sky-400" aria-hidden="true" />;
        }
    }, []);

    // -----------------------------------------------------------------------
    // Desktop submenu helpers (hover + focus with grace period)
    // -----------------------------------------------------------------------
    const openSubmenu = useCallback((name: string) => {
        if (submenuCloseTimer.current) {
            clearTimeout(submenuCloseTimer.current);
            submenuCloseTimer.current = null;
        }
        setActiveSubmenu(name);
    }, []);

    const closeSubmenuGracefully = useCallback(() => {
        submenuCloseTimer.current = setTimeout(() => {
            setActiveSubmenu(null);
        }, 150);
    }, []);

    const handleTriggerKeyDown = useCallback(
        (e: React.KeyboardEvent, linkName: string, hasSubmenu: boolean) => {
            if (!hasSubmenu) return;

            if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
                e.preventDefault();
                openSubmenu(linkName);

                // Focus the first link inside the mega menu after it renders
                requestAnimationFrame(() => {
                    const panel = document.getElementById(`submenu-${linkName}`);
                    if (panel) {
                        const first = getFocusableElements(panel)[0];
                        first?.focus();
                    }
                });
            } else if (e.key === "Escape") {
                setActiveSubmenu(null);
            }
        },
        [openSubmenu]
    );

    const handleMegaMenuKeyDown = useCallback(
        (e: React.KeyboardEvent, linkName: string) => {
            if (e.key === "Escape") {
                setActiveSubmenu(null);
                // Return focus to trigger
                const trigger = document.getElementById(`nav-trigger-${linkName}`);
                trigger?.focus();
            }
        },
        []
    );

    return (
        <>
            {/* Skip to main content — a11y */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold focus:outline-none focus:ring-2 focus:ring-white"
            >
                Skip to main content
            </a>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm"
                    : "bg-white/80 backdrop-blur-md"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 md:gap-3 group">
                            <Image
                                src="/logo.webp"
                                alt="n8nera Logo"
                                width={120}
                                height={40}
                                priority
                                className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
                            {navLinks.map((link) => {
                                const hasSubmenu = Boolean(link.submenu);
                                const isOpen = activeSubmenu === link.name;

                                return (
                                    <div
                                        key={link.name}
                                        className="relative"
                                        onMouseEnter={() => hasSubmenu && openSubmenu(link.name)}
                                        onMouseLeave={closeSubmenuGracefully}
                                        onFocus={() => hasSubmenu && openSubmenu(link.name)}
                                        onBlur={closeSubmenuGracefully}
                                    >
                                        <Link
                                            id={`nav-trigger-${link.name}`}
                                            href={link.href}
                                            className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100"
                                            {...(hasSubmenu && {
                                                "aria-haspopup": "true" as const,
                                                "aria-expanded": isOpen,
                                                "aria-controls": `submenu-${link.name}`,
                                            })}
                                            onKeyDown={(e) => handleTriggerKeyDown(e, link.name, hasSubmenu)}
                                        >
                                            {link.name}
                                            {hasSubmenu && (
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </Link>

                                        {/* Mega Menu */}
                                        {link.submenu && isOpen && (
                                            <div
                                                id={`submenu-${link.name}`}
                                                role="menu"
                                                aria-label={`${link.name} submenu`}
                                                className="absolute top-full left-1/2 -translate-x-1/2 pt-4 animate-fade-in"
                                                onKeyDown={(e) => handleMegaMenuKeyDown(e, link.name)}
                                            >
                                                <div className="bg-white shadow-xl rounded-2xl p-6 min-w-[720px] grid grid-cols-3 gap-6 border border-gray-100">
                                                    {link.submenu.map((category) => (
                                                        <div key={category.category} role="group" aria-label={category.category}>
                                                            <div className="flex items-center gap-2 mb-4">
                                                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                                                                    <category.icon className="w-4 h-4 text-[#4285F4]" aria-hidden="true" />
                                                                </div>
                                                                <span className="text-sm font-semibold text-gray-900">
                                                                    {category.category}
                                                                </span>
                                                            </div>
                                                            <ul className="space-y-2" role="none">
                                                                {category.items.map((item) => (
                                                                    <li key={item.name} role="none">
                                                                        <Link
                                                                            href={item.href}
                                                                            role="menuitem"
                                                                            className="group flex items-center gap-2 text-sm text-gray-600 hover:text-[#4285F4] transition-colors py-1.5"
                                                                        >
                                                                            <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" aria-hidden="true" />
                                                                            {item.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </nav>

                        {/* Actions: Search + Mobile Toggle */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                                aria-label={isSearchOpen ? "Close search" : "Open search"}
                                aria-expanded={isSearchOpen}
                            >
                                <Search className="w-5 h-5" aria-hidden="true" />
                            </button>

                            <button
                                ref={mobileToggleRef}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
                                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isMobileMenuOpen}
                                aria-controls="mobile-menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="w-6 h-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Search Overlay */}
            {isSearchOpen && (
                <div
                    ref={searchContainerRef}
                    role="search"
                    className="fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200 p-4 animate-fade-in"
                >
                    <div className="max-w-3xl mx-auto">
                        <form
                            className="relative"
                            onSubmit={(e) => {
                                e.preventDefault();
                                // Navigate to first result on Enter
                                if (searchResults.length > 0 && searchResults[0]) {
                                    window.location.href = searchResults[0].href;
                                }
                            }}
                        >
                            <label htmlFor="site-search" className="sr-only">
                                Search articles and services
                            </label>
                            <input
                                ref={searchInputRef}
                                id="site-search"
                                type="search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search articles, services, industries..."
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#4285F4] transition-colors"
                                autoFocus
                                autoComplete="off"
                                aria-autocomplete="list"
                                aria-controls="search-results"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" aria-hidden="true" />
                        </form>

                        {/* Results */}
                        {searchQuery.trim() && (
                            <ul
                                id="search-results"
                                role="listbox"
                                aria-label="Search results"
                                className="mt-3 max-h-[60vh] overflow-y-auto space-y-1"
                            >
                                {searchResults.length === 0 ? (
                                    <li className="px-4 py-6 text-center text-gray-500">
                                        No results found for &ldquo;{searchQuery}&rdquo;
                                    </li>
                                ) : (
                                    searchResults.map((result) => (
                                        <li key={result.href} role="option" aria-selected={false}>
                                            <Link
                                                href={result.href}
                                                onClick={() => setIsSearchOpen(false)}
                                                className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors group"
                                            >
                                                <span className="mt-0.5 flex-shrink-0">{categoryIcon(result.category)}</span>
                                                <div className="min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 group-hover:text-[#4285F4] transition-colors truncate">
                                                        {result.title}
                                                    </p>
                                                    <p className="text-xs text-gray-500 line-clamp-1">
                                                        {result.description}
                                                    </p>
                                                </div>
                                                <span className="ml-auto flex-shrink-0 text-[10px] uppercase tracking-wider text-gray-600 mt-0.5">
                                                    {result.category}
                                                </span>
                                            </Link>
                                        </li>
                                    ))
                                )}
                            </ul>
                        )}
                    </div>
                </div>
            )}

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                aria-hidden={!isMobileMenuOpen}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-white/95 backdrop-blur-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Panel */}
                <nav
                    ref={mobileMenuRef}
                    aria-label="Mobile navigation"
                    className={`absolute right-0 top-0 bottom-0 w-full sm:w-80 max-w-full bg-white border-l border-gray-200 overflow-y-auto transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    {/* Close button inside panel for screen readers */}
                    <div className="flex justify-end p-4">
                        <button
                            type="button"
                            className="p-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <X className="w-6 h-6 text-gray-500 hover:text-gray-900" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="p-6 pt-4 space-y-6">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-lg font-medium text-gray-900 hover:text-[#4285F4] transition-colors"
                                >
                                    {link.name}
                                </Link>
                                {link.submenu && (
                                    <div className="mt-4 pl-4 space-y-4 border-l border-gray-200">
                                        {link.submenu.map((category) => (
                                            <div key={category.category}>
                                                <p className="text-sm font-medium text-gray-600 mb-2">
                                                    {category.category}
                                                </p>
                                                <ul className="space-y-2">
                                                    {category.items.map((item) => (
                                                        <li key={item.name}>
                                                            <Link
                                                                href={item.href}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </nav>
            </div>
        </>
    );
}
