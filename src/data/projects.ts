import type { Project } from '@/app/types'

export const projects: Project[] = [
  {
    id: 1,
    name: 'E-Commerce Fullstack',
    stack: [
      {
        name: 'React',
        color: 'dark:border-sky-500/40'
      },
      {
        name: 'ContextAPI',
        color: 'dark:border-teal-200/40'
      },
      {
        name: 'Express.js',
        color: 'dark:border-green-500/40'
      },
      {
        name: 'Tailwind',
        color: 'dark:border-sky-400/40'
      }
    ],
    description:
      'Developed with the MERN stack, this app allows you to store your products in a database and consume them from the Front-end, it has a cart, local storage, connection with Whatsapp API. Made for real use.',
    img: 'https://res.cloudinary.com/daobmfotr/image/upload/v1675057530/projects/1675057527169-nize_qwppul.webp',
    url: 'https://e-commerce-x.vercel.app/',
    progress: false,
    date: 'During 2022'
  },
  {
    id: 2,
    name: 'Real Time Chat',
    stack: [
      {
        name: 'React.js',
        color: 'dark:border-sky-500/40'
      },
      {
        name: 'React Router',
        color: 'dark:border-red-600/30'
      },
      {
        name: 'Sass',
        color: 'dark:border-rose-500/30'
      },
      {
        name: 'Firebase',
        color: 'dark:border-yellow-400/30'
      }
    ],
    description:
      'Real-time chat that allows sending messages and files in real time, allows user registration and login. Developed with Firebase for the backend, React for the frontend and Sass for the styles.',
    img: 'https://res.cloudinary.com/daobmfotr/image/upload/v1675884698/projects/1675884578417-really-nize_t68kjp.webp',
    url: 'https://chat-real-fas.vercel.app/',
    progress: false,
    date: 'Since January 2023'
  },
  {
    id: 3,
    name: 'AI app: Thoughts of gratitude',
    stack: [
      {
        name: 'Next.js',
        color: 'dark:border-zinc-50/40'
      },
      {
        name: 'TypeScript',
        color: 'dark:border-blue-500/40'
      },
      {
        name: 'OpenAI API',
        color: 'dark:border-emerald-400/40'
      },
      {
        name: 'ChakraUI',
        color: 'dark:border-teal-300/40'
      }
    ],
    description:
      'This app makes use of the API offered by OpenAI to generate compliments and words of gratitude to people, places, pets or things. Developed with Next.js, TypeScript, ChakraUI and Formik.',
    img: 'https://res.cloudinary.com/daobmfotr/image/upload/v1675902396/projects/1675902394145-godly-nize_iqrxvr.webp',
    url: 'https://gpt-api-app-thoughts.vercel.app/',
    progress: false,
    date: 'Since February 2023'
  },
  {
    id: 4,
    name: 'Youtube Tutorials Gallery ',
    stack: [
      {
        name: 'Next.js',
        color: 'dark:border-zinc-50/40'
      },
      {
        name: 'TypeScript',
        color: 'dark:border-blue-500/40'
      },
      {
        name: 'Tailwind',
        color: 'dark:border-sky-400/40'
      },
      {
        name: 'Youtube API',
        color: 'dark:border-red-500/40'
      }
    ],
    description:
      'This app allows you to create a list of videos using the ID provided by YT and store them in the LocalStorage. It also allows you to open a modal and preview the selected video. Developed with Next13, TypeScript and Tailwind. ',
    img: 'https://res.cloudinary.com/daobmfotr/image/upload/v1675917349/projects/1675917251095-mega-nize_nudmek.webp',
    url: 'https://youtube-tutorials-gallery.vercel.app/',
    progress: false,
    date: 'February 2023'
  },
  {
    id: 5,
    name: 'Encrypted Note Editor ',
    stack: [
      {
        name: 'Next.js',
        color: 'dark:border-zinc-50/40'
      },
      {
        name: 'TypeScript',
        color: 'dark:border-blue-500/40'
      },
      {
        name: 'Crypto.js',
        color: 'dark:border-yellow-400/40'
      },
      {
        name: 'TipTap',
        color: 'dark:border-purple-300/40'
      }
    ],
    description:
      'Notes application, in which the user has a text editor built with TipTap, with which he can create and store notes. Both the credentials and the user’s note information are encrypted using crypto.js. Debouncing was used to improve the performance of the application.',
    img: 'https://res.cloudinary.com/daobmfotr/image/upload/v1675904219/projects/1675904091849-epic-nize_hxupps.webp',
    url: 'https://notes-ts-crypto.vercel.app/',
    progress: true,
    date: 'Since January 2023'
  },
  {
    id: 6,
    name: 'RAWG Videogames',
    stack: [
      {
        name: 'Next.js',
        color: 'dark:border-zinc-50/40'
      },
      {
        name: 'React Query',
        color: 'dark: border-red-500/40'
      },
      {
        name: 'Zustand',
        color: 'dark: border-purple-400/50'
      },
      {
        name: 'TypeScript',
        color: 'dark:border-blue-500/40'
      },
      {
        name: 'Tailwind',
        color: 'dark:border-sky-400/40'
      }
    ],
    description: 'Application that allows you to visualize, search and add video games of all platforms and consoles, has infinite scroll, uses React query to manage the state from the server and zustand to manage the global state.',
    img: 'https://res.cloudinary.com/daobmfotr/image/upload/v1679775064/projects/prikrezxe2wzyfnm8kds.webp',
    url: 'https://videogames-library-app.vercel.app/',
    progress: true,
    date: 'Since March 2023'
  },
  {
    id: 7,
    name: 'SNK Moments Fullstack',
    stack: [
      {
        name: 'Next.js',
        color: 'dark:border-zinc-50/40'
      },
      {
        name: 'TypeScript',
        color: 'dark:border-blue-500/40'
      },
      {
        name: 'Express.js',
        color: 'dark:border-green-400/40'
      },
      {
        name: 'Tailwind',
        color: 'dark:border-sky-400/40'
      }
    ],
    description:
      'Fullstack web application that allows you to find and enjoy the most exciting and significant moments of the characters of the anime Shingeki no Kyojin. You can select a specific character and see his or her highlights throughout the series.',
    img: 'https://res.cloudinary.com/daobmfotr/image/upload/v1678820017/projects/wths3twozaotr7ugtzzb.webp',
    url: 'https://snk-moments.vercel.app/',
    progress: false,
    date: 'March 2023'
  },
  {
    id: 8,
    name: 'My Personal Portfolio',
    stack: [
      {
        name: 'Next.js',
        color: 'dark:border-zinc-50/40'
      },
      {
        name: 'Headless UI',
        color: 'dark:border-cyan-400/40'
      },
      {
        name: 'Framer Motion',
        color: 'dark:border-rose-400/40'
      },
      {
        name: 'Tailwind',
        color: 'dark:border-sky-400/40'
      }
    ],
    description:
      'My personal website designed and developed by me. Here you can learn more about me, my experience, projects and skills. You can also see the two E-Books created by me for the community, which were a success in sales.',
    img: 'https://res.cloudinary.com/daobmfotr/image/upload/v1675919501/projects/screenshot_wm6wgc.webp',
    url: 'http://fabioalcocer.vercel.app/',
    progress: true,
    date: 'Since January 2023'
  }
]
