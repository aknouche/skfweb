/**
 * Om förbundet
 * About the Swedish Kickboxing Federation – organisation, membership, and affiliations
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om förbundet | Svenska Kickboxningsförbundet',
  description:
    'Om Svenska Kickboxningsförbundet – organisation, medlemskap, Riksidrottsförbundet och internationell anslutning.',
};

export default function OmForbundetPage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        {/* Page title */}
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">
          Om förbundet
        </h1>

        {/* Intro section */}
        <section className="mt-6 space-y-4 text-gray-700">
          <p className="text-lg">
            Svenska Kickboxningsförbundet (SKF) är ett självständigt
            idrottsförbund med egna stadgar och egen organisation. Förbundet har
            sedan 2004 varit medlem i Svenska Budo- och Kampsportsförbundet
            (SB&amp;K) och därigenom även i Riksidrottsförbundet (RF).
          </p>
          <p>
            Formellt är SKF ett underförbund till Svenska Budo- och
            Kampsportsförbundet, som i sin tur är ett specialidrottsförbund inom
            Riksidrottsförbundet. Detta innebär att kickboxning i Sverige är
            fullt integrerad i den svenska idrottsrörelsen och verkar inom RF:s
            regelverk, värdegrund och organisationsstruktur.
          </p>
          <p>
            Endast föreningar som är medlemmar i Svenska Kickboxningsförbundet
            omfattas av förbundets försäkringslösningar. Det är också dessa
            föreningar och deras aktiva som har rätt att delta i sanktionerade
            tävlingar samt kan bli aktuella för uttagning till det svenska
            landslaget. Förbundet samlar i dag drygt 3&nbsp;200 medlemmar
            (2025).
          </p>
        </section>

        {/* Yellow accent divider */}
        <div
          className="my-10 h-1 w-16 bg-skf-yellow"
          role="separator"
          aria-hidden="true"
        />

        {/* Riksidrottsförbundet section */}
        <section className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-skf-blue">
            Riksidrottsförbundet (RF)
          </h2>
          <p>
            Riksidrottsförbundet (RF) har som främsta uppgift att stödja sina
            medlemsförbund och att företräda den samlade idrottsrörelsen i
            kontakter med bland annat myndigheter, politiska beslutsfattare och
            samhällsaktörer.
          </p>
          <p>
            En central del av RF:s uppdrag är att synliggöra idrottens
            samhällsnytta, exempelvis dess betydelse för folkhälsa, inkludering
            och ungdomsutveckling. RF ansvarar även för den övergripande
            strategiska inriktningen för svensk idrott, vilket omfattar frågor
            som finansiering, organisationsformer, styrning och kommunikation.
          </p>
        </section>

        {/* WAKO section */}
        <section className="mt-10 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-skf-blue">
            WAKO &ndash; internationell organisering av kickboxning
          </h2>
          <p>
            World Association of Kickboxing Organizations (WAKO) är världens
            största internationella kickboxningsförbund och är officiellt erkänt
            samt medlem i SportAccord. Samtliga skandinaviska länder och
            merparten av världens nationer är anslutna till WAKO.
          </p>
          <p>
            Inom WAKO organiseras internationella tävlingar och mästerskap i
            kickboxningens olika discipliner. Det svenska landslaget i
            kickboxning tas ut för deltagande i europamästerskap (EM) och
            världsmästerskap (VM) inom ramen för WAKO:s tävlingssystem.
          </p>
          <p>
            Genom medlemskapet i WAKO och anslutningen till World Anti-Doping
            Agency (WADA) säkerställs att svensk kickboxning bedrivs enligt
            internationellt erkända regelverk för tävling, säkerhet och
            antidoping.
          </p>
        </section>
      </div>
    </main>
  );
}
