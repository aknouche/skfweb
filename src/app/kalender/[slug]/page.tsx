/**
 * Competition Detail Page
 * Shows a single competition from Sanity CMS or static data
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchCompetitionBySlug } from '@/lib/data/competitions';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const competition = await fetchCompetitionBySlug(slug);

  if (!competition) {
    return {
      title: 'Tävling hittades inte',
    };
  }

  return {
    title: competition.title,
    description: competition.description,
  };
}

export default async function CompetitionPage({ params }: PageProps) {
  const { slug } = await params;
  const competition = await fetchCompetitionBySlug(slug);

  if (!competition) {
    notFound();
  }

  const date = new Date(competition.date);
  const dateStr = date.toLocaleDateString('sv-SE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const endDateStr = competition.endDate
    ? new Date(competition.endDate).toLocaleDateString('sv-SE', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null;

  const isCompleted = competition.status === 'completed';
  const isUpcoming = competition.status === 'upcoming';
  const registrationOpen =
    competition.registrationDeadline &&
    new Date(competition.registrationDeadline) > new Date();

  return (
    <div className="bg-white py-16">
      <div className="container-wide">
        {/* Back link */}
        <Link
          href="/kalender"
          className="mb-8 inline-flex items-center text-sm font-medium text-skf-blue hover:underline"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Tillbaka till kalender
        </Link>

        {/* Competition header */}
        <header className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-4">
            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                isCompleted
                  ? 'bg-gray-200 text-gray-600'
                  : isUpcoming
                    ? 'bg-skf-blue text-white'
                    : 'bg-skf-yellow text-skf-blue'
              }`}
            >
              {isCompleted ? 'Genomförd' : isUpcoming ? 'Kommande' : 'Pågående'}
            </span>
          </div>

          <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            {competition.title}
          </h1>

          <p className="mb-8 text-xl leading-relaxed text-gray-700">
            {competition.description}
          </p>
        </header>

        {/* Competition details */}
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Date & Time */}
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-4 flex items-center text-lg font-bold text-gray-900">
                <svg
                  className="mr-3 h-5 w-5 text-skf-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Datum
              </h2>
              <p className="text-gray-700 capitalize">{dateStr}</p>
              {endDateStr && (
                <p className="mt-1 text-gray-600">
                  till <span className="capitalize">{endDateStr}</span>
                </p>
              )}
            </div>

            {/* Location */}
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-4 flex items-center text-lg font-bold text-gray-900">
                <svg
                  className="mr-3 h-5 w-5 text-skf-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Plats
              </h2>
              <p className="font-medium text-gray-900">{competition.location.venue}</p>
              <p className="text-gray-700">{competition.location.city}</p>
              {competition.location.address && (
                <p className="mt-1 text-sm text-gray-600">{competition.location.address}</p>
              )}
            </div>
          </div>

          {/* Disciplines */}
          <div className="mt-8 rounded-lg border border-gray-200 p-6">
            <h2 className="mb-4 text-lg font-bold text-gray-900">Discipliner</h2>
            <div className="flex flex-wrap gap-2">
              {competition.disciplines.map((discipline) => (
                <span
                  key={discipline}
                  className="rounded-full bg-skf-blue/10 px-4 py-2 text-sm font-medium text-skf-blue"
                >
                  {discipline}
                </span>
              ))}
            </div>
          </div>

          {/* Organizer */}
          {competition.organizer && (
            <div className="mt-8 rounded-lg border border-gray-200 p-6">
              <h2 className="mb-4 text-lg font-bold text-gray-900">Arrangör</h2>
              <p className="text-gray-700">{competition.organizer}</p>
            </div>
          )}

          {/* Registration */}
          {isUpcoming && competition.registrationUrl && (
            <div className="mt-8 rounded-lg border border-skf-blue bg-skf-blue/5 p-6">
              <h2 className="mb-4 text-lg font-bold text-skf-blue">Anmälan</h2>
              {competition.registrationDeadline && (
                <p className="mb-4 text-gray-700">
                  Sista anmälningsdag:{' '}
                  <span className="font-medium">
                    {new Date(competition.registrationDeadline).toLocaleDateString('sv-SE', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </p>
              )}
              {registrationOpen ? (
                <a
                  href={competition.registrationUrl}
                  className="inline-flex items-center rounded-lg bg-skf-blue px-6 py-3 font-medium text-white transition-colors hover:bg-skf-blue/90"
                >
                  Anmäl dig nu
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              ) : (
                <p className="text-gray-600">Anmälan är stängd.</p>
              )}
            </div>
          )}

          {/* Completed competition notice */}
          {isCompleted && (
            <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
              <p className="text-gray-600">
                Denna tävling är genomförd. Resultat kommer att publiceras här.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
