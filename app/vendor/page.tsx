import { VendorShell } from '@/components/vendor/vendor-shell'
import { VendorStats } from '@/components/vendor/vendor-stats'
import { VendorCharts } from '@/components/vendor/vendor-charts'
import { RecentOrders } from '@/components/vendor/recent-orders'
import { TopProducts } from '@/components/vendor/top-products'
import { Separator } from '@/components/ui/separator'

export default function VendorDashboardPage() {
  return (
    <VendorShell>
      <div className="space-y-8">
        <VendorStats />
        <Separator />
        <VendorCharts />
        <div className="grid gap-8 md:grid-cols-2">
          <RecentOrders />
          <TopProducts />
        </div>
      </div>
    </VendorShell>
  )
}

