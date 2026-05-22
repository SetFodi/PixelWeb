import type { Metadata } from 'next'
import ClientContact from '@/components/ClientContact'

export const metadata: Metadata = {
  title: 'კონტაქტი | საიტის დამზადების უფასო კონსულტაცია',
  description: 'დაგვიკავშირდით საიტის დამზადებისთვის. მოგვწერეთ WhatsApp-ზე, დაგვირეკეთ ან შეავსეთ ფორმა და მიიღეთ უფასო კონსულტაცია.',
  keywords: 'ვებსაიტის შეკვეთა, საიტის დამზადება კონსულტაცია, უფასო კონსულტაცია, ვებ დეველოპმენტი საქართველო, PixelWeb კონტაქტი',
  alternates: {
    canonical: 'https://pixelweb.ge/contact',
  },
  openGraph: {
    title: 'კონტაქტი | საიტის დამზადების უფასო კონსულტაცია',
    description: 'მოგვწერეთ WhatsApp-ზე, დაგვირეკეთ ან შეავსეთ ფორმა. უფასო კონსულტაცია 24 საათში.',
    url: 'https://pixelweb.ge/contact',
    type: 'website',
    locale: 'ka_GE',
    siteName: 'PixelWeb.ge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixelWeb კონტაქტი',
    description: 'WhatsApp, ზარი ან ფორმა — უფასო კონსულტაცია 24 საათში.',
  },
}

export default function ContactPage() {
  return <ClientContact />
}
