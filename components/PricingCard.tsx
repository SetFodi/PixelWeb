'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCheck, FaTimes, FaArrowRight } from 'react-icons/fa'
import { ReactNode } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export interface PricingService {
    icon: ReactNode
    name: string
    price: string
    duration: string
    description: string
    features: string[]
    notIncluded: string[]
    marketPrice?: string
    popular?: boolean
    color: string
    bgColor: string
}

interface PricingCardProps {
    service: PricingService
    index: number
    delay?: number
}

const PricingCard = ({ service, index, delay = 0 }: PricingCardProps) => {
    const { t } = useLanguage()
    const gradients = [
        'from-blue-500 to-cyan-500',
        'from-primary-500 to-primary-600',
        'from-purple-500 to-pink-500',
    ]
    const gradient = gradients[index % 3]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay + index * 0.1 }}
            viewport={{ once: true }}
            className={`relative ${service.popular ? 'lg:-mt-4 lg:mb-4 z-10' : ''}`}
        >
            {/* Card */}
            <div className={`h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${service.popular
                ? 'ring-2 ring-primary-500 shadow-lg'
                : 'border border-gray-200 dark:border-gray-800 shadow-md'
                }`}>

                {/* Top gradient bar */}
                <div className={`h-1 bg-gradient-to-r ${gradient}`} />

                <div className="p-6 lg:p-8">
                    {/* Popular badge */}
                    {service.popular && (
                        <div className="mb-4">
                            <span className="inline-flex items-center gap-1.5 bg-primary-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                                ⭐ {t.home.pricing.popular}
                            </span>
                        </div>
                    )}

                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-5">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-xl text-white`}>
                            {service.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                {service.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                        <div className="flex items-baseline gap-1.5">
                            <span className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                                {service.price}
                            </span>
                            <span className="text-lg font-medium text-gray-400">{t.home.pricing.currency}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                ⏱️ {service.duration}
                            </span>
                            {service.marketPrice && (
                                <span className="text-sm text-red-500 line-through">
                                    {t.home.pricing.marketPrice}: {service.marketPrice}{t.home.pricing.currency}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                        {service.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <FaCheck className="text-green-500 mt-1 flex-shrink-0 text-xs" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                            </div>
                        ))}
                        {service.notIncluded.map((feature, i) => (
                            <div key={`not-${i}`} className="flex items-start gap-3 opacity-50">
                                <FaTimes className="text-gray-400 mt-1 flex-shrink-0 text-xs" />
                                <span className="text-sm text-gray-400 line-through">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold transition-all duration-200 ${service.popular
                            ? `bg-gradient-to-r ${gradient} text-white hover:opacity-90`
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`}
                    >
                        {t.home.pricing.startNow}
                        <FaArrowRight className="text-sm" />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default PricingCard
