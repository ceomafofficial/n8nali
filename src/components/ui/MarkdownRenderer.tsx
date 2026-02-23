"use client";

import ReactMarkdown from "react-markdown";
import { useState, useCallback } from "react";
import Image from "next/image";

interface MarkdownRendererProps {
    content: string;
}

/* Tiny wrapper so broken images degrade gracefully */
function BlogImage({ src, alt }: { src?: string; alt?: string }) {
    const [hidden, setHidden] = useState(false);
    const onError = useCallback(() => setHidden(true), []);

    if (hidden || !src) return null;

    return (
        <span className="block my-8">
            <Image
                src={src}
                alt={alt || ""}
                width={1200}
                height={675}
                sizes="(min-width: 1024px) 896px, 100vw"
                loading="lazy"
                className="w-full h-auto rounded-xl border border-white/10"
                onError={onError}
                unoptimized
            />
        </span>
    );
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
    return (
        <ReactMarkdown
            components={{
                h1: ({ children }) => (
                    <h1 className="text-3xl font-display font-bold text-white mt-10 mb-6">
                        {children}
                    </h1>
                ),
                h2: ({ children }) => (
                    <h2 className="text-2xl font-display font-bold text-white mt-10 mb-4">
                        {children}
                    </h2>
                ),
                h3: ({ children }) => (
                    <h3 className="text-xl font-display font-semibold text-white mt-8 mb-3">
                        {children}
                    </h3>
                ),
                h4: ({ children }) => (
                    <h4 className="text-lg font-semibold text-white mt-6 mb-2">
                        {children}
                    </h4>
                ),
                p: ({ children }) => (
                    <p className="text-gray-300 leading-relaxed mb-6">{children}</p>
                ),
                strong: ({ children }) => (
                    <strong className="text-white font-semibold">{children}</strong>
                ),
                em: ({ children }) => (
                    <em className="text-gray-200 italic">{children}</em>
                ),
                ul: ({ children }) => (
                    <ul className="list-none space-y-3 mb-6 pl-0">{children}</ul>
                ),
                ol: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-300">
                        {children}
                    </ol>
                ),
                li: ({ children }) => (
                    <li className="flex items-start gap-3 text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                        <span>{children}</span>
                    </li>
                ),
                blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-accent-500 pl-6 py-2 my-6 bg-white/5 rounded-r-xl">
                        <div className="text-gray-300 italic">{children}</div>
                    </blockquote>
                ),
                a: ({ href, children }) => (
                    <a
                        href={href}
                        className="text-accent-400 hover:text-accent-300 underline underline-offset-2"
                        target={href?.startsWith("http") ? "_blank" : undefined}
                        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                        {children}
                    </a>
                ),
                code: ({ children }) => (
                    <code className="bg-white/10 text-accent-300 px-2 py-1 rounded text-sm font-mono">
                        {children}
                    </code>
                ),
                pre: ({ children }) => (
                    <pre className="bg-dark-800 border border-white/10 rounded-xl p-6 overflow-x-auto mb-6">
                        {children}
                    </pre>
                ),
                img: ({ src, alt }) => <BlogImage src={src} alt={alt} />,
                table: ({ children }) => (
                    <div className="overflow-x-auto mb-6 rounded-xl border border-white/10">
                        <table className="w-full text-sm text-left text-gray-300">
                            {children}
                        </table>
                    </div>
                ),
                thead: ({ children }) => (
                    <thead className="text-xs uppercase text-gray-400 bg-white/5">
                        {children}
                    </thead>
                ),
                th: ({ children }) => (
                    <th className="px-4 py-3 font-semibold text-white whitespace-nowrap">
                        {children}
                    </th>
                ),
                td: ({ children }) => (
                    <td className="px-4 py-3 border-t border-white/5">{children}</td>
                ),
                tr: ({ children }) => (
                    <tr className="hover:bg-white/5 transition-colors">{children}</tr>
                ),
                hr: () => <hr className="border-white/10 my-10" />,
            }}
        >
            {content}
        </ReactMarkdown>
    );
}
