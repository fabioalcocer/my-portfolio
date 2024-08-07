import Link from "next/link"

function Footer() {
  return (
    <footer className="mt-28">
      <div className="sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="border-t border-zinc-100/50 pb-12 pt-10 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex gap-6 text-sm font-medium text-zinc-200 dark:text-zinc-200">
                    <Link
                      href="/about"
                      className="transition hover:text-emerald-400/90 dark:hover:text-teal-400"
                    >
                      About
                    </Link>
                    <Link
                      href="/projects"
                      className="transition hover:text-teal-500 dark:hover:text-teal-400"
                    >
                      Projects
                    </Link>
                    <Link
                      href="/books"
                      className="transition hover:text-teal-500 dark:hover:text-teal-400"
                    >
                      Books
                    </Link>
                    <Link
                      href="/contact"
                      className="transition hover:text-teal-500 dark:hover:text-teal-400"
                    >
                      Contact
                    </Link>
                  </div>
                  <p className="text-sm text-zinc-200 dark:text-zinc-400">
                    © 2024 Created by{" "}
                    <a
                      className="hover:text-zinc-200 font-medium transition-colors duration-300"
                      href="https://www.linkedin.com/in/fabio-alcocer/"
                      target="_blank"
                    >
                      Fabio Alcocer.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
