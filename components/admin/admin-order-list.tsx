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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { MoreHorizontal } from 'lucide-react'
import { toast } from '@/components/ui/use-toast'

export function AdminOrderList() {
  const updateOrderStatus = async (orderId: string, status: string) => {
    // This would normally make an API call
    toast({
      title: 'Order status updated',
      description: `Order #${orderId} status changed to ${status}`,
    })
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* This would normally be fetched from your API */}
          <TableRow>
            <TableCell className="font-medium">#123456789</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>{new Date().toLocaleDateString()}</TableCell>
            <TableCell>
              <Badge variant="secondary">Processing</Badge>
            </TableCell>
            <TableCell>$799.97</TableCell>
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
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => updateOrderStatus('123456789', 'Shipped')}>
                    Mark as Shipped
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => updateOrderStatus('123456789', 'Delivered')}>
                    Mark as Delivered
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => updateOrderStatus('123456789', 'Cancelled')}>
                    Cancel Order
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Contact Customer</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

