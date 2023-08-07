'use client'
import Link from 'next/link'
import { projects } from '../data/projects'
import FeaturedProject from './FeaturedProject'
import { motion } from 'framer-motion'

function FeaturedProjects () {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeIn', duration: 0.4, delay: 0.3 }}
      className='mt-14 md:mt-20'
    >
      <h2 className='mx-auto flex w-max flex-col items-center pb-4 text-4xl font-bold leading-10 tracking-tighter text-zinc-100 dark:text-zinc-100 sm:pb-8 md:mx-0 md:text-6xl lg:px-14'>
        Featured Projects
        <span className='z-20 mt-4  inline-flex h-2 w-full animate-[rightGrow_3s_infinite_alternate] rounded-md bg-emerald-500' />
      </h2>

      <div className='mt-8 flex flex-wrap justify-center gap-8 md:mt-10 md:gap-4'>
        {projects.slice(0, 3).map((project) => (
          <Link
            key={project.id}
            href='/projects/[id]'
            as={`/projects/${project.id}`}
          >
            <FeaturedProject key={project.id} project={project} />
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

export default FeaturedProjects
