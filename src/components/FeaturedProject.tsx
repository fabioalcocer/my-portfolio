import Image from 'next/image'
import { Project } from '@/app/types'

type Props = {
  project: Project
}

function FeaturedProject ({ project }: Props) {
  return (
    <div className='duration-300 flex max-w-sm cursor-pointer flex-col overflow-hidden rounded-xl border border-indigo-300/50 bg-indigo-300/20 p-0 shadow-inner transition-all hover:-translate-y-4 hover:bg-indigo-300/40 dark:border-zinc-700/40 dark:bg-transparent dark:shadow-zinc-800 dark:hover:bg-zinc-600/30 dark:hover:shadow-transparent'>
      <div className='flex-1'>
        <div className='relative h-72'>
          <Image
            className='object-cover'
            fill
            src={project?.img}
            alt='Ecommerce project screenshot'
          />
        </div>
      </div>

      <div className='flex flex-1 flex-col gap-4 p-5 pb-6'>
        <div className='flex items-center gap-3'>
          <h2 className='flex text-xl font-semibold text-zinc-100'>
            {project?.name}
          </h2>
        </div>

        <ul className='flex gap-3 text-xs text-zinc-200 dark:text-zinc-200 md:text-[13px]'>
          {project?.stack.map((technology) => (
            <li
              className={`truncate rounded-sm border-2 border-zinc-100/40 ${technology.color} p-1 font-semibold`}
              key={technology.name}
            >
              {technology.name}
            </li>
          ))}
        </ul>

        <p className='text-sm text-zinc-100 dark:text-zinc-300 sm:text-base'>
          {project?.description}
        </p>

        <div className='mt-8 flex h-5 items-center justify-between'>
          {project?.progress && (
            <p className='font-semibold text-indigo-100 dark:text-emerald-500'>
              Work in Progress
            </p>
          )}
          <p className='text-sm font-medium text-zinc-200 dark:text-zinc-100'>
            {project?.date}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProject
