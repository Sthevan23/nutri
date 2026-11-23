/* Nutri White Label — renderiza o site a partir da configuração do cliente (NWLCore).
   Os dados e a estrutura visual ficam separados: aqui só há marcação e comportamento. */
(function () {
  'use strict';
  var C = window.NWLCore;
  if (!C || !C.ready()) { console.error('[Nutri White Label] núcleo ou defaults não carregados.'); return; }

  /* ---------- utilidades ---------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }
  function digits(s) { return String(s || '').replace(/\D/g, ''); }
  function fmtPhone(s) {
    var d = digits(s);
    if (d.length < 12) return s || '';
    var r = d.slice(4);
    return '+' + d.slice(0, 2) + ' (' + d.slice(2, 4) + ') ' + r.slice(0, -4) + '-' + r.slice(-4);
  }

  /* ---------- resolução do cliente ---------- */
  var id = C.pickClient(window.NWL_DEFAULT_CLIENT);
  var cfg = C.resolve(id);
  C.applyTheme(cfg);
  C.applySeo(cfg);
  var warnings = C.validate(cfg);
  if (warnings.length) console.info('[Nutri White Label] ' + id + ': ' + warnings.join(' · '));

  var p = cfg.professional || {}, c = cfg.contact || {}, h = cfg.hero || {}, b = cfg.branding || {};
  var name = p.name || 'Nutricionista';
  var initials = name.split(/\s+/).filter(Boolean).map(function (w) { return w[0]; }).slice(0, 2).join('').toUpperCase();
  var cityLine = [c.city, c.state].filter(Boolean).join(' - ');
  var mapsQ = c.mapsQuery || [c.address, cityLine].filter(Boolean).join(', ');
  var mapsUrl = mapsQ ? 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(mapsQ) : '#contato';
  var ig = c.instagram ? String(c.instagram).replace(/^@/, '') : '';
  var waMain = C.whatsapp(cfg);
  var preview = /[?&]preview=1\b/.test(location.search);

  /* ---------- dados derivados ---------- */
  var specItems = (cfg.specialties.items || []).filter(function (s) { return s && s.name; });
  var steps = (cfg.process.steps || []).filter(function (s) { return s && s.title; });
  var diffs = (cfg.differentials.items || []).filter(function (d) { return d && d.title; });
  var modDefaults = { presencial: ['Como chegar'], online: ['Agendar online'], domiciliar: ['Consultar minha região'] };
  var mods = (cfg.modalities.items || []).filter(function (m) { return m && m.enabled !== false && m.title; }).map(function (m) {
    var d = modDefaults[m.type] || ['Saiba mais'];
    var href = m.href || (m.type === 'presencial' ? mapsUrl
      : C.whatsapp(cfg, m.type === 'online' ? 'Olá, {nome}! Gostaria de agendar uma consulta online.' : 'Olá, {nome}! Gostaria de saber se o atendimento domiciliar chega à minha região.'));
    return { title: m.title, description: m.description || '', details: m.details || [], href: href, linkLabel: m.linkLabel || d[0] };
  });
  var realTesti = (cfg.testimonials.items || []).filter(function (t) { return t && t.text && t.authorized !== false; });
  var previewT = !realTesti.length && preview;
  var testiItems = previewT
    ? [1, 2, 3].map(function () { return { text: 'Depoimento autorizado do paciente aparecerá aqui.', name: 'Nome ou iniciais autorizadas', detail: 'Especialidade · ano', placeholder: true }; })
    : realTesti;
  var faqs = (cfg.faq.items || []).filter(function (f) { return f && f.q && f.a; });

  var rows = [];
  if (c.whatsapp) rows.push({ label: 'WhatsApp', value: fmtPhone(c.whatsapp), href: waMain, ext: true });
  if (c.phone) rows.push({ label: 'Telefone', value: fmtPhone(c.phone), href: 'tel:+' + digits(c.phone) });
  if (c.email) rows.push({ label: 'E-mail', value: c.email, href: 'mailto:' + c.email });
  if (ig) rows.push({ label: 'Instagram', value: '@' + ig, href: 'https://instagram.com/' + ig, ext: true });
  if (c.address || cityLine) rows.push({ label: 'Endereço', value: [c.address, cityLine].filter(Boolean).join(' · '), href: mapsUrl, ext: true });
  var showMap = !!(c.showMap && mapsQ);

  var en = cfg.sections.enabled || {};
  var has = {
    hero: true, about: true, specialties: specItems.length > 0, process: steps.length > 0,
    differentials: diffs.length > 0, modalities: mods.length > 0, testimonials: testiItems.length > 0,
    faq: faqs.length > 0, cta: true, contact: true
  };
  var show = {};
  C.SECTION_KEYS.forEach(function (k) { show[k] = en[k] !== false && !!has[k]; });
  var order = (cfg.sections.order || []).filter(function (k) { return C.SECTION_KEYS.indexOf(k) >= 0 && show[k]; });
  C.SECTION_KEYS.forEach(function (k) { if (order.indexOf(k) < 0 && show[k] && k !== 'hero') order.push(k); });
  var anchors = { about: 'sobre', specialties: 'especialidades', process: 'como-funciona', modalities: 'modalidades', differentials: 'diferenciais', testimonials: 'depoimentos', faq: 'duvidas', contact: 'contato' };
  var navItems = order.filter(function (k) { return anchors[k] && cfg.nav[k]; })
    .map(function (k) { return { label: cfg.nav[k], href: '#' + anchors[k] }; });

  /* ---------- blocos ---------- */
  function heroTitle() {
    return esc(h.title) + (h.titleEmphasis ? '<span class="em">' + esc(h.titleEmphasis) + '</span>' : '') + esc(h.titleAfter || '');
  }
  function photo(src, alt, extraClass) {
    if (src) return '<figure class="photo ' + (extraClass || '') + '"><img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="eager" decoding="async"></figure>';
    return '<figure class="photo ' + (extraClass || '') + '" role="img" aria-label="' + esc(alt) + '"><div class="photo-empty"><span class="photo-mark" aria-hidden="true">' + esc(initials) + '</span><span>Foto a ser enviada</span></div></figure>';
  }

  function sectionHero() {
    var badges = (h.badges || []).map(function (bd) { return '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>' + esc(bd.label || bd) + '</li>'; }).join('');
    var secondary = (h.showSecondaryImage && h.secondaryImage) ? '<div class="photo-inset"><img src="' + esc(h.secondaryImage) + '" alt="" loading="lazy"></div>' : '';
    return '<section class="hero" id="inicio" aria-labelledby="hero-title"><div class="wrap hero-grid">' +
      '<div class="hero-copy">' +
        (h.eyebrow ? '<span class="eyebrow">' + esc(h.eyebrow) + '</span>' : '') +
        '<h1 class="hero-title" id="hero-title">' + heroTitle() + '</h1>' +
        '<p class="hero-sub">' + esc(h.description) + '</p>' +
        '<div class="hero-actions">' +
          '<a class="btn btn-primary btn-lg" href="' + esc(waMain) + '" target="_blank" rel="noopener">' + esc(h.primaryCta || 'Agendar consulta') + ' <span class="arrow" aria-hidden="true">→</span></a>' +
          (h.secondaryCta ? '<a class="btn btn-ghost btn-lg" href="' + esc(h.secondaryHref || '#contato') + '">' + esc(h.secondaryCta) + '</a>' : '') +
        '</div>' +
        (badges ? '<ul class="hero-meta">' + badges + '</ul>' : '') +
      '</div>' +
      '<div class="hero-visual">' + photo(h.image, h.imageAlt || 'Retrato de ' + name, '') + secondary +
        '<figcaption class="photo-caption"><span>' + esc(name) + '</span><span>' + esc(p.crn || '') + '</span></figcaption>' +
      '</div>' +
    '</div></section>';
  }

  function sectionMarquee() {
    if (!specItems.length) return '';
    var list = specItems.map(function (s) { return '<span>' + esc(s.name) + '</span>'; }).join('');
    return '<div class="marquee" aria-hidden="true"><div class="marquee-track">' + list + list + '</div></div>';
  }

  function sectionAbout() {
    var story = (p.story || []).map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('');
    var edu = (p.education || []).map(function (e) { return '<div><dt>' + esc(e.label) + '</dt><dd>' + esc(e.value) + '</dd></div>'; }).join('');
    var src = cfg.about.image || p.photo;
    return '<section class="section" id="sobre" aria-labelledby="sobre-title"><div class="wrap about-grid">' +
      '<div class="reveal">' + photo(src, cfg.about.imageAlt || 'Foto de ' + name, '') +
        '<figcaption class="photo-caption"><span>' + esc(name) + ' · ' + esc(p.title || '') + '</span><span>' + esc(p.crn || '') + '</span></figcaption></div>' +
      '<div class="about-text reveal">' +
        '<span class="eyebrow">' + esc(cfg.about.eyebrow || 'Sobre') + '</span>' +
        '<h2 class="h2" id="sobre-title">' + esc(cfg.about.title || name) + '</h2>' +
        (story ? '<div class="story">' + story + '</div>' : '') +
        (p.approach ? '<blockquote class="quote">' + esc(p.approach) + '</blockquote>' : '') +
        (edu ? '<dl class="facts">' + edu + '</dl>' : '') +
        '<div class="row-actions">' +
          '<a class="btn btn-primary" href="' + esc(waMain) + '" target="_blank" rel="noopener">' + esc(cfg.about.cta || 'Agendar uma conversa') + '</a>' +
          (ig ? '<a class="text-link" href="https://instagram.com/' + esc(ig) + '" target="_blank" rel="noopener">Acompanhar @' + esc(ig) + '</a>' : '') +
        '</div>' +
      '</div>' +
    '</div></section>';
  }

  function sectionSpecialties() {
    var specMsg = cfg.specialties.message;
    var tabs = specItems.map(function (s, i) {
      return '<button type="button" class="spec-btn" aria-pressed="' + (i === 0) + '" aria-controls="spec-p-' + i + '" data-spec="' + i + '">' +
        '<span class="spec-num">' + String(i + 1).padStart(2, '0') + '</span><span class="spec-name">' + esc(s.name) + '</span></button>';
    }).join('');
    var panels = specItems.map(function (s, i) {
      var goals = (s.goals || []).map(function (g) { return '<li>' + esc(g) + '</li>'; }).join('');
      var wa = C.whatsapp(cfg, s.whatsappMessage || specMsg, { especialidade: String(s.name).toLowerCase() });
      return '<div class="spec-panel" id="spec-p-' + i + '" role="region" aria-label="' + esc(s.name) + '"' + (i === 0 ? '' : ' hidden') + '>' +
        photo(s.image, s.name, '') +
        '<h3>' + esc(s.name) + '</h3>' +
        (s.description ? '<p>' + esc(s.description) + '</p>' : '') +
        (goals ? '<ul class="goals">' + goals + '</ul>' : '') +
        '<a class="btn btn-ghost" href="' + esc(wa) + '" target="_blank" rel="noopener">' + esc(cfg.specialties.cta || 'Conversar sobre') + ' ' + esc(s.name) + '</a>' +
      '</div>';
    }).join('');
    return '<section class="section section-alt" id="especialidades" aria-labelledby="esp-title"><div class="wrap">' +
      '<div class="head split reveal"><div style="display:grid;gap:18px">' +
        '<span class="eyebrow">' + esc(cfg.specialties.eyebrow || 'Especialidades') + '</span>' +
        '<h2 class="h2" id="esp-title">' + esc(cfg.specialties.title) + '</h2></div>' +
        (cfg.specialties.intro ? '<p class="lead">' + esc(cfg.specialties.intro) + '</p>' : '') +
      '</div>' +
      '<div class="spec-grid reveal"><div class="spec-list">' + tabs + '</div><div>' + panels + '</div></div>' +
    '</div></section>';
  }

  function sectionProcess() {
    var items = steps.map(function (s, i) {
      return '<li class="step"><span class="step-num" aria-hidden="true">' + String(i + 1).padStart(2, '0') + '</span><h3>' + esc(s.title) + '</h3><p>' + esc(s.description) + '</p></li>';
    }).join('');
    return '<section class="section" id="como-funciona" aria-labelledby="proc-title"><div class="wrap">' +
      '<div class="head reveal"><span class="eyebrow">' + esc(cfg.process.eyebrow || 'Como funciona') + '</span>' +
      '<h2 class="h2" id="proc-title">' + esc(cfg.process.title) + '</h2></div>' +
      '<ol class="steps reveal">' + items + '</ol>' +
    '</div></section>';
  }

  function sectionDifferentials() {
    var cards = diffs.map(function (d) {
      return '<article class="card"><h3>' + esc(d.title) + '</h3>' + (d.description ? '<p>' + esc(d.description) + '</p>' : '') + '</article>';
    }).join('');
    return '<section class="section section-alt" id="diferenciais" aria-labelledby="dif-title"><div class="wrap">' +
      '<div class="head split reveal"><div style="display:grid;gap:18px"><span class="eyebrow">' + esc(cfg.differentials.eyebrow || 'Diferenciais') + '</span>' +
      '<h2 class="h2" id="dif-title">' + esc(cfg.differentials.title) + '</h2></div></div>' +
      '<div class="cards cols-3 reveal">' + cards + '</div>' +
    '</div></section>';
  }

  function sectionModalities() {
    var cards = mods.map(function (m) {
      var details = (m.details || []).map(function (d) { return '<li>' + esc(d) + '</li>'; }).join('');
      return '<article class="card"><h3>' + esc(m.title) + '</h3>' + (m.description ? '<p>' + esc(m.description) + '</p>' : '') +
        (details ? '<ul>' + details + '</ul>' : '') +
        '<a class="card-link" href="' + esc(m.href) + '" target="_blank" rel="noopener">' + esc(m.linkLabel) + ' <span aria-hidden="true">→</span></a></article>';
    }).join('');
    return '<section class="section" id="modalidades" aria-labelledby="mod-title"><div class="wrap">' +
      '<div class="head reveal"><span class="eyebrow">' + esc(cfg.modalities.eyebrow || 'Modalidades') + '</span>' +
      '<h2 class="h2" id="mod-title">' + esc(cfg.modalities.title) + '</h2></div>' +
      '<div class="cards cols-2 reveal">' + cards + '</div>' +
    '</div></section>';
  }

  function sectionTestimonials() {
    var cards = testiItems.map(function (t) {
      var r = Math.max(0, Math.min(5, Number(t.rating) || 0));
      var stars = r ? '<div class="stars" role="img" aria-label="' + r + ' de 5">' + '★'.repeat(r) + '</div>' : '';
      var photoHtml = t.photo ? '<img src="' + esc(t.photo) + '" alt="" loading="lazy" style="width:44px;height:44px;border-radius:50%;object-fit:cover">' : '';
      return '<figure class="card quote-card" style="margin:0">' + stars +
        '<blockquote style="margin:0"><p' + (t.placeholder ? ' style="color:var(--muted)"' : '') + '>' + esc(t.text) + '</p></blockquote>' +
        '<figcaption style="display:flex;align-items:center;gap:12px">' + photoHtml + '<span><strong>' + esc(t.name || 'Paciente') + '</strong><span>' + esc(t.detail || '') + '</span></span></figcaption></figure>';
    }).join('');
    var note = previewT ? '<p class="note-warn">Pré-visualização de layout · esta seção só aparece com depoimentos reais e autorizados.</p>' : '';
    return '<section class="section section-alt" id="depoimentos" aria-labelledby="dep-title"><div class="wrap">' +
      '<div class="head reveal"><span class="eyebrow">' + esc(cfg.testimonials.eyebrow || 'Depoimentos') + '</span>' +
      '<h2 class="h2" id="dep-title">' + esc(cfg.testimonials.title) + '</h2>' + note + '</div>' +
      '<div class="cards cols-3 reveal">' + cards + '</div>' +
    '</div></section>';
  }

  function sectionFaq() {
    var items = faqs.map(function (f, i) {
      return '<div class="faq-item"><h3 style="margin:0"><button type="button" class="faq-q" id="faq-b-' + i + '" aria-expanded="false" aria-controls="faq-p-' + i + '" data-faq="' + i + '">' +
        '<span>' + esc(f.q) + '</span><span class="faq-plus" aria-hidden="true"></span></button></h3>' +
        '<div id="faq-p-' + i + '" role="region" aria-labelledby="faq-b-' + i + '" hidden><p class="faq-a">' + esc(f.a) + '</p></div></div>';
    }).join('');
    return '<section class="section" id="duvidas" aria-labelledby="faq-title"><div class="wrap faq-grid">' +
      '<div class="reveal"><span class="eyebrow">' + esc(cfg.faq.eyebrow || 'Dúvidas frequentes') + '</span>' +
      '<h2 class="h2" id="faq-title" style="margin-top:18px">' + esc(cfg.faq.title) + '</h2>' +
      '<p class="lead" style="margin-top:18px">' + esc(cfg.faq.aside || '') + ' <a href="' + esc(waMain) + '" target="_blank" rel="noopener" style="color:var(--ink);font-weight:600">Envie uma mensagem.</a></p></div>' +
      '<div class="faq-list reveal">' + items + '</div>' +
    '</div></section>';
  }

  function sectionCta() {
    return '<section class="section" id="agendar" aria-labelledby="cta-title"><div class="wrap">' +
      '<div class="cta-panel reveal">' +
        '<div style="display:grid;gap:22px"><span class="eyebrow" style="color:inherit;opacity:.8">' + esc(cfg.cta.eyebrow || 'Agendar') + '</span>' +
        '<h2 class="h2" id="cta-title">' + esc(cfg.cta.title) + '</h2>' +
        '<p class="lead">' + esc(cfg.cta.description) + '</p></div>' +
        '<div><a class="btn btn-primary btn-lg" href="' + esc(waMain) + '" target="_blank" rel="noopener">' + esc(cfg.cta.button) + ' <span aria-hidden="true">→</span></a></div>' +
      '</div>' +
    '</div></section>';
  }

  function sectionContact() {
    var info = rows.map(function (r) {
      return '<li><a href="' + esc(r.href) + '"' + (r.ext ? ' target="_blank" rel="noopener"' : '') + '><small>' + esc(r.label) + '</small><span>' + esc(r.value) + '</span></a></li>';
    }).join('');
    var hours = (c.hours || []).map(function (x) { return '<div><span>' + esc(x.days) + '</span><span>' + esc(x.time) + '</span></div>'; }).join('');
    var map = showMap
      ? '<div class="map"><iframe title="' + esc('Mapa — ' + mapsQ) + '" src="https://maps.google.com/maps?q=' + encodeURIComponent(mapsQ) + '&z=15&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>'
      : '';
    return '<section class="section section-alt" id="contato" aria-labelledby="contato-title"><div class="wrap contact-grid">' +
      '<div class="reveal"><span class="eyebrow">Contato</span>' +
        '<h2 class="h2" id="contato-title" style="margin-top:18px">Fale com ' + esc(p.shortName || name.split(' ')[0]) + '</h2>' +
        (info ? '<ul class="contact-info">' + info + '</ul>' : '') +
        (hours ? '<div class="hours"><span class="eyebrow" style="color:var(--muted)">Horários</span>' + hours + '</div>' : '') +
      '</div>' +
      '<div class="reveal">' + map + '</div>' +
    '</div></section>';
  }

  /* ---------- montagem ---------- */
  var blocks = {
    about: sectionAbout, specialties: sectionSpecialties, process: sectionProcess, differentials: sectionDifferentials,
    modalities: sectionModalities, testimonials: sectionTestimonials, faq: sectionFaq, cta: sectionCta, contact: sectionContact
  };

  var demoBar = '';
  if (cfg.meta && cfg.meta.demo) {
    var links = C.list().map(function (k) {
      var label = (window.NWL_CLIENTS[k].meta && window.NWL_CLIENTS[k].meta.label) || k;
      return '<a href="?cliente=' + esc(k) + '"' + (k === id ? ' aria-current="true"' : '') + '>' + esc(label) + '</a>';
    }).join('');
    demoBar = '<div class="demo-bar"><div class="wrap"><span class="label">Demonstração Nutri White Label · dados fictícios</span><nav aria-label="Trocar configuração de cliente">' + links + '</nav></div></div>';
  }

  var header = '<header class="site-header" id="site-header"><div class="wrap header-inner">' +
    '<a href="#inicio" class="brand" aria-label="' + esc(name) + ' — início">' +
      (b.logo ? '<span class="brand-logo" role="img" aria-label="' + esc(name) + '"></span>' : '<span class="brand-mark" aria-hidden="true">' + esc(initials) + '</span>') +
      '<span class="brand-text"><span class="brand-name">' + esc(name) + '</span><span class="brand-title">' + esc(p.title || 'Nutricionista') + '</span></span>' +
    '</a>' +
    '<nav class="nav-links" aria-label="Principal">' + navItems.map(function (n) { return '<a href="' + esc(n.href) + '">' + esc(n.label) + '</a>'; }).join('') + '</nav>' +
    '<div class="nav-cta"><a class="btn btn-primary" href="' + esc(waMain) + '" target="_blank" rel="noopener">' + esc(h.primaryCta || 'Agendar') + '</a>' +
      '<button class="menu-toggle" id="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menu"><span></span><span></span></button></div>' +
  '</div></header>' +
  '<div class="mobile-menu" id="mobile-menu" hidden>' +
    '<nav aria-label="Menu">' + navItems.map(function (n) { return '<a class="m-link" href="' + esc(n.href) + '">' + esc(n.label) + ' <span aria-hidden="true">→</span></a>'; }).join('') + '</nav>' +
    '<a class="btn btn-primary btn-lg" href="' + esc(waMain) + '" target="_blank" rel="noopener">' + esc(h.primaryCta || 'Agendar') + ' pelo WhatsApp</a>' +
    '<p style="margin:16px 0 0;font-size:0.85rem;color:var(--muted);text-align:center">' + esc(p.crn || '') + '</p>' +
  '</div>';

  var main = '<main id="main">' + (show.hero ? sectionHero() : '') + sectionMarquee();
  order.forEach(function (k) { if (blocks[k]) main += blocks[k](); });
  main += '</main>';

  var footer = '<footer class="site-footer"><div class="wrap">' +
    '<div class="footer-grid">' +
      '<div class="footer-brand"><span class="brand-name">' + esc(name) + '</span><small>' + esc(p.title || '') + (p.crn ? ' · ' + esc(p.crn) : '') + '</small>' +
        (cfg.footer.hasNote || cfg.footer.note ? '<p class="footer-note">' + esc(cfg.footer.note) + '</p>' : '') + '</div>' +
      '<nav class="footer-col" aria-label="Rodapé"><h4>Navegação</h4>' + navItems.map(function (n) { return '<a href="' + esc(n.href) + '">' + esc(n.label) + '</a>'; }).join('') + '</nav>' +
      '<div class="footer-col"><h4>Contato</h4>' + rows.map(function (r) { return '<a href="' + esc(r.href) + '"' + (r.ext ? ' target="_blank" rel="noopener"' : '') + '>' + esc(r.label) + '</a>'; }).join('') + '</div>' +
    '</div>' +
    '<div class="footer-bottom"><span>© ' + new Date().getFullYear() + ' ' + esc(name) + '. Todos os direitos reservados.</span>' +
      '<span><a href="' + esc((cfg.footer.privacyHref || 'Politica de Privacidade.dc.html') + '?cliente=' + id) + '">Política de privacidade</a></span></div>' +
  '</div></footer>';

  var fab = cfg.floatingWhatsApp.enabled !== false
    ? '<a class="wa-float" id="wa-float" href="' + esc(waMain) + '" target="_blank" rel="noopener" aria-label="' + esc('Agendar pelo WhatsApp com ' + name) + '">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>' +
      '<span>' + esc(cfg.floatingWhatsApp.label || 'Agendar') + '</span></a>'
    : '';

  var root = document.getElementById('site-root');
  root.innerHTML = demoBar + header + main + footer + fab;

  /* ---------- comportamento ---------- */
  var toggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('mobile-menu');
  function setMenu(open) {
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    if (open) { var first = menu.querySelector('a'); if (first) first.focus(); }
    else { toggle.focus(); }
  }
  toggle.addEventListener('click', function () { setMenu(menu.hidden); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) setMenu(false); });

  root.addEventListener('click', function (e) {
    var sb = e.target.closest('[data-spec]');
    if (sb) {
      var i = sb.getAttribute('data-spec');
      root.querySelectorAll('[data-spec]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === sb)); });
      root.querySelectorAll('.spec-panel').forEach(function (pn) { pn.hidden = pn.id !== 'spec-p-' + i; });
      return;
    }
    var qb = e.target.closest('[data-faq]');
    if (qb) {
      var open = qb.getAttribute('aria-expanded') === 'true';
      qb.setAttribute('aria-expanded', String(!open));
      document.getElementById(qb.getAttribute('aria-controls')).hidden = open;
    }
  });

  var fabEl = document.getElementById('wa-float');
  function onScroll() { if (fabEl) fabEl.classList.toggle('is-visible', window.scrollY > 520); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en2) { if (en2.isIntersecting) { en2.target.classList.add('is-in'); io.unobserve(en2.target); } });
    }, { threshold: 0.12 });
    root.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    root.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-in'); });
  }
})();
