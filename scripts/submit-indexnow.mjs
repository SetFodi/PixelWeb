const siteUrl = 'https://pixelweb.ge'
const siteHost = 'pixelweb.ge'
const indexNowKey = 'caadfc8206850a7f27fbd52a4bba7d36'
const keyLocation = `${siteUrl}/${indexNowKey}.txt`
const endpoint = 'https://api.indexnow.org/indexnow'

function decodeXml(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'")
}

function validateUrls(urls) {
  return [...new Set(urls)].filter((value) => {
    try {
      const url = new URL(value)
      return url.protocol === 'https:' && url.hostname === siteHost
    } catch {
      return false
    }
  })
}

async function urlsFromSitemap() {
  const response = await fetch(`${siteUrl}/sitemap.xml`, {
    headers: { 'user-agent': 'PixelWeb-IndexNow/1.0' },
  })

  if (!response.ok) {
    throw new Error(`Could not read the production sitemap (HTTP ${response.status}).`)
  }

  const xml = await response.text()
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => decodeXml(match[1].trim()))
}

const requestedUrls = process.argv.slice(2)
const candidates = requestedUrls.length > 0 ? requestedUrls : await urlsFromSitemap()
const urlList = validateUrls(candidates)

if (urlList.length === 0) {
  throw new Error('No valid pixelweb.ge URLs were provided or found in the sitemap.')
}

if (urlList.length > 10_000) {
  throw new Error('IndexNow accepts at most 10,000 URLs in one request.')
}

const response = await fetch(endpoint, {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: siteHost,
    key: indexNowKey,
    keyLocation,
    urlList,
  }),
})

if (!response.ok && response.status !== 202) {
  const details = await response.text()
  throw new Error(`IndexNow rejected the submission (HTTP ${response.status})${details ? `: ${details}` : '.'}`)
}

console.log(`IndexNow accepted ${urlList.length} URL${urlList.length === 1 ? '' : 's'} (HTTP ${response.status}).`)
