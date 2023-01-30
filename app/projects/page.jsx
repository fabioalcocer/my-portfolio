import Container from 'app/(index)/components/Container'
import DefaultProject from 'app/(index)/components/DefaultProject'
import Link from 'next/link'
import { IoMdReturnLeft } from 'react-icons/io'
import { projects } from '../(index)/data/projects'

export default function Home () {
  return (
    <Container>
      <div className='md:p-6'>
        <div className='flex items-center justify-between'>
          <h2 className='flex w-max flex-col pb-4 text-3xl font-bold leading-10 tracking-tighter dark:text-zinc-100 text-zinc-800 sm:pb-6 md:text-6xl'>
            Projects
            <span className='mt-2 inline-flex h-2 w-full rounded-md bg-emerald-500 md:mt-4' />
          </h2>
          <Link
            href='/'
            className='group inline-flex items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 text-sm font-extrabold text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-700/50 dark:text-zinc-200 dark:hover:bg-zinc-700/70 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 md:py-3 md:px-4 md:text-base lg:text-lg'
          >
            <IoMdReturnLeft className='mr-2 text-lg' />
            Go Back
          </Link>
        </div>
        <div className='mt-12 flex flex-col items-center gap-8 md:mt-16 lg:gap-10'>
          {projects.map((project) => (
            <DefaultProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Container>
  )
}
