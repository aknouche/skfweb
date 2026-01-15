import type { NewsArticle } from '../types';

/**
 * News Articles - Static Data (P1)
 *
 * In P2: Replace with CMS queries (Sanity/Contentful)
 * Data structure remains the same for seamless migration
 */

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

/**
 * Helper functions for filtering/sorting
 * These work the same whether data is static or from CMS
 */

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
