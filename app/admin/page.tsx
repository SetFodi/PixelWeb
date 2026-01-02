'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaExternalLinkAlt, FaComments, FaChartLine, FaShieldAlt, FaCog, FaGlobe, FaUsers, FaEnvelope, FaWhatsapp, FaPhone, FaRocket, FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa'
import { motion } from 'framer-motion'

// Admin IPs from environment variable (parsed client-side from API or fallback)
const getAdminIPs = (): string[] => {
  // In client components, we can't access env vars directly
  // We'll check via API or trust the middleware protection
  return []
}

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null)
  const [userIP, setUserIP] = useState<string>('')
  const [currentTime, setCurrentTime] = useState<string>('')

  useEffect(() => {
    // Middleware protects this route, so if we got here, we're an admin
    // Just get IP for display purposes
    const getIP = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json')
        const data = await response.json()
        setUserIP(data.ip)
      } catch (error) {
        console.error('Failed to get IP')
      }
      // If we reached this page, middleware allowed us = we're admin
      setIsAdmin(true)
    }
    getIP()

    // Update time
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleString('ka-GE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Loading state
  if (isAdmin === null) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="text-4xl text-primary-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">იტვირთება...</p>
        </div>
      </div>
    )
  }

  // Access denied
  if (!isAdmin) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaShieldAlt className="text-4xl text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            წვდომა აკრძალულია
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            ეს გვერდი მხოლოდ ადმინისტრატორებისთვისაა ხელმისაწვდომი.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mb-6">
            თქვენი IP: {userIP}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            მთავარ გვერდზე დაბრუნება
          </Link>
        </motion.div>
      </div>
    )
  }

  // Admin Dashboard
  const quickLinks = [
    {
      title: 'WhatsApp Business',
      description: 'მომხმარებლების მესიჯები',
      icon: <FaWhatsapp className="text-2xl" />,
      href: 'https://wa.me/995591410914',
      color: 'from-green-500 to-green-600',
      external: true
    },
    {
      title: 'Vercel Dashboard',
      description: 'საიტის დეპლოიმენტი და ანალიტიკა',
      icon: <FaRocket className="text-2xl" />,
      href: 'https://vercel.com/dashboard',
      color: 'from-gray-800 to-black',
      external: true
    },
    {
      title: 'Google Analytics',
      description: 'ვიზიტორების სტატისტიკა',
      icon: <FaChartLine className="text-2xl" />,
      href: 'https://analytics.google.com/',
      color: 'from-orange-500 to-yellow-500',
      external: true
    },
    {
      title: 'ვიზიტორების სტატისტიკა',
      description: 'საიტის შიდა სტატისტიკა',
      icon: <FaUsers className="text-2xl" />,
      href: '/stats',
      color: 'from-primary-500 to-primary-600',
      external: false
    },
  ]

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'pixelweb2026@gmail.com' },
    { icon: <FaWhatsapp />, label: 'WhatsApp', value: '+995 591 410 914' },
    { icon: <FaPhone />, label: 'Phone', value: '+995 591 410 914' },
  ]

  const sitePages = [
    { name: 'მთავარი', href: '/', status: 'active' },
    { name: 'სერვისები', href: '/services', status: 'active' },
    { name: 'პორტფოლიო', href: '/portfolio', status: 'active' },
    { name: 'კონტაქტი', href: '/contact', status: 'active' },
    { name: 'TikTok Downloader', href: '/tiktok', status: 'active' },
  ]

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <FaShieldAlt className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                ადმინ პანელი
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {currentTime}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span className="inline-flex items-center gap-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium px-3 py-1 rounded-full">
              <FaCheckCircle className="text-xs" />
              ადმინისტრატორი
            </span>
            <span className="text-xs text-gray-400">IP: {userIP}</span>
          </div>
        </motion.div>

        {/* Quick Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            სწრაფი ბმულები
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="group bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {link.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                  {link.title}
                  {link.external && <FaExternalLinkAlt className="text-xs text-gray-400" />}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {link.description}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Site Pages Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaGlobe className="text-primary-600 dark:text-primary-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                საიტის გვერდები
              </h2>
            </div>
            <div className="space-y-3">
              {sitePages.map((page, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                  <Link href={page.href} className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {page.name}
                  </Link>
                  <span className="flex items-center gap-1.5 text-xs">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-green-600 dark:text-green-400">აქტიური</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaCog className="text-primary-600 dark:text-primary-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                საკონტაქტო ინფორმაცია
              </h2>
            </div>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{item.label}</div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Admin Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-6 border border-primary-200 dark:border-primary-800"
        >
          <h3 className="font-semibold text-primary-900 dark:text-primary-100 mb-2">
            📝 შენიშვნები
          </h3>
          <ul className="text-sm text-primary-800 dark:text-primary-200 space-y-1">
            <li>• WhatsApp ღილაკი ჩანს დესკტოპზე, მობილურზე sticky bar-ში</li>
            <li>• ადმინ პანელზე წვდომა მხოლოდ თქვენი IP-დანაა შესაძლებელი</li>
            <li>• სტატისტიკის სანახავად გადადით /stats გვერდზე</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default AdminPage

