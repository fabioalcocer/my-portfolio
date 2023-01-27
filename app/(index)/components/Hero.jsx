import Image from 'next/image'
import myLogo from '../assets/logo.png'
import {
  BsTwitter,
  BsGithub,
  BsLinkedin
} from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'

function Hero () {
  return (
    <div className=''>
      <div className='flex flex-col gap-4'>
        <div className='relative flex h-20 w-20 flex-none cursor-pointer items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-900 dark:ring-0'>
          <Image
            src={myLogo}
            alt='photo profile'
            className='h-24 w-24 object-cover'
          />
        </div>
        <h1 className='text-[32px] font-bold leading-10 tracking-tighter text-zinc-100'>
          Software developer, founder, and content creator.
        </h1>
        <p className='text-base font-light leading-7 text-zinc-400'>
          I’m Fabio, a software designer and entrepreneur based in New
          York City. I’m the founder and CEO of Planetaria, where we
          develop technologies that empower regular people to explore
          space on their own terms.
        </p>
      </div>
      <div className='mt-6 flex gap-6 text-zinc-400'>
        <a href='' className='group -m-1 p-1'>
          <BsTwitter className='h-5 w-5 fill-zinc-400 hover:group-hover:fill-zinc-300' />
        </a>
        <a href='' className='group -m-1 p-1'>
          <BsGithub className='h-5 w-5 fill-zinc-400 hover:group-hover:fill-zinc-300' />
        </a>
        <a href='' className='group -m-1 p-1'>
          <IoMdMail className='h-5 w-5 hover:group-hover:fill-zinc-300' />
        </a>
        <a href='' className='group -m-1 p-1'>
          <BsLinkedin className='h-5 w-5 fill-zinc-400 hover:group-hover:fill-zinc-300' />
        </a>
      </div>
    </div>
  )
}

export default Hero
