import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { heroLines, homeTraits, identity, img, indexRows, marqueeItems, stats } from '../data/profile'
import { Chip } from '../components/Chip'
import { Counter } from '../components/Counter'
import { Cta } from '../components/Cta'
import { CTABand } from '../components/CTABand'
import { Exhibit } from '../components/Exhibit'
import { Marquee } from '../components/Marquee'
import { PageTransition } from '../components/PageTransition'
import { PaperSection } from '../components/PaperSection'
import { Reveal } from '../components/Reveal'
import { RotatingLine } from '../components/RotatingLine'
import { SectionHeading } from '../components/SectionHeading'
import { Stamp } from '../components/Stamp'

const HERO_META = [
  { label: 'Localisation', value: 'Mérignac · Bordeaux Métropole' },
  { label: 'Statut', value: 'Opérationnel, vacations en cours' },
  { label: 'Réf. CNAPS', value: identity.cardMasked },
]

export default function Home() {
  usePageMeta(
    'Sébastien Marasa · De l’agent de sécurité au dirigeant',
    'Six ans de terrain, 13 missions, certifications à jour. Candidat à la formation Dirigeant d’entreprise de sécurité (RNCP 41352) en alternance.',
  )

  return (
    <PageTransition label="Accueil">
      {/* ——— Hero : fiche d'identité opérationnelle ——— */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="grid-dots-dark absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
        />
        <div className="container-x relative pb-16 pt-28 sm:pt-36 lg:pt-40">
          <Reveal>
            <div className="flex items-center gap-3">
              <span aria-hidden className="size-2 animate-blink rounded-full bg-signal" />
              <span className="kicker text-signal">Dossier de candidature · Sécurité privée</span>
              <span aria-hidden className="h-px min-w-8 flex-1 bg-paper/10" />
            </div>
          </Reveal>

          {/* Escalier typographique : SÉBASTIEN pleine largeur, MARASA en retrait,
              l'image logée dans le coin libéré sous la partie droite du prénom. */}
          <div className="mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:items-start lg:gap-x-16 xl:gap-x-20">
            <h1 aria-label="Sébastien Marasa" className="lg:contents">
              <Reveal as="span" delay={0.06} className="block lg:col-span-2">
                <span aria-hidden className="display-title block text-[clamp(2.9rem,11.5vw,9.9rem)] text-paper">
                  Sébastien
                </span>
              </Reveal>
              <Reveal as="span" delay={0.14} className="block lg:col-start-1">
                <span aria-hidden className="display-title mt-2 block text-[clamp(2.1rem,8.1vw,7.55rem)] text-paper lg:mt-4">
                  Marasa<span className="text-signal">.</span>
                </span>
              </Reveal>
            </h1>

            <div className="lg:col-start-1">
              <Reveal delay={0.2}>
                <RotatingLine lines={heroLines} className="mt-7" />
              </Reveal>
              <Reveal delay={0.26}>
                <p className="mt-6 max-w-[54ch] text-base/relaxed text-steel sm:text-lg/relaxed">
                  Six ans d’expérience sur tous les terrains de la sécurité privée : distribution, hôpitaux,
                  stades, gares. Aujourd’hui, je candidate à la formation{' '}
                  <strong className="font-semibold text-paper">Dirigeant d’entreprise de sécurité</strong> (RNCP
                  41352) en alternance, pour passer de l’application des consignes à leur conception.
                </p>
              </Reveal>
              <Reveal delay={0.32}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Cta to="/projet" arrow>
                    Consulter le projet
                  </Cta>
                  <Cta to="/contact" variant="outline">
                    Me contacter
                  </Cta>
                </div>
              </Reveal>
              <Reveal delay={0.38}>
                <div className="mt-9 flex flex-wrap gap-2.5">
                  <Chip dot="valid" pulse>
                    {identity.availability}
                  </Chip>
                  <Chip>Carte pro CNAPS · 2030</Chip>
                  <Chip>SSIAP 1</Chip>
                  <Chip>SST</Chip>
                  <Chip>H0B0</Chip>
                </div>
              </Reveal>
            </div>

            <Reveal
              delay={0.2}
              className="mt-12 w-full max-w-[420px] lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:mr-7 lg:mt-4 lg:max-w-none lg:justify-self-end"
            >
              <Exhibit
                src={img.heroTerrain}
                alt="Sébastien Marasa en polo Sécurité Incendie, assis près de sa moto"
                label="Pièce 01 · Le terrain"
                note="Tenue sécurité incendie"
                scan
                priority
              />
            </Reveal>
          </div>
        </div>

        {/* Ligne d'état */}
        <div className="relative border-y border-paper/10">
          <div className="container-x grid sm:grid-cols-3">
            {HERO_META.map((cell, i) => (
              <div
                key={cell.label}
                className={
                  i === 0
                    ? 'py-4 sm:py-5'
                    : 'border-t border-paper/10 py-4 sm:border-l sm:border-t-0 sm:pl-8 sm:py-5'
                }
              >
                <p className="kicker text-steel/80">{cell.label}</p>
                <p className="mono-data mt-1.5 text-paper/90">{cell.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Environnements couverts ——— */}
      <div className="border-b border-paper/10">
        <Marquee items={marqueeItems} />
      </div>

      {/* ——— Feuillet 01 : profil ——— */}
      <PaperSection className="mt-16 sm:mt-24">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <SectionHeading
            refNo="Réf. 01"
            kicker="Profil opérationnel"
            title={
              <>
                Le métier appris
                <br />
                par le terrain.
              </>
            }
          />
          <Stamp className="mt-1 text-signal-deep">Profil vérifié</Stamp>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="space-y-5 text-[15px]/relaxed text-ink/85 sm:text-base/relaxed">
            <p>
              <strong className="font-semibold">Depuis 2020, je n’ai jamais choisi le confort d’un seul poste.</strong>{' '}
              Grande distribution, milieu hospitalier, stades, salles de concert, gares : j’ai volontairement
              multiplié les environnements pour comprendre la sécurité privée sous toutes ses coutures, ses
              publics, ses risques, ses dispositifs.
            </p>
            <p>
              Cette polyvalence a un fil rouge : la rigueur. Une carte professionnelle valide jusqu’en 2030, des
              certifications SSIAP 1, SST et H0B0 à jour, des mains courantes tenues au cordeau, des consignes
              appliquées puis transmises aux nouveaux agents.
            </p>
            <p>
              Il me reste une marche à franchir, et c’est la bonne : apprendre à concevoir les dispositifs que
              j’ai passé six ans à exécuter.{' '}
              <Link
                to="/projet"
                className="font-semibold text-signal-deep underline decoration-signal-deep/40 underline-offset-4 transition-colors hover:decoration-signal-deep"
              >
                C’est l’objet de mon projet.
              </Link>
            </p>
          </div>

          <div className="grid content-start gap-3 sm:grid-cols-2">
            {homeTraits.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06}>
                <div className="border border-ink/15 p-5 transition-colors duration-300 hover:border-signal-deep/50">
                  <t.icon className="size-5 text-signal-deep" />
                  <p className="mt-3 font-semiexp text-base font-bold uppercase">{t.title}</p>
                  <p className="mono-data mt-1.5 text-ink-soft">{t.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ink/15 pt-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="display-title text-[clamp(2.6rem,5vw,4rem)] text-ink">
                <Counter value={s.value} />
              </p>
              <p className="kicker mt-2 text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </PaperSection>

      {/* ——— Feuillet 02 : index du dossier ——— */}
      <PaperSection className="mt-16 sm:mt-24">
        <SectionHeading refNo="Réf. 02" kicker="Index du dossier" title="Consulter les pièces." />
        <div className="mt-12 border-t border-ink/15">
          {indexRows.map((row, i) => (
            <Reveal key={row.no} delay={i * 0.05}>
              <Link
                to={row.to}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-ink/15 py-6 transition-colors duration-300 hover:bg-ink/[0.04] sm:gap-10 sm:py-8"
              >
                <span className="kicker text-signal-deep">{row.no}</span>
                <span>
                  <span className="display-title block text-[clamp(1.7rem,4.2vw,2.8rem)] transition-colors duration-300 group-hover:text-signal-deep">
                    {row.title}
                  </span>
                  <span className="mono-data mt-1 block text-ink-soft">{row.desc}</span>
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="size-6 text-ink-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal-deep sm:size-8"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </PaperSection>

      <CTABand
        className="mt-4"
        title={
          <>
            Un agent opérationnel aujourd’hui.
            <br />
            Un dirigeant en formation demain.
          </>
        }
        to="/projet"
        label="Découvrir le projet"
        note="RNCP 41352 · Niveau 5 · ASP Training"
      />
    </PageTransition>
  )
}
