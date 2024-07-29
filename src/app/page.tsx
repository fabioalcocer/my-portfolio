import { Suspense } from "react"
import { ZodIcon } from "@/icons/SkillsIcons"

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
        <div className="hidden lg:block">
          <AuroraBackground>
            <Hero />
          </AuroraBackground>
        </div>
        <div className="lg:hidden block">
          <Hero />
        </div>
      </Suspense>

      <Experience />
      <FeaturedProjects />
      <SkillsBoard />
      <Contact />
    </Container>
  )
}
