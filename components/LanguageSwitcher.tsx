'use client'

import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage()

    return (
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1 border border-gray-200 dark:border-gray-700">
            <button
                onClick={() => setLanguage('ka')}
                className={`relative px-3 py-1 rounded-full text-sm font-medium transition-colors ${language === 'ka'
                        ? 'text-gray-900 dark:text-white'
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                    }`}
            >
                {language === 'ka' && (
                    <motion.div
                        layoutId="activeLang"
                        className="absolute inset-0 bg-white dark:bg-gray-700 rounded-full shadow-sm"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                )}
                <span className="relative z-10 flex items-center gap-1">
                    🇬🇪 KA
                </span>
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`relative px-3 py-1 rounded-full text-sm font-medium transition-colors ${language === 'en'
                        ? 'text-gray-900 dark:text-white'
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                    }`}
            >
                {language === 'en' && (
                    <motion.div
                        layoutId="activeLang"
                        className="absolute inset-0 bg-white dark:bg-gray-700 rounded-full shadow-sm"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                )}
                <span className="relative z-10 flex items-center gap-1">
                    🇺🇸 EN
                </span>
            </button>
        </div>
    )
}

export default LanguageSwitcher
