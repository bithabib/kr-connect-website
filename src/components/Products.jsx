import { products } from '../data.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function StoreButton({ href, store }) {
  if (!href) return null
  const isPlay = store === 'play'
  return (
    <a className="store-btn" href={href} target="_blank" rel="noopener noreferrer">
      <span className="store-btn__icon" aria-hidden="true">{isPlay ? '▶' : ''}</span>
      <span className="store-btn__text">
        <small>{isPlay ? 'GET IT ON' : 'Download on the'}</small>
        <strong>{isPlay ? 'Google Play' : 'App Store'}</strong>
      </span>
    </a>
  )
}

export default function Products() {
  const { t } = useLanguage()

  return (
    <section id="products" className="section">
      <div className="container">
        <span className="section__eyebrow">{t.products.eyebrow}</span>
        <h2 className="section__title">{t.products.title}</h2>
        <p className="section__intro">{t.products.intro}</p>

        <div className="products__grid">
          {products.map((p) => {
            const hasLinks = p.playStore || p.appStore
            return (
              <article key={p.id} className="product-card">
                <div className="product-card__head">
                  <span className="product-card__icon">{p.icon}</span>
                  <div>
                    <h3 className="product-card__name">{p.name}</h3>
                    {p.status === 'coming' && (
                      <span className="product-card__badge">{t.products.comingSoon}</span>
                    )}
                  </div>
                </div>

                <p className="product-card__text">{t.products.descriptions[p.id]}</p>

                {p.status === 'available' && hasLinks && (
                  <div className="product-card__stores">
                    <StoreButton href={p.playStore} store="play" />
                    <StoreButton href={p.appStore} store="apple" />
                  </div>
                )}

                {p.status === 'available' && !hasLinks && (
                  <p className="product-card__note">Store links coming soon.</p>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
