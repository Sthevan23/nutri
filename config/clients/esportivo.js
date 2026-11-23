/* CLIENTE TESTE — Nutrição esportiva. DADOS FICTÍCIOS. */
window.NWL_CLIENTS = window.NWL_CLIENTS || {};
window.NWL_CLIENTS.esportivo = {
  meta: { demo: true, label: 'Esportivo — escuro' },
  seo: { description: 'Nutricionista esportivo em Belo Horizonte - MG. Estratégias para composição corporal, hipertrofia e performance. Presencial e online.', noindex: true },
  branding: {
    radius: 10, buttonRadius: 6, heroShape: 'rect',
    colors: { bg: '#0E1110', surface: '#151918', card: '#1B201F', ink: '#EDF0EA', muted: '#A1AAA5', line: 'rgba(237,240,234,0.12)',
      primary: '#D4F55A', onPrimary: '#0E1110', accent: '#D4F55A', onAccent: '#0E1110' },
    fonts: { heading: 'Archivo', body: 'Manrope', headingWeight: 700, headingLetterSpacing: '-0.03em', emphasisStyle: 'normal', emphasisColor: 'primary',
      googleFontsHref: 'https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;800&family=Manrope:wght@400;500;600&display=swap' }
  },
  professional: {
    name: 'Rafael Moretti', shortName: 'Rafael', title: 'Nutricionista esportivo', crn: 'CRN-9 11111 (ilustrativo)',
    approach: 'Treino é estímulo. Alimentação e recuperação decidem o quanto desse estímulo vira resultado.',
    story: [ 'Acompanho praticantes de musculação, corredores e atletas amadores que querem estratégia nutricional alinhada ao treino.', 'O plano é periodizado junto com a sua rotina de treinos e revisado a cada ciclo.' ],
    education: [ { label: 'Graduação', value: 'Bacharelado em Nutrição' }, { label: 'Especialização', value: 'Nutrição Esportiva' } ]
  },
  hero: {
    eyebrow: 'Nutrição esportiva · BH e online',
    title: 'Estratégia nutricional para ', titleEmphasis: 'treinar melhor', titleAfter: ' e recuperar mais rápido.',
    description: 'Planejamento alimentar alinhado ao seu treino, à sua composição corporal e aos seus objetivos — hipertrofia, emagrecimento ou performance.',
    primaryCta: 'Agendar avaliação', secondaryCta: 'Ver o método', secondaryHref: '#como-funciona',
    badges: [ { icon: 'verified', label: 'CRN-9 11111' }, { icon: 'fitness_center', label: 'Musculação e corrida' } ]
  },
  trust: { items: [ { label: 'Registro', value: 'CRN-9 11111' }, { label: 'Especialização', value: 'Nutrição Esportiva' }, { label: 'Modalidades', value: 'Presencial e online' } ] },
  about: { title: 'Plano periodizado, revisado a cada ciclo de treino.' },
  specialties: { intro: 'Objetivos diferentes pedem estratégias diferentes.', items: [
    { id: 'hipertrofia', name: 'Hipertrofia', description: 'Distribuição de proteínas, energia e timing das refeições a favor do ganho de massa muscular.', goals: ['Ajuste energético por fase', 'Distribuição proteica ao longo do dia', 'Suplementação apenas quando indicada'] },
    { id: 'emagrecimento', name: 'Emagrecimento', description: 'Redução de gordura corporal preservando massa magra e desempenho no treino.', goals: ['Déficit planejado, sem extremos', 'Preservação de força', 'Reavaliação de composição corporal'] },
    { id: 'performance', name: 'Performance', description: 'Estratégias para provas, treinos longos e recuperação entre sessões.', goals: ['Nutrição pré, intra e pós-treino', 'Hidratação individualizada', 'Plano para dia de prova'] }
  ] },
  process: { steps: [
    { title: 'Contato', description: 'Conte seu objetivo e rotina de treinos.', icon: 'chat' },
    { title: 'Avaliação', description: 'Composição corporal, histórico e análise do treino.', icon: 'monitor_weight' },
    { title: 'Periodização', description: 'Plano alimentar alinhado às fases do treino.', icon: 'event_note' },
    { title: 'Revisão por ciclo', description: 'Ajustes conforme evolução e calendário.', icon: 'trending_up' }
  ] },
  differentials: { items: [
    { icon: 'science', title: 'Base científica', description: 'Condutas apoiadas em consensos de nutrição esportiva.' },
    { icon: 'sync_alt', title: 'Integração com o treino', description: 'Diálogo com seu treinador quando autorizado.' },
    { icon: 'block', title: 'Sem suplementação desnecessária', description: 'Suplementos só com indicação clara.' }
  ] },
  modalities: { items: [
    { type: 'presencial', enabled: true, title: 'Presencial', description: 'Avaliação com bioimpedância.', details: ['Savassi — Belo Horizonte - MG'] },
    { type: 'online', enabled: true, title: 'Online', description: 'Videochamada e acompanhamento por app.', details: ['Para todo o Brasil'] }
  ] },
  faq: { items: [
    { q: 'Atende quem está começando a treinar?', a: 'Sim. O plano é ajustado ao seu nível e frequência de treino.' },
    { q: 'Vou precisar de suplementos?', a: 'Nem sempre. A indicação depende da avaliação e da sua alimentação habitual.' },
    { q: 'O atendimento pode ser online?', a: 'Sim, com a mesma estrutura da consulta presencial.' }
  ] },
  cta: { title: 'Seu próximo ciclo de treino começa no prato.', description: 'Agende uma avaliação e receba um plano alinhado aos seus objetivos.', button: 'Agendar avaliação' },
  contact: { whatsapp: '5531911111111', whatsappMessage: 'Fala, {nome}! Vim pelo site e quero agendar uma avaliação de nutrição esportiva.',
    instagram: '@esportivo.demo', email: 'esportivo@exemplo.com.br', city: 'Belo Horizonte', state: 'MG', address: 'Savassi', showMap: false,
    hours: [ { days: 'Segunda a sexta', time: '6h às 20h' } ] },
  footer: { note: 'Configuração de teste — dados fictícios.' }
};
