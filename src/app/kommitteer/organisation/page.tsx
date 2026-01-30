/**
 * Organisation
 * SKF organizational structure
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Organisation | Svenska Kickboxningsförbundet',
  description: 'Svenska Kickboxningsförbundets organisationsschema och struktur.',
};

export default function OrganisationPage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">
          Organisation
        </h1>
        <div className="mt-6 space-y-6 text-gray-700">
          <p className="text-lg">
            Svenska Kickboxningsförbundets organisationsstruktur och ledning.
          </p>
          <p>
            Innehåll kommer snart. Denna sida kommer att innehålla:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Organisationsschema</li>
            <li>Styrelsen</li>
            <li>Anställda</li>
            <li>Kontaktuppgifter</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
