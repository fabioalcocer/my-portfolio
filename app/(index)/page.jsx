import FeaturedProjects from './components/FeaturedProjects'
import Contact from './components/Contact'
import Hero from './components/Hero'
import SkillsBoard from './components/SkillsBoard'
import Experience from './components/Experience'

export default function Home () {
  return (
    <>
      <Hero />
      <Experience />
      <FeaturedProjects />
      <SkillsBoard />
      <Contact />
    </>
  )
}
