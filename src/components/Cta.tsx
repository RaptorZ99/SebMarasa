import { useRef, useState } from 'react'
import type { PointerEvent as ReactPointerEvent, ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { cn } from '../lib/cn'

const VARIANTS = {
  solid: 'bg-signal text-ink hover:bg-paper',
  outline: 'border border-paper/25 text-paper hover:border-signal hover:text-signal',
  'paper-solid': 'bg-ink text-paper hover:bg-signal-deep',
  'paper-outline': 'border border-ink/30 text-ink hover:border-signal-deep hover:text-signal-deep',
} as const

type CtaProps = {
  children: ReactNode
  to?: string
  href?: string
  type?: 'submit' | 'button'
  variant?: keyof typeof VARIANTS
  arrow?: boolean
  className?: string
}

/** Bouton d'action magnétique (desktop) · libellé mono façon consigne. */
export function Cta({ children, to, href, type, variant = 'solid', arrow = false, className }: CtaProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    setOffset({
      x: (e.clientX - r.left - r.width / 2) * 0.2,
      y: (e.clientY - r.top - r.height / 2) * 0.3,
    })
  }

  const classes = cn(
    'group inline-flex items-center justify-center gap-3 rounded-[2px] px-6 py-3.5 font-mono text-[12px] font-medium uppercase tracking-[0.18em] transition-colors duration-300',
    VARIANTS[variant],
    className,
  )

  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  )

  return (
    <motion.div
      ref={ref}
      className="inline-block"
      onPointerMove={onPointerMove}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 240, damping: 18, mass: 0.5 }}
    >
      {to ? (
        <Link to={to} className={classes}>
          {inner}
        </Link>
      ) : href ? (
        <a href={href} className={classes}>
          {inner}
        </a>
      ) : (
        <button type={type ?? 'button'} className={classes}>
          {inner}
        </button>
      )}
    </motion.div>
  )
}
