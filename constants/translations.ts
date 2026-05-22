export type Language = 'ka' | 'en'

export const translations = {
    ka: {
        nav: {
            home: 'მთავარი',
            services: 'სერვისები',
            portfolio: 'პორტფოლიო',
            blog: 'ბლოგი',
            contact: 'კონტაქტი',
            about: 'ჩვენ შესახებ',
        },
        common: {
            online: 'ონლაინ'
        },
        hero: {
            badge: '🚀 თანამედროვე ვებ ტექნოლოგიები',
            title: 'ვქმნით',
            titleHighlight: 'ციფრულ გამოცდილებას',
            subtitle: 'ვებსაიტების დამზადება ყველაზე ხელმისაწვდომ ფასად საქართველოში. ჩვენ დაგეხმარებით თქვენი ბიზნესის ციფრულ ტრანსფორმაციაში.',
            startProject: 'დაიწყე პროექტი',
            ourServices: 'ჩვენი სერვისები',
            stats: {
                cheaper: 'იაფი ბაზართან',
                completed: 'დასრულებული პროექტი',
                satisfied: 'კმაყოფილი კლიენტები',
                delivery: 'დღე მიწოდება',
                satisfaction: 'კმაყოფილება'
            }
        },
        home: {
            features: {
                badge: 'რატომ ჩვენ?',
                title: 'რატომ უნდა ავირჩიოთ PixelWeb?',
                subtitle: 'ჩვენ გთავაზობთ საუკეთესო ხარისხს ხელმისაწვდომ ფასად საქართველოში',
                items: [
                    { title: 'ხელმისაწვდომი ფასები', desc: 'ბაზრის ფასებთან შედარებით 30%-მდე იაფია. ხარისხიანი ვებსაიტები ყველასთვის ხელმისაწვდომ ფასად.' },
                    { title: 'სწრაფი მიწოდება', desc: 'თქვენი პროექტი მზად იქნება მოკლე ვადებში. ჩვენ ვაფასებთ თქვენს დროს.' },
                    { title: 'თანამედროვე დიზაინი', desc: 'ულტრა თანამედროვე, სწრაფი და მობილურზე ოპტიმიზირებული ვებსაიტები.' },
                    { title: 'პროფესიონალური კოდი', desc: 'სუფთა, ოპტიმიზირებული და მასშტაბირებადი კოდი უახლესი ტექნოლოგიებით.' },
                    { title: 'რესპონსიული დიზაინი', desc: 'თქვენი საიტი იდეალურად გამოიყურება ყველა მოწყობილობაზე.' },
                    { title: 'მორგებული გადაწყვეტილებები', desc: 'ყველა პროექტი უნიკალურია და შექმნილია თქვენი საჭიროებების მიხედვით.' }
                ]
            },
            pricing: {
                badge: '💰 გამჭვირვალე ფასები',
                title: 'აირჩიეთ თქვენთვის შესაფერისი',
                titleHighlight: 'პაკეტი',
                subtitle: 'მარტივი და ოპტიმალური ფასები. ყველა პაკეტი მოიცავს უფასო ტექნიკურ მხარდაჭერას.',
                marketPrice: 'ბაზარზე',
                currency: '₾',
                startNow: 'დაიწყე ახლავე',
                popular: 'რეკომენდებული',
                duration: 'დღე',
                viewAll: 'იხილეთ ყველა სერვისი',
                packages: {
                    landing: {
                        name: 'Landing Page',
                        desc: 'იდეალური მცირე ბიზნესისთვის ან პროდუქტის წარმოსაჩენად',
                        features: [
                            '1-3 გვერდი თანამედროვე დიზაინით',
                            'სრულად რესპონსიული დიზაინი',
                            'კონტაქტის ფორმა',
                            'Google Maps ინტეგრაცია',
                            'სოციალური მედიის ლინკები',
                            'ძირითადი SEO ოპტიმიზაცია',
                        ],
                        notIncluded: [
                            'მონაცემთა ბაზა',
                            'მომხმარებლის ავტორიზაცია'
                        ]
                    },
                    business: {
                        name: 'საიტი ბიზნესისთვის',
                        desc: 'სრული ფუნქციონალის საიტი ბიზნესისთვის',
                        features: [
                            '3-7 გვერდი პროფესიონალური დიზაინით',
                            'სრულად რესპონსიული',
                            'კონტენტის მართვის სისტემა (CMS)',
                            'ბლოგის სექცია',
                            'მრავალენოვანი მხარდაჭერა',
                            'სრული SEO ოპტიმიზაცია',
                            'სოციალური მედიის ინტეგრაცია',
                        ],
                        notIncluded: [
                            'ონლაინ გადახდის სისტემა',
                        ]
                    },
                    ecommerce: {
                        name: 'E-Commerce',
                        desc: 'სრული ფუნქციონალის ონლაინ მაღაზია',
                        features: [
                            'უსასრულო პროდუქტების დამატება',
                            'პროდუქტის ძიება და ფილტრაცია',
                            'კალათა და Checkout',
                            'შეკვეთების მართვა',
                            'გადახდის სისტემების ინტეგრაცია',
                            'ადმინ პანელი',
                            'ანალიტიკა და რეპორტები',
                        ],
                        notIncluded: []
                    }
                }
            },
            faq: {
                title: 'ხშირად დასმული კითხვები (FAQ)',
                subtitle: 'პასუხები ყველაზე გავრცელებულ კითხვებზე ჩვენი სერვისების შესახებ',
                questions: [
                    {
                        q: 'რამდენი დრო სჭირდება საიტის დამზადებას?',
                        a: 'სტანდარტული „საიტის დამზადება“ (Landing ან მცირე ბიზნესი) სრულდება 3-7 დღეში. უფრო მასშტაბური პროექტები შეიძლება გაგრძელდეს 2-3 კვირა.'
                    },
                    {
                        q: 'რა ღირს საიტის გაკეთება?',
                        a: 'ფასები იწყება 600 ლარიდან. Landing Page - 600-1,200₾, ბიზნეს საიტები 1,500₾-დან, E-commerce 4,000₾-დან. დეტალური პაკეტები სერვისების გვერდზე.'
                    },
                    {
                        q: 'მოყვება თუ არა საიტს გარანტია?',
                        a: 'დიახ, ყველა ვებსაიტს მოყვება 1 თვიანი უფასო ტექნიკური მხარდაჭერა. ხარვეზების აღმოჩენა და გასწორება უფასოა.'
                    },
                    {
                        q: 'შედის თუ არა SEO ოპტიმიზაცია?',
                        a: 'დიახ, ძირითადი SEO ოპტიმიზაცია (სწრაფი ჩატვირთვა, meta tags, სტრუქტურული მონაცემები) შედის ყველა პაკეტში.'
                    }
                ]
            },
            cta: {
                title: 'მზად ხართ დაიწყოთ?',
                subtitle: 'მოდი ერთად შევქმნათ რაღაც განსაკუთრებული. ჩვენ მზად ვართ განვიხილოთ თქვენი იდეები.',
                button: 'დაგვიკავშირდით',
            }
        },
        services: {
            hero: {
                badge: '💼 პროფესიონალური სერვისები',
                title: 'ჩვენი სერვისები და',
                highlight: 'გამჭვირვალე ფასები',
                subtitle: 'აირჩიეთ თქვენთვის შესაფერისი პაკეტი. ყველა პროექტი მოიცავს უფასო კონსულტაციას და ტექნიკურ მხარდაჭერას.',
                consultation: 'უფასო კონსულტაცია',
                portfolio: 'ნახეთ პორტფოლიო'
            },
            title: 'აირჩიეთ თქვენი პაკეტი',
            subtitle: 'ყველა პაკეტი მოიცავს რესპონსიულ დიზაინს, SEO ოპტიმიზაციას და ტექნიკურ მხარდაჭერას',
            custom: {
                badge: 'მორგებული პროექტი',
                title: 'გჭირდებათ უნიკალური ვებსაიტი?',
                desc: 'შევქმნით სრულად მორგებულ ვებსაიტს თქვენი საჭიროებების მიხედვით',
                button: 'ფასი შეთანხმებით'
            },
            additional: {
                title: 'დამატებითი სერვისები',
                subtitle: 'ყველაფერი რაც გჭირდებათ წარმატებული ვებსაიტისთვის',
                items: {
                    domain: { name: 'დომენის რეგისტრაცია', desc: '.ge, .com, .net დომენები', price: '30-70 ₾/წელი' },
                    hosting: { name: 'ჰოსტინგი', desc: 'სწრაფი და უსაფრთხო ჰოსტინგი', price: '120-400 ₾/წელი' },
                    support: { name: 'ტექნიკური მხარდაჭერა', desc: 'განახლებები და მხარდაჭერა 24/7', price: 'შეთანხმებით' }
                }
            },
            process: {
                title: 'როგორ ვმუშაობთ',
                subtitle: 'მარტივი და გამჭვირვალე პროცესი დაწყებიდან გაშვებამდე',
                steps: {
                    1: { title: 'კონსულტაცია', desc: 'უფასო კონსულტაცია თქვენი საჭიროებების გასარკვევად' },
                    2: { title: 'დიზაინი', desc: 'უნიკალური დიზაინის შექმნა თქვენი ბრენდის შესაბამისად' },
                    3: { title: 'დეველოპმენტი', desc: 'საიტის აგება უახლესი ტექნოლოგიების გამოყენებით' },
                    4: { title: 'ტესტირება', desc: 'სრული ტესტირება ყველა მოწყობილობაზე' },
                    5: { title: 'გაშვება', desc: 'საიტის გაშვება და უფასო ტრენინგი' },
                    6: { title: 'მხარდაჭერა', desc: 'უფასო ტექნიკური მხარდაჭერა' }
                }
            }
        },
        about: {
            hero: {
                title: 'ჩვენ შესახებ',
                subtitle: 'ჩვენ ვართ ახალგაზრდა და ენერგიული გუნდი, რომელიც მიზნად ისახავს ხარისხიანი ვებსაიტების შექმნას ხელმისაწვდომ ფასად.'
            },
            mission: {
                title: 'ჩვენი მისია',
                text1: 'PixelWeb შეიქმნა იმ იდეით, რომ პროფესიონალური ვებსაიტები ხელმისაწვდომი უნდა იყოს ყველასთვის - პატარა ბიზნესიდან დიდ კორპორაციებამდე.',
                text2: 'ჩვენ გვესმის, რომ საქართველოში გადაჭარბებული ფასების გამო მცირე და საშუალო ბიზნესებს არ აქვთ საშუალება რომ ქონდეთ გამართული ვებსაიტი. ჩვენი მიზანია შევცვალოთ ეს რეალობა და შევთავაზოთ ქართულ ბაზარს არსებულზე 30%-ით იაფი პროდუქცია.',
                whyAffordable: 'რატომ არის ფასები ჩვენთან ხელმისაწვდომი?',
                reasons: [
                    'ვმუშაობთ გარე თანამშრომლების გარეშე, რაც ამცირებს ხარჯებს',
                    'ვიყენებთ თანამედროვე ინსტრუმენტებს და ფრეიმვორკებს, რაც აჩქარებს დეველოპმენტს',
                    'გვაქვს ოპტიმიზირებული სამუშაო პროცესები',
                    'ჩვენი მიზანია დავეხმაროთ საქართველოს ციფრულ განვითარებას.'
                ]
            },
            values: {
                title: 'ჩვენი ღირებულებები',
                subtitle: 'პრინციპები და სამუშაო ეთიკა, რომელსაც არასდროს ვუღალატებთ',
                items: [
                    { title: 'ვაფასებთ თითოეულ კლიენტს', desc: 'თითოეული პროექტი ჩვენთვის უნიკალურია. ჩვენ ვუსმენთ თქვენს საჭიროებებს და მაქსიმალურად ვცდილობთ დაგეხმაროთ მათ გადაჭრაში.' },
                    { title: 'ინოვაცია და ხარისხი', desc: 'ვიყენებთ უახლეს ტექნოლოგიებს და საუკეთესო პრაქტიკას, რათა შევქმნათ თანამედროვე, სწრაფი და მომხმარებლისთვის მოსახერხებელი ვებსაიტები.' },
                    { title: 'სწრაფი მიწოდება', desc: 'ჩვენ ვაფასებთ და გვესმის დროის მნიშვნელობა ჩვენი მომხმარებლებისთვის და ვმუშაობთ წინასწარ გათვალისწინებული ვადების მკაცრად დაცვით.' },
                    { title: 'გამჭვირვალობა', desc: 'ღია და გამჭვირვალე ფასები, ნათელი კომუნიკაცია და რეგულარული განახლებები პროექტის მიმდინარეობის შესახებ.' }
                ]
            },
            achievements: {
                title: 'ჩვენი მიღწევები',
                items: [
                    { number: '10+', label: 'დასრულებული პროექტი' },
                    { number: '100%', label: 'წარმატების მაჩვენებელი' },
                    { number: '4+', label: 'წლიანი გამოცდილება' }
                ]
            },
            whyUs: {
                title: 'რატომ ავირჩიოთ PixelWeb?',
                items: [
                    { title: 'ხელმისაწვდომი ფასები', desc: 'ბაზრის ფასებთან შედარებით 30%-მდე იაფია, ხარისხის შენარჩუნებით' },
                    { title: 'სწრაფი მიწოდება', desc: 'Landing Page - 3 დღე, კორპორატიული საიტი - 7 დღე, E-commerce - 14 დღე (საშუალოდ)' },
                    { title: 'უახლესი ტექნოლოგიები', desc: 'React, Next.js, Node.js - სწრაფი, უსაფრთხო და უახლესი ტექნოლოგიები' },
                    { title: 'რესპონსიული დიზაინი', desc: 'იდეალურად მუშაობს ყველა მოწყობილობაზე - მობილური, ტაბლეტი, დესკტოპი' },
                    { title: 'SEO ოპტიმიზაცია', desc: 'თქვენი საიტი გამოჩნდება Google-ში და მოიზიდავს მეტ კლიენტებს' },
                    { title: 'უფასო მხარდაჭერა', desc: 'ყველა პროექტი მოიცავს უფასო ტექნიკურ მხარდაჭერას და ტრენინგს' }
                ]
            },
            cta: {
                title: 'გაიგეთ მეტი ჩვენს შესახებ',
                subtitle: 'გვაქვს პასუხი თქვენს ყველა კითხვაზე',
                button: 'დაგვიკავშირდით'
            }
        },
        contact: {
            hero: {
                title: 'დაგვიკავშირდით',
                subtitle: 'მზად ვართ მოვისმინოთ თქვენი მოთხოვნა და დავგეგმოთ თქვენი ვებსაიტი. მიიღეთ უფასო კონსულტაცია.'
            },
            info: {
                address: { title: 'მისამართი', value: 'თბილისი, საქართველო', sub: 'დისტანციურად მივიღებთ შეკვეთებს მთელი საქართველოდან' },
                phone: { title: 'ტელეფონი', value: '+995 591 410 914', sub: 'ორშაბათი - პარასკევი: 10:00 - 21:00' },
                email: { title: 'ელ-ფოსტა', value: 'pixelweb2026@gmail.com', sub: 'პასუხს გიგზავნით მაქსიმალურად სწრაფად' }
            },
            form: {
                title: 'გამოგვიგზავნეთ შეტყობინება',
                success: 'თქვენი შეტყობინება წარმატებით გაიგზავნა! ჩვენ დაგიკავშირდებით მალე.',
                error: 'დაფიქსირდა შეცდომა. გთხოვთ სცადოთ თავიდან ან დაგვიკავშირდით ტელეფონით.',
                name: 'სახელი და გვარი',
                namePlaceholder: 'თქვენი სახელი',
                email: 'ელ-ფოსტა',
                phone: 'ტელეფონი',
                company: 'კომპანია/ბიზნესი',
                companyPlaceholder: 'კომპანიის სახელი',
                service: 'რა სერვისი გაინტერესებთ?',
                selectService: 'აირჩიეთ სერვისი',
                budget: 'თქვენი ბიუჯეტი',
                selectBudget: 'აირჩიეთ ბიუჯეტი',
                message: 'შეტყობინება',
                messagePlaceholder: 'მოგვიყევით თქვენი პროექტის შესახებ...',
                submit: 'გაგზავნა',
                submitting: 'იგზავნება...'
            },
            services: [
                'Landing Page (600-1,200 ₾)',
                'საწარმოს ვებსაიტი (1,500-3,500 ₾)',
                'E-Commerce (4,000-8,000 ₾)',
                'მორგებული ვებსაიტი (მოლაპარაკებით)',
                'არ ვარ დარწმუნებული'
            ],
            budgets: ['600 - 1,200 ₾', '1,200 - 2,500 ₾', '2,500 - 4,000 ₾', '4,000 - 6,000 ₾', '6,000 ₾+', 'შეთანხმებით'],
            hours: {
                title: 'სამუშაო საათები',
                weekdays: 'ორშაბათი - პარასკევი',
                saturday: 'შაბათი',
                sunday: 'კვირა',
                closed: 'დახურულია'
            },
            faq: {
                title: 'ხშირი კითხვები',
                items: [
                    { q: 'რამდენი ხანი სჭირდება?', a: 'Landing Page - 3-5 დღე, საწარმოს საიტი - 7-10 დღე, E-commerce - 14-21 დღე' },
                    { q: 'შევძლებ გადახდას ეტაპობრივად?', a: 'დიახ, შესაძლებელია 50% წინასწარ და 50% გაშვებისას' },
                    { q: 'მოიცავს ჰოსტინგს?', a: 'ჰოსტინგი და დომენი ცალკე სერვისია (ემატება ფასი), ჩვენ დაგეხმარებით მოწყობაში' }
                ]
            },
            social: 'დაგვიკავშირდით',
            fastResponse: { title: 'სწრაფი პასუხი', text: 'პასუხს გიგზავნით მაქსიმალურად სწრაფად' },
            map: { title: 'თბილისი, საქართველო', text: 'დისტანციურად ვმუშაობთ მთელი საქართველოს მასშტაბით' }
        },
        portfolio: {
            hero: {
                title: 'ჩვენი პორტფოლიო',
                subtitle: 'ნახეთ ჩვენი ნამუშევრები და დარწმუნდით ხარისხში'
            },
            viewSite: 'საიტის ნახვა',
            technologies: 'ტექნოლოგიები',
            cta: {
                title: 'მოგეწონათ ჩვენი ნამუშევრები?',
                subtitle: 'მოდით შევქმნათ რაღაც განსაკუთრებული თქვენთვისაც',
                button: 'დაიწყე პროექტი'
            },
            categories: {
                all: 'ყველა',
                mobile: 'მობილური აპლიკაციები',
                education: 'საგანმანათლებო',
                ecommerce: 'E-Commerce',
                restaurant: 'რესტორანი',
                gaming: 'თამაშები',
                portfolio: 'პორტფოლიო'
            },
            stats: {
                projects: 'დასრულებული პროექტი',
                success: 'წარმატების მაჩვენებელი',
                support: 'მხარდაჭერა'
            },
            clickToView: 'დააჭირე სანახავად',
            noProjects: 'ამ კატეგორიაში პროექტები არ მოიძებნა'
        },
        blog: {
            hero: {
                title: 'ჩვენი ბლოგი',
                subtitle: 'სიახლეები, რჩევები და საინტერესო სტატიები ვებ ტექნოლოგიების შესახებ'
            },
            readMore: 'წაიკითხე სრულად',
            noArticles: 'ამჟამად სტატიები არ არის'
        },
        footer: {
            desc: 'თანამედროვე ვებ სტუდია, რომელიც ორიენტირებულია ხარისხზე, სისწრაფესა და ხელმისაწვდომობაზე.',
            quickLinks: 'სწრაფი ბმულები',
            contact: 'კონტაქტი',
            rights: 'ყველა უფლება დაცულია',
            address: 'თბილისი, საქართველო',
            servicesTitle: 'სერვისები',
            call: 'დარეკვა',
            whatsappMessage: 'გამარჯობა, მაინტერესებს ვებსაიტი PixelWeb.ge-ზე',
            serviceItems: {
                websiteCreation: 'საიტის დამზადება',
                price: 'საიტის დამზადების ფასი',
                landing: 'Landing Page',
                business: 'საწარმოს ვებსაიტი',
                ecommerce: 'ელექტრონული კომერცია',
                portfolio: 'პორტფოლიო საიტი',
                marketplace: 'საბაზრო ადგილი'
            }
        }
    },
    en: {
        nav: {
            home: 'Home',
            services: 'Services',
            portfolio: 'Portfolio',
            blog: 'Blog',
            contact: 'Contact',
            about: 'About Us',
        },
        common: {
            online: 'Online'
        },
        hero: {
            badge: '🚀 Modern Web Technologies',
            title: 'Creating',
            titleHighlight: 'Digital Experiences',
            subtitle: 'Website development at the most affordable prices in Georgia. We help digitally transform your business.',
            startProject: 'Start Project',
            ourServices: 'Our Services',
            stats: {
                cheaper: 'Cheaper than Market',
                completed: 'Completed Projects',
                satisfied: 'Satisfied Clients',
                delivery: 'Days Delivery',
                satisfaction: 'Satisfaction'
            }
        },
        home: {
            features: {
                badge: 'Why Us?',
                title: 'Why Choose PixelWeb?',
                subtitle: 'We offer the best quality at an affordable price in Georgia',
                items: [
                    { title: 'Affordable Prices', desc: 'Up to 30% cheaper than market prices. Quality websites affordable for everyone.' },
                    { title: 'Fast Delivery', desc: 'Your project will be ready in short terms. We value your time.' },
                    { title: 'Modern Design', desc: 'Ultra-modern, fast, and mobile-optimized websites.' },
                    { title: 'Professional Code', desc: 'Clean, optimized, and scalable code using latest technologies.' },
                    { title: 'Responsive Design', desc: 'Your site looks perfect on all devices.' },
                    { title: 'Custom Solutions', desc: 'Every project is unique and tailored to your needs.' }
                ]
            },
            pricing: {
                badge: '💰 Transparent Pricing',
                title: 'Choose Your Perfect',
                titleHighlight: 'Plan',
                subtitle: 'Simple and optimal pricing. All packages include free technical support.',
                marketPrice: 'Market Price',
                currency: '₾',
                startNow: 'Start Now',
                popular: 'Recommended',
                duration: 'Days',
                viewAll: 'View All Services',
                packages: {
                    landing: {
                        name: 'Landing Page',
                        desc: 'Perfect for small businesses or showcasing a product',
                        features: [
                            '1-3 Pages with Modern Design',
                            'Fully Responsive Design',
                            'Contact Form',
                            'Google Maps Integration',
                            'Social Media Links',
                            'Basic SEO Optimization',
                        ],
                        notIncluded: [
                            'Database',
                            'User Authentication'
                        ]
                    },
                    business: {
                        name: 'Business Website',
                        desc: 'Full-featured website for business',
                        features: [
                            '3-7 Pages Professional Design',
                            'Fully Responsive',
                            'Content Management System (CMS)',
                            'Blog Section',
                            'Multilingual Support',
                            'Full SEO Optimization',
                            'Social Media Integration',
                        ],
                        notIncluded: [
                            'Online Payment System',
                        ]
                    },
                    ecommerce: {
                        name: 'E-Commerce',
                        desc: 'Full-featured online store',
                        features: [
                            'Unlimited Products',
                            'Product Search & Filtering',
                            'Cart & Checkout',
                            'Order Management',
                            'Payment System Integration',
                            'Admin Panel',
                            'Analytics & Reports',
                        ],
                        notIncluded: []
                    }
                }
            },
            faq: {
                title: 'Frequently Asked Questions (FAQ)',
                subtitle: 'Answers to the most common questions about our services',
                questions: [
                    {
                        q: 'How long does it take to build a website?',
                        a: 'Standard "Website Creation" (Landing or Small Business) takes 3-7 days. Larger projects may take 2-3 weeks.'
                    },
                    {
                        q: 'How much does a website cost?',
                        a: 'Prices start from 600 GEL. Landing Page - 600-1,200₾, Business Sites from 1,500₾, E-commerce from 4,000₾. See the services page for full packages.'
                    },
                    {
                        q: 'Does the website come with a warranty?',
                        a: 'Yes, all websites come with 1 month of free technical support. Bug fixes are free.'
                    },
                    {
                        q: 'Is SEO included?',
                        a: 'Yes, basic SEO (fast loading, meta tags, structural data) is included in all packages.'
                    }
                ]
            },
            cta: {
                title: 'Ready to Start?',
                subtitle: 'Let\'s create something special together. We are ready to discuss your ideas.',
                button: 'Contact Us',
            }
        },
        services: {
            hero: {
                badge: '💼 Professional Services',
                title: 'Our Services and',
                highlight: 'Transparent Pricing',
                subtitle: 'Choose the package that suits you. All projects include free consultation and technical support.',
                consultation: 'Free Consultation',
                portfolio: 'View Portfolio'
            },
            title: 'Choose Your Package',
            subtitle: 'All packages include responsive design, SEO optimization, and technical support',
            custom: {
                badge: 'Custom Project',
                title: 'Need a Unique Website?',
                desc: 'We will create a fully custom website tailored to your specific needs',
                button: 'Contact for Price'
            },
            additional: {
                title: 'Additional Services',
                subtitle: 'Everything you need for a successful website',
                items: {
                    domain: { name: 'Domain Registration', desc: '.ge, .com, .net domains', price: '30-70 L/year' },
                    hosting: { name: 'Hosting', desc: 'Fast and secure hosting', price: '120-400 L/year' },
                    support: { name: 'Technical Support', desc: 'Updates and 24/7 support', price: 'Negotiable' }
                }
            },
            process: {
                title: 'How We Work',
                subtitle: 'Simple and transparent process from start to launch',
                steps: {
                    1: { title: 'Consultation', desc: 'Free consultation to understand your needs' },
                    2: { title: 'Design', desc: 'Creating unique design according to your brand' },
                    3: { title: 'Development', desc: 'Building site using latest technologies' },
                    4: { title: 'Testing', desc: 'Full testing on all devices' },
                    5: { title: 'Launch', desc: 'Site launch and free training' },
                    6: { title: 'Support', desc: 'Free technical support' }
                }
            }
        },
        about: {
            hero: {
                title: 'About Us',
                subtitle: 'We are a young and energetic team committed to creating quality websites at affordable prices.'
            },
            mission: {
                title: 'Our Mission',
                text1: 'PixelWeb was created with the idea that professional websites should be accessible to everyone - from small businesses to large corporations.',
                text2: 'We understand that due to inflated prices in Georgia, small and medium businesses cannot afford to have a proper website. Our goal is to change this reality and offer the Georgian market products 30% cheaper than existing prices.',
                whyAffordable: 'Why are our prices affordable?',
                reasons: [
                    'We work without external contractors, which reduces costs',
                    'We use modern tools and frameworks that speed up development',
                    'We have optimized work processes',
                    'Our goal is to help Georgia\'s digital development.'
                ]
            },
            values: {
                title: 'Our Values',
                subtitle: 'Principles and work ethic we never compromise',
                items: [
                    { title: 'We Value Every Client', desc: 'Every project is unique to us. We listen to your needs and try our best to help solve them.' },
                    { title: 'Innovation and Quality', desc: 'We use the latest technologies and best practices to create modern, fast, and user-friendly websites.' },
                    { title: 'Fast Delivery', desc: 'We value and understand the importance of time for our clients and work strictly within pre-agreed deadlines.' },
                    { title: 'Transparency', desc: 'Open and transparent pricing, clear communication, and regular updates on project progress.' }
                ]
            },
            achievements: {
                title: 'Our Achievements',
                items: [
                    { number: '10+', label: 'Completed Projects' },
                    { number: '100%', label: 'Success Rate' },
                    { number: '4+', label: 'Years Experience' }
                ]
            },
            whyUs: {
                title: 'Why Choose PixelWeb?',
                items: [
                    { title: 'Affordable Prices', desc: 'Up to 30% cheaper than market prices while maintaining quality' },
                    { title: 'Fast Delivery', desc: 'Landing Page - 3 days, Corporate Site - 7 days, E-commerce - 14 days (average)' },
                    { title: 'Latest Technologies', desc: 'React, Next.js, Node.js - fast, secure, and latest technologies' },
                    { title: 'Responsive Design', desc: 'Works perfectly on all devices - mobile, tablet, desktop' },
                    { title: 'SEO Optimization', desc: 'Your site will appear on Google and attract more clients' },
                    { title: 'Free Support', desc: 'All projects include free technical support and training' }
                ]
            },
            cta: {
                title: 'Learn More About Us',
                subtitle: 'We have answers to all your questions',
                button: 'Contact Us'
            }
        },
        contact: {
            hero: {
                title: 'Contact Us',
                subtitle: 'We are ready to listen to your request and plan your website. Get a free consultation.'
            },
            info: {
                address: { title: 'Address', value: 'Tbilisi, Georgia', sub: 'We accept orders remotely from all over Georgia' },
                phone: { title: 'Phone', value: '+995 591 410 914', sub: 'Monday - Friday: 10:00 - 21:00' },
                email: { title: 'Email', value: 'pixelweb2026@gmail.com', sub: 'We reply as quickly as possible' }
            },
            form: {
                title: 'Send us a message',
                success: 'Your message has been sent successfully! We will contact you soon.',
                error: 'An error occurred. Please try again or contact us by phone.',
                name: 'Full Name',
                namePlaceholder: 'Your name',
                email: 'Email',
                phone: 'Phone',
                company: 'Company/Business',
                companyPlaceholder: 'Company name',
                service: 'What service are you interested in?',
                selectService: 'Select service',
                budget: 'Your budget',
                selectBudget: 'Select budget',
                message: 'Message',
                messagePlaceholder: 'Tell us about your project...',
                submit: 'Send',
                submitting: 'Sending...'
            },
            services: [
                'Landing Page (600-1,200 ₾)',
                'Business Website (1,500-3,500 ₾)',
                'E-Commerce (4,000-8,000 ₾)',
                'Custom Website (negotiable)',
                'Not sure yet'
            ],
            budgets: ['600 - 1,200 ₾', '1,200 - 2,500 ₾', '2,500 - 4,000 ₾', '4,000 - 6,000 ₾', '6,000 ₾+', 'Negotiable'],
            hours: {
                title: 'Working Hours',
                weekdays: 'Monday - Friday',
                saturday: 'Saturday',
                sunday: 'Sunday',
                closed: 'Closed'
            },
            faq: {
                title: 'FAQ',
                items: [
                    { q: 'How long does it take?', a: 'Landing Page - 3-5 days, Business Site - 7-10 days, E-commerce - 14-21 days' },
                    { q: 'Can I pay in installments?', a: 'Yes, 50% upfront and 50% on launch is possible' },
                    { q: 'Does it include hosting?', a: 'Hosting and domain are separate services (additional cost), we help with setup' }
                ]
            },
            social: 'Connect with us',
            fastResponse: { title: 'Fast Response', text: 'We reply as quickly as possible' },
            map: { title: 'Tbilisi, Georgia', text: 'We work remotely throughout Georgia' }
        },
        portfolio: {
            hero: {
                title: 'Our Portfolio',
                subtitle: 'See our work and be convinced of the quality'
            },
            viewSite: 'View Site',
            technologies: 'Technologies',
            cta: {
                title: 'Like our work?',
                subtitle: 'Let\'s create something special for you too',
                button: 'Start Project'
            },
            categories: {
                all: 'All',
                mobile: 'Mobile Apps',
                education: 'Education',
                ecommerce: 'E-Commerce',
                restaurant: 'Restaurant',
                gaming: 'Gaming',
                portfolio: 'Portfolio'
            },
            stats: {
                projects: 'Completed Projects',
                success: 'Success Rate',
                support: 'Support'
            },
            clickToView: 'Click to view',
            noProjects: 'No projects found in this category'
        },
        blog: {
            hero: {
                title: 'Our Blog',
                subtitle: 'News, tips, and interesting articles about web technologies'
            },
            readMore: 'Read Full Article',
            noArticles: 'No articles available'
        },
        footer: {
            desc: 'Modern web studio focused on quality, speed, and affordability.',
            quickLinks: 'Quick Links',
            contact: 'Contact',
            rights: 'All rights reserved',
            address: 'Tbilisi, Georgia',
            servicesTitle: 'Services',
            call: 'Call',
            whatsappMessage: 'Hello, I am interested in a website on PixelWeb.ge',
            serviceItems: {
                websiteCreation: 'Website Creation',
                price: 'Website Pricing',
                landing: 'Landing Page',
                business: 'Business Website',
                ecommerce: 'E-commerce',
                portfolio: 'Portfolio Website',
                marketplace: 'Marketplace'
            }
        }
    }
}
