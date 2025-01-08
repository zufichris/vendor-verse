'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
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

// This would normally be fetched from your CMS
const blogPosts = [
  {
    id: '1',
    title: 'How to Choose the Perfect Headphones',
    excerpt:
      'A comprehensive guide to finding the right headphones for your needs and lifestyle.',
    image: '/placeholder.svg?height=400&width=600',
    category: 'Buying Guide',
    author: {
      name: 'Alex Thompson',
      avatar: '/placeholder.svg?height=40&width=40',
      role: 'Tech Expert',
    },
    publishedAt: '2024-01-07',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: '2',
    title: '10 Summer Fashion Trends You Need to Know',
    excerpt:
      "Stay ahead of the curve with our curated list of this season's must-have styles.",
    image: '/placeholder.svg?height=400&width=600',
    category: 'Style Tips',
    author: {
      name: 'Emma Wilson',
      avatar: '/placeholder.svg?height=40&width=40',
      role: 'Fashion Editor',
    },
    publishedAt: '2024-01-06',
    readTime: '4 min read',
    featured: true,
  },
  {
    id: '3',
    title: 'Creating a Cozy Home Office Space',
    excerpt:
      'Transform your work-from-home setup into a productive and comfortable environment.',
    image: '/placeholder.svg?height=400&width=600',
    category: 'Home & Living',
    author: {
      name: 'Sarah Chen',
      avatar: '/placeholder.svg?height=40&width=40',
      role: 'Interior Designer',
    },
    publishedAt: '2024-01-05',
    readTime: '6 min read',
    featured: false,
  },
]

export function BlogSection() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Guides & Inspiration</h2>
          <p className="text-muted-foreground">
            Expert advice and tips for better shopping
          </p>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/blog" className="gap-2">
            View All Posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group h-full overflow-hidden">
              <Link href={`/blog/${post.id}`}>
                <CardHeader className="p-0">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={post.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 p-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    {post.featured && (
                      <Badge variant="default">Featured</Badge>
                    )}
                  </div>
                  <div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="mt-2 line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={post.author.avatar}
                          alt={post.author.name}
                        />
                        <AvatarFallback>
                          {post.author.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium">{post.author.name}</p>
                        <p className="text-muted-foreground">
                          {post.author.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                </CardFooter>
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

