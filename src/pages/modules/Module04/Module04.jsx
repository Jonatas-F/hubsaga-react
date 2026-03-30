import React from 'react'
import './Module04.css'

const pillars = [
  {
    title: 'Texto escaneável',
    text:
      'Blocos curtos, quebras, listas e ordem lógica facilitam leitura e resposta. No digital, a pessoa precisa bater o olho e entender rápido.',
  },
  {
    title: 'Objetividade com calor humano',
    text:
      'A mensagem pode ser curta sem parecer seca. Pode ser humana sem perder profissionalismo, clareza e segurança.',
  },
  {
    title: 'Padrão visual de leitura',
    text:
      'A boa escrita digital ajuda o aluno a encontrar rapidamente a resposta, o prazo e o próximo passo sem esforço desnecessário.',
  },
]

const checklist = [
  'Usar frases curtas.',
  'Trabalhar 1 ideia por parágrafo.',
  'Usar listas quando houver mais de 2 passos.',
  'Evitar blocos longos e confusos.',
  'Fechar a mensagem com orientação clara.',
]

const mistakes = [
  'Texto grande sem quebras.',
  'Muitos assuntos na mesma mensagem.',
  'Excesso de informalidade.',
  'Prazo e ação pouco claros.',
]

const examples = [
  {
    situation: 'Mensagem confusa',
    wrong:
      'Você precisa acessar o portal e lá ver a opção disponível porque talvez apareça dependendo do perfil e se não aparecer depois você pode falar com a unidade.',
    right:
      'Você pode resolver isso de 3 formas:\n1. Pelo portal\n2. Aqui comigo\n3. Presencialmente na unidade\nSe quiser, eu te guio pela opção mais rápida.',
  },
  {
    situation: 'Resposta seca',
    wrong: 'Anexo boleto.',
    right:
      'Enviei o boleto aqui para você. Se quiser, também posso te orientar sobre a melhor data para regularização.',
  },
]

const lessonFlow = [
  'Mostrar antes e depois de mensagens reais.',
  'Criar padrão de estrutura para o time.',
  'Treinar reescrita em duplas.',
  'Definir biblioteca de mensagens-base.',
  'Criar revisão de qualidade textual.',
]

function Module04({ onGoHome }) {
  return (
    <main className="module-page">
      <section className="module-hero">
        <div className="module-hero-copy">
          <span className="module-eyebrow">Módulo 04</span>
          <h1>Escrita digital</h1>
          <p>
            No digital, forma é conteúdo. A escrita do time precisa ser fácil de ler,
            parecer organizada e transmitir controle da situação.
          </p>

          <div className="module-highlight-band">
            <small>Objetivo do módulo</small>
            <strong>
              Melhorar legibilidade, clareza e percepção de profissionalismo nas mensagens
              digitais.
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
              Mensagens curtas, legíveis, organizadas e com uso equilibrado de emojis.
            </p>
          </article>

          <article className="module-info-card">
            <small>Aplicação prática</small>
            <p>
              Esta página ajuda a padronizar mensagens, melhorar leitura e reduzir ruído
              nos atendimentos por WhatsApp, chat e canais digitais.
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
          <p>Use estes exemplos para treinar clareza, organização e legibilidade.</p>
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

export default Module04