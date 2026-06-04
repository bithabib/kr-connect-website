import { Head } from 'vite-react-ssg'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import Products from '../components/Products.jsx'
import Founders from '../components/Founders.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>KR Connect Technologies — Connecting people to Korea</title>
        <meta
          name="description"
          content="KR Connect Technologies builds smart software and guides newcomers through Korean life — from passing the KIIP & TOPIK exams to choosing the right visa."
        />
      </Head>
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Founders />
        <Contact />
      </main>
    </>
  )
}
