import { DashboardShell } from '@/components/dashboard/dashboard-shell'
import { OrderList } from '@/components/order/order-list'
import { OrderStats } from '@/components/order/order-stats'
import { OrderFilters } from '@/components/order/order-filters'
import { Separator } from '@/components/ui/separator'

export default function OrdersPage() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Orders</h2>
          <p className="text-muted-foreground">
            View and manage your order history
          </p>
        </div>
      </div>
      <Separator className="my-6" />
      <OrderStats />
      <OrderFilters />
      <OrderList />
    </DashboardShell>
  )
}

