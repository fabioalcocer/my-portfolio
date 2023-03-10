'use client'
import { motion } from 'framer-motion'
import { skills, defaultSkills } from '../data/skills'
import Skill from './Skill'
import DefaultSkill from './DefaultSkill'

function SkillsBoard () {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeIn', duration: 0.4, delay: 0.3 }}
      className='mt-14 md:mt-20'
    >
      <h2 className='mx-auto flex w-max flex-col items-center pb-4 text-4xl font-bold leading-10 tracking-tighter dark:text-zinc-100 text-zinc-100 sm:pb-8 md:mx-0 md:text-6xl lg:px-14'>
        Skills & Tools
        <span className='z-20 mt-4  inline-flex h-2 w-full animate-[rightGrow_3s_infinite_alternate] rounded-md bg-emerald-500' />
      </h2>

      <div className='mt-8 flex flex-wrap justify-center gap-5 md:mt-10'>
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.id} />
        ))}
      </div>
      <div className='mt-8 flex max-w-5xl mx-auto flex-wrap justify-center gap-4 md:gap-5 md:mt-10'>
        {defaultSkills.map((skill) => (
          <DefaultSkill skill={skill} key={skill.id} />
        ))}
      </div>
    </motion.div>
  )
}

export default SkillsBoard
