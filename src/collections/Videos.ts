import type { CollectionConfig } from 'payload'

export const Videos: CollectionConfig = {
  slug: 'videos',

  access: {
    read: () => true,
    create: ({ req }) => (req.user as any)?.role === 'admin',
    update: ({ req }) => (req.user as any)?.role === 'admin',
    delete: ({ req }) => (req.user as any)?.role === 'admin',
  },

  admin: {
    useAsTitle: 'title',
  },

  upload: {
    mimeTypes: [
      'video/mp4',
      'video/webm',
      'video/quicktime', 
    ],
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
}