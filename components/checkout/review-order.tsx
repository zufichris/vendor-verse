'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

interface ReviewOrderProps {
  onSubmit: () => Promise<void>
}

// This would normally come from your cart/checkout state
const orderDetails = {
  items: [
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
  ],
  shipping: {
    name: 'John Doe',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    postalCode: '10001',
    country: 'United States',
    method: 'Standard Shipping',
  },
  payment: {
    method: 'Credit Card',
    last4: '4242',
  },
}

export function ReviewOrder({ onSubmit }: ReviewOrderProps) {
  const subtotal = orderDetails.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const shipping = 0
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold">Review Your Order</h2>
        <p className="text-sm text-muted-foreground">
          Please review your order details before placing your order.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">Items</h3>
          <div className="mt-4 space-y-4">
            {orderDetails.items.map((item) => (
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
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold">Shipping</h3>
          <div className="mt-4 space-y-1">
            <p>{orderDetails.shipping.name}</p>
            <p>{orderDetails.shipping.address}</p>
            <p>
              {orderDetails.shipping.city}, {orderDetails.shipping.state}{' '}
              {orderDetails.shipping.postalCode}
            </p>
            <p>{orderDetails.shipping.country}</p>
            <p className="text-sm text-muted-foreground mt-2">
              {orderDetails.shipping.method}
            </p>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold">Payment</h3>
          <div className="mt-4">
            <p>
              {orderDetails.payment.method} ending in{' '}
              {orderDetails.payment.last4}
            </p>
          </div>
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
      </div>

      <Button onClick={onSubmit} className="w-full">
        Place Order
      </Button>
    </div>
  )
}

