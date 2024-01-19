import "./globals.css"

import React from "react"
import { Inter } from "@next/font/google"

import Footer from "@/components/Footer"
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] })

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Fabio Alcocer</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="I’m Fabio Alcocer. Software developer and Content
        creator."
        />
        <meta name="author" content="Fabio Alcocer" />
        <meta
          property="og:image"
          content="https://fabioalcocer.vercel.app"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="dark">
        <div
          className={`min-h-screen bg-gradient-to-bl from-indigo-800 via-indigo-400 to-indigo-900 dark:bg-gradient-to-r dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 ${inter.className}`}
        >
          <div className="w-full dark:bg-zinc-900 dark:bg-opacity-[0.6]">
            <div className="mx-auto flex min-h-screen max-w-7xl flex-col rounded-lg px-6 sm:px-8">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
