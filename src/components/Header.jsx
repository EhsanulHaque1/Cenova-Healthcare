import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Catalog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('cenova-theme') === 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    localStorage.setItem('cenova-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-mark" aria-hidden="true">N</span>
          <span className="logo-copy">
            <span className="logo-text">Cenova Healthcare</span>
            <span className="logo-caption">PHYSICAL MEDICINE · REHABILITATION</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="nav-link">{link.label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <a href="mailto:support@cenovahealthcare.com" className="header-contact">
            <span className="contact-dot" />
            <span>Talk to a specialist</span>
          </a>
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            onClick={() => setDarkMode((enabled) => !enabled)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {darkMode
                ? <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
                : <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>}
            </svg>
            <span className="theme-toggle-label">{darkMode ? 'Light mode' : 'Dark mode'}</span>
          </button>
          <button
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <button
        className={`drawer-backdrop ${menuOpen ? 'is-open' : ''}`}
        type="button"
        aria-label="Close navigation menu"
        onClick={() => setMenuOpen(false)}
        tabIndex={menuOpen ? 0 : -1}
      />
      <nav
        id="mobile-navigation"
        className={`mobile-drawer ${menuOpen ? 'is-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="drawer-heading">
          <span>Navigation</span>
          <button type="button" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)}>×</button>
        </div>
        {links.map((link) => (
          <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
            {link.label}
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
        <a className="drawer-cta" href="mailto:support@cenovahealthcare.com" onClick={() => setMenuOpen(false)}>
          Contact our team
        </a>
      </nav>
    </header>
  )
}
