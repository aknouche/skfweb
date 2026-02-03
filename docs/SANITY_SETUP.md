# Sanity CMS Setup Guide

This guide explains how to set up Sanity CMS for the SKF website.

## Overview

The website is configured to:
1. **Try Sanity first** - If Sanity credentials are configured, fetch content from CMS
2. **Fall back to static** - If Sanity isn't configured, use static data from `src/lib/data/`

This means the site works immediately without Sanity, and content can be migrated gradually.

## Step 1: Create Sanity Project

1. Go to [sanity.io/get-started](https://www.sanity.io/get-started)
2. Create a new project named "SKF Website" (or similar)
3. Choose "Create from scratch"
4. Select "production" dataset
5. Note your **Project ID** (shown in the dashboard URL: `sanity.io/manage/project/YOUR_PROJECT_ID`)

## Step 2: Set Up Sanity Studio

Since Sanity Studio requires specific React versions, we recommend using a **separate Sanity Studio project**:

```bash
# Create separate Sanity Studio
npm create sanity@latest -- --project YOUR_PROJECT_ID --dataset production --template clean

# Navigate to the new folder
cd studio

# Start the studio
npm run dev
```

## Step 3: Add Schemas to Sanity Studio

Copy these schemas to your Sanity Studio's `schemaTypes/` folder:

### news.ts
```typescript
import { defineField, defineType } from 'sanity';

export const newsSchema = defineType({
  name: 'news',
  title: 'Nyheter',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'URL-slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Sammanfattning',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'content',
      title: 'Innehåll',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Rubrik 2', value: 'h2' },
            { title: 'Rubrik 3', value: 'h3' },
          ],
        },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Förbund', value: 'Förbund' },
          { title: 'Tävling', value: 'Tävling' },
          { title: 'Landslag', value: 'Landslag' },
          { title: 'Kommittéer', value: 'Kommittéer' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publiceringsdatum',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Författare',
      type: 'string',
    }),
    defineField({
      name: 'coverImage',
      title: 'Omslagsbild',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'featured',
      title: 'Utvald nyhet',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'title', category: 'category', media: 'coverImage' },
    prepare({ title, category, media }) {
      return { title, subtitle: category, media };
    },
  },
});
```

### competition.ts
```typescript
import { defineField, defineType } from 'sanity';

export const competitionSchema = defineType({
  name: 'competition',
  title: 'Tävlingar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tävlingsnamn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL-slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beskrivning',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Kommande', value: 'upcoming' },
          { title: 'Pågående', value: 'ongoing' },
          { title: 'Avslutad', value: 'completed' },
        ],
        layout: 'radio',
      },
      initialValue: 'upcoming',
    }),
    defineField({
      name: 'date',
      title: 'Startdatum',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'Slutdatum',
      type: 'datetime',
    }),
    defineField({
      name: 'location',
      title: 'Plats',
      type: 'object',
      fields: [
        { name: 'venue', title: 'Arena', type: 'string' },
        { name: 'city', title: 'Stad', type: 'string' },
        { name: 'address', title: 'Adress', type: 'string' },
      ],
    }),
    defineField({
      name: 'disciplines',
      title: 'Discipliner',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Point Fighting',
          'Light Contact',
          'Kick Light',
          'Full Contact',
          'Low Kick',
          'K1',
        ],
      },
    }),
    defineField({
      name: 'organizer',
      title: 'Arrangör',
      type: 'string',
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Anmälningslänk',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
});
```

### committee.ts
```typescript
import { defineField, defineType } from 'sanity';

export const committeeSchema = defineType({
  name: 'committee',
  title: 'Kommittéer',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Namn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL-slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'committeeId',
      title: 'ID',
      type: 'string',
      options: {
        list: [
          'styrelsen', 'kommunikation', 'fou', 'utbildning',
          'landslag', 'tavling', 'gradering', 'marknad',
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Beskrivning',
      type: 'text',
    }),
    defineField({
      name: 'mandate',
      title: 'Uppdrag',
      type: 'text',
    }),
    defineField({
      name: 'responsibilities',
      title: 'Ansvarsområden',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'members',
      title: 'Medlemmar',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Namn', type: 'string' },
            { name: 'role', title: 'Roll', type: 'string' },
            { name: 'email', title: 'E-post', type: 'string' },
            { name: 'image', title: 'Bild', type: 'image' },
          ],
        },
      ],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Kontakt e-post',
      type: 'string',
    }),
  ],
});
```

### Update index.ts
```typescript
import { newsSchema } from './news';
import { competitionSchema } from './competition';
import { committeeSchema } from './committee';

export const schemaTypes = [newsSchema, competitionSchema, committeeSchema];
```

## Step 4: Configure Website

1. Copy `.env.local.example` to `.env.local`
2. Add your Sanity project ID:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

3. Restart the development server

## Step 5: Add CORS Settings

In [Sanity Manage](https://www.sanity.io/manage):
1. Go to your project → API → CORS origins
2. Add your domains:
   - `http://localhost:3000` (development)
   - `https://your-production-domain.com` (production)

## How Content Works

| Without Sanity | With Sanity |
|---------------|-------------|
| Uses static data from `src/lib/data/` | Fetches from Sanity CMS |
| Editors change TypeScript files | Editors use Sanity Studio UI |
| Developer deploys changes | Content updates instantly |

## Editor Login

Editors access Sanity Studio at:
- **Hosted**: `your-project.sanity.studio`
- **Local**: `http://localhost:3333` (if running local studio)

## Migration Tip

Start by adding content to Sanity that matches the static data. Once verified, the website will automatically use Sanity content instead.
