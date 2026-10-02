import { Block } from "payload";

export const LocationCardsBlock: Block = {
  slug: 'locationCards',
  dbName: 'location_cards',
  labels: { singular: 'Location Cards', plural: 'Location Cards' },
  fields: [
    { name: 'text', type: 'textarea' },
    {
      name: 'cards',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'text', type: 'richText', required: true },
      ],
    },
  ],
}
