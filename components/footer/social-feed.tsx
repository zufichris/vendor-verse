'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

// This would normally be fetched from your Instagram API integration
const instagramPosts = [
  {
    id: '1',
    image: '/placeholder.svg?height=300&width=300',
    likes: 1234,
    link: 'https://instagram.com/p/1',
  },
  {
    id: '2',
    image: '/placeholder.svg?height=300&width=300',
    likes: 987,
    link: 'https://instagram.com/p/2',
  },
  {
    id: '3',
    image: '/placeholder.svg?height=300&width=300',
    likes: 1567,
    link: 'https://instagram.com/p/3',
  },
  {
    id: '4',
    image: '/placeholder.svg?height=300&width=300',
    likes: 2345,
    link: 'https://instagram.com/p/4',
  },
]

export function SocialFeed() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Follow Us @YourStore</h3>
        <Button variant="ghost" size="sm" className="gap-2">
          <Instagram className="h-4 w-4" />
          Follow
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {instagramPosts.map((post, index) => (
          <motion.a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={post.image}
              alt=""
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-sm font-medium text-white">
                ❤️ {post.likes}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

