/* Decrypt-on-load text effect.
   Apply to elements with [data-decrypt]. Original text is preserved on load. */

const GLYPHS = '!<>-_\\/[]{}—=+*^?#________ABCDEF0123456789';

export function mountDecrypt() {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll<HTMLElement>('[data-decrypt]');
  targets.forEach((el, idx) => {
    const text = el.textContent ?? '';
    if (reduce || !text.trim()) return;
    const delay = parseInt(el.dataset.decryptDelay ?? `${idx * 120}`, 10);
    const duration = parseInt(el.dataset.decryptDuration ?? '900', 10);
    scramble(el, text, delay, duration);
  });
}

function scramble(el: HTMLElement, finalText: string, delay: number, duration: number) {
  const start = performance.now() + delay;
  const len = finalText.length;
  const queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
  for (let i = 0; i < len; i++) {
    queue.push({
      from: '',
      to: finalText[i] ?? '',
      start: Math.floor(Math.random() * (duration * 0.4)),
      end: Math.floor(duration * 0.4 + Math.random() * duration * 0.6),
    });
  }
  el.textContent = ' '.repeat(len);
  function frame(now: number) {
    const elapsed = now - start;
    if (elapsed < 0) {
      requestAnimationFrame(frame);
      return;
    }
    let done = 0;
    let out = '';
    for (let i = 0; i < queue.length; i++) {
      const q = queue[i]!;
      if (elapsed >= q.end) {
        done++;
        out += q.to;
      } else if (elapsed >= q.start) {
        if (!q.char || Math.random() < 0.28) {
          q.char = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
        out += q.char;
      } else {
        out += q.to === ' ' ? ' ' : ' ';
      }
    }
    el.textContent = out;
    if (done < queue.length) requestAnimationFrame(frame);
    else el.textContent = finalText;
  }
  requestAnimationFrame(frame);
}
