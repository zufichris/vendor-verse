import { DashboardShell } from '@/components/dashboard/dashboard-shell'
import { DashboardHeader } from '@/components/dashboard/dashboard-header'
import { AccountForm } from '@/components/dashboard/settings/account-form'
import { AddressForm } from '@/components/dashboard/settings/address-form'
import { PaymentForm } from '@/components/dashboard/settings/payment-form'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function SettingsPage() {
  return (
    <DashboardShell>
      <DashboardHeader/>
      <Separator className="my-6" />
      <Tabs defaultValue="account" className="space-y-6">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="addresses">Addresses</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <AccountForm />
        </TabsContent>
        <TabsContent value="addresses">
          <AddressForm />
        </TabsContent>
        <TabsContent value="payment">
          <PaymentForm />
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

