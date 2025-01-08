import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { ProductGrid } from '@/components/product-grid'
import { ProductFilters } from '@/components/product-filters'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"

// This would come from your database
const categories = ['electronics', 'clothing', 'home', 'sports']

interface CategoryPageProps {
  params: {
    category: string
  }
  searchParams: {
    sort?: string
    brands?: string
    price?: string
    page?: string
  }
}

export default function CategoryPage({ params, searchParams }: CategoryPageProps) {
  // Validate category exists
  if (!categories.includes(params.category)) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex flex-col space-y-6">
        <div className="flex items-baseline justify-between border-b pb-6">
          <h1 className="text-3xl font-bold capitalize tracking-tight">
            {params.category}
          </h1>
          <div className="flex items-center gap-4">
            <Select defaultValue={searchParams.sort ?? "featured"}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest Arrivals</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-8">
          <div className="col-span-1">
            <ProductFilters />
          </div>
          <div className="col-span-3">
            <Suspense
              fallback={
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="space-y-4">
                      <Skeleton className="aspect-square" />
                      <Skeleton className="h-4 w-2/3" />
                      <Skeleton className="h-4 w-1/3" />
                    </div>
                  ))}
                </div>
              }
            >
              <ProductGrid category={params.category} searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

