import type { Skill } from '@/app/types'

export const skills: Skill[] = [
  {
    id: 10,
    name: 'Next.js',
    description:
      'The React Framework for the Web and for production.',
    color: 'bg-white',
    link: 'https://beta.nextjs.org/docs'
  },
  {
    id: 11,
    name: 'React',
    description: 'A JavaScript library for building user interfaces.',
    color: 'bg-sky-500',
    link: 'https://beta.reactjs.org/'
  },
  {
    id: 13,
    name: 'Express.js',
    description:
      'Fast, unopinionated, minimalist web framework for Node.js.',
    color: 'bg-green-500',
    link: 'https://expressjs.com/es/'
  },
  {
    id: 14,
    name: 'TypeScript',
    description:
      'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    color: 'bg-blue-600',
    link: 'https://www.typescriptlang.org/docs/handbook/jsx.html'
  },
  {
    id: 22,
    name: 'React Query',
    description:
      'Fetch, cache and update data in your React and React Native applications all without touching any "global state".',
    color: 'bg-red-500',
    link: 'https://react-query-v3.tanstack.com/'
  },
  {
    id: 12,
    name: 'Tailwind',
    description:
      'A utility-first CSS framework for rapidly building custom designs.',
    color: 'bg-emerald-400',
    link: 'https://tailwindcss.com/docs/installation'
  },
  {
    id: 15,
    name: 'MongoDB',
    description:
      'MongoDB is a document database designed for ease of application development and scaling.',
    color: 'bg-green-600',
    link: 'https://www.mongodb.com/'
  },
  {
    id: 16,
    name: 'MySQL',
    description:
      'MySQL is a relational database management system that is based on structured query language (SQL).',
    color: 'bg-blue-700',
    link: 'https://dev.mysql.com/doc/'
  },
  {
    id: 17,
    name: 'Git',
    description:
      'Git is a version control system designed to handle everything from small to very large projects with speed and efficiency.',
    color: 'bg-orange-500',
    link: 'https://git-scm.com/doc'
  }
]

export const defaultSkills = [
  {
    id: 19,
    name: 'Python',
    description:
      'Python is a popular programming language. Python can be used on a server to create web applications and much more',
    color: 'bg-yellow-500',
    link: 'https://docs.python.org/3/'
  },
  {
    id: 20,
    name: 'Django',
    description:
      'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.',
    color: 'bg-emerald-500',
    link: 'https://www.djangoproject.com/'
  },
  {
    id: 21,
    name: 'Firebase',
    description:
      'Firebase provides tools to grow your app and business & global enterprises. Get your app managed backend infrastructure.',
    color: 'bg-yellow-400',
    link: 'https://firebase.google.com/'
  },
  {
    id: 23,
    name: 'Java',
    description:
      'Java is a programming language. It reduces costs, shortens development times and improves application services.',
    color: 'bg-orange-500',
    link: 'https://www.java.com/'
  },
  {
    id: 24,
    name: 'Redux',
    description:
      'Redux is a predictable JavaScript application state container. It helps you write applications that behave consistently.',
    color: 'bg-violet-500',
    link: 'https://redux.js.org/'
  },
  {
    id: 25,
    name: 'Vitest',
    description:
      ' Vite Powered. Reuse Vite config, transformers, resolvers, and plugins - consistent across your app and tests.',
    color: 'bg-green-400',
    link: 'https://vitest.dev/'
  }
]
