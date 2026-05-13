export interface Product {
  id: string
  name: string
  slug: string
  description: string
  sensorialDescription: string
  price: number
  originalPrice?: number
  images: string[]
  category: string
  line: string
  color: string
  colorway: string
  dimensions: {
    width?: string
    height?: string
    depth?: string
    diameter?: string
    capacity?: string
  }
  inStock: boolean
  isArtisanal: boolean
  suggestedUse: string[]
  relatedProducts: string[]
}

export const products: Product[] = [
  // VERDE MUSGO
  {
    id: 'bowl-organico-verde',
    name: 'Bowl Orgânico Verde Musgo',
    slug: 'bowl-organico-verde-musgo',
    description: 'Bowl em cerâmica com borda irregular e acabamento artesanal único.',
    sensorialDescription: 'Sinta a textura suave do esmalte verde musgo com pontuações caramelo que dançam pela superfície. Cada peça carrega a marca das mãos que a moldaram, com bordas irregulares que abraçam o conteúdo como um ninho acolhedor. O esmalte reativo cria manchas terrosas que contam a história do fogo e do tempo.',
    price: 189.90,
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-te3lTAsabxlC2Gf8NZpDo03YkrZrCN.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-KilM5QLeGnmNQLITmHnqPoXUuuRPtK.jpg'
    ],
    category: 'bowls',
    line: 'Linha Orgânica',
    color: 'Verde Musgo',
    colorway: 'verde-musgo',
    dimensions: {
      diameter: '14cm',
      height: '7cm',
      capacity: '500ml'
    },
    inStock: true,
    isArtisanal: true,
    suggestedUse: ['café da manhã especial', 'bowls de açaí', 'sopas artesanais', 'restaurantes'],
    relatedProducts: ['xicara-pires-verde', 'prato-fundo-verde', 'prato-raso-verde']
  },
  {
    id: 'xicara-pires-verde',
    name: 'Xícara + Pires Orgânico Verde Musgo',
    slug: 'xicara-pires-organico-verde-musgo',
    description: 'Conjunto de xícara e pires em formato assimétrico com esmalte verde musgo.',
    sensorialDescription: 'Uma experiência tátil única a cada gole. A xícara de formato assimétrico se encaixa perfeitamente nas mãos, enquanto o pires quadrado irregular oferece um apoio elegante e inesperado. O esmalte verde musgo evoca florestas antigas, com variações que tornam cada conjunto verdadeiramente único.',
    price: 149.90,
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-cs6bXcIMfCAeIA96hmmOaQqy1f9Did.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-cmc5254WsOKUcwjMDEG40WAL4EIOa9.jpg'
    ],
    category: 'xícaras',
    line: 'Linha Orgânica',
    color: 'Verde Musgo',
    colorway: 'verde-musgo',
    dimensions: {
      diameter: '8cm',
      height: '8cm',
      capacity: '180ml'
    },
    inStock: true,
    isArtisanal: true,
    suggestedUse: ['café especial', 'chá da tarde', 'espresso duplo', 'cafeterias'],
    relatedProducts: ['bowl-organico-verde', 'prato-fundo-verde', 'prato-raso-verde']
  },

  {
    id: 'prato-raso-verde',
    name: 'Pratos Rasos Orgânicos Verde Musgo',
    slug: 'pratos-rasos-organicos-verde-musgo',
    description: 'Pratos rasos empilháveis com bordas onduladas em esmalte verde musgo.',
    sensorialDescription: 'Bordas que fluem como ondas do mar, criando um movimento perpétuo em sua mesa. Empilháveis sem perder a personalidade, cada prato revela nuances únicas do esmalte verde musgo com suas manchas terrosas características. A base plana é generosa para apresentações gastronômicas impecáveis.',
    price: 139.90,
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-LjXIBE9qM8epp0nbnxY2fKUqMEM6fg.jpg'
    ],
    category: 'pratos',
    line: 'Linha Orgânica',
    color: 'Verde Musgo',
    colorway: 'verde-musgo',
    dimensions: {
      diameter: '26cm',
      height: '2.5cm'
    },
    inStock: true,
    isArtisanal: true,
    suggestedUse: ['prato principal', 'mesa posta', 'empratamento gourmet', 'restaurantes'],
    relatedProducts: ['bowl-organico-verde', 'xicara-pires-verde', 'prato-fundo-verde']
  },
  // AZUL NOITE
  {
    id: 'bowl-organico-azul',
    name: 'Bowl Orgânico Azul Noite',
    slug: 'bowl-organico-azul-noite',
    description: 'Bowl em cerâmica com esmalte azul profundo e manchas teal, borda irregular.',
    sensorialDescription: 'Mergulhe nas profundezas do oceano com este bowl que captura a essência da noite estrelada. O esmalte azul noite com reflexos esverdeados cria um cosmos particular em cada peça. As manchas teal emergem como constelações, tornando cada bowl uma janela para o infinito.',
    price: 189.90,
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-oWfIN6Nn7Y514tWlu5vyUyNxJDDYef.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-eKLVCcRAaXYIbGcPM1Bz2rFcB6FPmO.jpg'
    ],
    category: 'bowls',
    line: 'Linha Orgânica',
    color: 'Azul Noite',
    colorway: 'azul-noite',
    dimensions: {
      diameter: '14cm',
      height: '7cm',
      capacity: '500ml'
    },
    inStock: true,
    isArtisanal: true,
    suggestedUse: ['café da manhã especial', 'bowls de açaí', 'sobremesas', 'restaurantes'],
    relatedProducts: ['xicara-pires-azul', 'prato-fundo-azul', 'prato-raso-azul']
  },
  {
    id: 'xicara-pires-azul',
    name: 'Xícara + Pires Orgânico Azul Noite',
    slug: 'xicara-pires-organico-azul-noite',
    description: 'Conjunto de xícara e pires com formato assimétrico e esmalte estelar azul noite.',
    sensorialDescription: 'Como segurar um pedaço do céu noturno entre as mãos. O esmalte estelar revela reflexos que mudam com a luz, criando uma experiência contemplativa a cada momento. O formato assimétrico desafia convenções enquanto abraça o conforto. Perfeito para pausas que merecem ser lembradas.',
    price: 149.90,
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-OTgeTTq3XvehBGkbxWNk67LKKKaBjg.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-0vuvNdO1pjZegDov8qaXMIy0nPRbdY.jpg'
    ],
    category: 'xícaras',
    line: 'Linha Orgânica',
    color: 'Azul Noite',
    colorway: 'azul-noite',
    dimensions: {
      diameter: '8cm',
      height: '8cm',
      capacity: '180ml'
    },
    inStock: true,
    isArtisanal: true,
    suggestedUse: ['café especial', 'chá contemplativo', 'momentos de pausa', 'cafeterias especiais'],
    relatedProducts: ['bowl-organico-azul', 'prato-fundo-azul', 'prato-raso-azul']
  },
  {
    id: 'prato-fundo-azul',
    name: 'Prato Fundo Orgânico Azul Noite',
    slug: 'prato-fundo-organico-azul-noite',
    description: 'Prato fundo com aba larga e esmalte reactive em azul profundo.',
    sensorialDescription: 'Uma tela azul profunda que realça cada ingrediente como joias preciosas. O esmalte reactive cria ondas e texturas únicas que mudam de intensidade conforme a luz. A aba generosa enquadra suas criações culinárias, transformando cada prato em uma apresentação digna de estrelas.',
    price: 169.90,
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-SZ4XK7mDK4bJirbaeY4bTO4o99mpKj.png'
    ],
    category: 'pratos',
    line: 'Linha Orgânica',
    color: 'Azul Noite',
    colorway: 'azul-noite',
    dimensions: {
      diameter: '26cm',
      height: '5cm'
    },
    inStock: true,
    isArtisanal: true,
    suggestedUse: ['pratos autorais', 'fine dining', 'sopas especiais', 'restaurantes premiados'],
    relatedProducts: ['bowl-organico-azul', 'xicara-pires-azul', 'prato-raso-azul']
  },
  {
    id: 'prato-raso-azul',
    name: 'Pratos Rasos Orgânicos Azul Noite',
    slug: 'pratos-rasos-organicos-azul-noite',
    description: 'Pratos rasos empilháveis com bordas onduladas em esmalte azul noite.',
    sensorialDescription: 'Cada prato é um fragmento do céu noturno em sua mesa. As bordas onduladas fluem naturalmente, enquanto o esmalte azul profundo com reflexos esverdeados cria profundidade visual única. Empilháveis e práticos, sem perder a sofisticação que marca a Linha Orgânica.',
    price: 139.90,
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-ohAmfXFVtpa6kuz6mfghcocQEfxSlE.png'
    ],
    category: 'pratos',
    line: 'Linha Orgânica',
    color: 'Azul Noite',
    colorway: 'azul-noite',
    dimensions: {
      diameter: '23cm',
      height: '4cm'
    },
    inStock: true,
    isArtisanal: true,
    suggestedUse: ['prato principal', 'mesa posta elegante', 'eventos especiais', 'restaurantes'],
    relatedProducts: ['bowl-organico-azul', 'xicara-pires-azul', 'prato-fundo-azul']
  },
  {
    id: 'conjunto-jantar-azul',
    name: 'Conjunto Jantar Azul Noite',
    slug: 'conjunto-jantar-azul-noite',
    description: 'Conjunto completo: bowl + prato raso + prato fundo + xícara com pires em azul noite.',
    sensorialDescription: 'A experiência completa da Linha Orgânica em sua versão mais celestial. Este conjunto harmoniza todas as peças em azul noite, criando uma mesa que convida à contemplação e ao prazer. Cada elemento complementa o outro, criando uma narrativa visual coesa que eleva qualquer refeição ao status de celebração.',
    price: 599.90,
    originalPrice: 649.60,
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-k70XlIEACf62mUzo7Sm1zEMOiwksPW.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-9WoJqwCDrKfdVYOfmSlqRGTMG1rtQh.jpg'
    ],
    category: 'conjuntos',
    line: 'Linha Orgânica',
    color: 'Azul Noite',
    colorway: 'azul-noite',
    dimensions: {
      diameter: 'Variados',
      height: 'Variados'
    },
    inStock: true,
    isArtisanal: true,
    suggestedUse: ['presente especial', 'casa nova', 'casamento', 'experiência completa'],
    relatedProducts: ['bowl-organico-azul', 'xicara-pires-azul', 'prato-fundo-azul', 'prato-raso-azul']
  }
]

export const categories = [
  { id: 'todos', name: 'Todos', slug: 'todos' },
  { id: 'bowls', name: 'Bowls', slug: 'bowls' },
  { id: 'pratos', name: 'Pratos', slug: 'pratos' },
  { id: 'xícaras', name: 'Xícaras', slug: 'xicaras' },
  { id: 'conjuntos', name: 'Conjuntos', slug: 'conjuntos' },
]

export const colors = [
  { id: 'todos', name: 'Todas as cores', slug: 'todos' },
  { id: 'verde-musgo', name: 'Verde Musgo', slug: 'verde-musgo', hex: '#5A8A6E' },
  { id: 'azul-noite', name: 'Azul Noite', slug: 'azul-noite', hex: '#4A6B8A' },
]

export const lines = [
  { id: 'todos', name: 'Todas as linhas', slug: 'todos' },
  { id: 'linha-organica', name: 'Linha Orgânica', slug: 'linha-organica' },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getRelatedProducts(productId: string): Product[] {
  const product = getProductById(productId)
  if (!product) return []
  return product.relatedProducts
    .map(id => getProductById(id))
    .filter((p): p is Product => p !== undefined)
}

export function filterProducts(filters: {
  category?: string
  color?: string
  line?: string
  search?: string
}): Product[] {
  return products.filter(product => {
    if (filters.category && filters.category !== 'todos' && product.category !== filters.category) {
      return false
    }
    if (filters.color && filters.color !== 'todos' && product.colorway !== filters.color) {
      return false
    }
    if (filters.line && filters.line !== 'todos') {
      const lineSlug = product.line.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      if (lineSlug !== filters.line) return false
    }
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      return (
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.color.toLowerCase().includes(searchLower)
      )
    }
    return true
  })
}