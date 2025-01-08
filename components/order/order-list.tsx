'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MoreHorizontal, Star } from 'lucide-react'
import { FeedbackForm } from './feedback-form'

// This would normally be fetched from your API
const orders = [
  {
    id: '123456789',
    date: '2024-01-07',
    total: 799.97,
    status: 'Processing',
    hasReview: false,
    items: [
      {
        id: '1',
        name: 'Wireless Headphones',
        quantity: 1,
        price: 199.99,
      },
      {
        id: '2',
        name: 'Smart Watch',
        quantity: 2,
        price: 299.99,
      },
    ],
  },
  {
    id: '123456788',
    date: '2024-01-05',
    total: 149.99,
    status: 'Delivered',
    hasReview: true,
    items: [
      {
        id: '3',
        name: 'Bluetooth Speaker',
        quantity: 1,
        price: 149.99,
      },
    ],
  },
]

export function OrderList() {
  const [selectedOrder, setSelectedOrder] = React.useState<typeof orders[0] | null>(
    null
  )

  const handleReorder = async (order: typeof orders[0]) => {
    // This would normally make an API call to add items to cart
    console.log('Reordering items from order:', order.id)
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Items</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">
                <Link
                  href={`/checkout/confirmation/${order.id}`}
                  className="hover:underline"
                >
                  #{order.id}
                </Link>
              </TableCell>
              <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    order.status === 'Delivered'
                      ? 'default'
                      : order.status === 'Processing'
                      ? 'secondary'
                      : 'outline'
                  }
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>${order.total.toFixed(2)}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  {order.items.map((item) => (
                    <span key={item.id} className="text-sm text-muted-foreground">
                      {item.quantity}x {item.name}
                    </span>
                  ))}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href={`/checkout/confirmation/${order.id}`}>
                        View Details
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleReorder(order)}>
                      Reorder Items
                    </DropdownMenuItem>
                    {order.status === 'Delivered' && !order.hasReview && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                            Leave Feedback
                          </DropdownMenuItem>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Order Feedback</DialogTitle>
                            <DialogDescription>
                              Share your experience with this order
                            </DialogDescription>
                          </DialogHeader>
                          <FeedbackForm orderId={order.id} />
                        </DialogContent>
                      </Dialog>
                    )}
                    <DropdownMenuItem>Download Invoice</DropdownMenuItem>
                    <DropdownMenuItem>Contact Support</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

