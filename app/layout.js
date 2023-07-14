import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

import localFont from 'next/font/local'

const favorit = localFont({
  src: '../public/fonts/favorit-std-light.woff',
  variable: '--font-favorit'
})

const favoritExtended = localFont({
  src: '../public/fonts/favorit-std-extended-light.woff',
  variable: '--font-favorit-extended'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${favorit.variable} ${favoritExtended.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
