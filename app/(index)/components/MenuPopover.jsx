'use client'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { BiChevronDown, BiX } from 'react-icons/bi'

const links = [
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'Projects',
    route: '/projects'
  },
  {
    label: 'Books',
    route: '/books'
  },
  {
    label: 'Contact',
    route: '/contact'
  }
]

function MyPopover () {
  return (
    <Popover className='relative block text-white md:hidden'>
      <Popover.Button className='group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/40 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'>
        Menu
        <BiChevronDown className='ml-1 ui-open:rotate-180 ui-open:transform' />
      </Popover.Button>

      <Transition
        className='fixed inset-0 z-50'
        enter='transition duration-300 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Popover.Overlay className='fixed inset-0 z-50 bg-zinc-800/40 opacity-100 backdrop-blur-sm dark:bg-black/80' />
        <Popover.Panel className='fixed inset-x-4 top-6 z-50 mx-auto max-w-sm origin-top scale-100 rounded-3xl bg-white p-8 opacity-100 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800'>
          <div className='flex flex-row-reverse items-center justify-between'>
            <Popover.Button className='-m-1 p-1'>
              <BiX className='text-2xl' />
            </Popover.Button>
            <h2 className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>
              Navigation
            </h2>
          </div>
          <nav className='mt-6'>
            <ul className='-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300'>
              {links.map(({ label, route }) => (
                <li className='block py-3' key={label}>
                  <Popover.Button as={Link} href={route}>
                    {label}
                  </Popover.Button>
                </li>
              ))}
            </ul>
          </nav>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default MyPopover
