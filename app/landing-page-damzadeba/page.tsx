import type { Metadata } from 'next'
import SeoServiceLandingPage from '@/components/SeoServiceLandingPage'
import { seoServicePages } from '@/constants/seoServices'
import { buildServiceMetadata } from '@/lib/seoMetadata'

const page = seoServicePages['landing-page-damzadeba']

export const metadata: Metadata = buildServiceMetadata('landing-page-damzadeba')

export default function LandingPageDamzadebaPage() {
  return <SeoServiceLandingPage page={page} />
}

