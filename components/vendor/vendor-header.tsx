import { UserNav } from '@/components/dashboard/user-nav'
import { MainNav } from '@/components/dashboard/main-nav'
import { Search } from '@/components/dashboard/search'

export function VendorHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className=" flex h-14 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Search />
          <UserNav />
        </div>
      </div>
    </header>
  )
}

