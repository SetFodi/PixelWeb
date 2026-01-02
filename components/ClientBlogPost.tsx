'use client'

import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import PageTransition from '@/components/PageTransition'
import { FaCalendar, FaUser, FaArrowLeft } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

// Blog posts with multilingual content
const posts: Record<string, {
    title: { ka: string; en: string }
    image: string
    content: { ka: string; en: string }
    date: { ka: string; en: string }
    author: string
    keywords: string
}> = {
    'ratom-mchirdeba-website': {
        title: {
            ka: 'რატომ სჭირდება ყველა ბიზნესს ვებსაიტი 2025 წელს?',
            en: 'Why Does Every Business Need a Website in 2025?'
        },
        image: '/images/Furniture1.jpg',
        content: {
            ka: `
        <p>ციფრულ ეპოქაში ვებსაიტი აღარ არის ფუფუნება, ეს აუცილებლობაა. 2025 წელს, თუ თქვენ გაქვთ ბიზნესი და არ გაქვთ ვებსაიტი, თქვენ კარგავთ დიდ შესაძლებლობებს. აი 5 მიზეზი, თუ რატომ არის საიტის დამზადება კრიტიკულად მნიშვნელოვანი:</p>
        
        <h3>1. სანდოობა (Credibility)</h3>
        <p>მომხმარებლების 84% ფიქრობს, რომ ბიზნესი, რომელსაც აქვს ვებსაიტი, უფრო სანდოა, ვიდრე ის, რომელსაც მხოლოდ Facebook გვერდი აქვს. ვებსაიტი არის თქვენი ციფრული ოფისი, რომელიც მუშაობს 24/7.</p>

        <h3>2. ორგანული ტრაფიკი (SEO)</h3>
        <p>როდესაც თქვენი საიტი SEO ოპტიმიზირებულია, ის ჩნდება Google-ის ძიებაში. ეს ნიშნავს უფასო, მუდმივ კლიენტებს. წარმოიდგინეთ, რომ ვიღაც ეძებს "საუკეთესო რესტორანი თბილისში" და თქვენი საიტი პირველ ადგილზეა. ეს არის SEO-ს ძალა.</p>

        <h3>3. დროის დაზოგვა</h3>
        <p>თქვენი საიტი პასუხობს მომხმარებლის კითხვებს თქვენს მაგივრად. რა ღირს? სად ხართ? რას საქმიანობთ? ეს ყველაფერი საიტზეა, რაც ზოგავს თქვენს დროს.</p>

        <h3>4. კონკურენტული უპირატესობა</h3>
        <p>თუ თქვენს კონკურენტებს არ აქვთ კარგი საიტი, ეს თქვენი შანსია. ხარისხიანი ვებსაიტი გამოგარჩევთ ბაზარზე.</p>

        <h3>5. მარკეტინგი და ანალიტიკა</h3>
        <p>საიტზე შეგიძლიათ დააყენოთ Google Analytics და Facebook Pixel. ეს გაძლევთ საშუალებას ზუსტად იცოდეთ, ვინ არიან თქვენი მომხმარებლები და რა აინტერესებთ მათ.</p>

        <p><strong>დასკვნა:</strong> საიტის დამზადება არის ინვესტიცია, რომელიც აუცილებლად ამოიღებს ხარჯებს.</p>
      `,
            en: `
        <p>In the digital age, a website is no longer a luxury - it's a necessity. In 2025, if you have a business without a website, you're missing out on huge opportunities. Here are 5 reasons why having a website is critically important:</p>
        
        <h3>1. Credibility</h3>
        <p>84% of consumers believe that a business with a website is more credible than one with only a Facebook page. A website is your digital office that works 24/7.</p>

        <h3>2. Organic Traffic (SEO)</h3>
        <p>When your website is SEO optimized, it appears in Google search results. This means free, consistent customers. Imagine someone searching for "best restaurant in Tbilisi" and your site is at the top. That's the power of SEO.</p>

        <h3>3. Time Savings</h3>
        <p>Your website answers customer questions on your behalf. What's the price? Where are you located? What do you do? All of this is on the site, saving you time.</p>

        <h3>4. Competitive Advantage</h3>
        <p>If your competitors don't have a good website, this is your chance. A quality website will set you apart in the market.</p>

        <h3>5. Marketing and Analytics</h3>
        <p>You can install Google Analytics and Facebook Pixel on your site. This allows you to know exactly who your customers are and what interests them.</p>

        <p><strong>Conclusion:</strong> Building a website is an investment that will definitely pay off.</p>
      `
        },
        date: { ka: '3 ნოემბერი, 2025', en: 'November 3, 2025' },
        author: 'PixelWeb Team',
        keywords: 'რატომ მჭირდება საიტი, ბიზნეს ვებსაიტი, საიტის დამზადების მნიშვნელობა'
    },
    'ra-ghirs-saitis-damzadeba': {
        title: {
            ka: 'რა ღირს საიტის დამზადება საქართველოში? (2025 წლის ფასები)',
            en: 'How Much Does Website Development Cost in Georgia? (2025 Prices)'
        },
        image: '/images/ecom1.png',
        content: {
            ka: `
        <p>ერთ-ერთი ყველაზე ხშირი კითხვაა: "რა ღირს საიტი?". 2025 წელს პასუხი დამოკიდებულია იმაზე, თუ რა გჭირდებათ. მოდით განვიხილოთ დეტალურად.</p>
        
        <h3>1. Landing Page (ერთგვერდიანი საიტი)</h3>
        <p><strong>ფასი:</strong> 400₾ - 800₾</p>
        <p>ეს არის მარტივი საიტი, რომლის მიზანია ერთი კონკრეტული მოქმედების შესრულება (მაგ: პროდუქტის ყიდვა, რეგისტრაცია). იდეალურია სარეკლამო კამპანიებისთვის.</p>

        <h3>2. სავიზიტო / კორპორატიული საიტი</h3>
        <p><strong>ფასი:</strong> 1000₾ - 2500₾</p>
        <p>მოიცავს 5-10 გვერდს (მთავარი, ჩვენ შესახებ, სერვისები, ბლოგი, კონტაქტი). სჭირდება ადმინ პანელი და SEO ოპტიმიზაცია.</p>

        <h3>3. E-commerce (ინტერნეტ მაღაზია)</h3>
        <p><strong>ფასი:</strong> 3000₾ - 5000₾+</p>
        <p>ეს არის რთული სისტემა გადახდებით, კალათით, პროდუქტების მართვით. ფასი დამოკიდებულია ფუნქციონალის სირთულეზე.</p>

        <h3>რატომ განსხვავდება ფასები?</h3>
        <p>ფასი დამოკიდებულია:</p>
        <ul>
          <li>დიზაინის სირთულეზე (უნიკალური vs შაბლონი)</li>
          <li>ფუნქციონალზე (გადახდები, კალკულატორები)</li>
          <li>ტექნოლოგიებზე (WordPress vs Custom Code)</li>
        </ul>

        <p>PixelWeb-ში ჩვენ გთავაზობთ საუკეთესო ფასისა და ხარისხის შეფარდებას. ჩვენ ვწერთ სუფთა კოდს (Next.js), რაც უზრუნველყოფს საიტის სისწრაფეს და უსაფრთხოებას.</p>
      `,
            en: `
        <p>One of the most common questions is: "How much does a website cost?". In 2025, the answer depends on what you need. Let's discuss in detail.</p>
        
        <h3>1. Landing Page (Single-page website)</h3>
        <p><strong>Price:</strong> 400₾ - 800₾</p>
        <p>This is a simple website aimed at completing one specific action (e.g., buying a product, registration). Ideal for advertising campaigns.</p>

        <h3>2. Business / Corporate Website</h3>
        <p><strong>Price:</strong> 1000₾ - 2500₾</p>
        <p>Includes 5-10 pages (home, about us, services, blog, contact). Requires an admin panel and SEO optimization.</p>

        <h3>3. E-commerce (Online Store)</h3>
        <p><strong>Price:</strong> 3000₾ - 5000₾+</p>
        <p>This is a complex system with payments, cart, and product management. The price depends on the complexity of functionality.</p>

        <h3>Why do prices vary?</h3>
        <p>The price depends on:</p>
        <ul>
          <li>Design complexity (unique vs template)</li>
          <li>Functionality (payments, calculators)</li>
          <li>Technologies (WordPress vs Custom Code)</li>
        </ul>

        <p>At PixelWeb, we offer the best price-to-quality ratio. We write clean code (Next.js), which ensures site speed and security.</p>
      `
        },
        date: { ka: '8 ნოემბერი, 2025', en: 'November 8, 2025' },
        author: 'PixelWeb Team',
        keywords: 'საიტის ფასი, რა ღირს საიტი, ვებსაიტების დამზადების ფასები'
    }
}

interface ClientBlogPostProps {
    slug: string
}

const ClientBlogPost = ({ slug }: ClientBlogPostProps) => {
    const { language, t } = useLanguage()
    const post = posts[slug]

    if (!post) {
        notFound()
    }

    const backText = language === 'ka' ? 'უკან ბლოგზე' : 'Back to Blog'

    return (
        <PageTransition>
            <div className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                    <Link href="/blog" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8">
                        <FaArrowLeft className="mr-2" /> {backText}
                    </Link>

                    <article>
                        <header className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                {post.title[language]}
                            </h1>
                            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm space-x-6 border-b border-gray-100 dark:border-gray-800 pb-8">
                                <span className="flex items-center"><FaCalendar className="mr-2" /> {post.date[language]}</span>
                                <span className="flex items-center"><FaUser className="mr-2" /> {post.author}</span>
                            </div>
                        </header>

                        {/* Featured Image */}
                        <div className="relative w-full h-64 md:h-96 mb-10 rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src={post.image}
                                alt={post.title[language]}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div
                            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary-600 dark:prose-a:text-primary-400"
                            dangerouslySetInnerHTML={{ __html: post.content[language] }}
                        />
                    </article>
                </div>
            </div>
        </PageTransition>
    )
}

export default ClientBlogPost
