import Image from 'next/image'
import { Instagram, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'

const instagramPosts = [
  { id: 1, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AzulRoyal1-Ce0qqPiDNCryXCCdQljdUcBya47CSG.jpg', likes: 234 },
  { id: 2, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BowlVerdeJade1-5TC9hsVA9UkLUHu8SWyDf5nd2MzaRT.jpg', likes: 189 },
  { id: 3, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/XicaraPiresAzul2-GYentICLTQYfodyxrU4ocL9iYh9lKr.jpg', likes: 312 },
  { id: 4, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/XicaraPiresVerdeJade2-EPOwJZF50AbwTqB3HFOwKHxF9Cioli.jpg', likes: 267 },
  { id: 5, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PratoRisotoAzulRoyal1-pm1nDEt7Wm2gAPba87gYnG0OCHH4X3.png', likes: 198 },
  { id: 6, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PratoRisotoVerdeJade1-uAIl1uunKAQgXnNltijNgJTckIzEt5.jpg', likes: 276 },
]

export function InstagramSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-charcoal mb-4">
            <Instagram className="h-6 w-6" />
            <span className="font-medium">@ceramicanovotempo</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            Siga a gente
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            +44 mil pessoas já fazem parte da nossa comunidade. 
            Acompanhe bastidores, inspirações e lançamentos.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/ceramicanovotempo"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-lg overflow-hidden bg-charcoal"
            >
              <Image
                src={post.image}
                alt="Post do Instagram"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-colors flex items-center justify-center">
                <Instagram className="h-8 w-8 text-cream opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-charcoal text-charcoal hover:bg-charcoal hover:text-cream"
          >
            <a
              href="https://instagram.com/ceramicanovotempo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5 mr-2" />
              Seguir no Instagram
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-charcoal text-charcoal hover:bg-charcoal hover:text-cream"
          >
            <a
              href="https://www.facebook.com/ceramicanovotempo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-5 w-5 mr-2" />
              Seguir no Facebook
            </a>
          </Button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['Decor', 'Feiras', 'Click Clientes', 'Bastidores'].map((category) => (
            <span
              key={category}
              className="px-4 py-2 rounded-full bg-cream-dark text-muted-foreground text-sm"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
