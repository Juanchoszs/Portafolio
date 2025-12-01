import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { TechCarousel } from "@/components/tech-carousel"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TechCarousel />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
