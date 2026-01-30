/**
 * Marknadskommittén
 * Marketing committee page
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marknadskommittén | Svenska Kickboxningsförbundet',
  description: 'Information om Svenska Kickboxningsförbundets marknadskommitté.',
};

export default function MarknadPage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">
          Marknadskommittén
        </h1>
        <div className="mt-6 space-y-6 text-gray-700">
          <p className="text-lg">
            Kommittén ansvarar för marknadsföring och sponsorsamarbeten.
          </p>
          <p>
            Innehåll kommer snart. Denna sida kommer att innehålla:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Kommitténs uppdrag</li>
            <li>Medlemmar</li>
            <li>Sponsorsamarbeten</li>
            <li>Kontaktuppgifter</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
