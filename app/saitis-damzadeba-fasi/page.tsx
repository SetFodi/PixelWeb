import type { Metadata } from 'next'
import SeoServiceLandingPage from '@/components/SeoServiceLandingPage'
import { seoServicePages } from '@/constants/seoServices'
import { buildServiceMetadata } from '@/lib/seoMetadata'

const page = seoServicePages['saitis-damzadeba-fasi']

export const metadata: Metadata = buildServiceMetadata('saitis-damzadeba-fasi')

export default function SaitisDamzadebaFasiPage() {
  return <SeoServiceLandingPage page={page} />
}

