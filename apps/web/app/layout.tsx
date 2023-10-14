import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './components/providers'
import Navbar from './components/navbar'


const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Providers>
          <main className="h-screen flex flex-col ">
            <Navbar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
