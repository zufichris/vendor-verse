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

export function CartSummary() {
  const subtotal = 799.97
  const shipping = 0
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Input placeholder="Enter coupon code" />
          <Button variant="secondary" onClick={() => {
            toast({
              title: 'Invalid coupon',
              description: 'The coupon code you entered is invalid.',
              variant: 'destructive',
            })
          }}>
            Apply
          </Button>
        </div>
        <Separator />
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" size="lg" onClick={() => {
          toast({
            title: 'Checkout initiated',
            description: 'Redirecting to checkout...',
          })
        }}>
          Proceed to Checkout
        </Button>
      </CardFooter>
    </Card>
  )
}

