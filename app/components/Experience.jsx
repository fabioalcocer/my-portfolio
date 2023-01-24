import Image from 'next/image'
import SuitcaseIcon from 'app/icons/SuitcaseIcon'
import logoOB from '../assets/ob-logo.png'
import { BsArrowDownShort } from 'react-icons/bs'

function Experience () {
  return (
    <div className='mt-10 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
      <div className='flex items-center gap-3'>
        <SuitcaseIcon />
        <h2 className='flex text-lg font-semibold text-zinc-900 dark:text-zinc-100'>
          Work experience
        </h2>
      </div>

      <ul className='mt-6'>
        <li className='flex items-center gap-4'>
          <div className='relative mt-1 flex h-14 w-14 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
            <Image width={35} src={logoOB} alt='logo openbootcamp' />
          </div>
          <div className='flex w-full flex-col gap-1'>
            <p className='w-full flex-none font-medium text-zinc-900 dark:text-zinc-100'>
              OpenBootcamp
            </p>
            <div className='flex flex-wrap justify-between gap-1'>
              <p className='text-sm text-zinc-500 dark:text-zinc-400'>
                Front-end Developer
              </p>
              <p className='text-sm text-zinc-500 dark:text-zinc-500'>
                Apr 2022 - Present
              </p>
            </div>
          </div>
        </li>
      </ul>

      <a
        href=''
        className='group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70'
      >
        <span>Download CV</span>
        <BsArrowDownShort className='text-xl stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50' />
      </a>
    </div>
  )
}

export default Experience
