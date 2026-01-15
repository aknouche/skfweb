import type { Competition } from '../types';

/**
 * Competitions - Static Data (P1)
 *
 * In P2: Replace with CMS queries
 */

export const COMPETITIONS: Competition[] = [
  {
    id: '1',
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
    registrationUrl: '/tavlingar/sm-2025',
    registrationDeadline: '2025-03-01T23:59:59Z',
  },
  {
    id: '2',
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

/**
 * Helper functions
 */

export function getUpcomingCompetitions(): Competition[] {
  return COMPETITIONS.filter((comp) => comp.status === 'upcoming').sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

export function getCompetitionBySlug(slug: string): Competition | undefined {
  return COMPETITIONS.find((comp) => comp.slug === slug);
}
