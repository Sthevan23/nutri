/* Configuração padrão de fallback. Tudo que um cliente não definir vem daqui.
   Não contém credenciais, números ou promessas — apenas estrutura neutra. */
window.NWL_DEFAULT_CLIENT = window.NWL_DEFAULT_CLIENT || 'clinico';
window.NWL_DEFAULTS = {
  meta: { locale: 'pt-BR', demo: false },
  seo: { title: '', description: '', canonical: '', ogImage: '', noindex: false },
  branding: {
    logo: '', favicon: '', radius: 16, scale: 1,
    colors: { bg: '#F7F6F3', surface: '#EDEBE6', card: '#FFFFFF', ink: '#1C1F1E', muted: '#5C6260', line: 'rgba(28,31,30,0.14)',
      primary: '#2F3B37', onPrimary: '#FFFFFF', accent: '#8A5A3C', onAccent: '#FFFFFF' },
    fonts: { heading: 'Newsreader', body: 'Hanken Grotesk', headingWeight: 400, emphasisStyle: 'italic', emphasisColor: 'accent',
      googleFontsHref: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Hanken+Grotesk:wght@400;500;600&display=swap' }
  },
  professional: { name: 'Nutricionista', shortName: '', title: 'Nutricionista', crn: '', photo: '', story: [], approach: '', education: [] },
  sections: {
    order: ['hero', 'trust', 'about', 'specialties', 'process', 'differentials', 'modalities', 'testimonials', 'faq', 'cta', 'contact'],
    enabled: { hero: true, trust: true, about: true, specialties: true, process: true, differentials: true, modalities: true, testimonials: true, faq: true, cta: true, contact: true }
  },
  nav: { about: 'Sobre', specialties: 'Especialidades', process: 'Como funciona', testimonials: 'Depoimentos', faq: 'Dúvidas', contact: 'Contato' },
  hero: {
    eyebrow: 'Acompanhamento nutricional', title: 'Alimentação planejada para a ', titleEmphasis: 'sua rotina', titleAfter: '.',
    description: 'Consultas individualizadas, com plano alimentar construído a partir da sua história, dos seus exames e dos seus objetivos.',
    primaryCta: 'Agendar consulta', secondaryCta: 'Conhecer o atendimento', secondaryHref: '#como-funciona',
    image: '', imageAlt: 'Retrato profissional', secondaryImage: '', showSecondaryImage: false, badges: []
  },
  trust: { items: [] },
  about: { eyebrow: 'Sobre', title: '', image: '', imageAlt: 'Foto profissional', cta: 'Agendar uma conversa' },
  specialties: { eyebrow: 'Especialidades', title: 'Áreas de atendimento', intro: '', cta: 'Conversar sobre', message: 'Olá! Gostaria de saber mais sobre o acompanhamento em {especialidade} com {nome}.', items: [] },
  process: { eyebrow: 'Como funciona', title: 'Do primeiro contato ao acompanhamento', steps: [
    { title: 'Primeiro contato', description: 'Você envia uma mensagem, tira dúvidas e escolhe o melhor horário.', icon: 'chat' },
    { title: 'Avaliação individualizada', description: 'Conversa sobre histórico, rotina, preferências e exames disponíveis.', icon: 'clinical_notes' },
    { title: 'Planejamento nutricional', description: 'Estratégia e plano alimentar construídos para a sua realidade.', icon: 'edit_note' },
    { title: 'Acompanhamento e ajustes', description: 'Retornos para avaliar a evolução e ajustar o que for necessário.', icon: 'autorenew' }
  ] },
  differentials: { eyebrow: 'Diferenciais', title: 'O que orienta o atendimento', items: [] },
  modalities: { eyebrow: 'Modalidades', title: 'Formas de atendimento', items: [] },
  testimonials: { eyebrow: 'Depoimentos', title: 'Quem já foi acompanhado', items: [] },
  faq: { eyebrow: 'Dúvidas frequentes', title: 'Perguntas comuns', aside: 'Não encontrou o que procurava?', items: [] },
  cta: { title: 'Pronto para começar?', description: 'Envie uma mensagem e agende sua primeira consulta.', button: 'Agendar pelo WhatsApp', image: '' },
  contact: { whatsapp: '', whatsappMessage: 'Olá! Gostaria de saber mais sobre o acompanhamento nutricional com {nome}.', instagram: '', email: '', phone: '',
    address: '', city: '', state: '', showMap: false, mapsQuery: '', hours: [] },
  footer: { privacyHref: 'Politica de Privacidade.dc.html', note: '' },
  floatingWhatsApp: { enabled: true, label: 'Agendar' }
};
