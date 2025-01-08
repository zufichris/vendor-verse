import { CartItems } from '@/components/cart/cart-items'
import { CartSummary } from '@/components/cart/cart-summary'
import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'

export default function CartPage() {
  // This would normally be fetched from your cart state/database
  const hasItems = true

  return (
    <div className=" mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        {hasItems ? (
          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
            <CartItems />
            <CartSummary />
          </div>
        ) : (
          <div className="mt-12 flex flex-col items-center justify-center space-y-4">
            <ShoppingBag className="h-16 w-16 text-muted-foreground" />
            <h2 className="text-2xl font-semibold">Your cart is empty</h2>
            <p className="text-muted-foreground">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button asChild>
              <Link href="/products">Start Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

