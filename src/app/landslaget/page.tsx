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
            Landslagskommitt&eacute;n ansvarar f&ouml;r Svenska
            Kickboxningsf&ouml;rbundets elit- och landslagsverksamhet samt
            f&ouml;rbundets internationella representation. Kommitt&eacute;ns
            uppdrag &auml;r att skapa l&aring;ngsiktigt h&aring;llbara
            f&ouml;ruts&auml;ttningar f&ouml;r prestationsutveckling p&aring;
            h&ouml;gsta niv&aring;, i linje med f&ouml;rbundets strategiska
            m&aring;l och internationella krav.
          </p>
          <p>
            Landslagsverksamheten &auml;r en integrerad del av svensk
            kickboxning och bygger p&aring; principen att internationell
            framg&aring;ng inte uppst&aring;r isolerat. I st&auml;llet &auml;r
            den ett resultat av systematik, kvalitet och l&aring;ngsiktig
            utveckling &ndash; fr&aring;n f&ouml;reningsmilj&ouml; till
            m&auml;sterskap.
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
            Landslagskommitt&eacute;n verkar utifr&aring;n syns&auml;ttet att
            elitverksamhet &auml;r en f&ouml;rl&auml;ngning av den nationella
            strukturen, inte ett parallellt system. V&auml;gen till landslaget
            ska vara tydlig, transparent och f&ouml;rankrad i f&ouml;rbundets
            grenprofil, utvecklingstrappa och utbildningsstruktur.
          </p>
          <p>Kommitt&eacute;ns arbete syftar till att:</p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Skapa kontinuitet i utvecklingen av aktiva</li>
            <li>Minska personberoende l&ouml;sningar</li>
            <li>
              S&auml;kerst&auml;lla att internationella prestationer vilar
              p&aring; h&aring;llbar grund
            </li>
          </ul>
          <p>
            Elitverksamheten ska b&aring;de m&ouml;jligg&ouml;ra
            topprestationer och fungera som ett riktm&auml;rke f&ouml;r
            sportens utveckling i stort.
          </p>
        </section>

        {/* Uttagning och prestationsutveckling */}
        <section className="mt-10 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-skf-blue">
            Uttagning och prestationsutveckling
          </h2>
          <p>
            En central del av Landslagskommitt&eacute;ns uppdrag &auml;r att
            ansvara f&ouml;r uttagning och utveckling av senior- och
            juniorlandslag. Uttagning sker utifr&aring;n fastst&auml;llda
            kriterier och med tydlig koppling till sportslig prestation,
            l&aring;ngsiktig potential och helhetsbed&ouml;mning.
          </p>
          <p>Prestationsutvecklingen omfattar:</p>
          <ul className="ml-6 list-disc space-y-2">
            <li>T&auml;vlings- och m&auml;sterskapsplanering</li>
            <li>Tr&auml;nings- och utvecklingsmilj&ouml;er</li>
            <li>Individuella och kollektiva utvecklingsinsatser</li>
            <li>Internationell exponering och erfarenhet</li>
          </ul>
        </section>

        {/* Ledarteam och stödstrukturer */}
        <section className="mt-10 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-skf-blue">
            Ledarteam och st&ouml;dstrukturer
          </h2>
          <p>
            Landslagskommitt&eacute;n leds av f&ouml;rbundskaptenen och
            omfattar tr&auml;nare, coacher och relevanta st&ouml;dresurser.
            Arbetet pr&auml;glas av professionalitet, tydliga roller och
            gemensamma principer f&ouml;r ledarskap och prestation.
          </p>
          <p>
            St&ouml;dstrukturerna utvecklas successivt och kan omfatta
            omr&aring;den som fysisk tr&auml;ning och &aring;terh&auml;mtning,
            mental tr&auml;ning och prestation under press, samt
            t&auml;vlingsanalys och utvecklingsuppf&ouml;ljning.
          </p>
        </section>

        {/* Internationell representation */}
        <section className="mt-10 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-skf-blue">
            Internationell representation
          </h2>
          <p>
            Landslagskommitt&eacute;n ansvarar f&ouml;r f&ouml;rbundets
            deltagande i internationella m&auml;sterskap och t&auml;vlingar
            inom ramen f&ouml;r internationella regelverk. Detta inneb&auml;r
            inte enbart sportsligt ansvar, utan &auml;ven ett representativt
            ansvar gentemot internationella organisationer och andra nationer.
          </p>
          <p>
            Genom ett professionellt och strukturerat landslagsarbete bidrar
            kommitt&eacute;n till att st&auml;rka svensk kickboxnings
            internationella position, skapa f&ouml;rebilder inom sporten, och
            &aring;terf&ouml;ra erfarenheter och kunskap till den nationella
            verksamheten.
          </p>
        </section>

        {/* Landslagsverksamhet som långsiktig investering */}
        <section className="mt-10 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-skf-blue">
            Landslagsverksamhet som l&aring;ngsiktig investering
          </h2>
          <p>
            Landslagskommitt&eacute;ns arbete ses som en l&aring;ngsiktig
            investering i svensk kickboxning. Internationella prestationer
            skapar inspiration, legitimitet och utvecklingskraft, men
            v&auml;rdet str&auml;cker sig l&auml;ngre &auml;n medaljer och
            placeringar.
          </p>
          <p>
            Genom ett v&auml;lfungerande landslagsprogram st&auml;rks hela
            idrottens kvalitet, struktur och attraktionskraft &ndash; i linje
            med Svenska Kickboxningsf&ouml;rbundets &ouml;vergripande m&aring;l
            och Strategi&nbsp;2030.
          </p>
        </section>
      </div>
    </main>
  );
}
