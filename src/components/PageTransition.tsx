import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

const GATE = [0.83, 0, 0.17, 1] as const

/**
 * Transition « checkpoint » : un rideau sombre étiqueté contrôle d'accès couvre
 * la sortie de page, puis se lève sur la suivante avec un voile signal traînant.
 */
export function PageTransition({ children, label }: { children: ReactNode; label: string }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
    )
  }

  return (
    <>
      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.5, ease: [0.22, 1, 0.36, 1] } }}
        exit={{ opacity: 1 }}
      >
        {children}
      </motion.main>

      <motion.div
        aria-hidden
        className="fixed inset-0 z-[96] flex items-center justify-center bg-ink-2"
        initial={{ y: '0%' }}
        animate={{ y: '-100.5%', transition: { duration: 0.7, delay: 0.1, ease: GATE } }}
        exit={{ y: '0%', transition: { duration: 0.5, ease: GATE } }}
      >
        <div className="flex items-center gap-4">
          <span className="size-2 animate-blink rounded-full bg-signal" />
          <span className="kicker text-paper/80">Contrôle d’accès · {label}</span>
          <span className="kicker text-signal">OK</span>
        </div>
        <span className="absolute inset-x-0 bottom-0 h-[2px] bg-signal" />
      </motion.div>

      <motion.div
        aria-hidden
        className="fixed inset-0 z-[95] bg-signal"
        initial={{ y: '0%' }}
        animate={{ y: '-100.5%', transition: { duration: 0.66, delay: 0.24, ease: GATE } }}
        exit={{ y: '0%', transition: { duration: 0.5, ease: GATE } }}
      />
    </>
  )
}
