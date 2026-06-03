/* ============================================
   js/theme.js
   Manejo del modo oscuro / claro.
   Guarda la preferencia en localStorage.
   ============================================ */

let currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  updateThemeBtn();
}

function toggleTheme() {
  applyTheme(currentTheme === 'light' ? 'dark' : 'light');
}

function updateThemeBtn() {
  const isDark = currentTheme === 'dark';
  // currentLang viene de i18n.js (se carga después)
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'es';
  const icon  = isDark ? '☀️' : '🌙';
  const label = isDark
    ? (lang === 'es' ? 'Claro'  : 'Light')
    : (lang === 'es' ? 'Oscuro' : 'Dark');

  document.querySelectorAll('#theme-toggle, #theme-toggle-m').forEach(btn => {
    btn.innerHTML = `${icon} <span>${label}</span>`;
  });
}

// Aplicar tema guardado al cargar
applyTheme(currentTheme);
