import type { Metadata } from 'next'
import SeoServiceLandingPage from '@/components/SeoServiceLandingPage'
import { seoServicePages } from '@/constants/seoServices'
import { buildServiceMetadata } from '@/lib/seoMetadata'

const page = seoServicePages['internet-magaziis-damzadeba']

export const metadata: Metadata = buildServiceMetadata('internet-magaziis-damzadeba')

export default function InternetMagaziisDamzadebaPage() {
  return <SeoServiceLandingPage page={page} />
}

