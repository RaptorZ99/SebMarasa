import { useMemo, useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { usePageMeta } from '../hooks/usePageMeta'
import { environments, img, missions, type Mission } from '../data/profile'
import { Chip } from '../components/Chip'
import { CTABand } from '../components/CTABand'
import { Exhibit } from '../components/Exhibit'
import { PageHeader } from '../components/PageHeader'
import { PageTransition } from '../components/PageTransition'
import { PaperSection } from '../components/PaperSection'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Stamp } from '../components/Stamp'

function MissionCard({ mission }: { mission: Mission }) {
  return (
    <Reveal>
      <article
        className={
          mission.long
            ? 'relative border border-ink/15 border-l-[3px] border-l-signal-deep bg-paper p-5 sm:p-7'
            : 'relative border border-ink/15 bg-paper p-5 sm:p-7'
        }
      >
        {mission.long && (
          <Stamp rotate={5} className="absolute -top-4 right-4 bg-paper text-signal-deep sm:right-6">
            Mission longue
          </Stamp>
        )}
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
          <div>
            <h3 className="font-expanded text-lg font-bold uppercase leading-tight sm:text-xl">{mission.company}</h3>
            <p className="mono-data mt-1.5 text-ink-soft">{mission.role}</p>
            {mission.org && <p className="kicker kicker-xs mt-2 text-signal-deep">{mission.org}</p>}
          </div>
          <div className="text-left sm:text-right">
            <p className="mono-data text-ink/80">{mission.period}</p>
            <p className="kicker mt-1.5 text-signal-deep">{mission.duration}</p>
          </div>
        </div>
        <p className="mt-4 max-w-[72ch] text-[15px]/relaxed text-ink/85">{mission.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {mission.tags.map((tag) => (
            <Chip key={tag} tone="paper">
              {tag}
            </Chip>
          ))}
        </div>
      </article>
    </Reveal>
  )
}

function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.6'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })

  const groups = useMemo(() => {
    const map = new Map<string, Mission[]>()
    for (const m of missions) {
      const arr = map.get(m.year) ?? []
      arr.push(m)
      map.set(m.year, arr)
    }
    return [...map.entries()]
  }, [])

  return (
    <div ref={ref} className="relative mt-12">
      <span aria-hidden className="absolute bottom-2 left-[5px] top-2 w-px bg-ink/15" />
      <motion.span
        aria-hidden
        style={{ scaleY }}
        className="absolute bottom-2 left-1 top-2 w-[3px] origin-top bg-signal-deep"
      />
      <div className="space-y-16">
        {groups.map(([year, ms]) => (
          <div key={year} className="relative grid gap-6 pl-8 sm:pl-12 lg:grid-cols-[170px_1fr] lg:gap-10">
            <span
              aria-hidden
              className="absolute left-0 top-2 size-[11px] rounded-full border-2 border-signal-deep bg-paper"
            />
            <div className="self-start lg:sticky lg:top-32">
              <span
                className="display-title text-4xl text-transparent lg:text-5xl"
                style={{ WebkitTextStroke: '1.5px rgb(11 13 16 / 0.32)' }}
              >
                {year}
              </span>
            </div>
            <div className="space-y-5">
              {ms.map((m) => (
                <MissionCard key={m.company + m.period} mission={m} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Parcours() {
  usePageMeta(
    'Parcours · Sébastien Marasa',
    '13 missions de sécurité privée entre 2018 et 2026 : distribution, hospitalier, événementiel, gares, ERP. Le détail du parcours de Sébastien Marasa.',
  )

  return (
    <PageTransition label="Parcours">
      <PageHeader
        refNo="Réf. 02"
        kicker="Parcours opérationnel · 2018 → 2026"
        title={
          <>
            Treize missions.
            <br />
            Tous les terrains.
          </>
        }
        lead="Multiplier volontairement les environnements, c’est le chemin le plus exigeant, et le plus court, pour comprendre un métier en profondeur. Chaque mission ci-dessous est une pièce du dossier."
        meta={
          <div className="flex flex-wrap gap-2.5">
            <Chip>11 sociétés</Chip>
            <Chip>Mission la plus longue : 20 mois</Chip>
            <Chip>8 environnements</Chip>
            <Chip>SSIAP 1 en poste</Chip>
          </div>
        }
      />

      <div className="container-x">
        <Reveal>
          <Exhibit
            src={img.vesteSecurite}
            alt="Vue arrière d'une veste d'agent portant l'inscription Sécurité"
            label="Pièce 02 · En poste"
            note="La tenue ne fait pas l’agent. La constance, si."
            ratio="aspect-[16/7]"
            imgClassName="object-[50%_62%]"
          />
        </Reveal>
      </div>

      <PaperSection className="mt-16 sm:mt-24">
        <SectionHeading
          refNo="Réf. 02.A"
          kicker="Journal des missions"
          title="La chronologie, mission par mission."
          lead="Les contrats courts sont l’usage du secteur ; les missions longues, elles, se méritent. Les deux disent la même chose : une adaptation immédiate et une fiabilité qui donne envie de prolonger."
        />
        <Timeline />
      </PaperSection>

      <PaperSection className="mt-16 sm:mt-24">
        <SectionHeading
          refNo="Réf. 02.B"
          kicker="Environnements couverts"
          title="Huit terrains, une même exigence."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {environments.map((env, i) => (
            <Reveal key={env.name} delay={(i % 4) * 0.06}>
              <div className="h-full border border-ink/15 p-5 transition-colors duration-300 hover:border-signal-deep/50">
                <env.icon className="size-5 text-signal-deep" />
                <p className="mt-4 font-semiexp text-base font-bold uppercase leading-tight">{env.name}</p>
                <p className="mono-data mt-2 text-ink-soft">{env.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PaperSection>

      <CTABand
        className="mt-4"
        title="La suite du dossier : les preuves."
        to="/competences"
        label="Voir les compétences"
        note="Certifications vérifiables : CNAPS · SSIAP · SST"
      />
    </PageTransition>
  )
}
