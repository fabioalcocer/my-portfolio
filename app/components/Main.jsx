import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'

function Main () {
  return (
    <>
      <main className='bg-zinc-900 bg-opacity-90 max-w-7xl mx-auto min-h-screen px-4'>
        <Header />
        <Hero />
        <Footer />
      </main>
    </>
  )
}

export default Main
