'use client'

import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

const PHONE_E164 = '+995591410914'
const WHATSAPP_INTL = '995591410914'

const StickyContactBar = () => {
  const { t } = useLanguage()
  const waHref = `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(t.footer.whatsappMessage)}`
  const callHref = `tel:${PHONE_E164}`

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="mx-3 mb-3 rounded-xl shadow-2xl backdrop-blur bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 p-2">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-lg transition-colors"
          >
            <FaWhatsapp className="text-lg" />
            <span>WhatsApp</span>
          </a>
          <a
            href={callHref}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2.5 rounded-lg transition-colors"
          >
            <FaPhone />
            <span>{t.footer.call}</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default StickyContactBar
