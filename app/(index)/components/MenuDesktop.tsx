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
    <nav className='pointer-events-auto ml-10 hidden justify-self-center md:block'>
      <ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/50 dark:text-zinc-200 dark:ring-white/10'>
        {links.map(({ label, route }) => (
          <li className='' key={label}>
            {route === path
              ? (
                <Link
                  className='relative block px-3 py-2 text-emerald-500 transition hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-400'
                  href={route}
                >
                  <motion.span
                    layoutId='underline'
                    className='absolute left-0 top-full z-50 block h-[3px] w-full rounded-sm bg-emerald-500 dark:h-[2px]'
                  />
                  {label}
                </Link>
                )
              : (
                <Link
                  className='relative block px-3 py-2 text-zinc-900 transition hover:text-emerald-500 dark:text-white dark:hover:text-emerald-400'
                  href={route}
                >
                  {label}
                </Link>
                )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuDesktop
