import Link from 'next/link'
import { CheckCircle2, Package, Truck, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { OrderTimeline } from '@/components/order/order-timeline'

// This would normally be fetched from your database
const orderDetails = {
  id: '123456789',
  date: new Date().toLocaleDateString(),
  total: 799.97,
  email: 'john@example.com',
  status: 'Processing',
  estimatedDelivery: '2024-01-14',
  trackingNumber: 'TRK123456789',
  carrier: 'FedEx',
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
  },
}

export default function OrderConfirmationPage() {
  return (
    <div className=" mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
          <h1 className="mt-4 text-3xl font-bold">Thank You for Your Order!</h1>
          <p className="mt-2 text-muted-foreground">
            We've received your order and will notify you when it ships.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Order #{orderDetails.id}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Placed on {orderDetails.date}
                  </p>
                </div>
                <Badge variant="secondary">{orderDetails.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <Calendar className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Estimated Delivery Date</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(orderDetails.estimatedDelivery).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <Truck className="h-8 w-8 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="font-medium">Tracking Information</p>
                    <p className="text-sm text-muted-foreground">
                      {orderDetails.carrier} - {orderDetails.trackingNumber}
                    </p>
                  </div>
                  <Button variant="outline" asChild>
                    <a
                      href={`https://example.com/track/${orderDetails.trackingNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Track Package
                    </a>
                  </Button>
                </div>
              </div>

              <OrderTimeline orderId={orderDetails.id} />

              <div>
                <h3 className="font-semibold mb-4">Order Items</h3>
                <div className="space-y-4">
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
                          <span className="font-medium">{item.name}</span>
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
                <h3 className="font-semibold mb-4">Shipping Address</h3>
                <p>{orderDetails.shipping.name}</p>
                <p>{orderDetails.shipping.address}</p>
                <p>
                  {orderDetails.shipping.city}, {orderDetails.shipping.state}{' '}
                  {orderDetails.shipping.postalCode}
                </p>
                <p>{orderDetails.shipping.country}</p>
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2">
              <p className="text-sm text-muted-foreground">
                A confirmation email has been sent to {orderDetails.email}
              </p>
              <p className="text-sm text-muted-foreground">
                Need help? <Link href="/contact" className="text-primary hover:underline">Contact our support team</Link>
              </p>
            </CardFooter>
          </Card>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link href="/dashboard/orders">View Order History</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

