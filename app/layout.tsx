import './globals.css'
import type { Metadata } from 'next'
import {  JetBrains_Mono as JetBrainsMono } from 'next/font/google'
import Providers from './_components/providers'
import Navbar from './_components/navbar'



const jetbrains = JetBrainsMono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TrustBytes Profiles',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {

  return (
    <html lang="en">
      <body className={jetbrains.className}>
        <Providers>
          <main className="flex flex-col bg-gradient-to-bl from-slate-900 via-darker to-darker  text-white h-screen overflow-y-auto">
            <Navbar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}