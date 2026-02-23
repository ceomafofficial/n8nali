"use client";

import { usePathname } from "next/navigation";

export default function FooterCTAWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    if (pathname?.startsWith("/careers")) return null;
    return <>{children}</>;
}
