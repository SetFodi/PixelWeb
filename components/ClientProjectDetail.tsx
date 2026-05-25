'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa'
import PageTransition from '@/components/PageTransition'
import { useLanguage } from '@/context/LanguageContext'
import { getProjectBySlug, getRelatedProjects } from '@/constants/projects'

type Props = { slug: string }

const ClientProjectDetail = ({ slug }: Props) => {
  const { language } = useLanguage()
  const project = getProjectBySlug(slug)
  const related = getRelatedProjects(slug, 3)
  const [activeImage, setActiveImage] = useState(0)

  if (!project) return null

  const nextImage = () =>
    setActiveImage((i) => (i + 1) % project.images.length)
  const prevImage = () =>
    setActiveImage((i) => (i - 1 + project.images.length) % project.images.length)

  const title = project.title[language]
  const tagline = project.tagline[language]
  const description = project.longDescription[language]
  const features = project.features[language]
  const highlights = project.highlights[language]

  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-20 dark:bg-gray-950">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className={`absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-gradient-to-br ${project.accent} opacity-25 blur-[120px]`} />
            <div className="absolute top-20 right-0 h-[380px] w-[380px] rounded-full bg-fuchsia-300/25 blur-[120px] dark:bg-fuchsia-700/15" />
          </div>

          <div className="container mx-auto px-4 pt-10 sm:px-6 lg:px-8">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-primary-600 dark:text-gray-400"
            >
              <FaArrowLeft className="text-xs" />
              {language === 'ka' ? 'უკან პორტფოლიოზე' : 'Back to portfolio'}
            </Link>

            <div className="mt-8 grid gap-10 pb-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:pb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                  <span className="rounded-full border border-gray-200 bg-white px-3 py-1 dark:border-white/10 dark:bg-white/5">
                    {project.categoryLabel[language]}
                  </span>
                  <span>•</span>
                  <span>{project.year}</span>
                  {project.client && (
                    <>
                      <span>•</span>
                      <span>{project.client}</span>
                    </>
                  )}
                </div>

                <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
                  {title}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
                  {tagline}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-600/20 transition hover:bg-primary-700"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      {language === 'ka' ? 'ცოცხლად ნახვა' : 'View live'}
                    </a>
                  )}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-900 transition hover:border-primary-300 hover:text-primary-700 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-primary-500/40"
                  >
                    {language === 'ka'
                      ? 'მსგავსი პროექტი მინდა'
                      : 'I want a similar project'}
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </motion.div>

              {/* Project info card */}
              <motion.aside
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="self-start rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                  {language === 'ka' ? 'პროექტის ინფო' : 'Project info'}
                </h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-gray-500 dark:text-gray-400">
                      {language === 'ka' ? 'როლი' : 'Role'}
                    </dt>
                    <dd className="text-right font-semibold text-gray-950 dark:text-white">
                      {project.role[language]}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-gray-500 dark:text-gray-400">
                      {language === 'ka' ? 'წელი' : 'Year'}
                    </dt>
                    <dd className="text-right font-semibold text-gray-950 dark:text-white">
                      {project.year}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-gray-500 dark:text-gray-400">
                      {language === 'ka' ? 'კატეგორია' : 'Category'}
                    </dt>
                    <dd className="text-right font-semibold text-gray-950 dark:text-white">
                      {project.categoryLabel[language]}
                    </dd>
                  </div>
                  {project.client && (
                    <div className="flex justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">
                        {language === 'ka' ? 'კლიენტი' : 'Client'}
                      </dt>
                      <dd className="text-right font-semibold text-gray-950 dark:text-white">
                        {project.client}
                      </dd>
                    </div>
                  )}
                </dl>

                <h3 className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                  {language === 'ka' ? 'ტექნოლოგიები' : 'Stack'}
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
              </motion.aside>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="bg-gray-50 py-14 dark:bg-transparent sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl ring-1 ring-black/5 dark:from-gray-800 dark:to-gray-900 dark:ring-white/10">
              <div className="relative aspect-[16/9] w-full p-6 sm:p-10">
                <Image
                  src={project.images[activeImage]}
                  alt={`${title} - ${activeImage + 1}`}
                  fill
                  className="rounded-xl object-contain shadow-2xl shadow-black/20 ring-1 ring-black/5 dark:ring-white/10"
                  priority
                />
              </div>
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/70"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/70"
                    aria-label="Next image"
                  >
                    <FaChevronRight />
                  </button>
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className={`h-1.5 rounded-full bg-white/70 transition-all ${
                          i === activeImage ? 'w-8 bg-white' : 'w-2 hover:bg-white'
                        }`}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {project.images.length > 1 && (
              <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-5 sm:gap-4">
                {project.images.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(i)}
                    className={`group relative aspect-[4/3] overflow-hidden rounded-xl ring-2 transition ${
                      i === activeImage
                        ? 'ring-primary-500'
                        : 'ring-transparent hover:ring-gray-300 dark:hover:ring-white/30'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${title} ${i + 1}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(min-width: 640px) 20vw, 33vw"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ABOUT + HIGHLIGHTS */}
        <section className="py-14 sm:py-20">
          <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:px-8">
            <div>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary-600 dark:text-primary-400">
                {language === 'ka' ? 'პროექტის შესახებ' : 'About the project'}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-700 dark:text-gray-300 sm:text-xl">
                {description}
              </p>

              <h3 className="mt-10 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                {language === 'ka' ? 'რა გავაკეთეთ' : 'What we built'}
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4 dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-500/15 text-primary-600 dark:text-primary-300">
                      ✓
                    </span>
                    <span className="text-sm leading-6 text-gray-700 dark:text-gray-200">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="self-start rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-7 shadow-sm dark:border-white/10 dark:from-white/5 dark:to-transparent">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                {language === 'ka' ? 'მთავარი მონაკვეთები' : 'Highlights'}
              </h3>
              <ul className="mt-4 space-y-3">
                {highlights.map((h, idx) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-200"
                  >
                    <span
                      className={`mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${project.accent} text-[10px] font-black text-white`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="leading-6">{h}</span>
                  </li>
                ))}
              </ul>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gray-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-100"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  {language === 'ka' ? 'ცოცხალი საიტი' : 'Open live site'}
                </a>
              )}
            </aside>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-gray-950 py-16 text-white sm:py-20">
          <div className="absolute inset-0 -z-10 opacity-60">
            <div className={`absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-gradient-to-br ${project.accent} blur-[120px]`} />
            <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-primary-500/40 blur-[120px]" />
          </div>
          <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">
              {language === 'ka'
                ? 'მსგავსი პროექტი გჭირდებათ?'
                : 'Need a project like this?'}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              {language === 'ka'
                ? 'მოგვწერეთ რას ყიდით ან რა ბიზნესი გაქვთ. გეტყვით ფასს, ვადას და რა შემავალს მიიღებთ.'
                : 'Tell us what you sell or what business you run. We will reply with price, timeline, and scope.'}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-gray-950 transition hover:bg-gray-100"
              >
                <FaEnvelope />
                {language === 'ka' ? 'ფორმის შევსება' : 'Contact form'}
              </Link>
              <a
                href="https://wa.me/995591410914"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-green-600"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* RELATED */}
        {related.length > 0 && (
          <section className="py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8 flex items-end justify-between">
                <h2 className="text-2xl font-black tracking-tight text-gray-950 dark:text-white sm:text-3xl">
                  {language === 'ka' ? 'მსგავსი პროექტები' : 'Related work'}
                </h2>
                <Link
                  href="/portfolio"
                  className="text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400"
                >
                  {language === 'ka' ? 'ყველა პროექტი →' : 'All projects →'}
                </Link>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/portfolio/${rp.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-gray-900/40"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 p-4 dark:from-gray-800 dark:to-gray-900">
                      <div className="relative h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                        <Image
                          src={rp.cover}
                          alt={rp.title[language]}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="rounded-lg object-contain shadow-xl shadow-black/15 ring-1 ring-black/5 dark:ring-white/10"
                        />
                      </div>
                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-900 backdrop-blur">
                        {rp.categoryLabel[language]}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-black tracking-tight text-gray-950 group-hover:text-primary-700 dark:text-white dark:group-hover:text-primary-300 sm:text-2xl">
                        {rp.title[language]}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
                        {rp.tagline[language]}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </PageTransition>
  )
}

export default ClientProjectDetail
