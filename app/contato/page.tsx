'use client'
 
import { useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
 
const contactInfo = [
  {
    icon: Phone,
    title: 'Telefone',
    value: '(19) 99644-4011',
    description: 'Seg a Sex, 7h30 às 17h30',
    href: 'tel:+5519996444011'
  },
  {
    icon: Mail,
    title: 'E-mail',
    value: 'televendas4@ceramicanovotempo.com.br',
    description: 'Respondemos em até 24h',
    href: 'mailto:televendas4@ceramicanovotempo.com.br'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '(19) 99644-4011',
    description: 'Atendimento rápido',
    href: 'https://wa.me/5519996444011'
  },
  {
    icon: MapPin,
    title: 'Endereço',
    value: 'R. Bento José de Carvalho, 1497 - Centro, Porto Ferreira',
    description: 'São Paulo - SP, 13660-000',
    href: 'https://maps.google.com'
  },
]
 
const subjects = [
  'Dúvidas sobre produtos',
  'Informações sobre pedidos',
  'Trocas e devoluções',
  'Atacado / B2B',
  'Parceria / Imprensa',
  'Outro assunto'
]
 
export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
      <section className="bg-charcoal py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-cream mb-4">
            Fale Conosco
          </h1>
          <p className="text-cream-dark/70 text-base md:text-lg max-w-xl mx-auto">
            Estamos aqui para ajudar. Entre em contato e nossa equipe 
            responderá o mais breve possível.
          </p>
        </div>
      </section>
 
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl text-charcoal mb-6">
              Informações de Contato
            </h2>
            
            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl bg-card border border-border hover:border-gold/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <info.icon className="h-6 w-6 text-gold" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-charcoal">{info.title}</p>
                    <p className="text-muted-foreground text-sm sm:text-base break-words">
                      {info.value}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground/70 break-words">
                      {info.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
 
            {/* Hours */}
            <div className="mt-8 p-6 bg-cream-dark rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-gold" />
                <h3 className="font-medium text-charcoal">Horário de Atendimento</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between gap-2">
                  <span>Segunda a Sexta</span>
                  <span className="text-right">7h30 às 17h30</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span>Sábado e Domingo</span>
                  <span className="text-right">Fechado</span>
                </div>
              </div>
            </div>
          </div>
 
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <h2 className="font-serif text-2xl text-charcoal mb-2">
                Envie uma Mensagem
              </h2>
              <p className="text-muted-foreground mb-8">
                Preencha o formulário abaixo e retornaremos em até 24 horas úteis.
              </p>
 
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl text-charcoal mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Obrigado por entrar em contato. Nossa equipe responderá em breve.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
                    }}
                  >
                    Enviar nova mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
 
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto *</Label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Selecione o assunto</option>
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>
                  </div>
 
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Como podemos ajudar?"
                      rows={6}
                    />
                  </div>
 
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-charcoal hover:bg-charcoal-light text-cream"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <h2 className="font-serif text-2xl text-charcoal mb-6 text-center">
            Onde Estamos
          </h2>
          <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-charcoal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.5!2d-47.4844!3d-21.8561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8b0c8c8c8c8c8%3A0x0!2sR.+Bento+Jos%C3%A9+de+Carvalho%2C+1497+-+Centro%2C+Porto+Ferreira+-+SP%2C+13660-000!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Cerâmica Novo Tempo - R. Bento José de Carvalho, 1497, Porto Ferreira - SP"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
