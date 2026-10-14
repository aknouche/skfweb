import Image from 'next/image';
import Link from 'next/link';

export function PartnersSection() {
  return (
    <section
      className="border-t border-gray-100 bg-gray-50 py-10"
      aria-labelledby="partners-heading"
    >
      <div className="container-wide">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <p
              id="partners-heading"
              className="text-xs font-semibold uppercase tracking-widest text-gray-400"
            >
              Våra officiella partners
            </p>
            {/* TOP TEN — utrustningspartner */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-24 items-center justify-center rounded bg-white px-2">
                <Image
                  src="/images/partners/toptenlogo.png"
                  alt="TOP TEN logotyp"
                  width={96}
                  height={40}
                  className="max-h-8 w-auto object-contain"
                />
              </div>
              <p className="text-xs font-medium text-gray-500">Officiell utrustningspartner</p>
            </div>
            {/* Nicopia Sport — distributionspartner */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-24 items-center justify-center rounded bg-white px-2">
                <Image
                  src="/images/partners/nicopiasports.jpeg"
                  alt="Nicopia Sport logotyp"
                  width={96}
                  height={40}
                  className="max-h-8 w-auto object-contain"
                />
              </div>
              <p className="text-xs font-medium text-gray-500">Officiell distributionspartner</p>
            </div>
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
