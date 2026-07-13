import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/cn'
import { identity } from '../data/profile'
import { Chip } from './Chip'
import { ShieldMark } from './Logo'

const LINKS = [
  { to: '/parcours', label: 'Parcours', no: '01' },
  { to: '/competences', label: 'Compétences', no: '02' },
  { to: '/projet', label: 'Projet', no: '03' },
  { to: '/contact', label: 'Contact', no: '04' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    document.documentElement.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-[92]">
      {/* Fond du bandeau isolé : un backdrop-filter sur <header> casserait le position:fixed du menu mobile */}
      <div
        aria-hidden
        className={cn(
          'absolute inset-0 border-b transition-[background-color,border-color,backdrop-filter] duration-500',
          open
            ? 'border-paper/10 bg-ink'
            : scrolled
              ? 'border-paper/10 bg-ink/85 backdrop-blur-md'
              : 'border-transparent bg-transparent',
        )}
      />
      <div className="container-x relative flex h-16 items-center justify-between gap-6 sm:h-[72px]">
        <Link to="/" className="group flex items-center gap-3" aria-label="Accueil · Sébastien Marasa">
          <ShieldMark className="text-paper transition-colors duration-300 group-hover:text-signal" />
          <span className="flex flex-col gap-1 leading-none">
            <span className="display-title text-[15px] tracking-wide text-paper">Marasa</span>
            <span className="kicker kicker-xs text-steel">Sécurité privée</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  'relative px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300',
                  isActive ? 'text-paper' : 'text-steel hover:text-paper',
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span aria-hidden className="mr-2 text-[9px] text-signal/80">
                    {l.no}
                  </span>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pip"
                      className="absolute inset-x-4 -bottom-px h-[2px] bg-signal"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Chip dot="valid" pulse>
            {identity.availability}
          </Chip>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="-mr-2 p-2 text-paper lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 flex flex-col overflow-y-auto bg-ink sm:top-[72px] lg:hidden"
          >
            <div aria-hidden className="grid-dots-dark pointer-events-none absolute inset-0 opacity-60" />
            <nav aria-label="Navigation mobile" className="container-x relative flex-1 pt-8">
              <ul>
                {[{ to: '/', label: 'Accueil', no: '00' }, ...LINKS].map((l, i) => (
                  <li key={l.to} className="overflow-hidden border-b border-paper/10">
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      className={({ isActive }) => cn('block py-4', isActive ? 'text-signal' : 'text-paper')}
                    >
                      <motion.span
                        initial={{ y: '110%' }}
                        animate={{ y: '0%' }}
                        transition={{ duration: 0.5, delay: 0.06 + i * 0.055, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-baseline gap-4"
                      >
                        <span className="kicker text-signal/80">{l.no}</span>
                        <span className="display-title text-4xl">{l.label}</span>
                      </motion.span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="container-x relative space-y-4 pb-10 pt-8">
              <Chip dot="valid" pulse>
                {identity.availability}
              </Chip>
              <div className="flex flex-col gap-2">
                <a href={identity.phoneHref} className="mono-data text-steel transition-colors hover:text-paper">
                  {identity.phone}
                </a>
                <a href={`mailto:${identity.email}`} className="mono-data text-steel transition-colors hover:text-paper">
                  {identity.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
