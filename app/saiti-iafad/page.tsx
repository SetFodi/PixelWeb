import type { Metadata } from 'next'
import SeoServiceLandingPage from '@/components/SeoServiceLandingPage'
import { seoServicePages } from '@/constants/seoServices'
import { buildServiceMetadata } from '@/lib/seoMetadata'

const page = seoServicePages['saiti-iafad']

export const metadata: Metadata = buildServiceMetadata('saiti-iafad')

export default function SaitiIafadPage() {
  return <SeoServiceLandingPage page={page} />
}
