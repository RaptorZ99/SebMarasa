import { usePageMeta } from '../hooks/usePageMeta'
import { Cta } from '../components/Cta'
import { PageTransition } from '../components/PageTransition'
import { Stamp } from '../components/Stamp'

export default function NotFound() {
  usePageMeta('404 · Zone non répertoriée', 'Cette zone n’est pas répertoriée dans le dossier.')

  return (
    <PageTransition label="Zone inconnue">
      <section className="relative flex min-h-[78vh] items-center overflow-hidden">
        <div
          aria-hidden
          className="grid-dots-dark absolute inset-0 [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]"
        />
        <div className="container-x relative py-32 text-center">
          <Stamp className="text-signal" rotate={-6}>
            Accès refusé
          </Stamp>
          <p className="display-title outline-text mt-8 text-[clamp(6rem,24vw,15rem)] leading-none">404</p>
          <p className="mono-data mx-auto mt-6 max-w-[40ch] text-steel">
            Cette zone n’est pas répertoriée dans le dossier, ou son accès est restreint.
          </p>
          <div className="mt-10 flex justify-center">
            <Cta to="/" arrow>
              Retour au poste de contrôle
            </Cta>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
