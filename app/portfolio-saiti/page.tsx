import type { Metadata } from 'next'
import SeoServiceLandingPage from '@/components/SeoServiceLandingPage'
import { seoServicePages } from '@/constants/seoServices'
import { buildServiceMetadata } from '@/lib/seoMetadata'

const page = seoServicePages['portfolio-saiti']

export const metadata: Metadata = buildServiceMetadata('portfolio-saiti')

export default function PortfolioSaitiPage() {
  return <SeoServiceLandingPage page={page} />
}
