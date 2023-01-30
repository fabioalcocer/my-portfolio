'use client'
import { motion } from 'framer-motion'

function Container ({ children }) {
  return (
    <motion.main
      layout
      className='flex flex-col gap-9 mt-28 md:mt-32 grow'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ ease: 'linear', duration: 0.3 }}
    >
      {children}
    </motion.main>
  )
}

export default Container
