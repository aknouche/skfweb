/**
 * Om kickboxning
 * History, disciplines and development of kickboxing in Sweden
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om kickboxning | Svenska Kickboxningsförbundet',
  description:
    'Kickboxningens historia, discipliner och utveckling i Sverige – från internationell framväxt till etablerad idrott.',
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
          Kickboxning är en modern kampsport med rötter i flera stridstraditioner.
          Från sin framväxt i USA under efterkrigstiden har sporten utvecklats
          till en internationellt erkänd idrott med olympisk status, organiserad
          i 149 länder. I Sverige är kickboxningen en del av Riksidrottsförbundet
          genom Svenska Kickboxningsförbundet.
        </p>

        {/* Yellow accent divider */}
        <div className="mt-8 h-1 w-24 bg-skf-yellow" />

        {/* Content sections */}
        <div className="mt-12 space-y-16">
          {/* Section 1 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue lg:text-3xl">
              En modern idrott växer fram
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Kickboxning växte fram i USA under efterkrigstiden som ett svar på
                behovet av ett gemensamt tävlingsformat för olika stående
                kampsporter. Utövare från bland annat karate, taekwondo och boxning
                ville mötas under ett och samma regelverk, med fullkontakt, tydliga
                tävlingsformer och idrottsliga principer snarare än traditionella
                ritualer.
              </p>
              <p>
                Tidigt blev det tydligt att olika stilar bidrog med olika styrkor:
                karateutövare med utvecklade bentekniker och boxare med avancerade
                handtekniker. Kombinationen lade grunden för en ny idrott. Under de
                tidiga åren användes benämningar som Full Contact Karate och Sport
                Karate, innan begreppet kickboxning etablerades internationellt.
              </p>
              <p>
                Avsaknaden av krav på att följa historiska traditioner gjorde
                kickboxning särskilt anpassningsbar. Sporten kunde tidigt ta till sig
                modern kunskap inom fysisk träning, pedagogik, idrottspsykologi och
                tävlingsorganisation – en egenskap som kom att prägla dess fortsatta
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
                förbundet för sporten. WAKO etablerade gemensamma regelverk,
                tävlingsformer, domarutbildningar och mästerskap, vilket skapade
                förutsättningar för en global idrott med jämförbara villkor mellan
                länder.
              </p>
              <p>
                Denna internationella struktur blev avgörande för kickboxningens
                fortsatta utveckling. I dag organiserar WAKO sporten i 149 länder
                på fem kontinenter, med nationella förbund som i stor utsträckning
                är erkända av respektive nationella olympiska kommittéer eller
                idrottsmyndigheter.
              </p>
              <p>
                Sporten är fullt erkänd av International Olympic Committee (IOC),
                är signatär till World Anti-Doping Agency (WADA) och erkänd av
                SportAccord/GAISF. Kickboxning ingår i flera internationella
                multisportevenemang såsom The World Games, kontinentala spel och
                militär- och universitetsidrott. Disciplinen K-1 kickboxning har
                dessutom varit fullt utvärderad och shortlistad inför OS i Los
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
                början av 1980-talet. Precis som i USA och Europa var det
                inledningsvis en renodlad fullkontaktsport.
              </p>
              <p>
                En central pionjär var Bert "Viking" Johansson, som efter
                flera års träning i Japan introducerade sporten i Sverige under
                namnet Full Kontakt Karate. Han grundade organisationen Viking, den
                första svenska organisationen för sporten. Under mitten av 1980-talet
                tog utvecklingen ny fart genom bildandet av Swedish All Style
                Fighting Association (SAFA), med aktörer som Benny Hedlund (FOX
                Malmö) och P-O Lindvall (Slagskeppet, Stockholm). SAFA kom senare
                att utvecklas till Svenska Kickboxningsförbundet i dess tidigare
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
                I början av 1990-talet tog svensk kickboxning viktiga steg mot ökad
                professionalisering. Nya ledande aktörer, däribland Lars
                "Blomman" Blomgren, Jonny Andreasson, Thomas
                "Totto" Heiderup och Johan Öjeheim, bidrog till att
                strukturera verksamheten. Domarutbildningar organiserades, ett
                gemensamt graderingssystem infördes och tävlingsformerna
                tydliggjordes.
              </p>
              <p>
                Samtidigt anpassades svensk kickboxning successivt till den
                internationella utvecklingen inom WAKO. Tävlingsformen Light Contact
                erkändes och etablerades, först som ett insteg till fullkontakt men
                senare som en egen disciplin. Därefter tillkom Kick Light, som i dag
                är en av de centrala disciplinerna internationellt och nationellt.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue lg:text-3xl">
              RF-anslutning och plats i idrottsrörelsen
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Parallellt med den sportsliga utvecklingen pågick ett långsiktigt
                arbete för att integrera kickboxningen i den svenska
                idrottsrörelsen. Detta arbete kulminerade när Svenska
                Kickboxningsförbundet blev medlem i Svenska Budo- och
                Kampsportsförbundet och därigenom även i Riksidrottsförbundet.
              </p>
              <p>
                RF-anslutningen innebar att svensk kickboxning fullt ut omfattas av
                idrottsrörelsens regelverk, värdegrund och strukturer för barn- och
                ungdomsidrott, utbildning, antidoping och föreningsdemokrati.
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
                global idrott. Förbundet organiserar disciplinerna:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Junior Kickboxning (JK)</li>
                <li>Kick Light (KL)</li>
                <li>Low Kick (LK)</li>
                <li>K-1</li>
              </ul>
              <p>
                Genom den internationella strukturen inom WAKO deltar svenska
                utövare, domare och ledare i ett system som omfattar hundratals
                internationella tävlingar varje år. Svenska landslag tävlar i
                mästerskap med olympisk status och verkar inom samma antidoping- och
                governance-ramar som andra internationellt erkända idrotter.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
