import { Block } from "payload";
import { iconOptions } from "@/lib/icons";

export const SimpleCardSectionBlock: Block = {
  slug: 'simpleCardSection',
  dbName: 'simple_card_section',
  labels: { singular: 'Simple Card Section', plural: 'Simple Card Sections' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'subheading', type: 'text' },
    {
      name: 'cards',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        { name: 'icon', type: 'select', options: iconOptions, required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
      ],
    },
  ],
}
