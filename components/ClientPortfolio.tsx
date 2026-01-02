'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ImageSlider from '@/components/ImageSlider'
import ProjectModal from '@/components/ProjectModal'
import PageTransition from '@/components/PageTransition'
import { useLanguage } from '@/context/LanguageContext'

const ClientPortfolio = () => {
  const { t, language } = useLanguage()
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      id: 11,
      title: { ka: 'DecoConcept - საღებავებისა და მოსაპირკეთებელი მასალების მაღაზია', en: 'DecoConcept - Paint & Finishing Materials Store' },
      category: 'ecommerce',
      images: ['/images/decoconcept1.png', '/images/decoconcept2.png', '/images/decoconcept3.png'],
      description: { ka: 'საღებავებისა და მოსაპირკეთებელი მასალების პრემიუმ მაღაზიის ვებსაიტი საქართველოში.', en: 'Premium paint and finishing materials store website in Georgia.' },
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      features: { ka: ['პროდუქციის კატალოგი', 'თანამედროვე დიზაინი', 'სრულიად რესპონსიული', 'SEO ოპტიმიზაცია'], en: ['Product Catalog', 'Modern Design', 'Fully Responsive', 'SEO Optimized'] },
      liveUrl: 'https://decoconcept.ge'
    },
    {
      id: 1,
      title: { ka: 'AndCook - რეცეპტების აპლიკაცია', en: 'AndCook - Recipe App' },
      category: 'mobile',
      images: ['/images/AndCook.jpg', '/images/AndCook2.jpg'],
      description: { ka: 'თანამედროვე მობილური აპლიკაცია კულინარიული რეცეპტების აღმოსაჩენად და გაზიარებისთვის', en: 'Modern mobile app for discovering and sharing culinary recipes' },
      technologies: ['React Native', 'Firebase', 'Node.js'],
      features: { ka: ['რეცეპტების ბაზა', 'ძიების ფუნქცია', 'სოციალური ფუნქციები', 'ოფლაინ რეჟიმი'], en: ['Recipe Database', 'Search Function', 'Social Features', 'Offline Mode'] },
      liveUrl: 'https://andcook.vercel.app'
    },
    {
      id: 2,
      title: { ka: 'AndScore - სპორტული აპლიკაცია', en: 'AndScore - Sports App' },
      category: 'mobile',
      images: ['/images/AndScore.jpg', '/images/AndScore2.jpg'],
      description: { ka: 'ფუნქციური სპორტული აპლიკაცია ლაივ სქორების და სტატისტიკის თვალთვალისთვის', en: 'Functional sports app for live scores and statistics tracking' },
      technologies: ['React Native', 'REST API', 'Redux'],
      features: { ka: ['ლაივ სქორები', 'სტატისტიკა', 'შეტყობინებები', 'ფავორიტების სისტემა'], en: ['Live Scores', 'Statistics', 'Notifications', 'Favorites System'] },
      liveUrl: 'https://andscore.site'
    },
    {
      id: 3,
      title: { ka: 'AndCode - საგანმანათლებო პლატფორმა', en: 'AndCode - Educational Platform' },
      category: 'education',
      images: ['/images/andcode.jpg', '/images/andcode2.jpg'],
      description: { ka: 'ინტერაქტიული საგანმანათლებო პლატფორმა პროგრამირების შესასწავლად', en: 'Interactive educational platform for learning programming' },
      technologies: ['Next.js', 'TypeScript', 'MongoDB'],
      features: { ka: ['ვიდეო გაკვეთილები', 'კოდის რედაქტორი', 'ტესტები', 'სერტიფიკატები'], en: ['Video Lessons', 'Code Editor', 'Tests', 'Certificates'] },
      liveUrl: 'https://andcode.vercel.app'
    },
    {
      id: 4,
      title: { ka: 'AndWatch - ფილმების, სერიალების და ანიმეების ტრეკინგი', en: 'AndWatch - Movies, Series & Anime Tracking' },
      category: 'mobile',
      images: ['/images/andwatch.jpg', '/images/Andwatch2.jpg'],
      description: { ka: 'ფილმების, სერიალების, ანიმაციური ფილმებისა და ანიმეების ტრეკინგი, API', en: 'Movies, series, animated films and anime tracking with API' },
      technologies: ['React & Next.Js', 'TMDB, MyAnimeList API', 'MongoDB'],
      features: { ka: ['ტრეკინგი', 'შეფასება', 'პროფილში შენახვა', 'ინფორმაციის გაგება'], en: ['Tracking', 'Rating', 'Profile Saving', 'Information Access'] },
      liveUrl: 'https://andwatch.vercel.app'
    },
    {
      id: 5,
      title: { ka: 'TypingY - ტექსტის სისწრაფის (MonkeyType და ა.შ)', en: 'TypingY - Typing Speed Test (MonkeyType style)' },
      category: 'education',
      images: ['/images/TypingY.png'],
      description: { ka: 'საგანმანათლებო ვებ აპლიკაცია ბეჭდვის სისწრაფისა და სიზუსტის გასაუმჯობესებლად', en: 'Educational web app for improving typing speed and accuracy' },
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      features: { ka: ['სავარჯიშოები', 'სტატისტიკა', 'რეიტინგი', 'მრავალენოვანი'], en: ['Exercises', 'Statistics', 'Leaderboard', 'Multilingual'] },
      liveUrl: 'https://typingy.live'
    },
    {
      id: 6,
      title: { ka: 'Furniture Store - ავეჯის ონლაინ მაღაზია', en: 'Furniture Store - Online Furniture Shop' },
      category: 'ecommerce',
      images: ['/images/Furniture1.jpg', '/images/Furniture2.jpg', '/images/Furniture3.jpg'],
      description: { ka: 'თანამედროვე E-commerce პლატფორმა ავეჯის გაყიდვისთვის', en: 'Modern E-commerce platform for furniture sales' },
      technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
      features: { ka: ['პროდუქტების კატალოგი', 'გადახდის სისტემა', '3D პრევიუ', 'ინვენტარის მართვა'], en: ['Product Catalog', 'Payment System', '3D Preview', 'Inventory Management'] }
    },
    {
      id: 7,
      title: { ka: 'Restaurant Website - რესტორნის ვებსაიტი', en: 'Restaurant Website' },
      category: 'restaurant',
      images: ['/images/Restauran1.jpg', '/images/Restauran2.jpg'],
      description: { ka: 'ელეგანტური ვებსაიტი რესტორნისთვის თანამედროვე დიზაინით და ფუნქციონალით', en: 'Elegant restaurant website with modern design and functionality' },
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      features: { ka: ['მენიუს გალერეა', 'დაჯავშნის სისტემა', 'რესპონსიული დიზაინი', 'ფოტო გალერეა'], en: ['Menu Gallery', 'Reservation System', 'Responsive Design', 'Photo Gallery'] }
    },
    {
      id: 8,
      title: { ka: 'FIB Unit - GTA 5 RP Server', en: 'FIB Unit - GTA 5 RP Server' },
      category: 'gaming',
      images: ['/images/FIB.jpg', '/images/FIB2.jpg'],
      description: { ka: 'ვებსაიტი GTA 5 Roleplay სერვერისთვის - რეკრუტმენტის და ინფორმაციის სისტემით', en: 'Website for GTA 5 Roleplay server - with recruitment and info system' },
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Discord Integration'],
      features: { ka: ['სერვერის ინფორმაცია', 'რეკრუტმენტის სისტემა', 'Discord ინტეგრაცია', 'თამაშის წესები'], en: ['Server Info', 'Recruitment System', 'Discord Integration', 'Game Rules'] },
      liveUrl: 'https://fib-unit-rp.vercel.app'
    },
    {
      id: 9,
      title: { ka: 'CaseDelight - მოდერნ თემატიკის რესტორანი', en: 'CaseDelight - Modern Theme Restaurant' },
      category: 'restaurant',
      images: ['/images/casedelight.jpg', '/images/casedelight2.jpg', '/images/casedelight3.jpg', '/images/casedelight4.jpg', '/images/casedelight5.jpg'],
      description: { ka: 'თანამედროვე რესტორნის ვებსაიტი.', en: 'Modern restaurant website.' },
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      features: { ka: ['პროდუქტების კატალოგი', 'მობილურზე ოპტიმიზაცია', 'სწრაფი ჩატვირთვა'], en: ['Product Catalog', 'Mobile Optimized', 'Fast Loading'] }
    },
    {
      id: 10,
      title: { ka: 'Demo Ecommerce Website - E-commerce პლატფორმა (ტექნიკის მაღაზია)', en: 'Demo Ecommerce Website - E-commerce Platform (Tech Store)' },
      category: 'ecommerce',
      images: ['/images/ecom1.png', '/images/ecom2.png', '/images/ecom3.png'],
      description: { ka: 'თანამედროვე E-commerce პლატფორმა ტექნიკის მაღაზიისთვის', en: 'Modern E-commerce platform for tech store' },
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      features: { ka: ['პროდუქტების კატალოგი', 'მობილურზე ოპტიმიზაცია', 'სწრაფი ჩატვირთვა'], en: ['Product Catalog', 'Mobile Optimized', 'Fast Loading'] },
      liveUrl: 'https://ecomm-flax-ten.vercel.app/'
    }
  ]

  const handleProjectClick = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const categories = [
    { id: 'all', label: t.portfolio.categories.all },
    { id: 'mobile', label: t.portfolio.categories.mobile },
    { id: 'education', label: t.portfolio.categories.education },
    { id: 'ecommerce', label: t.portfolio.categories.ecommerce },
    { id: 'restaurant', label: t.portfolio.categories.restaurant },
    { id: 'gaming', label: t.portfolio.categories.gaming },
    { id: 'portfolio', label: t.portfolio.categories.portfolio }
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-700 dark:from-gray-950 dark:to-gray-900 text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                {t.portfolio.hero.title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-primary-100 dark:text-gray-300">
                {t.portfolio.hero.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 sm:py-10 md:py-12 bg-transparent border-none">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1 sm:mb-2">11+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">{t.portfolio.stats.projects}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1 sm:mb-2">100%</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">{t.portfolio.stats.success}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">{t.portfolio.stats.support}</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-4 sm:py-6 md:py-8 bg-transparent transition-all duration-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg font-medium transition-all text-sm sm:text-base ${filter === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-white/10 backdrop-blur-sm border border-transparent'
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleProjectClick(project)}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 cursor-pointer border border-gray-100 dark:border-gray-800"
                >
                  {/* Image with Slider */}
                  <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                    <ImageSlider images={project.images} alt={project.title[language]} />
                    {/* View hint overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 z-20 pointer-events-none">
                      <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300 text-white text-lg font-semibold">
                        {t.portfolio.clickToView}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                      {project.title[language]}
                    </h3>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm line-clamp-2">
                      {project.description[language]}
                    </p>

                    {/* Features */}
                    <div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.features[language].slice(0, 3).map((feature: string, i: number) => (
                          <span key={i} className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                            <span className="text-green-500 dark:text-green-400 mr-1">✓</span> {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">{t.portfolio.noProjects}</p>
              </div>
            )}
          </div>
        </section>

        {/* Project Modal */}
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={selectedProject || projects[0]}
        />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-gray-900 dark:to-gray-800 text-white border-t border-primary-500/20 dark:border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {t.portfolio.cta.title}
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                {t.portfolio.cta.subtitle}
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
              >
                {t.portfolio.cta.button}
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition >
  )
}

export default ClientPortfolio

