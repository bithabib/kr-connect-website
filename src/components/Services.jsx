import { serviceIcons } from '../data.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <span className="section__eyebrow">{t.services.eyebrow}</span>
        <h2 className="section__title">{t.services.title}</h2>
        <p className="section__intro">{t.services.intro}</p>

        <div className="services__grid">
          {t.services.items.map((s, i) => (
            <article key={i} className="service-card">
              <span className="service-card__icon">{serviceIcons[i]}</span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__text">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
