'use client'

import Link from 'next/link'
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/product/product-card'
import { useWishlistStore } from '@/lib/store/wishlist-store'
import { getProductById } from '@/lib/data/products'

export default function FavoritosPage() {
  const { items, clearWishlist } = useWishlistStore()
  const products = items.map(id => getProductById(id)).filter(Boolean)

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-charcoal py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="h-6 w-6 text-terracotta" fill="currentColor" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">
            Meus Favoritos
          </h1>
          <p className="text-cream-dark/70 text-lg">
            {products.length === 0
              ? 'Você ainda não tem peças favoritas'
              : `${products.length} ${products.length === 1 ? 'peça salva' : 'peças salvas'} na sua lista`
            }
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {products.length === 0 ? (
          <div className="max-w-md mx-auto text-center py-12">
            <Heart className="h-20 w-20 text-muted-foreground/20 mx-auto mb-6" />
            <h2 className="font-serif text-2xl text-charcoal mb-3">
              Sua lista está vazia
            </h2>
            <p className="text-muted-foreground mb-8">
              Explore nossa coleção e salve suas peças favoritas clicando no coração.
            </p>
            <Button asChild className="bg-charcoal hover:bg-charcoal-light text-cream">
              <Link href="/loja">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Explorar Produtos
              </Link>
            </Button>
          </div>
        ) : (
          <>
            {/* Actions */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-muted-foreground">
                {products.length} {products.length === 1 ? 'item' : 'itens'}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={clearWishlist}
                className="text-muted-foreground"
              >
                Limpar lista
              </Button>
            </div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                product && <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-cream">
                <Link href="/loja">
                  Continuar comprando
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
