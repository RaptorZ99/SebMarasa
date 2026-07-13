import { cn } from '../lib/cn'

export function CornerTicks({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn('pointer-events-none absolute inset-0', className)}>
      <span className="absolute left-0 top-0 size-3 border-l-2 border-t-2 border-current" />
      <span className="absolute right-0 top-0 size-3 border-r-2 border-t-2 border-current" />
      <span className="absolute bottom-0 left-0 size-3 border-b-2 border-l-2 border-current" />
      <span className="absolute bottom-0 right-0 size-3 border-b-2 border-r-2 border-current" />
    </span>
  )
}

type ExhibitProps = {
  src: string
  alt: string
  label: string
  note?: string
  tone?: 'dark' | 'paper'
  ratio?: string
  scan?: boolean
  priority?: boolean
  className?: string
  imgClassName?: string
}

/** Photo traitée en pièce de dossier : cadre repéré, duotone d'archive, légende mono. */
export function Exhibit({
  src,
  alt,
  label,
  note,
  tone = 'dark',
  ratio = 'aspect-[4/5]',
  scan = false,
  priority = false,
  className,
  imgClassName,
}: ExhibitProps) {
  return (
    <figure className={cn('group relative', className)}>
      <div
        className={cn(
          'relative overflow-hidden border',
          tone === 'paper' ? 'border-ink/20 bg-ink/5' : 'border-paper/15 bg-ink-2',
          ratio,
        )}
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          className={cn('exhibit-img h-full w-full object-cover', imgClassName)}
        />
        {scan && <span aria-hidden className="scan-beam" />}
        <span className={cn('absolute inset-2', tone === 'paper' ? 'text-signal-deep' : 'text-signal')}>
          <CornerTicks />
        </span>
      </div>
      <figcaption className="mt-2.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className={cn('kicker', tone === 'paper' ? 'text-signal-deep' : 'text-signal')}>{label}</span>
        {note && <span className={cn('mono-data', tone === 'paper' ? 'text-ink-soft' : 'text-steel')}>{note}</span>}
      </figcaption>
    </figure>
  )
}
