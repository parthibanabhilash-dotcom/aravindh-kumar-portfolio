import { useEffect } from 'react';

// One observer, one entrance per element, and no scroll-driven React updates.
export default function useEntranceMotion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window)) return;
    const targets = [...document.querySelectorAll(
      'main > section:first-child > div > .grid > div, main > section[id] > div > div:first-child, main > section[id] .grid > .group'
    )];
    let observer;
    const stop = () => {
      observer?.disconnect();
      targets.forEach((element) => element.classList.remove('motion-enter'));
    };
    const start = () => {
      stop();
      if (preference.matches) return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          target.classList.add('motion-enter');
          observer.unobserve(target);
        });
      }, { threshold: 0.08 });
      targets.forEach((element, index) => {
        element.style.setProperty('--motion-delay', `${(index % 3) * 60}ms`);
        observer.observe(element);
      });
    };
    start();
    preference.addEventListener('change', start);
    return () => {
      stop();
      preference.removeEventListener('change', start);
    };
  }, []);
}
