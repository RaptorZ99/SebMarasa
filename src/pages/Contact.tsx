import { useState } from 'react'
import { CalendarDays, Check, Copy, Mail, MapPin, Phone } from 'lucide-react'
import { usePageMeta } from '../hooks/usePageMeta'
import { identity, img } from '../data/profile'
import { Chip } from '../components/Chip'
import { Exhibit } from '../components/Exhibit'
import { PageHeader } from '../components/PageHeader'
import { PageTransition } from '../components/PageTransition'
import { PaperSection } from '../components/PaperSection'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

// Envoi réel sans serveur via FormSubmit (gratuit, illimité, endpoint AJAX → réponse JSON).
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${identity.email}`

type Status = 'idle' | 'submitting' | 'success' | 'error'

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(value)
        setCopied(true)
        setTimeout(() => setCopied(false), 1800)
      }}
      aria-label={`Copier ${label}`}
      className="inline-flex items-center gap-2 mono-data text-ink-soft transition-colors duration-300 hover:text-signal-deep"
    >
      {copied ? <Check className="size-3.5 text-valid-deep" /> : <Copy className="size-3.5" />}
      <span aria-live="polite">{copied ? 'Copié' : 'Copier'}</span>
    </button>
  )
}

const FIELD_CLASSES =
  'mt-2 w-full rounded-[2px] border border-ink/25 bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-ink/35 transition-colors duration-300 focus:border-signal-deep focus-visible:outline-none disabled:opacity-50'

export default function Contact() {
  usePageMeta(
    'Contact · Sébastien Marasa',
    'Contacter Sébastien Marasa · candidat alternance Dirigeant d’entreprise de sécurité (RNCP 41352). Réponse sous 24 h.',
  )

  const [who, setWho] = useState('Une entreprise de sécurité')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [org, setOrg] = useState('')
  const [message, setMessage] = useState('')
  const [honey, setHoney] = useState('') // piège anti-robot : reste vide pour un humain
  const [status, setStatus] = useState<Status>('idle')

  const submit = async () => {
    if (status === 'submitting') return
    if (honey) {
      // Champ piège rempli → robot : on simule un succès sans rien envoyer.
      setStatus('success')
      return
    }
    setStatus('submitting')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Nom: name,
          email,
          'Type de contact': who,
          Organisation: org || 'Non précisé',
          Message: message,
          _subject: `Contact via marasa.pro · ${who}`,
          _replyto: email,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const data = await res.json().catch(() => ({}) as Record<string, unknown>)
      if (res.ok && String(data.success) === 'true') {
        setStatus('success')
        setName('')
        setEmail('')
        setOrg('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <PageTransition label="Contact">
      <PageHeader
        refNo="Réf. 05"
        kicker="Contact · transmission directe"
        title="Discutons de vive voix."
        lead="Centre de formation ou entreprise d’accueil : je réponds sous 24 heures, et je me déplace pour un entretien sous 48 heures en Nouvelle-Aquitaine."
        meta={
          <div className="flex flex-wrap gap-2.5">
            <Chip dot="valid" pulse>
              {identity.availability}
            </Chip>
            <Chip>{identity.licences}</Chip>
          </div>
        }
      />

      <PaperSection className="mt-2">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* ——— Canaux directs ——— */}
          <div className="space-y-4">
            <SectionHeading refNo="Réf. 05.A" kicker="Canaux directs" title="Joignable, vraiment." className="mb-8" />

            <Reveal>
              <div className="border border-ink/15 p-6">
                <div className="flex items-center justify-between gap-4">
                  <Phone className="size-5 text-signal-deep" />
                  <CopyButton value={identity.phone} label="le numéro de téléphone" />
                </div>
                <a
                  href={identity.phoneHref}
                  className="font-expanded mt-4 block text-2xl font-bold tracking-wide transition-colors duration-300 hover:text-signal-deep sm:text-3xl"
                >
                  {identity.phone}
                </a>
                <p className="mono-data mt-2 text-ink-soft">Rappel garanti si vacation en cours.</p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="border border-ink/15 p-6">
                <div className="flex items-center justify-between gap-4">
                  <Mail className="size-5 text-signal-deep" />
                  <CopyButton value={identity.email} label="l’adresse e-mail" />
                </div>
                <a
                  href={`mailto:${identity.email}`}
                  className="font-semiexp mt-4 block break-all text-lg font-bold transition-colors duration-300 hover:text-signal-deep sm:text-xl"
                >
                  {identity.email}
                </a>
                <p className="mono-data mt-2 text-ink-soft">Réponse sous 24 h, pièces jointes bienvenues.</p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border border-ink/15 p-6">
                  <MapPin className="size-5 text-signal-deep" />
                  <p className="mt-4 text-[15px] font-semibold">{identity.location}</p>
                  <p className="mono-data mt-2 text-ink-soft">Mobile France entière</p>
                </div>
                <div className="border border-ink/15 p-6">
                  <CalendarDays className="size-5 text-signal-deep" />
                  <p className="mt-4 text-[15px] font-semibold">Alternance · rentrée 2026</p>
                  <p className="mono-data mt-2 text-ink-soft">Entretien possible sous 48 h</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ——— Formulaire ——— */}
          <Reveal delay={0.1}>
            <div className="border-2 border-ink p-6 sm:p-9">
              <p className="kicker text-signal-deep">Réf. 05.B · Message direct</p>
              <h2 className="display-title mt-4 text-2xl sm:text-3xl">Ouvrons le dossier ensemble.</h2>

              {status === 'success' ? (
                <div className="mt-8 flex flex-col items-start">
                  <span className="flex size-12 items-center justify-center rounded-full bg-valid-deep/10 text-valid-deep">
                    <Check className="size-6" />
                  </span>
                  <p className="display-title mt-5 text-xl">Message envoyé.</p>
                  <p className="mt-3 max-w-[46ch] text-[15px]/relaxed text-ink/80">
                    Merci, votre message est bien parti. Je réponds en général sous 24 heures, directement par
                    e-mail.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-signal-deep underline decoration-signal-deep/40 underline-offset-4 transition-colors hover:decoration-signal-deep"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    void submit()
                  }}
                >
                  <div className="mt-8 space-y-5">
                    <div>
                      <label htmlFor="who" className="kicker text-ink-soft">
                        Vous êtes
                      </label>
                      <select id="who" value={who} onChange={(e) => setWho(e.target.value)} className={FIELD_CLASSES}>
                        <option>Une entreprise de sécurité</option>
                        <option>Un centre de formation</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="kicker text-ink-soft">
                          Votre nom *
                        </label>
                        <input
                          id="name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Prénom Nom"
                          className={FIELD_CLASSES}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="kicker text-ink-soft">
                          Votre e-mail *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="vous@exemple.fr"
                          className={FIELD_CLASSES}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="org" className="kicker text-ink-soft">
                        Organisation
                      </label>
                      <input
                        id="org"
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                        placeholder="Société ou centre"
                        className={FIELD_CLASSES}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="kicker text-ink-soft">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Votre besoin, vos dates, votre contexte…"
                        className={FIELD_CLASSES}
                      />
                    </div>
                    {/* Piège anti-robot : invisible pour un humain */}
                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      value={honey}
                      onChange={(e) => setHoney(e.target.value)}
                      className="hidden"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="mt-6 rounded-[2px] border border-signal-deep/40 bg-signal-deep/5 px-4 py-3 text-[14px] text-signal-deep">
                      L’envoi a échoué. Réessayez, ou écrivez-moi directement à{' '}
                      <a href={`mailto:${identity.email}`} className="font-semibold underline underline-offset-2">
                        {identity.email}
                      </a>
                      .
                    </p>
                  )}

                  <div className="mt-8 flex flex-wrap items-center gap-6">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="group inline-flex items-center justify-center gap-3 rounded-[2px] bg-ink px-6 py-3.5 font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-signal-deep disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === 'submitting' ? (
                        <>
                          <span
                            aria-hidden
                            className="size-3.5 animate-spin rounded-full border-2 border-paper/30 border-t-paper"
                          />
                          Envoi en cours…
                        </>
                      ) : (
                        <>
                          Envoyer le message
                          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </>
                      )}
                    </button>
                    <p className="mono-data max-w-[30ch] text-ink-soft">
                      Envoi direct depuis le site, réponse sous 24 h.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* ——— Hors service ——— */}
        <div className="mt-16 border-t border-ink/15 pt-14">
          <div className="mx-auto grid max-w-3xl items-center gap-10 sm:grid-cols-[240px_1fr]">
            <Reveal className="mx-auto w-full max-w-[240px]">
              <Exhibit
                src={img.horsService}
                alt="Sébastien portant son chien dans les bras, sourire aux lèvres"
                label="Pièce 09 · Hors service"
                note="Mérignac"
                tone="paper"
                ratio="aspect-square"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-center text-lg/relaxed text-ink/80 sm:text-left sm:text-xl/relaxed">
                <span className="font-semibold text-ink">Après le service,</span> la garde rapprochée continue.
                Derrière la rigueur : quelqu’un qu’on a envie d’avoir dans son équipe, et qui a envie d’y rester.
              </p>
            </Reveal>
          </div>
        </div>
      </PaperSection>
    </PageTransition>
  )
}
