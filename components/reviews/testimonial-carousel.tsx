'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

// This would normally come from your API
const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: '/placeholder.svg?height=100&width=100',
    role: 'Verified Buyer',
    rating: 5,
    review:
      "I'm absolutely in love with my purchase! The quality exceeded my expectations, and the customer service was exceptional. I've already recommended this marketplace to all my friends.",
    productImage: '/placeholder.svg?height=300&width=300',
    productName: 'Wireless Headphones',
    date: '2024-01-05',
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: '/placeholder.svg?height=100&width=100',
    role: 'Verified Buyer',
    rating: 5,
    review:
      'The attention to detail and quality of the products here is outstanding. Fast shipping and great communication throughout the process. Will definitely be shopping here again!',
    productImage: '/placeholder.svg?height=300&width=300',
    productName: 'Smart Watch Pro',
    date: '2024-01-06',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    avatar: '/placeholder.svg?height=100&width=100',
    role: 'Verified Buyer',
    rating: 5,
    review:
      'Such a great experience shopping here! The product selection is amazing, and everything arrived perfectly packaged. The prices are very competitive too.',
    productImage: '/placeholder.svg?height=300&width=300',
    productName: 'Designer Handbag',
    date: '2024-01-07',
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [direction, setDirection] = React.useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      const nextIndex =
        (prevIndex + newDirection + testimonials.length) % testimonials.length
      return nextIndex
    })
  }

  // Auto-advance slides
  React.useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold">What Our Customers Say</h2>
          <p className="mt-2 text-muted-foreground">
            Real reviews from satisfied customers
          </p>
        </div>

        <div className="relative mt-12 h-[500px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="absolute inset-0"
            >
              <Card className="mx-auto max-w-4xl">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                        />
                        <AvatarFallback>
                          {testimonials[currentIndex].name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{testimonials[currentIndex].name}</CardTitle>
                        <CardDescription>
                          {testimonials[currentIndex].role}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="gap-1">
                      {Array.from({ length: testimonials[currentIndex].rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 fill-primary text-primary"
                          />
                        )
                      )}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="relative rounded-lg bg-muted p-6">
                    <Quote className="absolute -left-2 -top-2 h-8 w-8 text-muted-foreground/20" />
                    <p className="text-lg">{testimonials[currentIndex].review}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative aspect-square h-24 overflow-hidden rounded-lg">
                      <img
                        src={testimonials[currentIndex].productImage}
                        alt={testimonials[currentIndex].productName}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">
                        {testimonials[currentIndex].productName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Purchased on{' '}
                        {new Date(
                          testimonials[currentIndex].date
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous review</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next review</span>
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted'
                }`}
                onClick={() => {
                  const direction = index > currentIndex ? 1 : -1
                  setDirection(direction)
                  setCurrentIndex(index)
                }}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

