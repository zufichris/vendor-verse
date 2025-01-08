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
import { Separator } from '@/components/ui/separator'
import { Package, Truck } from 'lucide-react'

interface OrderDetailsProps {
  order: any // Replace with proper type
}

export function OrderDetails({ order }: OrderDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border p-4">
        <div className="flex items-center gap-4">
          <Truck className="h-8 w-8 text-muted-foreground" />
          <div className="flex-1">
            <p className="font-semibold">Shipping Information</p>
            <p className="text-sm text-muted-foreground">{order.shipping.address}</p>
          </div>
          <Badge variant="outline">{order.shipping.method}</Badge>
        </div>
        {order.shipping.tracking && (
          <div className="mt-4 flex items-center gap-2">
            <Package className="h-4 w-4" />
            <span className="text-sm">Tracking Number: {order.shipping.tracking}</span>
            <Button variant="link" className="h-auto p-0">
              Track Package
            </Button>
          </div>
        )}
      </div>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {order.items.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>${item.price.toFixed(2)}</TableCell>
                <TableCell className="text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} className="text-right font-medium">
                Subtotal
              </TableCell>
              <TableCell className="text-right">
                ${order.total.toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3} className="text-right font-medium">
                Shipping
              </TableCell>
              <TableCell className="text-right">$0.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3} className="text-right font-medium">
                Total
              </TableCell>
              <TableCell className="text-right font-bold">
                ${order.total.toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <Separator />

      <div className="flex justify-end gap-4">
        <Button variant="outline">Download Invoice</Button>
        <Button variant="outline">Contact Support</Button>
      </div>
    </div>
  )
}

