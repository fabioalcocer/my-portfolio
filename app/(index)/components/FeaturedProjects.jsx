import Link from 'next/link'
import { projects } from '../data/projects'
import FeaturedProject from './FeaturedProject'

function FeaturedProjects () {
  return (
    <div className='mt-20'>
      <h2 className='inline-block border-b-8 border-b-emerald-500 pb-4 text-4xl font-bold leading-10 tracking-tighter text-zinc-100 sm:pb-8 md:text-8xl'>
        Featured Projects
      </h2>
      <div className='mt-8 flex flex-wrap justify-center gap-8 sm:mt-20'>
        {projects.map((project) => (
          <Link
            key={project.id}
            href='/projects/[id]'
            as={`/projects/${project.id}`}
          >
            <FeaturedProject key={project.id} project={project} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProjects
