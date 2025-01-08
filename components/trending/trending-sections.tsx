import { BestSellers } from './best-sellers'
import { EditorsPicks } from './editors-picks'
import { NewArrivals } from './new-arrivals'
import { Separator } from '@/components/ui/separator'

export function TrendingSections() {
  return (
    <section className="space-y-8">
      <BestSellers />
      <Separator />
      <EditorsPicks />
      <Separator />
      <NewArrivals />
    </section>
  )
}

