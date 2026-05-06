import { defineField, defineType } from 'sanity';

export const eventSchema = defineType({
  name: 'event',
  title: 'Kalender',
  type: 'document',
  fields: [
    // ── Event type selector ──────────────────────────────────────────────────
    defineField({
      name: 'eventType',
      title: 'Typ av evenemang',
      type: 'string',
      options: {
        list: [
          { title: 'Tävling', value: 'tavling' },
          { title: 'Läger', value: 'lager' },
          { title: 'Utbildning / Kurs', value: 'utbildning' },
          { title: 'Förbundsmöte', value: 'forbundsmote' },
          { title: 'Övrigt', value: 'ovrig' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    // ── Common fields (all types) ────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Titel',
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
        { name: 'venue', title: 'Arena / Lokal', type: 'string' },
        { name: 'city', title: 'Stad', type: 'string' },
        { name: 'address', title: 'Adress', type: 'string' },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alternativ text', type: 'string' }],
    }),

    // ── Tävling only: disciplines ─────────────────────────────────────────────
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
      hidden: ({ document }) => document?.eventType !== 'tavling',
    }),

    // ── Tävling + Läger + Utbildning ─────────────────────────────────────────
    defineField({
      name: 'organizer',
      title: 'Arrangör',
      type: 'string',
      hidden: ({ document }) =>
        !['tavling', 'lager', 'utbildning'].includes(document?.eventType as string),
    }),
    defineField({
      name: 'registrationDeadline',
      title: 'Sista anmälningsdag',
      type: 'datetime',
      hidden: ({ document }) =>
        !['tavling', 'lager', 'utbildning'].includes(document?.eventType as string),
    }),
    defineField({
      name: 'registrationUrl',
      title: 'Anmälningslänk',
      type: 'url',
      hidden: ({ document }) =>
        !['tavling', 'lager', 'utbildning'].includes(document?.eventType as string),
    }),

    // ── Läger + Utbildning ───────────────────────────────────────────────────
    defineField({
      name: 'price',
      title: 'Pris (sek)',
      type: 'number',
      validation: (Rule) => Rule.min(1).integer(),
    }),
    defineField({
      name: 'maxParticipants',
      title: 'Max antal deltagare',
      type: 'number',
      hidden: ({ document }) =>
        !['lager', 'utbildning'].includes(document?.eventType as string),
    }),

    // ── Läger only ───────────────────────────────────────────────────────────
    defineField({
      name: 'targetLevel',
      title: 'Nivå',
      type: 'string',
      options: {
        list: [
          { title: 'Nybörjare', value: 'beginner' },
          { title: 'Medelnivå', value: 'intermediate' },
          { title: 'Avancerad', value: 'advanced' },
          { title: 'Elitnivå', value: 'elite' },
          { title: 'Alla nivåer', value: 'all' },
        ],
        layout: 'radio',
      },
      hidden: ({ document }) => document?.eventType !== 'lager',
    }),

    defineField({
      name: 'campLeader',
      title: 'Tränare / Ledare',
      type: 'string',
      hidden: ({ document }) => document?.eventType !== 'lager',
    }),
    defineField({
      name: 'accommodation',
      title: 'Boende',
      type: 'text',
      rows: 3,
      description: 'Beskriv boendearrangemang, t.ex. om boende ingår eller om deltagarna ordnar eget.',
      hidden: ({ document }) => document?.eventType !== 'lager',
    }),

    // ── Utbildning only ──────────────────────────────────────────────────────
    defineField({
      name: 'instructor',
      title: 'Instruktör / Kursledare',
      type: 'string',
      hidden: ({ document }) => document?.eventType !== 'utbildning',
    }),
    defineField({
      name: 'targetAudience',
      title: 'Målgrupp',
      type: 'text',
      hidden: ({ document }) => document?.eventType !== 'utbildning',
    }),

    // ── Förbundsmöte only ────────────────────────────────────────────────────
    defineField({
      name: 'meetingType',
      title: 'Mötestyp',
      type: 'string',
      options: {
        list: [
          { title: 'Årsmöte', value: 'arsmote' },
          { title: 'Styrelsemöte', value: 'styrelsemote' },
          { title: 'Övrigt möte', value: 'ovrig' },
        ],
        layout: 'radio',
      },
      hidden: ({ document }) => document?.eventType !== 'forbundsmote',
    }),
    defineField({
      name: 'agendaUrl',
      title: 'Länk till dagordning',
      type: 'url',
      hidden: ({ document }) => document?.eventType !== 'forbundsmote',
    }),
    defineField({
      name: 'minutesUrl',
      title: 'Länk till protokoll',
      type: 'url',
      hidden: ({ document }) => document?.eventType !== 'forbundsmote',
    }),

    // ── Övrigt only ──────────────────────────────────────────────────────────
    defineField({
      name: 'externalUrl',
      title: 'Extern länk',
      type: 'url',
      hidden: ({ document }) => document?.eventType !== 'ovrig',
    }),

    // ── Documents (all event types) ───────────────────────────────────────────
    defineField({
      name: 'documents',
      title: 'Dokument',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Namn', type: 'string' },
            { name: 'file', title: 'Fil', type: 'file' },
            {
              name: 'type',
              title: 'Typ',
              type: 'string',
              options: {
                list: [
                  { title: 'Regler', value: 'rules' },
                  { title: 'Program', value: 'program' },
                  { title: 'Resultat', value: 'results' },
                  { title: 'Övrigt', value: 'other' },
                ],
              },
            },
          ],
        },
      ],
    }),
  ],

  preview: {
    select: { title: 'title', date: 'date', status: 'status', eventType: 'eventType' },
    prepare({ title, date, status, eventType }) {
      const statusLabels: Record<string, string> = {
        upcoming: 'Kommande',
        ongoing: 'Pågående',
        completed: 'Avslutad',
      };
      const typeLabels: Record<string, string> = {
        tavling: 'Tävling',
        lager: 'Läger',
        utbildning: 'Utbildning',
        forbundsmote: 'Möte',
        ovrig: 'Övrigt',
      };
      return {
        title: `[${typeLabels[eventType] || '?'}] ${title}`,
        subtitle: `${statusLabels[status] || status} · ${
          date ? new Date(date).toLocaleDateString('sv-SE') : 'Inget datum'
        }`,
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
