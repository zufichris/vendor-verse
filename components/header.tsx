'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LanguageSelector } from '@/components/language-provider'
import { CurrencySelector } from '@/components/currency-provider'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const categories = [
  {
    title: 'Electronics',
    href: '/products/electronics',
    description: 'Discover the latest in technology and gadgets',
  },
  {
    title: 'Clothing',
    href: '/products/clothing',
    description: 'Shop trendy fashion for all occasions',
  },
  {
    title: 'Home & Garden',
    href: '/products/home',
    description: 'Everything you need for your living space',
  },
  {
    title: 'Sports & Outdoors',
    href: '/products/sports',
    description: 'Equipment and gear for active lifestyles',
  },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">LOGO</span>
            </Link>
            <div className="hidden md:ml-6 md:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {categories.map((category) => (
                          <li key={category.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={category.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {category.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {category.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/vendors/1" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={pathname === '/vendors' ? 'font-bold mx-2' : 'mx-2'}
                      >
                        Vendors
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={pathname === '/about' ? 'font-bold mx-2' : 'mx-2'}
                      >
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex-1 px-4 md:px-8">
            <form className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pl-10 pr-4"
              />
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
            </form>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex md:items-center md:space-x-4">
              <LanguageSelector />
              <CurrencySelector />
            </div>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Shopping Cart</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard">
                <User className="h-5 w-5" />
                <span className="sr-only">User Account</span>
              </Link>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col space-y-4">
                  <Link href="/" className="text-lg font-semibold" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                  {categories.map((category) => (
                    <Link
                      key={category.title}
                      href={category.href}
                      className="text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.title}
                    </Link>
                  ))}
                  <Link href="/vendors" className="text-sm" onClick={() => setIsOpen(false)}>
                    Vendors
                  </Link>
                  <Link href="/about" className="text-sm" onClick={() => setIsOpen(false)}>
                    About
                  </Link>
                  <div className="pt-4">
                    <LanguageSelector />
                  </div>
                  <div>
                    <CurrencySelector />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

