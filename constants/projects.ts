export type ProjectCategory =
  | 'mobile'
  | 'education'
  | 'ecommerce'
  | 'restaurant'
  | 'gaming'
  | 'business'
  | 'construction'
  | 'portfolio'

export type Project = {
  id: number
  slug: string
  title: { ka: string; en: string }
  tagline: { ka: string; en: string }
  description: { ka: string; en: string }
  longDescription: { ka: string; en: string }
  category: ProjectCategory
  categoryLabel: { ka: string; en: string }
  year: string
  client?: string
  role: { ka: string; en: string }
  images: string[]
  cover: string
  technologies: string[]
  features: { ka: string[]; en: string[] }
  highlights: { ka: string[]; en: string[] }
  liveUrl?: string
  featured?: boolean
  accent: string
}

export const projects: Project[] = [
  {
    id: 11,
    slug: 'decoconcept',
    title: { ka: 'DecoConcept', en: 'DecoConcept' },
    tagline: {
      ka: 'საღებავებისა და მოსაპირკეთებელი მასალების პრემიუმ მაღაზია',
      en: 'Premium paint & finishing materials store',
    },
    description: {
      ka: 'საღებავებისა და მოსაპირკეთებელი მასალების პრემიუმ მაღაზიის ვებსაიტი საქართველოში.',
      en: 'Premium paint and finishing materials store website in Georgia.',
    },
    longDescription: {
      ka: 'DecoConcept არის თანამედროვე E-commerce პლატფორმა, რომელიც ქართულ ბაზარს სთავაზობს ხარისხიან საღებავებსა და მოსაპირკეთებელ მასალებს. პროექტი მოიცავს დახვეწილ პროდუქტის გვერდებს, კატეგორიების სტრუქტურას და SEO-სთვის მზად კონტენტს.',
      en: 'DecoConcept is a modern e-commerce platform offering premium paint and finishing materials to the Georgian market. The project covers refined product pages, a clear category structure, and SEO-ready content.',
    },
    category: 'ecommerce',
    categoryLabel: { ka: 'E-Commerce', en: 'E-Commerce' },
    year: '2025',
    client: 'DecoConcept Georgia',
    role: { ka: 'დიზაინი + დეველოპმენტი', en: 'Design + Development' },
    images: [
      '/images/decoconcept1.png',
      '/images/decoconcept2.png',
      '/images/decoconcept3.png',
    ],
    cover: '/images/decoconcept1.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    features: {
      ka: [
        'პროდუქციის კატალოგი',
        'თანამედროვე დიზაინი',
        'სრულიად რესპონსიული',
        'SEO ოპტიმიზაცია',
      ],
      en: ['Product Catalog', 'Modern Design', 'Fully Responsive', 'SEO Optimized'],
    },
    highlights: {
      ka: ['პრემიუმ ვიზუალი', 'სწრაფი ჩატვირთვა', 'მკაფიო კონვერსიის გზა'],
      en: ['Premium visuals', 'Fast load', 'Clear conversion path'],
    },
    liveUrl: 'https://decoconcept.ge',
    featured: true,
    accent: 'from-amber-500 to-orange-600',
  },
  {
    id: 6,
    slug: 'furniture-store',
    title: { ka: 'Furniture Store', en: 'Furniture Store' },
    tagline: {
      ka: 'ავეჯის ონლაინ მაღაზია 3D პრევიუთი',
      en: 'Online furniture store with 3D preview',
    },
    description: {
      ka: 'თანამედროვე E-commerce პლატფორმა ავეჯის გაყიდვისთვის.',
      en: 'Modern E-commerce platform for furniture sales.',
    },
    longDescription: {
      ka: 'სრულფასოვანი ონლაინ ავეჯის მაღაზია გადახდის სისტემით, 3D პრევიუთი და ინვენტარის მართვის პანელით. შექმნილია ისეთი მომხმარებლისთვის, რომელსაც სურს ავეჯი ონლაინ შეარჩიოს კომფორტულად.',
      en: 'Full e-commerce furniture store with payment integration, 3D preview, and an inventory management panel. Built for shoppers who want to choose furniture online with confidence.',
    },
    category: 'ecommerce',
    categoryLabel: { ka: 'E-Commerce', en: 'E-Commerce' },
    year: '2024',
    role: { ka: 'დიზაინი + დეველოპმენტი', en: 'Design + Development' },
    images: [
      '/images/Furniture1.jpg',
      '/images/Furniture2.jpg',
      '/images/Furniture3.jpg',
    ],
    cover: '/images/Furniture1.jpg',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
    features: {
      ka: [
        'პროდუქტების კატალოგი',
        'გადახდის სისტემა',
        '3D პრევიუ',
        'ინვენტარის მართვა',
      ],
      en: ['Product Catalog', 'Payment System', '3D Preview', 'Inventory Management'],
    },
    highlights: {
      ka: ['3D ვიზუალიზაცია', 'უსაფრთხო გადახდები', 'ადმინ პანელი'],
      en: ['3D visualization', 'Secure checkout', 'Admin panel'],
    },
    featured: true,
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    id: 12,
    slug: 'sea-llc',
    title: { ka: 'SEA LLC', en: 'SEA LLC' },
    tagline: {
      ka: 'წყლის დამუშავებისა და ინდუსტრიული აღჭურვილობის კატალოგი',
      en: 'Water treatment and industrial equipment catalog',
    },
    description: {
      ka: 'ბილინგვური მარკეტინგული და კატალოგის ვებსაიტი SEA LLC-სთვის.',
      en: 'Bilingual marketing and catalog website for SEA LLC.',
    },
    longDescription: {
      ka: 'SEA LLC-ის ვებსაიტი აერთიანებს კომპანიის მიმართულებებს, პროდუქციის კატალოგს, პროექტებსა და საკონტაქტო გზებს ერთ სწრაფ, ორენოვან Next.js გამოცდილებაში.',
      en: 'The SEA LLC website brings company services, equipment categories, project work, and contact paths into one fast bilingual Next.js experience.',
    },
    category: 'business',
    categoryLabel: { ka: 'ბიზნესი', en: 'Business' },
    year: '2025',
    client: 'SEA LLC',
    role: { ka: 'დიზაინი + დეველოპმენტი', en: 'Design + Development' },
    images: ['/images/portfolio-new/sea.png'],
    cover: '/images/portfolio-new/sea.png',
    technologies: ['Next.js', 'TypeScript', 'App Router', 'i18n'],
    features: {
      ka: ['ორენოვანი კონტენტი', 'პროდუქციის კატალოგი', 'პროექტების გალერეა', 'სწრაფი კონტაქტი'],
      en: ['Bilingual content', 'Product catalog', 'Project gallery', 'Fast contact path'],
    },
    highlights: {
      ka: ['ტექნიკური კატალოგი', 'ქართული და ინგლისური ენა', 'მკაფიო B2B სტრუქტურა'],
      en: ['Technical catalog', 'Georgian and English UI', 'Clear B2B structure'],
    },
    accent: 'from-cyan-500 to-slate-700',
  },
  {
    id: 13,
    slug: 'nocturne',
    title: { ka: 'Nocturne', en: 'Nocturne' },
    tagline: {
      ka: 'ატმოსფერული რესტორნის ლენდინგი დაჯავშნის ფოკუსით',
      en: 'Atmospheric restaurant landing page focused on reservations',
    },
    description: {
      ka: 'პრემიუმ რესტორნის ვებსაიტი, სადაც ვიზუალი, მენიუ და დაჯავშნის გზა ერთად მუშაობს.',
      en: 'Premium restaurant website where visuals, menu storytelling, and reservations work together.',
    },
    longDescription: {
      ka: 'Nocturne შექმნილია საღამოს რესტორნის/ლაუნჯის ბრენდისთვის: დიდი ვიზუალური ჰირო, მკაფიო CTA, ატმოსფერული სექციები და მობილურზე მორგებული ნავიგაცია.',
      en: 'Nocturne is built for an evening restaurant or lounge brand: a strong visual hero, clear CTA, atmospheric sections, and mobile-friendly navigation.',
    },
    category: 'restaurant',
    categoryLabel: { ka: 'რესტორანი', en: 'Restaurant' },
    year: '2025',
    role: { ka: 'დიზაინი + დეველოპმენტი', en: 'Design + Development' },
    images: ['/images/portfolio-new/nocturne.png'],
    cover: '/images/portfolio-new/nocturne.png',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    features: {
      ka: ['დაჯავშნის CTA', 'ატმოსფერული ჰირო', 'მენიუს სექციები', 'მობილური UX'],
      en: ['Reservation CTA', 'Atmospheric hero', 'Menu sections', 'Mobile UX'],
    },
    highlights: {
      ka: ['ძლიერი პირველი შთაბეჭდილება', 'ლაუნჯის ვიზუალური ენა', 'სწრაფი კონვერსია'],
      en: ['Strong first impression', 'Lounge visual language', 'Fast conversion path'],
    },
    accent: 'from-amber-500 to-stone-900',
  },
  {
    id: 14,
    slug: 'focus-cabin',
    title: { ka: 'Focus Cabin', en: 'Focus Cabin' },
    tagline: {
      ka: 'მშვიდი ფოკუსის ვებსაიტი სამუშაო გარემოსთვის',
      en: 'Quiet focus website for a calm work experience',
    },
    description: {
      ka: 'პროდუქტიული სამუშაო სივრცის კონცეფცია მშვიდი ვიზუალითა და სუფთა ინტერფეისით.',
      en: 'A focused workspace concept with calm visuals and a clean interface.',
    },
    longDescription: {
      ka: 'Focus Cabin იყენებს ფართო ვიზუალს, მინიმალურ ნავიგაციას და მშვიდ CTA-ს, რათა მომხმარებელმა სწრაფად იგრძნოს პროდუქტის განწყობა და გამოიყენოს სივრცე ფოკუსისთვის.',
      en: 'Focus Cabin uses immersive visuals, minimal navigation, and calm CTAs so visitors understand the mood quickly and enter a focused workspace.',
    },
    category: 'portfolio',
    categoryLabel: { ka: 'პორტფოლიო', en: 'Portfolio' },
    year: '2025',
    role: { ka: 'დიზაინი + დეველოპმენტი', en: 'Design + Development' },
    images: ['/images/portfolio-new/cabin.png'],
    cover: '/images/portfolio-new/cabin.png',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    features: {
      ka: ['იმერსიული ჰირო', 'სუფთა ნავიგაცია', 'ფოკუსის CTA', 'რესპონსიული დიზაინი'],
      en: ['Immersive hero', 'Clean navigation', 'Focus CTA', 'Responsive design'],
    },
    highlights: {
      ka: ['მშვიდი ბრენდინგი', 'პროდუქტის განწყობა', 'სწრაფი შესვლა'],
      en: ['Calm branding', 'Product mood', 'Fast entry point'],
    },
    accent: 'from-sky-500 to-blue-950',
  },
  {
    id: 15,
    slug: 'alasi',
    title: { ka: 'Alasi', en: 'Alasi' },
    tagline: {
      ka: 'პრემიუმ ჩარდახების ვებსაიტი 3D ვიზუალიზატორით',
      en: 'Premium awnings website with a 3D visualizer',
    },
    description: {
      ka: 'Alasi.ge-სთვის შექმნილი სწრაფი პროდუქტის ვებსაიტი ინტერაქტიული ჩარდახის პრევიუთი.',
      en: 'Fast product website for Alasi.ge with an interactive awning preview.',
    },
    longDescription: {
      ka: 'Alasi აჩვენებს პროდუქტის ფერს, ფორმას და გამოყენებას ერთ ვიზუალურად ძლიერ გვერდზე. საიტში ჩაშენებულია 3D პრევიუ, კატეგორიები და სწრაფი საკონტაქტო გზა.',
      en: 'Alasi presents product colors, form, and use cases on a strong visual page. The site includes a 3D preview, product sections, and a fast contact path.',
    },
    category: 'business',
    categoryLabel: { ka: 'ბიზნესი', en: 'Business' },
    year: '2025',
    client: 'Alasi',
    role: { ka: 'დიზაინი + დეველოპმენტი', en: 'Design + Development' },
    images: ['/images/portfolio-new/alasi.png'],
    cover: '/images/portfolio-new/alasi.png',
    technologies: ['Next.js', 'TypeScript', 'Model Viewer', 'CSS'],
    features: {
      ka: ['3D ვიზუალიზატორი', 'პროდუქტის ფერები', 'ქართული კონტენტი', 'სწრაფი კონტაქტი'],
      en: ['3D visualizer', 'Product colors', 'Georgian content', 'Fast contact'],
    },
    highlights: {
      ka: ['ინტერაქტიული პროდუქტი', 'პრემიუმ ვიზუალი', 'alasi.ge დომენი'],
      en: ['Interactive product', 'Premium visuals', 'alasi.ge domain'],
    },
    liveUrl: 'https://alasi.ge',
    accent: 'from-orange-500 to-amber-900',
  },
  {
    id: 16,
    slug: 'comfort-building',
    title: { ka: 'Comfort Building', en: 'Comfort Building' },
    tagline: {
      ka: 'არქიტექტურული დეველოპმენტის პრეზენტაციის ვებსაიტი',
      en: 'Architecture development presentation website',
    },
    description: {
      ka: 'ბუტიკური სამშენებლო კომპანიისთვის შექმნილი ვიზუალური ვებსაიტი.',
      en: 'Visual website for a boutique building and development company.',
    },
    longDescription: {
      ka: 'Comfort Building-ის ვებსაიტი ფოკუსირებულია ნდობაზე, პროექტის ვიზუალზე და სწრაფ კონტაქტზე. მოძრაობები და სქროლის გამოცდილება საიტს პრემიუმ სამშენებლო ბრენდის შეგრძნებას აძლევს.',
      en: 'The Comfort Building website focuses on trust, project visuals, and fast contact. Motion and scrolling details give the site a premium construction brand feel.',
    },
    category: 'construction',
    categoryLabel: { ka: 'მშენებლობა', en: 'Construction' },
    year: '2025',
    client: 'Comfort Building',
    role: { ka: 'დიზაინი + დეველოპმენტი', en: 'Design + Development' },
    images: ['/images/portfolio-new/building-company.png'],
    cover: '/images/portfolio-new/building-company.png',
    technologies: ['React', 'Vite', 'GSAP', 'Lenis'],
    features: {
      ka: ['პროექტის პრეზენტაცია', 'სქროლის ანიმაცია', 'კონტაქტის ფორმა', 'მობილური დიზაინი'],
      en: ['Project presentation', 'Scroll animation', 'Contact form', 'Mobile design'],
    },
    highlights: {
      ka: ['პრემიუმ არქიტექტურული სტილი', 'სუფთა CTA', 'ანიმირებული გამოცდილება'],
      en: ['Premium architecture style', 'Clear CTA', 'Animated experience'],
    },
    accent: 'from-yellow-500 to-zinc-900',
  },
  {
    id: 17,
    slug: 'buildora-group',
    title: { ka: 'Buildora Group', en: 'Buildora Group' },
    tagline: {
      ka: 'სამშენებლო კომპანიის ორენოვანი ვებსაიტი',
      en: 'Bilingual website for a construction company',
    },
    description: {
      ka: 'Buildora Group-ის ბიზნეს ვებსაიტი WhatsApp და Telegram კონტაქტით.',
      en: 'Business website for Buildora Group with WhatsApp and Telegram contact paths.',
    },
    longDescription: {
      ka: 'Buildora Group აერთიანებს კომპანიის პოზიციონირებას, მომსახურებებსა და სწრაფ საკონტაქტო ღილაკებს ერთ მკაფიო ლენდინგში, რომელიც ქართულ და რუსულ აუდიტორიას ემსახურება.',
      en: 'Buildora Group combines company positioning, services, and quick contact buttons into a clear landing page for Georgian and Russian-speaking audiences.',
    },
    category: 'construction',
    categoryLabel: { ka: 'მშენებლობა', en: 'Construction' },
    year: '2025',
    client: 'Buildora Group',
    role: { ka: 'დიზაინი + დეველოპმენტი', en: 'Design + Development' },
    images: ['/images/portfolio-new/buildora-group.png'],
    cover: '/images/portfolio-new/buildora-group.png',
    technologies: ['Vite', 'JavaScript', 'CSS', 'i18n'],
    features: {
      ka: ['ორენოვანი კონტენტი', 'WhatsApp CTA', 'Telegram CTA', 'სერვისების სექციები'],
      en: ['Bilingual content', 'WhatsApp CTA', 'Telegram CTA', 'Service sections'],
    },
    highlights: {
      ka: ['სწრაფი საკონტაქტო გზა', 'სამშენებლო ბრენდინგი', 'buildora-group.ge დომენი'],
      en: ['Fast contact path', 'Construction branding', 'buildora-group.ge domain'],
    },
    liveUrl: 'https://buildora-group.ge',
    accent: 'from-sky-500 to-slate-900',
  },
  {
    id: 18,
    slug: 'geocanal',
    title: { ka: 'GeoCanal', en: 'GeoCanal' },
    tagline: {
      ka: 'საკანალიზაციო მილების გაწმენდის სერვისის ვებსაიტი',
      en: 'Drain and sewer cleaning service website',
    },
    description: {
      ka: 'GeoCanal.ge-სთვის შექმნილი სერვისის ვებსაიტი სწრაფი ზარისა და WhatsApp კონტაქტით.',
      en: 'Service website for GeoCanal.ge with direct phone and WhatsApp conversion paths.',
    },
    longDescription: {
      ka: 'GeoCanal-ის ვებსაიტი აგებულია მკაფიო სერვისულ შეთავაზებაზე: 24/7 დახმარება, გარანტირებული სამუშაო, სწრაფი კონტაქტი და ნდობის სიგნალები პირველივე ეკრანზე.',
      en: 'The GeoCanal website is built around a clear service offer: 24/7 support, guaranteed work, fast contact, and trust signals in the first viewport.',
    },
    category: 'business',
    categoryLabel: { ka: 'სერვისი', en: 'Service' },
    year: '2026',
    client: 'GeoCanal',
    role: { ka: 'დიზაინი + დეველოპმენტი', en: 'Design + Development' },
    images: ['/images/portfolio-new/geocanal.png'],
    cover: '/images/portfolio-new/geocanal.png',
    technologies: ['Next.js', 'React', 'Responsive UI', 'i18n'],
    features: {
      ka: ['24/7 სერვისის CTA', 'WhatsApp კონტაქტი', 'ორენოვანი ინტერფეისი', 'სერვისების სტრუქტურა'],
      en: ['24/7 service CTA', 'WhatsApp contact', 'Bilingual interface', 'Service structure'],
    },
    highlights: {
      ka: ['სწრაფი ზარის გზა', 'მკაფიო სერვისული შეთავაზება', 'geocanal.ge დომენი'],
      en: ['Fast call path', 'Clear service offer', 'geocanal.ge domain'],
    },
    liveUrl: 'https://geocanal.ge/',
    accent: 'from-blue-500 to-orange-500',
  },
  {
    id: 19,
    slug: 'ndmedsphere',
    title: { ka: 'NdMedSphere', en: 'NdMedSphere' },
    tagline: {
      ka: 'ექიმის პორტფოლიო და სამედიცინო მედია ბიბლიოთეკა',
      en: 'Doctor portfolio and medical media library',
    },
    description: {
      ka: 'Dr. David Rekhviashvili-სთვის შექმნილი სამედიცინო პორტფოლიო რესურსებით, სერვისებითა და კონტაქტით.',
      en: 'Medical portfolio for Dr. David Rekhviashvili with resources, services, and contact paths.',
    },
    longDescription: {
      ka: 'NdMedSphere აერთიანებს ექიმის პროფესიულ პრეზენტაციას, რესურსების ბიბლიოთეკას, პროცედურებს, პაციენტების განათლებას და კონტაქტის გზებს სუფთა, სანდო ინტერფეისში.',
      en: 'NdMedSphere combines a doctor profile, resource library, procedures, patient education, and contact paths in a clean, trustworthy interface.',
    },
    category: 'business',
    categoryLabel: { ka: 'სამედიცინო', en: 'Medical' },
    year: '2026',
    client: 'NdMedSphere',
    role: { ka: 'დიზაინი + დეველოპმენტი', en: 'Design + Development' },
    images: ['/images/portfolio-new/ndmedsphere.png'],
    cover: '/images/portfolio-new/ndmedsphere.png',
    technologies: ['Next.js', 'React', 'Resource Library', 'i18n'],
    features: {
      ka: ['ექიმის პორტფოლიო', 'მედია ბიბლიოთეკა', 'რესურსების მენიუ', 'კონტაქტის გვერდი'],
      en: ['Doctor portfolio', 'Media library', 'Resource navigation', 'Contact page'],
    },
    highlights: {
      ka: ['სანდო სამედიცინო UX', 'ორგანიზებული კონტენტი', 'ndmedsphere.com დომენი'],
      en: ['Trust-focused medical UX', 'Organized content', 'ndmedsphere.com domain'],
    },
    liveUrl: 'https://www.ndmedsphere.com/',
    accent: 'from-blue-500 to-slate-700',
  },
  {
    id: 1,
    slug: 'andcook',
    title: { ka: 'AndCook', en: 'AndCook' },
    tagline: {
      ka: 'რეცეპტების მობილური აპლიკაცია',
      en: 'Recipe sharing mobile app',
    },
    description: {
      ka: 'თანამედროვე მობილური აპლიკაცია კულინარიული რეცეპტების აღმოსაჩენად და გაზიარებისთვის.',
      en: 'Modern mobile app for discovering and sharing culinary recipes.',
    },
    longDescription: {
      ka: 'AndCook აერთიანებს რეცეპტების მონაცემთა ბაზას, ჭკვიან ძიებას და სოციალურ ფუნქციებს ერთ მარტივ ინტერფეისში. მუშაობს ოფლაინ რეჟიმშიც.',
      en: 'AndCook combines a recipe database, smart search, and social features in a clean interface. Works offline too.',
    },
    category: 'mobile',
    categoryLabel: { ka: 'მობილური აპლიკაცია', en: 'Mobile App' },
    year: '2024',
    role: { ka: 'დიზაინი + დეველოპმენტი', en: 'Design + Development' },
    images: ['/images/AndCook.jpg', '/images/AndCook2.jpg'],
    cover: '/images/AndCook.jpg',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    features: {
      ka: ['რეცეპტების ბაზა', 'ძიების ფუნქცია', 'სოციალური ფუნქციები', 'ოფლაინ რეჟიმი'],
      en: ['Recipe Database', 'Search Function', 'Social Features', 'Offline Mode'],
    },
    highlights: {
      ka: ['ოფლაინ მუშაობა', 'სოციალური დაკავშირება'],
      en: ['Works offline', 'Social discovery'],
    },
    liveUrl: 'https://andcook.vercel.app',
    accent: 'from-rose-500 to-pink-600',
  },
  {
    id: 2,
    slug: 'andscore',
    title: { ka: 'AndScore', en: 'AndScore' },
    tagline: {
      ka: 'სპორტული ლაივ სქორების აპლიკაცია',
      en: 'Live sports scores app',
    },
    description: {
      ka: 'ფუნქციური სპორტული აპლიკაცია ლაივ სქორების და სტატისტიკის თვალთვალისთვის.',
      en: 'Functional sports app for live scores and statistics tracking.',
    },
    longDescription: {
      ka: 'AndScore ერთ აპლიკაციაში აერთიანებს ლაივ შედეგებს, სტატისტიკას, შეტყობინებებსა და მომხმარებლის ფავორიტებს. იდეალურია გულშემატკივარისთვის.',
      en: 'AndScore unifies live results, statistics, notifications, and personalized favorites — perfect for fans who follow multiple sports.',
    },
    category: 'mobile',
    categoryLabel: { ka: 'მობილური აპლიკაცია', en: 'Mobile App' },
    year: '2024',
    role: { ka: 'დიზაინი + დეველოპმენტი', en: 'Design + Development' },
    images: ['/images/AndScore.jpg', '/images/AndScore2.jpg'],
    cover: '/images/AndScore.jpg',
    technologies: ['React Native', 'REST API', 'Redux'],
    features: {
      ka: ['ლაივ სქორები', 'სტატისტიკა', 'შეტყობინებები', 'ფავორიტების სისტემა'],
      en: ['Live Scores', 'Statistics', 'Notifications', 'Favorites System'],
    },
    highlights: {
      ka: ['Push შეტყობინებები', 'მრავალ-სპორტიანი მხარდაჭერა'],
      en: ['Push notifications', 'Multi-sport support'],
    },
    liveUrl: 'https://andscore.site',
    accent: 'from-sky-500 to-blue-600',
  },
  {
    id: 3,
    slug: 'andcode',
    title: { ka: 'AndCode', en: 'AndCode' },
    tagline: {
      ka: 'საგანმანათლებო პლატფორმა პროგრამისტებისთვის',
      en: 'Educational platform for programmers',
    },
    description: {
      ka: 'ინტერაქტიული საგანმანათლებო პლატფორმა პროგრამირების შესასწავლად.',
      en: 'Interactive educational platform for learning programming.',
    },
    longDescription: {
      ka: 'AndCode გთავაზობთ ვიდეო გაკვეთილებს, ჩაშენებულ კოდის რედაქტორს, ტესტებსა და სერტიფიკატებს. გვერდი დახვეწილია, რათა სწავლის პროცესი იყოს მკაფიო და მოტივირებული.',
      en: 'AndCode offers video lessons, an embedded code editor, tests, and certificates — designed to keep the learning loop clear and motivating.',
    },
    category: 'education',
    categoryLabel: { ka: 'საგანმანათლებო', en: 'Education' },
    year: '2024',
    role: { ka: 'დიზაინი + დეველოპმენტი', en: 'Design + Development' },
    images: ['/images/andcode.jpg', '/images/andcode2.jpg'],
    cover: '/images/andcode.jpg',
    technologies: ['Next.js', 'TypeScript', 'MongoDB'],
    features: {
      ka: ['ვიდეო გაკვეთილები', 'კოდის რედაქტორი', 'ტესტები', 'სერტიფიკატები'],
      en: ['Video Lessons', 'Code Editor', 'Tests', 'Certificates'],
    },
    highlights: {
      ka: ['ჩაშენებული IDE', 'სერტიფიკატის გაცემა'],
      en: ['Embedded IDE', 'Certification flow'],
    },
    liveUrl: 'https://andcode.vercel.app',
    accent: 'from-violet-500 to-purple-600',
  },
  {
    id: 4,
    slug: 'andwatch',
    title: { ka: 'AndWatch', en: 'AndWatch' },
    tagline: {
      ka: 'ფილმების, სერიალების და ანიმეების ტრეკინგი',
      en: 'Movies, series & anime tracker',
    },
    description: {
      ka: 'ფილმების, სერიალების, ანიმაციური ფილმებისა და ანიმეების ტრეკინგი API-ით.',
      en: 'Movies, series, animated films and anime tracking with API.',
    },
    longDescription: {
      ka: 'AndWatch აერთიანებს TMDB-სა და MyAnimeList API-ებს ერთ ინტერფეისში, რომელიც აადვილებს ფილმებისა და ანიმეების ნახვის ჟურნალის წარმოებას, შეფასებასა და გაზიარებას.',
      en: 'AndWatch combines TMDB and MyAnimeList APIs into a single interface for tracking, rating, and sharing what you watch.',
    },
    category: 'mobile',
    categoryLabel: { ka: 'მობილური აპლიკაცია', en: 'Mobile App' },
    year: '2024',
    role: { ka: 'დიზაინი + დეველოპმენტი', en: 'Design + Development' },
    images: ['/images/andwatch.jpg', '/images/Andwatch2.jpg'],
    cover: '/images/andwatch.jpg',
    technologies: ['React & Next.js', 'TMDB, MyAnimeList API', 'MongoDB'],
    features: {
      ka: ['ტრეკინგი', 'შეფასება', 'პროფილში შენახვა', 'ინფორმაციის გაგება'],
      en: ['Tracking', 'Rating', 'Profile Saving', 'Information Access'],
    },
    highlights: {
      ka: ['ორი API-ის ინტეგრაცია', 'პერსონალური ჟურნალი'],
      en: ['Dual API integration', 'Personal log'],
    },
    liveUrl: 'https://andwatch.vercel.app',
    accent: 'from-indigo-500 to-blue-700',
  },
  {
    id: 5,
    slug: 'typingy',
    title: { ka: 'TypingY', en: 'TypingY' },
    tagline: {
      ka: 'ბეჭდვის სისწრაფის ვებ აპლიკაცია',
      en: 'Typing speed web app',
    },
    description: {
      ka: 'საგანმანათლებო ვებ აპლიკაცია ბეჭდვის სისწრაფისა და სიზუსტის გასაუმჯობესებლად.',
      en: 'Educational web app for improving typing speed and accuracy.',
    },
    longDescription: {
      ka: 'TypingY არის სუფთა და სწრაფი ვებ-აპლიკაცია, რომელიც გაძლევთ MonkeyType-ის სტილის სავარჯიშოებს, სტატისტიკას, რეიტინგსა და მრავალენოვან მხარდაჭერას.',
      en: 'TypingY is a clean, fast web app offering MonkeyType-style drills, statistics, leaderboards, and multilingual support.',
    },
    category: 'education',
    categoryLabel: { ka: 'საგანმანათლებო', en: 'Education' },
    year: '2024',
    role: { ka: 'დიზაინი + დეველოპმენტი', en: 'Design + Development' },
    images: ['/images/TypingY.png'],
    cover: '/images/TypingY.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    features: {
      ka: ['სავარჯიშოები', 'სტატისტიკა', 'რეიტინგი', 'მრავალენოვანი'],
      en: ['Exercises', 'Statistics', 'Leaderboard', 'Multilingual'],
    },
    highlights: {
      ka: ['ლაივ რეიტინგი', 'მრავალენოვანი'],
      en: ['Live leaderboard', 'Multilingual'],
    },
    liveUrl: 'https://typingy.live',
    accent: 'from-fuchsia-500 to-pink-600',
  },
  {
    id: 7,
    slug: 'restaurant-elegant',
    title: { ka: 'Restaurant', en: 'Restaurant' },
    tagline: {
      ka: 'ელეგანტური რესტორნის ვებსაიტი',
      en: 'Elegant restaurant website',
    },
    description: {
      ka: 'ელეგანტური ვებსაიტი რესტორნისთვის თანამედროვე დიზაინით და ფუნქციონალით.',
      en: 'Elegant restaurant website with modern design and functionality.',
    },
    longDescription: {
      ka: 'რესტორნის ვებსაიტი, რომელიც აერთიანებს მენიუს გალერეას, დაჯავშნის სისტემასა და ფოტო გალერეას — სრულად რესპონსიული.',
      en: 'A restaurant site that pairs a menu gallery with a reservation flow and a polished photo gallery — fully responsive.',
    },
    category: 'restaurant',
    categoryLabel: { ka: 'რესტორანი', en: 'Restaurant' },
    year: '2024',
    role: { ka: 'დიზაინი + დეველოპმენტი', en: 'Design + Development' },
    images: ['/images/Restauran1.jpg', '/images/Restauran2.jpg'],
    cover: '/images/Restauran1.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    features: {
      ka: ['მენიუს გალერეა', 'დაჯავშნის სისტემა', 'რესპონსიული დიზაინი', 'ფოტო გალერეა'],
      en: ['Menu Gallery', 'Reservation System', 'Responsive Design', 'Photo Gallery'],
    },
    highlights: {
      ka: ['დაჯავშნის ფლოუ', 'ფოტო-მძიმე ვიზუალი'],
      en: ['Reservation flow', 'Photo-heavy visuals'],
    },
    accent: 'from-stone-600 to-zinc-800',
  },
  {
    id: 8,
    slug: 'fib-unit',
    title: { ka: 'FIB Unit', en: 'FIB Unit' },
    tagline: {
      ka: 'GTA 5 RP სერვერის ვებსაიტი',
      en: 'GTA 5 RP server website',
    },
    description: {
      ka: 'ვებსაიტი GTA 5 Roleplay სერვერისთვის - რეკრუტმენტის და ინფორმაციის სისტემით.',
      en: 'Website for GTA 5 Roleplay server - with recruitment and info system.',
    },
    longDescription: {
      ka: 'FIB Unit არის სრულფასოვანი ვებსაიტი GTA 5 RP თემატიკის სერვერისთვის — სერვერის შესახებ ინფორმაცია, რეკრუტმენტი, წესები და Discord-ის ინტეგრაცია.',
      en: 'FIB Unit is a full website for a GTA 5 RP server — server info, recruitment, rules, and Discord integration.',
    },
    category: 'gaming',
    categoryLabel: { ka: 'თამაშები', en: 'Gaming' },
    year: '2024',
    role: { ka: 'დიზაინი + დეველოპმენტი', en: 'Design + Development' },
    images: ['/images/FIB.jpg', '/images/FIB2.jpg'],
    cover: '/images/FIB.jpg',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Discord Integration'],
    features: {
      ka: ['სერვერის ინფორმაცია', 'რეკრუტმენტის სისტემა', 'Discord ინტეგრაცია', 'თამაშის წესები'],
      en: ['Server Info', 'Recruitment System', 'Discord Integration', 'Game Rules'],
    },
    highlights: {
      ka: ['Discord კავშირი', 'რეკრუტმენტის ფლოუ'],
      en: ['Discord link', 'Recruitment flow'],
    },
    liveUrl: 'https://fib-unit-rp.vercel.app',
    accent: 'from-slate-700 to-gray-900',
  },
  {
    id: 9,
    slug: 'casedelight',
    title: { ka: 'CaseDelight', en: 'CaseDelight' },
    tagline: {
      ka: 'მოდერნ თემატიკის რესტორანი',
      en: 'Modern-themed restaurant',
    },
    description: {
      ka: 'თანამედროვე რესტორნის ვებსაიტი.',
      en: 'Modern restaurant website.',
    },
    longDescription: {
      ka: 'CaseDelight-ის ვებსაიტი ხაზს უსვამს ბრენდის ვიზუალურ ენას, რესტორნის მენიუსა და ფოტო-კონტენტს. სრულად მობილურზე ოპტიმიზებული.',
      en: 'The CaseDelight site highlights the brand’s visual language, menu, and rich photo content. Fully optimized for mobile.',
    },
    category: 'restaurant',
    categoryLabel: { ka: 'რესტორანი', en: 'Restaurant' },
    year: '2024',
    role: { ka: 'დიზაინი + დეველოპმენტი', en: 'Design + Development' },
    images: [
      '/images/casedelight.jpg',
      '/images/casedelight2.jpg',
      '/images/casedelight3.jpg',
      '/images/casedelight4.jpg',
      '/images/casedelight5.jpg',
    ],
    cover: '/images/casedelight.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    features: {
      ka: ['პროდუქტების კატალოგი', 'მობილურზე ოპტიმიზაცია', 'სწრაფი ჩატვირთვა'],
      en: ['Product Catalog', 'Mobile Optimized', 'Fast Loading'],
    },
    highlights: {
      ka: ['ფოტო-მძიმე ბრენდინგი', 'სწრაფი ჩატვირთვა'],
      en: ['Photo-rich branding', 'Fast loading'],
    },
    accent: 'from-orange-500 to-red-600',
  },
  {
    id: 10,
    slug: 'demo-ecommerce-tech',
    title: { ka: 'Demo Ecommerce', en: 'Demo Ecommerce' },
    tagline: {
      ka: 'ტექნიკის მაღაზიის E-commerce პლატფორმა',
      en: 'Tech store e-commerce platform',
    },
    description: {
      ka: 'თანამედროვე E-commerce პლატფორმა ტექნიკის მაღაზიისთვის.',
      en: 'Modern E-commerce platform for tech store.',
    },
    longDescription: {
      ka: 'სრულფასოვანი ტექნიკის მაღაზიის ვებსაიტი — პროდუქტების კატალოგი, ფილტრები, კალათა და მობილური ოპტიმიზაცია.',
      en: 'A complete tech store demo — product catalog, filters, cart, and mobile-first layout.',
    },
    category: 'ecommerce',
    categoryLabel: { ka: 'E-Commerce', en: 'E-Commerce' },
    year: '2024',
    role: { ka: 'დიზაინი + დეველოპმენტი', en: 'Design + Development' },
    images: ['/images/ecom1.png', '/images/ecom2.png', '/images/ecom3.png'],
    cover: '/images/ecom1.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    features: {
      ka: ['პროდუქტების კატალოგი', 'მობილურზე ოპტიმიზაცია', 'სწრაფი ჩატვირთვა'],
      en: ['Product Catalog', 'Mobile Optimized', 'Fast Loading'],
    },
    highlights: {
      ka: ['სუფთა კატალოგი', 'სწრაფი UX'],
      en: ['Clean catalog', 'Fast UX'],
    },
    liveUrl: 'https://ecomm-flax-ten.vercel.app/',
    accent: 'from-cyan-500 to-blue-600',
  },
]

export const projectSlugs = projects.map((p) => p.slug)

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug)

export const getRelatedProjects = (slug: string, limit = 3): Project[] => {
  const current = getProjectBySlug(slug)
  if (!current) return []
  const sameCategory = projects.filter(
    (p) => p.slug !== slug && p.category === current.category
  )
  const others = projects.filter(
    (p) => p.slug !== slug && p.category !== current.category
  )
  return [...sameCategory, ...others].slice(0, limit)
}
