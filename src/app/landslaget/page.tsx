/**
 * Landslaget
 * The Swedish national kickboxing team – elite operations, selection, and international championships
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landslaget | Svenska Kickboxningsförbundet',
  description:
    'Svenska landslaget i kickboxning – elit- och landslagsverksamhet, uttagning och internationella mästerskap.',
};

export default function LandslagetPage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        {/* Page title */}
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">
          Landslaget
        </h1>

        {/* Intro section */}
        <section className="mt-6 space-y-4 text-gray-700">
          <p className="text-lg">
            Landslagskommittén ansvarar för Svenska
            Kickboxningsförbundets elit- och landslagsverksamhet samt
            förbundets internationella representation. Kommitténs
            uppdrag är att skapa långsiktigt hållbara
            förutsättningar för prestationsutveckling på
            högsta nivå, i linje med förbundets strategiska
            mål och internationella krav.
          </p>
          <p>
            Landslagsverksamheten är en integrerad del av svensk
            kickboxning och bygger på principen att internationell
            framgång inte uppstår isolerat. I stället är
            den ett resultat av systematik, kvalitet och långsiktig
            utveckling – från föreningsmiljö till
            mästerskap.
          </p>
        </section>

        {/* Yellow accent divider */}
        <div
          className="my-10 h-1 w-16 bg-skf-yellow"
          role="separator"
          aria-hidden="true"
        />

        {/* Landslaget som del av ett utvecklingssystem */}
        <section className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-skf-blue">
            Landslaget som del av ett utvecklingssystem
          </h2>
          <p>
            Landslagskommittén verkar utifrån synsättet att
            elitverksamhet är en förlängning av den nationella
            strukturen, inte ett parallellt system. Vägen till landslaget
            ska vara tydlig, transparent och förankrad i förbundets
            grenprofil, utvecklingstrappa och utbildningsstruktur.
          </p>
          <p>Kommitténs arbete syftar till att:</p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Skapa kontinuitet i utvecklingen av aktiva</li>
            <li>Minska personberoende lösningar</li>
            <li>
              Säkerställa att internationella prestationer vilar
              på hållbar grund
            </li>
          </ul>
          <p>
            Elitverksamheten ska både möjliggöra
            topprestationer och fungera som ett riktmärke för
            sportens utveckling i stort.
          </p>
        </section>

        {/* Uttagning och prestationsutveckling */}
        <section className="mt-10 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-skf-blue">
            Uttagning och prestationsutveckling
          </h2>
          <p>
            En central del av Landslagskommitténs uppdrag är att
            ansvara för uttagning och utveckling av senior- och
            juniorlandslag. Uttagning sker utifrån fastställda
            kriterier och med tydlig koppling till sportslig prestation,
            långsiktig potential och helhetsbedömning.
          </p>
          <p>Prestationsutvecklingen omfattar:</p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Tävlings- och mästerskapsplanering</li>
            <li>Tränings- och utvecklingsmiljöer</li>
            <li>Individuella och kollektiva utvecklingsinsatser</li>
            <li>Internationell exponering och erfarenhet</li>
          </ul>
        </section>

        {/* Ledarteam och stödstrukturer */}
        <section className="mt-10 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-skf-blue">
            Ledarteam och stödstrukturer
          </h2>
          <p>
            Landslagskommittén leds av förbundskaptenen och
            omfattar tränare, coacher och relevanta stödresurser.
            Arbetet präglas av professionalitet, tydliga roller och
            gemensamma principer för ledarskap och prestation.
          </p>
          <p>
            Stödstrukturerna utvecklas successivt och kan omfatta
            områden som fysisk träning och återhämtning,
            mental träning och prestation under press, samt
            tävlingsanalys och utvecklingsuppföljning.
          </p>
        </section>

        {/* Internationell representation */}
        <section className="mt-10 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-skf-blue">
            Internationell representation
          </h2>
          <p>
            Landslagskommittén ansvarar för förbundets
            deltagande i internationella mästerskap och tävlingar
            inom ramen för internationella regelverk. Detta innebär
            inte enbart sportsligt ansvar, utan även ett representativt
            ansvar gentemot internationella organisationer och andra nationer.
          </p>
          <p>
            Genom ett professionellt och strukturerat landslagsarbete bidrar
            kommittén till att stärka svensk kickboxnings
            internationella position, skapa förebilder inom sporten, och
            återföra erfarenheter och kunskap till den nationella
            verksamheten.
          </p>
        </section>

        {/* Landslagsverksamhet som långsiktig investering */}
        <section className="mt-10 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-skf-blue">
            Landslagsverksamhet som långsiktig investering
          </h2>
          <p>
            Landslagskommitténs arbete ses som en långsiktig
            investering i svensk kickboxning. Internationella prestationer
            skapar inspiration, legitimitet och utvecklingskraft, men
            värdet sträcker sig längre än medaljer och
            placeringar.
          </p>
          <p>
            Genom ett välfungerande landslagsprogram stärks hela
            idrottens kvalitet, struktur och attraktionskraft – i linje
            med Svenska Kickboxningsförbundets övergripande mål
            och Strategi 2030.
          </p>
        </section>
      </div>
    </main>
  );
}
