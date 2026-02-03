import type { NewsArticle } from '../types';
import { sanityFetch, isSanityConfigured } from '../sanity';
import { newsQueries } from '../sanity/queries';

/**
 * News Articles - Static Data with Sanity Integration
 *
 * Uses Sanity CMS if configured, otherwise falls back to static data.
 * This ensures the site works even without Sanity credentials.
 */

// =============================================================================
// STATIC FALLBACK DATA
// =============================================================================

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: '1',
    title: 'Exempelnyhet 1',
    slug: 'exempelnyhet-1',
    excerpt:
      'Detta är en kort sammanfattning av nyheten som visas i listning och förhandsvisningar.',
    content: `
# Huvudrubrik

Detta är brödtexten för nyheten. I P2 kommer detta att vara rich text från CMS.

## Underrubrik

Mer innehåll här...

- Lista punkt 1
- Lista punkt 2
- Lista punkt 3
    `,
    category: 'Förbund',
    publishedAt: '2025-01-15T10:00:00Z',
    author: 'SKF Kommunikation',
    featured: true,
    tags: ['förbund', 'viktigt'],
  },
  {
    id: '2',
    title: 'Kommande tävling i Stockholm',
    slug: 'kommande-tavling-stockholm',
    excerpt: 'Information om nästa stora tävling i huvudstaden.',
    content: 'Fullständigt innehåll här...',
    category: 'Tävling',
    publishedAt: '2025-01-10T14:30:00Z',
    tags: ['tävling', 'stockholm'],
  },
  {
    id: '3',
    title: 'Landslagsuttag Senior 2025',
    slug: 'landslagsuttag-senior-2025',
    excerpt: 'Se vilka som tagits ut till seniorlandslaget 2025.',
    content: 'Fullständigt innehåll här...',
    category: 'Landslag',
    publishedAt: '2025-01-05T09:00:00Z',
    tags: ['landslag', 'uttag'],
  },
];

// =============================================================================
// HELPER FUNCTIONS (Sync - use static data)
// =============================================================================

export function getFeaturedNews(): NewsArticle[] {
  return NEWS_ARTICLES.filter((article) => article.featured).slice(0, 3);
}

export function getNewsByCategory(category: NewsArticle['category']): NewsArticle[] {
  return NEWS_ARTICLES.filter((article) => article.category === category);
}

export function getLatestNews(limit = 5): NewsArticle[] {
  return [...NEWS_ARTICLES]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return NEWS_ARTICLES.find((article) => article.slug === slug);
}

// =============================================================================
// ASYNC FUNCTIONS (Try Sanity first, fallback to static)
// =============================================================================

/**
 * Transform Sanity response to match NewsArticle interface
 */
function transformSanityNews(item: Record<string, unknown>): NewsArticle {
  return {
    id: (item._id as string) || '',
    title: (item.title as string) || '',
    slug: (item.slug as string) || '',
    excerpt: (item.excerpt as string) || '',
    content: (item.content as string) || '',
    category: (item.category as NewsArticle['category']) || 'Förbund',
    publishedAt: (item.publishedAt as string) || '',
    author: item.author as string | undefined,
    coverImage: item.coverImage
      ? {
          url: ((item.coverImage as Record<string, unknown>).asset as Record<string, string>)?.url || '',
          alt: ((item.coverImage as Record<string, unknown>).alt as string) || '',
          width: 1200,
          height: 630,
        }
      : undefined,
    tags: item.tags as string[] | undefined,
    featured: (item.featured as boolean) || false,
  };
}

/**
 * Fetch latest news - tries Sanity first, falls back to static
 */
export async function fetchLatestNews(limit = 5): Promise<NewsArticle[]> {
  if (isSanityConfigured) {
    const sanityData = await sanityFetch<Record<string, unknown>[]>(newsQueries.latest(limit));
    if (sanityData && sanityData.length > 0) {
      return sanityData.map(transformSanityNews);
    }
  }
  // Fallback to static data
  return getLatestNews(limit);
}

/**
 * Fetch featured news - tries Sanity first, falls back to static
 */
export async function fetchFeaturedNews(): Promise<NewsArticle[]> {
  if (isSanityConfigured) {
    const sanityData = await sanityFetch<Record<string, unknown>[]>(newsQueries.featured);
    if (sanityData && sanityData.length > 0) {
      return sanityData.map(transformSanityNews);
    }
  }
  return getFeaturedNews();
}

/**
 * Fetch news by slug - tries Sanity first, falls back to static
 */
export async function fetchNewsBySlug(slug: string): Promise<NewsArticle | undefined> {
  if (isSanityConfigured) {
    const sanityData = await sanityFetch<Record<string, unknown>>(newsQueries.bySlug(slug));
    if (sanityData) {
      return transformSanityNews(sanityData);
    }
  }
  return getNewsBySlug(slug);
}

/**
 * Fetch news by category - tries Sanity first, falls back to static
 */
export async function fetchNewsByCategory(
  category: NewsArticle['category']
): Promise<NewsArticle[]> {
  if (isSanityConfigured) {
    const sanityData = await sanityFetch<Record<string, unknown>[]>(newsQueries.byCategory(category));
    if (sanityData && sanityData.length > 0) {
      return sanityData.map(transformSanityNews);
    }
  }
  return getNewsByCategory(category);
}
