import { Skill } from '@/app/types'
import { ICONS } from '../icons/IndexIcons'

type Props = {
  skill: Skill
}

function SkillIcon ({ skill }: Props) {
  return (
    <a
      href={skill.link}
      target='_blank'
      rel='noreferrer'
      title={skill.name}
    >
      <div className='relative flex max-w-[346px] cursor-pointer flex-col items-center gap-4 rounded-xl border border-indigo-300/50 p-6 shadow-inner transition-all duration-300 hover:-translate-y-2 hover:bg-indigo-300/50 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:bg-zinc-600/30 dark:hover:shadow-transparent md:min-h-[286px]'>
        <span
          className={`absolute left-4 top-4 rounded-full ${skill.color} p-[6px]`}
        />
        {ICONS[skill?.name]}
        <h3 className='flex text-xl font-semibold text-zinc-100 dark:text-zinc-100'>
          {skill.name}
        </h3>

        <p className='px-5 text-center text-sm text-zinc-100 dark:text-zinc-300 sm:text-base'>
          {skill?.description}
        </p>
      </div>
    </a>
  )
}

export default SkillIcon
