import { notFound } from 'next/navigation'
import { VendorHeader } from '@/components/vendor-header'
import { VendorProducts } from '@/components/vendor-products'
import { VendorReviews } from '@/components/vendor/vendor-reviews'
import { VendorContact } from '@/components/vendor-contact'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'

// This would come from your database
const vendor = {
  id: '1',
  name: 'Tech Haven',
  description: 'Your one-stop shop for premium electronics and gadgets. We carefully curate our selection to bring you the best technology has to offer.',
  logo: '/placeholder.svg?height=100&width=100',
  coverImage: '/placeholder.svg?height=400&width=1200',
  rating: 4.8,
  reviews: 1245,
  followers: 3200,
  products: 320,
  joinedDate: '2021-06-15',
  location: 'New York, USA',
  responseTime: '< 24 hours',
  categories: ['Electronics', 'Gadgets', 'Accessories'],
  badges: ['Verified Seller', 'Fast Shipper', 'Top Rated'],
}

export default function VendorPage({
  params,
}: {
  params: { id: string }
}) {
  // In a real app, fetch vendor data here
  if (!vendor) {
    notFound()
  }

  return (
    <div>
      <VendorHeader vendor={vendor} />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <Tabs defaultValue="products" className="space-y-8">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          <TabsContent value="products">
            <VendorProducts vendorId={vendor.id} />
          </TabsContent>
          <TabsContent value="reviews">
            <VendorReviews />
          </TabsContent>
          <TabsContent value="about">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">About {vendor.name}</h2>
                <p className="mt-2 text-muted-foreground">{vendor.description}</p>
              </div>
              <Separator />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">{vendor.location}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Member Since</h3>
                  <p className="text-muted-foreground">
                    {new Date(vendor.joinedDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Response Time</h3>
                  <p className="text-muted-foreground">{vendor.responseTime}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Categories</h3>
                  <p className="text-muted-foreground">{vendor.categories.join(', ')}</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="contact">
            <VendorContact vendor={vendor} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

