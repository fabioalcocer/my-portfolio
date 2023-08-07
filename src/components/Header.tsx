import MenuDesktop from './MenuDesktop'
import MyPopover from './MenuPopover'
import ThemeHandler from './ThemeHandler'

function Header () {
  return (
    <header className='fixed inset-x-0 top-0 z-30 mx-auto flex w-full max-w-7xl items-center py-4 backdrop-blur-sm transition-all duration-200'>
      <div className='mx-auto flex w-full max-w-5xl items-center justify-between gap-4 pr-5'>
        <div className='pl-10' />
        <MenuDesktop />
        <div className='flex items-center gap-5'>
          <MyPopover />
          <ThemeHandler />
        </div>
      </div>
    </header>
  )
}

export default Header
