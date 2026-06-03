/* ============================================
   js/i18n.js
   Cambio de idioma (ES / EN).
   Depende de: translations.js
   ============================================ */

let currentLang = localStorage.getItem('lang') || 'es';

function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Actualizar todos los elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Placeholders del formulario (no usan data-i18n para no sobreescribir)
  const nameInput = document.querySelector('input[type="text"]');
  const textarea  = document.querySelector('textarea');
  if (nameInput) nameInput.placeholder = lang === 'es' ? 'Tu nombre'              : 'Your name';
  if (textarea)  textarea.placeholder  = lang === 'es' ? '¿En qué puedo ayudarte?' : 'How can I help you?';

  // Botones de idioma
  document.querySelectorAll('#lang-toggle, #lang-toggle-m').forEach(btn => {
    btn.textContent = lang === 'es' ? '🌐 EN' : '🌐 ES';
  });

  // Re-sincronizar botón de tema (usa el idioma)
  if (typeof updateThemeBtn === 'function') updateThemeBtn();
}

function toggleLang() {
  applyTranslations(currentLang === 'es' ? 'en' : 'es');
}
