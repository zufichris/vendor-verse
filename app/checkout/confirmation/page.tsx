import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

// This would normally be fetched from your database
const orderDetails = {
  orderNumber: '123456789',
  date: new Date().toLocaleDateString(),
  total: 799.97,
  email: 'john@example.com',
}

export default function ConfirmationPage() {
  return (
    <div className=" mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
        <h1 className="mt-4 text-3xl font-bold">Order Confirmed!</h1>
        <p className="mt-2 text-muted-foreground">
          Thank you for your purchase. We'll email you an order confirmation with
          details and tracking info.
        </p>

        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Order number</span>
                <span>{orderDetails.orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Date placed</span>
                <span>{orderDetails.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Total amount</span>
                <span>${orderDetails.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Email</span>
                <span>{orderDetails.email}</span>
              </div>
            </div>
          </CardContent>
          <Separator />
          <CardFooter className="p-6">
            <p className="text-sm text-muted-foreground">
              A confirmation email has been sent to {orderDetails.email}. Please
              check your inbox for order details and tracking information.
            </p>
          </CardFooter>
        </Card>

        <div className="mt-8 flex flex-col gap-4">
          <Button asChild>
            <Link href="/dashboard/orders">View Order Status</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

