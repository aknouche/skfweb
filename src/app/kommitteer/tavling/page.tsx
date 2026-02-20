/**
 * Tävlingskommittén
 * Competition committee page
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tävlingskommittén | Svenska Kickboxningsförbundet',
  description:
    'Tävlingskommittén ansvarar för att all nationell tävlingsverksamhet bedrivs säkert, rättssäkert och kvalitativt.',
};

export default function TavlingPage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">Tävlingskommittén</h1>

        <div className="mt-6 space-y-4 text-lg text-gray-700">
          <p>
            Tävlingskommittén är Svenska Kickboxningsförbundets expertorgan för
            tävlingsverksamheten och ansvarar för att all nationell tävlingsverksamhet bedrivs på
            ett säkert, rättssäkert och kvalitativt sätt. Kommitténs uppdrag är att skapa tydliga
            ramar för tävling, säkerställa likvärdiga förutsättningar och upprätthålla förtroendet
            för svensk kickboxning som idrott.
          </p>
          <p>
            Tävlingskommittén verkar i gränslandet mellan sportens praktiska genomförande och dess
            formella regelverk. Arbetet omfattar både strategiska och operativa frågor, med målet
            att tävlingssystemet ska vara långsiktigt hållbart, internationellt kompatibelt och
            anpassat till svensk idrotts kontext.
          </p>
        </div>

        <div className="mx-auto my-8 h-1 w-16 bg-skf-yellow"></div>

        <div className="mt-10 space-y-12 text-gray-700">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Tävlingssystemet som struktur
            </h2>
            <p>
              En grundläggande utgångspunkt för Tävlingskommittén är att tävling inte är ett
              isolerat moment, utan en del av ett större utvecklingssystem. Tävlingsverksamheten
              ska stödja utövarens långsiktiga utveckling, från bredd till elit, och vara tydligt
              kopplad till förbundets grenprofil, utvecklingstrappa och internationella krav.
            </p>
            <p className="mt-4">
              Tävlingskommittén ansvarar därför inte enbart för enskilda tävlingar, utan för
              helheten i tävlingssystemet – inklusive regelverk, tävlingsformer, domarskap och
              sanktioneringsprocesser.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Regelverk och internationell anpassning
            </h2>
            <p className="mb-4">
              Tävlingskommittén förvaltar och utvecklar de nationella tävlingsreglerna i linje med
              internationella regelverk. Regelutvecklingen sker med hänsyn till:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Idrottssäkerhet och medicinska riktlinjer</li>
              <li>Rättvisa och likvärdiga bedömningar</li>
              <li>Tydlighet för arrangörer, domare och aktiva</li>
              <li>Långsiktig hållbarhet i tävlingsformerna</li>
            </ul>
            <p className="mt-4">
              Tävlingskommittén ansvarar även för att tolka och kommunicera regeländringar samt
              för att stödja föreningar och arrangörer i regelrelaterade frågor.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Domarverksamhet och kvalitetssäkring
            </h2>
            <p>
              En central del av Tävlingskommitténs uppdrag är domarverksamheten. Kommittén
              ansvarar för utbildning, licensiering och uppföljning av domare, med målet att
              säkerställa hög kompetens, enhetlig bedömning och professionellt uppträdande.
            </p>
            <p className="mt-4">
              Domarverksamheten ses som en kvalitetsfaktor för hela sporten. Genom tydliga
              utbildningskrav, återkommande fortbildning och strukturerad uppföljning bidrar
              Tävlingskommittén till ökat förtroende för tävlingssystemet och till en tryggare
              tävlingsmiljö.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Sanktionering och arrangörsstöd
            </h2>
            <p>
              Tävlingskommittén ansvarar för sanktionering av tävlingar, inklusive svenska
              mästerskap och andra nationella tävlingar. I detta arbete ingår att säkerställa att
              arrangemang uppfyller förbundets krav på säkerhet, organisation och genomförande.
            </p>
            <p className="mt-4">
              Kommittén fungerar även som stöd till arrangörer genom riktlinjer, mallar och
              rådgivning. Syftet är att underlätta genomförandet av tävlingar och bidra till en
              jämn och professionell nivå över hela landet.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Tävlingsverksamhet som del av utvecklingen
            </h2>
            <p className="mb-4">
              Genom ett väl fungerande tävlingssystem skapas förutsättningar för:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Tydlig progression för aktiva</li>
              <li>Identifiering och utveckling av talanger</li>
              <li>Kvalitetssäkrad väg mot elit och landslag</li>
            </ul>
            <p className="mt-4">
              Ambitionen är att tävlingsverksamheten ska upplevas som tydlig, rättvis och
              utvecklande – oavsett om målet är breddidrott, personlig utveckling eller
              internationell elit.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
