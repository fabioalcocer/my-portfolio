import Link from 'next/link'
import { projects } from '../data/projects'
import FeaturedProject from './FeaturedProject'

function FeaturedProjects () {
  return (
    <div className='mt-14 md:mt-20'>
      <h2 className='mx-auto flex lg:px-14 w-max flex-col items-center pb-4 text-4xl font-bold leading-10 tracking-tighter text-zinc-100 sm:pb-8 md:mx-0 md:text-7xl'>
        Featured Projects
        <span className='z-20 mt-4  inline-flex h-2 w-full animate-[rightGrow_3s_infinite_alternate] rounded-md bg-emerald-500' />
      </h2>

      <div className='mt-8 flex flex-wrap justify-center gap-8 md:mt-10'>
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
