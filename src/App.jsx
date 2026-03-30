import React, { useEffect, useMemo, useState } from 'react'
import './styles/global.css'

import Topbar from './components/Topbar/Topbar'
import Home from './pages/Home/Home'

import Module01 from './pages/modules/Module01/Module01'
import Module02 from './pages/modules/Module02/Module02'
import Module03 from './pages/modules/Module03/Module03'
import Module04 from './pages/modules/Module04/Module04'
import Module05 from './pages/modules/Module05/Module05'
import Module06 from './pages/modules/Module06/Module06'

import NPS from './pages/kpis/NPS/NPS'
import CSAT from './pages/kpis/CSAT/CSAT'
import CES from './pages/kpis/CES/CES'
import FCR from './pages/kpis/FCR/FCR'
import TME from './pages/kpis/TME/TME'
import TMA from './pages/kpis/TMA/TMA'
import Churn from './pages/kpis/Churn/Churn'
import Recuperacao from './pages/kpis/Recuperacao/Recuperacao'

function parseHash() {
  const hash = window.location.hash.replace('#', '').trim()

  if (!hash) {
    return { type: 'home', slug: '' }
  }

  if (hash.startsWith('module/')) {
    return {
      type: 'module',
      slug: hash.replace('module/', ''),
    }
  }

  if (hash.startsWith('kpi/')) {
    return {
      type: 'kpi',
      slug: hash.replace('kpi/', ''),
    }
  }

  return { type: 'home', slug: '' }
}

function App() {
  const [view, setView] = useState(parseHash())

  useEffect(() => {
    const handleHashChange = () => {
      setView(parseHash())
      window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const goToHome = () => {
    const cleanUrl = `${window.location.pathname}${window.location.search}`
    window.history.pushState({}, '', cleanUrl)
    setView({ type: 'home', slug: '' })
    window.scrollTo(0, 0)
  }

  const goToHomeSection = (sectionId) => {
    const cleanUrl = `${window.location.pathname}${window.location.search}`
    window.history.pushState({}, '', cleanUrl)
    setView({ type: 'home', slug: '' })

    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
  }

  const goToModule = (slug) => {
    window.location.hash = `module/${slug}`
  }

  const goToKpi = (slug) => {
    window.location.hash = `kpi/${slug}`
  }

  const CurrentPage = useMemo(() => {
    const modulePages = {
      'modulo-1': Module01,
      'modulo-2': Module02,
      'modulo-3': Module03,
      'modulo-4': Module04,
      'modulo-5': Module05,
      'modulo-6': Module06,
    }

    const kpiPages = {
      nps: NPS,
      csat: CSAT,
      ces: CES,
      fcr: FCR,
      tme: TME,
      tma: TMA,
      churn: Churn,
      recuperacao: Recuperacao,
    }

    if (view.type === 'module') {
      return modulePages[view.slug] || Home
    }

    if (view.type === 'kpi') {
      return kpiPages[view.slug] || Home
    }

    return Home
  }, [view])

  const isHome = view.type === 'home'

  return (
    <div className="app-shell">
      <div className="ambient-glow ambient-glow-left" />
      <div className="ambient-glow ambient-glow-right" />

      <Topbar
        isHome={isHome}
        onGoHome={goToHome}
        onGoModules={() => goToHomeSection('modulos')}
        onGoKpis={() => goToHomeSection('kpis')}
      />

      <CurrentPage
        onGoHome={goToHome}
        onGoToModule={goToModule}
        onGoToKpi={goToKpi}
      />
    </div>
  )
}

export default App