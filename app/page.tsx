import type { Metadata } from 'next'
import ClientHome from '@/components/ClientHome'

export const metadata: Metadata = {
  title: 'PixelWeb.ge - საიტის დამზადება საქართველოში 600₾-დან',
  description: 'საიტის დამზადება საქართველოში 600₾-დან. სწრაფი მიწოდება 3-21 დღეში, თანამედროვე დიზაინი, მობილურზე მორგებული ვებსაიტები და 30%-ით უფრო იაფი ფასი ბაზრის საშუალოზე.',
  keywords: 'საიტის დამზადება, ვებსაიტის შექმნა, საიტის გაკეთება, საიტების დამზადება საქართველოში, საიტები იაფად, ვებ დეველოპმენტი საქართველო, საიტი თბილისში, საიტი 600 ლარად, ვებ დიზაინი',
  alternates: {
    canonical: 'https://pixelweb.ge',
    languages: {
      'ka-GE': 'https://pixelweb.ge',
      'en-US': 'https://pixelweb.ge',
    },
  },
  openGraph: {
    title: 'PixelWeb.ge - საიტის დამზადება საქართველოში 600₾-დან',
    description: 'საიტის დამზადება საქართველოში 600₾-დან. სწრაფი მიწოდება 3-21 დღეში, თანამედროვე დიზაინი, 30%-ით უფრო იაფი.',
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
    title: 'PixelWeb.ge - საიტის დამზადება საქართველოში 600₾-დან',
    description: 'საიტის დამზადება საქართველოში 600₾-დან. სწრაფი მიწოდება, თანამედროვე დიზაინი.',
  },
}

export default function HomePage() {
  return <ClientHome />
}
