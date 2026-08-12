import { MetadataRoute } from 'next'
import { baseUrl, seoServiceSlugs } from '@/constants/seoServices'
import { projectSlugs } from '@/constants/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: '2026-08-12',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: '2026-06-07',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: '2026-06-28',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: '2026-06-07',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: '2026-06-07',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: '2026-06-07',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/website-design-georgia`,
      lastModified: '2026-07-04',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const servicePages: MetadataRoute.Sitemap = seoServiceSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: '2026-07-04',
    changeFrequency: 'weekly' as const,
    priority: slug === 'saitis-damzadeba' ? 1 : 0.95,
  }))

  const blogPosts: MetadataRoute.Sitemap = [
    { slug: 'ratom-mchirdeba-website', lastModified: '2025-11-03' },
    { slug: 'ra-ghirs-saitis-damzadeba', lastModified: '2025-11-08' },
    { slug: 'wordpress-vs-custom-code', lastModified: '2025-12-15' },
    { slug: 'seo-safudzvlebi-qartuli-biznesisthvis', lastModified: '2026-01-05' },
    { slug: 'restornisthvis-saiti-ra-unda-hkondes', lastModified: '2026-02-20' },
    { slug: 'landing-page-tu-biznes-saiti', lastModified: '2026-03-12' },
    { slug: 'saiti-mcire-biznesisthvis-5-nabiji', lastModified: '2026-04-05' },
  ].map(({ slug, lastModified }) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const projectPages: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: '2026-06-28',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...mainPages, ...servicePages, ...blogPosts, ...projectPages]
}
