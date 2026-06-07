import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import PageLoader from '@/components/PageLoader'
import VisitorTracker from '@/components/VisitorTracker'
import { Analytics } from '@vercel/analytics/react'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import WhatsAppButton from '@/components/WhatsAppButton'
import StickyContactBar from '@/components/StickyContactBar'
import OnlineCounter from '@/components/OnlineCounter'
import { LanguageProvider } from '@/context/LanguageContext'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'საიტის დამზადება 600₾-დან | PixelWeb.ge',
  description: 'საიტის დამზადება, ვებსაიტის შექმნა და საიტის ყიდვა საქართველოში 600₾-დან. სწრაფი მიწოდება, მობილური დიზაინი და ხელმისაწვდომი ფასები.',
  keywords: 'საიტის დამზადება, საიტების დამზადება, ვებსაიტის შექმნა, საიტის გაკეთება, საიტის ყიდვა, saitis damzadeba, saitebis damzadeba, ვებ დეველოპმენტი, საიტების დამზადება საქართველოში, ხელმისაწვდომი ფასები, საიტი იაფად, საიტი თბილისში, საიტის დამზადების ფასი, ვებ დიზაინი, Landing Page დამზადება, ბიზნეს საიტი, ინტერნეტ მაღაზია, PixelWeb',
  authors: [{ name: 'PixelWeb.ge' }],
  metadataBase: new URL('https://pixelweb.ge'),
  openGraph: {
    title: 'საიტის დამზადება 600₾-დან | PixelWeb.ge',
    description: 'ვებსაიტების დამზადება, საიტის გაკეთება და თანამედროვე ვებგვერდები ხელმისაწვდომ ფასად.',
    type: 'website',
    url: 'https://pixelweb.ge',
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
    title: 'საიტის დამზადება 600₾-დან | PixelWeb.ge',
    description: 'საიტის დამზადება, თანამედროვე დიზაინი და სწრაფი ვებსაიტები თქვენი ბიზნესისთვის.',
  },
  verification: {
    google: [
      'jkjsLT2q8ghWwf2_0CR7O4dOyVh8Bg2aDQZPJn1yLeE',
      's_hl5rj5jvAdLHAPKqB8dGy-Nb61eOn4YhpJRSWqf5U',
    ],
    other: {
      'msvalidate.01': 'AD4DC9949755033055B4AB67A4EC80D1',
    },
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ka" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17780075400"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17780075400');
              gtag('config', 'G-Y0XDPJDSKN');

              window.reportConversion = function(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-17780075400/7yHCCKyB9csbEIjXmZ5C',
                    'value': 1.0,
                    'currency': 'USD',
                    'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://pixelweb.ge/#organization',
              name: 'PixelWeb.ge',
              alternateName: 'PixelWeb',
              url: 'https://pixelweb.ge',
              sameAs: [
                'https://www.instagram.com/pixelweb.ge/',
                'https://www.facebook.com/profile.php?id=61584036537327',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://pixelweb.ge/#website',
              name: 'PixelWeb.ge',
              url: 'https://pixelweb.ge',
              inLanguage: 'ka-GE',
              publisher: {
                '@id': 'https://pixelweb.ge/#organization',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              '@id': 'https://pixelweb.ge/#localbusiness',
              name: 'PixelWeb.ge',
              alternateName: 'PixelWeb',
              description: 'პროფესიონალური ვებსაიტების დამზადება ხელმისაწვდომ ფასად საქართველოში — Landing Page, ბიზნეს საიტი, ონლაინ მაღაზია, ვებ დიზაინი და SEO.',
              url: 'https://pixelweb.ge',
              logo: 'https://pixelweb.ge/images/logo.png',
              image: 'https://pixelweb.ge/images/logo.png',
              telephone: '+995591410914',
              email: 'pixelweb2026@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'თბილისი',
                addressRegion: 'Tbilisi',
                addressCountry: 'GE',
              },
              areaServed: [
                { '@type': 'Country', name: 'Georgia' },
                { '@type': 'City', name: 'Tbilisi' },
                { '@type': 'City', name: 'Batumi' },
                { '@type': 'City', name: 'Kutaisi' },
                { '@type': 'City', name: 'Rustavi' },
              ],
              priceRange: '600₾ - 8000₾',
              currenciesAccepted: 'GEL',
              paymentAccepted: 'Bank transfer, Cash',
              sameAs: [
                'https://www.instagram.com/pixelweb.ge/',
                'https://www.facebook.com/profile.php?id=61584036537327',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'PixelWeb სერვისები',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', name: 'Landing Page-ის დამზადება' },
                    priceCurrency: 'GEL',
                    price: '600',
                    url: 'https://pixelweb.ge/landing-page-damzadeba',
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', name: 'ბიზნეს საიტის დამზადება' },
                    priceCurrency: 'GEL',
                    price: '1500',
                    url: 'https://pixelweb.ge/biznes-saiti',
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', name: 'ინტერნეტ მაღაზიის დამზადება' },
                    priceCurrency: 'GEL',
                    price: '4000',
                    url: 'https://pixelweb.ge/internet-magaziis-damzadeba',
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', name: 'ვებ დიზაინი' },
                    priceCurrency: 'GEL',
                    price: '600',
                    url: 'https://pixelweb.ge/veb-dizaini',
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Service', name: 'საიტის რედიზაინი' },
                    priceCurrency: 'GEL',
                    price: '800',
                    url: 'https://pixelweb.ge/saitis-redizaini',
                  },
                ],
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '21:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '11:00',
                  closes: '19:00',
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <PageLoader />
            <VisitorTracker />
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <ScrollToTopButton />
            <StickyContactBar />
            <WhatsAppButton />
            <OnlineCounter />
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
