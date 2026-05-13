import Link from 'next/link'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const footerLinks = {
  shop: [
    { name: 'Todas as Peças', href: '/loja' },
    { name: 'Linha Orgânica', href: '/loja?linha=linha-organica' },
    { name: 'Bowls', href: '/loja?categoria=bowls' },
    { name: 'Pratos', href: '/loja?categoria=pratos' },
    { name: 'Xícaras', href: '/loja?categoria=xicaras' },
    { name: 'Conjuntos', href: '/loja?categoria=conjuntos' },
  ],
  company: [
    { name: 'Nossa História', href: '/sobre' },
    { name: 'Processo Artesanal', href: '/sobre#processo' },
    { name: 'Sustentabilidade', href: '/sobre#sustentabilidade' },
    { name: 'Seja um Revendedor', href: '/b2b' },
    { name: 'Contato', href: '/contato' },
  ],
  support: [
    { name: 'Perguntas Frequentes', href: '/faq' },
    { name: 'Política de Trocas', href: '/politicas/trocas' },
    { name: 'Política de Privacidade', href: '/politicas/privacidade' },
    { name: 'Termos de Uso', href: '/politicas/termos' },
    { name: 'Rastrear Pedido', href: '/rastrear' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      {/* Newsletter Section */}
      <div className="border-b border-charcoal-light">
        <div className="container mx-auto px-4 py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl mb-2">Receba novidades exclusivas</h3>
              <p className="text-cream-dark/70 text-sm sm:text-base">
                Inscreva-se e ganhe 10% de desconto na primeira compra
              </p>
            </div>
            <form className="flex flex-col sm:flex-row w-full md:w-auto gap-2">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full md:w-72 bg-charcoal-light border-charcoal-light text-cream placeholder:text-cream/50"
              />
              <Button className="bg-gold hover:bg-gold-dark text-charcoal font-medium whitespace-nowrap">
                Inscrever
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 40 40" className="w-10 h-10 text-gold" fill="currentColor">
                  <path d="M20 2C20 2 28 8 28 20C28 32 20 38 20 38C20 38 12 32 12 20C12 8 20 2 20 2Z" />
                  <rect x="18" y="8" width="4" height="24" rx="1" fill="currentColor" opacity="0.6" />
                  <rect x="16" y="18" width="8" height="4" rx="1" fill="currentColor" opacity="0.6" />
                </svg>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-serif text-lg sm:text-xl font-semibold tracking-wide truncate">
                  Cerâmica Novo Tempo
                </span>
              </div>
            </Link>
            <p className="text-cream-dark/70 mb-6 max-w-sm text-sm sm:text-base">
              Cerâmica artesanal brasileira premium. Cada peça é única, feita à mão com paixão 
              e tradição há mais de 20 anos.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/ceramicanovotempo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/ceramicanovotempo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-gold">Loja</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream-dark/70 hover:text-gold transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-gold">A Marca</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream-dark/70 hover:text-gold transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h4 className="font-serif text-lg mb-4 text-gold">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-cream-dark/70 text-sm sm:text-base">(19) 99644-4011</p>
                  <p className="text-xs text-cream-dark/50">Seg a Sex, 7h30 às 17h30</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contato@ceramicanovotempo.com.br"
                  className="text-cream-dark/70 hover:text-gold transition-colors text-sm break-all min-w-0"
                >
                  televendas4@ceramicanovotempo.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-cream-dark/70 text-sm sm:text-base">
                  R. Bento José de Carvalho, 1497 - Centro, Porto Ferreira<br />
                  São Paulo - SP, 13660-000
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-cream-dark/50 text-center md:text-left">
              © {new Date().getFullYear()} Cerâmica Novo Tempo. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
              <span className="px-3 py-1.5 bg-charcoal-light rounded text-xs text-cream/70 font-medium">PIX</span>
              <span className="px-3 py-1.5 bg-charcoal-light rounded text-xs text-cream/70 font-medium">VISA</span>
              <span className="px-3 py-1.5 bg-charcoal-light rounded text-xs text-cream/70 font-medium">MASTER</span>
              <span className="px-3 py-1.5 bg-charcoal-light rounded text-xs text-cream/70 font-medium">BOLETO</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}