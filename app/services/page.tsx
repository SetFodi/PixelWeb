import type { Metadata } from 'next'
import ClientServices from '@/components/ClientServices'

export const metadata: Metadata = {
  title: 'სერვისები და ფასები | საიტის დამზადება 600₾-დან | PixelWeb.ge',
  description: 'საიტის დამზადების ფასები PixelWeb-ში: Landing Page 600-1,200₾, ბიზნეს საიტი 1,500₾-დან, ონლაინ მაღაზია 4,000₾-დან. გამჭვირვალე ფასები ფარული ხარჯების გარეშე.',
  keywords: 'საიტის დამზადების ფასები, ვებსაიტის შექმნა ფასი, landing page ფასი, ონლაინ მაღაზიის დამზადება ფასი, ბიზნეს საიტის დამზადება, საიტი 600 ლარად, ფასები 2026',
  alternates: {
    canonical: 'https://pixelweb.ge/services',
  },
  openGraph: {
    title: 'სერვისები და ფასები | საიტის დამზადება 600₾-დან | PixelWeb',
    description: 'Landing Page 600-1,200₾, ბიზნეს საიტი 1,500₾-დან, ონლაინ მაღაზია 4,000₾-დან. გამჭვირვალე ფასები.',
    url: 'https://pixelweb.ge/services',
    type: 'website',
    locale: 'ka_GE',
    siteName: 'PixelWeb.ge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixelWeb სერვისები და ფასები',
    description: 'Landing Page 600-1,200₾, ბიზნეს საიტი 1,500₾-დან, ონლაინ მაღაზია 4,000₾-დან.',
  },
}

export default function ServicesPage() {
  return <ClientServices />
}
