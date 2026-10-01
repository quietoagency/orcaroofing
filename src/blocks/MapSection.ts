import { Block } from "payload";

export const MapSectionBlock: Block = {
  slug: 'mapSection',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'text', type: 'textarea' },
    {
      name: 'mapUrl',
      type: 'text',
      admin: { description: 'Google Maps embed URL (the src of the iframe from Share > Embed a map).' },
    },
    {
      name: 'areas',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'link', type: 'text' },
      ],
    },
    { name: 'linkLabel', type: 'text' },
    { name: 'linkUrl', type: 'text' },
  ],
}
