import Experience from './Experience'
import Footer from './Footer'
import Form from './Form'
import Header from './Header'
import Hero from './Hero'
import Projects from './Projects'

function Main () {
  return (
    <div className='mx-auto min-h-screen max-w-7xl bg-zinc-900 bg-opacity-90 px-4'>
      <Header />
      <main className='flex flex-col gap-5'>
        <Hero />
        <Experience />
        <Form />

        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default Main
