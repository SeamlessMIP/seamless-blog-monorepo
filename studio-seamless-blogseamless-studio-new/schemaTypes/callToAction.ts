// schemaTypes/callToAction.ts
import { defineType, defineField } from 'sanity';

export const callToActionType = defineType({
  name: 'callToAction',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Button Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      text: 'text',
      link: 'link',
    },
    prepare({ text, link }) {
      return {
        title: text,
        subtitle: link,
      };
    },
  },
});