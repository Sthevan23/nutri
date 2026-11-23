/* CLIENTE DEMO — Versão escura premium. Dados FICTÍCIOS. Mesmo conteúdo do cliente clínico, outra identidade. */
window.NWL_CLIENTS = window.NWL_CLIENTS || {};
window.NWL_CLIENTS.premium = {
  meta: { demo: true, label: 'Premium — escuro' },
  seo: { description: 'Nutricionista clínica em Divinópolis - MG. Acompanhamento individualizado em saúde intestinal, saúde da mulher e reeducação alimentar. Presencial e online.', noindex: true },
  branding: {
    radius: 22,
    colors: { bg: '#0E1412', surface: '#152019', card: '#1A2620', ink: '#F2EEE6', muted: '#A9B5AC', line: 'rgba(242,238,230,0.12)',
      primary: '#C9A96E', onPrimary: '#0E1412', accent: '#8FBFA8', onAccent: '#0E1412' },
    fonts: { heading: 'Newsreader', body: 'Hanken Grotesk', headingWeight: 400, headingLetterSpacing: '-0.02em', emphasisStyle: 'italic', emphasisColor: 'primary',
      googleFontsHref: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Hanken+Grotesk:wght@400;500;600&display=swap' }
  },
  professional: {
    name: 'Marina Albuquerque', shortName: 'Marina', title: 'Nutricionista clínica', crn: 'CRN-9 00000 (ilustrativo)',
    approach: 'Plano alimentar não é lista de proibições. É um acordo entre o que a sua saúde precisa e o que a sua rotina permite.',
    story: [
      'Atendo adultos que querem cuidar da alimentação com orientação técnica, sem dietas da moda e sem terrorismo nutricional.',
      'Cada consulta começa pela escuta: histórico clínico, exames, rotina de trabalho, preferências e o que já foi tentado antes.'
    ],
    education: [ { label: 'Graduação', value: 'Bacharelado em Nutrição' }, { label: 'Especialização', value: 'Nutrição Clínica' }, { label: 'Atualização', value: 'Saúde intestinal e microbiota' } ]
  },
  hero: {
    eyebrow: 'Nutrição clínica · Divinópolis e online',
    title: 'Cuidado nutricional que respeita a sua ', titleEmphasis: 'história', titleAfter: ' e a sua rotina.',
    description: 'Acompanhamento individualizado para quem quer comer melhor, entender os próprios exames e construir hábitos que se sustentam no dia a dia.',
    primaryCta: 'Agendar consulta', secondaryCta: 'Como funciona', secondaryHref: '#como-funciona',
    imageAlt: 'Retrato de Marina Albuquerque, nutricionista', showSecondaryImage: false,
    badges: [ { icon: 'verified', label: 'CRN-9 00000' }, { icon: 'location_on', label: 'Divinópolis - MG' }, { icon: 'videocam', label: 'Atendimento online' } ]
  },
  trust: { items: [] },
  about: { eyebrow: 'Sobre', title: 'Técnica para decidir, escuta para construir junto.', cta: 'Agendar uma conversa' },
  specialties: {
    eyebrow: 'Especialidades', title: 'Áreas de atendimento',
    intro: 'Cada área tem objetivos e protocolos próprios. Escolha uma para entender como o acompanhamento funciona.',
    items: [
      { id: 'reeducacao', name: 'Reeducação alimentar', description: 'Para quem quer organizar a alimentação, reduzir excessos e criar uma relação mais tranquila com a comida.', goals: ['Organizar horários e refeições', 'Aprender a montar pratos equilibrados', 'Reduzir a dependência de dietas restritivas'] },
      { id: 'intestinal', name: 'Saúde intestinal', description: 'Abordagem nutricional para desconfortos digestivos, com investigação cuidadosa de hábitos e sintomas.', goals: ['Mapear gatilhos alimentares', 'Ajustar fibras e hidratação', 'Trabalhar em conjunto com o médico assistente'] },
      { id: 'mulher', name: 'Saúde da mulher', description: 'Suporte nutricional em diferentes fases: ciclo menstrual, SOP, climatério e menopausa.', goals: ['Alimentação adequada a cada fase', 'Atenção a exames e sintomas', 'Estratégias compatíveis com a rotina'] },
      { id: 'cronicas', name: 'Doenças crônicas', description: 'Acompanhamento para diabetes, hipertensão e dislipidemias, integrado ao tratamento médico.', goals: ['Plano alinhado ao tratamento prescrito', 'Leitura conjunta dos exames', 'Ajustes graduais e sustentáveis'] }
    ]
  },
  differentials: { eyebrow: 'Diferenciais', title: 'O que orienta cada consulta', items: [
    { icon: 'person_search', title: 'Atendimento individualizado', description: 'Nenhum plano é reaproveitado. Tudo parte da sua avaliação.' },
    { icon: 'menu_book', title: 'Base em evidências', description: 'Condutas apoiadas em diretrizes e literatura científica atual.' },
    { icon: 'schedule', title: 'Respeito à rotina', description: 'Estratégias desenhadas para caber no seu trabalho e na sua família.' },
    { icon: 'forum', title: 'Acompanhamento próximo', description: 'Canal para dúvidas entre as consultas, com retorno em horário comercial.' }
  ] },
  modalities: { items: [
    { type: 'presencial', enabled: true, title: 'Presencial', description: 'Consultório com avaliação antropométrica.', details: ['Rua Ilustrativa, 100 — Centro', 'Divinópolis - MG'] },
    { type: 'online', enabled: true, title: 'Online', description: 'Videochamada com o mesmo cuidado da consulta presencial.', details: ['Para todo o Brasil', 'Plano enviado em PDF e aplicativo'] }
  ] },
  testimonials: { items: [] },
  faq: { items: [
    { q: 'Como funciona a primeira consulta?', a: 'É uma conversa mais longa, com levantamento de histórico, rotina, preferências e análise dos exames que você tiver. O plano alimentar é entregue depois, construído a partir dessa avaliação.' },
    { q: 'O atendimento pode ser online?', a: 'Sim. A consulta online acontece por videochamada e segue o mesmo roteiro da presencial. O plano e os materiais são enviados digitalmente.' },
    { q: 'Como é elaborado o plano alimentar?', a: 'A partir dos seus objetivos, exames e hábitos. O plano traz opções de substituição e medidas caseiras, para que seja prático no dia a dia.' },
    { q: 'Como funciona o acompanhamento?', a: 'Os retornos são combinados conforme o caso. Neles avaliamos a evolução e ajustamos a estratégia. Entre as consultas, há um canal para dúvidas.' }
  ] },
  cta: { title: 'Vamos conversar sobre a sua alimentação?', description: 'Envie uma mensagem para tirar dúvidas ou agendar a primeira consulta. A resposta acontece em horário comercial.', button: 'Agendar pelo WhatsApp' },
  contact: {
    whatsapp: '5537900000000', whatsappMessage: 'Olá! Vim pelo site e gostaria de saber mais sobre o acompanhamento nutricional com {nome}.',
    instagram: '@nutri.demo', email: 'contato@exemplo.com.br', phone: '',
    address: 'Rua Ilustrativa, 100 — Centro', city: 'Divinópolis', state: 'MG', showMap: true, mapsQuery: 'Centro, Divinópolis - MG',
    hours: [ { days: 'Segunda a sexta', time: '8h às 18h' }, { days: 'Sábado', time: '8h às 12h (online)' } ]
  },
  footer: { note: 'Demonstração do produto Nutri White Label. Dados fictícios.' }
};
