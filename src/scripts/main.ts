/* Main entry — wires all interactions */

import { mountTheme } from './theme';
import { mountReveal } from './reveal';
import { mountCursor, mountMagnet } from './cursor';
import { mountDecrypt } from './decrypt';
import { mountKbar } from './kbar';
import { mountOscilloscope } from './oscilloscope';
import './boot';

function init() {
  mountTheme();
  mountReveal();
  mountCursor();
  mountMagnet();
  mountKbar();
  mountOscilloscope({ selector: '#osc-host' });

  // run decrypt after boot completes (or immediately if no boot)
  if (sessionStorage.getItem('arun.boot.seen') === '1') {
    mountDecrypt();
  } else {
    window.addEventListener('boot:done', () => mountDecrypt(), { once: true });
  }

  // nav shadow on scroll
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // year in footer
  document.querySelectorAll<HTMLElement>('[data-year]').forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
