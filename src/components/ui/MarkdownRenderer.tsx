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
                className="w-full h-auto rounded-xl border border-gray-200"
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
                    <h1 className="text-3xl font-display font-bold text-gray-900 mt-10 mb-6">
                        {children}
                    </h1>
                ),
                h2: ({ children }) => (
                    <h2 className="text-2xl font-display font-bold text-gray-900 mt-10 mb-4">
                        {children}
                    </h2>
                ),
                h3: ({ children }) => (
                    <h3 className="text-xl font-display font-semibold text-gray-800 mt-8 mb-3">
                        {children}
                    </h3>
                ),
                h4: ({ children }) => (
                    <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                        {children}
                    </h4>
                ),
                p: ({ children }) => (
                    <p className="text-gray-700 leading-relaxed mb-6">{children}</p>
                ),
                strong: ({ children }) => (
                    <strong className="text-gray-900 font-semibold">{children}</strong>
                ),
                em: ({ children }) => (
                    <em className="text-gray-700 italic">{children}</em>
                ),
                ul: ({ children }) => (
                    <ul className="list-none space-y-3 mb-6 pl-0">{children}</ul>
                ),
                ol: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
                        {children}
                    </ol>
                ),
                li: ({ children }) => (
                    <li className="flex items-start gap-3 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-[#4285F4] mt-2 flex-shrink-0" />
                        <span>{children}</span>
                    </li>
                ),
                blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-[#4285F4] pl-6 py-2 my-6 bg-blue-50 rounded-r-xl">
                        <div className="text-gray-700 italic">{children}</div>
                    </blockquote>
                ),
                a: ({ href, children }) => (
                    <a
                        href={href}
                        className="text-[#4285F4] hover:text-blue-700 underline underline-offset-2"
                        target={href?.startsWith("http") ? "_blank" : undefined}
                        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                        {children}
                    </a>
                ),
                code: ({ children }) => (
                    <code className="bg-gray-100 text-[#4285F4] px-2 py-1 rounded text-sm font-mono border border-gray-200">
                        {children}
                    </code>
                ),
                pre: ({ children }) => (
                    <pre className="bg-gray-900 border border-gray-200 rounded-xl p-6 overflow-x-auto mb-6 text-gray-100">
                        {children}
                    </pre>
                ),
                img: ({ src, alt }) => <BlogImage src={src} alt={alt} />,
                table: ({ children }) => (
                    <div className="overflow-x-auto mb-6 rounded-xl border border-gray-200">
                        <table className="w-full text-sm text-left text-gray-700">
                            {children}
                        </table>
                    </div>
                ),
                thead: ({ children }) => (
                    <thead className="text-xs uppercase text-gray-600 bg-gray-50">
                        {children}
                    </thead>
                ),
                th: ({ children }) => (
                    <th className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">
                        {children}
                    </th>
                ),
                td: ({ children }) => (
                    <td className="px-4 py-3 border-t border-gray-100">{children}</td>
                ),
                tr: ({ children }) => (
                    <tr className="hover:bg-gray-50 transition-colors">{children}</tr>
                ),
                hr: () => <hr className="border-gray-200 my-10" />,
            }}
        >
            {content}
        </ReactMarkdown>
    );
}
