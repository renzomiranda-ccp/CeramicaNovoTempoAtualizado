'use client'

import { useState, use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  Heart, 
  ShoppingBag, 
  Minus, 
  Plus, 
  MessageCircle,
  Truck,
  Shield,
  RotateCcw,
  ChevronRight,
  Check
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ProductCard } from '@/components/product/product-card'
import { getProductBySlug, getRelatedProducts, getProductById } from '@/lib/data/products'
import { useCartStore } from '@/lib/store/cart-store'
import { useWishlistStore } from '@/lib/store/wishlist-store'
import { cn } from '@/lib/utils'

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = getProductBySlug(slug)
  
  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product.id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [cep, setCep] = useState('')

  const { addItem } = useCartStore()
  const { toggleItem, isInWishlist } = useWishlistStore()
  const inWishlist = isInWishlist(product.id)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
  }

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de saber mais sobre o produto: ${product.name} (${product.color})`
  )

  return (
    <div className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="bg-cream-dark py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/loja" className="hover:text-gold transition-colors">Loja</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-charcoal">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-charcoal">
              <Image
                src={product.images[selectedImage] || '/images/placeholder.jpg'}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.isArtisanal && (
                <div className="absolute top-4 left-4 bg-gold text-charcoal text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                  Produto Artesanal — Peça Única
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "relative w-20 h-20 rounded-lg overflow-hidden bg-charcoal transition-all",
                      selectedImage === index
                        ? "ring-2 ring-gold ring-offset-2"
                        : "opacity-60 hover:opacity-100"
                    )}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - Imagem ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            {/* Line & Color */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gold font-medium text-sm">{product.line}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground text-sm">{product.color}</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-serif text-3xl text-gold">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Short Description */}
            <p className="text-muted-foreground mb-6">
              {product.description}
            </p>

            {/* Dimensions */}
            <div className="bg-cream-dark rounded-xl p-4 mb-6">
              <h3 className="font-medium text-sm uppercase tracking-wide text-muted-foreground mb-3">
                Dimensões
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {product.dimensions.diameter && (
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Diâmetro</span>
                    <span className="text-sm font-medium">{product.dimensions.diameter}</span>
                  </div>
                )}
                {product.dimensions.height && (
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Altura</span>
                    <span className="text-sm font-medium">{product.dimensions.height}</span>
                  </div>
                )}
                {product.dimensions.capacity && (
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Capacidade</span>
                    <span className="text-sm font-medium">{product.dimensions.capacity}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-cream-dark transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-6 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-cream-dark transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                {/* Wishlist Button */}
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12"
                  onClick={() => toggleItem(product.id)}
                >
                  <Heart
                    className={cn(
                      "h-5 w-5",
                      inWishlist && "fill-terracotta text-terracotta"
                    )}
                  />
                </Button>
              </div>

              {/* Add to Cart */}
              <Button
                onClick={handleAddToCart}
                className="w-full h-14 bg-charcoal hover:bg-charcoal-light text-cream text-lg"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Adicionar ao Carrinho
              </Button>

              {/* WhatsApp */}
              <Button
                asChild
                variant="outline"
                className="w-full h-12 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
              >
                <a
                  href={`https://wa.me/5519996444011?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Falar com Vendedor
                </a>
              </Button>
            </div>

            {/* Shipping Calculator */}
            <div className="border border-border rounded-xl p-4 mb-6">
              <h3 className="font-medium mb-3">Calcular Frete</h3>
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Digite seu CEP"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  className="flex-1"
                  maxLength={9}
                />
                <Button variant="outline">Calcular</Button>
              </div>
              <a
                href="https://buscacepinter.correios.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gold hover:underline mt-2 inline-block"
              >
                Não sei meu CEP
              </a>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3">
                <Truck className="h-6 w-6 mx-auto text-gold mb-2" />
                <p className="text-xs text-muted-foreground">Frete grátis acima de R$ 499</p>
              </div>
              <div className="text-center p-3">
                <Shield className="h-6 w-6 mx-auto text-gold mb-2" />
                <p className="text-xs text-muted-foreground">Compra 100% segura</p>
              </div>
              <div className="text-center p-3">
                <RotateCcw className="h-6 w-6 mx-auto text-gold mb-2" />
                <p className="text-xs text-muted-foreground">7 dias para troca</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sensorial Description */}
        <section className="mt-16 py-12 border-t border-border">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl text-charcoal mb-6">
              Uma experiência sensorial
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {product.sensorialDescription}
            </p>

            {/* Suggested Uses */}
            <div>
              <h3 className="font-medium mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                Uso sugerido
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.suggestedUse.map((use) => (
                  <span
                    key={use}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-cream-dark rounded-full text-sm"
                  >
                    <Check className="h-3 w-3 text-gold" />
                    {use}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Complete Your Table */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 py-12 border-t border-border">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl text-charcoal">
                Complete sua Mesa
              </h2>
              <Link
                href="/loja"
                className="text-gold hover:text-gold-dark transition-colors text-sm font-medium"
              >
                Ver mais
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
