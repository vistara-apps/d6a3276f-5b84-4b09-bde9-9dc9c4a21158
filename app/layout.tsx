import type { Metadata } from 'next'
import { Providers } from './components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Art Provenance & Rights',
  description: 'Verify and control your AI art on Base, ensuring authentic origin and dynamic usage rights.',
  openGraph: {
    title: 'AI Art Provenance & Rights',
    description: 'Verify and control your AI art on Base',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
