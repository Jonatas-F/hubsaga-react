import React from 'react'
import './Hero.css'

function Hero({
  eyebrow,
  title,
  highlight,
  description,
  primaryLabel,
  secondaryLabel,
  onPrimaryClick,
  onSecondaryClick,
  stats = [],
  sideTitle = 'Painel estratégico',
  sideCards = [],
  highlightTitle,
  highlightText,
}) {
  return (
    <section className="hero-component">
      <div className="hero-component-copy">
        {eyebrow && <span className="hero-component-eyebrow">{eyebrow}</span>}

        <h1>
          {title} {highlight && <span>{highlight}</span>}
        </h1>

        {description && <p>{description}</p>}

        {(primaryLabel || secondaryLabel) && (
          <div className="hero-component-actions">
            {primaryLabel && (
              <button
                type="button"
                className="hero-component-primary button-reset"
                onClick={onPrimaryClick}
              >
                {primaryLabel}
              </button>
            )}

            {secondaryLabel && (
              <button
                type="button"
                className="hero-component-secondary button-reset"
                onClick={onSecondaryClick}
              >
                {secondaryLabel}
              </button>
            )}
          </div>
        )}

        {stats.length > 0 && (
          <div className="hero-component-stats">
            {stats.map((item) => (
              <article className="hero-component-stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        )}
      </div>

      <aside className="hero-component-side">
        <div className="hero-component-side-header">
          <span className="hero-component-status-dot" />
          <p>{sideTitle}</p>
        </div>

        {sideCards.length > 0 && (
          <div className="hero-component-side-grid">
            {sideCards.map((card) => (
              <article className="hero-component-side-card" key={card.title}>
                {card.number && <span>{card.number}</span>}
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        )}

        {(highlightTitle || highlightText) && (
          <div className="hero-component-highlight">
            {highlightTitle && <strong>{highlightTitle}</strong>}
            {highlightText && <p>{highlightText}</p>}
          </div>
        )}
      </aside>
    </section>
  )
}

export default Hero