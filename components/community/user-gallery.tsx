'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Heart, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'

// This would normally be fetched from your Instagram API integration
const userPosts = [
  {
    id: '1',
    username: 'sarah_styles',
    image: '/placeholder.svg?height=600&width=600',
    caption: 'Loving my new summer outfit from @yourstore! 🌞 #YourStoreFashion',
    likes: 1234,
    comments: 45,
    products: [
      {
        id: '1',
        name: 'Summer Dress',
        price: 79.99,
        link: '/products/clothing/summer-dress',
      },
      {
        id: '2',
        name: 'Straw Hat',
        price: 29.99,
        link: '/products/accessories/straw-hat',
      },
    ],
  },
  {
    id: '2',
    username: 'tech_reviewer',
    image: '/placeholder.svg?height=600&width=600',
    caption: 'These headphones are a game changer! 🎧 #YourStoreTech',
    likes: 2567,
    comments: 89,
    products: [
      {
        id: '3',
        name: 'Wireless Headphones',
        price: 199.99,
        link: '/products/electronics/wireless-headphones',
      },
    ],
  },
  {
    id: '3',
    username: 'home_decor_love',
    image: '/placeholder.svg?height=600&width=600',
    caption: 'Transformed my space with these beautiful pieces ✨ #YourStoreHome',
    likes: 1890,
    comments: 67,
    products: [
      {
        id: '4',
        name: 'Decorative Vase',
        price: 49.99,
        link: '/products/home/decorative-vase',
      },
      {
        id: '5',
        name: 'Table Lamp',
        price: 89.99,
        link: '/products/home/table-lamp',
      },
    ],
  },
  // Add more posts...
]

export function UserGallery() {
  const [selectedPost, setSelectedPost] = React.useState<typeof userPosts[0] | null>(
    null
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Community Highlights</h2>
          <p className="text-muted-foreground">
            See how our community styles their favorite products
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Instagram className="h-4 w-4" />
          Follow Us
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {userPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="group relative aspect-square w-full p-0"
                  onClick={() => setSelectedPost(post)}
                >
                  <img
                    src={post.image}
                    alt={`Post by ${post.username}`}
                    className="aspect-square rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex gap-4 text-white">
                      <div className="flex items-center gap-1">
                        <Heart className="h-5 w-5" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt=""
                      className="h-8 w-8 rounded-full"
                    />
                    {post.username}
                  </DialogTitle>
                  <DialogDescription>
                    Posted on Instagram with #YourStore
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="aspect-square">
                    <img
                      src={post.image}
                      alt={`Post by ${post.username}`}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm">{post.caption}</p>
                    <div className="flex gap-2">
                      <Heart className="h-5 w-5" />
                      <span>{post.likes} likes</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Featured Products</h4>
                      <ScrollArea className="h-[200px] rounded-md border p-4">
                        {post.products.map((product) => (
                          <div
                            key={product.id}
                            className="flex items-center justify-between py-2"
                          >
                            <div>
                              <p className="font-medium">{product.name}</p>
                              <p className="text-sm text-muted-foreground">
                                ${product.price}
                              </p>
                            </div>
                            <Button variant="secondary" size="sm" asChild>
                              <a href={product.link}>Shop Now</a>
                            </Button>
                          </div>
                        ))}
                      </ScrollArea>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Share your style with #YourStore for a chance to be featured
        </p>
      </div>
    </div>
  )
}

