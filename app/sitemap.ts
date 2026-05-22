import { MetadataRoute } from 'next'
import { baseUrl, seoServiceSlugs } from '@/constants/seoServices'

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const servicePages: MetadataRoute.Sitemap = seoServiceSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: slug === 'saitis-damzadeba' ? 1 : 0.95,
  }))

  const blogPosts: MetadataRoute.Sitemap = [
    'ratom-mchirdeba-website',
    'ra-ghirs-saitis-damzadeba',
    'wordpress-vs-custom-code',
    'seo-safudzvlebi-qartuli-biznesisthvis',
    'restornisthvis-saiti-ra-unda-hkondes',
    'landing-page-tu-biznes-saiti',
    'saiti-mcire-biznesisthvis-5-nabiji',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...mainPages, ...servicePages, ...blogPosts]
}
