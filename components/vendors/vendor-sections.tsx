import { TopVendors } from './top-vendors'
import { ExclusiveDeals } from './exclusive-deals'
import { Separator } from '@/components/ui/separator'

export function VendorSections() {
  return (
    <section className="space-y-8">
      <TopVendors />
      <Separator />
      <ExclusiveDeals />
    </section>
  )
}

