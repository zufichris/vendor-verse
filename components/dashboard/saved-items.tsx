import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

const savedItems = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    image: '/placeholder.svg?height=100&width=100',
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 299.99,
    image: '/placeholder.svg?height=100&width=100',
  },
]

export function SavedItems() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved Items</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {savedItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 rounded-lg border p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <Link
                  href={`/products/${item.id}`}
                  className="font-medium hover:underline"
                >
                  {item.name}
                </Link>
                <p className="text-sm text-muted-foreground">${item.price}</p>
              </div>
              <Button size="sm">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          ))}
          <Button variant="outline" className="w-full" asChild>
            <Link href="/dashboard/wishlist">View All Saved Items</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

