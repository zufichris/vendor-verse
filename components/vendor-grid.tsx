import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from 'lucide-react'

const vendors = [
  {
    id: '1',
    name: 'Tech Haven',
    rating: 4.8,
    reviews: 2405,
    productCount: 320,
    image: '/placeholder.svg?height=100&width=100',
    featured: true,
  },
  {
    id: '2',
    name: 'Fashion Forward',
    rating: 4.6,
    reviews: 1829,
    productCount: 450,
    image: '/placeholder.svg?height=100&width=100',
    featured: true,
  },
  {
    id: '3',
    name: 'Home Essentials',
    rating: 4.7,
    reviews: 1654,
    productCount: 280,
    image: '/placeholder.svg?height=100&width=100',
    featured: true,
  },
  {
    id: '4',
    name: 'Sports World',
    rating: 4.5,
    reviews: 982,
    productCount: 200,
    image: '/placeholder.svg?height=100&width=100',
    featured: true,
  },
]

export function VendorGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {vendors.map((vendor) => (
        <Link key={vendor.id} href={`/vendors/${vendor.id}`}>
          <Card className="h-full transition-colors hover:bg-muted/50">
            <CardHeader className="flex flex-row items-center gap-4">
              <img
                src={vendor.image}
                alt={vendor.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <CardTitle className="line-clamp-1 text-base">{vendor.name}</CardTitle>
                <div className="mt-1 flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(vendor.rating)
                            ? 'fill-primary text-primary'
                            : 'fill-muted text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({vendor.reviews})
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{vendor.productCount} Products</span>
                {vendor.featured && (
                  <Badge variant="secondary">Featured</Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

