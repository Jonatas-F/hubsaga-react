import React from 'react'
import './CES.css'

const cadence = [
  'Aplicar no fechamento do caso ou logo após a resolução.',
  'Ler por processo, tipo de demanda e canal.',
  'Cruzar com FCR, transferências, recontato e tempo de resolução.',
  'Usar CES para mapear pontos de atrito da jornada.',
]

const whenBad = [
  'O aluno precisa repetir contexto mais de uma vez.',
  'Existem etapas demais para resolver uma demanda simples.',
  'Há troca de canal sem orientação clara.',
  'A resposta até existe, mas o caminho é confuso ou cansativo.',
]

const actions = [
  'Mapear fricções da jornada e reduzir etapas desnecessárias.',
  'Revisar mensagens que explicam processo, prazo e próximo passo.',
  'Diminuir transferências e pedidos de repetição de informação.',
  'Criar fluxos mais guiados para demandas recorrentes.',
]

function CES({ onGoHome }) {
  return (
    <main className="kpi-page">
      <section className="kpi-hero">
        <div className="kpi-hero-copy">
          <span className="kpi-eyebrow">KPI 03</span>
          <h1>CES</h1>
          <p>
            Customer Effort Score mede o quanto foi fácil para o aluno resolver uma demanda.
            Quanto menor o esforço percebido, maior a chance de fidelização e menor a chance
            de desgaste ao longo da jornada.
          </p>

          <div className="kpi-highlight-band">
            <small>Fórmula</small>
            <strong>
              Média das respostas à afirmação “A empresa tornou fácil resolver meu problema”
              em escala 1-7
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
            <p>O esforço percebido pelo aluno para conseguir resolver algo.</p>
          </article>

          <article className="kpi-info-card">
            <small>Leitura gerencial</small>
            <p>
              O CES ajuda a entender se a operação é fácil de navegar. Mesmo com boa educação
              no atendimento, um processo difícil ainda desgasta a experiência.
            </p>
          </article>
        </div>
      </section>

      <section className="kpi-section">
        <div className="kpi-section-heading">
          <span className="kpi-eyebrow">Metas e benchmark</span>
          <h2>Mercado, faixa saudável e ideal</h2>
          <p>
            O CES é muito útil para medir simplicidade da operação. Ele funciona especialmente
            bem quando comparado entre processos e momentos da jornada.
          </p>
        </div>

        <div className="kpi-detail-grid kpi-three-columns">
          <article className="kpi-detail-card">
            <h3>Mercado</h3>
            <p>
              Benchmarks recentes por porte de equipe mostram médias próximas de 5,95 para
              equipes pequenas, 5,86 para equipes médias e 5,28 para equipes grandes em
              escala de 1 a 7.
            </p>
          </article>

          <article className="kpi-detail-card">
            <h3>Faixa saudável</h3>
            <p>
              Uma faixa saudável recomendada fica entre 5,3 e 5,8 em escala de 1 a 7, desde
              que acompanhada de queda em retrabalho e transferências.
            </p>
          </article>

          <article className="kpi-detail-card">
            <h3>Faixa ideal</h3>
            <p>
              A faixa ideal é 5,9+ com jornada mais simples, menos fricção operacional e menor
              esforço percebido em processos críticos.
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

export default CES