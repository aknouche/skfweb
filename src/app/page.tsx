/**
 * Homepage
 * Startsida för Svenska Kickboxningsförbundet
 */

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { BRAND } from '@/lib/constants';

// Placeholder data - will come from CMS later
const upcomingEvents = [
  {
    title: 'SM i Kickboxning 2025',
    date: '2025-03-15',
    location: 'Stockholm',
    slug: 'sm-kickboxning-2025',
  },
  {
    title: 'Nordiska Mästerskapen',
    date: '2025-04-22',
    location: 'Oslo',
    slug: 'nordiska-masterskapen-2025',
  },
];

const latestNews = [
  {
    title: 'Landslagstruppen uttagen för EM',
    excerpt:
      'Svenska Kickboxningsförbundet har tagit ut truppen som ska representera Sverige i kommande EM.',
    date: '2025-01-15',
    slug: 'landslagstruppen-uttagen-em',
  },
  {
    title: 'Nya regler för junior-SM',
    excerpt:
      'Uppdaterade tävlingsregler för junior-SM 2025 finns nu tillgängliga.',
    date: '2025-01-10',
    slug: 'nya-regler-junior-sm',
  },
  {
    title: 'Utbildning för domare och funktionärer',
    excerpt:
      'Anmälan öppen för vårens domarutbildningar i Stockholm och Göteborg.',
    date: '2025-01-05',
    slug: 'utbildning-domare-funktionarer',
  },
];

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-skf-blue py-20 text-white md:py-28">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-display text-white">{BRAND.name}</h1>
            <p className="mb-8 text-xl text-gray-200">
              {BRAND.tagline}. Vi arbetar för att utveckla kickboxningen i
              Sverige på alla nivåer – från bredd till landslag.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/hitta-klubb" variant="accent" size="lg">
                Hitta klubb
              </Button>
              <Button href="/om-forbundet" variant="secondary" size="lg">
                Om förbundet
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-sm bg-gray-50">
        <div className="container-wide">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/tavlingar"
              className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-shadow no-underline hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skf-blue-50">
                <svg
                  className="h-6 w-6 text-skf-blue"
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
              </div>
              <div>
                <h3 className="font-semibold text-skf-blue">Tävlingar</h3>
                <p className="text-sm text-gray-600">Kalender och resultat</p>
              </div>
            </Link>

            <Link
              href="/landslaget"
              className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-shadow no-underline hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skf-yellow-100">
                <svg
                  className="h-6 w-6 text-skf-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-skf-blue">Landslaget</h3>
                <p className="text-sm text-gray-600">Trupper och mästerskap</p>
              </div>
            </Link>

            <Link
              href="/om-forbundet"
              className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-shadow no-underline hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skf-blue-50">
                <svg
                  className="h-6 w-6 text-skf-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-skf-blue">Om förbundet</h3>
                <p className="text-sm text-gray-600">Organisation och dokument</p>
              </div>
            </Link>

            <Link
              href="/kommitteer"
              className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-shadow no-underline hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-skf-yellow-100">
                <svg
                  className="h-6 w-6 text-skf-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-skf-blue">Kommittéer</h3>
                <p className="text-sm text-gray-600">Arbetsgrupper</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section">
        <div className="container-wide">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="mb-2">Kommande tävlingar</h2>
              <p className="text-gray-600">Nästa tävlingar i kalendern</p>
            </div>
            <Link href="/tavlingar" className="text-sm font-medium">
              Visa alla →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <Card key={event.slug}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="mb-1 text-sm font-medium text-skf-yellow-700">
                      {formatDate(event.date)}
                    </p>
                    <h3 className="mb-2 text-lg font-semibold">
                      <Link
                        href={`/tavlingar/${event.slug}`}
                        className="no-underline hover:underline"
                      >
                        {event.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600">{event.location}</p>
                  </div>
                  <span className="rounded-full bg-skf-blue-50 px-3 py-1 text-xs font-medium text-skf-blue">
                    Tävling
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section bg-gray-50">
        <div className="container-wide">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="mb-2">Senaste nytt</h2>
              <p className="text-gray-600">Nyheter från förbundet</p>
            </div>
            <Link href="/nyheter" className="text-sm font-medium">
              Alla nyheter →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {latestNews.map((news) => (
              <Card key={news.slug}>
                <p className="mb-2 text-sm text-gray-500">
                  {formatDate(news.date)}
                </p>
                <h3 className="mb-2 text-lg font-semibold">
                  <Link
                    href={`/nyheter/${news.slug}`}
                    className="no-underline hover:underline"
                  >
                    {news.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-600">{news.excerpt}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4">Om Svenska Kickboxningsförbundet</h2>
            <p className="mb-6 text-lg text-gray-600">
              Svenska Kickboxningsförbundet är det nationella förbundet för
              kickboxning i Sverige. Vi arbetar för att främja och utveckla
              sporten på alla nivåer, från nybörjare till elitnivå och landslag.
            </p>
            <Button href="/om-forbundet" variant="primary">
              Läs mer om oss
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
