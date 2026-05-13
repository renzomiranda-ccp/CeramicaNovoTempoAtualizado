import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles, Hand, Leaf, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: Hand,
    title: 'Feito à Mão',
    description: 'Cada peça é moldada manualmente por artesãos experientes.'
  },
  {
    icon: Sparkles,
    title: 'Esmalte Reativo',
    description: 'Cores únicas que surgem do processo de queima artesanal.'
  },
  {
    icon: Leaf,
    title: 'Sustentável',
    description: 'Matéria-prima local e processos eco-conscientes.'
  },
  {
    icon: Award,
    title: 'Qualidade Premium',
    description: 'Resistente a micro-ondas e lava-louças.'
  },
]

export function ArtisanalSection() {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-gold font-medium tracking-widest uppercase text-sm">
              Nossa Essência
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-4 mb-6 leading-tight">
              Para sua mesa,<br />
              <span className="text-gold">do jeito certo</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Há mais de 20 anos, transformamos barro brasileiro em arte funcional. 
              Nossas peças nascem das mãos de artesãos que dominam técnicas ancestrais, 
              combinadas com design contemporâneo que valoriza a imperfeição como beleza.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="bg-charcoal hover:bg-charcoal-light text-cream">
              <Link href="/sobre">
                Conheça nossa história
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-charcoal">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/XicaraPiresVerdeJade2-EPOwJZF50AbwTqB3HFOwKHxF9Cioli.jpg"
                    alt="Xícara verde jade linha orgânica"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-charcoal">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PratoRisotoAzulRoyal1-pm1nDEt7Wm2gAPba87gYnG0OCHH4X3.png"
                    alt="Detalhe de textura da cerâmica azul"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-charcoal">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BowlVerdeJade1-5TC9hsVA9UkLUHu8SWyDf5nd2MzaRT.jpg"
                    alt="Bowl verde jade"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-charcoal">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PratoRisotoVerdeJade1-uAIl1uunKAQgXnNltijNgJTckIzEt5.jpg"
                    alt="Pratos verde jade empilhados"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-2 border-gold/20" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-terracotta/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
