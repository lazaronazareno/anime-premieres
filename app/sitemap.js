import { MetadataRoute } from 'next'

export default function sitemap() {
  return [
    {
      url: 'https://cuando-sale-anime.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    }
  ]
}
