/* Main entry — wires all interactions */

import { mountTheme } from './theme';
import { mountReveal } from './reveal';
import { mountCursor, mountMagnet } from './cursor';

function init() {
  mountTheme();
  mountReveal();
  mountCursor();
  mountMagnet();
  mountParticles();
  mountTyping();
  mountCardSpotlight();
  mountCountUp();
  mountTilt();

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

/* ── Floating Particles ── */
function mountParticles() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const canvas = document.getElementById('particles-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext('2d')!;
  let w = 0, h = 0;
  const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];
  const count = Math.min(60, Math.floor(window.innerWidth / 20));

  function resize() {
    w = canvas!.width = window.innerWidth;
    h = canvas!.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      o: Math.random() * 0.5 + 0.2,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#00d4aa';
    
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = accent;
      ctx.globalAlpha = p.o;
      ctx.fill();
    }

    // Draw lines between nearby particles
    ctx.globalAlpha = 0.06;
    ctx.strokeStyle = accent;
    ctx.lineWidth = 0.5;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = dx * dx + dy * dy;
        if (dist < 15000) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
}

/* ── Typing Effect ── */
function mountTyping() {
  const el = document.querySelector<HTMLElement>('[data-typing]');
  if (!el) return;
  const words = (el.dataset.typing || '').split('|');
  if (!words.length) return;
  let wordIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const word = words[wordIdx];
    if (!deleting) {
      charIdx++;
      el!.textContent = word.slice(0, charIdx);
      if (charIdx === word.length) {
        setTimeout(() => { deleting = true; tick(); }, 2000);
        return;
      }
      setTimeout(tick, 80);
    } else {
      charIdx--;
      el!.textContent = word.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 40);
    }
  }
  tick();
}

/* ── Spotlight on cards ── */
function mountCardSpotlight() {
  document.querySelectorAll<HTMLElement>('[data-spotlight]').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
  // Also for exp-cards
  document.querySelectorAll<HTMLElement>('.exp-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

/* ── Count Up Animation ── */
function mountCountUp() {
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target as HTMLElement;
      const target = el.dataset.count || el.textContent || '';
      const numMatch = target.match(/^(\d+)/);
      if (!numMatch) return;
      const num = parseInt(numMatch[1]);
      const suffix = target.replace(/^\d+/, '');
      let current = 0;
      const step = Math.max(1, Math.floor(num / 30));
      const timer = setInterval(() => {
        current += step;
        if (current >= num) { current = num; clearInterval(timer); }
        el.textContent = current + suffix;
      }, 40);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  els.forEach((el) => io.observe(el));
}

/* ── 3D Tilt on hover ── */
function mountTilt() {
  if (matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale(1.02)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      el.style.transition = 'transform 0.4s ease';
      setTimeout(() => { el.style.transition = ''; }, 400);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

