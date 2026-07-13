import type { ReactNode } from 'react'
import { cn } from '../lib/cn'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  kicker: string
  title: ReactNode
  lead?: ReactNode
  refNo?: string
  tone?: 'dark' | 'paper'
  className?: string
}

export function SectionHeading({ kicker, title, lead, refNo, tone = 'paper', className }: SectionHeadingProps) {
  const paper = tone === 'paper'
  return (
    <Reveal className={className}>
      <div className="flex items-center gap-3">
        <span aria-hidden className={cn('size-1.5 shrink-0 rotate-45', paper ? 'bg-signal-deep' : 'bg-signal')} />
        <span className={cn('kicker whitespace-nowrap', paper ? 'text-signal-deep' : 'text-signal')}>
          {refNo && <span className="opacity-70">{refNo} · </span>}
          {kicker}
        </span>
        <span aria-hidden className={cn('h-px min-w-8 flex-1', paper ? 'bg-ink/15' : 'bg-paper/10')} />
      </div>
      <h2 className={cn('display-title mt-6 text-[clamp(1.9rem,4.6vw,3.4rem)]', paper ? 'text-ink' : 'text-paper')}>
        {title}
      </h2>
      {lead && (
        <p className={cn('mt-5 max-w-[62ch] text-[15px]/relaxed sm:text-base/relaxed', paper ? 'text-ink-soft' : 'text-steel')}>
          {lead}
        </p>
      )}
    </Reveal>
  )
}
