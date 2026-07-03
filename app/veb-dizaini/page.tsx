import type { Metadata } from 'next'
import SeoServiceLandingPage from '@/components/SeoServiceLandingPage'
import { seoServicePages } from '@/constants/seoServices'
import { buildServiceMetadata } from '@/lib/seoMetadata'

const page = seoServicePages['veb-dizaini']

export const metadata: Metadata = buildServiceMetadata('veb-dizaini')

export default function VebDizainiPage() {
  return <SeoServiceLandingPage page={page} />
}
