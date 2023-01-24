import Image from 'next/image'
import ecommerceImg from '../assets/ecommerce.webp'

function Projects () {
  return (
    <div className='mt-10 rounded-2xl border border-zinc-100 p-3 dark:border-zinc-700/40'>
      <Image src={ecommerceImg} alt='Ecommerce project screenshot' />

      <div className='flex flex-col gap-4 p-5 pl-1'>
        <div className='flex items-center gap-3'>
          <h2 className='flex text-lg font-semibold text-zinc-900 dark:text-zinc-100'>
            E-Commerce Fullstack
          </h2>
        </div>

        <ul className='mt-1 flex gap-3 text-xs text-zinc-200'>
          <li className='border border-sky-500/40 p-1 font-semibold'>
            React
          </li>
          <li className='border border-teal-200/40 p-1 font-semibold'>
            ContextAPI
          </li>
          <li className='border border-green-500/40 p-1 font-semibold'>
            Express.js
          </li>
          <li className='border border-sky-400/40 p-1 font-semibold'>
            Tailwind
          </li>
        </ul>

        <p className='text-sm text-zinc-600 dark:text-zinc-300 sm:text-base'>
          Nize a web app that helps you create beautiful images of
          screenshots and code fast and with little effort. Blurred
          background images, gradients, easy rotation and tilt, coding
          fonts.
        </p>

        <div className='mt-2 flex items-center gap-3'>
          <a className='inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-zinc-800 py-2 px-3 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70'>
            Open App
          </a>
          <a
            href=''
            className='group inline-flex w-full flex-1 items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70'
          >
            View more
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
