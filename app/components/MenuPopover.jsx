'use client'

import { Popover, Transition } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi'

function MyPopover () {
  return (
    <Popover className='relative text-white'>
      <Popover.Button className='group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'>
        Menu
        <BiChevronDown className='ml-1 ui-open:rotate-180 ui-open:transform' />
      </Popover.Button>
      <Popover.Overlay className='fixed inset-0 bg-black opacity-50' />

      <Transition
        enter='transition duration-300 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Popover.Panel className='absolute z-10'>
          <div className='grid grid-cols-2 mt-10'>
            <a href='/analytics'>Analytics</a>
            <a href='/engagement'>Engagement</a>
            <a href='/security'>Security</a>
            <a href='/integrations'>Integrations</a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default MyPopover
