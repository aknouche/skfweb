import Link from 'next/link';

export function PartnersSection() {
  return (
    <section
      className="border-t border-gray-100 bg-gray-50 py-10"
      aria-labelledby="partners-heading"
    >
      <div className="container-wide">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-5">
            <p
              id="partners-heading"
              className="text-xs font-semibold uppercase tracking-widest text-gray-400"
            >
              Våra partners
            </p>
            {/* TOP TEN logo placeholder — replace with <Image> when logo file is provided */}
            <div
              className="flex h-10 w-24 items-center justify-center rounded border border-dashed border-gray-300 bg-white"
              aria-label="TOP TEN logotyp"
            >
              <span className="text-xs font-bold tracking-widest text-gray-400">TOP TEN</span>
            </div>
            <p className="text-xs font-medium text-gray-500">Officiell och föredragen partner</p>
          </div>
          <Link
            href="/partners"
            className="shrink-0 rounded-md border border-skf-blue px-5 py-2 text-sm font-semibold text-skf-blue no-underline transition-colors hover:bg-skf-blue/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skf-blue"
          >
            Se alla partners →
          </Link>
        </div>
      </div>
    </section>
  );
}
