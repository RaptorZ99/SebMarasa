import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type PageHeaderProps = {
  refNo: string
  kicker: string
  title: ReactNode
  lead?: ReactNode
  meta?: ReactNode
}

/** Bandeau sombre d'ouverture de chaque page du dossier — même rythme partout. */
export function PageHeader({ refNo, kicker, title, lead, meta }: PageHeaderProps) {
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
            <span className="kicker min-w-0 text-signal">
              <span className="opacity-70">{refNo} · </span>
              {kicker}
            </span>
            <span aria-hidden className="hidden h-px min-w-8 flex-1 bg-paper/10 sm:block" />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display-title mt-7 text-[clamp(2.4rem,7.2vw,5.6rem)] text-paper">{title}</h1>
        </Reveal>
        {lead && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-[58ch] text-base/relaxed text-steel sm:text-lg/relaxed">{lead}</p>
          </Reveal>
        )}
        {meta && (
          <Reveal delay={0.22}>
            <div className="mt-8">{meta}</div>
          </Reveal>
        )}
      </div>
    </header>
  )
}
