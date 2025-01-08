'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { LayoutDashboard, Package, ShoppingCart, Settings, CreditCard, BarChart, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const items = [
  {
    title: 'Dashboard',
    href: '/vendor',
    icon: LayoutDashboard,
  },
  {
    title: 'Products',
    href: '/vendor/products',
    icon: Package,
  },
  {
    title: 'Orders',
    href: '/vendor/orders',
    icon: ShoppingCart,
  },
  {
    title: 'Analytics',
    href: '/vendor/analytics',
    icon: BarChart,
  },
  {
    title: 'Payments',
    href: '/vendor/payments',
    icon: CreditCard,
  },
  {
    title: 'Settings',
    href: '/vendor/settings',
    icon: Settings,
  },
]

export function VendorNav() {
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

