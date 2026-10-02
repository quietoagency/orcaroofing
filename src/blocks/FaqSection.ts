import { Block } from "payload";

export const FaqSectionBlock: Block = {
  slug: 'faqSection',
  dbName: 'faq_section',
  labels: { singular: 'FAQ Section', plural: 'FAQ Sections' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'questions',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        { name: 'question', type: 'text', required: true },
        { name: 'answer', type: 'richText', required: true },
      ],
    },
  ],
}
