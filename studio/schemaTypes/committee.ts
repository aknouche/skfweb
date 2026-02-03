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
      title: 'Kommitté-ID',
      type: 'string',
      description: 'Internt ID för att matcha med webbsidan',
      options: {
        list: [
          { title: 'Styrelsen', value: 'styrelsen' },
          { title: 'Kommunikation', value: 'kommunikation' },
          { title: 'FoU', value: 'fou' },
          { title: 'Utbildning', value: 'utbildning' },
          { title: 'Landslag', value: 'landslag' },
          { title: 'Tävling', value: 'tavling' },
          { title: 'Gradering', value: 'gradering' },
          { title: 'Marknad', value: 'marknad' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Beskrivning',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mandate',
      title: 'Uppdrag',
      type: 'text',
      rows: 4,
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
          name: 'member',
          title: 'Medlem',
          fields: [
            { name: 'name', title: 'Namn', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'role', title: 'Roll', type: 'string' },
            { name: 'email', title: 'E-post', type: 'string' },
            { name: 'image', title: 'Bild', type: 'image', options: { hotspot: true } },
          ],
          preview: {
            select: { title: 'name', subtitle: 'role', media: 'image' },
          },
        },
      ],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Kontakt e-post',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'name', committeeId: 'committeeId' },
    prepare({ title, committeeId }) {
      return { title, subtitle: committeeId };
    },
  },
});
