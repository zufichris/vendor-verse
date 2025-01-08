import { SpinWheel } from './spin-wheel'
import { ProductCard } from './product-card'
import { Separator } from '@/components/ui/separator'

// Example products for demonstration
const products = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation.',
    price: 199.99,
    originalPrice: 249.99,
    image: '/placeholder.svg?height=300&width=300',
    category: 'electronics',
    rating: 4.5,
    reviews: 128,
    stock: 50,
    discount: 20,
    isNew: true,
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Track your fitness goals with this advanced smartwatch.',
    price: 149.99,
    originalPrice: 179.99,
    image: '/placeholder.svg?height=300&width=300',
    category: 'electronics',
    rating: 4.8,
    reviews: 256,
    stock: 75,
    discount: 15,
  },
  {
    id: '3',
    name: 'Portable Bluetooth Speaker',
    description: 'Premium sound quality in a compact, portable design.',
    price: 79.99,
    image: '/placeholder.svg?height=300&width=300',
    category: 'electronics',
    rating: 4.3,
    reviews: 89,
    stock: 100,
    isNew: true,
  },
]

export function InteractiveElements() {
  return (
    <section className="space-y-16">
      <div className="mx-auto max-w-md">
        <SpinWheel />
      </div>
      <Separator />
      <div>
        <h2 className="mb-8 text-2xl font-bold">Featured Products</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

