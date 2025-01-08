import { DashboardShell } from '@/components/dashboard/dashboard-shell'
import { DashboardHeader } from '@/components/dashboard/dashboard-header'
import { WishlistGrid } from '@/components/dashboard/wishlist/wishlist-grid'
import { Separator } from '@/components/ui/separator'

export default function WishlistPage() {
  return (
    <DashboardShell>
      <DashboardHeader/>
      <Separator className="my-6" />
      <WishlistGrid />
    </DashboardShell>
  )
}

