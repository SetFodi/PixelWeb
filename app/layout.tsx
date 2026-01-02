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
  title: 'PixelWeb.ge - საიტის დამზადება და ვებსაიტების შექმნა საქართველოში',
  description: 'საიტის დამზადება და ვებსაიტების შექმნა საქართველოში ხელმისაწვდომ ფასად. ვქმნით თანამედროვე, სწრაფ და ხარისხიან ვებგვერდებს თქვენი ბიზნესისთვის.',
  keywords: 'საიტის დამზადება, ვებსაიტის შექმნა, საიტის გაკეთება, ვებ დეველოპმენტი, საქართველო, ხელმისაწვდომი ფასები, PixelWeb',
  authors: [{ name: 'PixelWeb.ge' }],
  metadataBase: new URL('https://pixelweb.ge'),
  openGraph: {
    title: 'PixelWeb.ge - საიტის დამზადება და ვებსაიტების შექმნა საქართველოში',
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
    title: 'PixelWeb.ge - საიტის დამზადება და ვებსაიტების შექმნა საქართველოში',
    description: 'საიტის დამზადება, თანამედროვე დიზაინი და სწრაფი ვებსაიტები თქვენი ბიზნესისთვის.',
  },
  verification: {
    google: 'jkjsLT2q8ghWwf2_0CR7O4dOyVh8Bg2aDQZPJn1yLeE',
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
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Website Development',
              name: 'ვებსაიტების დამზადება',
              alternateName: [
                'საიტების დამზადება',
                'საიტის გაკეთება',
                'ვებსაიტების დამზადება',
                'ვებგვერდების დამზადება',
                'საიტები იაფად',
                'საიტები სწრაფად',
                'ვებსაიტების დამზადება საქართველოში',
                'ვებსაიტების დამზადება საქართველოში ფასად',
                'ვებსაიტების დამზადება საქართველოში ხელმისაწვდომი ფასები',
                'ვებსაიტების დამზადება საქართველოში ხელმისაწვდომი ფასები',
                'საქართველოში ვებსაიტების დამზადება',
                'ვებდეველოპმენტი',
                'ვებდეველოპერი',
                'ვებდეველოპერი საქართველოში',
              ],
              provider: {
                '@type': 'Organization',
                name: 'PixelWeb.ge',
                url: 'https://pixelweb.ge',
              },
              areaServed: {
                '@type': 'Country',
                name: 'Georgia',
              },
              availableChannel: {
                '@type': 'ServiceChannel',
                serviceUrl: 'https://pixelweb.ge/contact',
              },
            }),
          }}
        />
        {/* FAQ Structured Data for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'რამდენი დრო სჭირდება საიტის დამზადებას?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Landing Page - 3-5 დღე, კორპორატიული საიტი - 7-10 დღე, E-commerce - 14-21 დღე.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'რა ღირს საიტის გაკეთება?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Landing Page იწყება 500 ₾-დან, ბიზნეს საიტები 1,000-2,500 ₾, E-commerce 3,000-5,000 ₾+.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'შესაძლებელია საიტები იაფად?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'დიახ, PixelWeb გთავაზობთ საიტების დამზადებას ბაზრის ფასებზე 30%-მდე იაფად, ხარისხის შენარჩუნებით.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'შედის თუ არა SEO ოპტიმიზაცია?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'ძირითადი SEO შედის ყველა პაკეტში: სუფთა კოდი, სწრაფი ჩატვირთვა, meta თეგები, სტრუქტურული მონაცემები.',
                  },
                },
              ],
            }),
          }}
        />
        {/* LocalBusiness Schema for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'PixelWeb.ge',
              description: 'პროფესიონალური ვებსაიტების დამზადება ხელმისაწვდომ ფასად საქართველოში',
              url: 'https://pixelweb.ge',
              telephone: '+995591410914',
              email: 'pixelweb2026@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'თბილისი',
                addressCountry: 'GE',
              },
              priceRange: '₾₾',
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
