import React from 'react'
import './TME.css'

const cadence = [
  'Monitoramento diário e intradiário por fila e canal.',
  'Leitura separada por turno, pico de demanda e tipo de atendimento.',
  'Cruzamento com abandono, CSAT e volume recebido.',
  'Acompanhamento em tempo real nos canais síncronos prioritários.',
]

const whenBad = [
  'Escala incompatível com a demanda.',
  'Picos sem contingência operacional.',
  'TMA alto sem causa clara.',
  'Fila única para assuntos de complexidade muito diferente.',
]

const actions = [
  'Revisar previsão de demanda por faixa horária.',
  'Separar filas por prioridade e complexidade.',
  'Criar contingência para horários de pico.',
  'Usar respostas rápidas, triagem e roteamento mais inteligente.',
]

function TME({ onGoHome }) {
  return (
    <main className="kpi-page">
      <section className="kpi-hero">
        <div className="kpi-hero-copy">
          <span className="kpi-eyebrow">KPI 05</span>
          <h1>TME / ASA</h1>
          <p>
            O Tempo Médio de Espera, também lido como Average Speed of Answer em alguns
            contextos, mede quanto tempo o aluno espera até ser atendido. Espera longa
            desgasta a experiência antes mesmo da conversa começar.
          </p>

          <div className="kpi-highlight-band">
            <small>Fórmula</small>
            <strong>tempo total de espera ÷ total de contatos atendidos</strong>
          </div>

          <div className="kpi-actions">
            <button type="button" className="kpi-primary-button button-reset" onClick={onGoHome}>
              Voltar para home
            </button>
          </div>
        </div>

        <div className="kpi-hero-side">
          <article className="kpi-info-card">
            <small>O que mede</small>
            <p>Quanto tempo o aluno espera para ser atendido.</p>
          </article>

          <article className="kpi-info-card">
            <small>Leitura gerencial</small>
            <p>
              O TME mostra fluidez de acesso ao atendimento. Quando piora, o aluno sente
              desorganização, urgência ignorada e menor sensação de cuidado.
            </p>
          </article>
        </div>
      </section>

      <section className="kpi-section">
        <div className="kpi-section-heading">
          <span className="kpi-eyebrow">Metas e benchmark</span>
          <h2>Mercado, faixa saudável e ideal</h2>
          <p>
            O TME precisa ser lido de acordo com o canal. A mesma meta não serve igual para
            voz, chat e e-mail, mas existem boas referências operacionais.
          </p>
        </div>

        <div className="kpi-detail-grid kpi-three-columns">
          <article className="kpi-detail-card">
            <h3>Mercado</h3>
            <p>
              Referências amplas de contact center apontam ASA médio próximo de 28 segundos
              e o padrão operacional 80/20 como uma referência frequente de service level.
            </p>
          </article>

          <article className="kpi-detail-card">
            <h3>Faixa saudável</h3>
            <p>
              Uma faixa saudável recomendada é voz em até 20 a 30 segundos, chat prioritário
              em até 20 a 30 segundos e e-mail em até 1 dia útil, sempre com leitura por
              canal.
            </p>
          </article>

          <article className="kpi-detail-card">
            <h3>Faixa ideal</h3>
            <p>
              A faixa ideal é operar próximo de 80% dos contatos atendidos em 20 segundos nos
              canais síncronos prioritários, sem colapsar qualidade nem aumentar abandono.
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

export default TME