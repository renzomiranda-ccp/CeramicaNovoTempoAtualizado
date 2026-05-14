"use client";

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Filter, SlidersHorizontal, X, Grid3X3, LayoutGrid } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/product/product-card'
import { products, categories, colors, lines, filterProducts } from '@/lib/data/products'
import { cn } from '@/lib/utils'

  function LojaContent() {
  const searchParams = useSearchParams()
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [gridSize, setGridSize] = useState<'small' | 'large'>('large')
  
  // Filters
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('categoria') || 'todos')
  const [selectedColor, setSelectedColor] = useState(searchParams.get('cor') || 'todos')
  const [selectedLine, setSelectedLine] = useState(searchParams.get('linha') || 'todos')
  const [searchQuery, setSearchQuery] = useState(searchParams.get('busca') || '')

  // Update filters from URL
  useEffect(() => {
    const categoria = searchParams.get('categoria')
    const cor = searchParams.get('cor')
    const linha = searchParams.get('linha')
    const busca = searchParams.get('busca')
    
    if (categoria) setSelectedCategory(categoria)
    if (cor) setSelectedColor(cor)
    if (linha) setSelectedLine(linha)
    if (busca) setSearchQuery(busca)
  }, [searchParams])

  const filteredProducts = filterProducts({
    category: selectedCategory,
    color: selectedColor,
    line: selectedLine,
    search: searchQuery,
  })

  const clearFilters = () => {
    setSelectedCategory('todos')
    setSelectedColor('todos')
    setSelectedLine('todos')
    setSearchQuery('')
  }

  const hasActiveFilters = selectedCategory !== 'todos' || selectedColor !== 'todos' || selectedLine !== 'todos' || searchQuery !== ''

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-charcoal py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-cream mb-4">
            Nossa Loja
          </h1>
          <p className="text-cream-dark/70 text-lg max-w-2xl mx-auto">
            Explore nossa coleção de cerâmicas artesanais. Cada peça é única, 
            feita à mão com paixão e tradição.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-lg">Filtros</h2>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-gold hover:text-gold-dark transition-colors"
                  >
                    Limpar
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="font-medium mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                  Categoria
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-lg transition-colors text-sm",
                        selectedCategory === category.id
                          ? "bg-gold text-charcoal font-medium"
                          : "hover:bg-cream-dark"
                      )}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h3 className="font-medium mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                  Cor
                </h3>
                <div className="space-y-2">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-lg transition-colors text-sm flex items-center gap-2",
                        selectedColor === color.id
                          ? "bg-gold text-charcoal font-medium"
                          : "hover:bg-cream-dark"
                      )}
                    >
                      {color.hex && (
                        <span
                          className="w-4 h-4 rounded-full border border-border"
                          style={{ backgroundColor: color.hex }}
                        />
                      )}
                      {color.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Line Filter */}
              <div>
                <h3 className="font-medium mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                  Linha
                </h3>
                <div className="space-y-2">
                  {lines.map((line) => (
                    <button
                      key={line.id}
                      onClick={() => setSelectedLine(line.id)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-lg transition-colors text-sm",
                        selectedLine === line.id
                          ? "bg-gold text-charcoal font-medium"
                          : "hover:bg-cream-dark"
                      )}
                    >
                      {line.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                {/* Mobile Filter Button */}
                <Button
                  variant="outline"
                  className="lg:hidden"
                  onClick={() => setIsFilterOpen(true)}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                  {hasActiveFilters && (
                    <span className="ml-2 w-5 h-5 rounded-full bg-gold text-charcoal text-xs flex items-center justify-center">
                      !
                    </span>
                  )}
                </Button>
                
                <p className="text-muted-foreground text-sm">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'produto' : 'produtos'}
                </p>
              </div>

              {/* Grid Toggle */}
              <div className="hidden sm:flex items-center gap-2 border border-border rounded-lg p-1">
                <button
                  onClick={() => setGridSize('large')}
                  className={cn(
                    "p-2 rounded transition-colors",
                    gridSize === 'large' ? "bg-charcoal text-cream" : "hover:bg-cream-dark"
                  )}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setGridSize('small')}
                  className={cn(
                    "p-2 rounded transition-colors",
                    gridSize === 'small' ? "bg-charcoal text-cream" : "hover:bg-cream-dark"
                  )}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Active Filters Tags */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-gold/10 text-gold rounded-full text-sm">
                    Busca: {searchQuery}
                    <button onClick={() => setSearchQuery('')}>
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {selectedCategory !== 'todos' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-gold/10 text-gold rounded-full text-sm">
                    {categories.find(c => c.id === selectedCategory)?.name}
                    <button onClick={() => setSelectedCategory('todos')}>
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {selectedColor !== 'todos' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-gold/10 text-gold rounded-full text-sm">
                    {colors.find(c => c.id === selectedColor)?.name}
                    <button onClick={() => setSelectedColor('todos')}>
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {selectedLine !== 'todos' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-gold/10 text-gold rounded-full text-sm">
                    {lines.find(l => l.id === selectedLine)?.name}
                    <button onClick={() => setSelectedLine('todos')}>
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className={cn(
                "grid gap-6",
                gridSize === 'large'
                  ? "sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
              )}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <SlidersHorizontal className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="font-serif text-xl text-charcoal mb-2">
                  Nenhum produto encontrado
                </h3>
                <p className="text-muted-foreground mb-4">
                  Tente ajustar os filtros para ver mais resultados.
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Limpar filtros
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-charcoal/50 z-50 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-cream z-50 lg:hidden overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-xl">Filtros</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-8">
                {/* Category Filter */}
                <div>
                  <h3 className="font-medium mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                    Categoria
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg transition-colors",
                          selectedCategory === category.id
                            ? "bg-gold text-charcoal font-medium"
                            : "hover:bg-cream-dark"
                        )}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div>
                  <h3 className="font-medium mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                    Cor
                  </h3>
                  <div className="space-y-2">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color.id)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2",
                          selectedColor === color.id
                            ? "bg-gold text-charcoal font-medium"
                            : "hover:bg-cream-dark"
                        )}
                      >
                        {color.hex && (
                          <span
                            className="w-4 h-4 rounded-full border border-border"
                            style={{ backgroundColor: color.hex }}
                          />
                        )}
                        {color.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Line Filter */}
                <div>
                  <h3 className="font-medium mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                    Linha
                  </h3>
                  <div className="space-y-2">
                    {lines.map((line) => (
                      <button
                        key={line.id}
                        onClick={() => setSelectedLine(line.id)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg transition-colors",
                          selectedLine === line.id
                            ? "bg-gold text-charcoal font-medium"
                            : "hover:bg-cream-dark"
                        )}
                      >
                        {line.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <Button
                  className="w-full bg-charcoal hover:bg-charcoal-light text-cream"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Ver {filteredProducts.length} produtos
                </Button>
                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      clearFilters()
                      setIsFilterOpen(false)
                    }}
                  >
                    Limpar filtros
                  </Button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
