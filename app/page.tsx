import type { Metadata } from 'next'
import ClientHome from '@/components/ClientHome'
import { translations } from '@/constants/translations'

export const metadata: Metadata = {
  title: 'საიტის დამზადება 600₾-დან | 3-5 დღეში | PixelWeb',
  description: 'საიტის დამზადება, ვებსაიტის შექმნა და საიტის ყიდვა საქართველოში 600₾-დან. Landing Page 3-5 დღეში, სწრაფი დიზაინი და უფასო კონსულტაცია.',
  keywords: 'საიტის დამზადება, საიტების დამზადება, ვებსაიტის შექმნა, საიტის გაკეთება, საიტის ყიდვა, საიტების დამზადება საქართველოში, საიტები იაფად, saitis damzadeba, saitebis damzadeba, ვებ დეველოპმენტი საქართველო',
  alternates: {
    canonical: 'https://pixelweb.ge',
    languages: {
      'ka-GE': 'https://pixelweb.ge',
      'en-GE': 'https://pixelweb.ge/website-design-georgia',
      'x-default': 'https://pixelweb.ge',
    },
  },
  openGraph: {
    title: 'საიტის დამზადება 600₾-დან | 3-5 დღეში | PixelWeb',
    description: 'საიტის დამზადება და ვებსაიტის შექმნა საქართველოში 600₾-დან. Landing Page 3-5 დღეში.',
    url: 'https://pixelweb.ge',
    type: 'website',
    locale: 'ka_GE',
    siteName: 'PixelWeb.ge',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'PixelWeb - საიტის დამზადება საქართველოში 600₾-დან',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'საიტის დამზადება 600₾-დან | PixelWeb',
    description: 'ვებსაიტის შექმნა საქართველოში 600₾-დან. Landing Page 3-5 დღეში.',
    images: ['/opengraph-image'],
  },
}

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: translations.ka.home.faq.questions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ClientHome />
    </>
  )
}
