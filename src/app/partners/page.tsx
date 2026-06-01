import type { Metadata } from 'next';
import Link from 'next/link';
import { AFFILIATE_URLS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Våra partners | Svenska Kickboxningsförbundet',
  description:
    'Svenska Kickboxningsförbundets samarbetspartners som stödjer utvecklingen av svensk kickboxning.',
};

export default function PartnersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-skf-blue py-16 lg:py-24">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold text-white lg:text-5xl">Våra partners</h1>
          <div className="mt-3 h-1 w-16 bg-skf-yellow" aria-hidden="true" />
          <p className="mt-6 text-lg text-gray-200">
            Samarbetspartners som gör svensk kickboxning starkare.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12">
        <div className="container-narrow">
          <p className="text-lg text-gray-700 leading-relaxed">
            Svenska Kickboxningsförbundet samarbetar med utvalda partners som stödjer utvecklingen
            av svensk kickboxning — från bredd till elit. Våra partners bidrar till landslaget,
            domar- och utbildningsverksamheten samt till förmåner för våra medlemsföreningar.
          </p>
        </div>
      </section>

      {/* Tier: Huvudpartner */}
      <section className="border-t border-gray-100 py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-skf-blue uppercase tracking-wide mb-6">
            Huvudpartner
          </h2>
          <div className="rounded-lg border border-dashed border-gray-200 bg-gray-50 px-8 py-10 text-center">
            <p className="text-gray-400 italic">Plats för kommande huvudpartner.</p>
          </div>
        </div>
      </section>

      {/* Tier: Officiell utrustningspartner */}
      <section className="border-t border-gray-100 py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-skf-blue uppercase tracking-wide mb-8">
            Officiell utrustningspartner
          </h2>

          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
            {/* Logo block */}
            <div className="mb-6">
              {/* Placeholder until official logo file is provided */}
              <div
                className="inline-flex h-20 w-48 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50"
                aria-label="TOP TEN logotyp (placeholder)"
              >
                <span className="text-lg font-bold tracking-widest text-gray-400">TOP TEN</span>
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
                Officiell och föredragen partner
              </p>
            </div>

            {/* Body text */}
            <p className="text-gray-700 leading-relaxed mb-8">
              TOP TEN är förbundets officiella utrustningspartner och WAKO:s officiella leverantör.
              Genom samarbetet utrustas det svenska landslaget med tränings- och tävlingsutrustning,
              och klubbar och medlemmar får tillgång till TOP TEN:s sortiment till förmånliga priser
              via den svenska distributören Nicopia Sport.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/forbundsrabatter"
                className="inline-flex items-center rounded-md bg-skf-blue px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-skf-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skf-blue"
              >
                Se medlemsförmåner
              </Link>
              <a
                href={AFFILIATE_URLS.partnerPage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-skf-blue px-6 py-3 text-sm font-semibold text-skf-blue no-underline transition-colors hover:bg-skf-blue/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skf-blue"
              >
                Besök TOP TEN
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>

            {/* Distributor link */}
            <p className="mt-4 text-sm text-gray-500">
              Svensk distributör:{' '}
              <a
                href={AFFILIATE_URLS.partnerPage}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-skf-blue underline hover:text-skf-blue/80"
              >
                Nicopia Sport
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Tier: Leverantörer och medlemsförmåner */}
      <section className="border-t border-gray-100 py-12 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-skf-blue uppercase tracking-wide mb-6">
            Leverantörer och medlemsförmåner
          </h2>
          <p className="text-gray-700 mb-6">
            SKF-anslutna klubbar och aktiva utövare har tillgång till exklusiva rabatter hos
            förbundets officiella leverantörer. Rabatten gäller TOP TEN-sortimentet hos Nicopia
            Sport.
          </p>
          <Link
            href="/forbundsrabatter"
            className="inline-flex items-center gap-1 rounded-md bg-skf-yellow px-6 py-3 text-sm font-semibold text-skf-blue no-underline transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skf-blue"
          >
            Se medlemsförmåner
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
