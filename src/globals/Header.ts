import type { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {name: 'logo', type: 'upload', relationTo:'media'},
    {name: 'phone', type: 'text'},
    {name: 'license', type: 'text'},
    {
      name: 'navLinks',
      type: 'array',
      fields:[
        {name: 'label', type: 'text', required: true},
        {name: 'href', type: 'text', required: true}
      ]
    }
  ]
}