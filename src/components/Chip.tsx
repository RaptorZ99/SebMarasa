import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

type ChipProps = {
  children: ReactNode
  tone?: 'dark' | 'paper'
  dot?: 'valid' | 'signal'
  pulse?: boolean
  className?: string
}

export function Chip({ children, tone = 'dark', dot, pulse = false, className }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-[2px] border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em]',
        tone === 'dark' ? 'border-paper/15 text-steel' : 'border-ink/20 text-ink-soft',
        className,
      )}
    >
      {dot && (
        <span
          aria-hidden
          className={cn(
            'size-1.5 rounded-full',
            dot === 'valid' ? 'bg-valid' : 'bg-signal',
            pulse && 'animate-blink',
          )}
        />
      )}
      {children}
    </span>
  )
}
