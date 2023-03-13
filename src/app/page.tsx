import FeaturedProjects from '@/components/FeaturedProjects'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import SkillsBoard from '@/components/SkillsBoard'
import Experience from '@/components/Experience'
import Container from '@/components/Container'

export default function Home () {
  return (
    <Container>
      <Hero />
      <Experience />
      <FeaturedProjects />
      <SkillsBoard />
      <Contact />
    </Container>
  )
}
