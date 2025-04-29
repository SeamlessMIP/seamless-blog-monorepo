import { defineType, defineField } from 'sanity';

export const codeBlockType = defineType({
  name: 'codeBlock',
  title: 'Code Block',
  type: 'object',
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'JavaScript', value: 'javascript' },
          { title: 'Python', value: 'python' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'JSX', value: 'jsx' },
          { title: 'TypeScript', value: 'typescript' },
          // Add more languages as needed
        ],
      },
    }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'text',
      rows: 10,
    }),
  ],
  preview: {
    select: {
      language: 'language',
      code: 'code',
    },
    prepare({ language, code }) {
      return {
        title: language ? `Code (${language})` : 'Code Block',
        subtitle: code ? code.substring(0, 50) + '...' : 'No code entered',
      };
    },
  },
});