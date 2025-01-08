'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Award, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from '@/components/ui/use-toast'

// This would normally be fetched from your API
const editorsPicks = [
  {
    id: '1',
    name: 'Luxury Leather Bag',
    price: 499.99,
    description: 'Handcrafted Italian leather with premium finishes',
    image: '/placeholder.svg?height=200&width=200',
    category: 'accessories',
    editorNote: 'Timeless elegance meets modern functionality',
  },
  {
    id: '2',
    name: 'Artisan Coffee Set',
    price: 199.99,
    description: 'Complete pour-over coffee brewing kit',
    image: '/placeholder.svg?height=200&width=200',
    category: 'home',
    editorNote: 'Perfect for coffee connoisseurs',
  },
  {
    id: '3',
    name: 'Premium Yoga Mat',
    price: 129.99,
    description: 'Eco-friendly materials with superior grip',
    image: '/placeholder.svg?height=200&width=200',
    category: 'sports',
    editorNote: 'Best-in-class comfort and durability',
  },
]

export function EditorsPicks() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold tracking-tight">Editor's Picks</h2>
          <Badge variant="secondary" className="gap-1">
            <Award className="h-3 w-3 text-yellow-500" />
            Premium
          </Badge>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/collections/editors-picks">View Collection</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {editorsPicks.map((product, index) => (
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
                      className="absolute right-2 top-2 gap-1"
                      variant="secondary"
                    >
                      <Award className="h-3 w-3 text-yellow-500" />
                      Editor's Choice
                    </Badge>
                  </div>
                  <div className="space-y-2 p-4">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {product.description}
                    </p>
                    <div className="rounded-lg bg-muted p-3">
                      <p className="text-sm italic">
                        "{product.editorNote}"
                      </p>
                    </div>
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
    </div>
  )
}

