'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingBag, Heart, User, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/lib/store/cart-store'
import { useWishlistStore } from '@/lib/store/wishlist-store'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Loja', href: '/loja' },
  { name: 'Linha Orgânica', href: '/loja?linha=linha-organica' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Contato', href: '/contato' },
  { name: 'B2B', href: '/b2b' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { items, toggleCart, getTotalItems } = useCartStore()
  const { items: wishlistItems } = useWishlistStore()
  const totalItems = getTotalItems()

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-charcoal text-cream-dark text-xs sm:text-sm py-2">
        <div className="container mx-auto px-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/ceramicanovotempo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Instagram className="h-4 w-4" />
              <span className="hidden sm:inline">+44 mil seguidores</span>
            </a>
          </div>
          <p className="text-center hidden md:block">Frete grátis para compras acima de R$ 499</p>
          <Link href="/b2b" className="hover:text-gold transition-colors whitespace-nowrap">
            Área do Lojista
          </Link>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24 gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink">
            <div className="w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 40 40" className="w-11 h-11 sm:w-14 sm:h-14 text-gold" fill="currentColor">
                <path d="M20 2C20 2 28 8 28 20C28 32 20 38 20 38C20 38 12 32 12 20C12 8 20 2 20 2Z" />
                <rect x="18" y="8" width="4" height="24" rx="1" fill="currentColor" opacity="0.6" />
                <rect x="16" y="18" width="8" height="4" rx="1" fill="currentColor" opacity="0.6" />
              </svg>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-base sm:text-xl md:text-2xl font-semibold text-charcoal tracking-wide leading-tight truncate">
                Cerâmica Novo Tempo
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground tracking-widest uppercase truncate">
                Desperte a alma do seu lar
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-charcoal hover:text-gold transition-colors relative group",
                  item.name === 'B2B' && "text-gold"
                )}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <Link href="/favoritos">
              <Button variant="ghost" size="icon" className="relative hover:text-gold">
                <Heart className="h-5 w-5" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-terracotta text-[10px] font-medium text-white flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
                <span className="sr-only">Favoritos</span>
              </Button>
            </Link>

            <Link href="/conta">
              <Button variant="ghost" size="icon" className="hidden md:flex hover:text-gold">
                <User className="h-5 w-5" />
                <span className="sr-only">Minha Conta</span>
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="relative hover:text-gold"
              onClick={toggleCart}
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold text-charcoal text-[10px] font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Carrinho</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-cream border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "py-3 px-4 text-base font-medium rounded-lg hover:bg-cream-dark transition-colors",
                  item.name === 'B2B' && "bg-gold/10 text-gold"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}