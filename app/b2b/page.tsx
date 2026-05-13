'use client'

import { useState } from 'react'
import Image from 'next/image'
import { 
  Store, 
  Percent, 
  Truck, 
  Headphones, 
  Award,
  CheckCircle2,
  Building2,
  Mail,
  Phone,
  User,
  FileText
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const benefits = [
  {
    icon: Percent,
    title: 'Descontos Progressivos',
    description: 'Quanto mais você compra, mais economiza. Até 40% off em pedidos maiores.'
  },
  {
    icon: Truck,
    title: 'Frete Especial',
    description: 'Condições diferenciadas de frete para todo o Brasil.'
  },
  {
    icon: Headphones,
    title: 'Atendimento Exclusivo',
    description: 'Gerente de conta dedicado para atender seu negócio.'
  },
  {
    icon: Award,
    title: 'Primeira Linha',
    description: 'Acesso antecipado a lançamentos e coleções exclusivas.'
  },
]

const discountTiers = [
  { quantity: '10+ unidades', discount: '10%', color: 'bg-cream-dark' },
  { quantity: '20+ unidades', discount: '20%', color: 'bg-gold/20' },
  { quantity: '50+ unidades', discount: '30%', color: 'bg-gold/40' },
  { quantity: '100+ unidades', discount: '40%', color: 'bg-gold' },
]

const segments = [
  'Loja de Decoração',
  'Restaurante',
  'Hotel / Pousada',
  'Cafeteria',
  'Atacadista',
  'Designer de Interiores',
  'Outro'
]

export default function B2BPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    cnpj: '',
    contactName: '',
    email: '',
    phone: '',
    segment: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative bg-charcoal py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-gold" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full border border-terracotta" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
              <Store className="h-4 w-4 text-gold" />
              <span className="text-gold text-sm font-medium">Programa para Lojistas</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl text-cream leading-tight mb-6">
              Leve a <span className="text-gold italic">arte da cerâmica</span> para seu negócio
            </h1>
            
            <p className="text-cream-dark/70 text-lg md:text-xl mb-8 max-w-2xl">
              Condições exclusivas para lojistas, restaurantes, hotéis e designers. 
              Faça parte da família Cerâmica Novo Tempo e encante seus clientes.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#cadastro">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-charcoal font-medium">
                  Quero ser revendedor
                </Button>
              </a>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-cream/30 text-cream hover:bg-cream/10"
              >
                <a href="https://wa.me/5519996444011" target="_blank" rel="noopener noreferrer">
                  Falar com consultor
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-medium tracking-widest uppercase text-sm">
              Vantagens
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-charcoal mt-4">
              Por que ser nosso parceiro?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card p-6 rounded-2xl border border-border hover:border-gold/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discount Tiers */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-medium tracking-widest uppercase text-sm">
                Descontos
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-4 mb-6">
                Quanto mais compra,<br />mais economiza
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Nossa tabela de descontos progressivos foi criada para valorizar 
                parcerias de longo prazo. Quanto maior seu pedido, maior sua economia.
              </p>

              <div className="space-y-3">
                {discountTiers.map((tier) => (
                  <div
                    key={tier.quantity}
                    className={`flex items-center justify-between p-4 rounded-xl ${tier.color} ${tier.color === 'bg-gold' ? 'text-charcoal' : ''}`}
                  >
                    <span className="font-medium">{tier.quantity}</span>
                    <span className="font-serif text-2xl font-semibold">{tier.discount}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden bg-charcoal">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AzulRoyal1-Ce0qqPiDNCryXCCdQljdUcBya47CSG.jpg"
                alt="Produtos Cerâmica Novo Tempo em loja"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-cream font-serif text-2xl">
                  +500 lojistas já fazem parte da nossa rede
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="cadastro" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-gold font-medium tracking-widest uppercase text-sm">
                Cadastro
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-4 mb-4">
                Torne-se um revendedor
              </h2>
              <p className="text-muted-foreground">
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 48h.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-serif text-2xl text-charcoal mb-2">
                  Cadastro recebido!
                </h3>
                <p className="text-muted-foreground">
                  Obrigado pelo interesse. Nossa equipe entrará em contato em breve 
                  para dar continuidade ao seu cadastro.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">
                      <Building2 className="h-4 w-4 inline mr-2" />
                      Razão Social *
                    </Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      required
                      placeholder="Nome da empresa"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cnpj">
                      <FileText className="h-4 w-4 inline mr-2" />
                      CNPJ *
                    </Label>
                    <Input
                      id="cnpj"
                      value={formData.cnpj}
                      onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
                      required
                      placeholder="00.000.000/0000-00"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactName">
                    <User className="h-4 w-4 inline mr-2" />
                    Nome do Responsável *
                  </Label>
                  <Input
                    id="contactName"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    required
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      <Mail className="h-4 w-4 inline mr-2" />
                      E-mail Comercial *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="email@empresa.com.br"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      <Phone className="h-4 w-4 inline mr-2" />
                      Telefone / WhatsApp *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="segment">Segmento do Negócio *</Label>
                  <select
                    id="segment"
                    value={formData.segment}
                    onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                    required
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Selecione o segmento</option>
                    {segments.map((segment) => (
                      <option key={segment} value={segment}>{segment}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem (opcional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte-nos mais sobre seu negócio, volume estimado de compras, etc."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-charcoal hover:bg-charcoal-light text-cream text-lg"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Cadastro'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você concorda com nossa{' '}
                  <a href="/politicas/privacidade" className="text-gold hover:underline">
                    Política de Privacidade
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-cream mb-4">
            Prefere falar diretamente com nossa equipe?
          </h3>
          <p className="text-cream-dark/70 mb-6">
            Nossa equipe comercial está pronta para atender você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
            >
              <a href="https://wa.me/5519996444011" target="_blank" rel="noopener noreferrer">
                WhatsApp Comercial
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-cream/30 text-cream hover:bg-cream/10"
            >
              <a href="mailto:televendas4@ceramicanovotempo.com.br">
                televendas4@ceramicanovotempo.com.br
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
