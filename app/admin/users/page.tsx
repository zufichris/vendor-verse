import { AdminShell } from '@/components/admin/admin-shell'
import { UserList } from '@/components/admin/users/user-list'
import { UserStats } from '@/components/admin/users/user-stats'
import { UserFilters } from '@/components/admin/users/user-filters'
import { Separator } from '@/components/ui/separator'

export default function UsersPage() {
  return (
    <AdminShell>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">User Management</h2>
          <p className="text-muted-foreground">
            Manage platform users and vendor applications
          </p>
        </div>
      </div>
      <Separator className="my-6" />
      <UserStats />
      <UserFilters />
      <UserList />
    </AdminShell>
  )
}

