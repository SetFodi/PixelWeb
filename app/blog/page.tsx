import type { Metadata } from 'next'
import ClientBlog from '@/components/ClientBlog'

export const metadata: Metadata = {
  title: 'ბლოგი | რჩევები საიტებზე, SEO და ფასებზე | PixelWeb',
  description: 'გაიგეთ მეტი საიტის დამზადების, SEO ოპტიმიზაციის, ფასებისა და ციფრული მარკეტინგის შესახებ ჩვენს ბლოგზე. სტატიები ქართულ ენაზე.',
  keywords: 'ბლოგი ვებსაიტებზე, SEO ბლოგი ქართულად, საიტის რჩევები, ვებ დიზაინი ბლოგი, PixelWeb ბლოგი',
  alternates: {
    canonical: 'https://pixelweb.ge/blog',
  },
  openGraph: {
    title: 'PixelWeb ბლოგი — რჩევები საიტებზე და SEO-ზე',
    description: 'სტატიები საიტის დამზადებაზე, SEO-ზე, ფასებზე და ციფრულ მარკეტინგზე ქართულ ენაზე.',
    url: 'https://pixelweb.ge/blog',
    type: 'website',
    locale: 'ka_GE',
    siteName: 'PixelWeb.ge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixelWeb ბლოგი — რჩევები საიტებზე და SEO-ზე',
    description: 'სტატიები საიტის დამზადებაზე, SEO-ზე და ფასებზე ქართულ ენაზე.',
  },
}

export default function BlogPage() {
  return <ClientBlog />
}
