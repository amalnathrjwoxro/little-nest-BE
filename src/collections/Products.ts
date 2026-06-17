import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',

  access: {
    read: () => true,
    create: ({ req }) => (req.user as any)?.role === 'admin',
    update: ({ req }) => (req.user as any)?.role === 'admin',
    delete: ({ req }) => (req.user as any)?.role === 'admin',
  },

  admin: { 
    useAsTitle: 'name',
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Clothing', value: 'clothing' },
        { label: 'Toys', value: 'toys' },
        { label: 'Feeding', value: 'feeding' },
        { label: 'Sleep', value: 'sleep' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
