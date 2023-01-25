import ContactIcon from 'app/(index)/icons/ContactIcon'

function Form () {
  return (
    <form
      action=''
      className='rounded-2xl border border-zinc-100 p-6 shadow-inner shadow-zinc-800 transition-shadow duration-500 hover:shadow-transparent dark:border-zinc-700/40'
    >
      <h2 className='flex font-semibold text-zinc-900 dark:text-zinc-100'>
        <ContactIcon />
        <span className='ml-3 text-lg'>Contact me</span>
      </h2>
      <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400 sm:text-base'>
        Want to work with me? Send a message to{' '}
        <a
          className='font-semibold text-zinc-200'
          href='mailto:fabioalcocerdev@gmail.com'
        >
          fabioalcocerdev@gmail.com
        </a>{' '}
        or use the contact form.
      </p>
      <div className='mt-6 flex'>
        <input
          type='email'
          placeholder='Email address'
          required
          className='min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm'
        />
        <button
          type='submit'
          className='ml-4 inline-flex flex-none items-center justify-center gap-2 rounded-md bg-zinc-800 py-2 px-3 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70'
        >
          Send
        </button>
      </div>
    </form>
  )
}

export default Form
