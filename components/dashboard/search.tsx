'use client'

import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function Search() {
  return (
    <div className="hidden w-full max-w-sm lg:flex">
      <div className="relative w-full">
        <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search orders..."
          className="w-full pl-8"
        />
      </div>
    </div>
  )
}

