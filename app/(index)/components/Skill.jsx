import DjangoIcon from '../icons/DjangoIcon'
import ExpressIcon from '../icons/ExpressIcon'
import FigmaIcon from '../icons/FigmaIcon'
import GitIcon from '../icons/GitIcon'
import MongoIcon from '../icons/MongoIcon'
import MySqlIcon from '../icons/MySqlIcon'
import NextjsIcon from '../icons/NextjsIcon'
import PythonIcon from '../icons/PythonIcon'
import ReactIcon from '../icons/ReactIcon'
import TailwindIcon from '../icons/TailwindIcon'
import TypeScriptIcon from '../icons/TypeScriptIcon'

const ICONS = {
  'Next.js': <NextjsIcon />,
  'Express.js': <ExpressIcon />,
  React: <ReactIcon />,
  Tailwind: <TailwindIcon />,
  TypeScript: <TypeScriptIcon />,
  MongoDB: <MongoIcon />,
  MySQL: <MySqlIcon />,
  Git: <GitIcon />,
  Figma: <FigmaIcon />,
  Django: <DjangoIcon />,
  Python: <PythonIcon />
}

function Skill ({ skill }) {
  return (
    <a href={skill.link} target='_blank' rel='noreferrer'>
      <div className='duration-400 relative flex min-h-[286px] max-w-[346px] cursor-pointer flex-col items-center gap-4 rounded-xl border border-indigo-300/50 p-6 shadow-inner transition-all hover:-translate-y-2 hover:bg-zinc-300/50 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:bg-zinc-600/30 dark:hover:shadow-transparent'>
        <span
          className={`absolute top-4 left-4 rounded-full ${skill.color} p-[6px]`}
        />
        {ICONS[skill?.name]}
        <h3 className='flex text-xl font-semibold text-zinc-100 dark:text-zinc-100'>
          {skill.name}
        </h3>

        <p className='px-5 text-center text-sm text-zinc-200 dark:text-zinc-300 sm:text-base'>
          {skill?.description}
        </p>
      </div>
    </a>
  )
}

export default Skill
