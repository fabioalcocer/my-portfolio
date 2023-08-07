'use client'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  children: React.ReactNode
}

function Container ({ children }: Props) {
  return (
    <motion.main
      layout
      className='mt-28 flex grow flex-col gap-9 md:mt-32'
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
