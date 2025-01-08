'use client'

import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>
          Choose what notifications you want to receive
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="order-updates">Order Updates</Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications about your order status
              </p>
            </div>
            <Switch id="order-updates" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="promotional">Promotional</Label>
              <p className="text-sm text-muted-foreground">
                Receive emails about new products and deals
              </p>
            </div>
            <Switch id="promotional" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="messages">Messages</Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications about new messages
              </p>
            </div>
            <Switch id="messages" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="security">Security</Label>
              <p className="text-sm text-muted-foreground">
                Receive alerts about your account security
              </p>
            </div>
            <Switch id="security" defaultChecked />
          </div>
        </div>
        <Button
          onClick={() => {
            toast({
              title: 'Preferences updated',
              description: 'Your notification preferences have been saved.',
            })
          }}
        >
          Save Preferences
        </Button>
      </CardContent>
    </Card>
  )
}

