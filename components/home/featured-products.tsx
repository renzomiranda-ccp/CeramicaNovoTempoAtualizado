'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/product/product-card'
import { products } from '@/lib/data/products'

export function FeaturedProducts() {
  // Get first 4 products for featured section
  const featuredProducts = products.slice(0, 4)

  return (
    <section className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-gold font-medium tracking-widest uppercase text-sm">
              Destaques
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-4">
              Peças em Destaque
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="self-start md:self-auto border-charcoal text-charcoal hover:bg-charcoal hover:text-cream"
          >
            <Link href="/loja">
              Ver todos os produtos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Banner */}
        <div className="mt-16 p-8 md:p-12 bg-charcoal rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-cream mb-2">
              Cada peça tem sua própria história
            </h3>
            <p className="text-cream-dark/70">
              Esmalte reativo e acabamento artesanal garantem que nenhuma peça seja igual à outra.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="px-4 py-2 rounded-full border border-gold/30 text-gold text-sm">
              Peça Única
            </div>
            <div className="px-4 py-2 rounded-full border border-terracotta/30 text-terracotta text-sm">
              Feito à Mão
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
