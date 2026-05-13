'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Marina Santos',
    location: 'São Paulo, SP',
    initials: 'MS',
    rating: 5,
    text: 'As peças transformaram completamente minha mesa. O esmalte verde musgo é ainda mais bonito pessoalmente, e adoro saber que cada peça é única.',
    product: 'Conjunto Jantar Verde Musgo',
  },
  {
    id: 2,
    name: 'Chef Ricardo Almeida',
    location: 'Restaurante Terroir',
    initials: 'RA',
    rating: 5,
    text: 'Usamos a Linha Orgânica no restaurante há 2 anos. Nossos clientes sempre elogiam a apresentação dos pratos. A durabilidade é impressionante.',
    product: 'Pratos Rasos Azul Noite',
  },
  {
    id: 3,
    name: 'Fernanda Lima',
    location: 'Curitiba, PR',
    initials: 'FL',
    rating: 5,
    text: 'Dei de presente de casamento e foi um sucesso! A embalagem veio impecável e as peças superaram todas as expectativas. Vou comprar para mim também!',
    product: 'Bowl Orgânico Azul Noite',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Clientes que Amam
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4 mb-6">
            Histórias de quem vive<br />a experiência
          </h2>
          <p className="text-cream-dark/70 max-w-2xl mx-auto text-lg">
            Veja o que nossos clientes falam sobre ter peças únicas em suas mesas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-charcoal-light rounded-2xl p-6 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-cream/90 mb-6 leading-relaxed">
                {`"${testimonial.text}"`}
              </p>

              {/* Product Tag */}
              <div className="inline-block px-3 py-1 bg-gold/10 rounded-full text-gold text-xs mb-6">
                {testimonial.product}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-cream/10">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-serif text-lg">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-medium text-cream">{testimonial.name}</p>
                  <p className="text-sm text-cream/50">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p className="text-cream/60 mb-4">
            Compartilhe sua experiência com <span className="text-gold">@ceramicanovotempo</span>
          </p>
          <a
            href="https://instagram.com/ceramicanovotempo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
          >
            <span>Marque suas fotos para aparecer aqui</span>
          </a>
        </div>
      </div>
    </section>
  )
}
