import { Outlet } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// Shared shell for every page: language context + navbar + footer.
export default function Layout() {
  return (
    <LanguageProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </LanguageProvider>
  )
}
