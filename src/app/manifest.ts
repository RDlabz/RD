import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RDLabs',
    short_name: 'RDLabs',
    description: 'Slick, Efficient and Secured Applications',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#00121c',
    theme_color: '#5f0404',
    icons: [
      {
        src: '/rdlabs.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/rdlabs.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}