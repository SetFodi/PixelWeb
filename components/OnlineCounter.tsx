'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaUsers } from 'react-icons/fa'

// Generate a unique visitor ID (stored in sessionStorage)
const getVisitorId = () => {
    if (typeof window === 'undefined') return null

    let id = sessionStorage.getItem('visitorId')
    if (!id) {
        id = Math.random().toString(36).substring(2) + Date.now().toString(36)
        sessionStorage.setItem('visitorId', id)
    }
    return id
}

const OnlineCounter = () => {
    const [online, setOnline] = useState<number | null>(null)

    useEffect(() => {
        const visitorId = getVisitorId()
        if (!visitorId) return

        // Heartbeat - ping the server every 30 seconds
        const sendHeartbeat = async () => {
            try {
                const response = await fetch('/api/online', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ visitorId })
                })
                const data = await response.json()
                setOnline(data.online)
            } catch {
                // Silently fail
            }
        }

        // Initial ping
        sendHeartbeat()

        // Ping every 30 seconds
        const interval = setInterval(sendHeartbeat, 30000)

        return () => clearInterval(interval)
    }, [])

    if (online === null) return null

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed top-24 right-4 z-40 hidden md:flex items-center gap-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
        >
            <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <FaUsers className="text-gray-500 dark:text-gray-400 text-sm" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {online} ონლაინ
            </span>
        </motion.div>
    )
}

export default OnlineCounter
