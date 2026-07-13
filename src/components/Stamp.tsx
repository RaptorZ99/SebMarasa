import { motion, useReducedMotion } from 'motion/react'
import { cn } from '../lib/cn'

type StampProps = {
  children: string
  className?: string
  rotate?: number
  delay?: number
}

/** Tampon administratif : claque en place à l'apparition, comme sur un vrai dossier. */
export function Stamp({ children, className, rotate = -7, delay = 0.2 }: StampProps) {
  const reduce = useReducedMotion()
  return (
    <motion.span
      className={cn('stamp font-sans text-[13px] sm:text-sm', className)}
      initial={reduce ? { opacity: 0, rotate } : { opacity: 0, scale: 1.7, rotate: rotate - 9, filter: 'blur(3px)' }}
      whileInView={{ opacity: 0.92, scale: 1, rotate, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px 0px' }}
      transition={
        reduce
          ? { duration: 0.3, delay }
          : { type: 'spring', stiffness: 380, damping: 16, mass: 0.8, delay }
      }
    >
      {children}
    </motion.span>
  )
}
