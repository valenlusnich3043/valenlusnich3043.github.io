/* ============================================
   js/main.js
   Punto de entrada: conecta los event listeners
   y ejecuta la inicialización.

   Orden de carga en index.html:
     1. translations.js  → objeto `translations`
     2. theme.js         → toggleTheme, updateThemeBtn
     3. i18n.js          → toggleLang, applyTranslations
     4. nav.js           → hamburger
     5. animations.js    → scroll reveal
     6. main.js          → este archivo
   ============================================ */

// ── Botones de tema ──
document.getElementById('theme-toggle')
  .addEventListener('click', toggleTheme);
document.getElementById('theme-toggle-m')
  .addEventListener('click', toggleTheme);

// ── Botones de idioma ──
document.getElementById('lang-toggle')
  .addEventListener('click', toggleLang);
document.getElementById('lang-toggle-m')
  .addEventListener('click', toggleLang);

// ── Inicializar con el idioma guardado (o español) ──
applyTranslations(currentLang);
