'use client'

import * as React from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 199.99,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 299.99,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: '3',
    name: 'Running Shoes',
    price: 129.99,
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    id: '4',
    name: 'Laptop Stand',
    price: 49.99,
    image: '/placeholder.svg?height=200&width=200',
  },
]

export function ProductCarousel() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const width = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollBy({ left: -width, behavior: 'smooth' })
    }
  }

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const width = scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollBy({ left: width, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative">
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[280px] flex-[0_0_auto] snap-start">
            <Card>
              <CardHeader className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="line-clamp-1">{product.name}</CardTitle>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <div className="text-lg font-bold">${product.price}</div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

