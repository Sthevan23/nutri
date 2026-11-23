/* TESTE DE ROBUSTEZ — configuração incompleta de propósito.
   Só nome e WhatsApp: todo o resto deve vir dos defaults sem quebrar a página. */
window.NWL_CLIENTS = window.NWL_CLIENTS || {};
window.NWL_CLIENTS.minimo = {
  meta: { demo: true, label: 'Config. mínima (teste)' },
  professional: { name: 'Profissional Exemplo' },
  contact: { whatsapp: '5500000000000' },
  sections: { enabled: { faq: false } }
};
