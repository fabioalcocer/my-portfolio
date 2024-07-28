import { Suspense } from "react"

import { AuroraBackground } from "@/components/ui/aurora-background"
import Contact from "@/components/Contact"
import Container from "@/components/Container"
import Experience from "@/components/Experience"
import FeaturedProjects from "@/components/FeaturedProjects"
import Hero from "@/components/Hero"
import SkillsBoard from "@/components/SkillsBoard"

export default function Home() {
  return (
    <Container>
      <Suspense>
        <AuroraBackground>
          <Hero />
        </AuroraBackground>
      </Suspense>
      
      <Experience />
      <FeaturedProjects />
      <SkillsBoard />
      <Contact />
    </Container>
  )
}
