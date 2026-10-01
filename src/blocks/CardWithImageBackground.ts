import { Block } from "payload";

export const CardWithImageBackgroundBlock: Block = {
  slug: 'cardWithImageBackground',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'text', type: 'richText' },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'ctaTitle', type: 'text' },
    { name: 'ctaLink', type: 'text' },
  ],
}
