import Link from 'next/link'
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
  return (
    <nav className='pointer-events-auto hidden md:block justify-self-center ml-10'>
      <ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/50 dark:text-zinc-200 dark:ring-white/10'>
        {links.map(({ label, route }) => (
          <li className='' key={label}>
            <Link className='relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400' href={route}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuDesktop
