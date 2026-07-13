import { usePageMeta } from '../hooks/usePageMeta'
import { certifications, identity, img, languages, terrainSkills, transverseSkills } from '../data/profile'
import { Chip } from '../components/Chip'
import { CTABand } from '../components/CTABand'
import { CornerTicks, Exhibit } from '../components/Exhibit'
import { ShieldMark } from '../components/Logo'
import { PageHeader } from '../components/PageHeader'
import { PageTransition } from '../components/PageTransition'
import { PaperSection } from '../components/PaperSection'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Stamp } from '../components/Stamp'

const DISCIPLINE = [
  {
    src: img.disciplineSalle,
    alt: 'Salle de musculation, rack d’haltères au premier plan',
    label: 'Pièce 04 · La salle',
    note: 'Discipline quotidienne',
  },
  {
    src: img.agentMotoSecurite,
    alt: 'Sébastien en tee-shirt Sécurité, assis sur sa moto sportive',
    label: 'Pièce 05 · La tenue',
    note: 'Le métier suit partout',
  },
  {
    src: img.passionMoto,
    alt: 'Moto sportive noire garée sous les arbres',
    label: 'Pièce 06 · Deux roues',
    note: 'Permis A2, véhiculé',
  },
  {
    src: img.passionAuto,
    alt: 'Voiture de course en paddock lors d’un rassemblement',
    label: 'Pièce 07 · Sport auto',
    note: 'Culture paddock',
  },
]

export default function Competences() {
  usePageMeta(
    'Compétences · Sébastien Marasa',
    'Carte professionnelle CNAPS valide jusqu’en 2030, CQP APS, SSIAP 1, SST, H0B0. Savoir-faire terrain et compétences transverses de Sébastien Marasa.',
  )

  return (
    <PageTransition label="Compétences">
      <PageHeader
        refNo="Réf. 03"
        kicker="Compétences & accréditations"
        title={
          <>
            Certifié. À jour.
            <br />
            Vérifiable.
          </>
        }
        lead="Dans ce métier, la parole ne suffit pas : tout se contrôle. Carte professionnelle, certifications, habilitations : chaque ligne de cette page peut être vérifiée auprès des organismes émetteurs."
      />

      {/* ——— Feuillet : accréditations ——— */}
      <PaperSection className="mt-2">
        <SectionHeading refNo="Réf. 03.A" kicker="Accréditations officielles" title="Les papiers sont en règle." />

        <Reveal className="mt-12">
          <div className="relative overflow-hidden border-2 border-ink bg-paper-2 p-6 sm:p-9">
            <span aria-hidden className="absolute inset-3 text-signal-deep/70">
              <CornerTicks />
            </span>
            <div className="relative grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
              <ShieldMark className="size-14 text-ink sm:size-16" />
              <div>
                <p className="kicker text-signal-deep">Carte professionnelle · Surveillance & gardiennage</p>
                <p className="display-title mt-3 text-3xl sm:text-4xl">CNAPS</p>
                <p className="mono-data mt-3 text-ink-soft">{identity.cardMasked}</p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  <Chip tone="paper">Valide jusqu’au {identity.cardValidity}</Chip>
                  <Chip tone="paper">Livre VI du CSI</Chip>
                  <Chip tone="paper">Code de déontologie</Chip>
                </div>
              </div>
              <Stamp rotate={6} className="justify-self-start text-valid-deep md:justify-self-end">
                Valide
              </Stamp>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.code} delay={(i % 2) * 0.07}>
              <div className="h-full border border-ink/15 p-6 transition-colors duration-300 hover:border-signal-deep/50 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <cert.icon className="size-6 text-signal-deep" />
                  <span className="mono-data flex items-center gap-2 text-valid-deep">
                    <span aria-hidden className="size-1.5 rounded-full bg-valid-deep" />À jour
                  </span>
                </div>
                <h3 className="font-expanded mt-5 text-2xl font-bold uppercase">{cert.code}</h3>
                <p className="mt-1 text-[15px] font-medium text-ink/85">{cert.name}</p>
                <p className="mono-data mt-1.5 text-ink-soft">{cert.org}</p>
                <ul className="mt-5 space-y-2 border-t border-ink/10 pt-5">
                  {cert.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[14px]/relaxed text-ink/80">
                      <span aria-hidden className="mt-[7px] size-1.5 shrink-0 rotate-45 bg-signal-deep/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </PaperSection>

      {/* ——— Feuillet : savoir-faire ——— */}
      <PaperSection className="mt-16 sm:mt-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div>
            <SectionHeading
              refNo="Réf. 03.B"
              kicker="Savoir-faire terrain"
              title="Huit gestes maîtrisés."
              lead="Le socle opérationnel, éprouvé sur 13 missions : celui qu’un futur dirigeant doit connaître par cœur pour l’exiger de ses équipes."
            />
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {terrainSkills.map((skill, i) => (
                <Reveal key={skill.title} delay={(i % 2) * 0.06}>
                  <div className="h-full border border-ink/15 p-5 transition-colors duration-300 hover:border-signal-deep/50">
                    <skill.icon className="size-5 text-signal-deep" />
                    <p className="mt-3 font-semiexp text-[15px] font-bold uppercase leading-tight">{skill.title}</p>
                    <p className="mt-2 text-[13.5px]/relaxed text-ink-soft">{skill.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <Reveal>
              <Exhibit
                src={img.brassardSecurite}
                alt="Brassard orange Sécurité porté sur un blouson noir"
                label="Pièce 03 · Le signal"
                note="L’orange de ce dossier"
                tone="paper"
                ratio="aspect-[4/3]"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="kicker text-signal-deep">Langues</p>
                <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
                  {languages.map((lang) => (
                    <li key={lang.name} className="flex items-baseline justify-between gap-4 py-3">
                      <span className="font-semiexp text-[15px] font-bold uppercase">{lang.name}</span>
                      <span className="mono-data text-right text-ink-soft">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </PaperSection>

      {/* ——— Feuillet : au-delà du terrain ——— */}
      <PaperSection className="mt-16 sm:mt-24">
        <SectionHeading
          refNo="Réf. 03.C"
          kicker="Au-delà du terrain"
          title="Ce qui sépare un futur dirigeant d’un agent de plus."
          lead="Le référentiel RNCP 41352 attend d’un dirigeant qu’il communique, vende et se positionne en ligne. Ces compétences-là, je les pratique déjà, en autodidacte assumé."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {transverseSkills.map((skill, i) => (
            <Reveal key={skill.title} delay={(i % 4) * 0.06}>
              <div className="flex h-full flex-col border border-ink/15 p-6 transition-colors duration-300 hover:border-signal-deep/50">
                <skill.icon className="size-6 text-signal-deep" />
                <h3 className="font-semiexp mt-4 text-lg font-bold uppercase leading-tight">{skill.title}</h3>
                <p className="mt-2 text-[14px]/relaxed text-ink/80">{skill.lead}</p>
                <p className="mono-data mt-auto pt-5 text-signal-deep">↳ {skill.payoff}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PaperSection>

      {/* ——— Feuillet : discipline ——— */}
      <PaperSection className="mt-16 sm:mt-24">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <SectionHeading
            refNo="Réf. 03.D"
            kicker="Hygiène de vie"
            title="La discipline ne s’improvise pas."
            lead="Musculation quotidienne, mécanique, lecture : une condition physique et une constance au service du métier, et un permis A2 qui rend mobile par tous les temps."
          />
          <Stamp className="mt-1 text-signal-deep">Constance</Stamp>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {DISCIPLINE.map((item, i) => (
            <Reveal key={item.label} delay={(i % 4) * 0.06}>
              <Exhibit
                src={item.src}
                alt={item.alt}
                label={item.label}
                note={item.note}
                tone="paper"
                ratio="aspect-[3/4]"
              />
            </Reveal>
          ))}
        </div>
        <p className="mono-data mt-8 text-ink-soft">Également au registre : lecture, photographie, création vidéo.</p>
      </PaperSection>

      <CTABand
        className="mt-4"
        title="Le terrain est acquis. Place à la stratégie."
        to="/projet"
        label="Lire le projet"
        note="RNCP 41352 · Dirigeant d’entreprise de sécurité"
      />
    </PageTransition>
  )
}
