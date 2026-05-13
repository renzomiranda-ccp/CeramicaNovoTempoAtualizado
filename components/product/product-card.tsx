'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/lib/store/cart-store'
import { useWishlistStore } from '@/lib/store/wishlist-store'
import type { Product } from '@/lib/data/products'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore()
  const { toggleItem, isInWishlist } = useWishlistStore()
  const inWishlist = isInWishlist(product.id)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleItem(product.id)
  }

  return (
    <div className="group relative bg-card rounded-xl overflow-hidden">
      {/* Image Container */}
      <Link href={`/produto/${product.slug}`} className="block">
        <div className="relative aspect-square bg-cream-dark overflow-hidden">
          <Image
            src={product.images[0] || '/images/placeholder.jpg'}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isArtisanal && (
              <span className="bg-gold text-charcoal text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                Artesanal
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-terracotta text-white text-[10px] font-bold px-2 py-1 rounded-full">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleToggleWishlist}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors shadow-sm"
          >
            <Heart
              className={cn(
                "h-4 w-4 transition-colors",
                inWishlist ? "fill-terracotta text-terracotta" : "text-charcoal"
              )}
            />
          </button>

          {/* Quick Add Button */}
          <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-charcoal hover:bg-charcoal-light text-cream"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Adicionar
            </Button>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <Link href={`/produto/${product.slug}`} className="block p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground mb-1">{product.color}</p>
            <h3 className="font-medium text-charcoal truncate">{product.name}</h3>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-serif text-lg font-semibold text-gold">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </Link>
    </div>
  )
}
