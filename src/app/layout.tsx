import type { Metadata } from 'next'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'

export const metadata: Metadata = {
  title: 'Outpro.India — Redefining Digital Excellence',
  description: 'Outpro.India is a premium corporate solutions firm delivering transformative digital experiences, technology strategy, and enterprise-grade services.',
  keywords: 'digital transformation, corporate solutions, web development, technology strategy, India',
  openGraph: {
    title: 'Outpro.India — Redefining Digital Excellence',
    description: 'Premium corporate solutions firm delivering transformative digital experiences.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise grid-bg">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
