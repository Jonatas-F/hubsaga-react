import React from 'react'
import './Recuperacao.css'

const cadence = [
  'Leitura semanal por faixa de atraso e leitura mensal da performance consolidada.',
  'Acompanhamento por atendente, proposta usada e tempo médio de regularização.',
  'Separação entre recuperação inicial, atraso recorrente e casos mais críticos.',
  'Cruzamento com churn, permanência e perfil de contrato.',
]

const whenBad = [
  'Abordagem acusatória ou fria.',
  'Proposta sem aderência à realidade do aluno.',
  'Ação tardia, quando o atraso já virou desgaste relacional.',
  'Falta de follow-up estruturado após a primeira abordagem.',
]

const actions = [
  'Segmentar carteiras por faixa de atraso e perfil.',
  'Criar árvore de ofertas por cenário.',
  'Medir conversão por abordagem, proposta e atendente.',
  'Acompanhar tempo médio de regularização e risco de cancelamento após cobrança.',
]

function Recuperacao({ onGoHome }) {
  return (
    <main className="kpi-page">
      <section className="kpi-hero">
        <div className="kpi-hero-copy">
          <span className="kpi-eyebrow">KPI 08</span>
          <h1>Recuperação</h1>

          <p>
            O KPI de recuperação mede quanto da carteira em atraso volta a ficar
            regular. Ele ajuda a enxergar eficiência da cobrança com empatia,
            sem olhar apenas para recebimento pontual, mas também para
            permanência e preservação da relação.
          </p>

          <div className="kpi-highlight-band">
            <small>Fórmula</small>
            <strong>
              (contratos regularizados ÷ contratos abordados em atraso) × 100
            </strong>
          </div>

          <div className="kpi-actions">
            <button
              type="button"
              className="kpi-primary-button button-reset"
              onClick={onGoHome}
            >
              Voltar para home
            </button>
          </div>
        </div>

        <div className="kpi-hero-side">
          <article className="kpi-info-card">
            <small>O que mede</small>
            <p>Quanto da carteira em atraso volta a ficar regular.</p>
          </article>

          <article className="kpi-info-card">
            <small>Leitura gerencial</small>
            <p>
              O foco desse KPI não é apenas cobrar. É regularizar com
              inteligência, reduzir inadimplência e evitar que o tema financeiro
              se transforme em churn.
            </p>
          </article>
        </div>
      </section>

      <section className="kpi-section">
        <div className="kpi-section-heading">
          <span className="kpi-eyebrow">Metas e benchmark</span>
          <h2>Mercado, faixa saudável e ideal</h2>
          <p>
            Assim como churn, recuperação depende muito de produto, perfil do
            aluno, regra comercial, política de negociação e faixa de atraso.
            Por isso, a leitura mais útil é comparativa e segmentada.
          </p>
        </div>

        <div className="kpi-detail-grid kpi-three-columns">
          <article className="kpi-detail-card">
            <h3>Mercado</h3>
            <p>
              Não existe benchmark universal que funcione bem para todos os
              cenários educacionais. O ideal é comparar por faixa de atraso,
              unidade, produto e perfil de contrato.
            </p>
          </article>

          <article className="kpi-detail-card">
            <h3>Faixa saudável</h3>
            <p>
              A meta saudável recomendada é melhorar de forma contínua a
              conversão de regularização e reduzir o tempo médio de recuperação,
              sempre olhando por segmento e não só no agregado.
            </p>
          </article>

          <article className="kpi-detail-card">
            <h3>Faixa ideal</h3>
            <p>
              A faixa ideal é operar com negociação personalizada, baixa
              escalada para cancelamento e alta efetividade especialmente nas
              faixas iniciais de atraso.
            </p>
          </article>
        </div>
      </section>

      <section className="kpi-section">
        <div className="kpi-section-heading">
          <span className="kpi-eyebrow">Rotina de gestão</span>
          <h2>Como acompanhar esse KPI</h2>
        </div>

        <div className="kpi-detail-grid kpi-two-columns">
          <article className="kpi-detail-card">
            <h3>Cadência recomendada</h3>
            <ul className="kpi-clean-list">
              {cadence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="kpi-detail-card">
            <h3>Quando esse KPI piora</h3>
            <ul className="kpi-clean-list">
              {whenBad.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="kpi-section">
        <div className="kpi-section-heading">
          <span className="kpi-eyebrow">Plano de reação</span>
          <h2>O que fazer quando sair da meta</h2>
        </div>

        <div className="kpi-detail-grid kpi-one-column">
          <article className="kpi-detail-card">
            <ul className="kpi-clean-list">
              {actions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Recuperacao