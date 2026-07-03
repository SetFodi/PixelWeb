# PixelWeb.ge – პროფესიონალური ვებსაიტების შექმნა

თანამედროვე სერვის-პორტფოლიო ვებსაიტი საქართველოსთვის. სწრაფი, სუფთა და ვიზუალურად დახვეწილი გამოცდილება Next.js 14-ისა და Tailwind CSS-ის საფუძველზე.

## 🚀 მთავარი შესაძლებლობები

- თანამედროვე დიზაინი Tailwind CSS-ით და დახვეწილი UI დეტალებით
- სრულად რესპონსიული – მობილური, ტაბლეტი, დესკტოპი
- გლუვი ანიმაციები Framer Motion-ით (გათვალისწინებულია prefers-reduced-motion)
- Dark/Light თემა – ThemeProvider და ქულ UI ThemeToggle
- ქართული შრიფტი – BPG ExtraSquare Mtavruli (app/globals.css)
- SEO ოპტიმიზაცია – Next.js Metadata API
- ანალიტიკა – @vercel/analytics
- პერფორმანსი – Next.js App Router

## 🆕 ბოლო ვიზუალური გაუმჯობესებები

- Navbar-ის ქვედა scroll progress bar
- Glassy sticky ფილტრის ზოლი პორტფოლიოში
- Project Modal: ESC/Arrow Keys; body scroll lock
- Image Slider: ქვედა gradient overlay უკეთესი კონტასტისთვის
- Scroll-to-top მობძნე ღილაკი
- PageTransition: reduced motion მხარდაჭერა
- Footer: ზედა მხარეს მკრთალი gradient divider
- Home Hero: დეკორატიული gradient orbs ფონის სიღრმისთვის

## 📄 გვერდები

1. app/page.tsx – მთავარი: Hero, მახასიათებლები, ფასების პრევიუ, CTA
2. app/services/page.tsx – სერვისები და ფასები (პაკეტები, პროცესი, CTA)
3. app/portfolio/page.tsx – პორტფოლიო ფილტრაციით, მოდალითა და სლაიდერით
4. app/about/page.tsx – ჩვენ შესახებ, ღირებულებები, მიღწევები, CTA
5. app/contact/page.tsx – კონტაქტის ფორმა და ინფორმაცია
6. app/not-found.tsx – 404 გვერდი

## 🛠️ ტექნოლოგიური Stack

- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS 3.4, Framer Motion 11, React Icons
- @vercel/analytics

## 📦 ინსტალაცია

```bash
# დეპენდენსების ინსტალაცია
npm install

# ან
yarn install

# ან
pnpm install
```

## 🚀 დეველოპმენტ

```bash
# დეველოპმენტ სერვერის გაშვება
npm run dev

# ან
yarn dev

# ან
pnpm dev
```

ღია გახსენით [http://localhost:3000](http://localhost:3000) ბრაუზერში შედეგის სანახავად.

## 🏗️ ბილდი

```bash
# პროდაქშენ ბილდის შექმნა
npm run build

# ან
yarn build

# ან
pnpm build
```

## 🚀 პროდაქშენ სერვერის გაშვება

```bash
# ბილდის შემდეგ
npm start

# ან
yarn start

# ან
pnpm start
```

## 📁 სტრუქტურა

```
pixelweb/
├── app/
│   ├── about/
│   │   └── page.tsx          # ჩვენ შესახებ გვერდი
│   ├── contact/
│   │   └── page.tsx          # კონტაქტის გვერდი
│   ├── portfolio/
│   │   └── page.tsx          # პორტფოლიო გვერდი
│   ├── services/
│   │   └── page.tsx          # სერვისები და ფასები
│   ├── api/
│   │   ├── contact/route.ts  # კონტაქტის API (Resend მზად)
│   │   └── track/route.ts    # მარტივი tracking (Dev)
│   ├── globals.css           # გლობალური სტილები
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # მთავარი გვერდი
├── components/
│   ├── Navbar.tsx, Footer.tsx
│   ├── ThemeProvider.tsx, ThemeToggle.tsx
│   ├── PageLoader.tsx, PageTransition.tsx, ScrollToTopButton.tsx
│   ├── ImageSlider.tsx, ImageWithLoader.tsx, LoadingSpinner.tsx
│   └── ProjectModal.tsx
├── public/
│   └── images/               # სურათების ფოლდერი
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 მორგება

### ფერები

ფერები შეგიძლიათ შეიცვალოთ `tailwind.config.ts`-ში:

```typescript
colors: {
  primary: {
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
  },
  accent: {
    500: '#d97706',
  }
}
```

### შრიფტი და გლობალური სტილები
- შრიფტი: BPG ExtraSquare Mtavruli – `app/globals.css`
- გლობალური focus-visible, scrollbar, reduced-motion მხარდაჭერა

## 🌐 API როუტები

- `POST /api/contact` – ფორმის გაგზავნა (Resend API ინტეგრაციისთვის მზად). Env:
  - `RESEND_API_KEY` (არასავალდებულო Dev რეჟიმში)
  - `CONTACT_EMAIL` (ნაგულისხმევად `info@pixelweb.ge`)

## 📱 მობილურზე ტესტირება

```bash
npm run dev
```

შემდეგ გახსენით თქვენი ლოკალური IP მობილურ მოწყობილობაზე, მაგ:
`http://192.168.1.XXX:3000`

## 🚀 Deploy

### Vercel (რეკომენდებული)

```bash
# Vercel CLI-ის ინსტალაცია
npm i -g vercel

# Deploy
vercel
```

ან დააკონექტეთ GitHub repository Vercel-თან ავტომატური deployment-ისთვის.

### სხვა პლატფორმები
- Netlify
- AWS Amplify
- Cloudflare Pages
- DigitalOcean App Platform

## 📝 კონტენტის/ინტეგრაციის შენიშვნები
- სოციალური მედიის ლინკები: `components/Footer.tsx` / `components/Navbar.tsx`
- კონტაქტის ფორმა: `app/contact/page.tsx` → `POST /api/contact` (Resend API)

## 🔧 დამატებითი გაუმჯობესებები

რომ გააუმჯობესოთ საიტი, შეგიძლიათ დაამატოთ:

1. **რეალური სურათები**: `/public/images/` ფოლდერში
2. **Blog სექცია**: პროექტების და ტიპების გასაზიარებლად
3. **Admin Panel**: CMS კონტენტის მოსამართავად
4. **ანალიტიკა**: Google Analytics ან Plausible
5. **Chat Widget**: რეალურ დროში მხარდაჭერისთვის
6. **მრავალენოვანი მხარდაჭერა**: ქართული და ინგლისური

## 📄 ლიცენზია
ყველა უფლება დაცულია – PixelWeb.ge.

## 🤝 მხარდაჭერა
კითხვების შემთხვევაში დაგვიკავშირდით:
- Email: pixelweb2026@gmail.com

---

შექმნილია ❤️-ით PixelWeb.ge-ის მიერ

