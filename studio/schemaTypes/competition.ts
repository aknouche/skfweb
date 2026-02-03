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
      name: 'registrationDeadline',
      title: 'Sista anmälningsdag',
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
          { title: 'Point Fighting', value: 'Point Fighting' },
          { title: 'Light Contact', value: 'Light Contact' },
          { title: 'Kick Light', value: 'Kick Light' },
          { title: 'Full Contact', value: 'Full Contact' },
          { title: 'Low Kick', value: 'Low Kick' },
          { title: 'K1', value: 'K1' },
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
      fields: [
        {
          name: 'alt',
          title: 'Alternativ text',
          type: 'string',
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', date: 'date', status: 'status' },
    prepare({ title, date, status }) {
      const statusLabels: Record<string, string> = {
        upcoming: '🔜 Kommande',
        ongoing: '▶️ Pågående',
        completed: '✅ Avslutad',
      };
      return {
        title,
        subtitle: `${statusLabels[status] || status} - ${date ? new Date(date).toLocaleDateString('sv-SE') : 'Inget datum'}`,
      };
    },
  },
  orderings: [
    {
      title: 'Datum (nyast först)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Datum (äldst först)',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
});
