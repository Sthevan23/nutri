/* CLIENTE TESTE — Materno-infantil. DADOS FICTÍCIOS. */
window.NWL_CLIENTS = window.NWL_CLIENTS || {};
window.NWL_CLIENTS.materno = {
  meta: { demo: true, label: 'Materno-infantil — claro' },
  seo: { description: 'Nutricionista materno-infantil em Curitiba - PR. Gestação, amamentação, introdução alimentar e nutrição infantil. Presencial, online e domiciliar.', noindex: true },
  branding: {
    radius: 28,
    colors: { bg: '#FBF5F1', surface: '#F3E5DE', card: '#FFFDFB', ink: '#3A2A30', muted: '#6E5C63', line: 'rgba(58,42,48,0.13)',
      primary: '#7A4B5B', onPrimary: '#FFF8F5', accent: '#9A5238', onAccent: '#FFFFFF' },
    fonts: { heading: 'Cormorant Garamond', body: 'Nunito Sans', headingWeight: 500, headingLetterSpacing: '-0.01em', emphasisStyle: 'italic', emphasisColor: 'accent',
      googleFontsHref: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Nunito+Sans:wght@400;600;700&display=swap' }
  },
  professional: {
    name: 'Clara Nogueira', shortName: 'Clara', title: 'Nutricionista materno-infantil', crn: 'CRN-8 22222 (ilustrativo)',
    approach: 'Gestação e infância não são momentos de restrição. São momentos de cuidado, informação e calma.',
    story: [ 'Acompanho famílias do planejamento da gestação até os primeiros anos da criança.', 'Trabalho em conjunto com obstetras e pediatras, respeitando a rotina e a cultura alimentar de cada casa.' ],
    education: [ { label: 'Graduação', value: 'Bacharelado em Nutrição' }, { label: 'Especialização', value: 'Nutrição Materno-Infantil' } ]
  },
  hero: {
    eyebrow: 'Nutrição materno-infantil · Curitiba',
    title: 'Alimentação com cuidado, da ', titleEmphasis: 'gestação', titleAfter: ' aos primeiros passos.',
    description: 'Orientação nutricional acolhedora para gestantes, mães que amamentam e crianças — sempre integrada ao acompanhamento médico.',
    primaryCta: 'Agendar consulta', secondaryCta: 'Conhecer as fases', secondaryHref: '#especialidades', showSecondaryImage: true,
    badges: [ { icon: 'verified', label: 'CRN-8 22222' }, { icon: 'home', label: 'Atendimento domiciliar' } ]
  },
  trust: { items: [ { label: 'Registro', value: 'CRN-8 22222' }, { label: 'Especialização', value: 'Materno-Infantil' }, { label: 'Modalidades', value: 'Presencial, online e domiciliar' } ] },
  about: { title: 'Informação segura para decisões tranquilas.' },
  specialties: { intro: 'Cada fase pede cuidados diferentes.', items: [
    { id: 'gestacao', name: 'Gestação', description: 'Orientação por trimestre, com atenção a enjoos, ganho de peso e exames.', goals: ['Nutrientes essenciais em cada fase', 'Manejo de enjoos e azia', 'Integração com o pré-natal'] },
    { id: 'amamentacao', name: 'Amamentação', description: 'Alimentação da mãe no pós-parto e durante a amamentação.', goals: ['Recuperação pós-parto', 'Hidratação e energia', 'Retorno gradual à rotina'] },
    { id: 'introducao', name: 'Introdução alimentar', description: 'Primeiros alimentos do bebê com segurança e sem pressão.', goals: ['Texturas por idade', 'Prevenção de engasgos', 'Rotina alimentar da família'] },
    { id: 'infantil', name: 'Nutrição infantil', description: 'Seletividade, crescimento e hábitos alimentares na infância.', goals: ['Estratégias para seletividade', 'Lanches e lancheira', 'Acompanhamento do crescimento'] }
  ] },
  differentials: { items: [
    { icon: 'favorite', title: 'Acolhimento sem julgamento', description: 'Espaço seguro para dúvidas, inclusive as que parecem simples.' },
    { icon: 'diversity_3', title: 'Cuidado integrado', description: 'Diálogo com obstetras e pediatras quando necessário.' },
    { icon: 'home_health', title: 'Atendimento em casa', description: 'Para o puerpério, quando sair de casa é difícil.' }
  ] },
  modalities: { items: [
    { type: 'presencial', enabled: true, title: 'Presencial', description: 'Consultório preparado para receber bebês.', details: ['Batel — Curitiba - PR'] },
    { type: 'online', enabled: true, title: 'Online', description: 'Ideal para o pós-parto.', details: ['Para todo o Brasil'] },
    { type: 'domiciliar', enabled: true, title: 'Domiciliar', description: 'Atendimento na sua casa.', details: ['Região central de Curitiba'] }
  ] },
  faq: { items: [
    { q: 'Quando devo começar o acompanhamento na gestação?', a: 'O ideal é no início da gestação ou ainda no planejamento, mas qualquer momento é válido.' },
    { q: 'Atende bebês na introdução alimentar?', a: 'Sim, a partir da liberação do pediatra, com orientação para toda a família.' },
    { q: 'Como funciona o atendimento domiciliar?', a: 'A consulta acontece na sua casa, com agendamento prévio e região definida.' }
  ] },
  cta: { title: 'Cuidar da alimentação também é cuidar de vocês dois.', description: 'Envie uma mensagem e agende com tranquilidade.', button: 'Agendar pelo WhatsApp' },
  contact: { whatsapp: '5541922222222', whatsappMessage: 'Olá, {nome}! Vim pelo site e gostaria de saber mais sobre o acompanhamento materno-infantil.',
    instagram: '@materno.demo', email: 'materno@exemplo.com.br', city: 'Curitiba', state: 'PR', address: 'Batel', showMap: true, mapsQuery: 'Batel, Curitiba - PR',
    hours: [ { days: 'Segunda a sexta', time: '9h às 17h' } ] },
  footer: { note: 'Configuração de teste — dados fictícios.' }
};
