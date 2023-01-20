import { Inter } from '@next/font/google'

import Main from './components/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <div className={`bg-black min-h-screen ${inter.className}`}>
      <Main />
    </div>
  )
}
