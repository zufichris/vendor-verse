import { DashboardShell } from '@/components/dashboard/dashboard-shell'
import { DashboardHeader } from '@/components/dashboard/dashboard-header'
import { NotificationList } from '@/components/dashboard/notifications/notification-list'
import { NotificationSettings } from '@/components/dashboard/notifications/notification-settings'
import { Separator } from '@/components/ui/separator'

export default function NotificationsPage() {
  return (
    <DashboardShell>
      <DashboardHeader />
      <Separator className="my-6" />
      <div className="grid gap-8">
        <NotificationList />
        <NotificationSettings />
      </div>
    </DashboardShell>
  )
}

