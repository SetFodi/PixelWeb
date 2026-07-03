import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowRight, FaCheck, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Website Design in Georgia from 600 GEL | PixelWeb.ge',
  description:
    'PixelWeb builds fast landing pages and business websites in Georgia. Prices start from 600 GEL with quick delivery and WhatsApp consultation.',
  alternates: {
    canonical: 'https://pixelweb.ge/website-design-georgia',
  },
  openGraph: {
    title: 'Website Design in Georgia from 600 GEL | PixelWeb.ge',
    description:
      'Fast landing pages and business websites for Georgian companies. Start from 600 GEL and get a free consultation.',
    url: 'https://pixelweb.ge/website-design-georgia',
    type: 'website',
    locale: 'en_US',
  },
}

const whatsappHref =
  'https://wa.me/995557100020?text=Hello%2C%20I%20want%20a%20website%20for%20my%20business'

const packages = [
  {
    name: 'Landing Page',
    price: 'from 600 GEL',
    timing: '3-5 days',
    items: ['Single focused page', 'Mobile-first design', 'WhatsApp and call buttons', 'Basic SEO setup'],
  },
  {
    name: 'Business Website',
    price: 'from 1,500 GEL',
    timing: '7-10 days',
    items: ['Multiple service pages', 'Portfolio or gallery section', 'Contact form', 'Google-ready structure'],
  },
  {
    name: 'Online Store',
    price: 'from 4,000 GEL',
    timing: '14-21 days',
    items: ['Product catalog', 'Cart or order flow', 'Admin-friendly structure', 'Analytics setup'],
  },
]

export default function WebsiteDesignGeorgiaPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-white">
      <header className="border-b border-slate-200 bg-white/95 dark:border-slate-800 dark:bg-slate-950/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-3 font-black text-xl text-slate-950 dark:text-white">
            <img src="/images/logo.png" alt="PixelWeb.ge" className="h-10 w-10" />
            PixelWeb.ge
          </Link>
          <a
            href={whatsappHref}
            className="inline-flex items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-sm font-bold text-white hover:bg-green-600"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>
      </header>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-sky-300">Website design in Georgia</p>
            <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              Fast websites for businesses that need clients, not just a pretty page.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              PixelWeb builds landing pages, business websites, and online stores for companies in Georgia.
              Pricing starts from 600 GEL and every project is built for mobile speed, clear offers, and easy contact.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-green-500 px-6 py-4 font-black text-white hover:bg-green-600"
              >
                Get a free quote
                <FaWhatsapp />
              </a>
              <a
                href="tel:557100020"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-4 font-black text-white hover:bg-white/10"
              >
                Call 557 10 00 20
                <FaPhone />
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-900 p-6 shadow-2xl">
            <div className="grid gap-4">
              {['Price from 600 GEL', 'Delivery from 3-5 days', 'Mobile-first design', 'WhatsApp lead flow'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md bg-white/5 p-4">
                  <FaCheck className="text-green-400" />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-600">Packages</p>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">Choose the website size that fits the goal.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {packages.map((item) => (
            <article key={item.name} className="rounded-lg border border-slate-200 p-6 dark:border-slate-800">
              <h3 className="text-2xl font-black">{item.name}</h3>
              <p className="mt-2 text-xl font-black text-sky-600">{item.price}</p>
              <p className="mt-1 text-sm font-bold text-slate-500">{item.timing}</p>
              <ul className="mt-5 space-y-3">
                {item.items.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                    <FaCheck className="mt-1 shrink-0 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sky-50 dark:bg-slate-900">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black">Why clients choose PixelWeb</h2>
            <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
              We keep the process simple: clear price, fast delivery, responsive design, and contact paths that make
              it easy for visitors to message or call.
            </p>
          </div>
          <div className="grid gap-3">
            {['Next.js websites', 'SEO-ready page structure', 'Portfolio and business pages', 'Analytics and conversion setup'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-md bg-white p-4 font-bold dark:bg-slate-950">
                <FaArrowRight className="text-sky-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-black">Ready to start?</p>
            <p className="mt-2 text-slate-300">Send a message and get a quick quote for your website.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-green-500 px-5 py-3 font-black text-white hover:bg-green-600"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
            <a
              href="mailto:pixelweb2026@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-5 py-3 font-black hover:bg-white/10"
            >
              <FaEnvelope />
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
