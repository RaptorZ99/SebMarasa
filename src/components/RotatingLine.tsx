import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { cn } from '../lib/cn'

export function RotatingLine({ lines, className }: { lines: string[]; className?: string }) {
  const [index, setIndex] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    const id = setInterval(() => setIndex((v) => (v + 1) % lines.length), 2600)
    return () => clearInterval(id)
  }, [lines.length])

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span aria-hidden className="h-px w-10 shrink-0 bg-signal" />
      <span className="relative block h-6 flex-1 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.span
            key={index}
            initial={reduce ? { opacity: 0 } : { y: '105%', opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { y: '0%', opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { y: '-105%', opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="kicker absolute inset-y-0 left-0 flex items-center whitespace-nowrap text-paper/90"
          >
            {lines[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  )
}
