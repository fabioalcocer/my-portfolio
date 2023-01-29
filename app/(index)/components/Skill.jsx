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
      <div className='duration-400 relative flex max-w-[346px]  cursor-pointer flex-col items-center gap-4 rounded-xl border border-zinc-100 p-6 shadow-inner shadow-zinc-800 transition-all hover:-translate-y-2 hover:bg-zinc-600/30 hover:shadow-transparent dark:border-zinc-700/40'>
        <span
          className={`absolute top-4 left-4 rounded-full ${skill.color} p-[6px]`}
        />
        {ICONS[skill?.name]}
        <h3 className='flex text-xl font-semibold text-zinc-900 dark:text-zinc-100'>
          {skill.name}
        </h3>

        <p className='px-5 text-center text-sm text-zinc-600 dark:text-zinc-300 sm:text-base'>
          {skill?.description}
        </p>
      </div>
    </a>
  )
}

export default Skill
