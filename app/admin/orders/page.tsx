import { AdminShell } from '@/components/admin/admin-shell'
import { AdminOrderList } from '@/components/admin/admin-order-list'
import { AdminOrderStats } from '@/components/admin/admin-order-stats'
import { AdminOrderFilters } from '@/components/admin/admin-order-filters'
import { Separator } from '@/components/ui/separator'

export default function AdminOrdersPage() {
  return (
    <AdminShell>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Order Management</h2>
          <p className="text-muted-foreground">
            Manage and process customer orders
          </p>
        </div>
      </div>
      <Separator className="my-6" />
      <AdminOrderStats />
      <AdminOrderFilters />
      <AdminOrderList />
    </AdminShell>
  )
}

