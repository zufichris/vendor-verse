import { DashboardShell } from '@/components/dashboard/dashboard-shell'
import { DashboardHeader } from '@/components/dashboard/dashboard-header'
import { OrderSummary } from '@/components/dashboard/order-summary'
import { RecentOrders } from '@/components/dashboard/recent-orders'
import { SavedItems } from '@/components/dashboard/saved-items'
import { Separator } from '@/components/ui/separator'

export default async function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader />
      <Separator className="my-6" />
      <div className="grid gap-6 lg:grid-cols-2">
        <OrderSummary />
        <SavedItems />
      </div>
      <Separator className="my-6" />
      <RecentOrders />
    </DashboardShell>
  )
}

