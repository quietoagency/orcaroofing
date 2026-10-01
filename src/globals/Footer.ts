import type { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'offices',
      type: 'array',
      fields: [{ name: 'address', type: 'text', required: true }],
    },
    { name: 'phone', type: 'text' },
    { name: 'email', type: 'text' },
    {
      name: 'links',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
  ],
}
