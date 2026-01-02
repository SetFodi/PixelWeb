'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaTimes, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
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
    if (isOpen) {
      setCurrentIndex(0)
    }
  }, [isOpen, project])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
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
          className="fixed inset-0 bg-black/85 z-50 flex items-start justify-center p-4 md:p-8 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-3xl my-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section - Fixed height */}
            <div className="relative bg-gray-900 h-64 sm:h-80 md:h-96 rounded-t-2xl overflow-hidden">
              {/* Current Image */}
              <Image
                src={project.images[currentIndex]}
                alt={project.title[language]}
                fill
                className="object-contain"
                priority
              />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
              >
                <FaTimes className="w-5 h-5" />
              </button>

              {/* Image Counter */}
              {project.images.length > 1 && (
                <div className="absolute top-3 left-3 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentIndex + 1} / {project.images.length}
                </div>
              )}

              {/* Navigation */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                  >
                    <FaChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                  >
                    <FaChevronRight className="w-4 h-4" />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                            ? 'bg-white w-6'
                            : 'bg-white/50 hover:bg-white/75'
                          }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Content Section - Scrolls with page */}
            <div className="p-6">
              {/* Title and Button */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title[language]}
                </h2>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium whitespace-nowrap w-fit"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    {t.portfolio.viewSite}
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                {project.description[language]}
              </p>

              {/* Technologies */}
              <div className="mb-5">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                  {language === 'ka' ? 'ტექნოლოგიები' : 'Technologies'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                  {language === 'ka' ? 'ფუნქციები' : 'Features'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features[language].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </div>
                  ))}
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
