import React from 'react'
import './Home.css'

import Hero from '../../components/Hero/Hero'
import ModuleCard from '../../components/ModuleCard/ModuleCard'
import KpiCard from '../../components/KpiCard/KpiCard'

const heroStats = [
  { value: '6', label: 'módulos completos' },
  { value: '8', label: 'páginas de KPI' },
  { value: '360°', label: 'visão de experiência' },
  { value: 'CX', label: 'foco em retenção e valor' },
]

const heroCards = [
  {
    number: '01',
    title: 'Encantamento',
    text: 'Transformar cada atendimento em uma experiência segura, humana e memorável.',
  },
  {
    number: '02',
    title: 'Retenção',
    text: 'Ler sinais de risco cedo e agir antes que a intenção de cancelamento apareça.',
  },
  {
    number: '03',
    title: 'Recuperação',
    text: 'Negociar com empatia e método para regularizar sem quebrar relacionamento.',
  },
  {
    number: '04',
    title: 'Padrão',
    text: 'Dar consistência de linguagem, processo, registro e leitura gerencial ao time.',
  },
]

const modules = [
  {
    slug: 'modulo-1',
    eyebrow: 'Módulo 01',
    title: 'Mentalidade de dono',
    text: 'Cada atendimento impacta retenção, percepção de valor e continuidade da jornada do aluno.',
  },
  {
    slug: 'modulo-2',
    eyebrow: 'Módulo 02',
    title: 'Comunicação humanizada',
    text: 'Aplicar a lógica Acolher → Resolver → Encantar com linguagem clara, simples e humana.',
  },
  {
    slug: 'modulo-3',
    eyebrow: 'Módulo 03',
    title: 'Contorno de objeções',
    text: 'Lidar com cancelamento, reclamações e temas financeiros sem soar defensivo ou robótico.',
  },
  {
    slug: 'modulo-4',
    eyebrow: 'Módulo 04',
    title: 'Escrita digital',
    text: 'Mensagens curtas, legíveis, organizadas e com uso equilibrado de emojis.',
  },
  {
    slug: 'modulo-5',
    eyebrow: 'Módulo 05',
    title: 'Uso do NEPPO',
    text: 'Padronização de tags, histórico completo e consulta ao contexto antes de responder.',
  },
  {
    slug: 'modulo-6',
    eyebrow: 'Módulo 06',
    title: 'Cobrança com empatia',
    text: 'Negociar com inteligência, segmentar atrasos e recuperar sem quebrar o relacionamento.',
  },
]

const kpis = [
  {
    slug: 'nps',
    eyebrow: 'KPI 01',
    title: 'NPS',
    subtitle: 'Net Promoter Score',
    text: 'Mede lealdade e chance de indicação da marca.',
  },
  {
    slug: 'csat',
    eyebrow: 'KPI 02',
    title: 'CSAT',
    subtitle: 'Customer Satisfaction',
    text: 'Mede satisfação com um atendimento específico.',
  },
  {
    slug: 'ces',
    eyebrow: 'KPI 03',
    title: 'CES',
    subtitle: 'Customer Effort Score',
    text: 'Mede o quanto foi fácil resolver a demanda.',
  },
  {
    slug: 'fcr',
    eyebrow: 'KPI 04',
    title: 'FCR',
    subtitle: 'First Contact Resolution',
    text: 'Mede resolução no primeiro contato.',
  },
  {
    slug: 'tme',
    eyebrow: 'KPI 05',
    title: 'TME / ASA',
    subtitle: 'Tempo médio de espera',
    text: 'Mede quanto tempo o aluno espera para ser atendido.',
  },
  {
    slug: 'tma',
    eyebrow: 'KPI 06',
    title: 'TMA / AHT',
    subtitle: 'Tempo médio de atendimento',
    text: 'Mede duração média do atendimento.',
  },
  {
    slug: 'churn',
    eyebrow: 'KPI 07',
    title: 'Churn',
    subtitle: 'Taxa de cancelamento',
    text: 'Mede perda de alunos em uma janela específica.',
  },
  {
    slug: 'recuperacao',
    eyebrow: 'KPI 08',
    title: 'Recuperação',
    subtitle: 'Regularização e inadimplência',
    text: 'Mede quanto da carteira em atraso volta a ficar regular.',
  },
]

function Home({ onGoToModule, onGoToKpi }) {
  return (
    <main className="home-page">
      <Hero
        eyebrow="Treinamento completo"
        title="Atendimento que"
        highlight="encanta, retém e recupera."
        description="Uma apresentação completa do treinamento de atendimento e relacionamento, com páginas dedicadas para cada módulo e páginas distintas para os KPIs essenciais da operação."
        primaryLabel="Começar pelo módulo 1"
        secondaryLabel="Ver primeiro KPI"
        onPrimaryClick={() => onGoToModule('modulo-1')}
        onSecondaryClick={() => onGoToKpi('nps')}
        stats={heroStats}
        sideTitle="Painel estratégico do treinamento"
        sideCards={heroCards}
        highlightTitle="Transformar alunos em fãs da marca"
        highlightText="Atendimento não é só suporte. É percepção de valor, permanência e experiência total da jornada."
      />

      <section className="section-block" id="modulos">
        <div className="section-heading">
          <span className="eyebrow">Estrutura do programa</span>
          <h2>Páginas individuais para cada módulo</h2>
          <p>
            Cada card abaixo abre uma página própria, com conteúdo aprofundado para treinamento,
            alinhamento e aplicação prática com o time.
          </p>
        </div>

        <div className="module-grid">
          {modules.map((module) => (
            <ModuleCard
              key={module.slug}
              eyebrow={module.eyebrow}
              title={module.title}
              text={module.text}
              onClick={() => onGoToModule(module.slug)}
            />
          ))}
        </div>
      </section>

      <section className="section-block" id="kpis">
        <div className="section-heading">
          <span className="eyebrow">Gestão da operação</span>
          <h2>Páginas individuais para cada KPI</h2>
          <p>
            Cada KPI abre uma página própria com conceito, metas, leitura de gestão e orientação
            prática para acompanhamento.
          </p>
        </div>

        <div className="kpi-grid">
          {kpis.map((kpi) => (
            <KpiCard
              key={kpi.slug}
              eyebrow={kpi.eyebrow}
              title={kpi.title}
              subtitle={kpi.subtitle}
              text={kpi.text}
              onClick={() => onGoToKpi(kpi.slug)}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home