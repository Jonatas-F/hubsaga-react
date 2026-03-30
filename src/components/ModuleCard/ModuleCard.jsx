import React from 'react'
import './ModuleCard.css'

function ModuleCard({ eyebrow, title, text, cta = 'Abrir página do módulo', onClick }) {
  return (
    <button type="button" className="module-card-component button-reset" onClick={onClick}>
      <div className="module-card-top">
        <span>{eyebrow}</span>
        <i aria-hidden="true">↗</i>
      </div>

      <div className="module-card-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

      <div className="module-card-footer">
        <strong>{cta}</strong>
      </div>
    </button>
  )
}

export default ModuleCard