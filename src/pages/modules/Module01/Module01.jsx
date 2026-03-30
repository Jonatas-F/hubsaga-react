import React from 'react'
import './Module01.css'

function Module01({ onGoHome }) {
  return (
    <main className="module-page">
      <section className="module-hero">
        <span className="module-eyebrow">Módulo 01</span>
        <h1>Mentalidade de dono</h1>
        <p>
          Esta é a página do módulo 1. Se ela aparecer, o problema estava no conteúdo anterior
          do arquivo.
        </p>

        <button type="button" className="module-button" onClick={onGoHome}>
          Voltar para home
        </button>
      </section>
    </main>
  )
}

export default Module01