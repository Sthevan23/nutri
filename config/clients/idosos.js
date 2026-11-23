/* CLIENTE TESTE — Nutrição para idosos. DADOS FICTÍCIOS. Escala tipográfica ampliada (acessibilidade 60+). */
window.NWL_CLIENTS = window.NWL_CLIENTS || {};
window.NWL_CLIENTS.idosos = {
  meta: { demo: true, label: 'Idosos — alta legibilidade' },
  seo: { description: 'Nutricionista para idosos em Porto Alegre - RS. Envelhecimento saudável, sarcopenia, disfagia e doenças crônicas. Presencial, online e domiciliar.', noindex: true },
  branding: {
    radius: 12, scale: 1.12,
    colors: { bg: '#F6F5F1', surface: '#E8E6DF', card: '#FFFFFF', ink: '#14202E', muted: '#3F4B59', line: 'rgba(20,32,46,0.2)',
      primary: '#1D3557', onPrimary: '#FFFFFF', accent: '#8A6429', onAccent: '#FFFFFF' },
    fonts: { heading: 'Libre Baskerville', body: 'Atkinson Hyperlegible', headingWeight: 400, headingLetterSpacing: '-0.01em', emphasisStyle: 'italic', emphasisColor: 'accent',
      googleFontsHref: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Atkinson+Hyperlegible:wght@400;700&display=swap' }
  },
  professional: {
    name: 'Henrique Vasconcelos', shortName: 'Henrique', title: 'Nutricionista em gerontologia', crn: 'CRN-2 33333 (ilustrativo)',
    approach: 'Comer bem na maturidade é preservar força, autonomia e prazer à mesa.',
    story: [ 'Atendo pessoas acima de 60 anos e suas famílias, com atenção especial a quem cuida.', 'As orientações são explicadas com calma, entregues por escrito e revisadas com o cuidador sempre que necessário.' ],
    education: [ { label: 'Graduação', value: 'Bacharelado em Nutrição' }, { label: 'Especialização', value: 'Gerontologia' } ]
  },
  hero: {
    eyebrow: 'Nutrição para pessoas idosas · Porto Alegre',
    title: 'Alimentação para envelhecer com ', titleEmphasis: 'força e autonomia', titleAfter: '.',
    description: 'Acompanhamento nutricional para pessoas 60+ e orientação para familiares e cuidadores — no consultório, online ou em casa.',
    primaryCta: 'Agendar consulta', secondaryCta: 'Falar sobre um familiar', secondaryHref: '#contato',
    badges: [ { icon: 'verified', label: 'CRN-2 33333' }, { icon: 'home', label: 'Atendimento domiciliar' }, { icon: 'family_restroom', label: 'Orientação a cuidadores' } ]
  },
  trust: { items: [ { label: 'Registro', value: 'CRN-2 33333' }, { label: 'Especialização', value: 'Gerontologia' }, { label: 'Modalidades', value: 'Consultório, online e domicílio' } ] },
  about: { title: 'Explicações claras, orientações por escrito e tempo para perguntas.' },
  specialties: { intro: 'Cuidados específicos do envelhecimento.', items: [
    { id: 'envelhecimento', name: 'Envelhecimento saudável', description: 'Alimentação para manter energia, disposição e qualidade de vida.', goals: ['Rotina alimentar simples', 'Hidratação adequada', 'Prevenção de deficiências'] },
    { id: 'sarcopenia', name: 'Sarcopenia', description: 'Estratégias para preservar massa muscular e força.', goals: ['Proteína adequada por refeição', 'Integração com atividade física', 'Reavaliação periódica'] },
    { id: 'disfagia', name: 'Disfagia', description: 'Adaptação de consistências com segurança, junto à fonoaudiologia.', goals: ['Texturas seguras', 'Refeições nutritivas e saborosas', 'Orientação ao cuidador'] },
    { id: 'cronicas', name: 'Doenças crônicas', description: 'Diabetes, hipertensão e doença renal, em conjunto com o médico.', goals: ['Plano alinhado ao tratamento', 'Atenção a interações com medicamentos', 'Ajustes graduais'] }
  ] },
  differentials: { items: [
    { icon: 'record_voice_over', title: 'Comunicação clara', description: 'Linguagem simples e orientações sempre por escrito.' },
    { icon: 'family_restroom', title: 'Família incluída', description: 'Cuidadores participam das consultas quando desejado.' },
    { icon: 'home_health', title: 'Atendimento em casa', description: 'Para quem tem mobilidade reduzida.' }
  ] },
  modalities: { items: [
    { type: 'presencial', enabled: true, title: 'Consultório', description: 'Acesso térreo e sem escadas.', details: ['Moinhos de Vento — Porto Alegre - RS'] },
    { type: 'online', enabled: true, title: 'Online', description: 'Com apoio de um familiar na chamada, se preferir.', details: ['Para todo o Brasil'] },
    { type: 'domiciliar', enabled: true, title: 'Domiciliar', description: 'Avaliação no ambiente de casa.', details: ['Porto Alegre e região metropolitana'] }
  ] },
  faq: { items: [
    { q: 'Um familiar pode acompanhar a consulta?', a: 'Sim, e é recomendado. Familiares e cuidadores podem participar presencialmente ou online.' },
    { q: 'Atende em casa?', a: 'Sim, em Porto Alegre e região metropolitana, com agendamento prévio.' },
    { q: 'Como são entregues as orientações?', a: 'Por escrito, em letra ampliada, e explicadas durante a consulta.' }
  ] },
  cta: { title: 'Cuidar da alimentação é cuidar da autonomia.', description: 'Ligue ou envie uma mensagem. Familiares também podem agendar.', button: 'Agendar consulta' },
  contact: { whatsapp: '5551933333333', whatsappMessage: 'Olá, {nome}! Vim pelo site e gostaria de informações sobre consulta nutricional para pessoa idosa.',
    email: 'idosos@exemplo.com.br', phone: '5551933333333', city: 'Porto Alegre', state: 'RS', address: 'Moinhos de Vento', showMap: true, mapsQuery: 'Moinhos de Vento, Porto Alegre - RS',
    hours: [ { days: 'Segunda a sexta', time: '8h às 17h' } ] },
  floatingWhatsApp: { label: 'Falar agora' },
  footer: { note: 'Configuração de teste — dados fictícios.' }
};
