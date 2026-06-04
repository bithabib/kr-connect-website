import { company } from '../data.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Contact() {
  const { t } = useLanguage()

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name')
    const message = data.get('message')
    const email = data.get('email')
    // Opens the visitor's email client pre-filled. Replace with a real backend later.
    const subject = encodeURIComponent(`Inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\nReply to: ${email}`)
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section section--alt">
      <div className="container contact__grid">
        <div className="contact__info">
          <span className="section__eyebrow">{t.contact.eyebrow}</span>
          <h2 className="section__title">{t.contact.title}</h2>
          <p className="section__intro">{t.contact.intro}</p>

          <ul className="contact__list">
            <li>
              <span className="contact__label">{t.contact.emailLabel}</span>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <span className="contact__label">{t.contact.phoneLabel}</span>
              <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
            </li>
            <li>
              <span className="contact__label">{t.contact.locationLabel}</span>
              <span>{company.location}</span>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            {t.contact.nameField}
            <input type="text" name="name" required placeholder={t.contact.namePlaceholder} />
          </label>
          <label>
            {t.contact.emailField}
            <input type="email" name="email" required placeholder={t.contact.emailPlaceholder} />
          </label>
          <label>
            {t.contact.messageField}
            <textarea name="message" rows="4" required placeholder={t.contact.messagePlaceholder} />
          </label>
          <button type="submit" className="btn">
            {t.contact.sendBtn}
          </button>
        </form>
      </div>
    </section>
  )
}
