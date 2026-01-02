'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import PageTransition from '@/components/PageTransition'
import { useLanguage } from '@/context/LanguageContext'

declare global {
  interface Window {
    reportConversion?: (url?: string) => void
  }
}

const ClientContact = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        })

        if (typeof window !== 'undefined' && window.reportConversion) {
          window.reportConversion();
        }

        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-primary-600 dark:text-primary-400" />,
      title: t.contact.info.address.title,
      info: t.contact.info.address.value,
      subInfo: t.contact.info.address.sub
    },
    {
      icon: <FaPhone className="text-3xl text-primary-600 dark:text-primary-400" />,
      title: t.contact.info.phone.title,
      info: t.contact.info.phone.value,
      subInfo: t.contact.info.phone.sub
    },
    {
      icon: <FaEnvelope className="text-3xl text-primary-600 dark:text-primary-400" />,
      title: t.contact.info.email.title,
      info: t.contact.info.email.value,
      subInfo: t.contact.info.email.sub
    }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-700 dark:from-gray-950 dark:to-gray-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {t.contact.hero.title}
              </h1>
              <p className="text-xl text-primary-100 dark:text-gray-300">
                {t.contact.hero.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-gray-50 dark:bg-transparent transition-colors duration-300 border-b border-gray-100 dark:border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto -mt-10 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 sm:p-10 border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-800"
              >
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex-1 w-full text-center px-4 pt-6 md:pt-0 first:pt-0">
                    <div className="flex justify-center mb-4 text-primary-600 dark:text-primary-400 transform scale-110">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">{item.info}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{item.subInfo}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content - Form and Info */}
        <section className="py-20 bg-gray-50 dark:bg-transparent transition-colors duration-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800"
                >
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    {t.contact.form.title}
                  </h2>

                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg text-green-700 dark:text-green-300 flex items-center">
                      <span className="text-2xl mr-3">✅</span>
                      <span>{t.contact.form.success}</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg text-red-700 dark:text-red-300 flex items-center">
                      <span className="text-2xl mr-3">❌</span>
                      <span>{t.contact.form.error}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {t.contact.form.name} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-600"
                          placeholder={t.contact.form.namePlaceholder}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {t.contact.form.email} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-600"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {t.contact.form.phone} *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-600"
                          placeholder="+995 XXX XX XX XX"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {t.contact.form.company}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-600"
                          placeholder={t.contact.form.companyPlaceholder}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {t.contact.form.service} *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        >
                          <option value="">{t.contact.form.selectService}</option>
                          {t.contact.services.map((service: string, index: number) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {t.contact.form.budget}
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        >
                          <option value="">{t.contact.form.selectBudget}</option>
                          {t.contact.budgets.map((budget: string, index: number) => (
                            <option key={index} value={budget}>
                              {budget}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {t.contact.form.message} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-600"
                        placeholder={t.contact.form.messagePlaceholder}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          {t.contact.form.submitting}
                        </>
                      ) : (
                        <>
                          {t.contact.form.submit}
                          <FaPaperPlane className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {/* Working Hours */}
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-800">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.contact.hours.title}</h3>
                    <div className="space-y-3 text-gray-600 dark:text-gray-300">
                      <div className="flex justify-between">
                        <span>{t.contact.hours.weekdays}</span>
                        <span className="font-semibold">09:00 - 21:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t.contact.hours.saturday}</span>
                        <span className="font-semibold">11:00 - 19:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t.contact.hours.sunday}</span>
                        <span className="font-semibold text-red-500">{t.contact.hours.closed}</span>
                      </div>
                    </div>
                  </div>

                  {/* FAQ */}
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-primary-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.contact.faq.title}</h3>
                    <div className="space-y-4">
                      {t.contact.faq.items.map((item: { q: string; a: string }, index: number) => (
                        <div key={index}>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-1">{item.q}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{item.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-800">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t.contact.social}</h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all"
                      >
                        <FaFacebook size={24} />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all"
                      >
                        <FaInstagram size={24} />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all"
                      >
                        <FaLinkedin size={24} />
                      </a>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-2">⚡</div>
                    <h3 className="text-xl font-bold mb-2">{t.contact.fastResponse.title}</h3>
                    <p className="text-primary-100">
                      {t.contact.fastResponse.text}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section - Google Maps Embed */}
        <section className="py-0">
          <div className="w-full h-96 bg-gray-200 relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190515.91556052843!2d44.68385575!3d41.7151377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2sTbilisi%2C%20Georgia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PixelWeb Location - Tbilisi, Georgia"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            {/* Overlay with contact info */}
            <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 max-w-xs">
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">PixelWeb.ge</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t.contact.map.title}</p>
              <p className="text-sm text-primary-600 dark:text-primary-400">{t.contact.map.text}</p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

export default ClientContact
