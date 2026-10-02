import { Block } from "payload";

export const ContactSectionBlock: Block = {
  slug: 'contactSection',
  dbName: 'contact_section',
  labels: { singular: 'Contact Section', plural: 'Contact Sections' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
  ],
}
