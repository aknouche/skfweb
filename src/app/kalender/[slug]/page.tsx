/**
 * Calendar Event Detail Page
 * Renders type-specific content based on eventType.
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { fetchCompetitionBySlug } from '@/lib/data/competitions';
import { EVENT_TYPE_LABELS } from '@/lib/constants';
import type { CalendarEvent } from '@/lib/types';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await fetchCompetitionBySlug(slug);
  if (!event) return { title: 'Evenemang hittades inte' };
  return { title: event.title, description: event.description };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = await fetchCompetitionBySlug(slug);

  if (!event) notFound();

  const dateStr = new Date(event.date).toLocaleDateString('sv-SE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const endDateStr = event.endDate
    ? new Date(event.endDate).toLocaleDateString('sv-SE', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null;

  const isCompleted = event.status === 'completed';
  const isUpcoming = event.status === 'upcoming';
  const registrationOpen =
    event.registrationDeadline && new Date(event.registrationDeadline) > new Date();

  const typeLabel = EVENT_TYPE_LABELS[event.eventType] ?? 'Evenemang';

  return (
    <div className="bg-white py-16">
      <div className="container-wide">
        {/* Back link */}
        <Link
          href="/kalender"
          className="mb-8 inline-flex items-center text-sm font-medium text-skf-blue hover:underline"
        >
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Tillbaka till kalender
        </Link>

        {/* Header */}
        <header className="mx-auto max-w-3xl">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-skf-yellow px-3 py-1 text-sm font-semibold text-skf-blue">
              {typeLabel}
            </span>
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
            {event.title}
          </h1>

          <div className="prose prose-gray mb-8 max-w-none leading-relaxed">
            <ReactMarkdown>{event.description}</ReactMarkdown>
          </div>

          {event.image?.url && (
            <div className="relative mb-10 h-72 w-full overflow-hidden rounded-xl md:h-96">
              <Image
                src={event.image.url}
                alt={event.image.alt || event.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          )}
        </header>

        {/* Details grid */}
        <div className="mx-auto max-w-3xl space-y-6">
          {/* Date */}
          <div className="grid gap-6 md:grid-cols-2">
            <InfoBox icon="calendar" title="Datum">
              <p className="capitalize text-gray-700">{dateStr}</p>
              {endDateStr && (
                <p className="mt-1 text-gray-600">
                  till <span className="capitalize">{endDateStr}</span>
                </p>
              )}
            </InfoBox>

            {/* Location */}
            {event.location && (
              <InfoBox icon="location" title="Plats">
                <p className="font-medium text-gray-900">{event.location.venue}</p>
                <p className="text-gray-700">{event.location.city}</p>
                {event.location.address && (
                  <p className="mt-1 text-sm text-gray-600">{event.location.address}</p>
                )}
              </InfoBox>
            )}
          </div>

          {/* ── Tävling + Läger: Disciplines ─────────────────────────────── */}
          {event.disciplines && event.disciplines.length > 0 && (
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-4 text-lg font-bold text-gray-900">Discipliner</h2>
              <div className="flex flex-wrap gap-2">
                {event.disciplines.map((d) => (
                  <span
                    key={d}
                    className="rounded-full bg-skf-blue/10 px-4 py-2 text-sm font-medium text-skf-blue"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* ── Läger: Level ─────────────────────────────────────────────── */}
          {event.targetLevel && (
            <InfoBox icon="level" title="Nivå">
              <p className="text-gray-700">{levelLabel(event.targetLevel)}</p>
            </InfoBox>
          )}

          {/* ── Utbildning: Instructor + Audience ────────────────────────── */}
          {event.instructor && (
            <InfoBox icon="person" title="Instruktör / Kursledare">
              <p className="text-gray-700">{event.instructor}</p>
            </InfoBox>
          )}
          {event.targetAudience && (
            <InfoBox icon="group" title="Målgrupp">
              <p className="text-gray-700">{event.targetAudience}</p>
            </InfoBox>
          )}

          {/* ── Förbundsmöte: Meeting type + links ───────────────────────── */}
          {event.meetingType && (
            <InfoBox icon="meeting" title="Mötestyp">
              <p className="text-gray-700">{meetingTypeLabel(event.meetingType)}</p>
            </InfoBox>
          )}
          {(event.agendaUrl || event.minutesUrl) && (
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-4 text-lg font-bold text-gray-900">Dokument</h2>
              <div className="flex flex-wrap gap-4">
                {event.agendaUrl && (
                  <a
                    href={event.agendaUrl}
                    className="inline-flex items-center text-sm font-medium text-skf-blue hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dagordning →
                  </a>
                )}
                {event.minutesUrl && (
                  <a
                    href={event.minutesUrl}
                    className="inline-flex items-center text-sm font-medium text-skf-blue hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Protokoll →
                  </a>
                )}
              </div>
            </div>
          )}

          {/* ── Övrigt: External link ─────────────────────────────────────── */}
          {event.externalUrl && (
            <div className="rounded-lg border border-gray-200 p-6">
              <a
                href={event.externalUrl}
                className="inline-flex items-center font-medium text-skf-blue hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mer information →
              </a>
            </div>
          )}

          {/* ── Shared: Price + capacity ──────────────────────────────────── */}
          {(event.price !== undefined || event.maxParticipants !== undefined) && (
            <div className="grid gap-6 md:grid-cols-2">
              {event.price !== undefined && (
                <InfoBox icon="price" title="Pris">
                  <p className="text-gray-700">{event.price} kr</p>
                </InfoBox>
              )}
              {event.maxParticipants !== undefined && (
                <InfoBox icon="group" title="Max deltagare">
                  <p className="text-gray-700">{event.maxParticipants} platser</p>
                </InfoBox>
              )}
            </div>
          )}

          {/* ── Shared: Organizer ─────────────────────────────────────────── */}
          {event.organizer && (
            <InfoBox icon="org" title="Arrangör">
              <p className="text-gray-700">{event.organizer}</p>
            </InfoBox>
          )}

          {/* ── Shared: Registration ─────────────────────────────────────── */}
          {isUpcoming && event.registrationUrl && (
            <div className="rounded-lg border border-skf-blue bg-skf-blue/5 p-6">
              <h2 className="mb-4 text-lg font-bold text-skf-blue">Anmälan</h2>
              {event.registrationDeadline && (
                <p className="mb-4 text-gray-700">
                  Sista anmälningsdag:{' '}
                  <span className="font-medium">
                    {new Date(event.registrationDeadline).toLocaleDateString('sv-SE', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </p>
              )}
              {registrationOpen ? (
                <a
                  href={event.registrationUrl}
                  className="inline-flex items-center rounded-lg bg-skf-blue px-6 py-3 font-medium text-white transition-colors hover:bg-skf-blue/90"
                >
                  Anmäl dig nu
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              ) : (
                <p className="text-gray-600">Anmälan är stängd.</p>
              )}
            </div>
          )}

          {/* ── Tävling: Documents ───────────────────────────────────────── */}
          {event.documents && event.documents.length > 0 && (
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="mb-4 text-lg font-bold text-gray-900">Dokument</h2>
              <ul className="space-y-2">
                {event.documents.map((doc, i) => (
                  <li key={i}>
                    <a
                      href={doc.url}
                      className="inline-flex items-center text-sm font-medium text-skf-blue hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {doc.name} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Completed notice */}
          {isCompleted && (
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
              <p className="text-gray-600">Detta evenemang är genomfört.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function InfoBox({
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-gray-200 p-6">
      <h2 className="mb-3 text-lg font-bold text-gray-900">{title}</h2>
      {children}
    </div>
  );
}

function levelLabel(level: CalendarEvent['targetLevel']): string {
  const map: Record<string, string> = {
    beginner: 'Nybörjare',
    intermediate: 'Medelnivå',
    advanced: 'Avancerad',
    elite: 'Elitnivå',
    all: 'Alla nivåer',
  };
  return map[level ?? ''] ?? level ?? '';
}

function meetingTypeLabel(type: CalendarEvent['meetingType']): string {
  const map: Record<string, string> = {
    arsmote: 'Årsmöte',
    styrelsemote: 'Styrelsemöte',
    ovrig: 'Övrigt möte',
  };
  return map[type ?? ''] ?? type ?? '';
}
