import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cuando Sale el Anime...',
  description:
    '¿No sabes cuándo se estrena el anime que estás esperando? En esta página podrás obtener la fecha de estreno exacta.'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
