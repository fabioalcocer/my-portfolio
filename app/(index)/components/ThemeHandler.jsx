'use client'
import { useState, useEffect } from 'react'
import { BsMoonStars, BsSun } from 'react-icons/bs'

function ThemeHandler () {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.querySelector('body').className = theme
  }, [theme])

  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <button
      className='group flex items-center rounded-full bg-white/90 px-3 py-[10px] text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/40 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'
      onClick={handleTheme}
    >
      {theme === 'light'
        ? (
          <BsSun className='text-base' />
          )
        : (
          <BsMoonStars className='text-base' />
          )}
    </button>
  )
}

export default ThemeHandler
