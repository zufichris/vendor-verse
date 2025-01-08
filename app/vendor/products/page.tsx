import { VendorShell } from '@/components/vendor/vendor-shell'
import { ProductList } from '@/components/vendor/products/product-list'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function ProductsPage() {
  return (
    <VendorShell>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground">
            Manage your product inventory and listings
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </div>
      <Separator className="my-4" />
      <ProductList />
    </VendorShell>
  )
}

