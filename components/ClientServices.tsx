'use client'

import Link from 'next/link'
import { FaCheck, FaTimes, FaRocket, FaShoppingCart, FaBriefcase, FaFileAlt, FaArrowRight, FaGlobe, FaServer, FaHeadset, FaLightbulb, FaPencilRuler, FaCode, FaCogs, FaCheckCircle, FaPlay } from 'react-icons/fa'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import PricingCard from '@/components/PricingCard'
import { useLanguage } from '@/context/LanguageContext'

interface Service {
  icon: JSX.Element;
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  notIncluded: string[];
  marketPrice?: string;
  popular?: boolean;
  color: string;
  bgColor: string;
}

const ClientServices = () => {
  const { t } = useLanguage()

  const services: Service[] = [
    {
      icon: <FaFileAlt />,
      ...t.home.pricing.packages.landing,
      description: t.home.pricing.packages.landing.desc,
      price: '400-700',
      duration: `3-5 ${t.home.pricing.duration}`,
      marketPrice: '1,000-2,000',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: <FaBriefcase />,
      ...t.home.pricing.packages.business,
      description: t.home.pricing.packages.business.desc,
      price: '1,000+',
      duration: `7-10 ${t.home.pricing.duration}`,
      marketPrice: '2,000-4,000',
      popular: true,
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50 dark:bg-primary-900/20'
    },
    {
      icon: <FaShoppingCart />,
      ...t.home.pricing.packages.ecommerce,
      description: t.home.pricing.packages.ecommerce.desc,
      price: '3,000+',
      duration: `14-21 ${t.home.pricing.duration}`,
      marketPrice: '4,000-6,000+',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
  ]


  const additionalServices = [
    {
      icon: <FaGlobe className="text-2xl" />,
      name: t.services.additional.items.domain.name,
      price: t.services.additional.items.domain.price,
      description: t.services.additional.items.domain.desc
    },
    {
      icon: <FaServer className="text-2xl" />,
      name: t.services.additional.items.hosting.name,
      price: t.services.additional.items.hosting.price,
      description: t.services.additional.items.hosting.desc
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      name: t.services.additional.items.support.name,
      price: t.services.additional.items.support.price,
      description: t.services.additional.items.support.desc
    }
  ]

  const process = [
    {
      icon: <FaLightbulb />,
      step: '01',
      title: t.services.process.steps[1].title,
      description: t.services.process.steps[1].desc
    },
    {
      icon: <FaPencilRuler />,
      step: '02',
      title: t.services.process.steps[2].title,
      description: t.services.process.steps[2].desc
    },
    {
      icon: <FaCode />,
      step: '03',
      title: t.services.process.steps[3].title,
      description: t.services.process.steps[3].desc
    },
    {
      icon: <FaCogs />,
      step: '04',
      title: t.services.process.steps[4].title,
      description: t.services.process.steps[4].desc
    },
    {
      icon: <FaCheckCircle />,
      step: '05',
      title: t.services.process.steps[5].title,
      description: t.services.process.steps[5].desc
    },
    {
      icon: <FaHeadset />,
      step: '06',
      title: t.services.process.steps[6].title,
      description: t.services.process.steps[6].desc
    }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section - Theme Aware */}
        <section className="relative bg-gradient-to-br from-gray-50 via-primary-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-20 sm:py-28 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 dark:bg-primary-500/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-primary-100 dark:bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 text-primary-700 dark:text-white border border-primary-200 dark:border-white/20"
              >
                {t.services.hero.badge}
              </motion.span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                {t.services.hero.title}
                <span className="block mt-2 bg-gradient-to-r from-primary-600 via-primary-500 to-cyan-500 bg-clip-text text-transparent">
                  {t.services.hero.highlight}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                {t.services.hero.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-all hover:scale-105"
                >
                  {t.services.hero.consultation}
                  <FaArrowRight />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 bg-white dark:bg-white/10 backdrop-blur-sm text-gray-800 dark:text-white px-6 py-3 rounded-xl font-semibold border border-gray-200 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-white/20 transition-all"
                >
                  <FaPlay className="text-sm" />
                  {t.services.hero.portfolio}
                </Link>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mt-16"
            >
              {[
                { value: '30%', label: t.hero.stats.cheaper },
                { value: '3-21', label: t.hero.stats.delivery },
                { value: '100%', label: t.hero.stats.satisfaction }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards - Clean Modern Design */}
        <section className="py-16 sm:py-24 bg-gray-50 dark:bg-transparent border-t border-gray-100 dark:border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t.services.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t.services.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <PricingCard key={index} service={service} index={index} />
              ))}
            </div>

            {/* Custom Project Banner - Theme Aware */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 max-w-4xl mx-auto"
            >
              <div className="relative bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 sm:p-10 overflow-hidden border border-primary-100 dark:border-gray-700">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-white/10 rounded-full px-4 py-1.5 mb-4">
                      <FaRocket className="text-primary-600 dark:text-primary-400" />
                      <span className="text-sm text-primary-700 dark:text-white">{t.services.custom.badge}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {t.services.custom.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t.services.custom.desc}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary-600 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 dark:hover:bg-gray-100 transition-all hover:scale-105 whitespace-nowrap"
                  >
                    {t.services.custom.button}
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 sm:py-20 bg-white dark:bg-gray-900/50 border-t border-gray-100 dark:border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t.services.additional.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t.services.additional.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{service.description}</p>
                  <div className="text-xl font-bold text-primary-600 dark:text-primary-400">{service.price}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Timeline Style */}
        <section className="py-16 sm:py-24 bg-gray-50 dark:bg-transparent overflow-hidden border-t border-gray-100 dark:border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t.services.process.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t.services.process.subtitle}
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {process.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                      {/* Step Number */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        {item.step}
                      </div>

                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20 flex items-center justify-center text-primary-600 dark:text-primary-400 text-2xl mb-4">
                        {item.icon}
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden border-t border-primary-500/20 dark:border-white/5">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"
              animate={{ y: [0, -20, 0], x: [0, -30, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-block mb-6"
              >
                <span className="text-5xl">🚀</span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                {t.home.cta.title}
              </h2>
              <p className="text-lg sm:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                {t.home.cta.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:shadow-xl hover:scale-105"
                >
                  {t.home.cta.button}
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/995591410914"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all hover:shadow-xl hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

export default ClientServices

