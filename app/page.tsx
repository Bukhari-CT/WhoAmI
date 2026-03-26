import Nav from '@/components/ui/Nav'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Capabilities from '@/components/sections/Capabilities'
import Work from '@/components/sections/Work'
import CaseStudy from '@/components/sections/CaseStudy'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)] flex flex-col">
      <Nav />
      <Hero />
      <About />
      <Capabilities />
      <Work />
      <CaseStudy />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
