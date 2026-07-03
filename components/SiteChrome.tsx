'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageLoader from '@/components/PageLoader'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import WhatsAppButton from '@/components/WhatsAppButton'
import StickyContactBar from '@/components/StickyContactBar'

type SiteChromeProps = {
  children: React.ReactNode
}

const adLandingPaths = new Set(['/website-design-georgia'])

export default function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname()

  if (adLandingPaths.has(pathname)) {
    return <main className="min-h-screen">{children}</main>
  }

  return (
    <>
      <PageLoader />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <ScrollToTopButton />
      <StickyContactBar />
      <WhatsAppButton />
    </>
  )
}
