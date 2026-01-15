# Static Data (P1)

This directory contains **hardcoded static data** for Phase 1 launch.

## Purpose

In P1, all content is stored as TypeScript files here to:
1. Get the website launched quickly
2. Establish data structures that match our TypeScript interfaces
3. Make CMS migration in P2 seamless

## Structure

```
data/
├── news.ts           # News articles (static in P1, CMS in P2)
├── competitions.ts   # Competition data
├── committees.ts     # Committee information
├── team.ts           # National team rosters
├── partners.ts       # Partners and sponsors
└── documents.ts      # Organization documents
```

## Migration to CMS (P2)

When migrating to Sanity/Contentful:

1. **Keep the interfaces** in `lib/types.ts` unchanged
2. **Replace data imports** from these files with CMS queries
3. **Same data shape** - components won't need updates

### Example Migration

**P1 (Now):**
```typescript
import { NEWS_ARTICLES } from '@/lib/data/news'

export function NewsPage() {
  return <NewsList articles={NEWS_ARTICLES} />
}
```

**P2 (CMS):**
```typescript
import { getNewsArticles } from '@/lib/cms/queries'

export async function NewsPage() {
  const articles = await getNewsArticles()
  return <NewsList articles={articles} />
}
```

Component stays exactly the same - only data source changes!

## Editing Content

To update content in P1:
1. Edit the `.ts` files in this directory
2. Commit changes to Git
3. Deploy - content updates automatically

No database, no CMS admin panel needed for P1.
