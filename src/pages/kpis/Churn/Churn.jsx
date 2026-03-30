import React from 'react'
import './Churn.css'

const cadence = [
  'Leitura semanal dos sinais de risco e leitura mensal do churn fechado.',
  'Análise por unidade, curso, turma, tempo de contrato e momento da jornada.',
  'Cruzamento com frequência, CSAT, onboarding e motivos de contato.',
  'Separação entre churn evitável, financeiro, acadêmico e outros fatores.',
]

const whenBad = [
  'Onboarding fraco e baixa ativação inicial.',
  'Queda de frequência sem ação preventiva.',
  'Perda de valor percebido ao longo da jornada.',
  'Questões financeiras sem intervenção cedo.',
]

const actions = [
  'Criar radar de risco com sinais em 7, 15 e 30 dias.',
  'Ativar contato proativo com alunos de risco antes do pedido de cancelamento.',
  'Cruzar churn com presença, CSAT e reclamações recorrentes.',
  'Padronizar plano de retenção por causa raiz.',
]

function Churn({ onGoHome }) {
  return (
    <main className="kpi-page">
      <section className="kpi-hero">
        <div className="kpi-hero-copy">
          <span className="kpi-eyebrow">KPI 07</span>
          <h1>Churn</h1>
          <p>
            Churn mede a taxa de cancelamento em uma janela específica. Para educação, ele
            precisa ser lido com muito contexto, porque nem todo cancelamento tem a mesma
            causa, o mesmo peso ou o mesmo momento da jornada.
          </p>

          <div className="kpi-highlight-band">
            <small>Fórmula</small>
            <strong>(alunos cancelados no período ÷ base elegível no período) × 100</strong>
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
            <p>Perda de alunos em uma janela específica.</p>
          </article>

          <article className="kpi-info-card">
            <small>Leitura gerencial</small>
            <p>
              O churn mostra o quanto a operação está falhando em manter o aluno ativo. Ele
              nunca deve ser lido só no agregado: a análise por coorte e causa é essencial.
            </p>
          </article>
        </div>
      </section>

      <section className="kpi-section">
        <div className="kpi-section-heading">
          <span className="kpi-eyebrow">Metas e benchmark</span>
          <h2>Mercado, faixa saudável e ideal</h2>
          <p>
            Para churn, não existe um benchmark universal realmente confiável entre operações
            educacionais muito diferentes. O valor da gestão está mais em tendência, causa
            raiz e prevenção do que em uma meta genérica isolada.
          </p>
        </div>

        <div className="kpi-detail-grid kpi-three-columns">
          <article className="kpi-detail-card">
            <h3>Mercado</h3>
            <p>
              Não existe uma referência única que funcione bem para todos os cenários
              educacionais, porque duração do curso, política comercial, perfil do aluno e
              forma de pagamento mudam muito.
            </p>
          </article>

          <article className="kpi-detail-card">
            <h3>Faixa saudável</h3>
            <p>
              A meta saudável recomendada é reduzir churn mês contra mês, acompanhar por
              coorte e atacar motivos evitáveis, e não apenas perseguir um número agregado.
            </p>
          </article>

          <article className="kpi-detail-card">
            <h3>Faixa ideal</h3>
            <p>
              A faixa ideal é uma operação que atua antes do pedido de cancelamento, com
              alertas precoces, retenção ativa e plano claro por causa raiz.
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

export default Churn