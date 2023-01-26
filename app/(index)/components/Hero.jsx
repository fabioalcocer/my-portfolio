import {
  BsTwitter,
  BsInstagram,
  BsGithub,
  BsLinkedin
} from 'react-icons/bs'

function Hero () {
  return (
    <div className=''>
      <div className='flex flex-col gap-4'>
        <img
          src='https://i.pinimg.com/564x/b4/c4/84/b4c484a289f0b065b471f13275be917a.jpg'
          alt='photo profile'
          className='mb-1 h-20 w-20 rounded-full'
        />
        <h1 className='text-[32px] font-bold leading-10 tracking-tighter text-zinc-100'>
          Software developer, founder, and content creator.
        </h1>
        <p className='text-base font-light leading-7 text-zinc-400'>
          I’m Fabio, a software designer and entrepreneur based in New
          York City. I’m the founder and CEO of Planetaria, where we
          develop technologies that empower regular people to explore
          space on their own terms.
        </p>
      </div>
      <div className='mt-6 flex gap-6 text-zinc-400'>
        <a href='' className='group -m-1 p-1'>
          <BsTwitter className='h-5 w-5 fill-zinc-400 hover:group-hover:fill-zinc-300' />
        </a>
        <a href='' className='group -m-1 p-1'>
          <BsInstagram className='h-5 w-5 fill-zinc-400 hover:group-hover:fill-zinc-300' />
        </a>
        <a href='' className='group -m-1 p-1'>
          <BsGithub className='h-5 w-5 fill-zinc-400 hover:group-hover:fill-zinc-300' />
        </a>
        <a href='' className='group -m-1 p-1'>
          <BsLinkedin className='h-5 w-5 fill-zinc-400 hover:group-hover:fill-zinc-300' />
        </a>
      </div>
    </div>
  )
}

export default Hero
