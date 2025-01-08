'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight, Search, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Slider,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from '@/components/ui/slider'
import { cn } from '@/lib/utils'

const heroSlides = [
  {
    id: 1,
    title: 'Summer Collection',
    description: 'Discover the hottest trends of the season',
    image: '/placeholder.svg?height=600&width=1200',
    cta: 'Shop Now',
    link: '/products/clothing',
  },
  {
    id: 2,
    title: 'Flash Sale',
    description: 'Up to 70% off on selected items',
    image: '/placeholder.svg?height=600&width=1200',
    cta: 'View Deals',
    link: '/sale',
  },
  {
    id: 3,
    title: 'New Arrivals',
    description: 'Be the first to shop our latest products',
    image: '/placeholder.svg?height=600&width=1200',
    cta: 'Explore',
    link: '/new-arrivals',
  },
]

const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'home', name: 'Home & Garden' },
  { id: 'sports', name: 'Sports & Outdoors' },
]

export function EnhancedHero() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [priceRange, setPriceRange] = React.useState([0, 1000])
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState('all')

  // Auto-rotate slides
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search with filters
    console.log({
      query: searchQuery,
      category: selectedCategory,
      priceRange,
    })
  }

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000',
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
            <img
              src={slide.image}
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="animate-fade-up text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  {slide.title}
                </h1>
                <p className="animate-fade-up animation-delay-150 mt-4 text-lg text-white/90 md:text-xl">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={cn(
                'h-2 w-2 rounded-full transition-all',
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              )}
              onClick={() => setCurrentSlide(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>

        {/* Enhanced Search Bar */}
        <div className="absolute left-1/2 top-2/3 w-full max-w-3xl -translate-x-1/2 px-4">
          <form
            onSubmit={handleSearch}
            className="flex flex-col gap-4 rounded-lg bg-background/80 p-4 backdrop-blur-sm"
          >
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <SlidersHorizontal className="h-4 w-4" />
                    <span className="sr-only">More filters</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>
                      Refine your search with additional filters
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6 space-y-6">
                    <div className="space-y-2">
                      <h4 className="font-medium">Price Range</h4>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={1000}
                        step={10}
                        className="py-4"
                      />
                      <div className="flex items-center justify-between text-sm">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <Button type="submit">Search</Button>
            </div>
          </form>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 0.5s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
    </section>
  )
}

