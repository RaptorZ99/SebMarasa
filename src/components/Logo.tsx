import { cn } from '../lib/cn'

export function ShieldMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden className={cn('size-7', className)}>
      <path
        d="M32 6l19 7.2v15.9c0 11.8-7.8 21.6-19 26.2-11.2-4.6-19-14.4-19-26.2V13.2z"
        fill="none"
        stroke="var(--color-signal)"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />
      <path
        d="M23.5 33.5l6.2 6.2 11.8-13"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
