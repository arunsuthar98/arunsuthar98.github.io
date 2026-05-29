/* IntersectionObserver-powered reveal-on-scroll */

export function mountReveal() {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  if (reduce) {
    els.forEach((e) => e.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );
  els.forEach((e) => io.observe(e));
}
