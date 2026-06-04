import { useState } from 'react'
import { founders } from '../data.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function FounderAvatar({ founder }) {
  const [failed, setFailed] = useState(false)

  if (failed || !founder.photo) {
    return <div className="founder__avatar founder__avatar--fallback">{founder.initials}</div>
  }

  return (
    <img
      className="founder__avatar"
      src={founder.photo}
      alt={founder.name}
      onError={() => setFailed(true)}
    />
  )
}

export default function Founders() {
  const { t } = useLanguage()

  return (
    <section id="founders" className="section">
      <div className="container">
        <span className="section__eyebrow">{t.founders.eyebrow}</span>
        <h2 className="section__title">{t.founders.title}</h2>
        <p className="section__intro">{t.founders.intro}</p>

        <div className="founders__grid">
          {founders.map((f, i) => (
            <article key={f.name} className="founder">
              <FounderAvatar founder={f} />
              <h3 className="founder__name">{f.name}</h3>
              <span className="founder__role">{t.founders.roles[i]}</span>
              <p className="founder__bio">{t.founders.bios[i]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
