'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Package, Heart, Settings, ShoppingCart, User, MessageSquare, CreditCard, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '../ui/separator'

const items = [
  {
    title: 'Orders',
    href: '/dashboard/orders',
    icon: Package,
  },
  {
    title: 'Wishlist',
    href: '/dashboard/wishlist',
    icon: Heart,
  },
  {
    title: 'Cart',
    href: '/dashboard/cart',
    icon: ShoppingCart,
  },
  {
    title: 'Messages',
    href: '/dashboard/messages',
    icon: MessageSquare,
  },
  {
    title: 'Payment Methods',
    href: '/dashboard/payment',
    icon: CreditCard,
  },
  {
    title: 'Profile Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2 p-4">
      {items.map((item) => {
        const Icon = item.icon
        return (
          <Button
            key={item.href}
            variant={pathname === item.href ? 'secondary' : 'ghost'}
            className={cn(
              'w-full justify-start gap-2',
              pathname === item.href && 'bg-muted font-medium'
            )}
            asChild
          >
            <Link href={item.href}>
              <Icon className="h-4 w-4" />
              {item.title}
            </Link>
          </Button>
        )
      })}
      <Separator className="my-4" />
      <Button variant="ghost" className="w-full justify-start gap-2 text-red-500">
        <LogOut className="h-4 w-4" />
        Logout
      </Button>
    </nav>
  )
}

