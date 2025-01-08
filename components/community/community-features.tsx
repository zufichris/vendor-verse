import { UserGallery } from './user-gallery'
import { BlogSection } from './blog-section'
import { Separator } from '@/components/ui/separator'

export function CommunityFeatures() {
  return (
    <section className="space-y-16">
      <UserGallery />
      <Separator />
      <BlogSection />
    </section>
  )
}

