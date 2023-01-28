import { BsMoonStars } from 'react-icons/bs'
import MenuDesktop from './MenuDesktop'
import MyPopover from './MenuPopover'

function Header () {
  return (
    <header className='fixed top-0 left-0 right-0 z-30 flex w-full items-center py-4 backdrop-blur-sm transition-all duration-200'>
      <div className='mx-auto flex w-full max-w-5xl items-center justify-between gap-4 pr-5'>
        <div className='pl-10' />
        <MenuDesktop />
        <div className='flex items-center gap-5'>
          <MyPopover />
          <button className='group flex items-center rounded-full bg-white/90 px-3 py-[10px] text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/40 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'>
            <BsMoonStars className='text-base' />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
