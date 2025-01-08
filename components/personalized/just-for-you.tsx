'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingCart, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from '@/components/ui/use-toast'

// This would normally come from your recommendation engine
const recommendedProducts = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    rating: 4.5,
    reviews: 128,
    image: '/placeholder.svg?height=200&width=200',
    category: 'electronics',
    match: 98, // Percentage match based on user preferences
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 299.99,
    rating: 4.8,
    reviews: 256,
    image: '/placeholder.svg?height=200&width=200',
    category: 'electronics',
    match: 95,
  },
  {
    id: '3',
    name: 'Running Shoes',
    price: 129.99,
    rating: 4.6,
    reviews: 89,
    image: '/placeholder.svg?height=200&width=200',
    category: 'sports',
    match: 92,
  },
  {
    id: '4',
    name: 'Coffee Maker',
    price: 79.99,
    rating: 4.3,
    reviews: 167,
    image: '/placeholder.svg?height=200&width=200',
    category: 'home',
    match: 88,
  },
]

export function JustForYou() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Just for You</h2>
          <p className="text-sm text-muted-foreground">
            Personalized recommendations based on your interests
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {recommendedProducts.map((product, index) => (
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
                    <Badge
                      className="absolute right-2 top-2 bg-primary/90 backdrop-blur-sm"
                      variant="default"
                    >
                      {product.match}% Match
                    </Badge>
                  </div>
                  <div className="space-y-2 p-4">
                    <h3 className="font-semibold">{product.name}</h3>
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
                    <p className="text-lg font-bold">${product.price}</p>
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

