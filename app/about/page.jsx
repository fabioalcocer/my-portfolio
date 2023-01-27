import Link from 'next/link'
import { IoMdReturnLeft } from 'react-icons/io'

function page () {
  return (
    <div className='md:p-6'>
      <div className='flex items-center justify-between'>
        <h2 className='inline-block border-b-8 border-b-emerald-600 pb-4 text-4xl font-bold leading-10 tracking-tighter text-zinc-100 sm:pb-8 md:text-8xl'>
          About
        </h2>
        <Link
          href='/'
          className='group inline-flex items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 text-sm font-extrabold text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-700/50 dark:text-zinc-200 dark:hover:bg-zinc-700/70 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 md:py-3 md:px-4 md:px-4 md:text-base lg:text-lg'
        >
          <IoMdReturnLeft className='mr-2 text-lg' />
          Go Back
        </Link>
      </div>
    </div>
  )
}

export default page
