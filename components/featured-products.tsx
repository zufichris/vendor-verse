import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// This would come from your database/API
const featuredProducts = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'electronics',
    badge: 'New Release',
    discount: 20,
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'electronics',
    badge: 'Best Seller',
    discount: 15,
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    price: 399.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'home',
    badge: 'Staff Pick',
    discount: 10,
  },
  {
    id: '4',
    name: 'Professional Camera Kit',
    price: 1299.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'electronics',
    badge: 'Limited Edition',
    discount: 25,
  },
]

export function FeaturedProducts() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {featuredProducts.map((product) => (
        <Card key={product.id} className="group relative overflow-hidden">
          <CardHeader className="p-0">
            <Link href={`/products/${product.category}/${product.id}`}>
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
            </Link>
            {product.badge && (
              <Badge
                variant="secondary"
                className="absolute left-4 top-4 bg-background/80 backdrop-blur-sm"
              >
                {product.badge}
              </Badge>
            )}
            {product.discount && (
              <Badge
                variant="destructive"
                className="absolute right-4 top-4 bg-background/80 backdrop-blur-sm"
              >
                {product.discount}% OFF
              </Badge>
            )}
          </CardHeader>
          <CardContent className="grid gap-2 p-4">
            <CardTitle className="line-clamp-1">
              <Link
                href={`/products/${product.category}/${product.id}`}
                className="hover:underline"
              >
                {product.name}
              </Link>
            </CardTitle>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">
                ${(product.price * (1 - product.discount / 100)).toFixed(2)}
              </span>
              {product.discount && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.price}
                </span>
              )}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full" variant="secondary">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

