import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf, Flame, Hand, Heart, Award, Recycle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const timeline = [
  {
    year: '2003',
    title: 'O Início',
    description: 'Nascemos de um sonho: transformar o barro brasileiro em arte funcional que conta histórias.'
  },
  {
    year: '2010',
    title: 'Expansão',
    description: 'Inauguramos nossa fábrica ampliada, dobrando a capacidade de produção artesanal.'
  },
  {
    year: '2018',
    title: 'Linha Orgânica',
    description: 'Lançamento da nossa linha mais icônica, com bordas irregulares e esmalte reativo.'
  },
  {
    year: '2024',
    title: 'Hoje',
    description: 'Mais de 500 pontos de venda e 44 mil seguidores que celebram a arte da cerâmica conosco.'
  },
]

const values = [
  {
    icon: Hand,
    title: 'Feito à Mão',
    description: 'Cada peça é moldada por artesãos que dominam técnicas passadas por gerações.'
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    description: 'Matéria-prima local, processos eco-conscientes e compromisso com o meio ambiente.'
  },
  {
    icon: Heart,
    title: 'Feito no Brasil',
    description: 'Orgulho de produzir arte brasileira reconhecida internacionalmente.'
  },
  {
    icon: Award,
    title: 'Qualidade Premium',
    description: 'Rigoroso controle de qualidade em cada etapa da produção.'
  },
]

const process = [
  {
    step: '01',
    title: 'Seleção do Barro',
    description: 'Utilizamos argila brasileira de alta qualidade, selecionada cuidadosamente para garantir resistência e beleza.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BowlVerdeJade1-5TC9hsVA9UkLUHu8SWyDf5nd2MzaRT.jpg'
  },
  {
    step: '02',
    title: 'Moldagem',
    description: 'Cada peça é moldada à mão por artesãos experientes, garantindo formas únicas e orgânicas.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/XicaraPiresVerdeJade2-EPOwJZF50AbwTqB3HFOwKHxF9Cioli.jpg'
  },
  {
    step: '03',
    title: 'Primeira Queima',
    description: 'As peças passam pelo forno a 1000°C, ganhando resistência na primeira queima.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BowlAzulRoyal1-ruWxjy40QeqKiqsZ1PFbQUO1RbhVMQ.jpg'
  },
  {
    step: '04',
    title: 'Esmaltação',
    description: 'Aplicação manual do esmalte reativo que cria os padrões únicos de cada peça.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PratoRisotoAzulRoyal1-pm1nDEt7Wm2gAPba87gYnG0OCHH4X3.png'
  },
  {
    step: '05',
    title: 'Segunda Queima',
    description: 'Queima final a 1280°C onde a mágica acontece e as cores ganham vida.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/XicaraPiresAzul2-GYentICLTQYfodyxrU4ocL9iYh9lKr.jpg'
  },
  {
    step: '06',
    title: 'Acabamento',
    description: 'Inspeção rigorosa e acabamento manual para garantir a perfeição de cada peça.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AzulRoyal1-Ce0qqPiDNCryXCCdQljdUcBya47CSG.jpg'
  },
]

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative bg-charcoal py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AzulRoyal2-uQ71V3G1nPvpHgNIRIbIm8FP3NaOAD.jpg"
            alt="Fábrica Cerâmica Novo Tempo"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/70" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="text-gold font-medium tracking-widest uppercase text-sm">
              Nossa História
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-cream leading-tight mt-4 mb-6">
              Mais de 20 anos transformando <span className="text-gold italic">barro em arte</span>
            </h1>
            <p className="text-cream-dark/70 text-lg">
              Somos uma fábrica brasileira de cerâmica artesanal que acredita que cada peça 
              deve contar uma história e despertar emoções.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-medium tracking-widest uppercase text-sm">
                A Marca
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-4 mb-6">
                Da tradição nasce<br />a inovação
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Cerâmica Novo Tempo nasceu do encontro entre a tradição ceramista brasileira 
                  e o olhar contemporâneo para o design funcional. Em 2003, iniciamos nossa jornada 
                  com um pequeno ateliê e o sonho de criar peças que transformassem o simples ato 
                  de comer em uma experiência sensorial.
                </p>
                <p>
                  Hoje, mais de duas décadas depois, mantemos a essência artesanal que nos define. 
                  Cada peça continua sendo moldada por mãos experientes, cada esmalte aplicado com 
                  a atenção de quem entende que está criando arte.
                </p>
                <p>
                  Nossa Linha Orgânica representa a evolução dessa filosofia: bordas irregulares 
                  que abraçam a imperfeição como beleza, esmaltes reativos que garantem que nenhuma 
                  peça seja igual à outra, e um compromisso inabalável com a qualidade que só o 
                  tempo e a dedicação podem construir.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-charcoal">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PratoRisotoVerdeJade1-uAIl1uunKAQgXnNltijNgJTckIzEt5.jpg"
                  alt="Pratos artesanais Linha Orgânica"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold rounded-xl p-6 max-w-[200px]">
                <p className="font-serif text-3xl text-charcoal">+20</p>
                <p className="text-charcoal/70 text-sm">anos de tradição artesanal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-medium tracking-widest uppercase text-sm">
              Linha do Tempo
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mt-4">
              Nossa jornada
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-charcoal font-serif text-lg font-bold">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px h-full bg-gold/30 my-2" />
                  )}
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="font-serif text-xl text-charcoal mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="processo" className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-medium tracking-widest uppercase text-sm">
              Processo
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-cream mt-4 mb-4">
              Do barro à sua mesa
            </h2>
            <p className="text-cream-dark/70 max-w-2xl mx-auto">
              Conheça as etapas que transformam matéria-prima em peças únicas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step) => (
              <div key={step.step} className="group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-charcoal-light mb-4">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-charcoal text-sm font-bold px-3 py-1 rounded-full">
                      {step.step}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-xl text-cream mb-2">{step.title}</h3>
                <p className="text-cream-dark/70 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section id="sustentabilidade" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-charcoal">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BowlVerdeJade2-znZX1nppTikBgRmXgM2tMLrusH0A1X.jpg"
                alt="Práticas sustentáveis"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full mb-6">
                <Recycle className="h-4 w-4" />
                <span className="text-sm font-medium">Compromisso Ambiental</span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
                Sustentabilidade em<br />cada etapa
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Acreditamos que a beleza deve ser responsável. Por isso, implementamos 
                  práticas sustentáveis em toda nossa cadeia produtiva.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Leaf className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Matéria-prima 100% brasileira, reduzindo pegada de carbono</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Flame className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Fornos de alta eficiência com recuperação de calor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Recycle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Reaproveitamento de água e resíduos no processo produtivo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Embalagens de materiais reciclados e recicláveis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
            Pronto para conhecer nossas peças?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Explore nossa coleção e encontre a peça perfeita para despertar a alma do seu lar.
          </p>
          <Button asChild size="lg" className="bg-charcoal hover:bg-charcoal-light text-cream">
            <Link href="/loja">
              Explorar Coleção
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
