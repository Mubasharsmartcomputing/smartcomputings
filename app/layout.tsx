import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PerformanceOptimizer from '@/components/PerformanceOptimizer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart Computing - IT Solutions',
  description: 'Innovative IT and AI-driven solutions to empower businesses worldwide',
  icons: {
    icon: '/logo/favicon-32x32.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PerformanceOptimizer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}