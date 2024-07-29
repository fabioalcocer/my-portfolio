"use client"

import "swiper/css"
import "swiper/css/pagination"
import "../app/globals.css"

import Image from "next/image"
import SuitcaseIcon from "@/icons/SuitcaseIcon"
import { Autoplay, Mousewheel, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { cn } from "@/lib/utils"

import { JOBS_DATA } from "../data/jobs"

function JobsCarousel() {
  return (
    <>
      <div className="lg:flex hidden">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          loop={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination, Autoplay]}
          className="w-full h-full max-h-96"
        >
          {JOBS_DATA.map((job, index) => (
            <SwiperSlide key={index}>
              <div className="mx-auto flex flex-col gap-6 lg:flex-row bg-transparent">
                <div className="flex max-w-xl flex-1 flex-col rounded-2xl border border-indigo-400/70 p-6 shadow-inner transition-shadow duration-500 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:shadow-transparent md:gap-2">
                  <div className="flex items-center gap-3">
                    <SuitcaseIcon />
                    <h2 className="flex text-lg font-semibold text-zinc-100 dark:text-zinc-100 md:text-xl">
                      Work experience
                    </h2>
                  </div>
                  <ul className="mt-6 flex flex-col gap-4">
                    <li className="flex items-center gap-4">
                      <div className="relative mt-1 flex h-14 w-14 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 md:h-24 md:w-24">
                        <Image
                          width={35}
                          className="md:h-[74px] md:w-[74px] rounded-full"
                          src={job.logo}
                          alt="Logo empresa"
                        />
                      </div>
                      <div className="flex w-full flex-col gap-1">
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noreferrer"
                          className={cn(
                            `duration-300 transition-colors ${job.color} dark:${job.color}, hover:text-zinc-100`
                          )}
                        >
                          <p className="w-full flex-none font-medium  md:text-[26px] md:font-bold">
                            {job.name}
                          </p>
                        </a>
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <p className="text-sm text-zinc-100 dark:text-zinc-400 md:text-lg">
                            {job.location}
                          </p>
                          <p className="text-sm text-zinc-200 dark:text-zinc-400 md:text-base">
                            {job.date}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <p className="mt-2 text-sm text-zinc-100 dark:text-zinc-300/90 sm:text-base md:pl-1 md:text-base">
                    {job.description}
                  </p>
                </div>
                <div className="hidden lg:flex max-w-xl flex-1 flex-col rounded-2xl border border-indigo-400/70 p-6 shadow-inner transition-shadow duration-500 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:shadow-transparent md:gap-2">
                  <div className="flex items-center gap-3">
                    <SuitcaseIcon />
                    <h2 className="flex text-lg font-semibold text-zinc-100 dark:text-zinc-100 md:text-xl">
                      Responsibilities
                    </h2>
                  </div>
                  <div className="mt-3 flex flex-col gap-4">
                    <div className="flex w-full flex-col gap-1">
                      <p className="w-full flex-none font-medium text-zinc-100 dark:text-zinc-100 md:text-[26px] md:font-bold">
                        {job.name}
                      </p>
                      <p className="text-sm text-zinc-200 dark:text-zinc-400 md:text-lg">
                        {job.title}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-2 flex list-disc flex-col gap-3 pl-5 text-zinc-100 dark:text-zinc-300/90">
                    {job.responsabilities.map((responsability, index) => (
                      <li className="text-sm md:text-[15px]" key={index}>
                        {responsability}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="lg:hidden flex flex-col items-center gap-6">
        {JOBS_DATA.map((job, index) => (
          <div className="mx-auto flex flex-col gap-6 lg:flex-row bg-transparent" key={index}>
            <div className="flex max-w-xl flex-1 flex-col rounded-2xl border border-indigo-400/70 p-6 shadow-inner transition-shadow duration-500 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:shadow-transparent md:gap-2">
              <div className="flex items-center gap-3">
                <SuitcaseIcon />
                <h2 className="flex text-lg font-semibold text-zinc-100 dark:text-zinc-100 md:text-xl">
                  Work experience
                </h2>
              </div>
              <ul className="mt-6 flex flex-col gap-4">
                <li className="flex items-center gap-4">
                  <div className="relative mt-1 flex h-14 w-14 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 md:h-24 md:w-24">
                    <Image
                      width={35}
                      className="md:h-[74px] md:w-[74px] rounded-full"
                      src={job.logo}
                      alt="Logo empresa"
                    />
                  </div>
                  <div className="flex w-full flex-col gap-1">
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        `duration-300 transition-colors ${job.color} dark:${job.color}, hover:text-zinc-100`
                      )}
                    >
                      <p className="w-full flex-none font-medium  md:text-[26px] md:font-bold">
                        {job.name}
                      </p>
                    </a>
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <p className="text-sm text-zinc-100 dark:text-zinc-400 md:text-lg">
                        {job.location}
                      </p>
                      <p className="text-sm text-zinc-200 dark:text-zinc-400 md:text-base">
                        {job.date}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <p className="mt-2 text-sm text-zinc-100 dark:text-zinc-300/90 sm:text-base md:pl-1 md:text-base">
                {job.description}
              </p>
            </div>
            <div className="hidden lg:flex max-w-xl flex-1 flex-col rounded-2xl border border-indigo-400/70 p-6 shadow-inner transition-shadow duration-500 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:shadow-transparent md:gap-2">
              <div className="flex items-center gap-3">
                <SuitcaseIcon />
                <h2 className="flex text-lg font-semibold text-zinc-100 dark:text-zinc-100 md:text-xl">
                  Responsibilities
                </h2>
              </div>
              <div className="mt-3 flex flex-col gap-4">
                <div className="flex w-full flex-col gap-1">
                  <p className="w-full flex-none font-medium text-zinc-100 dark:text-zinc-100 md:text-[26px] md:font-bold">
                    {job.name}
                  </p>
                  <p className="text-sm text-zinc-200 dark:text-zinc-400 md:text-lg">
                    {job.title}
                  </p>
                </div>
              </div>
              <ul className="mt-2 flex list-disc flex-col gap-3 pl-5 text-zinc-100 dark:text-zinc-300/90">
                {job.responsabilities.map((responsability, index) => (
                  <li className="text-sm md:text-[15px]" key={index}>
                    {responsability}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default JobsCarousel
