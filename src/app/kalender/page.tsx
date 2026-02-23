/**
 * Calendar Listing Page
 * Shows all events filtered by type, with URL-based filter (no JS needed).
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { fetchAllCompetitions } from '@/lib/data/competitions';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { EVENT_TYPE_LABELS, CALENDAR_FILTER_OPTIONS } from '@/lib/constants';
import type { CalendarEvent, CalendarEventType } from '@/lib/types';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Kalender',
  description:
    'Kalender för Svenska Kickboxningsförbundet – tävlingar, läger, utbildningar och andra evenemang.',
};

// ── Page ─────────────────────────────────────────────────────────────────────

interface PageProps {
  searchParams: Promise<{ type?: string }>;
}

export default async function KalenderPage({ searchParams }: PageProps) {
  const { type } = await searchParams;
  const activeFilter = type && type !== 'alla' ? (type as CalendarEventType) : null;

  const allEvents = await fetchAllCompetitions();

  const filtered = activeFilter
    ? allEvents.filter((e) => e.eventType === activeFilter)
    : allEvents;

  const upcoming = filtered.filter((e) => e.status === 'upcoming' || e.status === 'ongoing');
  const completed = filtered.filter((e) => e.status === 'completed');

  return (
    <div className="bg-white py-16">
      <div className="container-wide">
        <SectionHeader
          title="Kalender"
          subtitle="Tävlingar, läger, utbildningar och andra evenemang"
        />

        {/* Filter bar */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {CALENDAR_FILTER_OPTIONS.map(({ value, label }) => {
            const isActive = value === 'alla' ? !activeFilter : activeFilter === value;
            return (
              <Link
                key={value}
                href={value === 'alla' ? '/kalender' : `/kalender?type=${value}`}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-skf-blue text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Upcoming events */}
        {upcoming.length > 0 && (
          <section className="mb-16">
            <h2 className="mb-8 text-center text-2xl font-bold text-skf-blue">
              Kommande evenemang
            </h2>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}

        {/* Completed events */}
        {completed.length > 0 && (
          <section>
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-600">
              Genomförda evenemang
            </h2>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {completed.map((event) => (
                <EventCard key={event.id} event={event} completed />
              ))}
            </div>
          </section>
        )}

        {filtered.length === 0 && (
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-gray-600">Inga evenemang att visa just nu.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Card ─────────────────────────────────────────────────────────────────────

function EventCard({ event, completed = false }: { event: CalendarEvent; completed?: boolean }) {
  const dateStr = new Date(event.date).toLocaleDateString('sv-SE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const typeLabel = EVENT_TYPE_LABELS[event.eventType] ?? 'Övrigt';

  return (
    <article
      className={`group overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-lg ${
        completed ? 'border-gray-200 opacity-75' : 'border-gray-200'
      }`}
    >
      <div className="p-6">
        {/* Type badge + date */}
        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-full bg-skf-yellow px-3 py-0.5 text-xs font-semibold text-skf-blue">
            {typeLabel}
          </span>
          <span
            className={`rounded-md px-3 py-1 text-sm font-medium ${
              completed ? 'bg-gray-200 text-gray-600' : 'bg-skf-blue text-white'
            }`}
          >
            {dateStr}
          </span>
        </div>

        <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-skf-blue">
          {event.title}
        </h3>

        {event.location && (
          <p className="mb-4 text-sm text-gray-600">
            {event.location.venue}, {event.location.city}
          </p>
        )}

        <p className="mb-4 line-clamp-2 text-gray-700">{event.description}</p>

        {/* Disciplines (tävling/läger only) */}
        {event.disciplines && event.disciplines.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {event.disciplines.slice(0, 3).map((d) => (
              <span
                key={d}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
              >
                {d}
              </span>
            ))}
            {event.disciplines.length > 3 && (
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                +{event.disciplines.length - 3}
              </span>
            )}
          </div>
        )}

        <Link
          href={`/kalender/${event.slug}`}
          className="inline-flex items-center text-sm font-medium text-skf-blue hover:underline"
        >
          {completed ? 'Visa resultat' : 'Läs mer'}
        </Link>
      </div>
    </article>
  );
}
