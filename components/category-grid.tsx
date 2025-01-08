import Link from 'next/link'
import { Laptop, Shirt, Home, Dumbbell, Car, Utensils, Palette, Baby, TypeIcon as type, LucideIcon } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

interface Category {
  id: string
  name: string
  description: string
  image: string
  icon: LucideIcon
  itemCount: number
  featured: boolean
}

const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Laptops, phones, and smart devices',
    image: '/placeholder.svg?height=300&width=300',
    icon: Laptop,
    itemCount: 320,
    featured: true,
  },
  {
    id: 'clothing',
    name: 'Fashion',
    description: 'Trendy clothing and accessories',
    image: '/placeholder.svg?height=300&width=300',
    icon: Shirt,
    itemCount: 450,
    featured: true,
  },
  {
    id: 'home',
    name: 'Home & Garden',
    description: 'Furniture and home essentials',
    image: '/placeholder.svg?height=300&width=300',
    icon: Home,
    itemCount: 280,
    featured: true,
  },
  {
    id: 'sports',
    name: 'Sports & Fitness',
    description: 'Equipment and activewear',
    image: '/placeholder.svg?height=300&width=300',
    icon: Dumbbell,
    itemCount: 200,
    featured: true,
  },
  {
    id: 'automotive',
    name: 'Automotive',
    description: 'Car parts and accessories',
    image: '/placeholder.svg?height=300&width=300',
    icon: Car,
    itemCount: 150,
    featured: false,
  },
  {
    id: 'food',
    name: 'Food & Beverages',
    description: 'Gourmet and specialty foods',
    image: '/placeholder.svg?height=300&width=300',
    icon: Utensils,
    itemCount: 180,
    featured: false,
  },
  {
    id: 'art',
    name: 'Art & Crafts',
    description: 'Creative supplies and tools',
    image: '/placeholder.svg?height=300&width=300',
    icon: Palette,
    itemCount: 120,
    featured: false,
  },
  {
    id: 'kids',
    name: 'Kids & Baby',
    description: 'Toys and children\'s essentials',
    image: '/placeholder.svg?height=300&width=300',
    icon: Baby,
    itemCount: 220,
    featured: false,
  },
]

export function CategoryGrid() {
  // Featured categories appear first
  const sortedCategories = [...categories].sort((a, b) => {
    if (a.featured === b.featured) return 0
    return a.featured ? -1 : 1
  })

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {sortedCategories.map((category) => (
        <Link key={category.id} href={`/products/${category.id}`}>
          <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-0">
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent transition-colors group-hover:from-black/70 group-hover:via-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center text-white opacity-100 transition-opacity group-hover:opacity-0">
                  <category.icon className="h-12 w-12" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                  <p className="text-sm text-white/90">{category.itemCount} items</p>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold">{category.name}</h3>
                    <p className="mt-2 text-sm text-white/90">{category.description}</p>
                    <span className="mt-4 inline-flex items-center justify-center rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur-sm transition-colors group-hover:bg-white/30">
                      Explore Category
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

