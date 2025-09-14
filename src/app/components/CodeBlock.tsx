"use client";
import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "../assets/styles/prism-dracula.css";
import "prismjs/components/prism-c";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-sql";

interface CodeBlockProps {
  code: string;
  language: "c" | "javascript" | "sql" | "bash";
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, [code, language]);

  return (
    <pre className="fb-pre">
      <code ref={ref} className={`language-${language}`}>{code}</code>
    </pre>
  );
}
