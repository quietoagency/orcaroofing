import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: 'siteSettings',
  label: 'Site Settings',
  fields: [
    { name: 'phone', type: 'text' },
    { name: 'email', type: 'text' },
    { name: 'license', type: 'text' },
    {
      name: 'offices',
      type: 'array',
      fields: [{ name: 'address', type: 'text', required: true }],
    },
  ],
}
