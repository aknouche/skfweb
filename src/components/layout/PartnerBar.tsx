/**
 * PartnerBar Component
 * Slim, full-width strip pinned to the very top of every page (above the header).
 * Gives the official partners (TOP TEN, Nicopia Sport) persistent, prominent
 * visibility. Scrolls away with the page; the main header remains sticky.
 */

import Image from 'next/image';
import Link from 'next/link';

export function PartnerBar() {
  return (
    <div className="bg-skf-blue text-white">
      <div className="container-wide">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 py-2">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            Officiella partners:
          </p>
          <Link
            href="/partners"
            className="flex h-8 w-20 items-center justify-center rounded bg-white px-2 no-underline transition-opacity hover:opacity-90"
            aria-label="TOP TEN — officiell utrustningspartner, läs mer om våra partners"
          >
            <Image
              src="/images/partners/toptenlogo.png"
              alt="TOP TEN logotyp"
              width={80}
              height={32}
              className="max-h-6 w-auto object-contain"
            />
          </Link>
          <Link
            href="/partners"
            className="flex h-8 w-20 items-center justify-center rounded bg-white px-2 no-underline transition-opacity hover:opacity-90"
            aria-label="Nicopia Sport — officiell distributionspartner, läs mer om våra partners"
          >
            <Image
              src="/images/partners/nicopiasports.jpeg"
              alt="Nicopia Sport logotyp"
              width={80}
              height={32}
              className="max-h-6 w-auto object-contain"
            />
          </Link>
          <Link
            href="/partners"
            className="ml-auto text-xs font-semibold text-skf-yellow no-underline transition-opacity hover:opacity-80"
          >
            Se alla partners →
          </Link>
        </div>
      </div>
    </div>
  );
}
