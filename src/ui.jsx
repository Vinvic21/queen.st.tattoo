import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { biz } from './data.js';

export const waLink = (msg = biz.message) => `https://wa.me/${biz.whatsapp}?text=${encodeURIComponent(msg)}`;
export const dirLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(biz.mapQuery)}`;

const Svg = ({ children, ...p }) => (
  <svg viewBox="0 0 24 24" width="1.1em" height="1.1em" fill="currentColor" aria-hidden="true" focusable="false" {...p}>{children}</svg>
);
export const WhatsAppIcon = () => (
  <Svg><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41" /></Svg>
);
export const InstagramIcon = () => (
  <Svg fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" /></Svg>
);
export const FacebookIcon = () => (
  <Svg><path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7h1.6V3.9c-.3 0-1.3-.2-2.4-.2-2.5 0-4.1 1.5-4.1 4.2v2.6H7.600v3.3h2.800V22z" /></Svg>
);
export const PinIcon = () => (<Svg><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7m0 9.500a2.500 2.500 0 1 1 0-5 2.500 2.500 0 0 1 0 5" /></Svg>);
export const PhoneIcon = () => (<Svg><path d="M6.600 10.800a15 15 0 0 0 6.600 6.600l2.200-2.200a1 1 0 0 1 1-.25 11.400 11.400 0 0 0 3.600.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.500a1 1 0 0 1 1 1c0 1.250.2 2.450.57 3.570a1 1 0 0 1-.25 1z" /></Svg>);
export const StarIcon = () => (<Svg><path d="m12 2.500 2.900 6 6.600.9-4.800 4.600 1.200 6.500L12 17.300l-5.900 3.200 1.200-6.500L2.500 9.400l6.600-.9z" /></Svg>);
export const MenuIcon = ({ open }) => (
  <Svg fill="none" stroke="currentColor" strokeWidth="2.200" strokeLinecap="round">{open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</Svg>
);
export const Chevron = ({ dir }) => (
  <Svg fill="none" stroke="currentColor" strokeWidth="2.400" strokeLinecap="round" strokeLinejoin="round"><path d={dir === 'l' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} /></Svg>
);

export const WaButton = ({ msg, label = 'Book on WhatsApp', className = '' }) => (
  <a className={`btn wa ${className}`} href={waLink(msg)} target="_blank" rel="noopener noreferrer">
    <WhatsAppIcon /> {label}
  </a>
);

export function Socials() {
  const s = biz.social;
  return (
    <ul className="socials">
      <li><a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Message us on WhatsApp"><WhatsAppIcon /></a></li>
      {s.instagram && <li><a href={s.instagram} target="_blank" rel="noopener noreferrer" aria-label="Queen St Tattoo on Instagram"><InstagramIcon /></a></li>}
      {s.facebook && <li><a href={s.facebook} target="_blank" rel="noopener noreferrer" aria-label="Queen St Tattoo on Facebook"><FacebookIcon /></a></li>}
    </ul>
  );
}

const fmt = (h) => `${h % 12 || 12} ${h < 12 ? 'am' : 'pm'}`;
export const fmtHour = fmt;
const names = biz.hours.map((h) => h.day);

function calcStatus() {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', { timeZone: biz.tz, weekday: 'long', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' })
      .formatToParts(new Date()).map((x) => [x.type, x.value])
  );
  const mins = Number(p.hour) * 60 + Number(p.minute);
  const i = names.indexOf(p.weekday);
  const h = biz.hours[i];
  const open = mins >= h.open * 60 && mins < h.close * 60;
  let label;
  if (open) label = `Open now, until ${fmt(h.close)}`;
  else if (mins < h.open * 60) label = `Closed, opens ${fmt(h.open)} today`;
  else label = `Closed, opens ${fmt(biz.hours[(i + 1) % 7].open)} tomorrow`;
  return { open, label, today: p.weekday };
}
export function useStatus() {
  const [s, setS] = useState(calcStatus);
  useEffect(() => { const t = setInterval(() => setS(calcStatus()), 30000); return () => clearInterval(t); }, []);
  return s;
}
export const StatusLine = () => {
  const s = useStatus();
  return <span className="status"><span className={`dot ${s.open ? 'on' : ''}`} aria-hidden="true" />{s.label}</span>;
};

export function usePage(title, desc) {
  useEffect(() => {
    document.title = title;
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m); }
    m.content = desc;
  }, [title, desc]);
}

export function Reveal({ children, as: T = 'div', className = '', delay = 0 }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window) || (r.top < window.innerHeight && r.bottom > 0)) { setOn(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <T ref={ref} className={`reveal ${on ? 'in' : ''} ${className}`} style={{ '--d': `${delay}ms` }}>{children}</T>;
}

export function Fab() {
  const key = 'wa-welcome-dismissed';
  const [gone, setGone] = useState(() => { try { return sessionStorage.getItem(key) === '1'; } catch { return false; } });
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (gone) return;
    const t = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(t);
  }, [gone]);
  const dismiss = () => { setShow(false); setGone(true); try { sessionStorage.setItem(key, '1'); } catch { /* ignore */ } };
  return (
    <div className="fab-wrap">
      {show && (
        <div className="bubble" role="region" aria-label="Chat on WhatsApp">
          <button className="bubble-x" onClick={dismiss} aria-label="Dismiss message"><MenuIcon open /></button>
          <p><strong>Hi, welcome to Queen St Tattoo.</strong> Got an idea? Tell us on WhatsApp.</p>
          <a className="btn wa" href={waLink()} target="_blank" rel="noopener noreferrer" onClick={dismiss}>Start chat</a>
        </div>
      )}
      <a className="fab" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Book on WhatsApp">
        <WhatsAppIcon /><span className="fab-label">Book on WhatsApp</span>
      </a>
    </div>
  );
}

export const BookingBanner = () => (
  <section className="banner">
    <div className="wrap banner-in">
      <div>
        <h2>Ready for your next tattoo?</h2>
        <p>Send us your idea on WhatsApp. Booking happens in the chat.</p>
      </div>
      <WaButton />
    </div>
  </section>
);
