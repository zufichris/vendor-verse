'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { toast } from '@/components/ui/use-toast'

// This would normally come from your cart state/database
const items = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    quantity: 1,
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 299.99,
    quantity: 2,
    image: '/placeholder.svg?height=100&width=100',
  },
]

export function OrderSummary() {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = 0
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="relative aspect-square h-16 w-16 flex-none">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{item.name}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  Qty: {item.quantity}
                </span>
              </div>
            </div>
          ))}
        </div>
        <Separator />
        <div className="space-y-1.5">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Input placeholder="Enter coupon code" />
            <Button
              variant="secondary"
              onClick={() => {
                toast({
                  title: 'Invalid coupon',
                  description: 'The coupon code you entered is invalid.',
                  variant: 'destructive',
                })
              }}
            >
              Apply
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Have a coupon code? Enter it above to get a discount on your order.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          By placing your order, you agree to our Terms of Service and Privacy
          Policy.
        </p>
      </CardFooter>
    </Card>
  )
}

