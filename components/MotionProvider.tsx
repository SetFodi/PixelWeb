'use client'

import { MotionConfig } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Wraps the app so every framer-motion animation honors the user's
 * "reduce motion" OS setting. `reducedMotion="user"` disables transform/layout
 * animations for those users while keeping opacity changes.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
