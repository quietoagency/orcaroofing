import { Block } from "payload";

export const ServiceAreasListBlock: Block = {
  slug: 'serviceAreasList',
  dbName: 'service_areas_list',
  labels: { singular: 'Service Areas List', plural: 'Service Areas Lists' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'subheading', type: 'text' },
    {
      name: 'counties',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        { name: 'name', type: 'text', required: true },
        {
          name: 'locations',
          type: 'array',
          required: true,
          minRows: 1,
          fields: [
            { name: 'location', type: 'text', required: true },
            { name: 'locationUrl', type: 'text' },
          ],
        },
      ],
    },
  ],
}
