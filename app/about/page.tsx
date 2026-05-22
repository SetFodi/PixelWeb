import type { Metadata } from 'next'
import ClientAbout from '@/components/ClientAbout'

export const metadata: Metadata = {
  title: 'ჩვენ შესახებ | PixelWeb - საიტების დამზადება საქართველოში',
  description: 'გაიცანით PixelWeb-ის გუნდი. ვქმნით ხარისხიან ვებსაიტებს ხელმისაწვდომ ფასად საქართველოში, სწრაფი მიწოდებით და თანამედროვე ტექნოლოგიებით.',
  keywords: 'pixelweb, ვებ სტუდია, საიტების დამზადება საქართველო, ვებ დეველოპმენტი, ხელმისაწვდომი ვებსაიტები',
  alternates: {
    canonical: 'https://pixelweb.ge/about',
  },
  openGraph: {
    title: 'ჩვენ შესახებ | PixelWeb — საიტების დამზადება საქართველოში',
    description: 'გაიცანით PixelWeb-ის გუნდი. ვქმნით ხარისხიან ვებსაიტებს ხელმისაწვდომ ფასად საქართველოში.',
    url: 'https://pixelweb.ge/about',
    type: 'website',
    locale: 'ka_GE',
    siteName: 'PixelWeb.ge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ჩვენ შესახებ — PixelWeb',
    description: 'ვქმნით ხარისხიან ვებსაიტებს ხელმისაწვდომ ფასად საქართველოში.',
  },
}

export default function AboutPage() {
  return <ClientAbout />
}
