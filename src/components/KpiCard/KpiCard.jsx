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
    <button type="button" className="kpi-card-component" onClick={onClick}>
      <div className="kpi-card-top">
        <small className="kpi-card-eyebrow">{eyebrow}</small>

        <span className="kpi-card-icon" aria-hidden="true">
          ↗
        </span>
      </div>

      <div className="kpi-card-content">
        <h3>{title}</h3>
        <strong className="kpi-card-subtitle">{subtitle}</strong>
        <p>{text}</p>
      </div>

      <div className="kpi-card-footer">
        <span className="kpi-card-cta">{cta}</span>
      </div>
    </button>
  )
}

export default KpiCard