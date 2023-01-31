import Container from 'app/(index)/components/Container'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '../../(index)/data/projects'
import { IoMdOpen, IoMdReturnLeft } from 'react-icons/io'

function Project ({ params }) {
  const { id } = params
  const project = projects.find((p) => p.id === parseInt(id))

  return (
    <Container>
      <div className='flex flex-col gap-9 md:flex-row lg:px-12'>
        <div className='flex flex-1 flex-col gap-5'>
          <h2 className='flex w-max flex-col pb-2 text-3xl font-bold leading-10 tracking-tighter text-zinc-100 dark:text-zinc-100 md:text-4xl lg:text-[55px]'>
            {project?.name}
            <span className='mt-2 inline-flex h-2 w-full rounded-md bg-emerald-500 md:mt-4' />
          </h2>
          <div className='mt-2 md:mt-4'>
            <p className='text-sm font-medium text-zinc-100/90 dark:text-zinc-200/90'>
              <span className='font-semibold text-zinc-100 dark:text-zinc-100'>
                Timeframe:
              </span>{' '}
              {project?.date}
            </p>
          </div>
          <ul className='flex gap-3 text-xs text-zinc-100 dark:text-zinc-200'>
            {project?.stack.map((technology) => (
              <li
                className='rounded-sm border border-zinc-500/50 p-1 font-semibold dark:border-zinc-300/50'
                key={technology.name}
              >
                {technology.name}
              </li>
            ))}
          </ul>
          <p className='mt-1 text-sm text-zinc-100 dark:text-zinc-300 sm:text-base'>
            {project?.description}
          </p>
        </div>

        <div className='mt-5 mb-1 flex w-full flex-1 flex-col justify-center gap-4 md:mt-0 md:mb-8 md:flex-row md:items-start md:justify-end lg:items-start lg:justify-end'>
          <Link
            href='/projects'
            className='group inline-flex items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 text-sm font-extrabold text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-700/50 dark:text-zinc-200 dark:hover:bg-zinc-700/70 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 md:px-4 md:py-3 lg:text-[15px]'
          >
            <IoMdReturnLeft className='mr-2 text-lg' />
            Go Back
          </Link>

          <a className='inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-emerald-500 py-2 px-3 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-emerald-600 active:bg-emerald-800 active:text-zinc-100/70 active:transition-none dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 md:py-3 lg:text-[15px]' href='https://e-commerce-x.vercel.app/' target='_blank' rel='noreferrer'>
            <IoMdOpen className='mr-1 text-xl' />
            Open App
          </a>
        </div>
      </div>
      <div className='relative mt-1 h-72 sm:h-80 md:mt-10 md:h-96 lg:h-[80vh] rounded-md overflow-hidden'>
        <Image
          className='w-full object-contain rounded-md'
          fill
          src={project?.img}
          alt='Ecommerce project screenshoot'
        />
      </div>
    </Container>
  )
}

export default Project
