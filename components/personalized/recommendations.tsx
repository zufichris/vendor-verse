import { JustForYou } from './just-for-you'
import { RecentlyViewed } from './recently-viewed'
import { Separator } from '@/components/ui/separator'

export function PersonalizedRecommendations() {
  return (
    <section className="space-y-8">
      <JustForYou />
      <Separator />
      <RecentlyViewed />
    </section>
  )
}

