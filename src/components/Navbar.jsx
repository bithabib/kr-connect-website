import { useState } from 'react'
import { Link } from 'react-router-dom'
import { company } from '../data.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t, lang, setLang, languages } = useLanguage()

  // Section anchors point at the homepage so they work from any page
  // (e.g. clicking "Services" from a blog post returns home and scrolls).
  const sectionLinks = [
    { href: '/#about', label: t.nav.about },
    { href: '/#services', label: t.nav.services },
    { href: '/#products', label: t.nav.products },
    { href: '/#founders', label: t.nav.founders },
    { href: '/#contact', label: t.nav.contact },
  ]

  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" onClick={close}>
          <span className="navbar__logo">KR</span>
          <span className="navbar__name">{company.name}</span>
        </Link>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${open ? 'is-open' : ''}`}>
          {sectionLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <Link to="/blog" onClick={close}>
            {t.nav.blog}
          </Link>

          <label className="lang-switcher" aria-label="Select language">
            <span className="lang-switcher__globe" aria-hidden="true">🌐</span>
            <select value={lang} onChange={(e) => setLang(e.target.value)}>
              {languages.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
          </label>

          <a href="/#contact" className="btn btn--small" onClick={close}>
            {t.nav.cta}
          </a>
        </nav>
      </div>
    </header>
  )
}
