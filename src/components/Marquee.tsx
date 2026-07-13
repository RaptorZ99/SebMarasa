import { cn } from '../lib/cn'

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = (hidden: boolean) => (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="display-title px-6 text-2xl text-paper/80 sm:px-8 sm:text-3xl">{item}</span>
          <span aria-hidden className="size-2 rotate-45 bg-signal/80" />
        </span>
      ))}
    </div>
  )
  return (
    <div className={cn('overflow-hidden py-5 sm:py-6', className)}>
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
