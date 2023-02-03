'use client'
import ContactIcon from 'app/(index)/icons/ContactIcon'
import { useForm } from '@formspree/react'
import MailSuccess from './MailSuccess'

function Contact () {
  const [state, handleSubmit] = useForm('xbjedgoy')

  return (
    <div className='mt-16 flex flex-col gap-7 md:flex-row'>
      <h2 className='mr-4 flex h-max flex-col items-center self-center pr-4 pb-4 text-4xl font-bold leading-10 tracking-tighter text-zinc-100 dark:text-zinc-100 sm:pb-8 lg:px-14 lg:text-7xl'>
        Contact me!
        <span className='z-20 mt-4  inline-flex h-2 w-full animate-[rightGrow_3s_infinite_alternate] rounded-md bg-emerald-500' />
      </h2>

      <form
        action='POST'
        onSubmit={handleSubmit}
        className='mx-auto max-w-2xl flex-1 rounded-xl border border-indigo-300/30 p-6 shadow-inner transition-shadow duration-500 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:shadow-transparent md:ml-5 md:mt-10'
      >
        <h2 className='flex items-center font-semibold text-zinc-100 dark:text-zinc-100'>
          <ContactIcon />
          <span className='ml-3 text-lg md:text-2xl'>Contact me</span>
        </h2>
        <p className='mt-2 pr-5 text-sm text-zinc-200 dark:text-zinc-400 sm:text-base md:text-lg'>
          Want to work with me? Send a message to{' '}
          <a
            className='font-semibold text-white hover:text-indigo-200 dark:hover:text-emerald-400 dark:text-zinc-200'
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
                  className='min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-sm placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-teal-500/20 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm sm:placeholder:text-base'
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
                  className='min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-sm placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm sm:placeholder:text-base'
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
                  className='min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] pb-5 shadow-md shadow-zinc-800/5 placeholder:text-sm placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm sm:placeholder:text-base'
                />
              </div>
              <button
                disabled={state.submitting}
                type='submit'
                className='mt-2 inline-flex flex-none items-center justify-center gap-2 rounded-md bg-emerald-500 py-2 px-4 text-base font-bold text-zinc-50 dark:text-zinc-100 outline-offset-2 transition hover:bg-emerald-600 active:bg-emerald-800 active:text-zinc-100/90 active:transition-none dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:active:bg-emerald-800 dark:active:text-zinc-100/90'
              >
                Get in Touch
              </button>
            </div>
            )}
      </form>
    </div>
  )
}

export default Contact
