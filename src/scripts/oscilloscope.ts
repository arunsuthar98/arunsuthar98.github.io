/* Live oscilloscope / waveform canvas behind the hero name.
   Lightweight: 60fps when in viewport, paused when offscreen or motion-reduced. */

interface OscParams {
  selector: string;
}

export function mountOscilloscope({ selector }: OscParams) {
  const host = document.querySelector(selector) as HTMLElement | null;
  if (!host) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  host.appendChild(canvas);
  const ctx = canvas.getContext('2d', { alpha: true })!;

  let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);

  const resize = () => {
    const r = host.getBoundingClientRect();
    w = Math.max(320, Math.floor(r.width));
    h = Math.max(220, Math.floor(r.height));
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const ro = new ResizeObserver(resize);
  ro.observe(host);
  resize();

  let playing = !reduce;
  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries[0]?.isIntersecting;
      playing = !!visible && !reduce;
      if (playing) loop();
    },
    { threshold: 0.05 },
  );
  io.observe(host);

  const themeColor = () => {
    const s = getComputedStyle(document.documentElement);
    return s.getPropertyValue('--accent').trim() || '#00ffd1';
  };

  let raf = 0;
  let t = 0;
  const loop = () => {
    if (!playing) return;
    t += 0.016;
    draw();
    raf = requestAnimationFrame(loop);
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    const accent = themeColor();

    // grid
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 1;
    const step = 36;
    for (let x = 0; x <= w; x += step) {
      ctx.beginPath();
      ctx.moveTo(x + 0.5, 0);
      ctx.lineTo(x + 0.5, h);
      ctx.stroke();
    }
    for (let y = 0; y <= h; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(w, y + 0.5);
      ctx.stroke();
    }

    // ghost waveform (slow)
    drawWave(accent, 0.18, 1.4, 0.6, t * 0.4, 0.55);
    // main waveform (fast)
    drawWave(accent, 0.95, 2.2, 1.0, t * 1.2, 0.42);
    // secondary (PRBS-ish digital)
    drawDigital(accent, t);
  };

  function drawWave(
    color: string,
    alpha: number,
    width: number,
    amp: number,
    phase: number,
    centerY: number,
  ) {
    ctx.beginPath();
    const mid = h * centerY;
    for (let x = 0; x <= w; x += 2) {
      const k = x / w;
      const y =
        mid +
        Math.sin(k * 14 + phase) * 24 * amp +
        Math.sin(k * 41 + phase * 1.8) * 9 * amp +
        Math.sin(k * 3 + phase * 0.4) * 12 * amp;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.lineWidth = width;
    ctx.strokeStyle = hexToRgba(color, alpha);
    ctx.shadowColor = color;
    ctx.shadowBlur = 12;
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  function drawDigital(color: string, time: number) {
    const baseY = h * 0.82;
    const high = baseY - 28;
    const segs = 32;
    const segW = w / segs;
    const seed = Math.floor(time * 2);
    ctx.beginPath();
    ctx.moveTo(0, baseY);
    let prev = baseY;
    for (let i = 0; i < segs; i++) {
      const bit = ((seed * 1103515245 + i * 12345) >> 8) & 1;
      const y = bit ? high : baseY;
      ctx.lineTo(i * segW, prev);
      ctx.lineTo(i * segW, y);
      prev = y;
    }
    ctx.lineTo(w, prev);
    ctx.lineWidth = 1.2;
    ctx.strokeStyle = hexToRgba(color, 0.35);
    ctx.stroke();
  }

  function hexToRgba(c: string, a: number) {
    c = c.trim();
    if (c.startsWith('#')) {
      const v = c.slice(1);
      const full = v.length === 3 ? v.split('').map((x) => x + x).join('') : v;
      const n = parseInt(full, 16);
      const r = (n >> 16) & 255;
      const g = (n >> 8) & 255;
      const b = n & 255;
      return `rgba(${r},${g},${b},${a})`;
    }
    return c;
  }

  draw();
  if (playing) loop();

  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    io.disconnect();
    canvas.remove();
  };
}
