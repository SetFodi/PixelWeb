import type { Metadata } from 'next'
import SeoServiceLandingPage from '@/components/SeoServiceLandingPage'
import { seoServicePages } from '@/constants/seoServices'
import { buildServiceMetadata } from '@/lib/seoMetadata'

const page = seoServicePages['mcire-biznesis-saiti']

export const metadata: Metadata = buildServiceMetadata('mcire-biznesis-saiti')

export default function McireBiznesisSaitiPage() {
  return <SeoServiceLandingPage page={page} />
}
