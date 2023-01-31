'use client'
import Container from 'app/(index)/components/Container'
import Link from 'next/link'
import ContactIcon from 'app/(index)/icons/ContactIcon'
import { IoMdReturnLeft, IoMdMail } from 'react-icons/io'
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'
import { useForm } from '@formspree/react'
import MailSuccess from 'app/(index)/components/MailSuccess'

function PageContact () {
  const [state, handleSubmit] = useForm('xbjedgoy')

  return (
    <Container>
      <div className='sm:px-8'>
        <div className='mb-8 flex items-center justify-between px-0 lg:px-16'>
          <h2 className='flex w-max flex-col pb-4 text-3xl font-bold leading-10 tracking-tighter text-zinc-100 dark:text-zinc-100 sm:pb-6 md:text-6xl'>
            Contact me
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
        <div className='mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row lg:px-8'>
          <form
            action='POST'
            className='max-w-2xl flex-1 rounded-xl border border-indigo-400/30 p-6 shadow-inner transition-shadow duration-500 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:shadow-transparent md:p-8 lg:ml-6'
            onSubmit={handleSubmit}
          >
            <h2 className='flex items-center font-semibold text-zinc-100 dark:text-zinc-100'>
              <ContactIcon />
              <span className='ml-3 text-lg md:text-2xl'>
                Contact me
              </span>
            </h2>
            <p className='mt-2 pr-5 text-sm text-zinc-200 dark:text-zinc-400 sm:text-base md:text-lg'>
              Want to work with me? Send a message to{' '}
              <a
                className='font-semibold text-white hover:text-indigo-200 dark:text-zinc-200 dark:hover:text-emerald-400'
                href='mailto:fabioalcocerdev@gmail.com'
              >
                fabioalcocerdev@gmail.com
              </a>{' '}
              or use the contact form.
            </p>
            {state.succeeded
              ? (
                <MailSuccess />
                )
              : (
                <div className='mt-6 flex flex-wrap gap-4'>
                  <div className='flex w-full flex-col gap-2'>
                    <label
                      htmlFor='name'
                      className='font-semibold text-zinc-100 dark:text-zinc-100'
                    >
                      Name
                    </label>
                    <input
                      id='name'
                      type='text'
                      name='name'
                      placeholder='Ash Lynx'
                      required
                      className='min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-sm placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm sm:placeholder:text-base'
                    />
                  </div>
                  <div className='flex w-full flex-col gap-2'>
                    <label
                      htmlFor='email'
                      className='font-semibold text-zinc-100 dark:text-zinc-100'
                    >
                      Email
                    </label>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      placeholder='thebestcompany@gmail.com'
                      required
                      className='min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-sm placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm sm:placeholder:text-base'
                    />
                  </div>
                  <div className='flex w-full flex-col gap-2'>
                    <label
                      htmlFor='message'
                      className='font-semibold text-zinc-100 dark:text-zinc-100'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      type='text'
                      name='message'
                      placeholder='How i can work with you?'
                      required
                      className='min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] pb-14 shadow-md shadow-zinc-800/5 placeholder:text-sm placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm sm:placeholder:text-base'
                    />
                  </div>
                  <button
                    disabled={state.submitting}
                    type='submit'
                    className='mt-2 inline-flex flex-none items-center justify-center gap-2 rounded-md bg-emerald-500 py-2 px-4 text-base  font-bold text-zinc-100/90 text-zinc-100 outline-offset-2 transition hover:bg-emerald-600 active:bg-emerald-800 active:text-zinc-100/90 active:transition-none dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:active:bg-emerald-800 dark:active:text-zinc-100/90'
                  >
                    Get in Touch
                  </button>
                </div>
                )}
          </form>
          <div className='mt-6 ml-2 md:mt-0 md:pt-8 lg:pr-20'>
            <ul className='flex flex-col gap-4 md:gap-6' role='list'>
              <li className='flex items-center'>
                <a
                  href=''
                  className='group flex text-sm font-medium text-zinc-200 transition hover:text-teal-400 dark:text-zinc-200 dark:hover:text-teal-500 md:text-base'
                >
                  <BsTwitter className='h-5 w-5 flex-none fill-zinc-200 transition group-hover:fill-teal-400 dark:fill-zinc-400 md:h-6 md:w-6' />
                  <span class='ml-4'>Follow on Twitter</span>
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  href=''
                  className='group flex text-sm font-medium text-zinc-200 transition hover:text-teal-400 dark:text-zinc-200 dark:hover:text-teal-500 md:text-base'
                >
                  <BsGithub className='h-5 w-5 flex-none fill-zinc-200 transition group-hover:fill-teal-400 dark:fill-zinc-400 md:h-6 md:w-6' />
                  <span class='ml-4'>Follow on GitHub</span>
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  href=''
                  className='group flex text-sm font-medium text-zinc-200 transition hover:text-teal-400 dark:text-zinc-200 dark:hover:text-teal-500 md:text-base'
                >
                  <BsLinkedin className='h-5 w-5 flex-none fill-zinc-200 transition group-hover:fill-teal-400 dark:fill-zinc-400 md:h-6 md:w-6' />
                  <span class='ml-4'>Follow on LinkedIn</span>
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  href='mailto:fabioalcocerdev@gmail.com'
                  className='group flex text-sm font-medium text-zinc-200 transition hover:text-teal-400 dark:text-zinc-200 dark:hover:text-teal-500 md:text-base'
                >
                  <IoMdMail className='h-5 w-5 flex-none fill-zinc-200 transition group-hover:fill-teal-400 dark:fill-zinc-400 md:h-6 md:w-6' />
                  <span class='ml-4'>fabioalcocerdev@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default PageContact
