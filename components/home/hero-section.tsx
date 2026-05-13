'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-charcoal overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-gold" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full border border-gold" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full border border-terracotta" />
      </div>

      {/* Hero Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-SZ4XK7mDK4bJirbaeY4bTO4o99mpKj.png)',
          opacity: 0.5
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-medium tracking-wide">
              Linha Orgânica — Nova Coleção
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95] mb-6">
            Desperte a<br />
            <span className="text-gold italic">alma</span> do<br />
            seu lar
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-cream-dark/80 max-w-lg mb-10 leading-relaxed">
            Cerâmica artesanal brasileira com bordas orgânicas e esmalte reativo. 
            Cada peça é única, moldada à mão por artesãos que transformam barro em arte.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-dark text-charcoal font-medium text-lg px-8 h-14"
            >
              <Link href="/loja">
                Explorar Coleção
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-charcoal font-medium text-lg px-8 h-14 transition-colors"
            >
              <Link href="/b2b">
                Seja um Revendedor
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-cream/10">
            <div>
              <p className="font-serif text-4xl text-gold">+20</p>
              <p className="text-cream-dark/60 text-sm mt-1">Anos de tradição</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-gold">100%</p>
              <p className="text-cream-dark/60 text-sm mt-1">Feito à mão</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-gold">+44k</p>
              <p className="text-cream-dark/60 text-sm mt-1">Seguidores no Instagram</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40">
        <span className="text-xs tracking-widest uppercase">Role para baixo</span>
        <div className="w-px h-12 bg-gradient-to-b from-cream/40 to-transparent" />
      </div>
    </section>
  )
}
