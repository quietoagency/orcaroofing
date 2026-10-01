import { Block } from "payload";

export const ReviewsBlock: Block = {
  slug: 'reviews',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'text' },
    {
      name: 'reviews',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        { name: 'review', type: 'textarea', required: true },
        { name: 'name', type: 'text', required: true },
      ],
    },
  ],
}
