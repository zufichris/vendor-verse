import { EnhancedHero } from '@/components/enhanced-hero'
import { ProductCarousel } from '@/components/product-carousel'
import { CategoryGrid } from '@/components/category-grid'
import { VendorGrid } from '@/components/vendor-grid'
import { FeaturedProducts } from '@/components/featured-products'
import { PersonalizedRecommendations } from '@/components/personalized/recommendations'
import { TrendingSections } from '@/components/trending/trending-sections'
import { VendorSections } from '@/components/vendors/vendor-sections'
import { VisualEffects } from '@/components/effects/visual-effects'
import { CommunityFeatures } from '@/components/community/community-features'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CustomerReviews } from '@/components/reviews/customer-reviews'
import { InteractiveElements } from '@/components/interactive/interactive-elements'

export default async function HomePage() {
  return (
    <main className="flex-1">
      <EnhancedHero />

      {/* Interactive Elements */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <InteractiveElements />
      </section>

      {/* Visual Effects Section */}
      <VisualEffects />

      {/* Promotional Banner */}
      <Card className="mx-auto max-w-6xl my-8">
        <CardContent className="p-0">
          <div className="relative h-[200px] overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
              <img
                src="/placeholder.svg?height=200&width=1200"
                alt="Summer sale banner"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative flex h-full flex-col items-center justify-center gap-4 px-4 text-center">
              <h2 className="text-3xl font-bold text-white">Summer Sale</h2>
              <p className="text-lg text-white/90">Up to 50% off on selected items</p>
              <Button size="lg" variant="secondary">
                Shop Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trending Sections */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <TrendingSections />
      </section>

      {/* Vendor Sections */}
      <section className="bg-muted py-12">
        <div className="mx-auto max-w-6xl px-4">
          <VendorSections />
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Featured Products</h2>
        <FeaturedProducts />
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Shop by Category</h2>
        <CategoryGrid />
      </section>

      {/* Community Features */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <CommunityFeatures />
      </section>

      {/* Customer Reviews */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <CustomerReviews />
      </section>

      {/* Personalized Recommendations */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <PersonalizedRecommendations />
      </section>
    </main>
  )
}

