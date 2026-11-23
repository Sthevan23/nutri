/* Nutri White Label — núcleo (independente de cliente).
   Ordem de carregamento livre: clientes e defaults se registram em globais. */
(function () {
  window.NWL_CLIENTS = window.NWL_CLIENTS || {};
  var isObj = function (v) { return v && typeof v === 'object' && !Array.isArray(v); };

  function merge(base, over) {
    if (over === undefined || over === null) return clone(base);
    if (!isObj(base) || !isObj(over)) return clone(over);
    var out = {};
    Object.keys(base).forEach(function (k) { out[k] = clone(base[k]); });
    Object.keys(over).forEach(function (k) {
      var v = over[k];
      if (v === undefined || v === null) return;
      out[k] = isObj(v) && isObj(base[k]) ? merge(base[k], v) : clone(v);
    });
    return out;
  }
  function clone(v) { return v === undefined ? v : JSON.parse(JSON.stringify(v)); }
  function digits(s) { return String(s || '').replace(/\D/g, ''); }
  function fill(tpl, ctx) {
    return String(tpl || '').replace(/\{(\w+)\}/g, function (_, k) { return ctx[k] != null ? ctx[k] : ''; }).replace(/\s+/g, ' ').trim();
  }

  var SECTION_KEYS = ['hero', 'trust', 'about', 'specialties', 'process', 'differentials', 'modalities', 'testimonials', 'faq', 'cta', 'contact'];

  var Core = {
    version: '1.0.0',
    SECTION_KEYS: SECTION_KEYS,
    merge: merge,
    has: function (id) { return !!window.NWL_CLIENTS[id]; },
    ready: function () { return !!window.NWL_DEFAULTS; },
    list: function () { return Object.keys(window.NWL_CLIENTS); },

    /* Isolamento: sempre devolve uma cópia nova (defaults + cliente). Nunca muta o original. */
    resolve: function (id) {
      var raw = window.NWL_CLIENTS[id] || {};
      var cfg = merge(window.NWL_DEFAULTS || {}, raw);
      cfg.meta = merge(cfg.meta || {}, { id: id });
      return cfg;
    },

    /* Identificação do cliente: ?cliente= (preview) → prop/env → default. */
    pickClient: function (preferred) {
      var q = null;
      try { q = new URLSearchParams(location.search).get('cliente'); } catch (e) {}
      if (q && Core.has(q)) return q;
      if (preferred && Core.has(preferred)) return preferred;
      return window.NWL_DEFAULT_CLIENT && Core.has(window.NWL_DEFAULT_CLIENT) ? window.NWL_DEFAULT_CLIENT : Core.list()[0];
    },

    whatsapp: function (cfg, message, extra) {
      var c = cfg.contact || {}, p = cfg.professional || {};
      var num = digits(c.whatsapp);
      var ctx = Object.assign({ nome: p.shortName || p.name || '', cidade: c.city || '' }, extra || {});
      var text = fill(message || c.whatsappMessage, ctx);
      if (num) return 'https://wa.me/' + num + (text ? '?text=' + encodeURIComponent(text) : '');
      if (c.email) return 'mailto:' + c.email + (text ? '?subject=' + encodeURIComponent('Agendamento') + '&body=' + encodeURIComponent(text) : '');
      return '#contato';
    },

    applyTheme: function (cfg) {
      var b = cfg.branding || {}, col = b.colors || {}, f = b.fonts || {};
      var root = document.documentElement, s = root.style;
      var map = { bg: '--bg', surface: '--surface', card: '--card', ink: '--ink', muted: '--muted', line: '--line',
        primary: '--primary', onPrimary: '--on-primary', accent: '--accent', onAccent: '--on-accent' };
      Object.keys(map).forEach(function (k) { if (col[k]) s.setProperty(map[k], col[k]); });
      s.setProperty('--hf', f.heading ? "'" + f.heading + "', Georgia, serif" : 'Georgia, serif');
      s.setProperty('--bf', f.body ? "'" + f.body + "', system-ui, sans-serif" : 'system-ui, sans-serif');
      s.setProperty('--hw', String(f.headingWeight || 400));
      s.setProperty('--ht', f.headingTransform || 'none');
      s.setProperty('--hls', f.headingLetterSpacing || '-0.015em');
      s.setProperty('--em-style', f.emphasisStyle || 'italic');
      s.setProperty('--em-color', col[f.emphasisColor || 'accent'] || col.accent || 'inherit');
      s.setProperty('--r', (b.radius != null ? b.radius : 18) + 'px');
      s.setProperty('--btn-r', (b.buttonRadius != null ? b.buttonRadius : 999) + 'px');
      s.setProperty('--arch', b.heroShape === 'rect' ? 'var(--r)' : '999px 999px var(--r) var(--r)');
      root.style.fontSize = (16 * (b.scale || 1)) + 'px';
      root.lang = (cfg.meta && cfg.meta.locale) || 'pt-BR';
      if (f.googleFontsHref) Core._link('nwl-fonts', 'stylesheet', f.googleFontsHref);
      if (b.logo) s.setProperty('--logo', 'url("' + b.logo + '")'); else s.removeProperty('--logo');
      if (b.favicon) Core._link('nwl-favicon', 'icon', b.favicon);
      var mt = Core._meta('name', 'theme-color'); mt.content = col.bg || '#ffffff';
    },

    applySeo: function (cfg) {
      var seo = cfg.seo || {}, p = cfg.professional || {}, c = cfg.contact || {};
      var city = [c.city, c.state].filter(Boolean).join(' - ');
      var title = seo.title || [p.name, p.title, city && 'em ' + city].filter(Boolean).join(' · ');
      var desc = seo.description || (cfg.hero && cfg.hero.description) || '';
      document.title = title;
      Core._meta('name', 'description').content = desc;
      Core._meta('name', 'robots').content = seo.noindex ? 'noindex,nofollow' : 'index,follow';
      if (seo.canonical) Core._link('nwl-canonical', 'canonical', seo.canonical);
      [['og:title', title], ['og:description', desc], ['og:type', 'website'], ['og:locale', 'pt_BR'],
       ['og:url', seo.canonical || ''], ['og:image', seo.ogImage || '']].forEach(function (m) {
        if (m[1]) Core._meta('property', m[0]).content = m[1];
      });
      Core._meta('name', 'twitter:card').content = 'summary_large_image';

      var ld = { '@context': 'https://schema.org', '@type': 'MedicalBusiness', medicalSpecialty: 'DietNutrition', name: title, description: desc };
      if (seo.canonical) ld.url = seo.canonical;
      if (seo.ogImage) ld.image = seo.ogImage;
      if (c.phone || c.whatsapp) ld.telephone = '+' + digits(c.phone || c.whatsapp);
      if (c.email) ld.email = c.email;
      if (c.city) {
        ld.address = { '@type': 'PostalAddress', addressLocality: c.city, addressRegion: c.state || undefined, streetAddress: c.address || undefined, addressCountry: 'BR' };
        ld.areaServed = c.city;
      }
      var same = [c.instagram && 'https://instagram.com/' + String(c.instagram).replace(/^@/, '')].filter(Boolean);
      if (same.length) ld.sameAs = same;
      if (p.name) ld.employee = { '@type': 'Person', name: p.name, jobTitle: p.title || 'Nutricionista', identifier: p.crn || undefined };
      var specs = (cfg.specialties && cfg.specialties.items) || [];
      if (specs.length) ld.availableService = specs.map(function (s) { return { '@type': 'MedicalTherapy', name: s.name }; });
      var el = document.getElementById('nwl-ld');
      if (!el) { el = document.createElement('script'); el.type = 'application/ld+json'; el.id = 'nwl-ld'; document.head.appendChild(el); }
      el.textContent = JSON.stringify(ld);
    },

    _meta: function (attr, key) {
      var el = document.head.querySelector('meta[' + attr + '="' + key + '"]');
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
      return el;
    },
    _link: function (id, rel, href) {
      var el = document.getElementById(id);
      if (!el) { el = document.createElement('link'); el.id = id; document.head.appendChild(el); }
      el.rel = rel; if (el.getAttribute('href') !== href) el.href = href;
    },

    /* Validação leve: avisa no console, nunca quebra. */
    validate: function (cfg) {
      var w = [];
      if (!cfg.professional || !cfg.professional.name) w.push('professional.name ausente');
      if (!cfg.contact || (!cfg.contact.whatsapp && !cfg.contact.email)) w.push('sem WhatsApp nem e-mail — CTAs apontam para #contato');
      if (!cfg.professional || !cfg.professional.crn) w.push('CRN ausente — obrigatório na publicidade profissional');
      return w;
    }
  };
  window.NWLCore = Core;
})();
