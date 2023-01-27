import Link from 'next/link'
import Image from 'next/image'
import { projects } from '../../(index)/data/projects'
import { IoMdOpen, IoMdReturnLeft } from 'react-icons/io'

function Player ({ params }) {
  const { id } = params
  const project = projects.find((p) => p.id === parseInt(id))

  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-1 flex-col gap-5'>
          <h2 className='inline-block border-b-8 border-b-emerald-500 pb-4 text-3xl font-bold leading-10 tracking-tighter text-zinc-100 sm:pb-6 md:text-6xl'>
            {project?.name}
          </h2>
          <div className='mt-8'>
            <p className='text-sm font-medium text-zinc-200/90'>
              <span className='font-semibold text-zinc-100'>
                Timeframe:
              </span>{' '}
              {project?.date}
            </p>
          </div>
          <ul className='flex gap-3 text-xs text-zinc-200'>
            {project?.stack.map((technology) => (
              <li
                className='rounded-sm border border-zinc-300/50 p-1 font-semibold'
                key={technology.name}
              >
                {technology.name}
              </li>
            ))}
          </ul>
          <p className='mt-3 text-sm text-zinc-600 dark:text-zinc-300 sm:text-base'>
            {project?.description}
          </p>
        </div>

        <div className='mt-8 mb-1 flex w-full flex-1 flex-col justify-center gap-4 md:mt-0 md:mb-8 md:flex-row md:items-start md:justify-end'>
          <Link
            href='/'
            className='group inline-flex items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 text-sm font-extrabold text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-700/50 dark:text-zinc-200 dark:hover:bg-zinc-700/70 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 md:px-4 lg:text-base'
          >
            <IoMdReturnLeft className='mr-2 text-lg' />
            Go Back
          </Link>

          <a className='inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-emerald-600 py-2 px-3 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 lg:text-base'>
            <IoMdOpen className='mr-1 text-xl' />
            View Repository
          </a>
        </div>
      </div>
      <div className='relative mt-1 h-72 sm:h-80 md:mt-10 md:h-96 lg:h-[80vh]'>
        <Image
          className='w-full rounded-md object-contain'
          fill
          src={project?.img}
          alt='Ecommerce project screenshoot'
        />
      </div>
    </>
  )
}

export default Player
