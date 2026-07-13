import type { ReactNode } from 'react'
import { cn } from '../lib/cn'
import { Reveal } from './Reveal'

type PageHeaderProps = {
  refNo: string
  kicker: string
  title: ReactNode
  lead?: ReactNode
  meta?: ReactNode
  aside?: ReactNode
}

/** Bandeau sombre d'ouverture de chaque page du dossier. */
export function PageHeader({ refNo, kicker, title, lead, meta, aside }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden">
      <div
        aria-hidden
        className="grid-dots-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
      />
      <div className="container-x relative pb-14 pt-32 sm:pt-40 lg:pb-16">
        <Reveal>
          <div className="flex items-center gap-3">
            <span aria-hidden className="size-1.5 shrink-0 rotate-45 bg-signal" />
            <span className="kicker text-signal">
              <span className="opacity-70">{refNo} · </span>
              {kicker}
            </span>
            <span aria-hidden className="h-px min-w-8 flex-1 bg-paper/10" />
          </div>
        </Reveal>
        <div
          className={cn(
            'mt-7',
            aside ? 'lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:items-center lg:gap-16' : null,
          )}
        >
          <div>
            <Reveal delay={0.08}>
              <h1 className="display-title text-[clamp(2.4rem,7vw,5.4rem)] text-paper">{title}</h1>
            </Reveal>
            {lead && (
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-[54ch] text-base/relaxed text-steel sm:text-lg/relaxed">{lead}</p>
              </Reveal>
            )}
            {meta && (
              <Reveal delay={0.22}>
                <div className="mt-8">{meta}</div>
              </Reveal>
            )}
          </div>
          {aside && (
            <Reveal delay={0.2} className="mt-10 w-full max-w-[340px] lg:mt-0 lg:max-w-[320px] lg:justify-self-end">
              {aside}
            </Reveal>
          )}
        </div>
      </div>
    </header>
  )
}
