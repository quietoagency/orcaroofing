import { Block } from "payload";

export const ChecklistWithImageBlock: Block = {
  slug: 'checklistWithImage',
  dbName: 'checklist_image',
  labels: { singular: 'Checklist With Image', plural: 'Checklists With Image' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'subheading', type: 'text' },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'text', type: 'textarea', required: true },
      ],
    },
    { name: 'ctaLabel', type: 'text', defaultValue: 'Get a free quote' },
    { name: 'ctaLink', type: 'text', defaultValue: '#' },
  ],
}
