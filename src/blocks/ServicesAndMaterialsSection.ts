import { Block } from "payload";
import { iconOptions } from "@/lib/icons";

export const ServicesAndMaterialsSectionBlock: Block = {
  slug: 'servicesAndMaterialsSection',
  dbName: 'services_materials',
  labels: { singular: 'Services and Materials Section', plural: 'Services and Materials Sections' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'subheading', type: 'text' },
    {
      name: 'groups',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        { name: 'label', type: 'text', required: true },
        {
          name: 'services',
          type: 'array',
          required: true,
          minRows: 1,
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            { name: 'icon', type: 'select', options: iconOptions, required: true },
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'url', type: 'text' },
          ],
        },
      ],
    },
    { name: 'ctaLabel', type: 'text', defaultValue: 'Contact Us' },
    { name: 'ctaLink', type: 'text', defaultValue: '#' },
    { name: 'footer', type: 'richText' },
  ],
}
