'use client'

import * as React from 'react'
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
import { OrderDetails } from './order-details'

const orders = [
  {
    id: '1234',
    date: '2024-01-01',
    status: 'Delivered',
    total: 125.99,
    items: [
      {
        id: '1',
        name: 'Wireless Headphones',
        price: 89.99,
        quantity: 1,
        image: '/placeholder.svg?height=50&width=50',
      },
      {
        id: '2',
        name: 'Smart Watch',
        price: 36.00,
        quantity: 1,
        image: '/placeholder.svg?height=50&width=50',
      },
    ],
    shipping: {
      address: '123 Main St, City, Country',
      method: 'Express Shipping',
      tracking: 'TR123456789',
    },
  },
  {
    id: '1235',
    date: '2024-01-03',
    status: 'In Transit',
    total: 85.50,
    items: [
      {
        id: '3',
        name: 'Bluetooth Speaker',
        price: 85.50,
        quantity: 1,
        image: '/placeholder.svg?height=50&width=50',
      },
    ],
    shipping: {
      address: '456 Oak St, City, Country',
      method: 'Standard Shipping',
      tracking: 'TR987654321',
    },
  },
]

export function OrderList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Total</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">#{order.id}</TableCell>
            <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
            <TableCell>
              <Badge
                variant={
                  order.status === 'Delivered'
                    ? 'default'
                    : order.status === 'In Transit'
                    ? 'secondary'
                    : 'outline'
                }
              >
                {order.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Order #{order.id}</DialogTitle>
                    <DialogDescription>
                      Placed on {new Date(order.date).toLocaleDateString()}
                    </DialogDescription>
                  </DialogHeader>
                  <OrderDetails order={order} />
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

