/**
 * Landslagskommittén
 * National team committee page
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landslagskommittén | Svenska Kickboxningsförbundet',
  description:
    'Landslagskommittén ansvarar för elit- och landslagsverksamhet samt internationell representation.',
};

export default function LandslagKommittePage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">Landslagskommittén</h1>

        <div className="mt-6 space-y-4 text-lg text-gray-700">
          <p>
            Landslagskommittén ansvarar för Svenska Kickboxningsförbundets elit- och
            landslagsverksamhet samt förbundets internationella representation. Kommitténs uppdrag
            är att skapa långsiktigt hållbara förutsättningar för prestationsutveckling på högsta
            nivå, i linje med förbundets strategiska mål och internationella krav.
          </p>
          <p>
            Landslagsverksamheten är en integrerad del av svensk kickboxning och bygger på
            principen att internationell framgång inte uppstår isolerat. I stället är den ett
            resultat av systematik, kvalitet och långsiktig utveckling – från föreningsmiljö till
            mästerskap.
          </p>
        </div>

        <div className="mx-auto my-8 h-1 w-16 bg-skf-yellow"></div>

        <div className="mt-10 space-y-12 text-gray-700">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Landslaget som del av ett utvecklingssystem
            </h2>
            <p>
              Landslagskommittén verkar utifrån synsättet att elitverksamhet är en förlängning av
              den nationella strukturen, inte ett parallellt system. Vägen till landslaget ska vara
              tydlig, transparent och förankrad i förbundets grenprofil, utvecklingstrappa och
              utbildningsstruktur.
            </p>
            <p className="mt-4">Kommitténs arbete syftar till att:</p>
            <ul className="ml-6 mt-2 list-disc space-y-2">
              <li>Skapa kontinuitet i utvecklingen av aktiva</li>
              <li>Minska personberoende lösningar</li>
              <li>Säkerställa att internationella prestationer vilar på hållbar grund</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Uttagning och prestationsutveckling
            </h2>
            <p>
              En central del av Landslagskommitténs uppdrag är att ansvara för uttagning och
              utveckling av senior- och juniorlandslag. Uttagning sker utifrån fastställda
              kriterier och med tydlig koppling till sportslig prestation, långsiktig potential och
              helhetsbedömning.
            </p>
            <p className="mt-4">Prestationsutvecklingen omfattar:</p>
            <ul className="ml-6 mt-2 list-disc space-y-2">
              <li>Tävlings- och mästerskapsplanering</li>
              <li>Tränings- och utvecklingsmiljöer</li>
              <li>Individuella och kollektiva utvecklingsinsatser</li>
              <li>Internationell exponering och erfarenhet</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Ledarteam och stödstrukturer
            </h2>
            <p>
              Landslagskommittén leds av förbundskaptenen och omfattar tränare, coacher och
              relevanta stödresurser. Arbetet präglas av professionalitet, tydliga roller och
              gemensamma principer för ledarskap och prestation.
            </p>
            <p className="mt-4">
              Stödstrukturerna utvecklas successivt och kan omfatta områden som fysisk träning och
              återhämtning, mental träning och prestation under press, samt tävlingsanalys och
              utvecklingsuppföljning.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Internationell representation
            </h2>
            <p>
              Landslagskommittén ansvarar för förbundets deltagande i internationella mästerskap
              och tävlingar inom ramen för internationella regelverk. Detta innebär inte enbart
              sportsligt ansvar, utan även ett representativt ansvar gentemot internationella
              organisationer och andra nationer.
            </p>
            <p className="mt-4">
              Genom ett professionellt och strukturerat landslagsarbete bidrar kommittén till att
              stärka svensk kickboxnings internationella position, skapa förebilder inom sporten,
              och återföra erfarenheter och kunskap till den nationella verksamheten.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Landslagsverksamhet som långsiktig investering
            </h2>
            <p>
              Landslagskommitténs arbete ses som en långsiktig investering i svensk kickboxning.
              Internationella prestationer skapar inspiration, legitimitet och utvecklingskraft,
              men värdet sträcker sig längre än medaljer och placeringar.
            </p>
            <p className="mt-4">
              Genom ett välfungerande landslagsprogram stärks hela idrottens kvalitet, struktur och
              attraktionskraft – i linje med Svenska Kickboxningsförbundets övergripande mål och
              Strategi 2030.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
