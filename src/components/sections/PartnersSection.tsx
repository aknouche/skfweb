/**
 * Partners Section Component
 * Simple partner/sponsor logo display
 * In P1: Placeholder, ready for real logos in P2
 */

import { SectionHeader } from '@/components/ui/SectionHeader';

export function PartnersSection() {
  // Placeholder - will be populated with real partner data in P2
  const partners = [
    { id: '1', name: 'Partner 1' },
    { id: '2', name: 'Partner 2' },
    { id: '3', name: 'Partner 3' },
    { id: '4', name: 'Partner 4' },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Våra Partners & Samarbeten" variant="light" />

        {/* Partner Grid - Placeholder */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8"
            >
              <span className="text-sm font-medium text-gray-500">{partner.name}</span>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Intresserad av samarbete? Kontakta oss på{' '}
          <a href="mailto:info@svenskakickboxning.se" className="text-skf-blue hover:underline">
            info@svenskakickboxning.se
          </a>
        </p>
      </div>
    </section>
  );
}
