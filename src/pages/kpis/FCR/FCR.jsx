import React from 'react'
import './FCR.css'

const cadence = [
  'Leitura semanal e mensal por motivo de contato.',
  'Quebra por canal, atendente e tipo de demanda.',
  'Revisão dos casos com recontato em até 7 dias.',
  'Cruzamento com CSAT, TMA e reincidência.',
]

const whenBad = [
  'Falta de autonomia do time para resolver.',
  'Base de conhecimento fraca ou desatualizada.',
  'Resposta incompleta no primeiro contato.',
  'Muita transferência, retorno sem dono ou encaminhamento confuso.',
]

const actions = [
  'Mapear os principais motivos com recontato.',
  'Criar playbooks para os assuntos mais recorrentes.',
  'Dar mais contexto e autonomia para o time resolver sem escalonar.',
  'Revisar mensagens e fluxos que geram dúvida ou retorno desnecessário.',
]

function FCR({ onGoHome }) {
  return (
    <main className="kpi-page">
      <section className="kpi-hero">
        <div className="kpi-hero-copy">
          <span className="kpi-eyebrow">KPI 04</span>
          <h1>FCR</h1>
          <p>
            First Contact Resolution mede quantos casos são resolvidos já no primeiro contato.
            É um dos indicadores mais importantes para eficiência com boa experiência, porque
            reduz esforço, retrabalho e sensação de desorganização.
          </p>

          <div className="kpi-highlight-band">
            <small>Fórmula</small>
            <strong>(casos resolvidos no primeiro contato ÷ total de casos) × 100</strong>
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
            <p>Resolução no primeiro contato.</p>
          </article>

          <article className="kpi-info-card">
            <small>Leitura gerencial</small>
            <p>
              O FCR mostra a capacidade da operação de resolver com qualidade logo na primeira
              interação, sem empurrar o aluno para múltiplos retornos.
            </p>
          </article>
        </div>
      </section>

      <section className="kpi-section">
        <div className="kpi-section-heading">
          <span className="kpi-eyebrow">Metas e benchmark</span>
          <h2>Mercado, faixa saudável e ideal</h2>
          <p>
            O FCR é um excelente termômetro de maturidade operacional. Quando cresce com
            qualidade, normalmente melhora também o esforço do aluno e a percepção de eficiência.
          </p>
        </div>

        <div className="kpi-detail-grid kpi-three-columns">
          <article className="kpi-detail-card">
            <h3>Mercado</h3>
            <p>
              Referências amplas apontam 70% a 79% como uma faixa boa de FCR, enquanto 80%+
              costuma ser tratado como nível de excelência operacional.
            </p>
          </article>

          <article className="kpi-detail-card">
            <h3>Faixa saudável</h3>
            <p>
              Uma faixa saudável recomendada fica entre 72% e 78%, desde que não exista queda
              de CSAT nem aceleração artificial do atendimento.
            </p>
          </article>

          <article className="kpi-detail-card">
            <h3>Faixa ideal</h3>
            <p>
              A faixa ideal é 80%+, com autonomia do time, boa base de conhecimento e clareza
              no primeiro retorno ao aluno.
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

export default FCR