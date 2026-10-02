import { Block, Condition } from "payload";

const isVariant = (variant: 'text' | 'bullets'): Condition => (_, siblingData) =>
  (siblingData?.variant ?? 'text') === variant

export const MapSectionBlock: Block = {
  slug: 'mapSection',
  fields: [
    {
      name: 'variant',
      type: 'select',
      options: [
        { label: 'Text', value: 'text' },
        { label: 'Bullets', value: 'bullets' },
      ],
      defaultValue: 'text',
      required: true,
    },
    { name: 'title', type: 'text', required: true },
    {
      name: 'mapUrl',
      type: 'text',
      admin: { description: 'Google Maps embed URL (the src of the iframe from Share > Embed a map).' },
    },
    { name: 'text', type: 'textarea', admin: { condition: isVariant('text') } },
    {
      name: 'areas',
      type: 'array',
      minRows: 1,
      admin: { condition: isVariant('text') },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'link', type: 'text' },
      ],
    },
    { name: 'linkLabel', type: 'text', admin: { condition: isVariant('text') } },
    { name: 'linkUrl', type: 'text', admin: { condition: isVariant('text') } },
    {
      name: 'bullets',
      type: 'array',
      minRows: 1,
      admin: { condition: isVariant('bullets') },
      fields: [{ name: 'text', type: 'richText', required: true }],
    },
    { name: 'footer', type: 'richText', admin: { condition: isVariant('bullets') } },
  ],
}
