import Container from 'app/(index)/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdReturnLeft } from 'react-icons/io'
import Book2 from '../(index)/assets/book2.png'
import Book from '../(index)/assets/book.png'

function PageBook () {
  return (
    <Container>
      <div className='sm:px-8'>
        <div className='mb-12 flex items-center justify-between px-0 lg:px-16'>
          <h2 className='flex w-max flex-col pb-4 text-3xl font-bold leading-10 tracking-tighter text-zinc-100 dark:text-zinc-100 sm:pb-6 md:text-6xl'>
            My E-Books
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
        <div className='mx-auto flex flex-col items-center gap-10 md:justify-center lg:flex-row lg:px-16'>
          <a
            href='https://fabioalcocer.gumroad.com/'
            target='_blank'
            rel='noreferrer'
          >
            <div className='duration-400 flex max-w-md cursor-pointer flex-col overflow-hidden rounded-xl border border-indigo-300/50 bg-sky-200/20 p-0 shadow-inner transition-all hover:-translate-y-4 hover:bg-sky-300/40 dark:border-zinc-700/40 dark:bg-transparent dark:shadow-zinc-800 dark:hover:bg-zinc-600/30 dark:hover:shadow-transparent'>
              <div className='flex-1'>
                <div className='relative h-72'>
                  <Image
                    className='object-cover'
                    fill
                    src={Book2}
                    alt='from zero to success'
                  />
                </div>
              </div>
              <div className='flex flex-1 flex-col gap-5 p-5 py-7'>
                <div className='flex items-center gap-3'>
                  <h2 className='flex max-h-16 overflow-hidden text-2xl font-semibold text-zinc-100 dark:text-zinc-100'>
                    De 0 al éxito: Guía completa para convertirse en
                    desarrollador
                  </h2>
                </div>
                <ul className='flex gap-3 text-xs text-zinc-200 dark:text-zinc-200 md:text-[13px]'>
                  <li className='rounded-sm border p-1 px-4 font-semibold'>
                    Formación
                  </li>
                  <li className='rounded-sm border p-1 px-4 font-semibold'>
                    Consejos
                  </li>
                </ul>
                <p className='text-sm text-zinc-200 dark:text-zinc-300 sm:text-base'>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quia, deserunt vel fuga ea ut laborum hic quos
                  quam harum explicabo libero, aliquam nam excepturi
                  error deleniti eligendi nobis corporis quisquam!
                </p>
                <div className='mt-4 flex h-5 items-center justify-between md:mt-6'>
                  <p className='text-sm font-medium text-zinc-200 dark:text-zinc-100 md:text-base'>
                    Released on February 2023
                  </p>
                  <p className='text-sm font-semibold text-emerald-500 md:text-base'>
                    Work in Progress
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a
            href='https://fabioalcocer.gumroad.com/l/lylixk'
            target='_blank'
            rel='noreferrer'
          >
            <div className='duration-400 flex max-w-md cursor-pointer flex-col overflow-hidden rounded-xl border border-indigo-300/50 bg-sky-200/20 p-0 shadow-inner transition-all hover:-translate-y-4 hover:bg-sky-300/40 dark:border-zinc-700/40 dark:bg-transparent dark:shadow-zinc-800 dark:hover:bg-zinc-600/30 dark:hover:shadow-transparent'>
              <div className='flex-1'>
                <div className='relative h-72'>
                  <Image
                    className='object-cover'
                    fill
                    src={Book}
                    alt='500 resources for developers'
                  />
                </div>
              </div>
              <div className='flex flex-1 flex-col gap-5 p-5 py-7'>
                <div className='flex items-center gap-3'>
                  <h2 className='flex max-h-16 overflow-hidden text-2xl font-semibold text-zinc-100 dark:text-zinc-100'>
                    The Paradise of Developers, Designers and Leaders
                  </h2>
                </div>
                <ul className='flex gap-3 text-xs text-zinc-200 dark:text-zinc-200 md:text-[13px]'>
                  <li className='rounded-sm border p-1 px-4 font-semibold'>
                    Recursos
                  </li>
                  <li className='rounded-sm border p-1 px-3 font-semibold'>
                    Herramientas
                  </li>
                </ul>
                <p className='text-sm text-zinc-200 dark:text-zinc-300 sm:text-base'>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quia, deserunt vel fuga ea ut laborum hic quos
                  quam harum explicabo libero, aliquam nam excepturi
                  error deleniti eligendi nobis corporis quisquam!
                </p>
                <div className='mt-4 flex h-5 items-center justify-between md:mt-6'>
                  <p className='text-sm font-medium text-zinc-200 dark:text-zinc-100 md:text-base'>
                    Released on January 2022
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Container>
  )
}

export default PageBook
