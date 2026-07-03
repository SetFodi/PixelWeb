import type { Metadata } from 'next'
import SeoServiceLandingPage from '@/components/SeoServiceLandingPage'
import { seoServicePages } from '@/constants/seoServices'
import { buildServiceMetadata } from '@/lib/seoMetadata'

const page = seoServicePages['restornis-saiti']

export const metadata: Metadata = buildServiceMetadata('restornis-saiti')

export default function RestornisSaitiPage() {
  return <SeoServiceLandingPage page={page} />
}
