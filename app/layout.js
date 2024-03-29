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
    <html lang='es'>
      <link
        rel='apple-touch-icon'
        sizes='76x76'
        href='/static/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/static/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/static/favicon-16x16.png'
      />
      <link rel='manifest' href='/static/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/static/safari-pinned-tab.svg'
        color='#5bbad5'
      />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta
        name='theme-color'
        media='(prefers-color-scheme: light)'
        content='#fff'
      />
      <meta
        name='theme-color'
        media='(prefers-color-scheme: dark)'
        content='#000'
      />
      <meta
        name='google-site-verification'
        content='7oQ2sshvhrZ61E1a9pR7Q53w1gapsYMwZgqE0_q70-c'
      />
      <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
      <body className={`relative ${dosisFont.className}`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
