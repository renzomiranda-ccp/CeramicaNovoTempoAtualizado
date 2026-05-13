import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { CartProvider } from '@/components/cart/cart-provider'
import { WhatsAppButton } from '@/components/whatsapp-button'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cerâmica Novo Tempo | Desperte a alma do seu lar',
  description: 'Cerâmica artesanal brasileira premium. Peças únicas feitas à mão com esmalte reativo e bordas orgânicas. Louça para restaurantes, mesa posta e decoração.',
  keywords: 'cerâmica artesanal brasileira, louça orgânica, cerâmica para restaurante, mesa posta, cerâmica premium, louça feita à mão',
  openGraph: {
    title: 'Cerâmica Novo Tempo | Desperte a alma do seu lar',
    description: 'Cerâmica artesanal brasileira premium. Peças únicas feitas à mão com esmalte reativo e bordas orgânicas.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${playfairDisplay.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
