import type { ReactNode } from 'react'
import { cn } from '../lib/cn'
import { Cta } from './Cta'
import { Reveal } from './Reveal'

type CTABandProps = {
  title: ReactNode
  to: string
  label: string
  note?: string
  className?: string
}

export function CTABand({ title, to, label, note, className }: CTABandProps) {
  return (
    <section className={cn('relative overflow-hidden', className)}>
      <div
        aria-hidden
        className="grid-dots-dark absolute inset-0 [mask-image:radial-gradient(90%_110%_at_50%_100%,black,transparent)]"
      />
      <div className="container-x relative py-20 sm:py-28">
        <Reveal>
          <div className="flex items-center gap-3">
            <span aria-hidden className="size-1.5 rotate-45 bg-signal" />
            <span className="kicker text-signal">Transmission</span>
            <span aria-hidden className="h-px min-w-8 flex-1 bg-paper/10" />
          </div>
          <h2 className="display-title mt-7 max-w-[22ch] text-[clamp(2.1rem,5.8vw,4.4rem)] text-paper">{title}</h2>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Cta to={to} arrow>
              {label}
            </Cta>
            {note && <span className="mono-data text-steel">{note}</span>}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
