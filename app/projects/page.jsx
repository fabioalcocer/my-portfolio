import DefaultProject from 'app/(index)/components/DefaultProject'
import { projects } from '../(index)/data/projects'

export default function Home () {
  return (
    <div className='md:p-6'>
      <h2 className='inline-block border-b-8 border-b-emerald-600 pb-4 text-4xl font-bold leading-10 tracking-tighter text-zinc-100 sm:pb-8 md:text-8xl'>
        Projects
      </h2>
      <div className='mt-12 flex flex-col items-center gap-8 md:mt-20 lg:gap-10'>
        {projects.map((project) => (
          <DefaultProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
