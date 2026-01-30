/**
 * Forsknings- och utvecklingskommittén
 * Research and development committee page
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forsknings- och utvecklingskommittén | Svenska Kickboxningsförbundet',
  description: 'Information om Svenska Kickboxningsförbundets forsknings- och utvecklingskommitté.',
};

export default function ForskningUtvecklingPage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">
          Forsknings- och utvecklingskommittén
        </h1>
        <div className="mt-6 space-y-6 text-gray-700">
          <p className="text-lg">
            Kommittén ansvarar för forskning och utveckling inom svensk kickboxning.
          </p>
          <p>
            Innehåll kommer snart. Denna sida kommer att innehålla:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Kommitténs uppdrag</li>
            <li>Medlemmar</li>
            <li>Pågående projekt</li>
            <li>Kontaktuppgifter</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
