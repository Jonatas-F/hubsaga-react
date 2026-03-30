import React from 'react'
import './CSAT.css'

const cadence = [
  'Aplicar a pesquisa logo após o atendimento.',
  'Acompanhar diariamente por atendente e semanalmente por motivo de contato.',
  'Cruzar CSAT com TME, FCR, reincidência e comentários abertos.',
  'Revisar notas baixas no mesmo dia sempre que possível.',
]

const whenBad = [
  'Tom frio ou burocrático.',
  'Resposta correta, mas pouco clara.',
  'Prazo sem atualização.',
  'Contato resolvido tardiamente ou com retrabalho.',
]

const actions = [
  'Ler comentários de notas baixas antes de agir só pelo percentual.',
  'Revisar scripts, tom de voz e padrão de escrita.',
  'Separar CSAT por tipo de assunto e canal.',
  'Treinar resposta humanizada e clareza do próximo passo.',
]

function CSAT({ onGoHome }) {
  return (
    <main className="kpi-page">
      <section className="kpi-hero">
        <div className="kpi-hero-copy">
          <span className="kpi-eyebrow">KPI 02</span>
          <h1>CSAT</h1>
          <p>
            Customer Satisfaction mede como o aluno avalia um atendimento específico.
            É o KPI mais direto para acompanhar a percepção de qualidade em interações
            recentes com o time.
          </p>

          <div className="kpi-highlight-band">
            <small>Fórmula</small>
            <strong>(respostas positivas ÷ respostas totais) × 100</strong>
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
            <p>Satisfação com um atendimento específico.</p>
          </article>

          <article className="kpi-info-card">
            <small>Leitura gerencial</small>
            <p>
              O CSAT ajuda a entender se o contato foi percebido como bom, claro e resolutivo.
              Ele é excelente para calibrar qualidade operacional do time.
            </p>
          </article>
        </div>
      </section>

      <section className="kpi-section">
        <div className="kpi-section-heading">
          <span className="kpi-eyebrow">Metas e benchmark</span>
          <h2>Mercado, faixa saudável e ideal</h2>
          <p>
            O CSAT costuma variar conforme canal, setor e complexidade do caso, mas ainda assim
            existem boas referências para orientar meta e maturidade.
          </p>
        </div>

        <div className="kpi-detail-grid kpi-three-columns">
          <article className="kpi-detail-card">
            <h3>Mercado</h3>
            <p>
              Benchmarks recentes mostram média agregada de 8,59/10. Em referências amplas
              de mercado, muitos setores operam próximos de 88% a 89%, com faixas altas entre
              93% e 97%.
            </p>
          </article>

          <article className="kpi-detail-card">
            <h3>Faixa saudável</h3>
            <p>
              Uma faixa saudável recomendada fica entre 88% e 92%, ou aproximadamente 8,8 a
              9,2 em escala de 10 pontos.
            </p>
          </article>

          <article className="kpi-detail-card">
            <h3>Faixa ideal</h3>
            <p>
              A faixa ideal é 93%+, com comentários positivos recorrentes e baixa reincidência
              de problemas no mesmo tipo de contato.
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

export default CSAT