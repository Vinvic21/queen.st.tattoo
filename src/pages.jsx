import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { biz, featured, filters, gallery, photos, reviews, steps } from './data.js';
import { Chevron, PhoneIcon, PinIcon, Reveal, Socials, StarIcon, StatusLine, WaButton, dirLink, fmtHour, usePage, useStatus, waLink } from './ui.jsx';

const askMsg = (it) => `Hi Queen St Tattoo! I'd like something similar to "${it.title}".\n\nPlacement: \nSize: \nPreferred day: `;
const Photo = ({ p, ...r }) => <img src={p.src} width={p.w} height={p.h} alt={p.alt} loading="lazy" decoding="async" {...r} />;

export function Home() {
  usePage('Queen St Tattoo | Tattoo shop in Honolulu', 'Queen St Tattoo at 980 Queen St, Honolulu. Custom or classic tattoos, rated 4.9 on Google. Book on WhatsApp.');
  const picks = featured.map((id) => gallery.find((g) => g.id === id));
  return (
    <>
      <section className="hero">
        <div className="wrap hero-in">
          <div>
            <p className="sign" aria-hidden="true">TATTOO</p>
            <h1 className="h-in" style={{ '--i': 1 }}>{biz.tagline}</h1>
            <p className="lead h-in" style={{ '--i': 2 }}>{biz.intro}</p>
            <div className="cta h-in" style={{ '--i': 3 }}>
              <WaButton />
              <Link className="btn ghost" to="/work">See the work</Link>
            </div>
          </div>
          <figure className="hero-ph h-in" style={{ '--i': 4 }}>
            <img src={photos.storefront.src} width={photos.storefront.w} height={photos.storefront.h} alt={photos.storefront.alt} fetchPriority="high" />
          </figure>
        </div>
      </section>

      <div className="facts">
        <div className="wrap facts-in">
          <span><StarIcon /> <strong>{biz.rating}</strong> on Google ({biz.reviewCount} reviews)</span>
          <StatusLine />
          <a href={dirLink} target="_blank" rel="noopener noreferrer"><PinIcon /> {biz.street}, Honolulu</a>
        </div>
      </div>

      <section className="sec wrap">
        <Reveal><h2>Recent work</h2></Reveal>
        <div className="picks">
          {picks.map((it, i) => (
            <Reveal as="figure" key={it.id} delay={i * 70}>
              <Link to="/work"><Photo p={it} /></Link>
              <figcaption>{it.title}</figcaption>
            </Reveal>
          ))}
        </div>
        <Reveal><p><Link className="lnk" to="/work">See all the work</Link></p></Reveal>
      </section>

      <section className="sec wrap">
        <Reveal><h2>How booking works</h2></Reveal>
        <ol className="steps">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.t} delay={i * 90}><h3>{s.t}</h3><p>{s.d}</p></Reveal>
          ))}
        </ol>
      </section>

      <section className="sec wrap">
        <Reveal><h2>What people say</h2></Reveal>
        <div className="quotes">
          {reviews.map((r, i) => (
            <Reveal as="blockquote" key={r.name} delay={i * 80}>
              <p>{r.text}</p>
              <footer>{r.name}, {r.note} on Google</footer>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function Lightbox({ items, index, setIndex, onClose }) {
  const it = items[index];
  const box = useRef(null);
  const closeBtn = useRef(null);
  const opener = useRef(document.activeElement);
  const go = (n) => setIndex((index + n + items.length) % items.length);
  useEffect(() => {
    const back = opener.current;
    document.body.style.overflow = 'hidden';
    closeBtn.current?.focus();
    return () => { document.body.style.overflow = ''; back?.focus?.(); };
  }, []);
  useEffect(() => {
    const k = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'Tab') {
        const f = [...box.current.querySelectorAll('button, a[href]')];
        const a = f[0], z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
      }
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  });
  return (
    <div className="lb" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="lb-box" ref={box} role="dialog" aria-modal="true" aria-label={it.title}>
        <img src={it.src} alt={it.alt} />
        <div className="lb-bar">
          <p><strong>{it.title}</strong> ({index + 1} of {items.length})</p>
          <WaButton msg={askMsg(it)} label="Ask for something similar" />
        </div>
        <button className="lb-btn lb-prev" onClick={() => go(-1)} aria-label="Previous photo"><Chevron dir="l" /></button>
        <button className="lb-btn lb-next" onClick={() => go(1)} aria-label="Next photo"><Chevron dir="r" /></button>
        <button className="lb-btn lb-x" ref={closeBtn} onClick={onClose} aria-label="Close photo viewer">Close</button>
      </div>
    </div>
  );
}

export function Work() {
  usePage('Work | Queen St Tattoo', 'Tattoos from Queen St Tattoo in Honolulu. Ask for something similar on WhatsApp.');
  const [f, setF] = useState('All');
  const [open, setOpen] = useState(null);
  const items = f === 'All' ? gallery : gallery.filter((g) => g.tag === f);
  return (
    <>
      <section className="pagehead wrap">
        <h1>Work</h1>
        <p className="lead">Pick one you like and ask for something similar. It opens a WhatsApp chat with that piece named.</p>
        <div className="filters" role="group" aria-label="Filter work">
          {filters.map((t) => <button key={t} aria-pressed={f === t} onClick={() => setF(t)}>{t}</button>)}
        </div>
      </section>
      <section className="wrap sec-s">
        <div className="masonry">
          {items.map((it, i) => (
            <Reveal as="figure" className="m-item" key={it.id}>
              <button className="m-img" onClick={() => setOpen(i)} aria-label={`View ${it.title} larger`}><Photo p={it} /></button>
              <figcaption>{it.title}</figcaption>
              <WaButton msg={askMsg(it)} label="Ask for something similar" className="sm" />
            </Reveal>
          ))}
        </div>
      </section>
      {open !== null && <Lightbox items={items} index={open} setIndex={setOpen} onClose={() => setOpen(null)} />}
    </>
  );
}

export function Visit() {
  usePage('Visit | Queen St Tattoo', 'Find Queen St Tattoo at 980 Queen St, Honolulu. Open daily 12 to 8 pm.');
  const { today } = useStatus();
  return (
    <>
      <section className="pagehead wrap">
        <h1>Visit the shop</h1>
        <p className="lead"><StatusLine /></p>
      </section>
      <section className="wrap visit">
        <div>
          <address>
            {biz.street}<br />{biz.city}<br /><span className="muted">Plus code {biz.plusCode}</span>
          </address>
          <p className="row">
            <a className="btn dark" href={dirLink} target="_blank" rel="noopener noreferrer"><PinIcon /> Get directions</a>
            <a className="btn ghost-d" href={`tel:${biz.tel}`}><PhoneIcon /> {biz.phone}</a>
          </p>
          <h2>Hours</h2>
          <table className="hours">
            <tbody>
              {biz.hours.map((h) => (
                <tr key={h.day} className={h.day === today ? 'today' : ''} aria-current={h.day === today ? 'date' : undefined}>
                  <th scope="row">{h.day}{h.day === today && <span className="tag"> Today</span>}</th>
                  <td>{fmtHour(h.open)} to {fmtHour(h.close)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="muted">Hours are Honolulu time.</p>
          <Socials />
        </div>
        <figure><Photo p={photos.storefront} /><figcaption>The storefront on Queen Street.</figcaption></figure>
      </section>
      <section className="wrap sec-s">
        <iframe className="map" title="Map showing Queen St Tattoo, 980 Queen St, Honolulu" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${encodeURIComponent(biz.mapQuery)}&output=embed`} />
      </section>
      <section className="wrap sec-s two">
        <figure><Photo p={photos.mural} /><figcaption>The mural outside the shop.</figcaption></figure>
        <figure><Photo p={photos.collage} /><figcaption>Inside the shop, and some of the tattoos.</figcaption></figure>
      </section>
    </>
  );
}

const services = ['New tattoo', 'Cover-up or rework', 'Lettering', 'Not sure yet'];
const sizes = ['Small (palm or less)', 'Medium (hand sized)', 'Large (forearm or bigger)', 'Not sure yet'];

export function Book() {
  usePage('Book | Queen St Tattoo', 'Book a tattoo at Queen St Tattoo on WhatsApp. Fill in the form and send your message.');
  const [v, setV] = useState({ name: '', service: services[0], idea: '', place: '', size: '', day: '', first: false });
  const set = (k) => (e) => setV({ ...v, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  const msg = `Hi Queen St Tattoo! ${v.name ? `I'm ${v.name}. ` : ''}I'd like to book a tattoo.\n\nType: ${v.service}\nIdea: ${v.idea}\nPlacement: ${v.place}\nSize: ${v.size}\nPreferred day: ${v.day}${v.first ? '\n\nThis would be my first tattoo.' : ''}\n\nThanks!`;
  return (
    <>
      <section className="pagehead wrap">
        <h1>Book on WhatsApp</h1>
        <p className="lead">Fill in what you know. Blanks are fine, we can work them out in the chat.</p>
      </section>
      <section className="wrap book">
        <div className="form">
          <label>Your name<input value={v.name} onChange={set('name')} autoComplete="name" /></label>
          <label>What are you after?<select value={v.service} onChange={set('service')}>{services.map((s) => <option key={s}>{s}</option>)}</select></label>
          <label>Your idea<textarea rows="3" value={v.idea} onChange={set('idea')} placeholder="Describe it, or say which piece in the Work page you like" /></label>
          <label>Placement or details<input value={v.place} onChange={set('place')} placeholder="For example: left forearm" /></label>
          <label>Size<select value={v.size} onChange={set('size')}><option value="">Choose a size</option>{sizes.map((s) => <option key={s}>{s}</option>)}</select></label>
          <label>Preferred day<input value={v.day} onChange={set('day')} placeholder="For example: Saturday afternoon" /></label>
          <label className="check"><input type="checkbox" checked={v.first} onChange={set('first')} /> This is my first tattoo</label>
        </div>
        <div className="preview">
          <h2>Your message</h2>
          <div className="chat" aria-live="polite"><div className="msg">{msg}</div></div>
          <a className="btn wa big" href={waLink(msg)} target="_blank" rel="noopener noreferrer">Send on WhatsApp</a>
          <p className="muted">This opens WhatsApp with the message ready. Nothing is sent until you press send there.</p>
        </div>
      </section>
    </>
  );
}
