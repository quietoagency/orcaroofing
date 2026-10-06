import type { GlobalConfig } from "payload";

const idField = (name: string, label: string, pattern: RegExp, hint: string) => ({
  name,
  type: 'text' as const,
  label,
  admin: { description: hint },
  validate: (value: unknown) =>
    !value || (typeof value === 'string' && pattern.test(value.trim())) || `Invalid format. ${hint}`,
})

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
    {
      name: 'seo',
      type: 'group',
      label: 'SEO defaults',
      admin: { description: 'Values used when a page leaves its own SEO field empty.' },
      fields: [
        {
          name: 'siteUrl',
          type: 'text',
          label: 'Site URL',
          admin: { description: 'Production domain without a trailing slash, e.g. https://www.orcaroofing.com' },
          validate: (value: unknown) =>
            !value || (typeof value === 'string' && /^https?:\/\/[^\s/]+$/.test(value.trim())) || 'e.g. https://www.orcaroofing.com (no trailing slash)',
        },
        { name: 'siteName', type: 'text', label: 'Site name', admin: { description: 'e.g. Orca Roofing & Exteriors' } },
        { name: 'titleSuffix', type: 'text', label: 'Title suffix', admin: { description: 'Added at the end of every title. e.g. " | Orca Roofing"' } },
        { name: 'defaultDescription', type: 'textarea', label: 'Default meta description' },
        { name: 'defaultOgImage', type: 'upload', relationTo: 'media', label: 'Default OG image' },
        { name: 'twitterHandle', type: 'text', label: 'X / Twitter handle', admin: { description: 'e.g. @orcaroofing' } },
      ],
    },
    {
      name: 'tracking',
      type: 'group',
      label: 'Tracking',
      admin: { description: 'Leave empty whatever you don\'t use: only tools with an ID are loaded.' },
      fields: [
        idField('gtmId', 'Google Tag Manager ID', /^GTM-[A-Z0-9]+$/, 'e.g. GTM-XXXXXXX'),
        idField('gaId', 'Google Analytics ID', /^G-[A-Z0-9]+$/, 'e.g. G-XXXXXXXXXX'),
        idField('metaPixelId', 'Meta Pixel ID', /^\d+$/, 'Numbers only'),
      ],
    },
  ],
}
