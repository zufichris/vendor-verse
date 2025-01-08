import { CheckoutForm } from '@/components/checkout/checkout-form'
import { OrderSummary } from '@/components/checkout/order-summary'

export default function CheckoutPage() {
  return (
    <div className=" mx-auto px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_400px]">
          <CheckoutForm />
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

