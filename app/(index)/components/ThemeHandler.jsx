'use client'
import { useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

function ThemeHandler () {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')
  const [checkedTheme, setCheckedTheme] = useLocalStorage('checkedTheme', false)

  useEffect(() => {
    document.querySelector('body').className = theme
  }, [theme])

  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
    theme === 'light' ? setCheckedTheme(false) : setCheckedTheme(true)
  }

  return (
    <label className='switch'>
      <input type='checkbox' onClick={handleTheme} defaultChecked={checkedTheme} />
      <span className='slider' />
    </label>
  )
}

export default ThemeHandler
