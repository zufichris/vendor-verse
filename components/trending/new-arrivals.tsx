'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { toast } from '@/components/ui/use-toast'

// This would normally be fetched from your API
const newArrivals = [
  {
    id: '1',
    name: 'Smart Home Hub',
    price: 149.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'electronics',
    addedAt: '2024-01-07T10:00:00Z',
  },
  {
    id: '2',
    name: 'Organic Cotton Bedding Set',
    price: 199.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'home',
    addedAt: '2024-01-07T09:30:00Z',
  },
  {
    id: '3',
    name: 'Portable Blender',
    price: 79.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'kitchen',
    addedAt: '2024-01-07T09:00:00Z',
  },
  {
    id: '4',
    name: 'Sustainable Water Bottle',
    price: 34.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'lifestyle',
    addedAt: '2024-01-07T08:30:00Z',
  },
  {
    id: '5',
    name: 'Wireless Charging Pad',
    price: 49.99,
    image: '/placeholder.svg?height=200&width=200',
    category: 'electronics',
    addedAt: '2024-01-07T08:00:00Z',
  },
]

export function NewArrivals() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold tracking-tight">New Arrivals</h2>
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            Just In
          </Badge>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/products?sort=newest">View All</Link>
        </Button>
      </div>

      <ScrollArea className="pb-4">
        <div className="flex gap-4">
          {newArrivals.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="w-[280px] flex-none"
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
                        className="absolute right-2 top-2"
                        variant="secondary"
                      >
                        New
                      </Badge>
                    </div>
                    <div className="space-y-2 p-4">
                      <h3 className="line-clamp-1 font-semibold">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Added{' '}
                        {new Date(product.addedAt).toLocaleTimeString([], {
                          hour: 'numeric',
                          minute: '2-digit',
                        })}
                      </p>
                      <p className="text-lg font-bold">${product.price}</p>
                    </div>
                  </CardContent>
                </Link>
                <CardFooter className="p-4 pt-0">
                  <Button
                    className="w-full"
                    variant="secondary"
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

