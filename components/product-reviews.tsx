'use client'

import * as React from 'react'
import { Star, ThumbsDown, ThumbsUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// This would come from your API
const reviews = [
  {
    id: '1',
    user: {
      name: 'John Doe',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    rating: 5,
    date: '2023-12-25',
    title: 'Excellent sound quality',
    content:
      'The sound quality is amazing, and the noise cancellation works perfectly. Battery life is impressive too.',
    helpful: 24,
    notHelpful: 2,
  },
  {
    id: '2',
    user: {
      name: 'Jane Smith',
      avatar: '/placeholder.svg?height=40&width=40',
    },
    rating: 4,
    date: '2023-12-20',
    title: 'Great but could be better',
    content:
      'The headphones are comfortable and sound great, but the app could use some improvements.',
    helpful: 15,
    notHelpful: 1,
  },
]

const ratingDistribution = [
  { stars: 5, count: 85 },
  { stars: 4, count: 25 },
  { stars: 3, count: 8 },
  { stars: 2, count: 4 },
  { stars: 1, count: 3 },
]

export function ProductReviews({ productId }: { productId: string }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Customer Reviews</h2>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle>Overall Rating</CardTitle>
              <CardDescription>Based on {reviews.length} reviews</CardDescription>
            </div>
            <Button>Write a Review</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-baseline gap-4">
              <div className="text-5xl font-bold">4.5</div>
              <div className="space-y-1">
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
                <p className="text-sm text-muted-foreground">
                  {reviews.length} reviews
                </p>
              </div>
            </div>
            <div className="space-y-2">
              {ratingDistribution.map((rating) => (
                <div key={rating.stars} className="flex items-center gap-2">
                  <div className="w-12 text-sm">{rating.stars} stars</div>
                  <Progress
                    value={(rating.count / reviews.length) * 100}
                    className="h-2"
                  />
                  <div className="w-12 text-sm text-muted-foreground">
                    {rating.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
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
                    <CardDescription>
                      by {review.user.name} on{' '}
                      {new Date(review.date).toLocaleDateString()}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex">
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
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{review.content}</p>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Helpful ({review.helpful})
                </Button>
                <Button variant="outline" size="sm">
                  <ThumbsDown className="mr-2 h-4 w-4" />
                  Not Helpful ({review.notHelpful})
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

