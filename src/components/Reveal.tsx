import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
  /** 'span' permet un usage valide dans les éléments à contenu phrasé (h1, p…). */
  as?: 'div' | 'span'
}

export function Reveal({ children, className, delay = 0, y = 26, once = true, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion()
  const Tag = as === 'span' ? motion.span : motion.div
  return (
    <Tag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, filter: 'blur(5px)' }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, margin: '-70px 0px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
