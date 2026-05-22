'use client'

import Link from 'next/link'
import Image from 'next/image'
import PageTransition from '@/components/PageTransition'
import { FaCalendar, FaArrowRight } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

// Sample blog data (In a real app, this would come from a CMS or MDX files)
const posts = [
    {
        slug: 'ratom-mchirdeba-website',
        title: {
            ka: 'რატომ სჭირდება ყველა ბიზნესს ვებსაიტი 2025 წელს?',
            en: 'Why Every Business Needs a Website in 2025?'
        },
        excerpt: {
            ka: 'ციფრულ ეპოქაში ვებსაიტი აღარ არის ფუფუნება, ეს აუცილებლობაა. გაიგეთ 5 მიზეზი, თუ რატომ კარგავთ კლიენტებს საიტის გარეშე.',
            en: 'In the digital age, a website is no longer a luxury, it\'s a necessity. Learn 5 reasons why you\'re losing clients without a website.'
        },
        date: {
            ka: '3 ნოემბერი, 2025',
            en: 'November 3, 2025'
        },
        author: 'PixelWeb Team',
        image: '/images/Furniture1.jpg',
        category: {
            ka: 'ბიზნესი',
            en: 'Business'
        }
    },
    {
        slug: 'ra-ghirs-saitis-damzadeba',
        title: {
            ka: 'რა ღირს საიტის დამზადება საქართველოში?',
            en: 'How Much Does Website Development Cost in Georgia?'
        },
        excerpt: {
            ka: 'ფასები, ვადები და ხარისხი. დეტალური გზამკვლევი ვებსაიტის ფასწარმოქმნის შესახებ.',
            en: 'Prices, timelines, and quality. A detailed guide to website pricing.'
        },
        date: {
            ka: '8 ნოემბერი, 2025',
            en: 'November 8, 2025'
        },
        author: 'PixelWeb Team',
        image: '/images/ecom1.png',
        category: {
            ka: 'ფასები',
            en: 'Pricing'
        }
    },
    {
        slug: 'wordpress-vs-custom-code',
        title: {
            ka: 'WordPress თუ Custom Code — რომელი ჯობია ქართული ბიზნესისთვის?',
            en: 'WordPress vs Custom Code — Which Is Better for Georgian Businesses?'
        },
        excerpt: {
            ka: 'შევადაროთ ფასი, სიჩქარე, SEO და მოქნილობა. რა შემთხვევაში გჯობს WordPress და როდის Next.js?',
            en: 'Comparing price, speed, SEO, and flexibility. When to choose WordPress and when Next.js?'
        },
        date: {
            ka: '15 დეკემბერი, 2025',
            en: 'December 15, 2025'
        },
        author: 'PixelWeb Team',
        image: '/images/andcode.jpg',
        category: {
            ka: 'ტექნოლოგია',
            en: 'Technology'
        }
    },
    {
        slug: 'seo-safudzvlebi-qartuli-biznesisthvis',
        title: {
            ka: 'SEO საფუძვლები ქართული ბიზნესისთვის 2026 წელს',
            en: 'SEO Basics for Georgian Businesses in 2026'
        },
        excerpt: {
            ka: 'როგორ მოახდინოთ თქვენი საიტი Google-ის პირველ გვერდზე ქართულ ბაზარზე. 7 პრაქტიკული ნაბიჯი.',
            en: 'How to get your site on the first Google page in the Georgian market. 7 practical steps.'
        },
        date: {
            ka: '5 იანვარი, 2026',
            en: 'January 5, 2026'
        },
        author: 'PixelWeb Team',
        image: '/images/TypingY.png',
        category: {
            ka: 'SEO',
            en: 'SEO'
        }
    },
    {
        slug: 'restornisthvis-saiti-ra-unda-hkondes',
        title: {
            ka: 'რესტორნისთვის საიტი — რა უნდა ჰქონდეს აუცილებლად?',
            en: 'A Restaurant Website — What Must It Have?'
        },
        excerpt: {
            ka: 'მენიუ, ჯავშანი, Google Maps და ფოტოები. რესტორნის საიტის სრული გზამკვლევი.',
            en: 'Menu, reservations, Google Maps, and photos. A complete guide to restaurant websites.'
        },
        date: {
            ka: '20 თებერვალი, 2026',
            en: 'February 20, 2026'
        },
        author: 'PixelWeb Team',
        image: '/images/Restauran1.jpg',
        category: {
            ka: 'რესტორნები',
            en: 'Restaurants'
        }
    },
    {
        slug: 'landing-page-tu-biznes-saiti',
        title: {
            ka: 'Landing Page თუ ბიზნეს საიტი — რომელი აირჩიოთ?',
            en: 'Landing Page or Business Website — Which to Choose?'
        },
        excerpt: {
            ka: 'ხშირი დილემა. ვუხსნით განსხვავებას ფასში, სტრუქტურასა და გამოყენებაში.',
            en: 'A common dilemma. We explain the difference in price, structure, and usage.'
        },
        date: {
            ka: '12 მარტი, 2026',
            en: 'March 12, 2026'
        },
        author: 'PixelWeb Team',
        image: '/images/Furniture2.jpg',
        category: {
            ka: 'სტრატეგია',
            en: 'Strategy'
        }
    },
    {
        slug: 'saiti-mcire-biznesisthvis-5-nabiji',
        title: {
            ka: 'საიტი მცირე ბიზნესისთვის — 5 აუცილებელი ნაბიჯი',
            en: 'A Small Business Website — 5 Essential Steps'
        },
        excerpt: {
            ka: 'რა გჭირდებათ მცირე ბიზნესის საიტისთვის და როგორ დაიწყოთ მინიმალური ბიუჯეტით.',
            en: 'What you need for a small business website and how to start on a minimal budget.'
        },
        date: {
            ka: '5 აპრილი, 2026',
            en: 'April 5, 2026'
        },
        author: 'PixelWeb Team',
        image: '/images/casedelight.jpg',
        category: {
            ka: 'მცირე ბიზნესი',
            en: 'Small Business'
        }
    }
]

const ClientBlog = () => {
    const { language, t } = useLanguage()

    return (
        <PageTransition>
            <div className="min-h-screen pt-20 pb-20 bg-gray-50 dark:bg-gray-900">
                {/* Header */}
                <section className="bg-gradient-to-br from-primary-600 to-primary-700 dark:from-gray-950 dark:to-gray-900 text-white py-12 sm:py-16 md:py-20 relative overflow-hidden mb-12">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.blog.hero.title}</h1>
                        <p className="text-xl text-primary-100 dark:text-gray-300 max-w-2xl mx-auto">
                            {t.blog.hero.subtitle}
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <article key={post.slug} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow flex flex-col h-full">
                                <div className="h-48 relative overflow-hidden group">
                                    <Image
                                        src={post.image}
                                        alt={post.title[language]}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
                                        <span className="flex items-center"><FaCalendar className="mr-2" /> {post.date[language]}</span>
                                        <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-2 py-0.5 rounded text-xs font-semibold uppercase">{post.category[language]}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title[language]}
                                        </Link>
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 line-clamp-3">
                                        {post.excerpt[language]}
                                    </p>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors mt-auto"
                                    >
                                        {t.blog.readMore} <FaArrowRight className="ml-2 text-sm" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}

export default ClientBlog
