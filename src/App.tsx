import { Route, Routes, useLocation } from 'react-router'
import { AnimatePresence } from 'motion/react'
import { Footer } from './components/Footer'
import { Grain } from './components/Grain'
import { Header } from './components/Header'
import { ScrollProgress } from './components/ScrollProgress'
import Competences from './pages/Competences'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Parcours from './pages/Parcours'
import Projet from './pages/Projet'

export default function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-dvh">
      <a
        href="#contenu"
        className="kicker sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-signal focus:px-4 focus:py-2 focus:text-ink"
      >
        Aller au contenu
      </a>
      <ScrollProgress />
      <Grain />
      <Header />
      <div id="contenu">
        <AnimatePresence
          mode="wait"
          onExitComplete={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/parcours" element={<Parcours />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/projet" element={<Projet />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}
