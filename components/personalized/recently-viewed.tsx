'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { toast } from '@/components/ui/use-toast'

// This would normally be fetched from local storage or user session
const recentlyViewedProducts = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'electronics',
    viewedAt: '2024-01-07T10:30:00Z',
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 299.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'electronics',
    viewedAt: '2024-01-07T10:15:00Z',
  },
  {
    id: '3',
    name: 'Running Shoes',
    price: 129.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'sports',
    viewedAt: '2024-01-07T10:00:00Z',
  },
  {
    id: '4',
    name: 'Coffee Maker',
    price: 79.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'home',
    viewedAt: '2024-01-07T09:45:00Z',
  },
  {
    id: '5',
    name: 'Laptop Stand',
    price: 49.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'electronics',
    viewedAt: '2024-01-07T09:30:00Z',
  },
]

export function RecentlyViewed() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Recently Viewed</h2>
          <p className="text-sm text-muted-foreground">
            Products you've viewed in the past 24 hours
          </p>
        </div>
        <Button variant="ghost" size="sm" className="gap-2">
          <Clock className="h-4 w-4" />
          View History
        </Button>
      </div>

      <ScrollArea className="pb-4">
        <div className="flex gap-4">
          {recentlyViewedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-[280px] flex-none"
            >
              <Card className="group h-full">
                <Link href={`/products/${product.category}/${product.id}`}>
                  <CardHeader className="p-0">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 p-4">
                    <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                    <CardDescription>
                      Viewed{' '}
                      {new Date(product.viewedAt).toLocaleTimeString([], {
                        hour: 'numeric',
                        minute: '2-digit',
                      })}
                    </CardDescription>
                    <p className="text-lg font-bold">${product.price}</p>
                  </CardContent>
                </Link>
                <CardFooter className="p-4 pt-0">
                  <Button
                    variant="secondary"
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
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

