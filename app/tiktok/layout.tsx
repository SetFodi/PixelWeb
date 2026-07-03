import type { Metadata } from 'next'

// /tiktok is a paid-campaign landing page (TikTok ads). It duplicates the
// home-page offer, so it must not compete with the money pages in search.
export const metadata: Metadata = {
  title: 'PixelWeb.ge — ვებსაიტის დამზადება',
  robots: {
    index: false,
    follow: false,
  },
}

export default function TikTokLayout({ children }: { children: React.ReactNode }) {
  return children
}
