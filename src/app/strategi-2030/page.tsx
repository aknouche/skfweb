/**
 * Strategi 2030
 * SKF's long-term strategic framework for 2025–2030
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strategi 2030 | Svenska Kickboxningsförbundet',
  description:
    'Strategi 2030 – Svenska Kickboxningsförbundets långsiktiga ramverk för utveckling, kvalitet och internationell konkurrenskraft.',
};

const STRATEGIC_GOALS = [
  {
    number: 1,
    title: 'Utveckling av förbundets organisation och styrning',
  },
  {
    number: 2,
    title: 'Expansion av utövarbasen och ökad tillgänglighet',
  },
  {
    number: 3,
    title: 'Höjd träningskvalitet och förbättrad infrastruktur',
  },
  {
    number: 4,
    title: 'Förstärkning av internationella prestationer',
  },
] as const;

export default function Strategi2030Page() {
  return (
    <main className="py-12 lg:py-16">
      {/* Hero / Intro */}
      <section aria-labelledby="page-title">
        <div className="container-narrow">
          <h1
            id="page-title"
            className="text-3xl font-bold text-skf-blue lg:text-4xl"
          >
            Strategi 2030
          </h1>

          <div className="mt-6 space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              Strategi 2030 är Svenska Kickboxningsförbundets långsiktiga ramverk
              för hur svensk kickboxning ska utvecklas, stärkas och framtidssäkras
              under perioden 2025–2030. Strategin beskriver både var förbundet
              vill vara år 2030 och hur organisationen stegvis ska skapa
              förutsättningar för att nå dit.
            </p>
            <p className="leading-relaxed">
              Utgångspunkten är en tydlig insikt: utvecklingen av svensk
              kickboxning kräver mer än sportsliga ambitioner. För att kunna växa
              hållbart – i antal utövare, i kvalitet, i internationell
              konkurrenskraft och i samhällsrelevans – krävs en sammanhållen
              strategi som integrerar organisation, utbildning, tävling,
              forskning, värdegrund och affärsutveckling.
            </p>
          </div>

          {/* Yellow accent divider */}
          <div
            className="mt-10 h-1 w-20 rounded bg-skf-yellow"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* En idrott för både prestation och utveckling */}
      <section className="mt-16" aria-labelledby="prestation-utveckling">
        <div className="container-narrow">
          <h2
            id="prestation-utveckling"
            className="text-2xl font-bold text-skf-blue lg:text-3xl"
          >
            En idrott för både prestation och utveckling
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Svenska Kickboxningsförbundet verkar för att kickboxning ska vara
              mer än en tävlingsidrott. Strategi 2030 utgår från synen på
              kickboxning som en plattform för fysisk, mental och personlig
              utveckling, tillgänglig för människor i olika åldrar, med olika mål
              och olika förutsättningar.
            </p>
            <p>
              Samtidigt är ambitionen tydlig: svensk kickboxning ska etableras som
              en respekterad och konkurrenskraftig internationell idrott, där
              svenska utövare regelbundet hävdar sig i europa- och
              världsmästerskap. Dessa två perspektiv – bredd och elit – ses inte
              som motsatser, utan som ömsesidigt förstärkande.
            </p>
          </div>
        </div>
      </section>

      {/* Strategiska vägval och långsiktig struktur */}
      <section className="mt-16" aria-labelledby="strategiska-vagval">
        <div className="container-narrow">
          <h2
            id="strategiska-vagval"
            className="text-2xl font-bold text-skf-blue lg:text-3xl"
          >
            Strategiska vägval och långsiktig struktur
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Strategi 2030 bygger på fyra övergripande målområden som tillsammans
            skapar helhet och riktning:
          </p>

          {/* Strategic Goals Cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {STRATEGIC_GOALS.map((goal) => (
              <article
                key={goal.number}
                className="rounded-lg bg-skf-blue p-6 text-white"
              >
                <span className="mb-2 block text-3xl font-bold text-skf-yellow">
                  {goal.number}
                </span>
                <h3 className="text-lg font-semibold leading-snug text-white">
                  {goal.title}
                </h3>
              </article>
            ))}
          </div>

          <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
            <p>
              En central princip i strategin är att intern struktur inte är ett
              mål i sig, utan ett medel för att möjliggöra utveckling i sporten.
              Därför läggs stor vikt vid att systematisera roller, processer och
              ansvar, samt att bygga funktioner för affärsutveckling och forskning
              &amp; utveckling som långsiktigt stärker hela ekosystemet kring
              svensk kickboxning.
            </p>
          </div>
        </div>
      </section>

      {/* Kunskapsbaserad och inkluderande utveckling */}
      <section className="mt-16" aria-labelledby="kunskapsbaserad">
        <div className="container-narrow">
          <h2
            id="kunskapsbaserad"
            className="text-2xl font-bold text-skf-blue lg:text-3xl"
          >
            Kunskapsbaserad och inkluderande utveckling
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Ett genomgående tema i Strategi 2030 är vikten av att utveckla
              sporten på vetenskaplig grund och beprövad erfarenhet. Genom
              etableringen av en tydlig FoU-struktur, en gemensam Body of
              Knowledge, grenprofil och utvecklingstrappa ska träning, utbildning
              och landslagsverksamhet hänga samman i ett gemensamt system.
            </p>
            <p>
              Samtidigt betonas värdegrundsfrågor som inkludering, jämställdhet
              och trygg idrott. Strategin pekar ut tydliga ambitioner kring barn-
              och ungdomsverksamhet, parakickboxning och en bredare
              samhällsnärvaro – där kickboxning även når nya miljöer som skolor,
              gym och arbetsplatser.
            </p>
          </div>
        </div>
      </section>

      {/* Internationell position och framtidsberedskap */}
      <section className="mt-16" aria-labelledby="internationell-position">
        <div className="container-narrow">
          <h2
            id="internationell-position"
            className="text-2xl font-bold text-skf-blue lg:text-3xl"
          >
            Internationell position och framtidsberedskap
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Svensk kickboxning är en del av ett internationellt idrottssystem
              genom World Association of Kickboxing Organizations (WAKO) och den
              globala utvecklingen är en avgörande faktor i strategin. Strategi
              2030 beskriver hur internationellt tävlande, erfarenhetsutbyte och
              samverkan med andra länder ska intensifieras för att stärka svenska
              utövares utveckling.
            </p>
            <p>
              Ambitionen är att bygga ett landslagsprogram som är tätt integrerat
              med utbildning, föreningsverksamhet och FoU – där vägen från
              nybörjare till internationell elit är tydlig, transparent och
              långsiktigt hållbar.
            </p>
          </div>
        </div>
      </section>

      {/* Ett gemensamt åtagande */}
      <section className="mt-16 pb-4" aria-labelledby="gemensamt-atagande">
        <div className="container-narrow">
          <h2
            id="gemensamt-atagande"
            className="text-2xl font-bold text-skf-blue lg:text-3xl"
          >
            Ett gemensamt åtagande
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Strategi 2030 är inte ett statiskt dokument, utan ett levande
              styrinstrument. Den ska fungera som vägledning för styrelse,
              förbundskoordinator, kommittéer och medlemsföreningar – och som ett
              gemensamt språk för utveckling, prioriteringar och beslut.
            </p>
            <p>
              Genom Strategi 2030 tar Svenska Kickboxningsförbundet ett samlat
              grepp om framtiden för svensk kickboxning: med tydlig riktning,
              starkare struktur och ambitionen att skapa en idrott som är hållbar,
              inkluderande och internationellt framgångsrik.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
