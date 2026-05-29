/* Theme switcher — dark/light toggle */

const KEY = 'arun.theme';
const THEMES = ['dark', 'light'] as const;
type Theme = typeof THEMES[number];

export function mountTheme() {
  const saved = (localStorage.getItem(KEY) as Theme) || 'dark';
  apply(saved);
  document.querySelectorAll<HTMLButtonElement>('[data-theme-cycle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cur = (document.documentElement.dataset.theme as Theme) || 'dark';
      const next = cur === 'dark' ? 'light' : 'dark';
      apply(next);
    });
  });
}

function apply(t: Theme) {
  document.documentElement.dataset.theme = t;
  localStorage.setItem(KEY, t);
  const icon = t === 'dark' ? '🌙' : '☀️';
  document.querySelectorAll<HTMLElement>('[data-theme-label]').forEach((el) => {
    el.textContent = icon;
  });
}
