'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Percent, ShoppingCart, Timer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { toast } from '@/components/ui/use-toast'

// This would normally be fetched from your API
const exclusiveDeals = [
  {
    id: '1',
    title: 'Tech Week Special',
    discount: 30,
    description: 'Premium electronics at unbeatable prices',
    endDate: '2024-01-14T23:59:59',
    itemsLeft: 45,
    totalItems: 100,
    image: '/placeholder.svg?height=200&width=200',
    vendor: {
      id: '1',
      name: 'Tech Haven',
      avatar: '/placeholder.svg?height=40&width=40',
      verified: true,
    },
    products: [
      {
        id: '1',
        name: 'Wireless Headphones',
        price: 199.99,
        discountedPrice: 139.99,
      },
      {
        id: '2',
        name: 'Smart Watch',
        price: 299.99,
        discountedPrice: 209.99,
      },
    ],
  },
  {
    id: '2',
    title: 'Fashion Flash Sale',
    discount: 40,
    description: 'Limited time offers on trending styles',
    endDate: '2024-01-15T23:59:59',
    itemsLeft: 28,
    totalItems: 75,
    image: '/placeholder.svg?height=200&width=200',
    vendor: {
      id: '2',
      name: 'Fashion Forward',
      avatar: '/placeholder.svg?height=40&width=40',
      verified: true,
    },
    products: [
      {
        id: '3',
        name: 'Designer Handbag',
        price: 399.99,
        discountedPrice: 239.99,
      },
      {
        id: '4',
        name: 'Luxury Watch',
        price: 599.99,
        discountedPrice: 359.99,
      },
    ],
  },
]

export function ExclusiveDeals() {
  // Function to calculate time remaining
  const calculateTimeRemaining = (endDate: string) => {
    const end = new Date(endDate).getTime()
    const now = new Date().getTime()
    const timeLeft = end - now

    if (timeLeft <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 }
    }

    const hours = Math.floor(timeLeft / (1000 * 60 * 60))
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

    return { hours, minutes, seconds }
  }

  const [timeRemaining, setTimeRemaining] = React.useState(
    exclusiveDeals.map((deal) => calculateTimeRemaining(deal.endDate))
  )

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(
        exclusiveDeals.map((deal) => calculateTimeRemaining(deal.endDate))
      )
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold tracking-tight">Exclusive Deals</h2>
          <Badge variant="secondary" className="gap-1">
            <Percent className="h-3 w-3" />
            Limited Time
          </Badge>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/deals">View All Deals</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {exclusiveDeals.map((deal, index) => (
          <motion.div
            key={deal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative">
                  <div className="aspect-[2/1] overflow-hidden">
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <Badge
                    className="absolute right-2 top-2 gap-1"
                    variant="destructive"
                  >
                    <Percent className="h-3 w-3" />
                    {deal.discount}% OFF
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={deal.vendor.avatar} alt={deal.vendor.name} />
                      <AvatarFallback>
                        {deal.vendor.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="line-clamp-1">{deal.title}</CardTitle>
                      <CardDescription className="line-clamp-1">
                        by {deal.vendor.name}
                      </CardDescription>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Items Remaining</span>
                    <span className="font-medium">
                      {deal.itemsLeft} / {deal.totalItems}
                    </span>
                  </div>
                  <Progress
                    value={(deal.itemsLeft / deal.totalItems) * 100}
                    className="h-2"
                  />
                </div>

                <div className="rounded-lg bg-muted p-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Timer className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Ends in:</span>
                    <span className="font-medium">
                      {String(timeRemaining[index].hours).padStart(2, '0')}:
                      {String(timeRemaining[index].minutes).padStart(2, '0')}:
                      {String(timeRemaining[index].seconds).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  {deal.products.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between rounded-lg border p-2"
                    >
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <div className="flex items-center gap-2">
                          <span className="font-bold">
                            ${product.discountedPrice}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.price}
                          </span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => {
                          toast({
                            title: 'Added to cart',
                            description: `${product.name} has been added to your cart.`,
                          })
                        }}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" variant="secondary" asChild>
                  <Link href={`/vendors/${deal.vendor.id}/deals/${deal.id}`}>
                    View All Deals
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

