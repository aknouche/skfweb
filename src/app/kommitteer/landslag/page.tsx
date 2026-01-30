/**
 * Landslagskommittén
 * National team committee page
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landslagskommittén | Svenska Kickboxningsförbundet',
  description: 'Information om Svenska Kickboxningsförbundets landslagskommitté.',
};

export default function LandslagKommittePage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">
          Landslagskommittén
        </h1>
        <div className="mt-6 space-y-6 text-gray-700">
          <p className="text-lg">
            Kommittén ansvarar för det svenska landslaget i kickboxning.
          </p>
          <p>
            Innehåll kommer snart. Denna sida kommer att innehålla:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Kommitténs uppdrag</li>
            <li>Medlemmar</li>
            <li>Landslagsuttagningar</li>
            <li>Kontaktuppgifter</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
