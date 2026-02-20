/**
 * Forsknings- och utvecklingskommittén (FoU)
 * Research and development committee page
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forsknings- och utvecklingskommittén | Svenska Kickboxningsförbundet',
  description:
    'FoU-kommittén är Svenska Kickboxningsförbundets kunskaps- och utvecklingsmotor för vetenskapligt grundad idrottsutveckling.',
};

export default function ForskningUtvecklingPage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">
          Forsknings- och utvecklingskommittén (FoU)
        </h1>

        <div className="mt-6 space-y-4 text-lg text-gray-700">
          <p>
            Forsknings- och utvecklingskommittén (FoU) är Svenska Kickboxningsförbundets kunskaps-
            och utvecklingsmotor. Kommitténs uppdrag är att långsiktigt stärka kvaliteten,
            konkurrenskraften och hållbarheten inom svensk kickboxning genom att säkerställa att
            sportens utveckling vilar på vetenskaplig grund, beprövad erfarenhet och systematiskt
            lärande.
          </p>
          <p>
            FoU-kommittén arbetar tvärfunktionellt och har en central roll i att knyta samman
            forskning, praktik och strategisk utveckling. Kommittén bidrar inte med isolerade
            projekt, utan med strukturer, modeller och kunskapsunderlag som genomsyrar hela
            förbundets verksamhet – från föreningsnivå till landslag.
          </p>
        </div>

        <div className="mx-auto my-8 h-1 w-16 bg-skf-yellow"></div>

        <div className="mt-10 space-y-12 text-gray-700">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              FoU-kommitténs roll i förbundets helhet
            </h2>
            <p>
              FoU-kommittén fungerar som ett stödjande och vägledande organ för övriga kommittéer.
              Genom att samla in, analysera och strukturera kunskap skapar FoU förutsättningar för
              välgrundade beslut inom utbildning, tävling, gradering och landslagsverksamhet.
            </p>
            <p className="mt-4">
              Kommittén har även ett strategiskt uppdrag kopplat till Strategi 2030, där forskning
              och utveckling lyfts som en avgörande faktor för att höja träningskvalitet, förbättra
              infrastrukturen och stärka Sveriges internationella position.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Centrala utvecklingsområden
            </h2>
            <p className="mb-6">
              FoU-kommitténs arbete är organiserat kring ett antal långsiktiga utvecklingsområden
              som tillsammans utgör grunden för svensk kickboxnings kunskapsstruktur.
            </p>

            <div className="space-y-6">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Body of Knowledge</h3>
                <p>
                  Kommittén ansvarar för att bygga och förvalta en samlad kunskapsbas för svensk
                  kickboxning. Denna struktur samlar vetenskapliga rön, idrottsmedicinsk kunskap,
                  prestationsfysiologi, pedagogik och praktisk erfarenhet i ett gemensamt ramverk
                  som kan användas av tränare, utbildare och beslutsfattare.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  Grenprofil och kravanalys
                </h3>
                <p>
                  FoU-kommittén utvecklar en tydlig grenprofil för kickboxning, där sportens krav
                  på fysik, teknik, taktik och mental förmåga analyseras och beskrivs. Syftet är
                  att skapa en gemensam förståelse för vad som faktiskt krävs för att utvecklas och
                  prestera inom sporten – på olika nivåer.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Utvecklingstrappa</h3>
                <p>
                  Utifrån grenprofilen tas en utvecklingstrappa fram som beskriver lämpliga
                  utvecklingssteg över tid. Trappan ska fungera som ett vägledande verktyg för
                  föreningar, tränare och utövare, och skapa en röd tråd mellan barn- och
                  ungdomsverksamhet, bredd, elit och landslag.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Stöd till förbundets övriga verksamhet
            </h2>
            <p className="mb-4">
              FoU-kommitténs uppdrag är inte att ersätta andra kommittéers ansvar, utan att stärka
              dem. Kommittén fungerar som ett nav för kvalitetssäkring och långsiktig utveckling,
              bland annat genom att:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Tillhandahålla kunskapsunderlag för utbildningar</li>
              <li>Bidra till evidensbaserade beslut inom tävlings- och regelverksutveckling</li>
              <li>Stödja utvecklingen av graderingssystem och kriterier</li>
              <li>Bidra till landslagsverksamhetens långsiktiga prestationsutveckling</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Arbetssätt och långsiktig ambition
            </h2>
            <p>
              FoU-kommittén arbetar långsiktigt och iterativt. Kunskap ses som något som
              kontinuerligt utvecklas, testas, utvärderas och justeras i takt med att sporten
              förändras och nya rön tillkommer. Arbetet sker i dialog med praktiken – föreningar,
              tränare och aktiva – för att säkerställa relevans och tillämpbarhet.
            </p>
            <p className="mt-4">
              Ambitionen är att svensk kickboxning ska präglas av ett gemensamt, professionellt och
              kunskapsbaserat förhållningssätt, där utveckling inte är personbunden utan
              strukturellt förankrad.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
