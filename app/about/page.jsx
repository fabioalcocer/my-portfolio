import Image from 'next/image'
import Link from 'next/link'
import myLogo from '../(index)/assets/mylogo.jpg'
import { IoMdReturnLeft, IoMdMail } from 'react-icons/io'

import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'

function page () {
  return (
    <div className='sm:px-8'>
      <div className='mb-12 flex items-center justify-between px-16'>
        <h2 className='inline-block border-b-8 border-b-emerald-600 pb-4 text-4xl font-bold leading-10 tracking-tighter text-zinc-100 sm:pb-8 md:text-6xl'>
          About me
        </h2>
        <Link
          href='/'
          className='group inline-flex items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 text-sm font-extrabold text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-700/50 dark:text-zinc-200 dark:hover:bg-zinc-700/70 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 md:py-3 md:px-4 md:text-base lg:text-lg'
        >
          <IoMdReturnLeft className='mr-2 text-lg' />
          Go Back
        </Link>
      </div>
      <div className='mx-auto max-w-7xl lg:px-8'>
        <div className='mx-auto max-w-2xl lg:max-w-5xl'>
          <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
            <div className='lg:pl-20'>
              <div className='max-w-xs px-2.5 lg:max-w-none'>
                <Image
                  src={myLogo}
                  className='aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800'
                  alt='my logo'
                />
              </div>
            </div>
            <div className='lg:order-first lg:row-span-2'>
              <h1 className='text-4xl font-bold tracking-tighter text-zinc-800 dark:text-zinc-100 sm:text-5xl sm:leading-[3.5rem]'>
                I’m Fabio Alcocer. I live in New York City, where I
                design the future.
              </h1>
              <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
                <p>
                  I’ve loved making things for as long as I can
                  remember, and wrote my first program when I was 6
                  years old, just two weeks after my mom brought home
                  the brand new Macintosh LC 550 that I taught myself
                  to type on.
                </p>
                <p>
                  I’ve loved making things for as long as I can
                  remember, and wrote my first program when I was 6
                  years old, just two weeks after my mom brought home
                  the brand new Macintosh LC 550 that I taught myself
                  to type on.
                </p>
                <p>
                  I’ve loved making things for as long as I can
                  remember, and wrote my first program when I was 6
                  years old, just two weeks after my mom brought home
                  the brand new Macintosh LC 550 that I taught myself
                  to type on.
                </p>
                <p>
                  I’ve loved making things for as long as I can
                  remember, and wrote my first program when I was 6
                  years old, just two weeks after my mom brought home
                  the brand new Macintosh LC 550 that I taught myself
                  to type on.
                </p>
              </div>
            </div>
            <div className='lg:pl-20'>
              <ul className='flex flex-col gap-4' role='list'>
                <li className='flex items-center'>
                  <a
                    href=''
                    className='group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200'
                  >
                    <BsTwitter className='h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-teal-500' />
                    <span class='ml-4'>Follow on Twitter</span>
                  </a>
                </li>
                <li className='flex items-center'>
                  <a
                    href=''
                    className='group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500'
                  >
                    <BsGithub className='h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-teal-500' />
                    <span class='ml-4'>Follow on GitHub</span>
                  </a>
                </li>
                <li className='flex items-center'>
                  <a
                    href=''
                    className='group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500'
                  >
                    <BsLinkedin className='h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-teal-500' />
                    <span class='ml-4'>Follow on LinkedIn</span>
                  </a>
                </li>
                <li className='flex items-center'>
                  <a
                    href='mailto:fabioalcocerdev@gmail.com'
                    className='group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500'
                  >
                    <IoMdMail className='h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-teal-500' />
                    <span class='ml-4'>
                      fabioalcocerdev@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
