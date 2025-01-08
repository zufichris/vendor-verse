'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, MessageSquare, Users } from 'lucide-react'

interface VendorHeaderProps {
  vendor: any // Replace with proper type
}

export function VendorHeader({ vendor }: VendorHeaderProps) {
  return (
    <div className="relative">
      <div className="h-48 w-full overflow-hidden sm:h-64">
        <img
          src={vendor.coverImage}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative -mt-16 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-end gap-4">
            <div className="relative rounded-lg bg-background p-2 shadow-lg">
              <img
                src={vendor.logo}
                alt={vendor.name}
                className="h-24 w-24 rounded-lg object-cover sm:h-32 sm:w-32"
              />
            </div>
            <div className="mb-2 space-y-1">
              <h1 className="text-2xl font-bold sm:text-3xl">{vendor.name}</h1>
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{vendor.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({vendor.reviews} reviews)
                  </span>
                </div>
                <span className="text-muted-foreground">·</span>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span className="text-sm text-muted-foreground">
                    {vendor.followers} followers
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {vendor.badges.map((badge: string) => (
                  <Badge key={badge} variant="secondary">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-full gap-2 sm:w-auto">
            <Button className="flex-1 sm:flex-initial">
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Seller
            </Button>
            <Button variant="outline" className="flex-1 sm:flex-initial">
              Follow Store
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

