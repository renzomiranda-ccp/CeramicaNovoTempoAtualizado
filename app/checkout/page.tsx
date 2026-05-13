'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  User,
  MapPin,
  CreditCard,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Truck,
  Shield,
  Lock,
  QrCode,
  Landmark,
  Mail
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCartStore } from '@/lib/store/cart-store'
import { cn } from '@/lib/utils'

type Step = 1 | 2 | 3 | 4
type PaymentMethod = 'pix' | 'cartao' | 'boleto'

interface CustomerData {
  name: string
  email: string
  phone: string
  cpf: string
}

interface ShippingData {
  cep: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  shippingMethod: 'sedex' | 'pac' | 'expresso'
}

interface PaymentData {
  method: PaymentMethod
  cardNumber: string
  cardName: string
  cardExpiry: string
  cardCvv: string
  installments: string
}

const steps = [
  { id: 1, name: 'Dados', icon: User },
  { id: 2, name: 'Entrega', icon: MapPin },
  { id: 3, name: 'Pagamento', icon: CreditCard },
  { id: 4, name: 'Confirmação', icon: CheckCircle2 },
]

const shippingOptions = [
  { id: 'pac', name: 'PAC', description: '7 a 12 dias úteis', price: 24.90 },
  { id: 'sedex', name: 'SEDEX', description: '3 a 5 dias úteis', price: 39.90 },
  { id: 'expresso', name: 'Expresso', description: '1 a 2 dias úteis', price: 59.90 },
] as const

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotalPrice, clearCart } = useCartStore()
  const [currentStep, setCurrentStep] = useState<Step>(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderNumber, setOrderNumber] = useState('')
  const [mounted, setMounted] = useState(false)

  const [customerData, setCustomerData] = useState<CustomerData>({
    name: '',
    email: '',
    phone: '',
    cpf: ''
  })

  const [shippingData, setShippingData] = useState<ShippingData>({
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    shippingMethod: 'pac'
  })

  const [paymentData, setPaymentData] = useState<PaymentData>({
    method: 'pix',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
    installments: '1'
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  // Redirect if cart is empty (apenas após hydration)
  useEffect(() => {
    if (mounted && items.length === 0 && currentStep !== 4) {
      router.push('/loja')
    }
  }, [mounted, items.length, currentStep, router])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const subtotal = getTotalPrice()
  const shippingPrice = shippingOptions.find(opt => opt.id === shippingData.shippingMethod)?.price || 0
  const freeShipping = subtotal >= 499
  const finalShipping = freeShipping ? 0 : shippingPrice
  const total = subtotal + finalShipping

  // Validações
  const isStep1Valid = customerData.name.trim() && customerData.email.trim() && 
                       customerData.phone.trim() && customerData.cpf.trim()
  const isStep2Valid = shippingData.cep.trim() && shippingData.street.trim() && 
                       shippingData.number.trim() && shippingData.neighborhood.trim() && 
                       shippingData.city.trim() && shippingData.state.trim()
  const isStep3Valid = paymentData.method === 'pix' || paymentData.method === 'boleto' ||
                       (paymentData.method === 'cartao' && paymentData.cardNumber.trim() && 
                        paymentData.cardName.trim() && paymentData.cardExpiry.trim() && 
                        paymentData.cardCvv.trim())

  // Máscaras simples
  const formatCPF = (value: string) => {
    return value.replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .slice(0, 14)
  }

  const formatPhone = (value: string) => {
    return value.replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15)
  }

  const formatCEP = (value: string) => {
    return value.replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 9)
  }

  const formatCardNumber = (value: string) => {
    return value.replace(/\D/g, '')
      .replace(/(\d{4})(?=\d)/g, '$1 ')
      .slice(0, 19)
  }

  const formatCardExpiry = (value: string) => {
    return value.replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .slice(0, 5)
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((currentStep + 1) as Step)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (currentStep === 3) {
      handleFinishOrder()
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleFinishOrder = async () => {
    setIsProcessing(true)
    // Simula processamento
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Gera número do pedido
    const order = `CNT-${Date.now().toString().slice(-8)}`
    setOrderNumber(order)
    setCurrentStep(4)
    clearCart()
    setIsProcessing(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Loading antes da hydration
  if (!mounted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    )
  }

  // Carrinho vazio (e não está na etapa de confirmação)
  if (items.length === 0 && currentStep !== 4) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <ShoppingBag className="h-20 w-20 text-muted-foreground/30 mx-auto mb-6" />
          <h1 className="font-serif text-2xl text-charcoal mb-3">
            Seu carrinho está vazio
          </h1>
          <p className="text-muted-foreground mb-8">
            Adicione produtos antes de finalizar a compra.
          </p>
          <Button asChild className="bg-charcoal hover:bg-charcoal-light text-cream">
            <Link href="/loja">Explorar Produtos</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-charcoal py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-cream text-center">
            Finalizar Compra
          </h1>
        </div>
      </section>

      {/* Steps Indicator */}
      <div className="bg-cream-dark border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isActive = currentStep === step.id
              const isCompleted = currentStep > step.id
              return (
                <div key={step.id} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center gap-1 sm:gap-2 flex-shrink-0">
                    <div
                      className={cn(
                        "w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors",
                        isActive && "bg-gold text-charcoal",
                        isCompleted && "bg-green-500 text-white",
                        !isActive && !isCompleted && "bg-cream border-2 border-border text-muted-foreground"
                      )}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      )}
                    </div>
                    <span className={cn(
                      "text-[10px] sm:text-xs font-medium text-center",
                      isActive && "text-charcoal",
                      isCompleted && "text-green-600",
                      !isActive && !isCompleted && "text-muted-foreground"
                    )}>
                      {step.name}
                    </span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className={cn(
                      "flex-1 h-0.5 mx-1 sm:mx-3 mb-6 transition-colors",
                      currentStep > step.id ? "bg-green-500" : "bg-border"
                    )} />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Steps */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl border border-border p-5 sm:p-8">
              
              {/* Step 1: Dados */}
              {currentStep === 1 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <User className="h-5 w-5 text-gold" />
                    </div>
                    <h2 className="font-serif text-xl sm:text-2xl text-charcoal">Seus Dados</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={customerData.name}
                        onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
                        placeholder="Como aparece no documento"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={customerData.email}
                        onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                        placeholder="seu@email.com"
                      />
                      <p className="text-xs text-muted-foreground">
                        Enviaremos a confirmação do pedido para este e-mail
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone *</Label>
                        <Input
                          id="phone"
                          value={customerData.phone}
                          onChange={(e) => setCustomerData({ ...customerData, phone: formatPhone(e.target.value) })}
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cpf">CPF *</Label>
                        <Input
                          id="cpf"
                          value={customerData.cpf}
                          onChange={(e) => setCustomerData({ ...customerData, cpf: formatCPF(e.target.value) })}
                          placeholder="000.000.000-00"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Entrega */}
              {currentStep === 2 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-gold" />
                    </div>
                    <h2 className="font-serif text-xl sm:text-2xl text-charcoal">Endereço de Entrega</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="space-y-2 sm:col-span-1">
                        <Label htmlFor="cep">CEP *</Label>
                        <Input
                          id="cep"
                          value={shippingData.cep}
                          onChange={(e) => setShippingData({ ...shippingData, cep: formatCEP(e.target.value) })}
                          placeholder="00000-000"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-4 gap-4">
                      <div className="space-y-2 sm:col-span-3">
                        <Label htmlFor="street">Rua *</Label>
                        <Input
                          id="street"
                          value={shippingData.street}
                          onChange={(e) => setShippingData({ ...shippingData, street: e.target.value })}
                          placeholder="Nome da rua"
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-1">
                        <Label htmlFor="number">Número *</Label>
                        <Input
                          id="number"
                          value={shippingData.number}
                          onChange={(e) => setShippingData({ ...shippingData, number: e.target.value })}
                          placeholder="123"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="complement">Complemento</Label>
                      <Input
                        id="complement"
                        value={shippingData.complement}
                        onChange={(e) => setShippingData({ ...shippingData, complement: e.target.value })}
                        placeholder="Apto, bloco, referência..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="neighborhood">Bairro *</Label>
                      <Input
                        id="neighborhood"
                        value={shippingData.neighborhood}
                        onChange={(e) => setShippingData({ ...shippingData, neighborhood: e.target.value })}
                        placeholder="Seu bairro"
                      />
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="city">Cidade *</Label>
                        <Input
                          id="city"
                          value={shippingData.city}
                          onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
                          placeholder="Cidade"
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-1">
                        <Label htmlFor="state">UF *</Label>
                        <Input
                          id="state"
                          value={shippingData.state}
                          onChange={(e) => setShippingData({ ...shippingData, state: e.target.value.toUpperCase().slice(0, 2) })}
                          placeholder="SP"
                          maxLength={2}
                        />
                      </div>
                    </div>

                    {/* Shipping Methods */}
                    <div className="pt-4">
                      <Label className="mb-3 block">Método de Envio *</Label>
                      <div className="space-y-2">
                        {shippingOptions.map((option) => (
                          <label
                            key={option.id}
                            className={cn(
                              "flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-colors",
                              shippingData.shippingMethod === option.id
                                ? "border-gold bg-gold/5"
                                : "border-border hover:border-gold/30"
                            )}
                          >
                            <input
                              type="radio"
                              name="shipping"
                              value={option.id}
                              checked={shippingData.shippingMethod === option.id}
                              onChange={() => setShippingData({ ...shippingData, shippingMethod: option.id })}
                              className="accent-gold flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-charcoal">{option.name}</p>
                              <p className="text-xs text-muted-foreground">{option.description}</p>
                            </div>
                            <p className="font-semibold text-charcoal whitespace-nowrap">
                              {freeShipping ? (
                                <span className="text-green-600 text-sm">Grátis</span>
                              ) : (
                                formatPrice(option.price)
                              )}
                            </p>
                          </label>
                        ))}
                      </div>
                      {freeShipping && (
                        <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                          <Truck className="h-3 w-3" />
                          Frete grátis para compras acima de R$ 499
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Pagamento */}
              {currentStep === 3 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-gold" />
                    </div>
                    <h2 className="font-serif text-xl sm:text-2xl text-charcoal">Pagamento</h2>
                  </div>

                  {/* Payment Methods */}
                  <div className="space-y-2 mb-6">
                    <Label className="mb-3 block">Escolha a forma de pagamento *</Label>
                    
                    <label
                      className={cn(
                        "flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-colors",
                        paymentData.method === 'pix'
                          ? "border-gold bg-gold/5"
                          : "border-border hover:border-gold/30"
                      )}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="pix"
                        checked={paymentData.method === 'pix'}
                        onChange={() => setPaymentData({ ...paymentData, method: 'pix' })}
                        className="accent-gold flex-shrink-0"
                      />
                      <QrCode className="h-5 w-5 text-charcoal flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-charcoal">PIX</p>
                        <p className="text-xs text-muted-foreground">Aprovação instantânea • 5% de desconto</p>
                      </div>
                    </label>

                    <label
                      className={cn(
                        "flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-colors",
                        paymentData.method === 'cartao'
                          ? "border-gold bg-gold/5"
                          : "border-border hover:border-gold/30"
                      )}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="cartao"
                        checked={paymentData.method === 'cartao'}
                        onChange={() => setPaymentData({ ...paymentData, method: 'cartao' })}
                        className="accent-gold flex-shrink-0"
                      />
                      <CreditCard className="h-5 w-5 text-charcoal flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-charcoal">Cartão de Crédito</p>
                        <p className="text-xs text-muted-foreground">Em até 6x sem juros</p>
                      </div>
                    </label>

                    <label
                      className={cn(
                        "flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-colors",
                        paymentData.method === 'boleto'
                          ? "border-gold bg-gold/5"
                          : "border-border hover:border-gold/30"
                      )}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="boleto"
                        checked={paymentData.method === 'boleto'}
                        onChange={() => setPaymentData({ ...paymentData, method: 'boleto' })}
                        className="accent-gold flex-shrink-0"
                      />
                      <Landmark className="h-5 w-5 text-charcoal flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-charcoal">Boleto Bancário</p>
                        <p className="text-xs text-muted-foreground">Vence em 3 dias úteis</p>
                      </div>
                    </label>
                  </div>

                  {/* PIX Info */}
                  {paymentData.method === 'pix' && (
                    <div className="bg-cream-dark rounded-xl p-5">
                      <div className="flex items-start gap-3 mb-4">
                        <QrCode className="h-8 w-8 text-gold flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-charcoal mb-1">Pagamento via PIX</h3>
                          <p className="text-sm text-muted-foreground">
                            Após confirmar o pedido, geraremos um QR Code e código PIX para pagamento.
                          </p>
                        </div>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-800">
                        ✓ Você ganha <strong>5% de desconto</strong> pagando com PIX
                      </div>
                    </div>
                  )}

                  {/* Cartão Form */}
                  {paymentData.method === 'cartao' && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Número do Cartão *</Label>
                        <Input
                          id="cardNumber"
                          value={paymentData.cardNumber}
                          onChange={(e) => setPaymentData({ ...paymentData, cardNumber: formatCardNumber(e.target.value) })}
                          placeholder="0000 0000 0000 0000"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardName">Nome no Cartão *</Label>
                        <Input
                          id="cardName"
                          value={paymentData.cardName}
                          onChange={(e) => setPaymentData({ ...paymentData, cardName: e.target.value.toUpperCase() })}
                          placeholder="Como impresso no cartão"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardExpiry">Validade *</Label>
                          <Input
                            id="cardExpiry"
                            value={paymentData.cardExpiry}
                            onChange={(e) => setPaymentData({ ...paymentData, cardExpiry: formatCardExpiry(e.target.value) })}
                            placeholder="MM/AA"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cardCvv">CVV *</Label>
                          <Input
                            id="cardCvv"
                            value={paymentData.cardCvv}
                            onChange={(e) => setPaymentData({ ...paymentData, cardCvv: e.target.value.replace(/\D/g, '').slice(0, 4) })}
                            placeholder="000"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="installments">Parcelas</Label>
                        <select
                          id="installments"
                          value={paymentData.installments}
                          onChange={(e) => setPaymentData({ ...paymentData, installments: e.target.value })}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          {[1, 2, 3, 4, 5, 6].map(n => (
                            <option key={n} value={n}>
                              {n}x de {formatPrice(total / n)} sem juros
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Boleto Info */}
                  {paymentData.method === 'boleto' && (
                    <div className="bg-cream-dark rounded-xl p-5">
                      <div className="flex items-start gap-3">
                        <Landmark className="h-8 w-8 text-gold flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-charcoal mb-1">Pagamento via Boleto</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            O boleto será gerado após a confirmação e enviado para seu e-mail.
                          </p>
                          <p className="text-xs text-muted-foreground">
                            • Compensação em até 2 dias úteis<br />
                            • Pagamento até a data de vencimento (3 dias úteis)
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Security Notice */}
                  <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                    <Lock className="h-4 w-4 text-green-600" />
                    <span>Seus dados estão protegidos com criptografia SSL</span>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmação */}
              {currentStep === 4 && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-12 w-12 text-green-600" />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-3">
                    Pedido Confirmado!
                  </h2>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Obrigado pela sua compra, {customerData.name.split(' ')[0]}! 
                    Seu pedido foi recebido com sucesso.
                  </p>

                  <div className="bg-cream-dark rounded-xl p-6 max-w-md mx-auto mb-6">
                    <p className="text-sm text-muted-foreground mb-1">Número do pedido</p>
                    <p className="font-serif text-2xl text-gold font-semibold">{orderNumber}</p>
                  </div>

                  <div className="text-left max-w-md mx-auto space-y-4 mb-8">
                    <div className="flex items-start gap-3 p-4 bg-cream-dark rounded-lg">
                      <Mail className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-charcoal text-sm">Confirmação por e-mail</p>
                        <p className="text-xs text-muted-foreground break-all">
                          Enviamos os detalhes para {customerData.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-cream-dark rounded-lg">
                      <Truck className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-charcoal text-sm">Próximos passos</p>
                        <p className="text-xs text-muted-foreground">
                          {paymentData.method === 'pix' && 'Você receberá o QR Code do PIX em instantes.'}
                          {paymentData.method === 'boleto' && 'O boleto chegará no seu e-mail em até 5 minutos.'}
                          {paymentData.method === 'cartao' && 'Pagamento aprovado! Seu pedido será separado em breve.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild className="bg-charcoal hover:bg-charcoal-light text-cream">
                      <Link href="/loja">Continuar Comprando</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/conta">Meus Pedidos</Link>
                    </Button>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {currentStep < 4 && (
                <div className="flex flex-col-reverse sm:flex-row gap-3 mt-8 pt-6 border-t border-border">
                  {currentStep > 1 ? (
                    <Button
                      variant="outline"
                      onClick={handlePrev}
                      className="flex-1"
                      disabled={isProcessing}
                    >
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Voltar
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      asChild
                      className="flex-1"
                    >
                      <Link href="/loja">
                        <ChevronLeft className="h-4 w-4 mr-2" />
                        Continuar Comprando
                      </Link>
                    </Button>
                  )}
                  <Button
                    onClick={handleNext}
                    disabled={
                      isProcessing ||
                      (currentStep === 1 && !isStep1Valid) ||
                      (currentStep === 2 && !isStep2Valid) ||
                      (currentStep === 3 && !isStep3Valid)
                    }
                    className="flex-1 bg-charcoal hover:bg-charcoal-light text-cream"
                  >
                    {isProcessing ? (
                      'Processando...'
                    ) : currentStep === 3 ? (
                      <>
                        Finalizar Pedido
                        <CheckCircle2 className="h-4 w-4 ml-2" />
                      </>
                    ) : (
                      <>
                        Continuar
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          {currentStep < 4 && (
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl border border-border p-5 sm:p-6 lg:sticky lg:top-28">
                <h3 className="font-serif text-lg text-charcoal mb-4">Resumo do Pedido</h3>

                {/* Items */}
                <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-3">
                      <div className="relative w-16 h-16 bg-cream-dark rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.images[0] || '/images/placeholder.jpg'}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-charcoal text-cream text-[10px] font-bold flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-charcoal truncate">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{item.product.color}</p>
                        <p className="text-sm font-semibold text-gold mt-1">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-charcoal">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Frete</span>
                    <span className={cn("text-charcoal", freeShipping && "text-green-600")}>
                      {currentStep < 2 ? 'A calcular' : freeShipping ? 'Grátis' : formatPrice(finalShipping)}
                    </span>
                  </div>
                  <div className="border-t border-border pt-3 mt-3 flex justify-between items-baseline">
                    <span className="font-medium text-charcoal">Total</span>
                    <span className="font-serif text-2xl font-semibold text-gold">
                      {formatPrice(currentStep < 2 ? subtotal : total)}
                    </span>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="mt-6 pt-6 border-t border-border space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Shield className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Compra 100% segura</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Truck className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Frete grátis acima de R$ 499</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}