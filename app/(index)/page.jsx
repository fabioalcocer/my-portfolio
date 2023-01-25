import { Inter } from '@next/font/google'

import Container from './components/Container'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <div className={`bg-black min-h-screen ${inter.className}`}>
      <Container />
    </div>
  )
}
