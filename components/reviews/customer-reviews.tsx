import { TestimonialCarousel } from './testimonial-carousel'
import { ReviewGrid } from './review-grid'
import { Separator } from '@/components/ui/separator'

export function CustomerReviews() {
  return (
    <section className="space-y-16">
      <TestimonialCarousel />
      <div className="mx-auto max-w-6xl px-4">
        <ReviewGrid />
      </div>
      <Separator />
    </section>
  )
}

