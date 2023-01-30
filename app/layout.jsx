import './globals.css'
import { Inter } from '@next/font/google'
import Footer from './(index)/components/Footer'
import Header from './(index)/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head />
      <body className='dark'>
        <div
          className={`min-h-screen  bg-gradient-to-r from-gray-100 to-gray-300 dark:bg-gradient-to-r dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 ${inter.className}`}
        >
          <div className='mx-auto flex min-h-screen max-w-7xl flex-col rounded-lg bg-zinc-100 bg-opacity-80 px-6 dark:bg-zinc-900 dark:bg-opacity-[0.85] sm:px-8'>
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
