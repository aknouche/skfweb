import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsorer | Svenska Kickboxningsförbundet',
  description: 'Sponsorer och partners till Svenska Kickboxningsförbundet.',
};

export default function SponsorerPage() {
  return (
    <main className="py-12 lg:py-16">
      <section>
        <div className="container-narrow">
          <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">Sponsorer</h1>
          <div className="mt-1 h-1 w-20 rounded bg-skf-yellow" aria-hidden="true" />
          <p className="mt-8 text-lg text-gray-600">Innehåll publiceras inom kort.</p>
        </div>
      </section>
    </main>
  );
}
