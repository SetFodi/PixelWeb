import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ClientProjectDetail from '@/components/ClientProjectDetail'
import { projectSlugs, getProjectBySlug } from '@/constants/projects'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) {
    return { title: 'Project Not Found' }
  }

  const url = `https://pixelweb.ge/portfolio/${project.slug}`
  const title = `${project.title.ka} — ${project.tagline.ka} | PixelWeb`
  const description = project.description.ka
  const ogImage = `https://pixelweb.ge${project.cover}`

  return {
    title,
    description,
    keywords: [
      project.title.ka,
      project.title.en,
      ...project.technologies,
      'პორტფოლიო',
      'PixelWeb',
      project.categoryLabel.ka,
    ].join(', '),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      locale: 'ka_GE',
      siteName: 'PixelWeb.ge',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.title.ka,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()
  return <ClientProjectDetail slug={params.slug} />
}
