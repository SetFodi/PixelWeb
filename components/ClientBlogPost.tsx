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
        <p>თუ გსურთ კონკრეტული ფასის და ვადის გაგება, იხილეთ ჩვენი <a href="/saitis-damzadeba-fasi">საიტის დამზადების ფასები</a> ან მოგვწერეთ კონსულტაციისთვის.</p>
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
        <p>To estimate your budget and timeline, see our <a href="/saitis-damzadeba-fasi">website pricing page</a> or contact us for a consultation.</p>
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
        <p><strong>ფასი:</strong> 600₾ - 1,200₾</p>
        <p>ეს არის მარტივი საიტი, რომლის მიზანია ერთი კონკრეტული მოქმედების შესრულება (მაგ: პროდუქტის ყიდვა, რეგისტრაცია). იდეალურია სარეკლამო კამპანიებისთვის.</p>

        <h3>2. სავიზიტო / კორპორატიული საიტი</h3>
        <p><strong>ფასი:</strong> 1,500₾ - 3,500₾</p>
        <p>მოიცავს 5-10 გვერდს (მთავარი, ჩვენ შესახებ, სერვისები, ბლოგი, კონტაქტი). სჭირდება ადმინ პანელი და SEO ოპტიმიზაცია.</p>

        <h3>3. E-commerce (ინტერნეტ მაღაზია)</h3>
        <p><strong>ფასი:</strong> 4,000₾ - 8,000₾+</p>
        <p>ეს არის რთული სისტემა გადახდებით, კალათით, პროდუქტების მართვით. ფასი დამოკიდებულია ფუნქციონალის სირთულეზე.</p>

        <h3>რატომ განსხვავდება ფასები?</h3>
        <p>ფასი დამოკიდებულია:</p>
        <ul>
          <li>დიზაინის სირთულეზე (უნიკალური vs შაბლონი)</li>
          <li>ფუნქციონალზე (გადახდები, კალკულატორები)</li>
          <li>ტექნოლოგიებზე (WordPress vs Custom Code)</li>
        </ul>

        <p>PixelWeb-ში ჩვენ გთავაზობთ საუკეთესო ფასისა და ხარისხის შეფარდებას. ჩვენ ვწერთ სუფთა კოდს (Next.js), რაც უზრუნველყოფს საიტის სისწრაფეს და უსაფრთხოებას.</p>
        <p>დეტალურად იხილეთ <a href="/saitis-damzadeba">საიტის დამზადების სერვისი</a>, <a href="/landing-page-damzadeba">Landing Page-ის დამზადება</a> ან <a href="/internet-magaziis-damzadeba">ინტერნეტ მაღაზიის დამზადება</a>.</p>
      `,
            en: `
        <p>One of the most common questions is: "How much does a website cost?". In 2025, the answer depends on what you need. Let's discuss in detail.</p>
        
        <h3>1. Landing Page (Single-page website)</h3>
        <p><strong>Price:</strong> 600₾ - 1,200₾</p>
        <p>This is a simple website aimed at completing one specific action (e.g., buying a product, registration). Ideal for advertising campaigns.</p>

        <h3>2. Business / Corporate Website</h3>
        <p><strong>Price:</strong> 1,500₾ - 3,500₾</p>
        <p>Includes 5-10 pages (home, about us, services, blog, contact). Requires an admin panel and SEO optimization.</p>

        <h3>3. E-commerce (Online Store)</h3>
        <p><strong>Price:</strong> 4,000₾ - 8,000₾+</p>
        <p>This is a complex system with payments, cart, and product management. The price depends on the complexity of functionality.</p>

        <h3>Why do prices vary?</h3>
        <p>The price depends on:</p>
        <ul>
          <li>Design complexity (unique vs template)</li>
          <li>Functionality (payments, calculators)</li>
          <li>Technologies (WordPress vs Custom Code)</li>
        </ul>

        <p>At PixelWeb, we offer the best price-to-quality ratio. We write clean code (Next.js), which ensures site speed and security.</p>
        <p>See more about <a href="/saitis-damzadeba">website creation</a>, <a href="/landing-page-damzadeba">Landing Page development</a>, or <a href="/internet-magaziis-damzadeba">online store development</a>.</p>
      `
        },
        date: { ka: '8 ნოემბერი, 2025', en: 'November 8, 2025' },
        author: 'PixelWeb Team',
        keywords: 'საიტის ფასი, რა ღირს საიტი, ვებსაიტების დამზადების ფასები'
    },
    'wordpress-vs-custom-code': {
        title: {
            ka: 'WordPress თუ Custom Code — რომელი ჯობია ქართული ბიზნესისთვის?',
            en: 'WordPress vs Custom Code — Which Is Better for Georgian Businesses?'
        },
        image: '/images/andcode.jpg',
        content: {
            ka: `
        <p>ერთ-ერთი ყველაზე ხშირი კითხვა, რომელსაც გვისვამენ ქართველი მეწარმეები: "WordPress-ით გავაკეთო თუ Custom Code-ით?". ორივეს აქვს ღირსებები და ნაკლი. მოდი დეტალურად განვიხილოთ.</p>

        <h3>1. ფასი</h3>
        <p><strong>WordPress:</strong> საწყისი ფასი იაფია. შაბლონები იშოვება უფასოდ ან 50-100$-ად. დამზადებას 400-1,500₾ შეიძლება დასჭირდეს. სამაგიეროდ, ჰოსტინგი, პლაგინები და უსაფრთხოების ლიცენზიები ყოველწლიურად 200-500₾-ს ემატება.</p>
        <p><strong>Custom Code (Next.js, React):</strong> საწყისი ფასი ცოტა მაღალია (600-1,500₾ Landing-ისთვის), მაგრამ შემდგომი ხარჯი მინიმალურია. ჰოსტინგი Vercel-ზე უფასოა მცირე საიტებისთვის.</p>

        <h3>2. სიჩქარე</h3>
        <p>Custom Code მკვეთრად სწრაფია. WordPress იყენებს PHP-ს და მონაცემთა ბაზას ყოველ მოთხოვნაზე, ხოლო Next.js-ით აშენებული საიტი წინასწარ რენდერდება სტატიკურ ფაილებად. ეს Google PageSpeed-ში 90-100 ქულას იძლევა, ხოლო WordPress საშუალოდ 40-70.</p>

        <h3>3. SEO</h3>
        <p>WordPress-ს აქვს Yoast SEO და სხვა პლაგინები. Custom Code-ში SEO პირდაპირ კოდშია — sitemap, schema, meta tags. შედეგი მსგავსია, თუ ორივე სწორად გაკეთდა, თუმცა Custom Code Google-ისთვის უფრო სასიამოვნოა სიჩქარის გამო.</p>

        <h3>4. უსაფრთხოება</h3>
        <p>WordPress ხშირად ხდება ჰაკერების სამიზნე — გლობალურად 40%-ზე მეტი ვებსაიტი WordPress-ზეა, ამიტომ შეტევები ხშირია. Custom Code საიტი მინიმუმს ამცირებს ამ რისკს.</p>

        <h3>5. მოქნილობა</h3>
        <p>WordPress საუკეთესოა მაშინ, როცა გჭირდებათ მარტივი ბლოგი ან საიტი, რომელსაც ხშირად განაახლებთ თქვენ. Custom Code მაშინ ჯობია, როცა გჭირდებათ უნიკალური ფუნქციონალი, რთული ანიმაციები ან მაღალი სიჩქარე.</p>

        <h3>დასკვნა — როდის რომელი?</h3>
        <ul>
          <li><strong>აირჩიე WordPress, თუ:</strong> გჭირდება სტანდარტული ბლოგი, აქვს WordPress-ის გამოცდილების მქონე გუნდი, ან საიტს თვითონ მართავ.</li>
          <li><strong>აირჩიე Custom Code, თუ:</strong> გჭირდება სწრაფი ვებსაიტი, უნიკალური დიზაინი, Landing Page Google Ads-ისთვის, ან გრძელვადიანი ნაკლები ხარჯი.</li>
        </ul>
        <p>PixelWeb-ში ვამზადებთ Custom Code-ით (Next.js), რადგან გვჯერა, რომ ეს არის უკეთესი არჩევანი 2026 წელს. <a href="/saitis-damzadeba">საიტის დამზადება</a> | <a href="/saitis-damzadeba-fasi">ფასები</a></p>
      `,
            en: `
        <p>One of the most common questions Georgian entrepreneurs ask: "Should I build with WordPress or Custom Code?". Both have advantages and disadvantages. Let's examine in detail.</p>

        <h3>1. Price</h3>
        <p><strong>WordPress:</strong> Cheap to start. Templates are free or $50-100. Development can cost 400-1,500₾. But annual hosting, plugins, and security licenses add 200-500₾.</p>
        <p><strong>Custom Code (Next.js, React):</strong> Slightly higher initial cost (600-1,500₾ for Landing), but lower ongoing cost. Vercel hosting is free for small sites.</p>

        <h3>2. Speed</h3>
        <p>Custom Code is significantly faster. WordPress uses PHP and a database on every request, while a Next.js site is pre-rendered as static files. This results in PageSpeed scores of 90-100 vs WordPress's typical 40-70.</p>

        <h3>3. SEO</h3>
        <p>WordPress has Yoast SEO and similar plugins. Custom Code has SEO directly in the code — sitemap, schema, meta tags. Results are similar when done well, though Custom Code is more Google-friendly due to speed.</p>

        <h3>4. Security</h3>
        <p>WordPress is a frequent target — over 40% of websites globally use WordPress, so attacks are common. Custom Code sites minimize this risk.</p>

        <h3>5. Flexibility</h3>
        <p>WordPress is best for simple blogs or sites you update frequently. Custom Code is better when you need unique functionality, complex animations, or high speed.</p>

        <h3>Conclusion — which to choose?</h3>
        <ul>
          <li><strong>Choose WordPress if:</strong> You need a standard blog, have a WordPress-experienced team, or manage the site yourself.</li>
          <li><strong>Choose Custom Code if:</strong> You need a fast site, unique design, Landing Page for Google Ads, or lower long-term costs.</li>
        </ul>
        <p>At PixelWeb, we build with Custom Code (Next.js) because we believe it's the better choice for 2026. <a href="/saitis-damzadeba">Website development</a> | <a href="/saitis-damzadeba-fasi">Pricing</a></p>
      `
        },
        date: { ka: '15 დეკემბერი, 2025', en: 'December 15, 2025' },
        author: 'PixelWeb Team',
        keywords: 'WordPress vs Custom, Next.js საქართველო, WordPress საქართველო'
    },
    'seo-safudzvlebi-qartuli-biznesisthvis': {
        title: {
            ka: 'SEO საფუძვლები ქართული ბიზნესისთვის 2026 წელს',
            en: 'SEO Basics for Georgian Businesses in 2026'
        },
        image: '/images/TypingY.png',
        content: {
            ka: `
        <p>SEO (Search Engine Optimization) ნიშნავს თქვენი საიტის ოპტიმიზაციას ისე, რომ Google-ში ზევით აღმოჩნდეთ. ქართულ ბაზარზე კონკურენცია მზარდია, მაგრამ ჯერ კიდევ შესაძლებელია სწრაფი წინსვლა, თუ ძირითად პრინციპებს დაიცავთ.</p>

        <h3>1. სწორი ქართული საკვანძო სიტყვები (Keywords)</h3>
        <p>გამოიყენეთ Google Keyword Planner-ი ან უბრალოდ Google ძიება, რათა გაიგოთ რას წერენ ხალხი: "საიტის დამზადება", "საიტი იაფად", "ვებ დიზაინი თბილისში" — ეს ყველაფერი რეალური ძიების ფრაზებია.</p>

        <h3>2. სათაური (Title) და აღწერა (Description)</h3>
        <p>თითოეულ გვერდს უნდა ჰქონდეს უნიკალური &lt;title&gt; (50-60 სიმბოლო) და &lt;meta description&gt; (140-160 სიმბოლო). მაგალითად: <em>"საიტის დამზადება საქართველოში 600₾-დან | PixelWeb"</em>.</p>

        <h3>3. სიჩქარე</h3>
        <p>Google ჯერ კიდევ 2021 წლიდან აქცევს ყურადღებას PageSpeed-ს. სამიზნე უნდა იყოს 90+ მობილურზე. Next.js, Astro ან სტატიკური HTML — საუკეთესო ვარიანტებია.</p>

        <h3>4. მობილური ვერსია</h3>
        <p>ქართველი მომხმარებლების 70%-ზე მეტი Google-ს მობილურიდან იყენებს. თუ საიტი ცუდად მუშაობს ტელეფონზე — Google-შიც ცუდად აღმოჩნდებით.</p>

        <h3>5. ლოკალური SEO</h3>
        <p>დაარეგისტრირეთ Google Business Profile, დაამატეთ მისამართი, სამუშაო საათები, ფოტოები. ეს ფასს არ ღირს და მთავარი წყაროა ლოკალური კლიენტებისთვის.</p>

        <h3>6. შინაარსი (Content)</h3>
        <p>Google უყვარს ტექსტი. დაიწერეთ ბლოგი ქართულად: "რა ღირს საიტი", "რესტორნისთვის საიტი", "WordPress vs Custom". ეს მოიზიდავს ორგანულ ტრაფიკს.</p>

        <h3>7. სხვა საიტებიდან ბმულები (Backlinks)</h3>
        <p>როცა სხვა საიტი ბმულს გასცემს თქვენზე, Google-ისთვის ეს ნდობის ნიშანია. სცადეთ მონაწილეობა მიიღოთ ქართულ ბიზნეს კატალოგებში, ბლოგებში და მედია გამოცემებში.</p>

        <h3>დასკვნა</h3>
        <p>SEO არ არის ერთჯერადი მუშაობა. ის გრძელვადიანი პროცესია. თუ 6 თვის განმავლობაში სწორად მუშაობთ — Google-ის პირველი გვერდი რეალისტურია ქართულ მცირე ბაზარზე.</p>
        <p>გჭირდებათ დახმარება? <a href="/saitis-damzadeba">საიტის დამზადება SEO-ით</a> ვაკეთებთ ერთ პაკეტში.</p>
      `,
            en: `
        <p>SEO (Search Engine Optimization) means optimizing your site so it ranks higher in Google. Competition in the Georgian market is growing, but it's still possible to rank fast if you follow basic principles.</p>

        <h3>1. Right Georgian Keywords</h3>
        <p>Use Google Keyword Planner or simply Google search to find what people type: "საიტის დამზადება", "საიტი იაფად", "ვებ დიზაინი თბილისში" — all real search queries.</p>

        <h3>2. Title and Description</h3>
        <p>Each page should have a unique &lt;title&gt; (50-60 chars) and &lt;meta description&gt; (140-160 chars). Example: <em>"საიტის დამზადება საქართველოში 600₾-დან | PixelWeb"</em>.</p>

        <h3>3. Speed</h3>
        <p>Google has prioritized PageSpeed since 2021. Target 90+ on mobile. Next.js, Astro, or static HTML are best options.</p>

        <h3>4. Mobile Version</h3>
        <p>Over 70% of Georgian users access Google via mobile. If your site is bad on phone, your Google ranking will suffer.</p>

        <h3>5. Local SEO</h3>
        <p>Register a Google Business Profile, add address, hours, photos. It's free and is the main source of local customers.</p>

        <h3>6. Content</h3>
        <p>Google loves text. Write a blog in Georgian: "რა ღირს საიტი", "რესტორნისთვის საიტი". This attracts organic traffic.</p>

        <h3>7. Backlinks</h3>
        <p>When other sites link to you, Google considers it a trust signal. Try participating in Georgian business directories, blogs, and media.</p>

        <h3>Conclusion</h3>
        <p>SEO is not a one-time task. It's long-term. If you work properly for 6 months, ranking on Google's first page is realistic in the small Georgian market.</p>
        <p>Need help? We deliver <a href="/saitis-damzadeba">websites with SEO</a> in one package.</p>
      `
        },
        date: { ka: '5 იანვარი, 2026', en: 'January 5, 2026' },
        author: 'PixelWeb Team',
        keywords: 'SEO საქართველო, SEO საფუძვლები, Google ქართულად 2026'
    },
    'restornisthvis-saiti-ra-unda-hkondes': {
        title: {
            ka: 'რესტორნისთვის საიტი — რა უნდა ჰქონდეს აუცილებლად?',
            en: 'A Restaurant Website — What Must It Have?'
        },
        image: '/images/Restauran1.jpg',
        content: {
            ka: `
        <p>რესტორნის საიტი არ არის უბრალოდ ლამაზი გვერდი. ეს არის ხელსაწყო, რომელიც სტუმარს მარტივად ეუბნება: "ეს არის ჩვენი მენიუ, აქ ვართ, ასე გვირჩიე ჯავშანი". თუ ეს ხუთ წამში არ ჩანს — სტუმარი წავა Wolt-ში, Bolt Food-ში ან კონკურენტთან.</p>

        <h3>1. მენიუ ფასებით</h3>
        <p>ეს ყველაზე ხშირი ძიების მიზანია. სტუმარი ხსნის საიტს, რომ მენიუ ნახოს. დარწმუნდით, რომ მენიუ ხილვადია მთავარი გვერდიდან 1-2 კლიკში და ფასები მითითებულია გვერდით.</p>

        <h3>2. ფოტოები კერძების</h3>
        <p>ცუდი ფოტოები ცუდი ბიზნესის ნიშანია. ჩვენ ვირჩევთ ნაკლებ ფოტოს, მაგრამ ხარისხიანს. ხშირად საუკეთესოა iPhone-ით გადაღება ბუნებრივ შუქზე.</p>

        <h3>3. ჯავშნის შესაძლებლობა</h3>
        <p>ჯავშნა შეიძლება იყოს:</p>
        <ul>
          <li>ფორმა საიტზე (სახელი, ხალხის რაოდენობა, თარიღი, საათი)</li>
          <li>WhatsApp ჩატი — ერთი კლიკით</li>
          <li>ტელეფონის ნომერი დიდი ღილაკით</li>
        </ul>

        <h3>4. Google Maps</h3>
        <p>დაამატეთ რუკა მისამართით, რომ მძღოლმა Google Maps-იდან პირდაპირ მოგაგნოთ.</p>

        <h3>5. სამუშაო საათები</h3>
        <p>აუცილებლად მიუთითეთ ღია-დახურულის გრაფიკი. Google Business Profile-შიც.</p>

        <h3>6. მიწოდება / Take Away</h3>
        <p>თუ აქვთ მიწოდება, ცალკე გვერდი ან სექცია უნდა ჰქონდეთ. ეს დამატებითი შემოსავლის წყაროა.</p>

        <h3>7. სიჩქარე და მობილური</h3>
        <p>სტუმრები ხშირად ეძებენ რესტორანს ქუჩაში, ტელეფონიდან, 3G-ით. საიტი უნდა ჩაიტვირთოს 2-3 წამში.</p>

        <h3>რა ღირს?</h3>
        <p>რესტორნის სტანდარტული საიტი PixelWeb-ში არის 800-1,800₾-ის ფარგლებში, ფუნქციონალის მიხედვით. დეტალები <a href="/restornis-saiti">რესტორნის საიტის გვერდზე</a>.</p>
      `,
            en: `
        <p>A restaurant website isn't just a pretty page. It's a tool that quickly tells visitors: "this is our menu, we're here, this is how to book". If it's not visible in 5 seconds, the visitor goes to Wolt, Bolt Food, or a competitor.</p>

        <h3>1. Menu with Prices</h3>
        <p>This is the most common search goal. Visitors open the site to see the menu. Make sure menu is visible 1-2 clicks from home page with prices.</p>

        <h3>2. Photos of Dishes</h3>
        <p>Bad photos signal bad business. Use fewer photos but high quality. Often best is iPhone with natural lighting.</p>

        <h3>3. Reservation</h3>
        <p>Reservations can be:</p>
        <ul>
          <li>Form on site (name, party size, date, time)</li>
          <li>WhatsApp chat — one click</li>
          <li>Phone number with big button</li>
        </ul>

        <h3>4. Google Maps</h3>
        <p>Add map with address so drivers find you from Google Maps directly.</p>

        <h3>5. Working Hours</h3>
        <p>Always indicate hours. Also in Google Business Profile.</p>

        <h3>6. Delivery / Take Away</h3>
        <p>If you have delivery, dedicate a section. Additional revenue source.</p>

        <h3>7. Speed and Mobile</h3>
        <p>Visitors often search for restaurants on the street, from phone, on 3G. Site must load in 2-3 seconds.</p>

        <h3>How Much?</h3>
        <p>Standard restaurant site at PixelWeb is 800-1,800₾, depending on functionality. Details on the <a href="/restornis-saiti">restaurant website page</a>.</p>
      `
        },
        date: { ka: '20 თებერვალი, 2026', en: 'February 20, 2026' },
        author: 'PixelWeb Team',
        keywords: 'რესტორნის საიტი, რესტორნისთვის საიტი, კაფეს საიტი, მენიუ ონლაინ'
    },
    'landing-page-tu-biznes-saiti': {
        title: {
            ka: 'Landing Page თუ ბიზნეს საიტი — რომელი აირჩიოთ?',
            en: 'Landing Page or Business Website — Which to Choose?'
        },
        image: '/images/Furniture2.jpg',
        content: {
            ka: `
        <p>ეს ერთ-ერთი ყველაზე ხშირი დილემაა, რომელსაც ვხვდებით კონსულტაციებზე. პასუხი დამოკიდებულია იმაზე, თუ რა მიზანი გაქვთ. მოდი დეტალურად განვიხილოთ.</p>

        <h3>რა არის Landing Page?</h3>
        <p>Landing Page არის ერთგვერდიანი (ან 1-3 გვერდიანი) საიტი, რომელიც ფოკუსირდება ერთ მიზანზე: ფორმის შევსება, ზარი, შეკვეთა, რეგისტრაცია. ის "გრძელი ფურცელია", სადაც სკროლის გზაზე მომხმარებელი იღებს ყველაფერს, რაც გადაწყვეტილებას სჭირდება.</p>

        <h3>რა არის ბიზნეს საიტი?</h3>
        <p>ბიზნეს საიტი არის რამდენიმეგვერდიანი საიტი (3-10): მთავარი, სერვისები, ჩვენ შესახებ, პორტფოლიო, ბლოგი, კონტაქტი. ის გრძელვადიანი "ციფრული ოფისია", რომელიც ნდობას აშენებს.</p>

        <h3>ფასი</h3>
        <ul>
          <li><strong>Landing Page:</strong> 600-1,200₾</li>
          <li><strong>ბიზნეს საიტი:</strong> 1,500₾-დან</li>
        </ul>

        <h3>ვადა</h3>
        <ul>
          <li><strong>Landing Page:</strong> 3-5 დღე</li>
          <li><strong>ბიზნეს საიტი:</strong> 7-10 დღე</li>
        </ul>

        <h3>როდის რომელი?</h3>
        <p><strong>აირჩიე Landing Page, თუ:</strong></p>
        <ul>
          <li>გაუშვი Google Ads ან Meta Ads</li>
          <li>გყავს ერთი მთავარი პროდუქტი ან სერვისი</li>
          <li>გჭირდება სწრაფი დაწყება ბიუჯეტით</li>
          <li>გყავს მაგ. ერთი კონკრეტული კამპანია</li>
        </ul>

        <p><strong>აირჩიე ბიზნეს საიტი, თუ:</strong></p>
        <ul>
          <li>გყავს რამდენიმე სერვისი</li>
          <li>გჭირდება ნდობის აშენება (ჩვენ შესახებ, პორტფოლიო)</li>
          <li>გჭირდება SEO-ით ორგანული ტრაფიკი</li>
          <li>გავაჩერებ ბლოგს</li>
        </ul>

        <h3>გჭირდებათ ორივე?</h3>
        <p>დიახ, ხშირად ბიზნესს ჯერ ბიზნეს საიტი სჭირდება (ციფრული საფუძველი), შემდეგ — Landing Page-ები კონკრეტული კამპანიებისთვის.</p>

        <p>დეტალები: <a href="/landing-page-damzadeba">Landing Page-ის დამზადება</a> | <a href="/biznes-saiti">ბიზნეს საიტი</a></p>
      `,
            en: `
        <p>This is one of the most common dilemmas we face during consultations. The answer depends on your goal. Let's examine in detail.</p>

        <h3>What is a Landing Page?</h3>
        <p>A Landing Page is a single-page (or 1-3 page) site focused on one goal: form submission, call, order, registration. It's a "long page" where as the user scrolls they get everything needed for a decision.</p>

        <h3>What is a Business Website?</h3>
        <p>A Business Website is a multi-page site (3-10): home, services, about, portfolio, blog, contact. It's a long-term "digital office" that builds trust.</p>

        <h3>Price</h3>
        <ul>
          <li><strong>Landing Page:</strong> 600-1,200₾</li>
          <li><strong>Business Website:</strong> from 1,500₾</li>
        </ul>

        <h3>Timeline</h3>
        <ul>
          <li><strong>Landing Page:</strong> 3-5 days</li>
          <li><strong>Business Website:</strong> 7-10 days</li>
        </ul>

        <h3>When to choose what?</h3>
        <p><strong>Choose Landing Page if:</strong></p>
        <ul>
          <li>You're running Google Ads or Meta Ads</li>
          <li>You have one main product or service</li>
          <li>You need a quick start on a budget</li>
          <li>You have one specific campaign</li>
        </ul>

        <p><strong>Choose Business Website if:</strong></p>
        <ul>
          <li>You have several services</li>
          <li>You need to build trust (about, portfolio)</li>
          <li>You need organic SEO traffic</li>
          <li>You plan a blog</li>
        </ul>

        <h3>Need both?</h3>
        <p>Yes, often businesses first need a Business Website (digital foundation), then Landing Pages for specific campaigns.</p>

        <p>Details: <a href="/landing-page-damzadeba">Landing Page</a> | <a href="/biznes-saiti">Business Website</a></p>
      `
        },
        date: { ka: '12 მარტი, 2026', en: 'March 12, 2026' },
        author: 'PixelWeb Team',
        keywords: 'Landing Page vs ბიზნეს საიტი, რომელი არჩიოს'
    },
    'saiti-mcire-biznesisthvis-5-nabiji': {
        title: {
            ka: 'საიტი მცირე ბიზნესისთვის — 5 აუცილებელი ნაბიჯი',
            en: 'A Small Business Website — 5 Essential Steps'
        },
        image: '/images/casedelight.jpg',
        content: {
            ka: `
        <p>მცირე ბიზნესს ხშირად ჰგონია, რომ "საიტი არ მჭირდება, მე Instagram მაქვს". ეს რთული შეცდომაა. Instagram არის სოციალური ქსელი, საიდანაც Meta მართავს ვის უჩვენებს თქვენს კონტენტს. საიტი არის თქვენი ციფრული საკუთრება, რომელიც 24/7 მუშაობს.</p>

        <p>აი 5 აუცილებელი ნაბიჯი, რომელიც მცირე ბიზნესის საიტმა უნდა გაიაროს, რომ მუშაობდეს:</p>

        <h3>1. მკაფიო თავსართი (Hero Section)</h3>
        <p>ვიზიტორმა 3 წამში უნდა გაიგოს: ვინ ხართ, რას აკეთებთ, რა ღირს და როგორ დაგიკავშირდეთ. არ მალოთ ფასი — ხალხს ფასი აინტერესებს.</p>

        <h3>2. სოციალური მტკიცებულება (Social Proof)</h3>
        <p>კლიენტების მიმოხილვები, Instagram-ის სქრინშოტები, ფოტოები — ნებისმიერი რამ, რაც აჩვენებს რომ თქვენ რეალური ბიზნესი ხართ, არა ვინმე უცნობი.</p>

        <h3>3. სამი დაკავშირების გზა</h3>
        <ul>
          <li>WhatsApp ჩატის ღილაკი</li>
          <li>ტელეფონის ღილაკი (ერთი კლიკი — ზარი)</li>
          <li>ფორმა, თუ ვინმეს მოწერა სურს ფიქრის შემდეგ</li>
        </ul>

        <h3>4. მობილური ვერსია უპირველეს</h3>
        <p>ქართველი ვიზიტორების 70%+ მობილურიდან მოდის. ჯერ ნახეთ საიტი ტელეფონზე, შემდეგ კომპიუტერზე.</p>

        <h3>5. Google Business Profile + ლოკალური SEO</h3>
        <p>დაარეგისტრირეთ Google Business Profile (უფასოა). ეს Google Maps-ში გამოვა და კლიენტი თქვენი მისამართით მოგაგნოთ. ეს მცირე ბიზნესისთვის ძალიან მნიშვნელოვანია.</p>

        <h3>რა ღირს მცირე ბიზნესის საიტი?</h3>
        <p>PixelWeb-ში 600-1,500₾-ის ფარგლებში. დეტალები <a href="/mcire-biznesis-saiti">მცირე ბიზნესის საიტის გვერდზე</a>.</p>

        <h3>დასკვნა</h3>
        <p>საიტი არ არის ფუფუნება. ეს არის მცირე ბიზნესისთვის შესაძლებლობა, რომ Google-მა მოგიხსენიოთ ვისთვის თქვენი მომსახურება სჭირდება და თქვენთან მოვიდეს ახალი კლიენტი.</p>
      `,
            en: `
        <p>Small businesses often think "I don't need a website, I have Instagram". This is a major mistake. Instagram is a social network where Meta controls who sees your content. A website is your digital property that works 24/7.</p>

        <p>Here are 5 essential steps a small business website must cover to work:</p>

        <h3>1. Clear Hero Section</h3>
        <p>Visitors should understand in 3 seconds: who you are, what you do, how much it costs, how to contact. Don't hide prices — people care about prices.</p>

        <h3>2. Social Proof</h3>
        <p>Customer reviews, Instagram screenshots, photos — anything showing you're a real business, not a stranger.</p>

        <h3>3. Three Contact Methods</h3>
        <ul>
          <li>WhatsApp chat button</li>
          <li>Phone button (one click = call)</li>
          <li>Form, if someone wants to write after thinking</li>
        </ul>

        <h3>4. Mobile First</h3>
        <p>70%+ of Georgian visitors come from mobile. View the site on phone first, then computer.</p>

        <h3>5. Google Business Profile + Local SEO</h3>
        <p>Register a Google Business Profile (free). It appears in Google Maps and customers find you by address. Very important for small businesses.</p>

        <h3>How much does a small business website cost?</h3>
        <p>At PixelWeb, 600-1,500₾. Details on the <a href="/mcire-biznesis-saiti">small business website page</a>.</p>

        <h3>Conclusion</h3>
        <p>A website isn't a luxury. It's an opportunity for a small business to let Google show your services to those who need them.</p>
      `
        },
        date: { ka: '5 აპრილი, 2026', en: 'April 5, 2026' },
        author: 'PixelWeb Team',
        keywords: 'საიტი მცირე ბიზნესისთვის, მცირე ბიზნესის საიტი'
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
