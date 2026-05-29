/* Fake POST/boot intro — runs once, then dismisses */

const STORAGE_KEY = 'arun.boot.seen';

interface BootLine {
  text: string;
  delay: number;
  status?: 'OK' | 'WARN' | 'INIT';
}

const lines: BootLine[] = [
  { text: 'ARUN-OS v2.7.1 (TriCore TC397) boot init', delay: 80 },
  { text: 'cpu0: TriCore 1.6.2 @ 300MHz · cpu1: TriCore @ 200MHz', delay: 120, status: 'OK' },
  { text: 'mem: 6 MB LMU · 184 KB DSPR · ECC enabled', delay: 90, status: 'OK' },
  { text: 'eHSM: secure boot chain verified · keys unsealed', delay: 140, status: 'OK' },
  { text: 'eth0: 1000BASE-T1 link up · master · 1Gbps full-duplex', delay: 110, status: 'OK' },
  { text: 'ptp: gPTP sync acquired · offset -27ns', delay: 100, status: 'OK' },
  { text: 'lwip: stack 2.2.0 · zero-copy RX path', delay: 90, status: 'OK' },
  { text: 'qnx: io-sock instance bound · 4 worker threads', delay: 95, status: 'OK' },
  { text: 'fs: portfolio.elf loaded · entry 0x80000000', delay: 80, status: 'INIT' },
  { text: 'jump → user_main(arunsuthar98)', delay: 140 },
];

function mountBoot() {
  if (sessionStorage.getItem(STORAGE_KEY) === '1') return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const overlay = document.createElement('div');
  overlay.className = 'boot-overlay';
  overlay.setAttribute('role', 'status');
  overlay.setAttribute('aria-live', 'polite');
  overlay.innerHTML = `
    <div class="boot-frame">
      <div class="boot-header">
        <span class="boot-dot r"></span>
        <span class="boot-dot y"></span>
        <span class="boot-dot g"></span>
        <span class="boot-title">tty/arun — POST</span>
        <button class="boot-skip" type="button">skip ⏭</button>
      </div>
      <div class="boot-body"></div>
    </div>
  `;
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  const body = overlay.querySelector('.boot-body') as HTMLElement;
  const skip = overlay.querySelector('.boot-skip') as HTMLButtonElement;
  let killed = false;

  const dismiss = () => {
    if (killed) return;
    killed = true;
    sessionStorage.setItem(STORAGE_KEY, '1');
    overlay.classList.add('done');
    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = '';
      window.dispatchEvent(new CustomEvent('boot:done'));
    }, 420);
  };

  skip.addEventListener('click', dismiss);

  let i = 0;
  const tick = () => {
    if (killed) return;
    if (i >= lines.length) {
      setTimeout(dismiss, 380);
      return;
    }
    const line = lines[i++];
    const row = document.createElement('div');
    row.className = 'boot-line';
    const stamp = `[${(performance.now() / 1000).toFixed(4).padStart(8, '0')}]`;
    const status = line.status
      ? `<span class="boot-status s-${line.status.toLowerCase()}">[ ${line.status} ]</span>`
      : '';
    row.innerHTML = `<span class="boot-time">${stamp}</span> ${line.text} ${status}`;
    body.appendChild(row);
    body.scrollTop = body.scrollHeight;
    setTimeout(tick, line.delay);
  };
  tick();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountBoot);
} else {
  mountBoot();
}
