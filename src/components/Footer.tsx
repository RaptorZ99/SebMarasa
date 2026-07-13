import { Link } from 'react-router'
import { ChevronDown } from 'lucide-react'
import { identity } from '../data/profile'
import { Chip } from './Chip'
import { Cta } from './Cta'
import { ShieldMark } from './Logo'

const NAV = [
  { to: '/', label: 'Accueil' },
  { to: '/parcours', label: 'Parcours' },
  { to: '/competences', label: 'Compétences' },
  { to: '/projet', label: 'Projet' },
  { to: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-paper/10">
      <span
        aria-hidden
        className="display-title outline-text pointer-events-none absolute -bottom-[0.16em] left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[21vw] leading-none"
      >
        MARASA
      </span>

      <div className="container-x relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.8fr_1fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <ShieldMark className="text-paper" />
              <span className="kicker text-steel">Transmission directe</span>
            </div>
            <p className="display-title mt-6 max-w-[16ch] text-3xl text-paper sm:text-4xl">
              Passons au niveau supérieur.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Cta
                href={`mailto:${identity.email}?subject=${encodeURIComponent('Contact · Portfolio Sébastien Marasa')}`}
                arrow
              >
                Écrire un message
              </Cta>
              <Cta href={identity.phoneHref} variant="outline">
                {identity.phone}
              </Cta>
            </div>
          </div>

          <nav aria-label="Navigation pied de page">
            <p className="kicker text-steel">Dossier</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="mono-data text-paper/80 transition-colors duration-300 hover:text-signal">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="kicker text-steel">Coordonnées</p>
            <ul className="mt-5 space-y-3 mono-data text-paper/80">
              <li>{identity.location}</li>
              <li>
                <a href={identity.phoneHref} className="transition-colors duration-300 hover:text-signal">
                  {identity.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${identity.email}`} className="break-all transition-colors duration-300 hover:text-signal">
                  {identity.email}
                </a>
              </li>
              <li>{identity.licences}</li>
            </ul>
            <Chip dot="valid" pulse className="mt-6">
              {identity.availability}
            </Chip>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-paper/10 pt-6">
          <p className="mono-data text-steel/70">© 2026 Sébastien Marasa</p>
          <p className="mono-data text-steel/70">Objectif : RNCP 41352 · Dirigeant d’entreprise de sécurité</p>
          <p className="mono-data hidden text-steel/70 md:block">{identity.coords} · Mérignac</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Revenir en haut de page"
            className="group flex items-center gap-2 mono-data text-steel transition-colors duration-300 hover:text-signal"
          >
            Haut de page
            <ChevronDown className="size-4 rotate-180 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
