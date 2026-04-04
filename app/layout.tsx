import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-bebas'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const viewport: Viewport = {
  themeColor: '#FF6B35',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Randall Choc | Personal Trainer & Atleta Híbrido - Guatemala',
  description: 'Entrenador personal certificado especializado en hipertrofia, fuerza, resistencia y pérdida de grasa. Planes presenciales y online en Guatemala. Tu transformación comienza aquí.',
  keywords: ['personal trainer', 'entrenador personal', 'Guatemala', 'fitness', 'hipertrofia', 'fuerza', 'pérdida de grasa'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-dark-randall.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-randall.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon-dark-randall.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${bebasNeue.variable} ${inter.variable} font-serif antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {process.env.NODE_ENV === 'production' && <GoogleAnalytics gaId="G-1GZFC9WBXZ" />}
      </body>
    </html>
  )
}
