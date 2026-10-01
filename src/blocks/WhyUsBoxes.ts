import { Block } from "payload";
import { iconOptions } from "@/lib/icons";

export const WhyUsBoxesBlock: Block = {
  slug: 'whyUsBoxes',
  labels: { singular: 'Why Us Boxes', plural: 'Why Us Boxes' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'text' },
    {
      name: 'cards',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        { name: 'icon', type: 'select', options: iconOptions, required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'subtitle', type: 'text' },
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
          admin: { description: 'Shows the card highlighted in gold, spanning two columns.' },
        },
      ],
    },
  ],
}
