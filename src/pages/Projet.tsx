import { Briefcase, GraduationCap } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import {
  engagementCentre,
  engagementEntreprise,
  formationSheet,
  img,
  modalites,
  referentiel,
  trajectoire,
  type Icon,
} from '../data/profile'
import { CTABand } from '../components/CTABand'
import { Exhibit } from '../components/Exhibit'
import { PageHeader } from '../components/PageHeader'
import { PageTransition } from '../components/PageTransition'
import { PaperSection } from '../components/PaperSection'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Stamp } from '../components/Stamp'

function EngagementPanel({
  icon: PanelIcon,
  kicker,
  title,
  items,
}: {
  icon: Icon
  kicker: string
  title: string
  items: { icon: Icon; strong: string; text: string }[]
}) {
  return (
    <div className="flex h-full flex-col border border-ink/15">
      <div className="border-b border-ink/15 p-6 sm:p-8">
        <PanelIcon className="size-6 text-signal-deep" />
        <p className="kicker mt-4 text-signal-deep">{kicker}</p>
        <h3 className="display-title mt-3 text-2xl sm:text-[1.7rem]">{title}</h3>
      </div>
      <ul className="flex-1 space-y-6 p-6 sm:p-8">
        {items.map((item) => (
          <li key={item.strong} className="flex gap-4">
            <item.icon aria-hidden className="mt-0.5 size-5 shrink-0 text-signal-deep" />
            <p className="text-[14.5px]/relaxed text-ink/80">
              <strong className="block font-semibold text-ink">{item.strong}</strong>
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Projet() {
  usePageMeta(
    'Le projet · Dirigeant d’entreprise de sécurité (RNCP 41352)',
    'Le projet de Sébastien Marasa : préparer le titre Dirigeant d’entreprise de sécurité (RNCP 41352, niveau 5) en alternance avec ASP Training. Ce qu’il apporte au centre de formation et à l’entreprise d’accueil.',
  )

  return (
    <PageTransition label="Le projet">
      <PageHeader
        refNo="Réf. 04"
        kicker="Objectif · RNCP 41352"
        title={
          <>
            Dirigeant d’entreprise
            <br />
            de sécurité.
          </>
        }
        lead="Une certification de niveau 5, préparée en alternance avec ASP Training, qui délivre le titre exigé pour l’agrément dirigeant CNAPS. Six ans de terrain m’ont conduit à cette porte : il ne manque que l’entreprise qui m’aidera à l’ouvrir."
      />

      {/* ——— Feuillet : fiche formation ——— */}
      <PaperSection className="mt-2">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <SectionHeading refNo="Réf. 04.A" kicker="Fiche officielle" title="La formation, noir sur blanc." />
          <Stamp className="mt-1 text-valid-deep" rotate={6}>
            Fiche active
          </Stamp>
        </div>

        <dl className="mt-12 border-t border-ink/15">
          {formationSheet.map((row) => (
            <div key={row.label} className="grid gap-1 border-b border-ink/15 py-4 sm:grid-cols-[220px_1fr] sm:gap-8">
              <dt className="kicker pt-1 text-ink-soft">{row.label}</dt>
              <dd className="text-[15px] font-medium text-ink/90">{row.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mono-data mt-8 max-w-[86ch] text-ink-soft">
          Depuis la loi Sécurité globale (n° 2021-646), dirigeants, gérants et chefs de services internes de
          sécurité doivent justifier d’un agrément délivré par le CNAPS, obtenu notamment par un titre RNCP
          comme celui-ci. Recruter un alternant sur cette certification, c’est former son futur encadrement.
        </p>
      </PaperSection>

      {/* ——— Feuillet : pourquoi ——— */}
      <PaperSection className="mt-16 sm:mt-24">
        <SectionHeading refNo="Réf. 04.B" kicker="Motivation" title="Pourquoi la direction." />
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-[320px] lg:mx-0">
            <Exhibit
              src={img.portraitUniforme}
              alt="Sébastien en tenue noire de service, dans un ascenseur de site"
              label="Pièce 08.B · En service"
              note="Tenue de poste"
              tone="paper"
              ratio="aspect-[4/5]"
            />
          </Reveal>
          <div>
            <Reveal>
              <blockquote className="border-l-[3px] border-signal-deep pl-6 sm:pl-8">
                <p className="display-title text-[clamp(1.5rem,3vw,2.4rem)] normal-case leading-tight">
                  « La qualité d’une prestation se décide avant la première ronde. »
                </p>
              </blockquote>
            </Reveal>
            <div className="mt-8 space-y-5 text-[15px]/relaxed text-ink/85 sm:text-base/relaxed">
              <Reveal delay={0.08}>
                <p>
                  En six ans, j’ai vécu des dispositifs remarquables et d’autres improvisés. La différence ne se
                  jouait jamais sur le terrain : elle se jouait avant, dans l’analyse de risques, le
                  dimensionnement des équipes, la clarté des consignes, le respect du cadre légal.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p>
                  C’est ce niveau de responsabilité que je veux atteindre. Pas pour quitter le terrain, mais pour
                  le servir mieux. Un dirigeant qui a tenu tous les postes sait ce qu’il demande, sait le former,
                  et sait le défendre face au donneur d’ordre.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </PaperSection>

      {/* ——— Feuillet : référentiel × terrain ——— */}
      <PaperSection className="mt-16 sm:mt-24">
        <SectionHeading
          refNo="Réf. 04.C"
          kicker="Référentiel × terrain"
          title="Ce que la formation exige, ce que j’apporte déjà."
          lead="Huit blocs du référentiel RNCP 41352, mis en regard de six ans de pratique. La formation ne partira pas d’une page blanche."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {referentiel.map((domain, i) => (
            <Reveal key={domain.title} delay={(i % 2) * 0.07}>
              <div className="h-full border border-ink/15 p-6 transition-colors duration-300 hover:border-signal-deep/50 sm:p-7">
                <div className="flex items-center gap-3">
                  <domain.icon className="size-5 shrink-0 text-signal-deep" />
                  <h3 className="font-semiexp text-[15px] font-bold uppercase leading-tight">{domain.title}</h3>
                </div>
                <div className="mt-5 space-y-4 border-t border-ink/10 pt-5">
                  <div>
                    <p className="kicker kicker-xs text-ink-soft">La formation</p>
                    <p className="mt-1.5 text-[14px]/relaxed text-ink/75">{domain.formation}</p>
                  </div>
                  <div>
                    <p className="kicker kicker-xs text-signal-deep">Mon terrain</p>
                    <p className="mt-1.5 text-[14px]/relaxed font-medium text-ink/90">{domain.terrain}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </PaperSection>

      {/* ——— Feuillet : double engagement ——— */}
      <PaperSection className="mt-16 sm:mt-24">
        <SectionHeading
          refNo="Réf. 04.D"
          kicker="Double engagement"
          title="Deux interlocuteurs, deux promesses."
          lead="Une alternance réussie se joue des deux côtés. Voici, noir sur blanc, ce que chacun peut attendre de moi."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-6">
          <Reveal>
            <EngagementPanel
              icon={GraduationCap}
              kicker="Au centre de formation"
              title="Un candidat qui tire le groupe."
              items={engagementCentre}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <EngagementPanel
              icon={Briefcase}
              kicker="À l’entreprise d’accueil"
              title="Une recrue rentable dès le jour 1."
              items={engagementEntreprise}
            />
          </Reveal>
        </div>

        <div className="mt-10 grid gap-3 border-t border-ink/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {modalites.map((m, i) => (
            <Reveal key={m.title} delay={(i % 4) * 0.06}>
              <div className="flex gap-4">
                <m.icon className="mt-0.5 size-5 shrink-0 text-signal-deep" />
                <div>
                  <p className="kicker text-ink-soft">{m.title}</p>
                  <p className="mt-1.5 text-[14.5px] font-medium text-ink/90">{m.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </PaperSection>

      {/* ——— Feuillet : trajectoire ——— */}
      <PaperSection className="mt-16 sm:mt-24">
        <SectionHeading
          refNo="Réf. 04.E"
          kicker="Trajectoire"
          title="Où je serai dans cinq ans."
          lead="Un plan de carrière assumé, parce qu’un dirigeant se juge d’abord à sa capacité de se projeter."
        />
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-[300px] lg:mx-0">
            <Exhibit
              src={img.capDirection}
              alt="Sébastien de dos, sac à la main, face à une porte"
              label="Pièce 08 · Le cap"
              note="Prochaine étape : la direction"
              tone="paper"
              ratio="aspect-[3/4]"
            />
          </Reveal>
          <div className="space-y-8">
            {trajectoire.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="relative border-t-2 border-ink pt-5">
                  <span aria-hidden className="absolute -top-[5px] left-0 size-2 rotate-45 bg-signal-deep" />
                  <p className="kicker text-signal-deep">{step.period}</p>
                  <h3 className="display-title mt-2 text-2xl">{step.title}</h3>
                  <p className="mt-2 text-[14.5px]/relaxed text-ink-soft">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </PaperSection>

      <CTABand
        className="mt-4"
        title="Un dossier sérieux cherche une entreprise sérieuse."
        to="/contact"
        label="Prendre contact"
        note="Réponse sous 24 h, entretien sous 48 h"
      />
    </PageTransition>
  )
}
