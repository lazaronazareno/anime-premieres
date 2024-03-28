import { Advent_Pro, Dosis } from 'next/font/google'
import './globals.css'
import LayoutWrapper from '@/components/LayoutWrapper'

export const dosisFont = Dosis({ subsets: ['latin'] })
export const adventProFont = Advent_Pro({ subsets: ['latin'] })

export const metadata = {
  title: 'Cuando Sale el Anime...',
  description:
    '¿No sabes cuándo se estrena el anime que estás esperando? En esta página podrás obtener la fecha de estreno exacta.'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`relative ${dosisFont.className}`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
