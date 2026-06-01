import type { Metadata } from 'next';
import Link from 'next/link';
import { DiscountCode } from '@/components/ui/DiscountCode';
import { AFFILIATE_URLS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Förbundsrabatter | Svenska Kickboxningsförbundet',
  description:
    'Som medlemsförening eller utövare inom SKF får du rabatt hos Nicopia Sport på TOP TEN-utrustning.',
};

const steps = [
  {
    number: 1,
    title: 'Klicka på länken nedan',
    description: 'Du kommer till Nicopia Sports webbshop.',
  },
  {
    number: 2,
    title: 'Handla i butiken',
    description: 'Välj produkter från TOP TEN-sortimentet.',
  },
  {
    number: 3,
    title: 'Använd din kod i kassan',
    description: 'Rabatten dras av direkt.',
  },
];

export default function ForbundsrabatterPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-skf-blue py-16 lg:py-24">
        <div className="container-narrow">
          <h1 className="text-3xl font-bold text-white lg:text-5xl">
            Förbundsrabatter på TOP TEN-utrustning
          </h1>
          <div className="mt-3 h-1 w-16 bg-skf-yellow" aria-hidden="true" />
          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            Som medlemsförening eller utövare inom SKF får du rabatt hos Nicopia Sport — och en del
            av varje köp går tillbaka till förbundet.
          </p>
        </div>
      </section>

      {/* 3-step flow */}
      <section className="py-14">
        <div className="container-narrow">
          <h2 className="mb-8 text-xl font-bold text-skf-blue">Så här fungerar det</h2>
          <ol className="grid gap-6 sm:grid-cols-3" aria-label="Steg-för-steg-guide">
            {steps.map((step) => (
              <li
                key={step.number}
                className="flex flex-col gap-3 rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-skf-blue text-sm font-bold text-white"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <p className="font-semibold text-skf-blue">{step.title}</p>
                <p className="text-sm text-gray-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Discount cards */}
      <section className="border-t border-gray-100 py-14 bg-gray-50">
        <div className="container-narrow">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Club card */}
            <article className="flex flex-col gap-6 rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
              <div>
                <h2 className="text-xl font-bold text-skf-blue">För klubbar</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Gäller SKF-anslutna klubbar som beställer utrustning till verksamheten.
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold text-skf-blue">25%</p>
                <p className="text-sm text-gray-500">rabatt</p>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-gray-600">Rabattkod</p>
                <DiscountCode code="SKFCLUB" label="Rabattkod för klubbar, SKFCLUB" />
              </div>

              <div className="mt-auto">
                <a
                  href={AFFILIATE_URLS.clubDiscount}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-md bg-skf-blue px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-skf-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skf-blue"
                >
                  Till butiken →
                </a>
                <p className="mt-2 text-center text-xs text-gray-400">
                  Länken går till Nicopia Sport. Köp via denna länk bidrar till förbundets
                  verksamhet.
                </p>
              </div>
            </article>

            {/* Member card */}
            <article className="flex flex-col gap-6 rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
              <div>
                <h2 className="text-xl font-bold text-skf-blue">För medlemmar</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Gäller aktiva utövare i SKF-anslutna klubbar.
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold text-skf-blue">10%</p>
                <p className="text-sm text-gray-500">rabatt</p>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium text-gray-600">Rabattkod</p>
                <DiscountCode code="SKFSTUD" label="Rabattkod för medlemmar, SKFSTUD" />
              </div>

              <div className="mt-auto">
                <a
                  href={AFFILIATE_URLS.memberDiscount}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-md bg-skf-blue px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-skf-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skf-blue"
                >
                  Till butiken →
                </a>
                <p className="mt-2 text-center text-xs text-gray-400">
                  Länken går till Nicopia Sport. Köp via denna länk bidrar till förbundets
                  verksamhet.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="border-t border-gray-100 py-14">
        <div className="container-narrow">
          <h2 className="mb-4 text-xl font-bold text-skf-blue">Varför finns rabatten?</h2>
          <p className="text-gray-700 leading-relaxed">
            En del av varje köp via denna länk går tillbaka till Svenska Kickboxningsförbundet och
            finansierar landslag, utbildning och domarverksamhet. Genom att använda förbundets länk
            och rabattkod stöttar du både dig själv och sporten.
          </p>

          <div className="mt-8 rounded-lg border border-gray-100 bg-gray-50 p-6">
            <p className="mb-3 text-sm font-medium text-gray-600">
              Koderna gäller endast produkter i WAKO TOP TEN-sortimentet.
            </p>
            <p className="text-sm text-gray-600">
              Se hela TOP TEN-sortimentet:{' '}
              <a
                href={AFFILIATE_URLS.toptenCatalog}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-skf-blue underline hover:text-skf-blue/80"
              >
                WAKO TOP TEN hos Nicopia Sport
              </a>
            </p>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Frågor om partnersamarbetet?{' '}
            <Link href="/partners" className="text-skf-blue underline hover:text-skf-blue/80">
              Läs mer om våra partners
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
