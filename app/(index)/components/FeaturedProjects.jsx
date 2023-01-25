import { projects } from '../data/projects'
import FeaturedProject from './FeaturedProject'

function FeaturedProjects () {
  return (
    <div className='mt-20 sm:p-6'>
      <h2 className=' inline-block border-b-8 border-b-emerald-600 pb-8 text-2xl font-bold leading-10 tracking-tighter text-zinc-100 md:text-8xl'>
        Featured Projects
      </h2>
      <div className='mt-20 flex flex-wrap justify-center gap-5'>
        {projects.map((project) => (
          <FeaturedProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProjects
