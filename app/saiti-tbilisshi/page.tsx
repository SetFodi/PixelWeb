import type { Metadata } from 'next'
import SeoServiceLandingPage from '@/components/SeoServiceLandingPage'
import { seoServicePages } from '@/constants/seoServices'
import { buildServiceMetadata } from '@/lib/seoMetadata'

const page = seoServicePages['saiti-tbilisshi']

export const metadata: Metadata = buildServiceMetadata('saiti-tbilisshi')

export default function SaitiTbilisshiPage() {
  return <SeoServiceLandingPage page={page} />
}
