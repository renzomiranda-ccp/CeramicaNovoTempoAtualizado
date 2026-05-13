import Link from 'next/link'
import { ArrowRight, Store, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-gold" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full border border-terracotta" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-cream mb-6 leading-tight">
            Pronto para transformar<br />
            sua <span className="text-gold italic">experiência</span> à mesa?
          </h2>
          <p className="text-cream-dark/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Seja para uso pessoal ou para seu negócio, temos a peça perfeita 
            esperando por você.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            {/* B2C CTA */}
            <div className="bg-gold/10 border border-gold/30 rounded-2xl p-6 text-left">
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
                <ShoppingBag className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-serif text-xl text-cream mb-2">
                Para sua casa
              </h3>
              <p className="text-cream/60 text-sm mb-4">
                Explore nossa coleção e encontre peças únicas para sua mesa.
              </p>
              <Button
                asChild
                className="w-full bg-gold hover:bg-gold-dark text-charcoal font-medium"
              >
                <Link href="/loja">
                  Compre agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* B2B CTA */}
            <div className="bg-terracotta/10 border border-terracotta/30 rounded-2xl p-6 text-left">
              <div className="w-12 h-12 rounded-xl bg-terracotta/20 flex items-center justify-center mb-4">
                <Store className="h-6 w-6 text-terracotta" />
              </div>
              <h3 className="font-serif text-xl text-cream mb-2">
                Para seu negócio
              </h3>
              <p className="text-cream/60 text-sm mb-4">
                Condições especiais para lojistas, restaurantes e hotéis.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
              >
                <Link href="/b2b">
                  Seja um revendedor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
