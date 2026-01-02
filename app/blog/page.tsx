import type { Metadata } from 'next'
import ClientBlog from '@/components/ClientBlog'

export const metadata: Metadata = {
  title: 'ბლოგი | სასარგებლო რჩევები ვებსაიტებზე | PixelWeb',
  description: 'გაიგეთ მეტი საიტის დამზადების, SEO ოპტიმიზაციის და ციფრული მარკეტინგის შესახებ ჩვენს ბლოგზე.',
  alternates: {
    canonical: 'https://pixelweb.ge/blog',
  },
}

export default function BlogPage() {
  return <ClientBlog />
}
