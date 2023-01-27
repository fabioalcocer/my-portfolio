import { BsMoonStars } from 'react-icons/bs'
import MyPopover from './MenuPopover'

function Header () {
  return (
    <header className='flex justify-end pt-6 w-full max-w-5xl mx-auto'>
      <div className='flex items-center gap-4 max-w-5xl '>
        <MyPopover />
        <button className='group flex items-center rounded-full bg-white/90 px-3 py-[10px] text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'>
          <BsMoonStars className='text-base' />
        </button>
      </div>
    </header>
  )
}

export default Header
