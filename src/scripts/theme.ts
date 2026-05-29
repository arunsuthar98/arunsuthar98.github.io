/* Theme switcher — persists to localStorage, applies on root */

const KEY = 'arun.theme';
const THEMES = ['dark', 'light', 'terminal'] as const;
type Theme = typeof THEMES[number];

export function mountTheme() {
  const saved = (localStorage.getItem(KEY) as Theme) || 'dark';
  apply(saved);
  document.querySelectorAll<HTMLButtonElement>('[data-theme-set]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const t = btn.dataset.themeSet as Theme;
      apply(t);
    });
  });
  document.querySelectorAll<HTMLButtonElement>('[data-theme-cycle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cur = (document.documentElement.dataset.theme as Theme) || 'dark';
      const next = THEMES[(THEMES.indexOf(cur) + 1) % THEMES.length]!;
      apply(next);
      btn.querySelector('[data-theme-label]')!.textContent = next;
    });
  });
}

function apply(t: Theme) {
  document.documentElement.dataset.theme = t;
  localStorage.setItem(KEY, t);
  document.querySelectorAll<HTMLElement>('[data-theme-label]').forEach((el) => {
    el.textContent = t;
  });
  document.querySelectorAll<HTMLButtonElement>('[data-theme-set]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.themeSet === t));
  });
}
