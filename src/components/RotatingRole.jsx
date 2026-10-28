import React, { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function RotatingRole() {
  const container = useRef(null);
  const [text, setText] = useState(personalInfo.roles[0]);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const roles = personalInfo.roles;
    let roleIndex = 0;
    let length = roles[0].length;
    let deleting = true;
    let visible = false;
    let timer;
    const tick = () => {
      const role = roles[roleIndex];
      length += deleting ? -1 : 1;
      setText(role.slice(0, length));
      let delay = deleting ? 45 : 85;
      if (length === 0) {
        roleIndex = (roleIndex + 1) % roles.length;
        deleting = false;
        delay = 250;
      } else if (length === role.length && !deleting) {
        deleting = true;
        delay = 1800;
      }
      timer = window.setTimeout(tick, delay);
    };
    const sync = () => {
      window.clearTimeout(timer);
      if (preference.matches) {
        roleIndex = 0;
        length = roles[0].length;
        deleting = true;
        setText(roles[0]);
      } else if (visible && !document.hidden) {
        timer = window.setTimeout(tick, 1200);
      }
    };
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); })
      : null;
    if (observer) observer.observe(container.current);
    else { visible = true; sync(); }
    document.addEventListener('visibilitychange', sync);
    preference.addEventListener('change', sync);
    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
      document.removeEventListener('visibilitychange', sync);
      preference.removeEventListener('change', sync);
    };
  }, []);

  return (
    <div ref={container} className="role-pill inline-flex items-center px-3.5 py-1 rounded-lg bg-slate-950 text-[rgb(var(--accent-secondary))] font-mono text-sm sm:text-base font-bold min-h-[38px] shadow-sm">
      <span className="sr-only">{personalInfo.roles.join(', ')}</span>
      <span aria-hidden="true" data-rotating-role>{text}</span>
      <span aria-hidden="true" className="role-cursor inline-block shrink-0 w-[2px] h-5 ml-1 bg-[rgb(var(--accent))]" />
    </div>
  );
}
