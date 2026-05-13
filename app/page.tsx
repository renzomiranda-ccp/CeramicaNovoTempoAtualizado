import { HeroSection } from '@/components/home/hero-section'
import { CollectionsSection } from '@/components/home/collections-section'
import { FeaturedProducts } from '@/components/home/featured-products'
import { ArtisanalSection } from '@/components/home/artisanal-section'
import { InstagramSection } from '@/components/home/instagram-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CollectionsSection />
      <FeaturedProducts />
      <ArtisanalSection />
      <TestimonialsSection />
      <InstagramSection />
      <CTASection />
    </>
  )
}
