import type { CollectionConfig } from 'payload'
import { lexicalEditor, BlocksFeature, EXPERIMENTAL_TableFeature } from '@payloadcms/richtext-lexical'
import { KeyTakeawaysBlock } from '@/blocks/KeyTakeaways'
export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {name: 'title', type: 'text', required: true},
    {name: 'slug', type: 'text', required: true},
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          EXPERIMENTAL_TableFeature(),
          BlocksFeature({ blocks: [KeyTakeawaysBlock] }),
        ],
      }),
    },
    {name: 'publishedAt', type: 'date', required: true, defaultValue: ()=>new Date()},
    {name: 'excerpt', type: 'textarea'},
    {name: 'featuredImage', type: 'upload', relationTo: 'media'},
    {
      name: 'cta',
      type: 'group',
      label: 'Sidebar CTA',
      fields: [
        { name: 'heading', type: 'text' },
        { name: 'description', type: 'textarea' },
        { name: 'ctaLabel', type: 'text' },
        { name: 'ctaLink', type: 'text' },
      ],
    },
    {name: 'category', type: 'select', options: ['Roofing', 'Decks']}
  ],
}
