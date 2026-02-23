import type { Metadata } from "next";

export const metadata: Metadata = {
    openGraph: {
        siteName: "n8nera",
    },
    twitter: {
        card: "summary_large_image",
        site: "@n8nera",
        creator: "@n8nera",
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

