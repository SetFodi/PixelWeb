import type { Metadata } from 'next'
import ClientPortfolio from '@/components/ClientPortfolio'

export const metadata: Metadata = {
  title: 'პორტფოლიო | შესრულებული პროექტები - PixelWeb',
  description: 'ჩვენი შესრულებული პროექტები: ვებსაიტები, მობილური აპლიკაციები და ელექტრონული კომერცია. ნახეთ PixelWeb-ის ნამუშევრები.',
  keywords: 'პორტფოლიო, ვებსაიტების ნამუშევრები, შესრულებული პროექტები, ვებ დეველოპმენტი პორტფოლიო',
  alternates: {
    canonical: 'https://pixelweb.ge/portfolio',
  },
  openGraph: {
    title: 'პორტფოლიო | შესრულებული პროექტები — PixelWeb',
    description: 'ჩვენი შესრულებული პროექტები: ვებსაიტები, მობილური აპლიკაციები და ელექტრონული კომერცია.',
    url: 'https://pixelweb.ge/portfolio',
    type: 'website',
    locale: 'ka_GE',
    siteName: 'PixelWeb.ge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixelWeb პორტფოლიო',
    description: 'ჩვენი შესრულებული პროექტები — ვებსაიტები და ელექტრონული კომერცია.',
  },
}

export default function PortfolioPage() {
  return <ClientPortfolio />
}
