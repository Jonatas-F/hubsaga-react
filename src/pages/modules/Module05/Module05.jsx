import React from 'react'
import './Module05.css'

const pillars = [
  {
    title: 'Histórico antes da resposta',
    text:
      'Responder sem olhar o contexto aumenta retrabalho, repetições e passa sensação de desorganização para o aluno.',
  },
  {
    title: 'Registro completo',
    text:
      'O próximo atendente precisa entender o caso sem depender de memória, conversa paralela ou interpretação solta.',
  },
  {
    title: 'Tagueamento útil',
    text:
      'Tags devem servir para análise, roteamento, leitura de risco e identificação de recorrência real na operação.',
  },
]

const checklist = [
  'Consultar histórico antes da primeira resposta.',
  'Registrar resumo objetivo do caso.',
  'Marcar corretamente motivo do contato.',
  'Anotar acordo, prazo e responsável.',
  'Fechar o atendimento com status coerente.',
]

const mistakes = [
  'Usar tag genérica demais.',
  'Fazer registro incompleto.',
  'Não anotar compromisso assumido com o aluno.',
  'Criar histórico que não ajuda gestão nem continuidade.',
]

const examples = [
  {
    situation: 'Registro sem contexto',
    wrong: 'Aluno informou problema.',
    right:
      'Aluno relatou dificuldade para acessar a plataforma após troca de senha. Foi orientado passo a passo, validou acesso e ficou combinado retorno em 24h se persistir.',
  },
  {
    situation: 'Tag pouco útil',
    wrong: 'Atendimento geral',
    right:
      'Acesso plataforma / redefinição de senha / resolvido no primeiro contato',
  },
]

const lessonFlow = [
  'Definir padrão mínimo de registro.',
  'Apresentar taxonomia de tags do time.',
  'Treinar leitura de histórico antes da resposta.',
  'Auditar registros reais e corrigir desvios.',
  'Conectar uso do sistema aos KPIs da gestão.',
]

function Module05({ onGoHome }) {
  return (
    <main className="module-page">
      <section className="module-hero">
        <div className="module-hero-copy">
          <span className="module-eyebrow">Módulo 05</span>
          <h1>Uso do NEPPO</h1>
          <p>
            Ferramenta sem disciplina vira desorganização. O uso correto do NEPPO é o que
            permite contexto, rastreabilidade e continuidade entre atendentes.
          </p>

          <div className="module-highlight-band">
            <small>Objetivo do módulo</small>
            <strong>
              Padronizar registro, consulta de histórico, uso de tags e qualidade de
              documentação no atendimento.
            </strong>
          </div>

          <div className="module-actions">
            <button type="button" className="module-primary-button button-reset" onClick={onGoHome}>
              Voltar para home
            </button>
          </div>
        </div>

        <div className="module-hero-side">
          <article className="module-info-card">
            <small>Resumo</small>
            <p>
              Padronização de tags, histórico completo e consulta ao contexto antes de
              responder.
            </p>
          </article>

          <article className="module-info-card">
            <small>Aplicação prática</small>
            <p>
              Esta página ajuda a organizar o uso do sistema para melhorar continuidade,
              leitura gerencial e qualidade operacional do atendimento.
            </p>
          </article>
        </div>
      </section>

      <section className="module-section">
        <div className="module-section-heading">
          <span className="module-eyebrow">Pilares do módulo</span>
          <h2>O que o time precisa absorver</h2>
        </div>

        <div className="module-detail-grid module-three-columns">
          {pillars.map((item) => (
            <article key={item.title} className="module-detail-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="module-section">
        <div className="module-section-heading">
          <span className="module-eyebrow">Execução esperada</span>
          <h2>Checklist e erros comuns</h2>
        </div>

        <div className="module-detail-grid module-two-columns">
          <article className="module-detail-card">
            <h3>Checklist operacional</h3>
            <ul className="module-clean-list">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="module-detail-card">
            <h3>Erros que o módulo precisa corrigir</h3>
            <ul className="module-clean-list">
              {mistakes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="module-section">
        <div className="module-section-heading">
          <span className="module-eyebrow">Exemplos práticos</span>
          <h2>Antes e depois</h2>
          <p>Use estes exemplos para calibrar padrão de registro e inteligência no uso das tags.</p>
        </div>

        <div className="module-examples-grid">
          {examples.map((item) => (
            <article key={item.situation} className="module-example-card">
              <span className="module-example-label">{item.situation}</span>

              <div className="module-example-block module-example-wrong">
                <small>Registro fraco</small>
                <p>{item.wrong}</p>
              </div>

              <div className="module-example-block module-example-right">
                <small>Registro ideal</small>
                <p>{item.right}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="module-section">
        <div className="module-section-heading">
          <span className="module-eyebrow">Estrutura sugerida</span>
          <h2>Como conduzir a aula do módulo</h2>
        </div>

        <div className="module-timeline-grid">
          {lessonFlow.map((item, index) => (
            <article key={item} className="module-timeline-item">
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Module05