import Image from 'next/image'
import SuitcaseIcon from '../icons/SuitcaseIcon'
import logoOB from '../assets/ob-logo.png'
import { BsArrowDownShort } from 'react-icons/bs'

function Experience () {
  return (
    <div className='mt-16 mb-5 flex flex-col gap-7 md:px-8 lg:px-14'>
      <h2 className='mx-auto flex h-max w-max flex-col items-center pr-4 pb-4 text-4xl font-bold leading-10 tracking-tighter text-zinc-100 dark:text-zinc-100 sm:pb-8 md:mx-0 md:text-6xl'>
        Experience
        <span className='bg-primary z-20  mt-4  inline-flex h-2 w-full animate-[rightGrow_2s_infinite_alternate] rounded-md bg-emerald-500' />
      </h2>
      <div className='mx-auto flex flex-col gap-6 lg:flex-row'>
        <div className='flex max-w-xl flex-1 flex-col rounded-2xl border border-indigo-400/70 p-6 shadow-inner transition-shadow duration-500 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:shadow-transparent md:gap-2'>
          <div className='flex items-center gap-3'>
            <SuitcaseIcon />
            <h2 className='flex text-lg font-semibold text-zinc-100 dark:text-zinc-100 md:text-xl'>
              Work experience
            </h2>
          </div>
          <ul className='mt-6 flex flex-col gap-4'>
            <li className='flex items-center gap-4'>
              <div className='relative mt-1 flex h-14 w-14 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 md:h-24 md:w-24'>
                <Image
                  width={35}
                  className='md:h-16 md:w-16'
                  src={logoOB}
                  alt='logo openbootcamp'
                />
              </div>
              <div className='flex w-full flex-col gap-1'>
                <p className='w-full flex-none font-medium text-zinc-100 dark:text-zinc-100 md:text-[26px] md:font-bold'>
                  OpenBootcamp
                </p>
                <div className='flex flex-wrap items-center justify-between gap-1'>
                  <p className='text-sm text-zinc-100 dark:text-zinc-400 md:text-lg'>
                    Front-end Developer
                  </p>
                  <p className='text-sm text-zinc-200 dark:text-zinc-500 md:text-base'>
                    Apr 2022 - Present
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <p className='mt-2 text-sm text-zinc-100 dark:text-zinc-300/90 sm:text-base md:pl-1 md:text-base'>
            The free bootcamp that adapts to you. Specialize in
            development regardless of your level of knowledge and
            experience, we will adapt to your objectives.
          </p>
          <a
            href='https://drive.google.com/file/d/1T1cezEvqrX4OYa0MuH6bA83fHkM4gtmV/view'
            target='_blank'
            rel='noreferrer'
            className='relative mt-6 overflow-hidden rounded-lg bg-black px-20 py-6 ring-0 ring-offset-black will-change-transform focus:outline-none focus:ring-1'
          >
            <span className='absolute inset-px z-10 flex items-center justify-center gap-2 rounded-lg bg-emerald-400 bg-gradient-to-t from-emerald-500 text-sm text-zinc-50 transition-all duration-500 hover:bg-emerald-500 dark:bg-black dark:from-zinc-900 dark:hover:bg-zinc-900'>
              Download CV
              <BsArrowDownShort className='animate-bounce-slow stroke-zinc-400 text-[30px] group-hover:stroke-zinc-100 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50' />
            </span>
            <span
              aria-hidden
              className='absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-green-700 before:via-emerald-500 before:to-blue-400'
            />
          </a>
        </div>
        <div className='flex max-w-xl flex-1 flex-col rounded-2xl border border-indigo-400/70 p-6 shadow-inner transition-shadow duration-500 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:shadow-transparent md:gap-2'>
          <div className='flex items-center gap-3'>
            <SuitcaseIcon />
            <h2 className='flex text-lg font-semibold text-zinc-100 dark:text-zinc-100 md:text-xl'>
              Responsibilities
            </h2>
          </div>
          <div className='mt-3 flex flex-col gap-4'>
            <div className='flex w-full flex-col gap-1'>
              <p className='w-full flex-none font-medium text-zinc-100 dark:text-zinc-100 md:text-[26px] md:font-bold'>
                OpenBootcamp
              </p>
              <p className='text-sm text-zinc-200 dark:text-zinc-400 md:text-lg'>
                Front-end Developer
              </p>
            </div>
          </div>
          <ul className='mt-2 flex list-disc flex-col gap-3 pl-5 text-zinc-100 dark:text-zinc-300/90'>
            <li className='text-sm md:text-[15px]'>
              Develop and maintain the Front-End of the different
              endpoints of the company's website.
            </li>
            <li className='text-sm md:text-[15px]'>
              Develop and maintain the Front-End side code to ensure
              that the user interface is properly integrated with the
              functionalities of the company's different websites.
            </li>
            <li className='text-sm md:text-[15px]'>
              Guiding teams of students during the development process
              of the different dynamics organized by the company, in
              order to prepare students for real work environments.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience
