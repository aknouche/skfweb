import type { Metadata } from 'next';
import Image from 'next/image';
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

      {/* Tier: Officiell utrustningspartner */}
      <section className="border-t border-gray-100 py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-skf-blue uppercase tracking-wide mb-8">
            Officiell utrustningspartner
          </h2>

          <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
            {/* Logo block */}
            <div className="mb-6">
              <Image
                src="/images/partners/toptenlogo.png"
                alt="TOP TEN logotyp"
                width={180}
                height={80}
                className="object-contain"
              />
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

      {/* Tier: Samarbetspartners */}
      <section className="border-t border-gray-100 py-12">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-skf-blue uppercase tracking-wide mb-8">
            Samarbetspartners
          </h2>

          <ul className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white shadow-sm">
            {PARTNERS.map((partner) => {
              const logoTile = (
                <div
                  className={`flex h-14 w-36 shrink-0 items-center justify-center rounded-md px-3 ${
                    partner.logoBg ?? 'bg-gray-50'
                  }`}
                >
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logotyp`}
                      width={144}
                      height={56}
                      className="max-h-10 w-auto object-contain"
                    />
                  ) : (
                    <span className="text-lg font-bold tracking-wide text-gray-400">
                      {partner.name
                        .split(' ')
                        .filter((word) => word !== 'AB')
                        .slice(0, 2)
                        .map((word) => word[0])
                        .join('')}
                    </span>
                  )}
                </div>
              );

              return (
                <li key={partner.name}>
                  {partner.url ? (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-6 px-6 py-5 no-underline transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-skf-blue"
                    >
                      {logoTile}
                      <span className="text-base font-semibold text-skf-blue">{partner.name}</span>
                      <svg
                        className="ml-auto h-4 w-4 shrink-0 text-gray-400 transition-colors group-hover:text-skf-blue"
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
                  ) : (
                    <div className="flex items-center gap-6 px-6 py-5">
                      {logoTile}
                      <span className="text-base font-semibold text-skf-blue">{partner.name}</span>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

    </main>
  );
}

type Partner = {
  name: string;
  logo?: string;
  logoBg?: string;
  url?: string;
};

const PARTNERS: Partner[] = [
  {
    name: 'RJ Consulting AB',
    logo: '/images/partners/rj-consulting.png',
    logoBg: 'bg-gray-900',
  },
  {
    name: 'Novelty Quest AB',
    logo: '/images/partners/novelty-quest.png',
    logoBg: 'bg-white',
    url: 'https://www.noveltyquest.com/',
  },
  {
    name: 'Rudman Consulting AB',
    url: 'https://www.bjornrudman.se/',
  },
  {
    name: 'BL Bygg & Konsult AB',
    logo: '/images/partners/bl-bygg-konsult.png',
    logoBg: 'bg-skf-blue',
    url: 'https://blbyggkonsult.se/',
  },
];
