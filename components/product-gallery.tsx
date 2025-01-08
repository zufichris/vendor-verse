'use client'

import * as React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog'

interface ProductGalleryProps {
  images: string[]
  name: string
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = React.useState(0)
  const [zoomPosition, setZoomPosition] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setZoomPosition({ x, y })
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-4 z-10"
            >
              <Expand className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <div
              className="relative aspect-square overflow-hidden"
              onMouseMove={handleMouseMove}
            >
              <div
                className="absolute h-full w-full"
                style={{
                  backgroundImage: `url(${images[currentImage]})`,
                  backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  backgroundSize: '200%',
                }}
              />
              <img
                src={images[currentImage]}
                alt={`${name} - View ${currentImage + 1}`}
                className="h-full w-full object-cover opacity-0"
              />
            </div>
          </DialogContent>
        </Dialog>
        <img
          src={images[currentImage]}
          alt={`${name} - View ${currentImage + 1}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative">
        <div className="flex space-x-4 overflow-auto pb-2 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 ${index === currentImage ? 'border-primary' : 'border-muted'
                }`}
            >
              <img
                src={image}
                alt={`${name} - Thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
        {images.length > 4 ? (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute -right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full"
              onClick={() => {
                const scrollElement = document.querySelector('.scrollbar-hide');
                if (scrollElement) {
                  scrollElement.scrollBy({
                    left: 80,
                    behavior: 'smooth',
                  });
                }
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full"
              onClick={() => {
                const scrollElement = document.querySelector('.scrollbar-hide');
                if (scrollElement) {
                  scrollElement.scrollBy({
                    left: -80,
                    behavior: 'smooth',
                  });
                }
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </>
        ) : null}

      </div>
    </div>
  )
}

