import Image from 'next/image'
import SuitcaseIcon from 'app/icons/SuitcaseIcon'
import logoOB from '../assets/ob-logo.png'

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
          <div className='w-full flex flex-col gap-1'>
            <p className='w-full flex-none font-medium text-zinc-900 dark:text-zinc-100'>OpenBootcamp</p>
            <div className='flex justify-between flex-wrap gap-1'>
              <p className='text-sm text-zinc-500 dark:text-zinc-400'>Front-end Developer</p>
              <p className='text-sm text-zinc-500 dark:text-zinc-500'>
                Apr 2022 - Present
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Experience
