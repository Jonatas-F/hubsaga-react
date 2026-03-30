import React from 'react'
import './TMA.css'

const cadence = [
  'Leitura semanal por assunto, atendente e canal.',
  'Separar contatos simples, médios e complexos.',
  'Cruzar TMA com FCR, CSAT, TME e reincidência.',
  'Analisar também tempo de pós-atendimento quando existir.',
]

const whenBad = [
  'Ferramenta lenta ou navegação ruim no sistema.',
  'Atendente sem contexto suficiente para resolver rápido.',
  'Hold excessivo ou dependência de muitas validações.',
  'Base de conhecimento fraca ou difícil de consultar.',
]

const actions = [
  'Quebrar o TMA por motivo de contato para localizar gargalos.',
  'Revisar fluxos com excesso de etapa manual.',
  'Treinar navegação em sistema e consulta rápida de histórico.',
  'Atacar o pós-atendimento excessivo e padronizar registros.',
]

function TMA({ onGoHome }) {
  return (
    <main className="kpi-page">
      <section className="kpi-hero">
        <div className="kpi-hero-copy">
          <span className="kpi-eyebrow">KPI 06</span>
          <h1>TMA / AHT</h1>
          <p>
            O Tempo Médio de Atendimento, também conhecido em muitos contextos como Average
            Handle Time, mede quanto tempo o contato leva do início ao fechamento. Ele deve
            ser lido com equilíbrio: rápido demais pode significar pressa; lento demais pode
            significar fricção operacional.
          </p>

          <div className="kpi-highlight-band">
            <small>Fórmula</small>
            <strong>
              (tempo de fala + espera em hold + pós-atendimento) ÷ contatos atendidos
            </strong>
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
            <p>Duração média do atendimento do início ao fechamento.</p>
          </article>

          <article className="kpi-info-card">
            <small>Leitura gerencial</small>
            <p>
              O TMA ajuda a entender fluidez operacional, mas nunca deve ser analisado sozinho.
              O ideal é buscar eficiência sem sacrificar clareza, resolução e satisfação.
            </p>
          </article>
        </div>
      </section>

      <section className="kpi-section">
        <div className="kpi-section-heading">
          <span className="kpi-eyebrow">Metas e benchmark</span>
          <h2>Mercado, faixa saudável e ideal</h2>
          <p>
            O TMA varia muito conforme complexidade, canal e nível de autonomia do time. Por
            isso, a melhor leitura combina benchmark geral com análise por tipo de caso.
          </p>
        </div>

        <div className="kpi-detail-grid kpi-three-columns">
          <article className="kpi-detail-card">
            <h3>Mercado</h3>
            <p>
              Em referências amplas de mercado, cerca de 6 minutos costuma aparecer como uma
              base geral, mas não existe número mágico: a meta correta depende da complexidade
              do atendimento.
            </p>
          </article>

          <article className="kpi-detail-card">
            <h3>Faixa saudável</h3>
            <p>
              Uma faixa saudável recomendada fica entre 4 e 7 minutos na fila geral, com leitura
              separada por motivo de contato e sem queda de FCR ou CSAT.
            </p>
          </article>

          <article className="kpi-detail-card">
            <h3>Faixa ideal</h3>
            <p>
              A faixa ideal é o menor tempo possível sem sacrificar qualidade, clareza, resolução
              no primeiro contato e percepção positiva do aluno.
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

export default TMA