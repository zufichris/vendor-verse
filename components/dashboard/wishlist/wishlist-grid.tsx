'use client'

import { ShoppingCart, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { toast } from '@/components/ui/use-toast'

const wishlistItems = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    image: '/placeholder.svg?height=200&width=200',
    inStock: true,
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 299.99,
    image: '/placeholder.svg?height=200&width=200',
    inStock: true,
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    price: 89.99,
    image: '/placeholder.svg?height=200&width=200',
    inStock: false,
  },
]

export function WishlistGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {wishlistItems.map((item) => (
        <Card key={item.id} className="flex flex-col">
          <CardHeader className="p-0">
            <div className="aspect-square">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            </div>
          </CardHeader>
          <CardContent className="flex-1 space-y-2 p-4">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-2xl font-bold">${item.price}</p>
            {!item.inStock && (
              <p className="text-sm text-red-500">Out of Stock</p>
            )}
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <div className="flex w-full gap-2">
              <Button
                className="flex-1"
                disabled={!item.inStock}
                onClick={() => {
                  toast({
                    title: 'Added to cart',
                    description: `${item.name} has been added to your cart.`,
                  })
                }}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  toast({
                    title: 'Removed from wishlist',
                    description: `${item.name} has been removed from your wishlist.`,
                  })
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

