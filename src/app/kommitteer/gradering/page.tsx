/**
 * Graderingskommittén
 * Grading committee page
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Graderingskommittén | Svenska Kickboxningsförbundet',
  description: 'Information om Svenska Kickboxningsförbundets graderingskommitté.',
};

export default function GraderingPage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">
          Graderingskommittén
        </h1>
        <div className="mt-6 space-y-6 text-gray-700">
          <p className="text-lg">
            Kommittén ansvarar för graderingssystemet och bältesprov.
          </p>
          <p>
            Innehåll kommer snart. Denna sida kommer att innehålla:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Kommitténs uppdrag</li>
            <li>Medlemmar</li>
            <li>Graderingskrav</li>
            <li>Kontaktuppgifter</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
