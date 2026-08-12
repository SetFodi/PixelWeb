import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'PixelWeb.ge — საიტის დამზადება საქართველოში 600₾-დან'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  const fontBuffer = await readFile(join(process.cwd(), 'public/fonts/bpg_extrasquare_mtavruli_2009.ttf'))
  const fontData = fontBuffer.buffer.slice(
    fontBuffer.byteOffset,
    fontBuffer.byteOffset + fontBuffer.byteLength,
  ) as ArrayBuffer

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background: '#03111f',
          color: '#f8fafc',
          fontFamily: 'BPG',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 620,
            height: 620,
            borderRadius: 999,
            right: -170,
            top: -260,
            background: 'radial-gradient(circle, rgba(14,165,233,0.5) 0%, rgba(14,165,233,0) 68%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 430,
            height: 430,
            borderRadius: 999,
            left: -180,
            bottom: -240,
            background: 'radial-gradient(circle, rgba(245,158,11,0.35) 0%, rgba(245,158,11,0) 70%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 30,
            display: 'flex',
            border: '1px solid rgba(125,211,252,0.2)',
            borderRadius: 30,
          }}
        />

        <div
          style={{
            padding: '70px 82px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div
              style={{
                width: 22,
                height: 22,
                display: 'flex',
                borderRadius: 7,
                background: '#0ea5e9',
                boxShadow: '22px 0 0 #f59e0b',
              }}
            />
            <div style={{ display: 'flex', marginLeft: 18, fontSize: 30, letterSpacing: 0.5 }}>
              PixelWeb.ge
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 970 }}>
            <div style={{ display: 'flex', fontSize: 67, lineHeight: 1.08, letterSpacing: -1 }}>
              საიტის დამზადება საქართველოში
            </div>
            <div style={{ display: 'flex', marginTop: 22, fontSize: 45, color: '#7dd3fc' }}>
              600 GEL-დან · Landing Page 3–5 დღეში
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 14, color: '#cbd5e1', fontSize: 23 }}>
              <span>სწრაფი</span>
              <span style={{ color: '#38bdf8' }}>•</span>
              <span>მობილური</span>
              <span style={{ color: '#38bdf8' }}>•</span>
              <span>SEO-ready</span>
            </div>
            <div
              style={{
                display: 'flex',
                padding: '14px 22px',
                borderRadius: 14,
                background: '#f59e0b',
                color: '#07111f',
                fontSize: 21,
              }}
            >
              557 10 00 20
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'BPG',
          data: fontData,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  )
}
