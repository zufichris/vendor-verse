'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Flame, ShoppingCart, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from '@/components/ui/use-toast'

// This would normally be fetched from your API
const bestSellers = [
  {
    id: '1',
    name: 'Wireless Noise-Canceling Headphones',
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.8,
    reviews: 1250,
    sales: 5000,
    image: '/placeholder.svg?height=200&width=200',
    category: 'electronics',
    trending: true,
  },
  {
    id: '2',
    name: 'Smart Fitness Watch Pro',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.7,
    reviews: 890,
    sales: 3800,
    image: '/placeholder.svg?height=200&width=200',
    category: 'electronics',
    trending: true,
  },
  {
    id: '3',
    name: 'Premium Coffee Maker',
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviews: 2100,
    sales: 4200,
    image: '/placeholder.svg?height=200&width=200',
    category: 'home',
    trending: true,
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.6,
    reviews: 750,
    sales: 2800,
    image: '/placeholder.svg?height=200&width=200',
    category: 'home',
    trending: false,
  },
]

export function BestSellers() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold tracking-tight">Best Sellers</h2>
          <Badge variant="secondary" className="gap-1">
            <Flame className="h-3 w-3 text-orange-500" />
            Hot
          </Badge>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/products?sort=best-selling">View All</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {bestSellers.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group h-full">
              <Link href={`/products/${product.category}/${product.id}`}>
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    {product.trending && (
                      <Badge
                        className="absolute right-2 top-2 gap-1"
                        variant="secondary"
                      >
                        <Flame className="h-3 w-3 text-orange-500" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-2 p-4">
                    <h3 className="line-clamp-1 font-semibold">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-primary text-primary'
                                : 'fill-muted text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {product.sales.toLocaleString()} sold
                    </p>
                  </div>
                </CardContent>
              </Link>
              <CardFooter className="p-4 pt-0">
                <Button
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: 'Added to cart',
                      description: `${product.name} has been added to your cart.`,
                    })
                  }}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

