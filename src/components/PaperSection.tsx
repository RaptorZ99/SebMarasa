import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

type PaperSectionProps = {
  children: ReactNode
  className?: string
  innerClassName?: string
  id?: string
}

/** Feuillet du dossier : plaque papier posée sur la coque sombre. */
export function PaperSection({ children, className, innerClassName, id }: PaperSectionProps) {
  return (
    <section id={id} className={cn('relative', className)}>
      <div className="container-x">
        <div
          className={cn(
            'relative bg-paper px-5 py-12 text-ink shadow-[0_44px_90px_-46px_rgba(0,0,0,0.8)] sm:px-10 sm:py-16 lg:px-14 lg:py-20',
            innerClassName,
          )}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
