'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  User, 
  Mail, 
  Lock, 
  Package, 
  Heart, 
  Settings,
  ChevronRight,
  Eye,
  EyeOff
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function ContaPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const accountLinks = [
    { icon: Package, label: 'Meus Pedidos', href: '/conta/pedidos' },
    { icon: Heart, label: 'Lista de Favoritos', href: '/favoritos' },
    { icon: Settings, label: 'Dados da Conta', href: '/conta/dados' },
  ]

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-cream">
        {/* Hero */}
        <section className="bg-charcoal py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-3xl md:text-4xl text-cream">
              Olá, Maria!
            </h1>
            <p className="text-cream-dark/70">
              Gerencie sua conta e acompanhe seus pedidos
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {accountLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center justify-between p-6 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                    <link.icon className="h-6 w-6 text-gold" />
                  </div>
                  <span className="font-medium">{link.label}</span>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-gold transition-colors" />
              </Link>
            ))}
          </div>

          {/* Recent Orders Preview */}
          <div className="mt-12">
            <h2 className="font-serif text-2xl text-charcoal mb-6">
              Pedidos Recentes
            </h2>
            <div className="bg-card rounded-xl border border-border p-8 text-center">
              <Package className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">
                Você ainda não fez nenhum pedido
              </p>
              <Button asChild className="mt-4 bg-charcoal hover:bg-charcoal-light text-cream">
                <Link href="/loja">Explorar Produtos</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-charcoal py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <User className="h-12 w-12 text-gold mx-auto mb-4" />
          <h1 className="font-serif text-4xl md:text-5xl text-cream mb-4">
            Minha Conta
          </h1>
          <p className="text-cream-dark/70 text-lg">
            Entre ou crie sua conta para acompanhar pedidos e salvar favoritos
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Entrar</TabsTrigger>
              <TabsTrigger value="register">Criar Conta</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <div className="bg-card rounded-2xl border border-border p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">
                      <Mail className="h-4 w-4 inline mr-2" />
                      E-mail
                    </Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password">
                      <Lock className="h-4 w-4 inline mr-2" />
                      Senha
                    </Label>
                    <div className="relative">
                      <Input
                        id="login-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      Lembrar-me
                    </label>
                    <a href="#" className="text-sm text-gold hover:underline">
                      Esqueci minha senha
                    </a>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-charcoal hover:bg-charcoal-light text-cream"
                    onClick={(e) => {
                      e.preventDefault()
                      setIsLoggedIn(true)
                    }}
                  >
                    Entrar
                  </Button>
                </form>
              </div>
            </TabsContent>

            <TabsContent value="register">
              <div className="bg-card rounded-2xl border border-border p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">
                      <User className="h-4 w-4 inline mr-2" />
                      Nome Completo
                    </Label>
                    <Input
                      id="register-name"
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">
                      <Mail className="h-4 w-4 inline mr-2" />
                      E-mail
                    </Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">
                      <Lock className="h-4 w-4 inline mr-2" />
                      Senha
                    </Label>
                    <div className="relative">
                      <Input
                        id="register-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Mínimo 8 caracteres"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-start gap-2 text-sm">
                      <input type="checkbox" className="rounded mt-1" required />
                      <span>
                        Li e aceito os{' '}
                        <a href="/politicas/termos" className="text-gold hover:underline">
                          Termos de Uso
                        </a>{' '}
                        e a{' '}
                        <a href="/politicas/privacidade" className="text-gold hover:underline">
                          Política de Privacidade
                        </a>
                      </span>
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      Quero receber novidades e ofertas exclusivas
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-charcoal hover:bg-charcoal-light text-cream"
                  >
                    Criar Conta
                  </Button>
                </form>
              </div>
            </TabsContent>
          </Tabs>

          {/* B2B Notice */}
          <div className="mt-8 p-6 bg-gold/10 rounded-xl text-center">
            <p className="text-sm text-charcoal mb-2">
              <strong>É lojista ou compra em volume?</strong>
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Acesse nossa área exclusiva para empresas com condições especiais.
            </p>
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-charcoal">
              <Link href="/b2b">Área do Lojista</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
