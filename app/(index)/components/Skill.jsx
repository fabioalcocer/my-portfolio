import ExpressIcon from '../icons/ExpressIcon'
import FigmaIcon from '../icons/FigmaIcon'
import GitIcon from '../icons/GitIcon'
import MongoIcon from '../icons/MongoIcon'
import MySqlIcon from '../icons/MySqlIcon'
import NextjsIcon from '../icons/NextjsIcon'
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
  Figma: <FigmaIcon />
}

function Skill ({ skill }) {
  return (
    <div className='relative flex max-w-[346px] flex-col items-center gap-4 rounded-xl border border-zinc-100 p-6 shadow-inner shadow-zinc-800 transition-shadow duration-500 hover:shadow-transparent dark:border-zinc-700/40'>
      <span
        className={`absolute top-4 left-4 rounded-full ${skill.color} p-[6px]`}
      />
      {ICONS[skill.name]}
      <h3 className='flex text-xl font-semibold text-zinc-900 dark:text-zinc-100'>
        {skill.name}
      </h3>

      <p className='px-5 text-center text-sm text-zinc-600 dark:text-zinc-300 sm:text-base'>
        {skill.description}
      </p>
    </div>
  )
}

export default Skill
