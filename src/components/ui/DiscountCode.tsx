'use client';

import { useState } from 'react';

interface DiscountCodeProps {
  code: string;
  label: string;
}

export function DiscountCode({ code, label }: DiscountCodeProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center gap-2">
      <span
        className="rounded-md bg-gray-100 px-4 py-2 font-mono text-lg font-bold tracking-widest text-skf-blue select-all"
        aria-label={label}
      >
        {code}
      </span>
      <button
        type="button"
        onClick={handleCopy}
        className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-gray-200 bg-white text-gray-500 transition-colors hover:border-skf-blue hover:text-skf-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skf-blue"
        aria-label={`Kopiera rabattkod ${code}`}
      >
        {copied ? (
          <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
      <span
        aria-live="polite"
        className={`text-sm font-medium text-green-600 transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}
      >
        Kopierad!
      </span>
    </div>
  );
}
