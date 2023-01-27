import Skill from './Skill'
import { skills } from '../data/skills'

function SkillsBoard () {
  return (
    <div className='mt-16'>
      <h2 className='inline-block border-b-8 border-b-emerald-600 pb-4 text-4xl font-bold leading-10 tracking-tighter text-zinc-100 sm:pb-8 md:text-8xl'>
        Skills & Tools
      </h2>

      <div className='mt-12 flex flex-wrap justify-center gap-5'>
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.id} />
        ))}
      </div>
    </div>
  )
}

export default SkillsBoard
