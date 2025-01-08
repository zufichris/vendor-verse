'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { toast } from '@/components/ui/use-toast'

interface ProductCardProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    originalPrice?: number
    image: string
    category: string
    rating: number
    reviews: number
    stock: number
    discount?: number
    isNew?: boolean
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = React.useState(false)
  const [isLiked, setIsLiked] = React.useState(false)
  const [showQuickView, setShowQuickView] = React.useState(false)

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsLiked(!isLiked)
    toast({
      title: isLiked ? 'Removed from wishlist' : 'Added to wishlist',
      description: `${product.name} has been ${
        isLiked ? 'removed from' : 'added to'
      } your wishlist.`,
    })
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <Card
      className="group relative h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.category}/${product.id}`}>
        <CardHeader className="p-0">
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

            {/* Product Badges */}
            <div className="absolute left-2 top-2 flex flex-col gap-2">
              {product.discount && (
                <Badge variant="destructive">-{product.discount}%</Badge>
              )}
              {product.isNew && (
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  New
                </Badge>
              )}
            </div>

            {/* Quick Actions */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/40"
                  onClick={(e) => e.preventDefault()}
                >
                  <div className="flex gap-2">
                    <Dialog open={showQuickView} onOpenChange={setShowQuickView}>
                      <DialogTrigger asChild>
                        <Button
                          variant="secondary"
                          size="icon"
                          className="h-10 w-10"
                          onClick={(e) => e.preventDefault()}
                        >
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">Quick view</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{product.name}</DialogTitle>
                          <DialogDescription>{product.description}</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="aspect-square overflow-hidden rounded-lg">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-bold">
                                  ${product.price}
                                </span>
                                {product.originalPrice && (
                                  <span className="text-sm text-muted-foreground line-through">
                                    ${product.originalPrice}
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-primary text-primary" />
                                <span className="text-sm font-medium">
                                  {product.rating}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                  ({product.reviews})
                                </span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {product.stock} items in stock
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" onClick={handleLike}>
                            <Heart
                              className={`mr-2 h-4 w-4 ${
                                isLiked ? 'fill-red-500 text-red-500' : ''
                              }`}
                            />
                            Wishlist
                          </Button>
                          <Button onClick={handleAddToCart}>
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-10 w-10"
                      onClick={handleLike}
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          isLiked ? 'fill-red-500 text-red-500' : ''
                        }`}
                      />
                      <span className="sr-only">Add to wishlist</span>
                    </Button>

                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-10 w-10"
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardHeader>
        <CardContent className="space-y-2 p-4">
          <CardTitle className="line-clamp-1">{product.name}</CardTitle>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-xs text-muted-foreground">
                ({product.reviews})
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="w-full" variant="secondary" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Link>
    </Card>
  )
}

