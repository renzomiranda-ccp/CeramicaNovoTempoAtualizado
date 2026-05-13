import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const collections = [
  {
    name: 'Linha Orgânica',
    description: 'Bordas irregulares e esmalte reativo que tornam cada peça única',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AzulRoyal1-Ce0qqPiDNCryXCCdQljdUcBya47CSG.jpg',
    href: '/loja?linha=linha-organica',
    color: 'from-moss-green/80',
  },
  {
    name: 'Verde Jade',
    description: 'Tons terrosos com pontuações caramelo que evocam florestas antigas',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/XicaraPiresVerdeJade2-EPOwJZF50AbwTqB3HFOwKHxF9Cioli.jpg',
    href: '/loja?cor=verde-jade',
    color: 'from-moss-green/80',
  },
  {
    name: 'Azul Royal',
    description: 'Azul profundo com reflexos esverdeados como um céu estrelado',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/XicaraPiresAzul2-GYentICLTQYfodyxrU4ocL9iYh9lKr.jpg',
    href: '/loja?cor=azul-royal',
    color: 'from-night-blue/80',
  },
]

export function CollectionsSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Explore
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-4 mb-6">
            Nossas Linhas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cada coleção conta uma história diferente através de texturas, cores e formas 
            que transformam sua mesa em uma experiência sensorial única.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <Link
              key={collection.name}
              href={collection.href}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-charcoal"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light to-charcoal">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} via-transparent to-transparent opacity-60`} />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-cream mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-cream/70 text-sm max-w-[200px]">
                      {collection.description}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:text-charcoal transition-all">
                    <ArrowUpRight className="h-5 w-5 text-gold group-hover:text-charcoal transition-colors" />
                  </div>
                </div>
              </div>

              {/* Number */}
              <div className="absolute top-6 left-6">
                <span className="font-serif text-6xl text-cream/10">
                  0{index + 1}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
