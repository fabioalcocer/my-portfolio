function Container ({ children }) {
  return (
    <main className='flex flex-col gap-9 mt-28 md:mt-32 grow'>
      {children}
    </main>
  )
}

export default Container
