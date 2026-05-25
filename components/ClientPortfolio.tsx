'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'
import PageTransition from '@/components/PageTransition'
import ProjectModal from '@/components/ProjectModal'
import { useLanguage } from '@/context/LanguageContext'
import { projects, type Project } from '@/constants/projects'

const ClientPortfolio = () => {
  const { t, language } = useLanguage()
  const [filter, setFilter] = useState('all')
  const [previewProject, setPreviewProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openPreview = (project: Project, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setPreviewProject(project)
    setIsModalOpen(true)
  }

  const categories = [
    { id: 'all', label: t.portfolio.categories.all },
    { id: 'mobile', label: t.portfolio.categories.mobile },
    { id: 'education', label: t.portfolio.categories.education },
    { id: 'ecommerce', label: t.portfolio.categories.ecommerce },
    { id: 'restaurant', label: t.portfolio.categories.restaurant },
    { id: 'gaming', label: t.portfolio.categories.gaming },
  ]

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  const featured = filteredProjects.filter((p) => p.featured)
  const rest = filteredProjects.filter((p) => !p.featured)

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* HERO */}
        <section className="relative overflow-hidden bg-white dark:bg-gray-950">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-primary-300/30 blur-[120px] dark:bg-primary-700/20" />
            <div className="absolute top-20 right-0 h-[380px] w-[380px] rounded-full bg-fuchsia-300/30 blur-[120px] dark:bg-fuchsia-700/20" />
          </div>

          <div className="container mx-auto grid gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:px-8 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gray-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                {language === 'ka' ? 'რჩეული პროექტები' : 'Selected work'}
              </span>
              <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
                {t.portfolio.hero.title}
                <span className="mt-3 block bg-gradient-to-r from-primary-600 via-fuchsia-500 to-amber-500 bg-clip-text text-transparent">
                  {language === 'ka'
                    ? 'რომელიც ფასდება'
                    : 'that ships and converts'}
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
                {t.portfolio.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-600/20 transition hover:bg-primary-700"
                >
                  {language === 'ka' ? 'დაიწყე პროექტი' : 'Start a project'}
                  <FaArrowRight />
                </Link>
                <a
                  href="https://wa.me/995591410914"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-900 transition hover:border-primary-300 hover:text-primary-700 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-primary-500/40"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-3 gap-4 lg:gap-6"
            >
              {[
                { v: '11+', l: t.portfolio.stats.projects },
                { v: '100%', l: t.portfolio.stats.success },
                { v: '24/7', l: t.portfolio.stats.support },
              ].map((s) => (
                <div
                  key={s.l}
                  className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-5"
                >
                  <div className="text-3xl font-black tracking-tight text-gray-950 dark:text-white sm:text-4xl">
                    {s.v}
                  </div>
                  <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400 sm:text-xs">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FILTERS */}
        <section className="sticky top-16 z-30 border-y border-gray-100 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/85">
          <div className="container mx-auto flex flex-wrap items-center gap-2 px-4 py-3 sm:gap-3 sm:px-6 lg:px-8">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                  filter === c.id
                    ? 'bg-gray-950 text-white shadow-sm dark:bg-white dark:text-gray-950'
                    : 'border border-gray-200 bg-white text-gray-700 hover:border-gray-400 hover:text-gray-950 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-white/30 dark:hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
            <div className="ml-auto hidden text-xs text-gray-500 dark:text-gray-400 sm:block">
              {filteredProjects.length}{' '}
              {language === 'ka' ? 'პროექტი' : 'projects'}
            </div>
          </div>
        </section>

        {/* FEATURED ROWS */}
        {featured.length > 0 && (
          <section className="bg-gray-50 py-12 dark:bg-transparent sm:py-16 lg:py-20">
            <div className="container mx-auto space-y-8 px-4 sm:px-6 lg:space-y-12 lg:px-8">
              {featured.map((project, idx) => (
                <FeatureRow
                  key={project.slug}
                  project={project}
                  reverse={idx % 2 === 1}
                  onPreview={openPreview}
                  language={language}
                />
              ))}
            </div>
          </section>
        )}

        {/* GRID */}
        {rest.length > 0 && (
          <section
            className={`${
              featured.length > 0
                ? 'pb-16 pt-2 sm:pb-20'
                : 'bg-gray-50 py-12 dark:bg-transparent sm:py-16 lg:py-20'
            }`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {featured.length > 0 && (
                <h2 className="mb-8 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                  {language === 'ka' ? 'სხვა პროექტები' : 'More work'}
                </h2>
              )}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {rest.map((project, index) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    index={index}
                    onPreview={openPreview}
                    language={language}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {filteredProjects.length === 0 && (
          <div className="container mx-auto py-16 text-center text-gray-500 dark:text-gray-400">
            {t.portfolio.noProjects}
          </div>
        )}

        {/* Modal */}
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={previewProject || projects[0]}
        />

        {/* CTA */}
        <section className="relative overflow-hidden bg-gray-950 py-20 text-white">
          <div className="absolute inset-0 -z-10 opacity-60">
            <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-primary-500/40 blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-fuchsia-500/40 blur-[120px]" />
          </div>
          <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">
              {t.portfolio.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              {t.portfolio.cta.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-gray-950 transition hover:bg-gray-100"
              >
                {t.portfolio.cta.button}
                <FaArrowRight />
              </Link>
              <a
                href="https://wa.me/995591410914"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

// ---------- Feature row (DecoConcept, Furniture Store) ----------

type RowProps = {
  project: Project
  reverse: boolean
  onPreview: (p: Project, e: React.MouseEvent) => void
  language: 'ka' | 'en'
}

const FeatureRow = ({ project, reverse, onPreview, language }: RowProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl dark:border-white/10 dark:bg-gray-900/40"
    >
      <div
        className={`grid gap-0 lg:grid-cols-2 ${
          reverse ? 'lg:[&>div:first-child]:order-2' : ''
        }`}
      >
        {/* Image */}
        <Link
          href={`/portfolio/${project.slug}`}
          className="group relative block aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 p-6 dark:from-gray-800 dark:to-gray-900 sm:p-8 lg:aspect-auto lg:min-h-[460px]"
        >
          <div className="relative h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
            <Image
              src={project.cover}
              alt={project.title[language]}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="rounded-xl object-contain shadow-2xl shadow-black/20 ring-1 ring-black/5 dark:ring-white/10"
              priority
            />
          </div>
          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-900 backdrop-blur">
            {project.categoryLabel[language]}
          </div>
        </Link>

        {/* Content */}
        <div className="flex flex-col justify-center p-7 sm:p-10">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
            <span className="text-primary-600 dark:text-primary-400">
              {language === 'ka' ? 'რჩეული' : 'Featured'}
            </span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          <h3 className="mt-4 text-3xl font-black tracking-tight text-gray-950 dark:text-white sm:text-4xl lg:text-5xl">
            {project.title[language]}
          </h3>
          <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            {project.tagline[language]}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={`/portfolio/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-100"
            >
              {language === 'ka' ? 'პროექტი' : 'View case'}
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" />
            </Link>
            <button
              type="button"
              onClick={(e) => onPreview(project, e)}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-900 transition hover:border-primary-300 hover:text-primary-700 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-primary-500/40"
            >
              {language === 'ka' ? 'სწრაფი ნახვა' : 'Quick view'}
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-gray-700 transition hover:text-primary-700 dark:text-gray-300 dark:hover:text-primary-300"
              >
                <FaExternalLinkAlt className="text-[11px]" />
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

// ---------- Standard card ----------

type CardProps = {
  project: Project
  index: number
  onPreview: (p: Project, e: React.MouseEvent) => void
  language: 'ka' | 'en'
}

const ProjectCard = ({ project, index, onPreview, language }: CardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.05 }}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-gray-900/40"
    >
      <Link href={`/portfolio/${project.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 p-4 dark:from-gray-800 dark:to-gray-900 sm:p-5">
          <div className="relative h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]">
            <Image
              src={project.cover}
              alt={project.title[language]}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="rounded-lg object-contain shadow-xl shadow-black/15 ring-1 ring-black/5 dark:ring-white/10"
            />
          </div>
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-900 backdrop-blur">
            {project.categoryLabel[language]}
          </div>
          {project.liveUrl && (
            <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Live
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3 p-5 sm:p-6">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">
            <span>{project.year}</span>
          </div>

          <div>
            <h3 className="text-xl font-black tracking-tight text-gray-950 transition-colors group-hover:text-primary-700 dark:text-white dark:group-hover:text-primary-300 sm:text-2xl">
              {project.title[language]}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
              {project.tagline[language]}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-[11px] font-semibold text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-2 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-950 dark:text-white">
              {language === 'ka' ? 'პროექტი' : 'View case'}
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </span>
            <button
              type="button"
              onClick={(e) => onPreview(project, e)}
              className="text-xs font-semibold text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {language === 'ka' ? 'სწრაფი ნახვა' : 'Quick view'}
            </button>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default ClientPortfolio
