import React from 'react';
import Link from 'next/link';

interface TranslatedTextProps {
  content: string;
  className?: string;
  linkClassName?: string;
}

export default function TranslatedText({ 
  content, 
  className = "",
  linkClassName = "text-amber-400 hover:text-amber-500 underline decoration-amber-400/60 hover:decoration-amber-500/80 transition-all duration-300 font-medium"
}: TranslatedTextProps) {
  // Function to convert text with link markers to JSX
  const renderWithLinks = (text: string) => {
    // Pattern to match: [link text](url)
    const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkPattern.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      // Add the link
      const linkText = match[1];
      const linkUrl = match[2];
      
      // Check if it's an external link
      const isExternal = linkUrl.startsWith('http://') || linkUrl.startsWith('https://');
      
      if (isExternal) {
        parts.push(
          <a
            key={match.index}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            {linkText}
          </a>
        );
      } else {
        parts.push(
          <Link
            key={match.index}
            href={linkUrl}
            className={linkClassName}
          >
            {linkText}
          </Link>
        );
      }

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <span className={className}>
      {renderWithLinks(content)}
    </span>
  );
} 