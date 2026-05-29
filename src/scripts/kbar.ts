/* ⌘K command palette — fake-terminal navigation */

interface Cmd {
  id: string;
  name: string;
  hint?: string;
  run: () => void;
}

function buildCommands(): Cmd[] {
  const go = (sel: string) => () => {
    document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeKbar();
  };
  const open = (url: string) => () => window.open(url, '_blank', 'noopener');
  const theme = (t: string) => () => {
    document.documentElement.dataset.theme = t;
    localStorage.setItem('arun.theme', t);
    closeKbar();
  };
  return [
    { id: 'home',       name: 'cd ~ · go home',                       hint: 'top',         run: go('#hero') },
    { id: 'about',      name: 'cat about.md',                         hint: 'about',       run: go('#about') },
    { id: 'work',       name: 'cd /work · experience',                hint: 'experience',  run: go('#experience') },
    { id: 'projects',   name: 'ls projects/',                         hint: 'projects',    run: go('#projects') },
    { id: 'skills',     name: 'cat skills.json',                      hint: 'skills',      run: go('#skills') },
    { id: 'contact',    name: 'mail arunsuthar98@gmail.com',          hint: 'contact',     run: go('#contact') },
    { id: 'github',     name: 'open github.com/arunsuthar98',         hint: 'external',    run: open('https://github.com/arunsuthar98') },
    { id: 'linkedin',   name: 'open linkedin.com/in/arunsuthar98',    hint: 'external',    run: open('https://www.linkedin.com/in/arunsuthar98/') },
    { id: 'theme-dark', name: 'theme set dark',                       hint: 'theme',       run: theme('dark') },
    { id: 'theme-light',name: 'theme set light',                      hint: 'theme',       run: theme('light') },
    { id: 'theme-term', name: 'theme set terminal',                   hint: 'theme',       run: theme('terminal') },
  ];
}

let root: HTMLDivElement | null = null;
let input: HTMLInputElement | null = null;
let list: HTMLUListElement | null = null;
let cmds: Cmd[] = [];
let filtered: Cmd[] = [];
let selected = 0;

export function mountKbar() {
  cmds = buildCommands();
  root = document.createElement('div');
  root.className = 'kbar';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-label', 'Command palette');
  root.hidden = true;
  root.innerHTML = `
    <div class="kbar-backdrop"></div>
    <div class="kbar-panel">
      <div class="kbar-prompt">
        <span class="kbar-glyph">arun@portfolio:~$</span>
        <input class="kbar-input" type="text" autocomplete="off" spellcheck="false" placeholder="type a command… (try 'work' or 'theme')" />
        <kbd class="kbar-kbd">ESC</kbd>
      </div>
      <ul class="kbar-list" role="listbox"></ul>
      <div class="kbar-foot">
        <span><kbd>↑↓</kbd> nav</span>
        <span><kbd>↵</kbd> run</span>
        <span><kbd>⌘K</kbd> toggle</span>
      </div>
    </div>
  `;
  document.body.appendChild(root);
  input = root.querySelector('.kbar-input');
  list = root.querySelector('.kbar-list');

  root.querySelector('.kbar-backdrop')?.addEventListener('click', closeKbar);
  input?.addEventListener('input', () => render());
  input?.addEventListener('keydown', onKey);

  document.addEventListener('keydown', (e) => {
    const isMeta = e.metaKey || e.ctrlKey;
    if (isMeta && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      toggleKbar();
    } else if (e.key === 'Escape') {
      closeKbar();
    } else if (e.key === '/' && document.activeElement === document.body) {
      e.preventDefault();
      openKbar();
    }
  });

  document.querySelectorAll<HTMLElement>('[data-kbar-open]').forEach((b) => {
    b.addEventListener('click', openKbar);
  });
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    selected = (selected + 1) % Math.max(1, filtered.length);
    render(true);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    selected = (selected - 1 + filtered.length) % Math.max(1, filtered.length);
    render(true);
  } else if (e.key === 'Enter') {
    e.preventDefault();
    filtered[selected]?.run();
  }
}

function render(onlyHighlight = false) {
  if (!list || !input) return;
  if (!onlyHighlight) {
    const q = input.value.trim().toLowerCase();
    filtered = q
      ? cmds.filter((c) => (c.id + ' ' + c.name + ' ' + (c.hint ?? '')).toLowerCase().includes(q))
      : cmds;
    selected = 0;
  }
  list.innerHTML = filtered
    .map(
      (c, i) => `
      <li role="option" data-i="${i}" class="kbar-item${i === selected ? ' on' : ''}">
        <span class="kbar-name">${escape(c.name)}</span>
        ${c.hint ? `<span class="kbar-hint">${escape(c.hint)}</span>` : ''}
      </li>`,
    )
    .join('');
  list.querySelectorAll<HTMLElement>('.kbar-item').forEach((li) => {
    li.addEventListener('mouseenter', () => {
      selected = parseInt(li.dataset.i || '0', 10);
      render(true);
    });
    li.addEventListener('click', () => filtered[selected]?.run());
  });
}

function openKbar() {
  if (!root || !input) return;
  root.hidden = false;
  requestAnimationFrame(() => {
    root!.classList.add('open');
    input!.value = '';
    input!.focus();
    render();
  });
}
function closeKbar() {
  if (!root) return;
  root.classList.remove('open');
  setTimeout(() => {
    if (root) root.hidden = true;
  }, 180);
}
function toggleKbar() {
  if (!root) return;
  if (root.hidden) openKbar();
  else closeKbar();
}

function escape(s: string) {
  return s.replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string
  ));
}
