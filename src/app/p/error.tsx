"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-dark-950 flex flex-col items-center justify-center p-4">
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-8 border border-red-500/20">
                <AlertCircle className="w-10 h-10 text-red-400" />
            </div>
            <h1 className="text-3xl font-display font-bold text-white mb-4 text-center">
                We couldn't load this page.
            </h1>
            <p className="text-gray-400 max-w-md text-center mb-8">
                There was an issue retrieving the data for this specific resource. It might be temporarily unavailable.
            </p>
            <div className="flex gap-4">
                <button
                    onClick={() => reset()}
                    className="btn-primary"
                >
                    Try Again
                </button>
                <Link href="/" className="btn-secondary">
                    <ArrowLeft className="w-5 h-5" /> Go Home
                </Link>
            </div>
        </div>
    );
}
