import { motion, useReducedMotion } from 'motion/react'
import { useLayoutEffect, type ReactNode } from 'react'

const GATE = [0.83, 0, 0.17, 1] as const

/**
 * Transition « checkpoint » : un rideau sombre étiqueté contrôle d'accès couvre
 * la sortie de page, puis se lève sur la suivante avec un voile signal traînant.
 */
export function PageTransition({ children, label }: { children: ReactNode; label: string }) {
  const reduce = useReducedMotion()

  // Chaque page (nouvelle instance par route) repart du haut, quoi qu'il arrive.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

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
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.42, ease: [0.22, 1, 0.36, 1] } }}
        exit={{ opacity: 0, transition: { duration: 0.28, ease: 'easeIn' } }}
      >
        {children}
      </motion.main>

      <motion.div
        aria-hidden
        className="fixed inset-0 z-[96] flex items-center justify-center bg-ink-2"
        initial={{ y: '0%' }}
        animate={{ y: '-100.5%', transition: { duration: 0.62, delay: 0.14, ease: GATE } }}
        exit={{ y: '0%', transition: { duration: 0.42, ease: GATE } }}
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
        animate={{ y: '-100.5%', transition: { duration: 0.58, delay: 0.26, ease: GATE } }}
        exit={{ y: '0%', transition: { duration: 0.42, ease: GATE } }}
      />
    </>
  )
}
