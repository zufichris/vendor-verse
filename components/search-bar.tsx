'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { useDebounce } from '@/hooks/use-debounce'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Button } from '@/components/ui/button'

export function SearchBar() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState('')
  const debouncedQuery = useDebounce(query, 300)
  const [suggestions, setSuggestions] = React.useState<Array<{ id: string; name: string }>>([])

  React.useEffect(() => {
    if (debouncedQuery.length === 0) {
      setSuggestions([])
      return
    }

    // Simulated API call for suggestions
    // Replace with actual API call
    const mockSuggestions = [
      { id: '1', name: 'Wireless Headphones' },
      { id: '2', name: 'Smart Watch' },
      { id: '3', name: 'Running Shoes' },
    ].filter((item) => item.name.toLowerCase().includes(debouncedQuery.toLowerCase()))

    setSuggestions(mockSuggestions)
  }, [debouncedQuery])

  return (
    <div className="relative w-full max-w-2xl">
      <Button
        variant="secondary"
        className="relative h-12 w-full justify-start bg-white/90 text-sm font-normal text-muted-foreground shadow-sm backdrop-blur-sm hover:bg-white"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        Search products...
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput
            placeholder="Search products..."
            value={query}
            onValueChange={setQuery}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {suggestions.map((suggestion) => (
                <CommandItem
                  key={suggestion.id}
                  onSelect={() => {
                    router.push(`/search?q=${encodeURIComponent(suggestion.name)}`)
                    setOpen(false)
                  }}
                >
                  <Search className="mr-2 h-4 w-4" />
                  {suggestion.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}

