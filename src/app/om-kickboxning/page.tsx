/**
 * Om kickboxning
 * Information about the sport of kickboxing
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om kickboxning | Svenska Kickboxningsförbundet',
  description: 'Lär dig mer om kickboxning som sport, dess historia och discipliner.',
};

export default function OmKickboxningPage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">
          Om kickboxning
        </h1>
        <div className="mt-6 space-y-6 text-gray-700">
          <p className="text-lg">
            Kickboxning är en kampsport som kombinerar tekniker från traditionell boxning
            med sparkar från olika kampsporter som karate och taekwondo.
          </p>
          <p>
            Innehåll kommer snart. Denna sida kommer att innehålla information om:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Kickboxningens historia</li>
            <li>Olika discipliner inom kickboxning</li>
            <li>Regler och tävlingsformer</li>
            <li>Kickboxning i Sverige</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
