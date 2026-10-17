import { useEffect, useLayoutEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { biz } from './data.js';
import { BookingBanner, Fab, MenuIcon, Socials, WaButton } from './ui.jsx';
import { Book, Home, Visit, Work } from './pages.jsx';

const links = [['/', 'Home'], ['/work', 'Work'], ['/visit', 'Visit'], ['/book', 'Book']];

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const k = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open]);
  return (
    <header className="site-head">
      <div className="wrap head-in">
        <Link to="/" className="logo">{biz.name}</Link>
        <nav className={`nav ${open ? 'open' : ''}`} id="nav" aria-label="Main">
          {links.map(([to, t]) => <NavLink key={to} to={to} end={to === '/'}>{t}</NavLink>)}
        </nav>
        <WaButton className="head-wa" label="Book on WhatsApp" />
        <button className="burger" aria-expanded={open} aria-controls="nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          <MenuIcon open={open} />
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <div>
          <p className="logo">{biz.name}</p>
          <p>{biz.street}, {biz.city}</p>
          <p><a href={`tel:${biz.tel}`}>{biz.phone}</a></p>
        </div>
        <Socials />
      </div>
    </footer>
  );
}

export default function App() {
  const { pathname } = useLocation();
  useLayoutEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main" key={pathname} className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/book" element={<Book />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <BookingBanner />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
