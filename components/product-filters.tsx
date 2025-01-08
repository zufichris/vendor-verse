'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Slider,
  SliderTrack,
  SliderRange,
  SliderThumb,
} from "@/components/ui/slider"

const brands = [
  { id: 'apple', name: 'Apple' },
  { id: 'samsung', name: 'Samsung' },
  { id: 'sony', name: 'Sony' },
  { id: 'lg', name: 'LG' },
]

const availability = [
  { id: 'in-stock', name: 'In Stock' },
  { id: 'out-of-stock', name: 'Out of Stock' },
]

export function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const selectedBrands = searchParams.get('brands')?.split(',') || []
  const priceRange = searchParams.get('price')?.split('-').map(Number) || [0, 1000]

  const updateFilter = useCallback((type: string, value: string | number[]) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (Array.isArray(value)) {
      // Handle price range
      params.set(type, value.join('-'))
    } else {
      const current = params.get(type)?.split(',') || []
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value]

      if (updated.length > 0) {
        params.set(type, updated.join(','))
      } else {
        params.delete(type)
      }
    }

    router.push(`?${params.toString()}`)
  }, [router, searchParams])

  return (
    <Accordion type="multiple" defaultValue={["price", "brands", "availability"]} className="w-full">
      <AccordionItem value="price">
        <AccordionTrigger>Price Range</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <Slider
              defaultValue={priceRange}
              max={1000}
              step={10}
              onValueChange={(value) => updateFilter('price', value)}
              className="py-4"
            />
            <div className="flex items-center justify-between">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="brands">
        <AccordionTrigger>Brands</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            {brands.map((brand) => (
              <div key={brand.id} className="flex items-center space-x-2">
                <Checkbox
                  id={brand.id}
                  checked={selectedBrands.includes(brand.id)}
                  onCheckedChange={() => updateFilter('brands', brand.id)}
                />
                <Label htmlFor={brand.id}>{brand.name}</Label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="availability">
        <AccordionTrigger>Availability</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            {availability.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={option.id}
                  checked={selectedBrands.includes(option.id)}
                  onCheckedChange={() => updateFilter('availability', option.id)}
                />
                <Label htmlFor={option.id}>{option.name}</Label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

