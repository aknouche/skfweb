/**
 * Strategi 2030
 * SKF's strategic plan for 2030
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strategi 2030 | Svenska Kickboxningsförbundet',
  description: 'Svenska Kickboxningsförbundets strategiska plan och vision för 2030.',
};

export default function Strategi2030Page() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">
          Strategi 2030
        </h1>
        <div className="mt-6 space-y-6 text-gray-700">
          <p className="text-lg">
            Svenska Kickboxningsförbundets strategiska plan för framtiden.
          </p>
          <p>
            Innehåll kommer snart. Denna sida kommer att innehålla information om:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Vision och mission</li>
            <li>Strategiska mål</li>
            <li>Fokusområden</li>
            <li>Handlingsplaner</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
