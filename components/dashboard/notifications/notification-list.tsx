'use client'

import { Bell, Package, CreditCard, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const notifications = [
  {
    id: '1',
    title: 'Order Shipped',
    description: 'Your order #1234 has been shipped and is on its way.',
    date: '2024-01-07T10:00:00',
    icon: Package,
    read: false,
  },
  {
    id: '2',
    title: 'Payment Successful',
    description: 'Payment for order #1234 has been processed successfully.',
    date: '2024-01-06T15:30:00',
    icon: CreditCard,
    read: true,
  },
  {
    id: '3',
    title: 'New Message',
    description: 'You have a new message from Tech Haven regarding your order.',
    date: '2024-01-05T09:15:00',
    icon: MessageSquare,
    read: false,
  },
]

export function NotificationList() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Notifications</CardTitle>
            <CardDescription>
              Your latest updates and alerts
            </CardDescription>
          </div>
          <Button variant="outline" size="sm">
            Mark all as read
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => {
            const Icon = notification.icon
            return (
              <div
                key={notification.id}
                className={`flex items-start gap-4 rounded-lg border p-4 ${
                  notification.read ? 'bg-background' : 'bg-muted/50'
                }`}
              >
                <Icon className="mt-1 h-5 w-5 text-muted-foreground" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{notification.title}</p>
                    <time className="text-sm text-muted-foreground">
                      {new Date(notification.date).toLocaleDateString()}
                    </time>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

