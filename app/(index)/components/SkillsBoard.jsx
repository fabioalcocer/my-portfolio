import Skill from './Skill'
import { skills } from '../data/skills'

function SkillsBoard () {
  return (
    <div className='mt-14 md:mt-20'>
      <h2 className='mx-auto flex w-max flex-col items-center pb-4 text-4xl font-bold leading-10 tracking-tighter text-zinc-100 sm:pb-8 md:mx-0 md:text-7xl'>
        Skills & Tools
        <span className='z-20 mt-4  inline-flex h-2 w-full animate-[rightGrow_3s_infinite_alternate] rounded-md bg-emerald-500' />
      </h2>

      <div className='mt-8 md:mt-10 flex flex-wrap justify-center gap-5'>
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.id} />
        ))}
      </div>
    </div>
  )
}

export default SkillsBoard
