'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Award, Package, Star, TrendingUp, Users } from 'lucide-react'
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

// This would normally be fetched from your API
const topVendors = [
  {
    id: '1',
    name: 'Tech Haven',
    description: 'Premium electronics and gadgets',
    image: '/placeholder.svg?height=400&width=400',
    avatar: '/placeholder.svg?height=40&width=40',
    rating: 4.9,
    reviews: 2405,
    sales: 15000,
    followers: 5200,
    monthlyGrowth: 25,
    badge: 'Platinum Seller',
    featured: true,
  },
  {
    id: '2',
    name: 'Fashion Forward',
    description: 'Trendy clothing and accessories',
    image: '/placeholder.svg?height=400&width=400',
    avatar: '/placeholder.svg?height=40&width=40',
    rating: 4.8,
    reviews: 1829,
    sales: 12000,
    followers: 4800,
    monthlyGrowth: 18,
    badge: 'Gold Seller',
    featured: true,
  },
  {
    id: '3',
    name: 'Home Essentials',
    description: 'Quality home and living products',
    image: '/placeholder.svg?height=400&width=400',
    avatar: '/placeholder.svg?height=40&width=40',
    rating: 4.7,
    reviews: 1654,
    sales: 9500,
    followers: 3200,
    monthlyGrowth: 15,
    badge: 'Gold Seller',
    featured: true,
  },
]

export function TopVendors() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold tracking-tight">Top Vendors</h2>
          <Badge variant="secondary" className="gap-1">
            <Award className="h-3 w-3 text-yellow-500" />
            This Month
          </Badge>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/vendors">View All Vendors</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {topVendors.map((vendor, index) => (
          <motion.div
            key={vendor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group h-full">
              <CardHeader className="p-0">
                <Link href={`/vendors/${vendor.id}`}>
                  <div className="relative">
                    <div className="aspect-[2/1] overflow-hidden rounded-t-lg">
                      <img
                        src={vendor.image}
                        alt={vendor.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <Badge
                      className="absolute right-2 top-2 gap-1"
                      variant="secondary"
                    >
                      <Award className="h-3 w-3 text-yellow-500" />
                      {vendor.badge}
                    </Badge>
                  </div>
                </Link>
              </CardHeader>
              <CardContent className="space-y-4 p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={vendor.avatar} alt={vendor.name} />
                      <AvatarFallback>
                        {vendor.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="line-clamp-1">{vendor.name}</CardTitle>
                      <CardDescription className="line-clamp-1">
                        {vendor.description}
                      </CardDescription>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4" />
                      <span>{vendor.rating} Rating</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Package className="h-4 w-4" />
                      <span>{vendor.sales.toLocaleString()} Sales</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{vendor.followers.toLocaleString()} Followers</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-green-600">
                      <TrendingUp className="h-4 w-4" />
                      <span>{vendor.monthlyGrowth}% this month</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" variant="secondary" asChild>
                  <Link href={`/vendors/${vendor.id}`}>Visit Store</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

