import { DownloadCloud } from "lucide-react"
import JobsCarousel from "./JobsCarousel"

function Experience() {
  return (
    <div className="mb-5 mt-16 flex flex-col gap-7 md:px-8 lg:px-14">
      <h2 className="mx-auto flex h-max w-max flex-col items-center pb-4 pr-4 text-4xl font-bold leading-10 tracking-tighter text-zinc-100 dark:text-zinc-100 sm:pb-6 md:mx-0 md:text-6xl">
        Experience
        <span className="bg-primary z-20 mt-4 inline-flex h-2 w-full animate-[rightGrow_2s_infinite_alternate] rounded-md bg-emerald-500" />
      </h2>

      <main className="mx-auto flex flex-col gap-4">
        <JobsCarousel />

        <a
          href="https://drive.google.com/file/d/1mOPGKUdszOb5LwAVyrvrsm0KfM0gWuRk/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="relative max-w-max mx-auto mt-2 overflow-hidden rounded-xl bg-black px-28 py-6 ring-0 ring-offset-black will-change-transform focus:outline-none focus:ring-1"
        >
          <span className="absolute inset-px z-10 flex items-center justify-center gap-3 rounded-xl bg-emerald-400 bg-gradient-to-t from-emerald-500 text-sm text-zinc-50 transition-all duration-500 hover:bg-emerald-500 dark:bg-black dark:from-zinc-900 dark:hover:bg-zinc-900">
            Download CV
            <DownloadCloud className="stroke-zinc-50 text-[30px] group-hover:stroke-zinc-100 group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
          </span>
          <span
            aria-hidden
            className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-green-700 before:via-emerald-500 before:to-blue-400"
          />
        </a>
      </main>
    </div>
  )
}

export default Experience
