import { projects } from '../../(index)/data/projects'

function Player ({ params }) {
  const { id } = params
  const project = projects.find((p) => p.id === parseInt(id))

  return (
    <div>
      <h2 className='inline-block border-b-8 border-b-emerald-600 pb-4 text-3xl font-bold leading-10 tracking-tighter text-zinc-100 sm:pb-6 md:text-6xl'>
        {project.name}
      </h2>
    </div>
  )
}

export default Player
