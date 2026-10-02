import { Block } from "payload";

export const StepsSectionBlock: Block = {
  slug: 'stepsSection',
  dbName: 'steps_section',
  labels: { singular: 'Steps Section', plural: 'Steps Sections' },
  fields: [
    {
      name: 'variant',
      type: 'select',
      options: [
        { label: 'Dark', value: 'dark' },
        { label: 'Light', value: 'light' },
      ],
      defaultValue: 'dark',
      required: true,
    },
    { name: 'heading', type: 'text', required: true },
    { name: 'text', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'steps',
      type: 'array',
      required: true,
      minRows: 1,
      admin: { description: 'Steps are numbered automatically in the order they appear.' },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
      ],
    },
  ],
}
