import { Block } from "payload";

export const KeyTakeawaysBlock: Block = {
  slug: 'keyTakeaways',
  labels: { singular: 'Key Takeaways', plural: 'Key Takeaways' },
  fields: [
    { name: 'title', type: 'text', defaultValue: 'Key takeaways' },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [{ name: 'text', type: 'text', required: true }],
    },
  ],
}
