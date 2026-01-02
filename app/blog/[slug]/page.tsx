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
    description: 'ფასები, ვადები და ხარისხი. დეტალური გზამკვლევი ვებსაიტის ფასწარმოქმნის შესახებ.',
    keywords: 'საიტის ფასი, რა ღირს საიტი, ვებსაიტების დამზადების ფასები'
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const meta = postsMeta[params.slug]
  if (!meta) return { title: 'Post Not Found' }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `https://pixelweb.ge/blog/${params.slug}`,
    },
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  return <ClientBlogPost slug={params.slug} />
}
