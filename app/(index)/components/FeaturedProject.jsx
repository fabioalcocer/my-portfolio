import Image from 'next/image'

function FeaturedProject ({ project }) {
  return (
    <div
      className='flex max-w-sm flex-col overflow-hidden rounded-xl border hover:bg-zinc-800 cursor-pointer hover:-translate-y-4 transition-all border-zinc-100 p-0 shadow-inner shadow-zinc-800  duration-400 hover:shadow-transparent dark:border-zinc-700/40'
    >
      <div className='flex-1'>
        <div className='relative h-72'>
          <Image
            className='object-cover'
            fill
            src={project.img}
            alt='Ecommerce project screenshot'
          />
        </div>
      </div>

      <div className='flex flex-1 flex-col gap-4 p-5'>
        <div className='flex items-center gap-3'>
          <h2 className='flex text-xl font-semibold text-zinc-900 dark:text-zinc-100'>
            {project.name}
          </h2>
        </div>

        <ul className='flex gap-3 text-xs text-zinc-200'>
          {project.stack.map((technology) => (
            <li
              className={` rounded-sm border ${technology.color} p-1 font-semibold`}
              key={technology}
            >
              {technology.name}
            </li>
          ))}
        </ul>

        <p className='text-sm text-zinc-600 dark:text-zinc-300 sm:text-base'>
          {project.description}
        </p>

        <div className='mt-8 flex justify-between'>
          <p className='text-emerald-500 font-semibold'>{project.progress}</p>
          <p className='text-sm font-medium text-zinc-900 dark:text-zinc-100'>{project.date}</p>
        </div>

        {/* TODO Use this for the projects section */}
        {/* <div className='mt-2 flex items-center gap-3'>
          <a className='inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-zinc-800 py-2 px-3 text-sm font-semibold text-zinc-100 outline-offset-2 transition hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 active:transition-none dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70'>
            Open App
          </a>
          <a
            href=''
            className='group inline-flex w-full flex-1 items-center justify-center gap-2 rounded-md bg-zinc-50 py-2 px-3 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70'
          >
            View more
          </a>
        </div> */}
      </div>
    </div>
  )
}

export default FeaturedProject
