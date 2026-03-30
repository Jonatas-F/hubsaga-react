import React from 'react'
import './Module03.css'

const pillars = [
  {
    title: 'Ouvir o motivo real',
    text: 'A objeção declarada nem sempre é a causa principal. Muitas vezes existe frustração, medo, desorganização financeira ou perda de valor percebido.',
  },
  {
    title: 'Validar antes de argumentar',
    text: 'Sem validar a percepção do aluno, qualquer explicação pode soar como defesa da empresa e não como ajuda real.',
  },
  {
    title: 'Oferecer saída concreta',
    text: 'Contorno de objeção funciona melhor quando a conversa termina com alternativa prática, próximo passo e sensação de apoio.',
  },
]

const checklist = [
  'Perguntar antes de argumentar.',
  'Descobrir o motivo real por trás da objeção.',
  'Validar sentimento e contexto.',
  'Trazer até 2 alternativas viáveis.',
  'Registrar objeção, proposta e desfecho no sistema.',
]

const mistakes = [
  'Interromper o aluno cedo demais.',
  'Tentar convencer antes de entender o cenário.',
  'Defender processo interno em vez de resolver a dor.',
  'Prometer algo que a operação não consegue cumprir.',
]

const examples = [
  {
    situation: 'Pedido de cancelamento',
    wrong: 'Se quiser cancelar, abro a solicitação.',
    right: 'Faz sentido você estar pensando nisso. Antes de seguir, quero entender o que aconteceu e ver se existe uma alternativa melhor para você.',
  },
  {
    situation: 'Objeção financeira',
    wrong: 'Você está em atraso e precisa pagar.',
    right: 'Percebi um imprevisto no pagamento e quero te ajudar a regularizar da forma mais viável para você.',
  },
]

const lessonFlow = [
  'Mapear objeções mais comuns do time.',
  'Separar motivo declarado e motivo real.',
  'Treinar perguntas de aprofundamento.',
  'Criar repertório de alternativas por cenário.',
  'Fazer simulações com avaliação em grupo.',
]

function Module03({ onGoHome }) {
  return (
    <main className="module-page">
      <section className="module-hero">
        <div className="module-hero-copy">
          <span className="module-eyebrow">Módulo 03</span>
          <h1>Contorno de objeções</h1>

          <p>
            Objeção não é confronto. É pedido de segurança. Quando o time
            entende o motivo real por trás da fala do aluno, a chance de
            reversão cresce muito.
          </p>

          <div className="module-highlight-band">
            <small>Objetivo do módulo</small>
            <strong>
              Desenvolver repertório para acolher resistência, descobrir o
              motivo real e conduzir o aluno para uma solução.
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
              Lidar com cancelamento, reclamações e temas financeiros sem soar
              defensivo ou robótico.
            </p>
          </article>

          <article className="module-info-card">
            <small>Aplicação prática</small>
            <p>
              Esta página ajuda a treinar leitura de objeção, validação
              emocional e construção de propostas mais eficazes.
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
            Use estes exemplos para treinar escuta, validação e proposta de
            solução.
          </p>
        </div>

        <div className="module-examples-grid">
          {examples.map((item) => (
            <article key={item.situation} className="module-example-card">
              <span className="module-example-label">{item.situation}</span>

              <div className="module-example-block module-example-wrong">
                <small>Resposta fraca</small>
                <p>{item.wrong}</p>
              </div>

              <div className="module-example-block module-example-right">
                <small>Resposta ideal</small>
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

export default Module03