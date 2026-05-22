import type { Metadata } from 'next'
import ClientBlogPost from '@/components/ClientBlogPost'

// Metadata for SEO (using Georgian as default)
const postsMeta: Record<string, { title: string; description: string; keywords: string }> = {
  'ratom-mchirdeba-website': {
    title: 'რატომ სჭირდება ყველა ბიზნესს ვებსაიტი 2025 წელს? | PixelWeb Blog',
    description: 'ციფრულ ეპოქაში ვებსაიტი აღარ არის ფუფუნება, ეს აუცილებლობაა. გაიგეთ 5 მიზეზი.',
    keywords: 'რატომ მჭირდება საიტი, ბიზნეს ვებსაიტი, საიტის დამზადების მნიშვნელობა'
  },
  'ra-ghirs-saitis-damzadeba': {
    title: 'რა ღირს საიტის დამზადება საქართველოში? | PixelWeb Blog',
    description: 'ფასები, ვადები და ხარისხი. Landing Page 600-1,200₾, ბიზნეს საიტი 1,500₾-დან, ონლაინ მაღაზია 4,000₾-დან.',
    keywords: 'საიტის ფასი, რა ღირს საიტი, ვებსაიტების დამზადების ფასები, საიტის დამზადების ფასი'
  },
  'wordpress-vs-custom-code': {
    title: 'WordPress თუ Custom Code — რომელი ჯობია ქართული ბიზნესისთვის? | PixelWeb',
    description: 'შევადაროთ WordPress და Custom Code (Next.js): ფასი, სიჩქარე, SEO და მოქნილობა. რომელი არჩიოს ქართულმა ბიზნესმა?',
    keywords: 'WordPress vs Custom, WordPress საქართველო, Next.js საიტი, რომელი არჩიოს, საიტი WordPress-ით, custom code საიტი'
  },
  'seo-safudzvlebi-qartuli-biznesisthvis': {
    title: 'SEO საფუძვლები ქართული ბიზნესისთვის 2026 წელს | PixelWeb',
    description: 'როგორ მოახდინოთ თქვენი საიტი Google-ის პირველ გვერდზე ქართულ ბაზარზე. 7 პრაქტიკული ნაბიჯი.',
    keywords: 'SEO საქართველო, SEO საფუძვლები, Google ქართული, საიტი Google-ში, SEO ქართულად 2026'
  },
  'restornisthvis-saiti-ra-unda-hkondes': {
    title: 'რესტორნისთვის საიტი — რა უნდა ჰქონდეს აუცილებლად? | PixelWeb',
    description: 'მენიუ, ჯავშანი, Google Maps, ფოტოები. რესტორნის საიტის სრული გზამკვლევი ქართული რესტორნებისთვის.',
    keywords: 'რესტორნის საიტი, რესტორნისთვის საიტი, კაფეს საიტი, მენიუ ონლაინ, რესტორნის ვებსაიტი'
  },
  'landing-page-tu-biznes-saiti': {
    title: 'Landing Page თუ ბიზნეს საიტი — რომელი აირჩიოთ? | PixelWeb',
    description: 'ვუხსნით განსხვავებას Landing Page-სა და ბიზნეს საიტს შორის ფასში, სტრუქტურასა და გამოყენებაში.',
    keywords: 'Landing Page vs ბიზნეს საიტი, რომელი არჩიოს, საიტის ტიპები, ერთგვერდიანი vs რამდენიმეგვერდიანი'
  },
  'saiti-mcire-biznesisthvis-5-nabiji': {
    title: 'საიტი მცირე ბიზნესისთვის — 5 აუცილებელი ნაბიჯი | PixelWeb',
    description: 'რა გჭირდებათ მცირე ბიზნესის საიტისთვის და როგორ დაიწყოთ მინიმალური ბიუჯეტით. პრაქტიკული გზამკვლევი.',
    keywords: 'საიტი მცირე ბიზნესისთვის, მცირე ბიზნესის ვებსაიტი, საიტი დამწყები ბიზნესისთვის, საიტი მცირე ბიუჯეტით'
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const meta = postsMeta[params.slug]
  if (!meta) return { title: 'Post Not Found' }

  const url = `https://pixelweb.ge/blog/${params.slug}`

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      type: 'article',
      locale: 'ka_GE',
      siteName: 'PixelWeb.ge',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  return <ClientBlogPost slug={params.slug} />
}
