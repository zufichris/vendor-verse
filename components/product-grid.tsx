'use client'

import * as React from 'react'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { Loader2, ShoppingCart, Star } from 'lucide-react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: string
  name: string
  price: number
  rating: number
  reviews: number
  image: string
  brand: string
  inStock: boolean
}

interface ProductGridProps {
  category: string
  searchParams: {
    sort?: string
    brands?: string
    price?: string
    page?: string
  }
}

export function ProductGrid({ category, searchParams }: ProductGridProps) {
  const [products, setProducts] = React.useState<Product[]>([])
  const [page, setPage] = React.useState(1)
  const [loading, setLoading] = React.useState(false)
  const [hasMore, setHasMore] = React.useState(true)
  const { ref, inView } = useInView()

  // Simulated product data - replace with actual API call
  const fetchProducts = React.useCallback(async () => {
    if (loading || !hasMore) return
    setLoading(true)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Generate mock products
    const newProducts = Array.from({ length: 12 }).map((_, i) => ({
      id: `${page}-${i}`,
      name: `${category.charAt(0).toUpperCase() + category.slice(1)} Product ${page}-${i}`,
      price: Math.floor(Math.random() * 200) + 99,
      rating: Math.floor(Math.random() * 5) + 1,
      reviews: Math.floor(Math.random() * 1000),
      image: `/placeholder.svg?height=200&width=200`,
      brand: ['Apple', 'Samsung', 'Sony', 'LG'][Math.floor(Math.random() * 4)],
      inStock: Math.random() > 0.2,
    }))

    setProducts(prev => [...prev, ...newProducts])
    setPage(prev => prev + 1)
    // setHasMore(page < 3)
    // Simulate end of products after 3 pages
    setLoading(false)
  }, [category, page, loading, hasMore])

  React.useEffect(() => {
    if (inView) {
      fetchProducts()
    }
  }, [inView, fetchProducts])

  React.useEffect(() => {
    // Reset when filters change
    // setProducts([])
    // setPage(1)
    // setHasMore(true)
    fetchProducts()
  }, [category, searchParams, fetchProducts])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader className="p-0">
              <Link href={`/products/${category}/${product.id}`}>
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <Badge variant="destructive" className="text-lg">
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                </div>
              </Link>
            </CardHeader>
            <CardContent className="grid gap-2 p-4">
              <CardTitle className="line-clamp-1">
                <Link href={`/products/${category}/${product.id}`} className="hover:underline">
                  {product.name}
                </Link>
              </CardTitle>
              <div className="text-sm text-muted-foreground">{product.brand}</div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < product.rating ? 'fill-primary text-primary' : 'fill-muted text-muted-foreground'
                        }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews})
                </span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="flex w-full items-center justify-between">
                <div className="text-lg font-bold">${product.price}</div>
                <Button size="sm" variant="secondary" disabled={!product.inStock}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div
        ref={ref}
        className="flex justify-center py-8"
      >
        {loading && (
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading products...
          </div>
        )}
      </div>
    </div>
  )
}

