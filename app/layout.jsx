import './globals.css'
import { Inter } from '@next/font/google'
import Footer from './(index)/components/Footer'
import Header from './(index)/components/Header'
import Container from './(index)/components/Container'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <div className={`min-h-screen bg-black ${inter.className}`}>
          <div className='mx-auto flex min-h-screen max-w-7xl flex-col bg-zinc-900 bg-opacity-90 px-4'>
            <Header />
            <Container>{children}</Container>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
