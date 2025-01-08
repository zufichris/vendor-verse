'use client'

import { Minus, Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { toast } from '@/components/ui/use-toast'

const cartItems = [
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

export function CartItems() {
  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <Card key={item.id}>
          <CardHeader className="flex flex-row items-center gap-4 space-y-0">
            <div className="relative aspect-square h-24 w-24 flex-none">
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-lg font-bold">${item.price}</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="flex-none"
              onClick={() => {
                toast({
                  title: 'Item removed',
                  description: `${item.name} has been removed from your cart.`,
                })
              }}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Remove</span>
            </Button>
          </CardHeader>
          <Separator />
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => {
                  toast({
                    title: 'Quantity updated',
                    description: `${item.name} quantity has been updated.`,
                  })
                }}
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <Input
                type="number"
                min="1"
                value={item.quantity}
                onChange={() => {}}
                className="h-8 w-16 text-center"
              />
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => {
                  toast({
                    title: 'Quantity updated',
                    description: `${item.name} quantity has been updated.`,
                  })
                }}
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <p className="ml-auto text-sm text-muted-foreground">
              Subtotal: ${(item.price * item.quantity).toFixed(2)}
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

