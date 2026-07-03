import type { Metadata } from 'next'
import ClientHome from '@/components/ClientHome'

export const metadata: Metadata = {
  title: 'საიტის დამზადება 600₾-დან | 3-5 დღეში | PixelWeb',
  description: 'საიტის დამზადება, ვებსაიტის შექმნა და საიტის ყიდვა საქართველოში 600₾-დან. Landing Page 3-5 დღეში, სწრაფი დიზაინი და უფასო კონსულტაცია.',
  keywords: 'საიტის დამზადება, საიტების დამზადება, ვებსაიტის შექმნა, საიტის გაკეთება, საიტის ყიდვა, საიტების დამზადება საქართველოში, საიტები იაფად, saitis damzadeba, saitebis damzadeba, ვებ დეველოპმენტი საქართველო',
  alternates: {
    canonical: 'https://pixelweb.ge',
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
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'PixelWeb - ვებსაიტების დამზადება საქართველოში',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'საიტის დამზადება 600₾-დან | PixelWeb',
    description: 'ვებსაიტის შექმნა საქართველოში 600₾-დან. Landing Page 3-5 დღეში.',
  },
}

export default function HomePage() {
  return <ClientHome />
}
