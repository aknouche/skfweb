/**
 * Om kickboxning
 * History, disciplines and development of kickboxing in Sweden
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om kickboxning | Svenska Kickboxningsf\u00f6rbundet',
  description:
    'Kickboxningens historia, discipliner och utveckling i Sverige \u2013 fr\u00e5n internationell framv\u00e4xt till etablerad idrott.',
};

export default function OmKickboxningPage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">
          Om kickboxning
        </h1>

        {/* Intro paragraph */}
        <p className="mt-6 text-lg text-gray-700">
          Kickboxning \u00e4r en modern kampsport med r\u00f6tter i flera stridstraditioner.
          Fr\u00e5n sin framv\u00e4xt i USA under efterkrigstiden har sporten utvecklats
          till en internationellt erk\u00e4nd idrott med olympisk status, organiserad
          i 149 l\u00e4nder. I Sverige \u00e4r kickboxningen en del av Riksidrottsf\u00f6rbundet
          genom Svenska Kickboxningsf\u00f6rbundet.
        </p>

        {/* Yellow accent divider */}
        <div className="mt-8 h-1 w-24 bg-skf-yellow" />

        {/* Content sections */}
        <div className="mt-12 space-y-16">
          {/* Section 1 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue lg:text-3xl">
              En modern idrott v\u00e4xer fram
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Kickboxning v\u00e4xte fram i USA under efterkrigstiden som ett svar p\u00e5
                behovet av ett gemensamt t\u00e4vlingsformat f\u00f6r olika st\u00e5ende
                kampsporter. Ut\u00f6vare fr\u00e5n bland annat karate, taekwondo och boxning
                ville m\u00f6tas under ett och samma regelverk, med fullkontakt, tydliga
                t\u00e4vlingsformer och idrottsliga principer snarare \u00e4n traditionella
                ritualer.
              </p>
              <p>
                Tidigt blev det tydligt att olika stilar bidrog med olika styrkor:
                karateut\u00f6vare med utvecklade bentekniker och boxare med avancerade
                handtekniker. Kombinationen lade grunden f\u00f6r en ny idrott. Under de
                tidiga \u00e5ren anv\u00e4ndes ben\u00e4mningar som Full Contact Karate och Sport
                Karate, innan begreppet kickboxning etablerades internationellt.
              </p>
              <p>
                Avsaknaden av krav p\u00e5 att f\u00f6lja historiska traditioner gjorde
                kickboxning s\u00e4rskilt anpassningsbar. Sporten kunde tidigt ta till sig
                modern kunskap inom fysisk tr\u00e4ning, pedagogik, idrottspsykologi och
                t\u00e4vlingsorganisation \u2013 en egenskap som kom att pr\u00e4gla dess fortsatta
                internationella utveckling.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue lg:text-3xl">
              Internationell organisering och global struktur
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Under 1970-talet organiserades kickboxningen allt tydligare
                internationellt. I Europa bildades World Association of Kickboxing
                Organizations (WAKO), som kom att bli det internationella styrande
                f\u00f6rbundet f\u00f6r sporten. WAKO etablerade gemensamma regelverk,
                t\u00e4vlingsformer, domarutbildningar och m\u00e4sterskap, vilket skapade
                f\u00f6ruts\u00e4ttningar f\u00f6r en global idrott med j\u00e4mf\u00f6rbara villkor mellan
                l\u00e4nder.
              </p>
              <p>
                Denna internationella struktur blev avg\u00f6rande f\u00f6r kickboxningens
                fortsatta utveckling. I dag organiserar WAKO sporten i 149 l\u00e4nder
                p\u00e5 fem kontinenter, med nationella f\u00f6rbund som i stor utstr\u00e4ckning
                \u00e4r erk\u00e4nda av respektive nationella olympiska kommitt\u00e9er eller
                idrottsmyndigheter.
              </p>
              <p>
                Sporten \u00e4r fullt erk\u00e4nd av International Olympic Committee (IOC),
                \u00e4r signat\u00e4r till World Anti-Doping Agency (WADA) och erk\u00e4nd av
                SportAccord/GAISF. Kickboxning ing\u00e5r i flera internationella
                multisportevenemang s\u00e5som The World Games, kontinentala spel och
                milit\u00e4r- och universitetsidrott. Disciplinen K-1 kickboxning har
                dessutom varit fullt utv\u00e4rderad och shortlistad inf\u00f6r OS i Los
                Angeles 2028.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue lg:text-3xl">
              Kickboxningens etablering i Sverige
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Kickboxningen etablerades i Sverige under slutet av 1970-talet och
                b\u00f6rjan av 1980-talet. Precis som i USA och Europa var det
                inledningsvis en renodlad fullkontaktsport.
              </p>
              <p>
                En central pionj\u00e4r var Bert &ldquo;Viking&rdquo; Johansson, som efter
                flera \u00e5rs tr\u00e4ning i Japan introducerade sporten i Sverige under
                namnet Full Kontakt Karate. Han grundade organisationen Viking, den
                f\u00f6rsta svenska organisationen f\u00f6r sporten. Under mitten av 1980-talet
                tog utvecklingen ny fart genom bildandet av Swedish All Style
                Fighting Association (SAFA), med akt\u00f6rer som Benny Hedlund (FOX
                Malm\u00f6) och P-O Lindvall (Slagskeppet, Stockholm). SAFA kom senare
                att utvecklas till Svenska Kickboxningsf\u00f6rbundet i dess tidigare
                form (SKIF).
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue lg:text-3xl">
              Professionaliseringsfas och internationell anpassning
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                I b\u00f6rjan av 1990-talet tog svensk kickboxning viktiga steg mot \u00f6kad
                professionalisering. Nya ledande akt\u00f6rer, d\u00e4ribland Lars
                &ldquo;Blomman&rdquo; Blomgren, Jonny Andreasson, Thomas
                &ldquo;Totto&rdquo; Heiderup och Johan \u00d6jeheim, bidrog till att
                strukturera verksamheten. Domarutbildningar organiserades, ett
                gemensamt graderingssystem inf\u00f6rdes och t\u00e4vlingsformerna
                tydliggjordes.
              </p>
              <p>
                Samtidigt anpassades svensk kickboxning successivt till den
                internationella utvecklingen inom WAKO. T\u00e4vlingsformen Light Contact
                erk\u00e4ndes och etablerades, f\u00f6rst som ett insteg till fullkontakt men
                senare som en egen disciplin. D\u00e4refter tillkom Kick Light, som i dag
                \u00e4r en av de centrala disciplinerna internationellt och nationellt.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue lg:text-3xl">
              RF-anslutning och plats i idrottsr\u00f6relsen
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Parallellt med den sportsliga utvecklingen p\u00e5gick ett l\u00e5ngsiktigt
                arbete f\u00f6r att integrera kickboxningen i den svenska
                idrottsr\u00f6relsen. Detta arbete kulminerade n\u00e4r Svenska
                Kickboxningsf\u00f6rbundet blev medlem i Svenska Budo- och
                Kampsportsf\u00f6rbundet och d\u00e4rigenom \u00e4ven i Riksidrottsf\u00f6rbundet.
              </p>
              <p>
                RF-anslutningen innebar att svensk kickboxning fullt ut omfattas av
                idrottsr\u00f6relsens regelverk, v\u00e4rdegrund och strukturer f\u00f6r barn- och
                ungdomsidrott, utbildning, antidoping och f\u00f6reningsdemokrati.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue lg:text-3xl">
              Svensk kickboxning i ett globalt sammanhang
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                I dag bedrivs svensk kickboxning som en fullt integrerad del av en
                global idrott. F\u00f6rbundet organiserar disciplinerna:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Junior Kickboxning (JK)</li>
                <li>Kick Light (KL)</li>
                <li>Low Kick (LK)</li>
                <li>K-1</li>
              </ul>
              <p>
                Genom den internationella strukturen inom WAKO deltar svenska
                ut\u00f6vare, domare och ledare i ett system som omfattar hundratals
                internationella t\u00e4vlingar varje \u00e5r. Svenska landslag t\u00e4vlar i
                m\u00e4sterskap med olympisk status och verkar inom samma antidoping- och
                governance-ramar som andra internationellt erk\u00e4nda idrotter.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
