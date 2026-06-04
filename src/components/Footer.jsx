import { company } from '../data.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="navbar__logo">KR</span>
          <span>{company.name}</span>
        </div>
        <p className="footer__tagline">{t.footer.tagline}</p>
        <p className="footer__copy">
          © {new Date().getFullYear()} {company.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
