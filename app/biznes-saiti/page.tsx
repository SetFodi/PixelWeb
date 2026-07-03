import type { Metadata } from 'next'
import SeoServiceLandingPage from '@/components/SeoServiceLandingPage'
import { seoServicePages } from '@/constants/seoServices'
import { buildServiceMetadata } from '@/lib/seoMetadata'

const page = seoServicePages['biznes-saiti']

export const metadata: Metadata = buildServiceMetadata('biznes-saiti')

export default function BiznesSaitiPage() {
  return <SeoServiceLandingPage page={page} />
}

