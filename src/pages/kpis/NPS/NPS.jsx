import React from 'react'
import './NPS.css'

const cadence = [
  'Coleta mensal ou bimestral, com histórico por unidade e por jornada.',
  'Leitura separada por promotores, neutros e detratores.',
  'Fechamento ativo dos detratores em até 7 dias.',
  'Análise conjunta com comentários abertos e principais motivos.',
]

const whenBad = [
  'Promessa comercial desalinhada com a experiência real.',
  'Onboarding fraco e sensação de abandono.',
  'Comunicação fria, lenta ou pouco clara.',
  'Problemas recorrentes sem retorno para o aluno.',
]

const actions = [
  'Ler comentários qualitativos antes de agir só pelo número.',
  'Separar detratores por causa raiz: financeiro, atendimento, acadêmico, onboarding ou expectativa.',
  'Criar plano de ação com responsável, prazo e retorno ao aluno.',
  'Acompanhar se a nota melhora após intervenção.',
]

function NPS({ onGoHome }) {
  return (
    <main className="kpi-page">
      <section className="kpi-hero">
        <div className="kpi-hero-copy">
          <span className="kpi-eyebrow">KPI 01</span>
          <h1>NPS</h1>
          <p>
            O Net Promoter Score mede a disposição do aluno em recomendar a marca. É um
            indicador de lealdade, confiança e valor percebido ao longo da experiência.
          </p>

          <div className="kpi-highlight-band">
            <small>Fórmula</small>
            <strong>% Promotores (9-10) - % Detratores (0-6)</strong>
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
            <p>Lealdade, confiança e chance de indicação da marca.</p>
          </article>

          <article className="kpi-info-card">
            <small>Leitura gerencial</small>
            <p>
              O NPS não mostra só satisfação pontual. Ele revela o quanto a experiência é forte
              o suficiente para gerar recomendação.
            </p>
          </article>
        </div>
      </section>

      <section className="kpi-section">
        <div className="kpi-section-heading">
          <span className="kpi-eyebrow">Metas e benchmark</span>
          <h2>Mercado, faixa saudável e ideal</h2>
          <p>
            O NPS deve ser lido com contexto. Mesmo assim, ele tem referências de mercado úteis
            para guiar meta e maturidade da operação.
          </p>
        </div>

        <div className="kpi-detail-grid kpi-three-columns">
          <article className="kpi-detail-card">
            <h3>Mercado</h3>
            <p>
              Benchmarks recentes de suporte mostram médias próximas de +46 a +52, variando
              conforme porte da operação.
            </p>
          </article>

          <article className="kpi-detail-card">
            <h3>Faixa saudável</h3>
            <p>
              Para uma operação educacional em amadurecimento, uma faixa saudável fica entre
              +30 e +45, com leitura recorrente das causas dos detratores.
            </p>
          </article>

          <article className="kpi-detail-card">
            <h3>Faixa ideal</h3>
            <p>
              A faixa ideal é 50+, acompanhada de fechamento de detratores e plano contínuo de
              melhoria da experiência.
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

export default NPS