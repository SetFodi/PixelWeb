import type { Metadata } from 'next'
import { baseUrl, seoServicePages, type SeoServiceKey } from '@/constants/seoServices'

/**
 * Builds the shared metadata for a Georgian SEO service landing page.
 * Centralizes the openGraph/twitter/canonical boilerplate that was previously
 * duplicated across all 12 service page files.
 */
export function buildServiceMetadata(key: SeoServiceKey): Metadata {
  const page = seoServicePages[key]
  const url = `${baseUrl}/${page.slug}`

  return {
    title: page.metaTitle,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.description,
      url,
      type: 'website',
      locale: 'ka_GE',
      siteName: 'PixelWeb.ge',
      images: [
        {
          url: '/images/logo.png',
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.description,
      images: ['/images/logo.png'],
    },
  }
}
