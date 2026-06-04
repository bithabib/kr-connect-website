import { useLanguage } from '../i18n/LanguageContext.jsx'

// Reuse a few service icons for the hero highlight card.
const cardIcons = ['🎓', '🛂', '💻']

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">{t.hero.badge}</span>
          <h1 className="hero__title">{t.hero.title}</h1>
          <p className="hero__subtitle">{t.hero.subtitle}</p>
          <div className="hero__actions">
            <a href="#services" className="btn">
              {t.hero.exploreBtn}
            </a>
            <a href="#contact" className="btn btn--ghost">
              {t.hero.talkBtn}
            </a>
          </div>
        </div>

        <div className="hero__card">
          {t.hero.cards.map((card, i) => (
            <div className="hero__card-row" key={i}>
              <span className="hero__card-emoji">{cardIcons[i]}</span>
              <div>
                <strong>{card.title}</strong>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
