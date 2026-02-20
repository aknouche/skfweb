/**
 * Upcoming Competitions Component
 * Shows next 3 upcoming competitions on homepage
 */

import Link from 'next/link';
import { fetchUpcomingCompetitions } from '@/lib/data/competitions';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

export async function UpcomingCompetitions() {
  // Show only 2 featured competitions on homepage for reduced content density
  const allCompetitions = await fetchUpcomingCompetitions();
  const competitions = allCompetitions.slice(0, 2);

  if (competitions.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Kommande Evenemang" />

        {/* Competitions Grid - 2 items for cleaner homepage */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {competitions.map((competition) => {
            const date = new Date(competition.date);
            const dateStr = date.toLocaleDateString('sv-SE', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            });

            return (
              <article
                key={competition.id}
                className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="p-6">
                  {/* Date Badge */}
                  <div className="mb-4 inline-block rounded-md bg-skf-blue px-3 py-1 text-sm font-medium text-white">
                    {dateStr}
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-skf-blue">
                    {competition.title}
                  </h3>

                  {/* Location */}
                  <p className="mb-4 text-sm text-gray-600">
                    📍 {competition.location.venue}, {competition.location.city}
                  </p>

                  {/* Description */}
                  <p className="mb-4 line-clamp-2 text-gray-700">
                    {competition.description}
                  </p>

                  {/* Disciplines */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {competition.disciplines.slice(0, 3).map((discipline) => (
                      <span
                        key={discipline}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                      >
                        {discipline}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    href={`/kalender/${competition.slug}`}
                    className="inline-flex items-center text-sm font-medium text-skf-blue hover:underline"
                  >
                    Läs mer →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Button href="/kalender">Se hela kalendern</Button>
        </div>
      </div>
    </section>
  );
}
