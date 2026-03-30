import React from 'react'
import './Topbar.css'

function Topbar({ isHome, onGoHome, onGoModules, onGoKpis }) {
  const handleModulesClick = () => {
    if (isHome) {
      document.getElementById('modulos')?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    onGoModules()
  }

  const handleKpisClick = () => {
    if (isHome) {
      document.getElementById('kpis')?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    onGoKpis()
  }

  return (
    <header className="topbar">
      <div className="brand-block">
        <span className="brand-mark">SAGA</span>
        <span className="brand-sub">
          {isHome ? 'Customer Experience Academy' : 'Treinamento de Atendimento'}
        </span>
      </div>

      <nav className="main-nav" aria-label="Navegação principal">
        <button type="button" className="nav-link button-reset" onClick={onGoHome}>
          Home
        </button>

        <button type="button" className="nav-link button-reset" onClick={handleModulesClick}>
          Módulos
        </button>

        <button type="button" className="nav-link button-reset" onClick={handleKpisClick}>
          KPIs
        </button>
      </nav>

      <button
        type="button"
        className="ghost-button button-reset"
        onClick={isHome ? handleModulesClick : onGoHome}
      >
        {isHome ? 'Ver estrutura' : 'Voltar para home'}
      </button>
    </header>
  )
}

export default Topbar