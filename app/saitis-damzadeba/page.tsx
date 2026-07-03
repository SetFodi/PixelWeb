import type { Metadata } from 'next'
import SeoServiceLandingPage from '@/components/SeoServiceLandingPage'
import { seoServicePages } from '@/constants/seoServices'
import { buildServiceMetadata } from '@/lib/seoMetadata'

const page = seoServicePages['saitis-damzadeba']

export const metadata: Metadata = buildServiceMetadata('saitis-damzadeba')

export default function SaitisDamzadebaPage() {
  return <SeoServiceLandingPage page={page} />
}

