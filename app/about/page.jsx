import Container from 'app/(index)/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdReturnLeft } from 'react-icons/io'
import myLogo from '../(index)/assets/mylogo.jpg'
import SocialSideBar from './components/SocialSideBar'

function PageAbout () {
  return (
    <Container>
      <div className='sm:px-8'>
        <div className='mb-12 flex items-center justify-between px-0 lg:px-16'>
          <h2 className='flex w-max flex-col pb-4 text-3xl font-bold leading-10 tracking-tighter text-zinc-100 dark:text-zinc-100 sm:pb-6 md:text-6xl'>
            About Me
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
                <h2 className='text-4xl font-bold tracking-tighter text-zinc-100 dark:text-zinc-100 sm:text-5xl sm:leading-[3.5rem]'>
                  I’m Fabio Alcocer. Software developer and Content
                  creator.
                </h2>
                <div className='mt-6 space-y-7 text-base text-zinc-200 dark:text-zinc-400'>
                  <p>
                    I’m 21 years old and I dedicate myself daily to my
                    2 passions: Programming and content creation. I
                    make use of my communication skills and my
                    technical skills to facilitate others in their
                    learning process in the development world.
                  </p>
                  <p>
                    After having lived almost all my life in Spain, I
                    currently live in Bolivia and since almost 2 years
                    ago I started to train as a programmer at the same
                    time I started to create content. I was able to
                    get the best out of both roles and merge them,
                    this allowed me to boost my career.
                  </p>
                  <p>
                    I really enjoy working in a team, contributing
                    ideas, asking what I don't know and learning it as
                    soon as possible. My professional goal is to be
                    able to work in a company with my same ideals and
                    together create products that change the lives of
                    many people.
                  </p>
                  <p>
                    Today I have a community of +30K people and 2
                    products that helped many of them. One of my
                    personal goals is to use programming to create a
                    product that brings many, many people closer to
                    achieving their goal of getting into programming.
                  </p>
                </div>
              </div>
              <SocialSideBar />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default PageAbout
