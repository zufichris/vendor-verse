'use client'

import * as React from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from '@/components/ui/use-toast'

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    image: string
    rating: number
    liked?: boolean
  }
}

function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = React.useState(product.liked)
  const [isHovered, setIsHovered] = React.useState(false)
  const controls = useAnimation()

  const handleLike = () => {
    setIsLiked(!isLiked)
    controls.start({
      scale: [1, 1.2, 1],
      transition: { duration: 0.3 },
    })
    toast({
      title: isLiked ? 'Removed from wishlist' : 'Added to wishlist',
      description: `${product.name} has been ${
        isLiked ? 'removed from' : 'added to'
      } your wishlist.`,
    })
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        className="group relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0">
          <div className="relative">
            <motion.div
              className="aspect-square overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Quick Actions Overlay */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 p-4"
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant="secondary"
                      className="gap-2"
                      onClick={() => {
                        toast({
                          title: 'Added to cart',
                          description: `${product.name} has been added to your cart.`,
                        })
                      }}
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Quick Add
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Like Button */}
            <motion.button
              className="absolute right-2 top-2 rounded-full bg-background/80 p-2 backdrop-blur-sm"
              onClick={handleLike}
              animate={controls}
            >
              <Heart
                className={`h-4 w-4 ${
                  isLiked ? 'fill-red-500 text-red-500' : 'text-foreground'
                }`}
              />
            </motion.button>
          </div>

          <div className="space-y-2 p-4">
            <h3 className="font-semibold">{product.name}</h3>
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Star
                      className={`h-4 w-4 ${
                        i < product.rating
                          ? 'fill-primary text-primary'
                          : 'fill-muted text-muted-foreground'
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
              <Badge
                variant="secondary"
                className="transition-colors hover:bg-secondary/80"
              >
                {product.rating.toFixed(1)}
              </Badge>
            </div>
            <motion.p
              className="text-lg font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              ${product.price}
            </motion.p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function MicroInteractions() {
  const products = [
    {
      id: '1',
      name: 'Wireless Headphones',
      price: 199.99,
      image: '/placeholder.svg?height=200&width=200',
      rating: 4.5,
    },
    {
      id: '2',
      name: 'Smart Watch',
      price: 299.99,
      image: '/placeholder.svg?height=200&width=200',
      rating: 4.8,
      liked: true,
    },
    {
      id: '3',
      name: 'Bluetooth Speaker',
      price: 149.99,
      image: '/placeholder.svg?height=200&width=200',
      rating: 4.2,
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Featured Products</h2>
        <p className="text-muted-foreground">
          Discover our collection of premium products
        </p>
      </div>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    </div>
  )
}

