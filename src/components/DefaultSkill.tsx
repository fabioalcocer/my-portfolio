import { ICONS } from '../icons/IndexIcons'
import type { Skill } from '@/app/types'

type Props = {
  skill: Skill
}

function DefaultSkill ({ skill }: Props) {
  return (
    <a
      href={skill.link}
      target='_blank'
      rel='noreferrer'
      title={skill.name}
    >
      <div className='relative flex min-h-[90px] min-w-[90px] max-w-[222px] cursor-pointer items-center gap-4 rounded-xl border border-indigo-300/50 p-4 shadow-inner transition-all duration-300 hover:-translate-y-2 hover:bg-indigo-300/50 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:bg-zinc-600/30 dark:hover:shadow-transparent md:min-h-[98px] md:py-5 md:pr-8'>
        <span
          className={`absolute right-3 top-3 hidden rounded-full md:block ${skill.color} p-[5px]`}
        />
        <div className=''>{ICONS[skill?.name]}</div>
        <h3 className='hidden text-xl font-semibold text-zinc-100 dark:text-zinc-100 md:block'>
          {skill.name}
        </h3>
        {/* <p className='px-5 text-center text-sm text-zinc-100 dark:text-zinc-300 sm:text-base'>
          {skill?.description}
        </p> */}
      </div>
    </a>
  )
}

export default DefaultSkill
