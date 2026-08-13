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
    defineField({
      name: 'documents',
      title: 'Bilagor / Dokument',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Namn', type: 'string' },
            { name: 'file', title: 'Fil', type: 'file' },
          ],
        },
      ],
    }),
    defineField({
      name: 'videoEmbeds',
      title: 'Videolänkar',
      description: 'Klistra in YouTube- eller Vimeo-länkar (t.ex. https://www.youtube.com/watch?v=...)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'url',
              title: 'Videolänk',
              type: 'url',
              validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
            },
            {
              name: 'caption',
              title: 'Bildtext (valfri)',
              type: 'string',
            },
          ],
          preview: {
            select: { title: 'url', subtitle: 'caption' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', category: 'category', media: 'coverImage' },
    prepare({ title, category, media }) {
      return { title, subtitle: category, media };
    },
  },
});
