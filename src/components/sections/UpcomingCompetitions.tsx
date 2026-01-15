/**
 * Upcoming Competitions Component
 * Shows next 3 upcoming competitions on homepage
 */

import Link from 'next/link';
import { getUpcomingCompetitions } from '@/lib/data/competitions';

export function UpcomingCompetitions() {
  const competitions = getUpcomingCompetitions().slice(0, 3);

  if (competitions.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-skf-blue sm:text-4xl">
            Kommande Tävlingar
          </h2>
          <div className="mx-auto h-1 w-16 bg-skf-yellow"></div>
        </div>

        {/* Competitions Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    href={`/tavlingar/${competition.slug}`}
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
          <Link
            href="/tavlingar"
            className="inline-flex items-center rounded-lg bg-skf-blue px-6 py-3 font-medium text-white transition-colors hover:bg-skf-blue/90"
          >
            Se alla tävlingar
          </Link>
        </div>
      </div>
    </section>
  );
}
