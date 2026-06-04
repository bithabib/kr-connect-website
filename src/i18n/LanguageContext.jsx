import { createContext, useContext, useEffect, useState } from 'react'
import { translations, languages } from './translations.js'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'kr-connect-lang'

function getInitialLang() {
  // 1) remember the visitor's previous choice
  const saved = typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)
  if (saved && translations[saved]) return saved
  // 2) otherwise try the browser language
  const browser = typeof navigator !== 'undefined' ? navigator.language.slice(0, 2) : 'en'
  if (translations[browser]) return browser
  // 3) fall back to English
  return 'en'
}

export function LanguageProvider({ children }) {
  // Start as English so the server-rendered HTML and the first client render
  // match (avoids hydration mismatches). We apply the visitor's real preference
  // right after mount, below.
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const initial = getInitialLang()
    if (initial !== 'en') setLang(initial)
  }, [])

  useEffect(() => {
    if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, lang)
    if (typeof document !== 'undefined') document.documentElement.lang = lang
  }, [lang])

  const value = {
    lang,
    setLang,
    languages,
    t: translations[lang] || translations.en,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
