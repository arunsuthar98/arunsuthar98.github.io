/* Custom cursor + magnetic hover for [data-magnet] elements */

export function mountCursor() {
  if (matchMedia('(hover: none)').matches) return;

  const core = document.createElement('div');
  const ring = document.createElement('div');
  core.className = 'cursor-core';
  ring.className = 'cursor-ring';
  document.body.append(core, ring);

  let mx = -100, my = -100;
  let cx = mx, cy = my;
  let rx = mx, ry = my;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  }, { passive: true });

  const loop = () => {
    cx += (mx - cx) * 0.6;
    cy += (my - cy) * 0.6;
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    core.style.transform = `translate3d(${cx - 3}px, ${cy - 3}px, 0)`;
    ring.style.transform = `translate3d(${rx - 17}px, ${ry - 17}px, 0)`;
    requestAnimationFrame(loop);
  };
  loop();

  const hoverables = 'a, button, [data-magnet], [data-hover]';
  document.addEventListener('mouseover', (e) => {
    const t = (e.target as HTMLElement).closest(hoverables);
    if (t) ring.classList.add('is-hover');
  });
  document.addEventListener('mouseout', (e) => {
    const t = (e.target as HTMLElement).closest(hoverables);
    if (t) ring.classList.remove('is-hover');
  });
}

export function mountMagnet() {
  if (matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches) return;
  const els = document.querySelectorAll<HTMLElement>('[data-magnet]');
  els.forEach((el) => {
    const strength = parseFloat(el.dataset.magnet || '0.3');
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * strength;
      const dy = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}
