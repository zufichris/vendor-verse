'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
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

// This would normally come from your API
const reviews = [
  {
    id: '1',
    user: {
      name: 'Alex Thompson',
      avatar: '/placeholder.svg?height=100&width=100',
      purchases: 12,
    },
    rating: 5,
    title: 'Exceptional Quality and Service',
    review:
      'The product quality is outstanding, and the customer service team was incredibly helpful throughout the entire process. Highly recommend!',
    productImage: '/placeholder.svg?height=300&width=300',
    productName: 'Premium Coffee Maker',
    date: '2024-01-07',
    helpful: 24,
    notHelpful: 2,
    verified: true,
  },
  {
    id: '2',
    user: {
      name: 'Maria Garcia',
      avatar: '/placeholder.svg?height=100&width=100',
      purchases: 8,
    },
    rating: 4,
    title: 'Great Product, Quick Delivery',
    review:
      'Very satisfied with my purchase. The delivery was faster than expected, and the product works perfectly. Only minor issue was the packaging.',
    productImage: '/placeholder.svg?height=300&width=300',
    productName: 'Wireless Earbuds',
    date: '2024-01-06',
    helpful: 18,
    notHelpful: 1,
    verified: true,
  },
  {
    id: '3',
    user: {
      name: 'David Kim',
      avatar: '/placeholder.svg?height=100&width=100',
      purchases: 15,
    },
    rating: 5,
    title: 'Worth Every Penny',
    review:
      'Absolutely love this product! The quality is exceptional, and it has made such a difference in my daily routine. Would definitely buy again.',
    productImage: '/placeholder.svg?height=300&width=300',
    productName: 'Smart Home Hub',
    date: '2024-01-05',
    helpful: 32,
    notHelpful: 3,
    verified: true,
  },
]

interface ReviewCardProps {
  review: typeof reviews[0]
}

function ReviewCard({ review }: ReviewCardProps) {
  const [helpfulCount, setHelpfulCount] = React.useState(review.helpful)
  const [notHelpfulCount, setNotHelpfulCount] = React.useState(review.notHelpful)
  const [userVote, setUserVote] = React.useState<'helpful' | 'notHelpful' | null>(
    null
  )

  const handleVote = (type: 'helpful' | 'notHelpful') => {
    if (userVote === type) {
      // Remove vote
      setUserVote(null)
      if (type === 'helpful') {
        setHelpfulCount((prev) => prev - 1)
      } else {
        setNotHelpfulCount((prev) => prev - 1)
      }
    } else {
      // Add/change vote
      if (userVote === 'helpful' && type === 'notHelpful') {
        setHelpfulCount((prev) => prev - 1)
      } else if (userVote === 'notHelpful' && type === 'helpful') {
        setNotHelpfulCount((prev) => prev - 1)
      }
      setUserVote(type)
      if (type === 'helpful') {
        setHelpfulCount((prev) => prev + 1)
      } else {
        setNotHelpfulCount((prev) => prev + 1)
      }
    }

    toast({
      title: type === 'helpful' ? 'Marked as helpful' : 'Marked as not helpful',
      description: 'Thank you for your feedback!',
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <div className="flex items-start gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={review.user.avatar} alt={review.user.name} />
              <AvatarFallback>
                {review.user.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{review.user.name}</span>
                {review.verified && (
                  <Badge variant="secondary" className="text-xs">
                    Verified Purchase
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {review.user.purchases} purchases
              </p>
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
          <div>
            <h3 className="font-semibold">{review.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{review.review}</p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="h-auto w-auto p-0 text-primary hover:text-primary/80"
              >
                <div className="relative aspect-square h-20 overflow-hidden rounded-lg">
                  <img
                    src={review.productImage}
                    alt={review.productName}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{review.productName}</DialogTitle>
                <DialogDescription>
                  Reviewed on {new Date(review.date).toLocaleDateString()}
                </DialogDescription>
              </DialogHeader>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={review.productImage}
                  alt={review.productName}
                  className="h-full w-full object-cover"
                />
              </div>
            </DialogContent>
          </Dialog>

          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="sm"
                className={
                  userVote === 'helpful' ? 'bg-muted text-primary' : undefined
                }
                onClick={() => handleVote('helpful')}
              >
                <ThumbsUp className="mr-2 h-4 w-4" />
                Helpful ({helpfulCount})
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={
                  userVote === 'notHelpful' ? 'bg-muted text-primary' : undefined
                }
                onClick={() => handleVote('notHelpful')}
              >
                <ThumbsDown className="mr-2 h-4 w-4" />
                Not Helpful ({notHelpfulCount})
              </Button>
            </div>
            <span className="text-sm text-muted-foreground">
              {new Date(review.date).toLocaleDateString()}
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ReviewGrid() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <p className="text-muted-foreground">
          See what our customers are saying about their purchases
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}

