import { AdminShell } from '@/components/admin/admin-shell'
import { TicketList } from '@/components/admin/support/ticket-list'
import { TicketStats } from '@/components/admin/support/ticket-stats'
import { TicketFilters } from '@/components/admin/support/ticket-filters'
import { Separator } from '@/components/ui/separator'

export default function SupportPage() {
  return (
    <AdminShell>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Support & Disputes</h2>
          <p className="text-muted-foreground">
            Manage customer support tickets and user disputes
          </p>
        </div>
      </div>
      <Separator className="my-6" />
      <TicketStats />
      <TicketFilters />
      <TicketList />
    </AdminShell>
  )
}

