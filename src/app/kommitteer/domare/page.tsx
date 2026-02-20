/**
 * Domarkommittén
 * Referee activities - part of Tävlingskommittén
 */

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Domarverksamhet | Svenska Kickboxningsförbundet',
  description:
    'Domarverksamheten inom svensk kickboxning – utbildning, licensiering och kvalitetssäkring.',
};

export default function DomarePage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">Domarverksamhet</h1>

        <div className="mt-6 space-y-4 text-lg text-gray-700">
          <p>
            Domarverksamheten inom Svenska Kickboxningsförbundet organiseras under{' '}
            <Link href="/kommitteer/tavling" className="font-medium text-skf-blue hover:underline">
              Tävlingskommittén
            </Link>
            . Kommittén ansvarar för utbildning, licensiering och uppföljning av domare, med målet
            att säkerställa hög kompetens, enhetlig bedömning och professionellt uppträdande.
          </p>
          <p>
            Domarverksamheten ses som en kvalitetsfaktor för hela sporten. Genom tydliga
            utbildningskrav, återkommande fortbildning och strukturerad uppföljning bidrar
            domarverksamheten till ökat förtroende för tävlingssystemet och till en tryggare
            tävlingsmiljö.
          </p>
        </div>

        <div className="mx-auto my-8 h-1 w-16 bg-skf-yellow"></div>

        <div className="mt-10 space-y-12 text-gray-700">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Utbildning och licensiering
            </h2>
            <p>
              Tävlingskommittén ansvarar för domarutbildning och licensiering i linje med
              nationella och internationella regelverk. Utbildningen syftar till att säkerställa
              att domare har den kompetens som krävs för att bedöma matcher rättvist och enhetligt.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">Kvalitetssäkring</h2>
            <p>
              Genom återkommande fortbildning, utvärdering och strukturerad uppföljning
              kvalitetssäkras domarverksamheten. Målet är att upprätthålla hög standard och
              förtroende för tävlingssystemet i hela landet.
            </p>
          </section>

          <section>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
              <p className="text-gray-600">
                Läs mer om domarverksamheten på{' '}
                <Link
                  href="/kommitteer/tavling"
                  className="font-medium text-skf-blue hover:underline"
                >
                  Tävlingskommitténs sida
                </Link>
                .
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
