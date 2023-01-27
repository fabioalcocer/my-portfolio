import Image from 'next/image'
import Link from 'next/link'

function DefaultProject ({ project }) {
  return (
    <div className='duration-400 relative flex max-w-lg flex-col overflow-hidden rounded-xl border border-zinc-100 p-0 shadow-inner shadow-zinc-800 transition-all hover:shadow-transparent dark:border-zinc-700/40 lg:w-full lg:max-w-max lg:flex-row-reverse lg:items-center'>
      <div className='flex-1'>
        {project.progress && (
          <p className='absolute left-0 top-0 z-10 rounded-br-md bg-zinc-400/70 p-1 font-semibold text-zinc-100 lg:bg-zinc-700 lg:text-zinc-200'>
            Work in Progress
          </p>
        )}

        <div className='relative h-72 sm:h-80 lg:h-[420px]'>
          <Image
            className='object-cover'
            fill
            src={project.img}
            alt='Ecommerce project screenshoot'
          />
        </div>
      </div>

      <div className='flex flex-1 flex-col gap-4 p-5 py-7'>
        <ul className='flex gap-3 text-xs text-zinc-200 lg:mt-8 lg:text-sm'>
          {project.stack.map((technology) => (
            <li
              className={`rounded-sm border ${technology.color} p-1 font-semibold`}
              key={technology.name}
            >
              {technology.name}
            </li>
          ))}
        </ul>

        <div>
          <h2 className='mt-2 flex text-xl font-semibold text-zinc-900 dark:text-zinc-100 lg:text-3xl'>
            {project.name}
          </h2>
          <p className='mt-1 text-sm font-medium  text-zinc-900 dark:text-zinc-300/70 lg:mt-3 '>
            {project.date}
          </p>
        </div>

        <p className='text-sm text-zinc-600 dark:text-zinc-300 sm:text-base lg:pr-20'>
          {project.description}
        </p>

        <div className='mt-2 mb-1 flex items-center gap-3 lg:mt-9 lg:max-w-xs'>
          <a className='inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-zinc-800 py-2 px-3 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-emerald-500 dark:hover:bg-emerald-600 cursor-pointer dark:active:bg-zinc-700 dark:active:text-zinc-100/70 lg:text-base'>
            Open App
          </a>

          <Link
            key={project.id}
            href='/projects/[id]'
            as={`/projects/${project.id}`}
            className='group inline-flex w-full flex-1 items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-200 dark:hover:bg-zinc-700/70 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 lg:text-base'
          >
            View more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DefaultProject
