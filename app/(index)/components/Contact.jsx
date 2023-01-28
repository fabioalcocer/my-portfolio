import ContactIcon from 'app/(index)/icons/ContactIcon'

function Contact () {
  return (
    <div className='mt-16 flex gap-7 flex-col md:flex-row'>
      <h2 className='pr-4 mr-4 flex flex-col h-max self-center pb-4 text-4xl font-bold leading-10 tracking-tighter text-zinc-100 sm:pb-8 lg:text-8xl items-center'>
        Contact me!
        <span className='mt-4 animate-[rightGrow_3s_infinite_alternate]  bg-emerald-500 w-full inline-flex h-2 rounded-md z-20' />
      </h2>

      <form
        action='POST'
        className='md:ml-5 mx-auto md:mt-10 max-w-2xl flex-1 rounded-xl border border-zinc-100 p-6 shadow-inner shadow-zinc-800 transition-shadow duration-500 hover:shadow-transparent dark:border-zinc-700/40'
      >
        <h2 className='flex font-semibold text-zinc-900 dark:text-zinc-100 items-center'>
          <ContactIcon />
          <span className='ml-3 text-lg md:text-2xl'>Contact me</span>
        </h2>
        <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base pr-5 md:text-lg'>
          Want to work with me? Send a message to{' '}
          <a
            className='font-semibold text-zinc-200'
            href='mailto:fabioalcocerdev@gmail.com'
          >
            fabioalcocerdev@gmail.com
          </a>{' '}
          or use the contact form.
        </p>
        <div className='mt-6 flex flex-wrap gap-4'>
          <div className='flex w-full flex-col gap-2'>
            <label
              htmlFor='name'
              className='font-semibold text-zinc-900 dark:text-zinc-100'
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
              className='font-semibold text-zinc-900 dark:text-zinc-100'
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
              className='font-semibold text-zinc-900 dark:text-zinc-100'
            >
              Message
            </label>
            <textarea
              id='message'
              type='text'
              name='message'
              placeholder='How i can work with you?'
              required
              className='min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-sm placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm sm:placeholder:text-base'
            />
          </div>
          <button
            type='submit'
            className='mt-2 inline-flex flex-none items-center justify-center gap-2 rounded-md bg-zinc-800 py-2 px-4 text-base font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70'
          >
            Get in Touch
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
