import React from 'react'
import '../Module01/Module01.css'

const pillars = [
  {
    title: 'Acolher antes de explicar',
    text: 'O aluno precisa sentir que foi compreendido antes de receber orientação ou regra. Sem acolhimento, a resposta pode parecer fria ou defensiva.',
  },
  {
    title: 'Clareza sem excesso',
    text: 'Mensagens simples e objetivas reduzem esforço, retrabalho e ansiedade. Explicação demais pode gerar confusão em vez de segurança.',
  },
  {
    title: 'Resolver com presença',
    text: 'Tom humanizado não é excesso de informalidade. É proximidade com respeito, segurança e clareza sobre o próximo passo.',
  },
]

const checklist = [
  'Usar o nome do aluno quando fizer sentido.',
  'Demonstrar compreensão real do contexto antes de orientar.',
  'Evitar blocos longos de texto.',
  'Trocar frases frias por frases de cuidado.',
  'Encerrar com um próximo passo claro.',
]

const mistakes = [
  'Responder como script engessado.',
  'Usar formalidade excessiva e distante.',
  'Explicar demais e orientar de menos.',
  'Parecer automático ou sem leitura do caso.',
]

const examples = [
  {
    situation: 'Aluno com dúvida simples',
    wrong: 'Conforme procedimento, você deve acessar o portal.',
    right: 'Você consegue fazer isso direto pelo portal, e se preferir eu também posso te orientar aqui rapidinho.',
  },
  {
    situation: 'Aluno irritado',
    wrong: 'Esse é o processo padrão.',
    right: 'Entendo que isso pode ser bem frustrante. Vou te explicar o caminho mais rápido para resolver.',
  },
]

const lessonFlow = [
  'Definir o tom de voz da marca.',
  'Mapear palavras proibidas e palavras recomendadas.',
  'Treinar acolhimento em casos sensíveis.',
  'Praticar mensagens curtas com mais clareza.',
  'Aplicar revisão entre pares.',
]

function Module02({ onGoHome }) {
  return (
    <main className="module-page">
      <section className="module-hero">
        <div className="module-hero-copy">
          <span className="module-eyebrow">Módulo 02</span>
          <h1>Comunicação humanizada</h1>

          <p>
            A comunicação define a sensação de cuidado. Mesmo quando a resposta
            é negativa ou limitada, a forma como o time fala muda completamente
            a percepção do aluno.
          </p>

          <div className="module-highlight-band">
            <small>Objetivo do módulo</small>
            <strong>
              Padronizar um tom de voz humano, claro e seguro, evitando
              robotização e ruído.
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
              Aplicar a lógica Acolher → Resolver → Encantar com linguagem
              clara, simples e humana.
            </p>
          </article>

          <article className="module-info-card">
            <small>Aplicação prática</small>
            <p>
              Esta página ajuda a treinar tom de voz, revisão de mensagens e
              padronização de qualidade nos atendimentos digitais.
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
            Use estes exemplos para calibrar acolhimento, clareza e tom de voz
            do time.
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

export default Module02