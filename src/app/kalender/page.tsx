/**
 * Competitions Listing Page
 * Shows all competitions from Sanity CMS
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { fetchAllCompetitions } from '@/lib/data/competitions';
import { SectionHeader } from '@/components/ui/SectionHeader';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Kalender',
  description: 'Tävlingskalender för Svenska Kickboxningsförbundet',
};

export default async function CompetitionsPage() {
  const competitions = await fetchAllCompetitions();

  // Separate upcoming and completed competitions
  const upcoming = competitions.filter((c) => c.status === 'upcoming' || c.status === 'ongoing');
  const completed = competitions.filter((c) => c.status === 'completed');

  return (
    <div className="bg-white py-16">
      <div className="container-wide">
        <SectionHeader
          title="Kalender"
          subtitle="Tävlingskalender för Svenska Kickboxningsförbundet"
        />

        {/* Upcoming Competitions */}
        {upcoming.length > 0 && (
          <section className="mb-16">
            <h2 className="mb-8 text-center text-2xl font-bold text-skf-blue">
              Kommande tävlingar
            </h2>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((competition) => (
                <CompetitionCard key={competition.id} competition={competition} />
              ))}
            </div>
          </section>
        )}

        {/* Completed Competitions */}
        {completed.length > 0 && (
          <section>
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-600">
              Genomförda tävlingar
            </h2>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {completed.map((competition) => (
                <CompetitionCard key={competition.id} competition={competition} completed />
              ))}
            </div>
          </section>
        )}

        {competitions.length === 0 && (
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-gray-600">Inga tävlingar att visa just nu.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function CompetitionCard({
  competition,
  completed = false,
}: {
  competition: Awaited<ReturnType<typeof fetchAllCompetitions>>[0];
  completed?: boolean;
}) {
  const date = new Date(competition.date);
  const dateStr = date.toLocaleDateString('sv-SE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article
      className={`group overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-lg ${
        completed ? 'border-gray-200 opacity-75' : 'border-gray-200'
      }`}
    >
      <div className="p-6">
        <div
          className={`mb-4 inline-block rounded-md px-3 py-1 text-sm font-medium ${
            completed ? 'bg-gray-200 text-gray-600' : 'bg-skf-blue text-white'
          }`}
        >
          {dateStr}
        </div>

        <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-skf-blue">
          {competition.title}
        </h3>

        <p className="mb-4 text-sm text-gray-600">
          {competition.location.venue}, {competition.location.city}
        </p>

        <p className="mb-4 line-clamp-2 text-gray-700">{competition.description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {competition.disciplines.slice(0, 3).map((discipline) => (
            <span
              key={discipline}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
            >
              {discipline}
            </span>
          ))}
          {competition.disciplines.length > 3 && (
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
              +{competition.disciplines.length - 3}
            </span>
          )}
        </div>

        <Link
          href={`/kalender/${competition.slug}`}
          className="inline-flex items-center text-sm font-medium text-skf-blue hover:underline"
        >
          {completed ? 'Visa resultat' : 'Läs mer'}
        </Link>
      </div>
    </article>
  );
}
