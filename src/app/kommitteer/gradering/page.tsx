/**
 * Graderingskommittén
 * Grading committee page
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Graderingskommittén | Svenska Kickboxningsförbundet',
  description:
    'Graderingskommittén ansvarar för det nationella graderingssystemet och tilldelning av högre mästargrader.',
};

export default function GraderingPage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">Graderingskommittén</h1>

        <div className="mt-6 space-y-4 text-lg text-gray-700">
          <p>
            Graderingskommittén ansvarar för Svenska Kickboxningsförbundets nationella
            graderingssystem och för tilldelning av högre mästargrader. Kommitténs uppdrag är att
            säkerställa att graderingar inom svensk kickboxning präglas av likvärdighet, kvalitet
            och långsiktighet, oavsett förening eller geografisk tillhörighet.
          </p>
          <p>
            Graderingssystemet är en viktig del av sportens struktur och identitet. Det fungerar
            både som ett verktyg för individuell utveckling och som ett sätt att upprätthålla
            gemensamma standarder för kunskap, färdighet och ledarskap inom svensk kickboxning.
          </p>
        </div>

        <div className="mx-auto my-8 h-1 w-16 bg-skf-yellow"></div>

        <div className="mt-10 space-y-12 text-gray-700">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Gradering som utvecklingsverktyg
            </h2>
            <p className="mb-4">
              Inom svensk kickboxning ses gradering inte enbart som ett formellt steg eller ett
              yttre bevis på progression. Graderingssystemet ska i stället fungera som ett
              pedagogiskt och utvecklingsorienterat verktyg, där varje nivå representerar tydliga
              krav och förväntningar.
            </p>
            <p className="mb-4">Graderingskommittén verkar för att graderingar:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Är förankrade i sportens faktiska krav</li>
              <li>Speglar både teknisk och personlig utveckling</li>
              <li>Bidrar till motivation, struktur och långsiktig progression</li>
            </ul>
            <p className="mt-4">
              Systemet ska stödja både utövare och tränare genom att tydliggöra vad som krävs för
              att utvecklas vidare inom sporten.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Nationell likvärdighet och kvalitet
            </h2>
            <p className="mb-4">
              Ett centralt uppdrag för Graderingskommittén är att säkerställa nationell
              likvärdighet. Det innebär att samma grader ska stå för samma nivå av kunskap och
              färdighet, oavsett var i landet graderingen genomförs.
            </p>
            <p className="mb-4">För att uppnå detta arbetar kommittén med:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Gemensamma kriterier och riktlinjer</li>
              <li>Tydliga processer för mästargradering</li>
              <li>Kvalitetssäkring av bedömning och genomförande</li>
            </ul>
            <p className="mt-4">
              Graderingskommittén ansvarar även för tilldelning av högre mästargrader, där
              bedömningen sker på nationell nivå och utifrån fastställda kriterier.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">Struktur och ansvar</h2>
            <p className="mb-4">
              Graderingskommittén har ett övergripande ansvar för:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Det nationella graderingssystemets utformning och utveckling</li>
              <li>Genomförande av nationella mästargraderingar</li>
              <li>Bedömning och tilldelning av högre mästargrader</li>
            </ul>
            <p className="mt-4">
              Kommitténs arbete sker i dialog med förbundets övriga strukturer och utgår från
              långsiktighet snarare än kortsiktiga behov. Graderingssystemet utvecklas stegvis och
              justeras vid behov för att fortsatt vara relevant i takt med att sporten utvecklas.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Koppling till förbundets helhet
            </h2>
            <p className="mb-4">
              Graderingskommitténs arbete är nära kopplat till förbundets ambition om kvalitet och
              hållbar utveckling. Ett tydligt och väl fungerande graderingssystem bidrar till:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Struktur i tränings- och utbildningsverksamheten</li>
              <li>Tydligare roller och ansvar inom föreningarna</li>
              <li>Ökad legitimitet för svenska instruktörer och ledare</li>
            </ul>
            <p className="mt-4">
              Genom ett gemensamt graderingssystem skapas kontinuitet och förutsägbarhet, vilket
              stärker både individens utveckling och sportens helhet.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
