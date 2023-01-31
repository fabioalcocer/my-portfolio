'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

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

function MenuDesktop () {
  const path = usePathname()

  return (
    <nav className='pointer-events-auto hidden md:block justify-self-center ml-10'>
      <ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/50 dark:text-zinc-200 dark:ring-white/10'>
        {links.map(({ label, route }) => (
          <li className='' key={label}>
            <Link className='relative block px-3 py-2 transition hover:text-emerald-500 dark:hover:text-emerald-400' href={route}>
              {route === path && (
                <motion.span
                  layoutId='underline'
                  className='absolute left-0 z-50 top-full block h-[3px] dark:h-[2px] w-full rounded-sm bg-emerald-500'
                />
              )}
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuDesktop
