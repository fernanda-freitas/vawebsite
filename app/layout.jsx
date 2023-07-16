import './globals.css'
import ClientComponent from './components/clientComponent'

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
  title: 'V-a studio',
  description: 'Work website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${favorit.variable} ${favoritExtended.variable}`}>
        <ClientComponent content={children}></ClientComponent>
      </body>
    </html>
  )
}
