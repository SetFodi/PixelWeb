const phone = '557 10 00 20'
const phoneHref = 'tel:557100020'
const email = 'pixelweb2026@gmail.com'
const whatsappHref =
  'https://wa.me/995557100020?text=Hello%2C%20I%20want%20a%20website%20for%20my%20business'

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Website Design in Georgia from 600 GEL | PixelWeb.ge</title>
  <meta name="description" content="PixelWeb builds fast landing pages and business websites in Georgia. Prices start from 600 GEL with quick delivery and WhatsApp consultation.">
  <meta name="robots" content="noindex, nofollow">
  <link rel="canonical" href="https://www.pixelweb.ge/google-ads-website">
  <style>
    :root {
      color-scheme: light;
      --ink: #0f172a;
      --muted: #475569;
      --line: #dbe4ef;
      --blue: #0284c7;
      --blue-dark: #075985;
      --green: #16a34a;
      --bg: #f8fafc;
      --panel: #ffffff;
    }

    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      color: var(--ink);
      background: var(--bg);
      line-height: 1.5;
    }

    a { color: inherit; }
    .wrap { width: min(1120px, calc(100% - 32px)); margin: 0 auto; }

    header {
      background: var(--panel);
      border-bottom: 1px solid var(--line);
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 18px 0;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-weight: 900;
      font-size: 22px;
      text-decoration: none;
    }

    .brand img {
      width: 42px;
      height: 42px;
      object-fit: contain;
    }

    .hero {
      background: #07111f;
      color: #ffffff;
      padding: 72px 0;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      gap: 42px;
      align-items: center;
    }

    .eyebrow {
      color: #7dd3fc;
      font-weight: 800;
      letter-spacing: .12em;
      text-transform: uppercase;
      font-size: 14px;
      margin: 0 0 16px;
    }

    h1 {
      font-size: clamp(40px, 6vw, 68px);
      line-height: 1.02;
      margin: 0;
      letter-spacing: 0;
    }

    .lead {
      color: #cbd5e1;
      font-size: 20px;
      max-width: 680px;
      margin: 24px 0 0;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 32px;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 52px;
      padding: 14px 22px;
      border-radius: 8px;
      font-weight: 900;
      text-decoration: none;
    }

    .button-green { background: var(--green); color: white; }
    .button-outline { border: 1px solid rgba(255,255,255,.32); color: white; }

    .summary {
      display: grid;
      gap: 12px;
      padding: 24px;
      border: 1px solid #334155;
      background: #0f172a;
      border-radius: 10px;
    }

    .summary div {
      padding: 16px;
      background: rgba(255,255,255,.06);
      border-radius: 8px;
      font-weight: 800;
    }

    section { padding: 56px 0; }
    h2 { font-size: clamp(30px, 4vw, 44px); line-height: 1.1; margin: 0 0 12px; }
    .muted { color: var(--muted); margin: 0; }

    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      margin-top: 28px;
    }

    .card {
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 10px;
      padding: 24px;
    }

    .card h3 { margin: 0; font-size: 24px; }
    .price { color: var(--blue-dark); font-weight: 900; font-size: 22px; margin: 10px 0 0; }
    .time { color: var(--muted); font-weight: 700; margin: 4px 0 16px; }
    ul { margin: 0; padding-left: 20px; color: #334155; }
    li + li { margin-top: 8px; }

    .proof {
      background: #e0f2fe;
      border-top: 1px solid #bae6fd;
      border-bottom: 1px solid #bae6fd;
    }

    .proof-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
      align-items: start;
    }

    .list {
      display: grid;
      gap: 10px;
    }

    .list div {
      background: white;
      border: 1px solid #bae6fd;
      border-radius: 8px;
      padding: 14px 16px;
      font-weight: 800;
    }

    footer {
      background: #07111f;
      color: white;
      padding: 40px 0;
    }

    .footer-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .contact {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      color: #cbd5e1;
    }

    @media (max-width: 780px) {
      .hero-grid, .cards, .proof-grid { grid-template-columns: 1fr; }
      .hero { padding: 48px 0; }
      .footer-row { align-items: flex-start; flex-direction: column; }
    }
  </style>
</head>
<body>
  <header>
    <div class="wrap nav">
      <a class="brand" href="https://www.pixelweb.ge/google-ads-website" aria-label="PixelWeb.ge">
        <img src="/images/logo.png" alt="PixelWeb.ge logo">
        <span>PixelWeb.ge</span>
      </a>
      <a class="button button-green" href="${whatsappHref}">WhatsApp</a>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="wrap hero-grid">
        <div>
          <p class="eyebrow">Website design in Georgia</p>
          <h1>Fast websites for businesses that need clients.</h1>
          <p class="lead">PixelWeb builds landing pages, business websites, and online stores for companies in Georgia. Prices start from 600 GEL with quick delivery and clear contact paths.</p>
          <div class="actions">
            <a class="button button-green" href="${whatsappHref}">Get a free quote</a>
            <a class="button button-outline" href="${phoneHref}">Call ${phone}</a>
          </div>
        </div>
        <div class="summary" aria-label="Project summary">
          <div>Price from 600 GEL</div>
          <div>Delivery from 3-5 days</div>
          <div>Mobile-first website design</div>
          <div>WhatsApp, phone, and form lead flow</div>
        </div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <p class="eyebrow" style="color: var(--blue-dark)">Packages</p>
        <h2>Choose the website size that fits the goal.</h2>
        <p class="muted">Simple pricing for quick launch projects and growing businesses.</p>
        <div class="cards">
          <article class="card">
            <h3>Landing Page</h3>
            <p class="price">from 600 GEL</p>
            <p class="time">3-5 days</p>
            <ul>
              <li>Single focused page</li>
              <li>Mobile-first design</li>
              <li>WhatsApp and call buttons</li>
              <li>Basic SEO setup</li>
            </ul>
          </article>
          <article class="card">
            <h3>Business Website</h3>
            <p class="price">from 1,500 GEL</p>
            <p class="time">7-10 days</p>
            <ul>
              <li>Multiple service pages</li>
              <li>Portfolio or gallery section</li>
              <li>Contact form</li>
              <li>Google-ready structure</li>
            </ul>
          </article>
          <article class="card">
            <h3>Online Store</h3>
            <p class="price">from 4,000 GEL</p>
            <p class="time">14-21 days</p>
            <ul>
              <li>Product catalog</li>
              <li>Cart or order flow</li>
              <li>Admin-friendly structure</li>
              <li>Analytics setup</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="proof">
      <div class="wrap proof-grid">
        <div>
          <h2>Built to convert paid traffic.</h2>
          <p class="muted">The page structure is made for visitors who need a fast answer: price, timing, trust, and one clear next step.</p>
        </div>
        <div class="list">
          <div>Clear offer above the fold</div>
          <div>Fast loading page</div>
          <div>Lead buttons for WhatsApp and phone</div>
          <div>Analytics and conversion setup</div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="wrap footer-row">
      <div>
        <h2>Ready to start?</h2>
        <p class="muted" style="color:#cbd5e1">Send a message and get a quick quote.</p>
      </div>
      <div class="contact">
        <a class="button button-green" href="${whatsappHref}">WhatsApp</a>
        <a class="button button-outline" href="mailto:${email}">Email</a>
        <a class="button button-outline" href="${phoneHref}">${phone}</a>
      </div>
    </div>
  </footer>
</body>
</html>`

export function GET() {
  return new Response(html, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=0, must-revalidate',
    },
  })
}
