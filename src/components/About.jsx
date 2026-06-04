import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section">
      <div className="container">
        <span className="section__eyebrow">{t.about.eyebrow}</span>
        <h2 className="section__title">{t.about.title}</h2>
        <div className="about__grid">
          <p className="about__lead">{t.about.lead}</p>
          <p className="about__text">{t.about.text}</p>
        </div>

        <div className="about__stats">
          {t.about.stats.map((s, i) => (
            <div className="about__stat" key={i}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
