import React from 'react'
import './KpiCard.css'

function KpiCard({
  eyebrow,
  title,
  subtitle,
  text,
  cta = 'Abrir página do KPI',
  onClick,
}) {
  return (
    <button type="button" className="kpi-card-component button-reset" onClick={onClick}>
      <div className="kpi-card-top">
        <small>{eyebrow}</small>
        <i aria-hidden="true">↗</i>
      </div>

      <div className="kpi-card-content">
        <h3>{title}</h3>
        <strong>{subtitle}</strong>
        <p>{text}</p>
      </div>

      <div className="kpi-card-footer">
        <span>{cta}</span>
      </div>
    </button>
  )
}

export default KpiCard