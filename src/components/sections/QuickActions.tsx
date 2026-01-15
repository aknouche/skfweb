/**
 * Quick Actions Component
 * Primary CTA buttons for main user journeys
 */

import Link from 'next/link';

interface Action {
  label: string;
  href: string;
  description: string;
  primary?: boolean;
}

const ACTIONS: Action[] = [
  {
    label: 'Bli Medlem',
    href: '/bli-medlem',
    description: 'Ansök om medlemskap i klubb',
    primary: true,
  },
  {
    label: 'Hitta Klubb',
    href: '/hitta-klubb',
    description: 'Hitta närm aste träningsplats',
  },
  {
    label: 'Tävlingar',
    href: '/tavlingar',
    description: 'Se kommande tävlingar',
  },
  {
    label: 'Landslaget',
    href: '/landslaget',
    description: 'Information om landslaget',
  },
];

export function QuickActions() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ACTIONS.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className={`group block rounded-lg p-6 text-center transition-all hover:scale-105 ${
                action.primary
                  ? 'bg-skf-yellow text-skf-blue shadow-lg hover:shadow-xl'
                  : 'bg-white text-gray-900 shadow-md hover:shadow-lg'
              }`}
            >
              <h3
                className={`mb-2 text-xl font-bold ${
                  action.primary ? 'text-skf-blue' : 'text-skf-blue group-hover:text-skf-blue'
                }`}
              >
                {action.label}
              </h3>
              <p
                className={`text-sm ${
                  action.primary ? 'text-skf-blue/80' : 'text-gray-600'
                }`}
              >
                {action.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
