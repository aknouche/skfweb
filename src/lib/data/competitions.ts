import type { CalendarEvent } from '../types';
import { sanityFetch, isSanityConfigured } from '../sanity';
import { eventQueries } from '../sanity/queries';

/**
 * Calendar Events - Static Data with Sanity Integration
 *
 * Uses Sanity CMS if configured, otherwise falls back to static data.
 */

// =============================================================================
// STATIC FALLBACK DATA
// =============================================================================

export const COMPETITIONS: CalendarEvent[] = [
  {
    id: '1',
    eventType: 'tavling',
    title: 'SM i Kickboxning 2025',
    slug: 'sm-kickboxning-2025',
    description: 'Sveriges mästerskap i kickboxning samlar landets bästa utövare.',
    status: 'upcoming',
    date: '2025-03-15T10:00:00Z',
    endDate: '2025-03-16T18:00:00Z',
    location: {
      venue: 'Eriksdalshallen',
      city: 'Stockholm',
      address: 'Hammarby Slussväg 20',
    },
    disciplines: ['Point Fighting', 'Light Contact', 'Full Contact'],
    organizer: 'Svenska Kickboxningsförbundet',
    registrationUrl: '/kalender/sm-2025',
    registrationDeadline: '2025-03-01T23:59:59Z',
  },
  {
    id: '2',
    eventType: 'tavling',
    title: 'Nationellt Öppet Göteborg',
    slug: 'nationellt-oppet-goteborg',
    description: 'Öppen tävling för alla åldrar och nivåer.',
    status: 'upcoming',
    date: '2025-02-20T09:00:00Z',
    location: {
      venue: 'Valhalla Sporthall',
      city: 'Göteborg',
    },
    disciplines: ['Point Fighting', 'Light Contact'],
    organizer: 'Göteborgs Kickboxningsklubb',
  },
  {
    id: '3',
    eventType: 'tavling',
    title: 'Stockholm Open 2024',
    slug: 'stockholm-open-2024',
    description: 'Årets största tävling i huvudstaden.',
    status: 'completed',
    date: '2024-12-10T10:00:00Z',
    location: {
      venue: 'Ericsson Globe',
      city: 'Stockholm',
    },
    disciplines: ['Point Fighting', 'Light Contact', 'Full Contact', 'K1'],
    organizer: 'Stockholm Kickboxning',
  },
];

// =============================================================================
// HELPER FUNCTIONS (Sync - use static data)
// =============================================================================

export function getUpcomingCompetitions(): CalendarEvent[] {
  return COMPETITIONS.filter((e) => e.status === 'upcoming').sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

export function getCompetitionBySlug(slug: string): CalendarEvent | undefined {
  return COMPETITIONS.find((e) => e.slug === slug);
}

// =============================================================================
// TRANSFORM HELPERS
// =============================================================================

function transformSanityEvent(item: Record<string, unknown>): CalendarEvent {
  return {
    id: (item._id as string) || '',
    eventType: (item.eventType as CalendarEvent['eventType']) || 'tavling',
    title: (item.title as string) || '',
    slug: (item.slug as string) || '',
    description: (item.description as string) || '',
    status: (item.status as CalendarEvent['status']) || 'upcoming',
    date: (item.date as string) || '',
    endDate: item.endDate as string | undefined,
    location: item.location as CalendarEvent['location'] | undefined,
    disciplines: item.disciplines as CalendarEvent['disciplines'] | undefined,
    organizer: item.organizer as string | undefined,
    registrationUrl: item.registrationUrl as string | undefined,
    registrationDeadline: item.registrationDeadline as string | undefined,
    price: item.price as number | undefined,
    maxParticipants: item.maxParticipants as number | undefined,
    targetLevel: item.targetLevel as CalendarEvent['targetLevel'] | undefined,
    instructor: item.instructor as string | undefined,
    targetAudience: item.targetAudience as string | undefined,
    meetingType: item.meetingType as CalendarEvent['meetingType'] | undefined,
    agendaUrl: item.agendaUrl as string | undefined,
    minutesUrl: item.minutesUrl as string | undefined,
    externalUrl: item.externalUrl as string | undefined,
    image: item.image
      ? {
          url: ((item.image as Record<string, unknown>).asset as Record<string, string>)?.url || '',
          alt: ((item.image as Record<string, unknown>).alt as string) || '',
        }
      : undefined,
    documents: item.documents as CalendarEvent['documents'] | undefined,
  };
}

// =============================================================================
// ASYNC FUNCTIONS (Try Sanity first, fallback to static)
// =============================================================================

export async function fetchUpcomingCompetitions(): Promise<CalendarEvent[]> {
  if (isSanityConfigured) {
    const data = await sanityFetch<Record<string, unknown>[]>(eventQueries.upcoming);
    if (data && data.length > 0) return data.map(transformSanityEvent);
  }
  return getUpcomingCompetitions();
}

export async function fetchCompetitionBySlug(slug: string): Promise<CalendarEvent | undefined> {
  if (isSanityConfigured) {
    const data = await sanityFetch<Record<string, unknown>>(eventQueries.bySlug(slug));
    if (data) return transformSanityEvent(data);
  }
  return getCompetitionBySlug(slug);
}

export async function fetchAllCompetitions(): Promise<CalendarEvent[]> {
  if (isSanityConfigured) {
    const data = await sanityFetch<Record<string, unknown>[]>(eventQueries.all);
    if (data && data.length > 0) return data.map(transformSanityEvent);
  }
  return COMPETITIONS;
}
