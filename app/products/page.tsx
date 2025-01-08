import { Suspense } from 'react'
import { ProductGrid } from '@/components/product-grid'
import { ProductFilters } from '@/components/product-filters'
import { ProductSort } from '@/components/product-sort'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ProductsPageProps {
  searchParams: {
    category?: string
    sort?: string
    page?: string
  }
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex items-baseline justify-between border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
        <div className="flex items-center gap-4">
          <Select defaultValue="featured">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest Arrivals</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 pt-6">
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
            <ProductGrid searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

