'use client'

import * as React from 'react'
import { Heart, Share2, ShoppingCart, Store } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

interface ProductInfoProps {
  product: any // Replace with proper type
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = React.useState('1')
  const discountedPrice = product.price * (1 - product.discount / 100)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">${discountedPrice.toFixed(2)}</span>
            {product.discount > 0 && (
              <span className="text-lg text-muted-foreground line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          {product.discount > 0 && (
            <Badge variant="destructive">{product.discount}% OFF</Badge>
          )}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            <Link
              href={`/vendors/${product.vendor.id}`}
              className="flex items-center gap-2 hover:underline"
            >
              <Store className="h-4 w-4" />
              {product.vendor.name}
            </Link>
          </CardTitle>
          <CardDescription>
            {product.vendor.products} products · {product.vendor.followers} followers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.vendor.rating)
                      ? 'fill-primary text-primary'
                      : 'fill-muted text-muted-foreground'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                {product.vendor.rating} rating
              </span>
            </div>
            <Button variant="outline" size="sm">
              Follow Store
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Select value={quantity} onValueChange={setQuantity}>
            <SelectTrigger className="w-24">
              <SelectValue placeholder="Quantity" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 10 }).map((_, i) => (
                <SelectItem key={i + 1} value={(i + 1).toString()}>
                  {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">
            {product.stock} units available
          </span>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <Button className="flex-1">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
          <Button variant="outline">
            <Heart className="mr-2 h-4 w-4" />
            Add to Wishlist
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h2 className="font-semibold">Product Description</h2>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </div>
    </div>
  )
}

