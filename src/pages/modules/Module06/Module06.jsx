import React from 'react'
import './Module06.css'

const pillars = [
  {
    title: 'Negociar, não apenas cobrar',
    text: 'A abordagem precisa abrir caminho para regularização e não só registrar atraso. O foco é solução viável com preservação do relacionamento.',
  },
  {
    title: 'Segmentar o atraso',
    text: 'Uma parcela em atraso pede uma estratégia diferente de atraso recorrente ou contrato em estágio mais crítico. A comunicação deve respeitar o contexto.',
  },
  {
    title: 'Preservar a relação',
    text: 'Tom agressivo pode até gerar pagamento pontual, mas destrói permanência, confiança e reputação da marca no médio prazo.',
  },
]

const checklist = [
  'Segmentar por faixa de atraso.',
  'Ler histórico antes da abordagem.',
  'Apresentar opção viável de regularização.',
  'Registrar proposta, prazo e retorno.',
  'Acompanhar até regularização ou novo plano.',
]

const mistakes = [
  'Comunicação acusatória.',
  'Falta de proposta concreta.',
  'Cobrança igual para públicos diferentes.',
  'Foco só em recebimento e não em permanência.',
]

const examples = [
  {
    situation: 'Cobrança inicial',
    wrong: 'Você está em atraso.',
    right: 'Percebi que tivemos um imprevisto no pagamento e quero te ajudar a regularizar da melhor forma.',
  },
  {
    situation: 'Atraso recorrente',
    wrong: 'Precisa quitar urgente.',
    right: 'Como esse atraso tem se repetido, posso te ajudar a avaliar uma alternativa mais sustentável para sua rotina financeira.',
  },
]

const lessonFlow = [
  'Separar perfis e faixas de atraso.',
  'Criar árvore de negociação por cenário.',
  'Treinar tom empático e seguro.',
  'Construir ofertas por perfil de aluno.',
  'Acompanhar conversão e tempo médio de regularização.',
]

function Module06({ onGoHome }) {
  return (
    <main className="module-page">
      <section className="module-hero">
        <div className="module-hero-copy">
          <span className="module-eyebrow">Módulo 06</span>
          <h1>Cobrança com empatia</h1>

          <p>
            Cobrança eficiente não é pressão cega. É combinação de timing,
            empatia, leitura de risco, proposta viável e consistência de
            acompanhamento.
          </p>

          <div className="module-highlight-band">
            <small>Objetivo do módulo</small>
            <strong>
              Aumentar recuperação e reduzir inadimplência preservando vínculo,
              valor percebido e chance de permanência.
            </strong>
          </div>

          <div className="module-actions">
            <button
              type="button"
              className="module-primary-button button-reset"
              onClick={onGoHome}
            >
              Voltar para home
            </button>
          </div>
        </div>

        <div className="module-hero-side">
          <article className="module-info-card">
            <small>Resumo</small>
            <p>
              Negociar com inteligência, segmentar atrasos e recuperar sem
              quebrar o relacionamento com o aluno.
            </p>
          </article>

          <article className="module-info-card">
            <small>Aplicação prática</small>
            <p>
              Esta página ajuda a estruturar abordagem, proposta e
              acompanhamento para melhorar recuperação sem comprometer
              experiência.
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
          <p>
            Use estes exemplos para calibrar tom, proposta e empatia em
            cobrança.
          </p>
        </div>

        <div className="module-examples-grid">
          {examples.map((item) => (
            <article key={item.situation} className="module-example-card">
              <span className="module-example-label">{item.situation}</span>

              <div className="module-example-block module-example-wrong">
                <small>Abordagem fraca</small>
                <p>{item.wrong}</p>
              </div>

              <div className="module-example-block module-example-right">
                <small>Abordagem ideal</small>
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

export default Module06