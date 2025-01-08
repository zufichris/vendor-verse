'use client'

import * as React from 'react'
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from '@/components/ui/use-toast'

// This would normally be fetched from your API
const reviews = [
  {
    id: '1',
    user: {
      name: 'John Doe',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    rating: 5,
    date: '2024-01-07',
    title: 'Great products and fast shipping',
    content:
      'Really impressed with the quality of products and the quick delivery. Will definitely shop here again!',
    helpful: 24,
    notHelpful: 2,
    verified: true,
  },
  {
    id: '2',
    user: {
      name: 'Jane Smith',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    rating: 4,
    date: '2024-01-06',
    title: 'Good experience overall',
    content:
      'Products were as described. Shipping took a bit longer than expected but customer service was helpful.',
    helpful: 18,
    notHelpful: 1,
    verified: true,
  },
]

export function VendorReviews() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Customer Reviews</h2>
          <p className="text-sm text-muted-foreground">
            See what customers are saying about this vendor
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < 4
                    ? 'fill-primary text-primary'
                    : 'fill-muted text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="font-bold">4.5</span>
          <span className="text-muted-foreground">(128 reviews)</span>
        </div>
      </div>

      <div className="grid gap-6">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardHeader className="flex flex-row items-start justify-between space-y-0">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src={review.user.avatar} alt={review.user.name} />
                  <AvatarFallback>
                    {review.user.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">{review.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      by {review.user.name}
                    </span>
                    {review.verified && (
                      <Badge variant="secondary" className="text-xs">
                        Verified Purchase
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? 'fill-primary text-primary'
                        : 'fill-muted text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{review.content}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      toast({
                        title: 'Marked as helpful',
                        description: 'Thank you for your feedback!',
                      })
                    }}
                  >
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Helpful ({review.helpful})
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      toast({
                        title: 'Marked as not helpful',
                        description: 'Thank you for your feedback!',
                      })
                    }}
                  >
                    <ThumbsDown className="mr-2 h-4 w-4" />
                    Not Helpful ({review.notHelpful})
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

