import type { Metadata } from 'next'
import SeoServiceLandingPage from '@/components/SeoServiceLandingPage'
import { seoServicePages } from '@/constants/seoServices'
import { buildServiceMetadata } from '@/lib/seoMetadata'

const page = seoServicePages['saitis-redizaini']

export const metadata: Metadata = buildServiceMetadata('saitis-redizaini')

export default function SaitisRedizainiPage() {
  return <SeoServiceLandingPage page={page} />
}
