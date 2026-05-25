'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaTimes, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    slug?: string
    title: { ka: string; en: string }
    images: string[]
    description: { ka: string; en: string }
    technologies: string[]
    features: { ka: string[]; en: string[] }
    liveUrl?: string
  }
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const { language, t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (isOpen) setCurrentIndex(0)
  }, [isOpen, project])

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % project.images.length)
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length)

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-sm md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="my-8 w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 dark:bg-gray-950 dark:ring-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative h-72 bg-gradient-to-br from-gray-100 to-gray-200 p-4 dark:from-gray-800 dark:to-gray-900 sm:h-96 sm:p-6 md:h-[460px] md:p-8">
              <Image
                src={project.images[currentIndex]}
                alt={project.title[language]}
                fill
                className="rounded-xl object-contain shadow-2xl shadow-black/20 ring-1 ring-black/5 dark:ring-white/10"
                priority
              />

              <button
                onClick={onClose}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/70"
                aria-label="Close"
              >
                <FaTimes />
              </button>

              {project.images.length > 1 && (
                <div className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {currentIndex + 1} / {project.images.length}
                </div>
              )}

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      prevSlide()
                    }}
                    className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/70"
                    aria-label="Previous"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      nextSlide()
                    }}
                    className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/70"
                    aria-label="Next"
                  >
                    <FaChevronRight />
                  </button>
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentIndex(i)
                        }}
                        className={`h-1.5 rounded-full bg-white/70 transition-all ${
                          i === currentIndex ? 'w-8 bg-white' : 'w-2 hover:bg-white'
                        }`}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content */}
            <div className="px-6 py-7 sm:px-8 sm:py-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-gray-950 dark:text-white sm:text-3xl">
                    {project.title[language]}
                  </h2>
                  <p className="mt-2 max-w-xl text-gray-600 dark:text-gray-300">
                    {project.description[language]}
                  </p>
                </div>
                <div className="flex flex-shrink-0 flex-col gap-2">
                  {project.slug && (
                    <Link
                      href={`/portfolio/${project.slug}`}
                      onClick={onClose}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-100"
                    >
                      {language === 'ka' ? 'სრული პროექტი' : 'Full project'}
                      <FaArrowRight className="text-xs" />
                    </Link>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-bold text-gray-900 transition hover:border-primary-300 hover:text-primary-700 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-primary-500/40"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      {t.portfolio.viewSite}
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-7 grid gap-7 sm:grid-cols-2">
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                    {language === 'ka' ? 'ტექნოლოგიები' : 'Technologies'}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                    {language === 'ka' ? 'ფუნქციები' : 'Features'}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    {project.features[language].map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
