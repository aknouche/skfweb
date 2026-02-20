/**
 * Marknadskommittén
 * Marketing, ethics and sustainability committee page
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marknadskommittén | Svenska Kickboxningsförbundet',
  description:
    'Marknadskommittén ansvarar för marknad, hållbarhet, etik och affärsutveckling inom SKF.',
};

export default function MarknadPage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">Marknadskommittén</h1>

        <div className="mt-6 space-y-4 text-lg text-gray-700">
          <p>
            Marknadskommittén ansvarar för Svenska Kickboxningsförbundets arbete inom marknad,
            hållbarhet, etik och affärsutveckling. Kommitténs uppdrag är att skapa långsiktigt
            hållbara ekonomiska och organisatoriska förutsättningar för förbundets verksamhet, i
            linje med Strategi 2030 och idrottsrörelsens värdegrund.
          </p>
          <p>
            Marknadsarbetet utgår från insikten att en stabil och professionell ekonomi är en
            förutsättning för utveckling inom samtliga delar av verksamheten – från utbildning och
            tävling till landslag och internationellt deltagande.
          </p>
        </div>

        <div className="mx-auto my-8 h-1 w-16 bg-skf-yellow"></div>

        <div className="mt-10 space-y-12 text-gray-700">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Marknad och affärsutveckling i ett idrottsperspektiv
            </h2>
            <p className="mb-4">
              Marknadskommitténs arbete tar sin utgångspunkt i idrottens särart. Kommersiella
              samarbeten, sponsring och affärsmodeller ska stärka sporten utan att kompromissa med
              dess värdegrund, integritet eller långsiktiga mål.
            </p>
            <p className="mb-4">Kommittén arbetar för att utveckla strukturer som:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Stärker förbundets självfinansiering</li>
              <li>Skapar mervärde för medlemsföreningar</li>
              <li>Bidrar till en tydlig och trovärdig extern positionering</li>
            </ul>
            <p className="mt-4">
              Affärsutveckling ses inte som ett mål i sig, utan som ett verktyg för att möjliggöra
              utbildning, kvalitetssäkring, breddverksamhet och elitutveckling.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">Hållbarhet och etik</h2>
            <p className="mb-4">
              Ett centralt ansvarsområde för Marknadskommittén är att säkerställa att förbundets
              marknads- och samarbetsformer bedrivs på ett etiskt och hållbart sätt. Detta omfattar
              såväl social som organisatorisk och ekonomisk hållbarhet.
            </p>
            <p className="mb-4">Kommittén bidrar till att:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Utveckla och förvalta förbundets hållbarhetsarbete</li>
              <li>Fungera som stöd och referens i etiska frågor</li>
              <li>
                Säkerställa att samarbeten och sponsoravtal är förenliga med förbundets värdegrund
              </li>
            </ul>
            <p className="mt-4">
              Genom tydliga principer och riktlinjer skapas långsiktigt förtroende hos medlemmar,
              samarbetspartners och externa aktörer.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Struktur, prioriteringar och långsiktighet
            </h2>
            <p className="mb-4">
              Marknadskommitténs arbete präglas av långsiktighet och strukturerad utveckling. Fokus
              ligger på att bygga stabila modeller och ramverk snarare än kortsiktiga
              intäktslösningar.
            </p>
            <p className="mb-4">Kommittén verkar för att:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Identifiera strategiska samarbeten på förbundsnivå</li>
              <li>Utveckla gemensamma sponsor- och partnerstrukturer</li>
              <li>Bidra till förbundets övergripande utvecklingsmål</li>
            </ul>
            <p className="mt-4">
              Arbetet sker i nära dialog med styrelse och förbundskoordinator och utgår från
              förbundets samlade behov och prioriteringar.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
