import { Block } from "payload";

export const HeroBlock: Block = {
  slug:'hero',
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'description', type: 'richText' },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'ctaLabel', type: 'text' },
    { name: 'ctaLink', type: 'text' },
  ]
}