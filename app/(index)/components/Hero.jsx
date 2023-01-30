import Image from 'next/image'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import myLogo from '../assets/logo.png'

function Hero () {
  return (
    <div className='max-w-3xl md:px-8 lg:px-14'>
      <div className='flex flex-col gap-4 md:gap-6'>
        <div className='relative flex h-20 w-20 flex-none cursor-pointer items-center justify-center rounded-full border bg-indigo-500/50 border-zinc-700/10 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border-zinc-700/50 dark:bg-zinc-900/40 dark:ring-0 md:h-24 md:w-24'>
          <Image
            src={myLogo}
            alt='photo profile'
            className='h-24 w-24 object-cover md:h-32 md:w-32'
          />
        </div>
        <h1 className='text-[32px] font-bold leading-10 tracking-tighter text-zinc-100 dark:text-zinc-100 md:text-5xl'>
          I’m Fabio Alcocer. Software developer, founder, and content
          creator.
        </h1>
        <p className='text-base leading-7 text-zinc-100 font-normal dark:text-zinc-400 md:pr-10 md:text-lg'>
          I’m Fabio, a software designer and entrepreneur based in New
          York City. I’m the founder and CEO of Planetaria, where we
          develop technologies that empower regular people to explore
          space on their own terms.
        </p>
      </div>
      <div className='mt-6 flex gap-6 text-zinc-400'>
        <a href='https://twitter.com/fabioalcocer17' target='_blank' className='group -m-1 p-1' rel='noreferrer'>
          <BsTwitter className='h-5 w-5 fill-zinc-300 hover:fill-blue-400 hover:group-hover:fill-blue-400 dark:fill-zinc-400 dark:hover:group-hover:fill-zinc-300 md:h-6 md:w-6' />
        </a>
        <a href='https://github.com/fabioAlcocer' className='group -m-1 p-1'>
          <BsGithub className='h-5 w-5 fill-zinc-300 hover:fill-zinc-800 hover:group-hover:fill-zinc-700 dark:fill-zinc-400 dark:hover:group-hover:fill-zinc-300 md:h-6 md:w-6' />
        </a>
        <a href='mailto:fabioalcocerdev@gmail.com' className='group -m-1 p-1'>
          <IoMdMail className='h-5 w-5 fill-zinc-300 hover:fill-rose-500 hover:group-hover:fill-rose-500 dark:fill-zinc-400 dark:hover:group-hover:fill-zinc-300 md:h-6 md:w-6' />
        </a>
        <a href='https://www.linkedin.com/in/fabio-alcocer/' target='_blank' className='group -m-1 p-1' rel='noreferrer'>
          <BsLinkedin className='h-5 w-5 fill-zinc-300 hover:fill-blue-600 hover:group-hover:fill-blue-600 dark:fill-zinc-400 dark:hover:group-hover:fill-zinc-300 md:h-6 md:w-6' />
        </a>
      </div>
    </div>
  )
}

export default Hero
