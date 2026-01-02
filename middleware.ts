import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Read admin IPs from environment variable
const getAdminIPs = () => {
  const ips = process.env.ADMIN_IPS?.split(',').map(ip => ip.trim()) || []
  return new Set([...ips, '127.0.0.1', '::1']) // Always include localhost for dev
}

const ALLOWED_IPS = getAdminIPs()

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const isStatsPage = pathname.startsWith('/stats')
  const isTrackApi = pathname.startsWith('/api/track')

  // Only protect:
  // - /stats (all methods)
  // - /api/track GET (allow POST for tracking from any visitor)
  const shouldProtect =
    isStatsPage ||
    (isTrackApi && req.method === 'GET')

  if (!shouldProtect) {
    return NextResponse.next()
  }

  const ip =
    req.ip ||
    req.headers.get('x-real-ip') ||
    (req.headers.get('x-forwarded-for') || '').split(',')[0]?.trim() ||
    ''

  const isAllowed =
    process.env.NODE_ENV !== 'production' // allow all in dev
    || (ip && ALLOWED_IPS.has(ip))

  if (isAllowed) {
    return NextResponse.next()
  }

  // Block unauthorized access:
  if (pathname.startsWith('/api/')) {
    return new NextResponse(JSON.stringify({ error: 'Forbidden' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return NextResponse.redirect(new URL('/', req.url))
}

export const config = {
  matcher: ['/stats/:path*', '/api/track', '/api/track/:path*'],
}


