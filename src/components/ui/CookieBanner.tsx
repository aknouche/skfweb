'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookiemeddelande"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-skf-blue px-4 py-4 shadow-lg"
    >
      <div className="container-wide flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-200">
          Vi använder cookies för att webbplatsen ska fungera korrekt. Inga spårnings- eller reklamcookies används.{' '}
          <Link
            href="/integritetspolicy"
            className="underline hover:text-white"
          >
            Läs vår integritetspolicy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={decline}
            className="rounded border border-white/30 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-white/60 hover:text-white"
          >
            Avvisa
          </button>
          <button
            onClick={accept}
            className="rounded bg-skf-yellow px-4 py-2 text-sm font-semibold text-skf-blue transition-opacity hover:opacity-90"
          >
            Acceptera
          </button>
        </div>
      </div>
    </div>
  );
}
