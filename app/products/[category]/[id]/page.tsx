import { notFound } from 'next/navigation'
import { ProductGallery } from '@/components/product-gallery'
import { ProductInfo } from '@/components/product-info'
import { ProductTabs } from '@/components/product-tabs'
import { ProductReviews } from '@/components/product-reviews'
import { Separator } from '@/components/ui/separator'

// This would come from your database
const product = {
  id: '1',
  name: 'Premium Wireless Headphones',
  description: 'Experience crystal-clear audio with our premium wireless headphones. Features active noise cancellation, 30-hour battery life, and premium comfort.',
  price: 299.99,
  discount: 20,
  rating: 4.5,
  reviewCount: 128,
  stock: 50,
  brand: 'AudioTech',
  category: 'electronics',
  specifications: [
    { name: 'Battery Life', value: '30 hours' },
    { name: 'Bluetooth Version', value: '5.0' },
    { name: 'Noise Cancellation', value: 'Active' },
    { name: 'Driver Size', value: '40mm' },
    { name: 'Weight', value: '250g' },
  ],
  features: [
    'Active Noise Cancellation',
    'Touch Controls',
    'Voice Assistant Support',
    'Multipoint Pairing',
    'Fast Charging',
  ],
  images: [
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600',
    '/placeholder.svg?height=600&width=600',
  ],
  vendor: {
    id: '1',
    name: 'Tech Haven',
    rating: 4.8,
    products: 320,
    followers: 1500,
  },
}

export default function ProductPage({
  params,
}: {
  params: { category: string; id: string }
}) {
  // In a real app, fetch product data here
  if (!product) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <ProductGallery images={product.images} name={product.name} />
        <ProductInfo product={product} />
      </div>
      <Separator className="my-8" />
      <ProductTabs product={product} />
      <Separator className="my-8" />
      <ProductReviews productId={product.id} />
    </div>
  )
}

