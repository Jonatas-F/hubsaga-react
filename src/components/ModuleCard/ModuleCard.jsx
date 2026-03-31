import React from 'react'
import './ModuleCard.css'

function ModuleCard({ eyebrow, title, text, cta = 'Abrir página do módulo', onClick }) {
  return (
    <button type="button" className="module-card-component button-reset" onClick={onClick}>
      <span>{eyebrow}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <strong>{cta}</strong>
    </button>
  )
}

export default ModuleCard