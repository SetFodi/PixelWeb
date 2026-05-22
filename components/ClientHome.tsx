'use client'

import { useState, useEffect, useRef, memo } from 'react'
import { motion, useInView, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FaCode, FaRocket, FaMobile, FaCheck, FaArrowRight, FaFileAlt, FaBriefcase, FaShoppingCart, FaMoneyBillWave, FaClock, FaPalette, FaTimes, FaChevronDown, FaGlobe, FaShieldAlt, FaChartLine, FaLaptopCode, FaMousePointer, FaChartBar } from 'react-icons/fa'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'
import PricingCard from '@/components/PricingCard'
import { useLanguage } from '@/context/LanguageContext'

declare global {
  interface Window {
    reportConversion?: (url?: string) => void
  }
}

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}</span>
}

// Animated stat component
const AnimatedStat = ({ number, suffix, label }: { number: number; suffix: string; label: string }) => {
  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1 sm:mb-2">
        <AnimatedCounter end={number} />{suffix}
      </div>
      <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  )
}

const ClientHome = () => {
  const { t } = useLanguage()
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Parallax transforms for various elements
  const bg1X = useTransform(springX, (val) => val * 0.2);
  const bg1Y = useTransform(springY, (val) => val * 0.2);
  const bg2X = useTransform(springX, (val) => val * -0.3);
  const bg2Y = useTransform(springY, (val) => val * -0.3);

  const icon1X = useTransform(springX, (val) => val * 0.5);
  const icon2X = useTransform(springX, (val) => val * -0.4);
  const icon3X = useTransform(springX, (val) => val * 0.3);
  const icon3Y = useTransform(springY, (val) => val * 0.3);
  const icon4X = useTransform(springX, (val) => val * 0.4);
  const icon5X = useTransform(springX, (val) => val * -0.5);

  const phoneY = useTransform(springY, (val) => val * 0.8);
  const phoneRotateX = useTransform(springY, (val) => val * -0.1);
  const phoneRotateY = useTransform(springY, (val) => val * 0.1);

  const macY = useTransform(springY, (val) => val * -0.6);
  const macRotateX = useTransform(springY, (val) => val * 0.05);
  const macRotateY = useTransform(springX, (val) => val * -0.05);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate position relative to center
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 20);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 20);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const features = [
    {
      icon: <FaMoneyBillWave className="text-4xl text-primary-600 dark:text-primary-400" />,
      title: t.home.features.items[0].title,
      description: t.home.features.items[0].desc
    },
    {
      icon: <FaClock className="text-4xl text-primary-600 dark:text-primary-400" />,
      title: t.home.features.items[1].title,
      description: t.home.features.items[1].desc
    },
    {
      icon: <FaRocket className="text-4xl text-primary-600 dark:text-primary-400" />,
      title: t.home.features.items[2].title,
      description: t.home.features.items[2].desc
    },
    {
      icon: <FaCode className="text-4xl text-primary-600 dark:text-primary-400" />,
      title: t.home.features.items[3].title,
      description: t.home.features.items[3].desc
    },
    {
      icon: <FaMobile className="text-4xl text-primary-600 dark:text-primary-400" />,
      title: t.home.features.items[4].title,
      description: t.home.features.items[4].desc
    },
    {
      icon: <FaPalette className="text-4xl text-primary-600 dark:text-primary-400" />,
      title: t.home.features.items[5].title,
      description: t.home.features.items[5].desc
    }
  ]

  const stats = [
    { number: 30, suffix: '%', label: t.hero.stats.cheaper },
    { number: 11, suffix: '+', label: t.hero.stats.completed },
    { number: 100, suffix: '%', label: t.hero.stats.satisfied }
  ]

  const services = [
    {
      icon: <FaFileAlt />,
      ...t.home.pricing.packages.landing,
      description: t.home.pricing.packages.landing.desc,
      price: '600-1,200',
      duration: `3-5 ${t.home.pricing.duration}`,
      marketPrice: '1,500-2,500',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: <FaBriefcase />,
      ...t.home.pricing.packages.business,
      description: t.home.pricing.packages.business.desc,
      price: '1,500+',
      duration: `7-10 ${t.home.pricing.duration}`,
      marketPrice: '3,000-5,000',
      popular: true,
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50 dark:bg-primary-900/20'
    },
    {
      icon: <FaShoppingCart />,
      ...t.home.pricing.packages.ecommerce,
      description: t.home.pricing.packages.ecommerce.desc,
      price: '4,000+',
      duration: `14-21 ${t.home.pricing.duration}`,
      marketPrice: '6,000-10,000+',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
  ]

  const faqs = t.home.faq.questions

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-white dark:bg-transparent overflow-hidden transition-colors duration-300">
          {/* Enhanced Animated Background Mesh */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <motion.div
              style={{
                x: bg1X,
                y: bg1Y,
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 45, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-1/4 -left-1/4 w-full h-full bg-gradient-to-br from-primary-200/40 to-transparent dark:from-primary-900/20 rounded-full blur-[120px] will-change-transform"
            />
            <motion.div
              style={{
                x: bg2X,
                y: bg2Y,
              }}
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -45, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-gradient-to-tl from-accent-200/30 to-transparent dark:from-accent-900/10 rounded-full blur-[120px] will-change-transform"
            />
          </div>

          {/* Floating Decorative Icons - More Business Suited & Reactive */}
          <motion.div
            className="absolute top-20 left-[5%] text-4xl text-primary-500/40 dark:text-primary-400/30 hidden lg:block will-change-transform"
            style={{ x: icon1X }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaGlobe />
          </motion.div>
          <motion.div
            className="absolute top-32 right-[8%] text-4xl text-accent-500/40 dark:text-accent-400/30 hidden lg:block will-change-transform"
            style={{ x: icon2X }}
            animate={{
              y: [0, 15, 0],
              rotate: [0, -10, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <FaChartLine />
          </motion.div>
          <motion.div
            className="absolute top-48 left-[10%] text-4xl text-primary-400/40 dark:text-primary-300/20 hidden lg:block will-change-transform"
            style={{
              x: icon3X,
              y: icon3Y
            }}
            animate={{
              y: [0, 12, 0],
              x: [0, 5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <FaMousePointer />
          </motion.div>
          <motion.div
            className="absolute bottom-32 right-[12%] text-4xl text-gray-400/30 dark:text-white/20 hidden lg:block will-change-transform"
            style={{ x: icon4X }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
            <FaLaptopCode />
          </motion.div>
          <motion.div
            className="absolute bottom-48 left-[7%] text-4xl text-green-500/30 dark:text-green-400/20 hidden lg:block will-change-transform"
            style={{ x: icon5X }}
            animate={{
              y: [0, 10, 0],
              x: [0, -5, 0],
            }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <FaShieldAlt />
          </motion.div>

          {/* Floating iPhone Mockup - Ultra-Realistic & Polished */}
          <motion.div
            className="absolute top-32 right-[6%] hidden xl:block pointer-events-none will-change-transform"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            style={{
              y: phoneY,
              rotateX: phoneRotateX,
              rotateY: phoneRotateY,
            }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="relative w-[145px] h-[290px] bg-[#08090a] rounded-[2.2rem] p-[5px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] ring-1 ring-white/10 overflow-hidden"
              style={{ perspective: "1000px" }}
            >
              {/* Inner Bezels */}
              <div className="absolute inset-0 border-[2px] border-[#1a1c1e] rounded-[2.2rem] z-10 pointer-events-none"></div>

              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-11 h-3.5 bg-black rounded-full z-30 shadow-inner"></div>

              {/* Screen Content */}
              <div className="h-full bg-white dark:bg-gray-900 rounded-[1.85rem] overflow-hidden flex flex-col relative z-20">
                {/* Header */}
                <div className="pt-5 px-3 flex justify-between items-center mb-3">
                  <div className="text-[7px] font-black text-primary-600 tracking-tighter">PixelWeb</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_5px_rgba(251,191,36,0.5)]"></div>
                    <div className="flex flex-col gap-0.5">
                      <div className="w-2.5 h-[1px] bg-gray-400 rounded-full"></div>
                      <div className="w-2.5 h-[1px] bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Mobile Hero */}
                <div className="px-2 text-center flex-1">
                  <div className="text-[10px] font-black text-gray-900 dark:text-white leading-[1.1] mb-0.5 tracking-tight">{t.services.hero.badge}</div>
                  <div className="text-[10px] font-black text-primary-600 leading-[1.1] mb-3 tracking-tight">{t.hero.stats.cheaper}</div>

                  {/* Visual Content Placeholder */}
                  <div className="mx-auto w-[90%] h-14 bg-gradient-to-br from-primary-50 to-indigo-50 dark:from-gray-800 dark:to-primary-900/20 rounded-xl border border-primary-100/50 dark:border-primary-800/50 mb-3 flex items-center justify-center overflow-hidden">
                    <FaRocket className="text-primary-500 text-[10px]" />
                  </div>

                  {/* Real Stats Horizontal */}
                  <div className="grid grid-cols-2 gap-1 mb-3 px-1">
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-1.5 rounded-lg border border-gray-100 dark:border-gray-800">
                      <div className="text-[9px] font-black text-primary-600">30%</div>
                      <div className="text-[4.5px] text-gray-400 uppercase font-bold tracking-tighter">{t.hero.stats.cheaper}</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-1.5 rounded-lg border border-gray-100 dark:border-gray-800">
                      <div className="text-[9px] font-black text-primary-600">11+</div>
                      <div className="text-[4.5px] text-gray-400 uppercase font-bold tracking-tighter">{t.hero.stats.completed}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-1 px-1">
                    <div className="bg-primary-600 h-4 w-full rounded-md flex items-center justify-center shadow-sm shadow-primary-600/20">
                      <span className="text-[5px] text-white font-black uppercase tracking-wider">{t.nav.services} →</span>
                    </div>
                    <div className="border border-primary-600 h-4 w-full rounded-md flex items-center justify-center">
                      <span className="text-[5px] text-primary-600 font-black uppercase tracking-wider">{t.nav.portfolio}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation / Contact Bar */}
                <div className="mt-auto p-2 flex gap-1.5 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 relative z-30">
                  <div className="flex-1 bg-[#25D366] h-5 rounded-lg flex items-center justify-center gap-1 shadow-sm shadow-green-500/20">
                    <span className="text-[5px] text-white font-black">WhatsApp</span>
                  </div>
                  <div className="flex-1 bg-primary-600 h-5 rounded-lg flex items-center justify-center gap-1 shadow-sm shadow-primary-600/20">
                    <span className="text-[5px] text-white font-black">{t.nav.contact}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating MacBook Mockup - Refined & Scaled */}
          <motion.div
            className="absolute bottom-32 left-[5%] hidden xl:block pointer-events-none will-change-transform"
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            style={{
              y: macY,
              rotateX: macRotateX,
              rotateY: macRotateY,
            }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="relative"
              style={{ perspective: "1000px" }}
            >
              {/* MacBook Screen - Scaled Down */}
              <div className="relative w-[280px] bg-[#08090a] rounded-xl p-[5px] shadow-2xl border border-white/10 overflow-hidden z-20">
                {/* Screen Content */}
                <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden flex flex-col">
                  {/* Browser Header */}
                  <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 flex items-center gap-1 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="flex-1 bg-white dark:bg-gray-700 rounded-sm text-[8px] py-0.5 px-2 text-gray-400 flex items-center gap-1 ml-2">
                      <span className="text-[#27c93f] text-[7px]">🔒</span> pixelweb.ge
                    </div>
                  </div>

                  {/* Website Content with Real Text */}
                  <div className="p-3 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 h-40">
                    {/* Real Navbar */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-[11px] font-black text-primary-600 tracking-tighter">PixelWeb</div>
                      <div className="flex gap-2 text-[6px] font-bold text-gray-400">
                        <span>{t.nav.home}</span>
                        <span>{t.nav.services}</span>
                        <span>{t.nav.portfolio}</span>
                      </div>
                    </div>

                    {/* Hero Section */}
                    <div className="text-center mt-4">
                      <div className="text-[11px] font-black text-gray-900 dark:text-white leading-tight">{t.services.hero.badge}</div>
                      <div className="text-[11px] font-black text-primary-600 mb-3">{t.hero.stats.cheaper}</div>

                      {/* Real Buttons */}
                      <div className="flex gap-2 justify-center mt-4">
                        <div className="bg-primary-600 h-4 px-3 rounded-md flex items-center shadow-sm shadow-primary-600/20">
                          <span className="text-[5px] text-white font-black uppercase tracking-wider">{t.home.pricing.viewAll}</span>
                        </div>
                        <div className="border border-primary-600 h-4 px-3 rounded-md flex items-center">
                          <span className="text-[5px] text-primary-600 font-black uppercase tracking-wider">{t.services.hero.portfolio}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* WebCam */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-0.5 h-0.5 bg-white/20 rounded-full"></div>
              </div>

              {/* MacBook Body - Better Perspective/Visibility */}
              <div className="relative w-[320px] -ml-[20px] z-10">
                {/* Main Base */}
                <div className="h-[6px] bg-[#d1d5db] dark:bg-[#1f2123] rounded-t-sm rounded-b-lg shadow-xl relative overflow-hidden">
                  {/* Lip / Indent */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-1 bg-black/10 rounded-b-full"></div>
                  {/* Top Surface Shine */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                </div>
                {/* Side Perspective Thickness */}
                <div className="h-[2px] bg-[#9ca3af] dark:bg-[#111213] mx-1 rounded-b-lg"></div>
              </div>
            </motion.div>
          </motion.div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                {t.hero.title}
                <span className="block text-primary-600 dark:text-primary-400 mt-2">{t.hero.titleHighlight}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link
                  href="/saitis-damzadeba"
                  className="bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-primary-700 transition-all hover:shadow-xl transform hover:-translate-y-1 font-semibold text-base sm:text-lg inline-flex items-center justify-center"
                >
                  {t.footer.serviceItems.websiteCreation}
                  <FaArrowRight className="ml-2" />
                </Link>
                <Link
                  href="/portfolio"
                  className="bg-white text-primary-600 border-2 border-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-primary-50 transition-all hover:shadow-xl transform hover:-translate-y-1 font-semibold text-base sm:text-lg"
                >
                  {t.services.hero.portfolio}
                </Link>
              </div>
            </motion.div>

            {/* Stats with animated counters */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-10 sm:mt-12 md:mt-16 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <AnimatedStat key={index} number={stat.number} suffix={stat.suffix} label={stat.label} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section - Enhanced */}
        <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-900/50 transition-colors duration-300 relative overflow-hidden border-t border-gray-100 dark:border-white/5">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100 dark:bg-accent-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-50 pointer-events-none"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
                {t.home.features.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                {t.home.features.title}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t.home.features.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon with gradient background */}
                  <div className="relative mb-4 sm:mb-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="relative text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="relative text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Preview Section - Matching Site Theme */}
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-transparent relative overflow-hidden transition-colors duration-300 border-t border-gray-100 dark:border-white/5">
          {/* Background Decoration - matching other sections */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100 dark:bg-accent-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-50 pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
                {t.home.pricing.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {t.home.pricing.title}
                <span className="text-primary-600 dark:text-primary-400"> {t.home.pricing.titleHighlight}</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t.home.pricing.subtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <PricingCard key={index} service={service} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-10 sm:mt-12"
            >
              <Link
                href="/saitis-damzadeba-fasi"
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-lg hover:text-primary-700 dark:hover:text-primary-300 group"
              >
                {t.home.pricing.viewAll}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section (accordion) */}
        <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-900/50 transition-colors duration-300 border-t border-gray-100 dark:border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                {t.home.faq.title}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
                {t.home.faq.subtitle}
              </p>
            </div>
            <div className="max-w-4xl mx-auto divide-y divide-gray-200 dark:divide-gray-800 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900 shadow-lg">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index
                return (
                  <div key={index} className="group">
                    <button
                      className="w-full flex items-center justify-between text-left px-5 sm:px-6 py-4 sm:py-5 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                    >
                      <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                        {item.q}
                      </span>
                      <FaChevronDown
                        className={`text-gray-500 dark:text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                          }`}
                        aria-hidden="true"
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="px-5 sm:px-6"
                        >
                          <div className="pb-5 sm:pb-6 text-gray-600 dark:text-gray-300">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
            <div className="text-center pt-8">
              <a href="/contact" className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all font-semibold">
                {t.home.cta.button}
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300 relative overflow-hidden border-t border-primary-500/20 dark:border-white/5">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl will-change-transform"
              animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl will-change-transform"
              animate={{ y: [0, -20, 0], x: [0, -30, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.reportConversion) {
                      window.reportConversion();
                    }
                  }}
                  className="group bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-gray-100 transition-all hover:shadow-xl hover:shadow-white/20 transform hover:-translate-y-1 font-semibold text-base sm:text-lg inline-flex items-center justify-center gap-2"
                >
                  {t.home.cta.button}
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/995591410914"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.reportConversion) {
                      window.reportConversion();
                    }
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-green-600 transition-all hover:shadow-xl hover:shadow-green-500/20 transform hover:-translate-y-1 font-semibold text-base sm:text-lg inline-flex items-center justify-center gap-2"
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
      </div >
    </PageTransition >
  )
}

export default ClientHome
