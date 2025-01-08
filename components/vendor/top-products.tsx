import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, TrendingDown } from 'lucide-react'

// This would normally be fetched from your API
const topProducts = [
  {
    id: '1',
    name: 'Wireless Headphones',
    sales: 245,
    revenue: 48755.55,
    trend: 'up',
    percentage: 12,
  },
  {
    id: '2',
    name: 'Smart Watch',
    sales: 189,
    revenue: 56700.00,
    trend: 'up',
    percentage: 8,
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    sales: 156,
    revenue: 23400.00,
    trend: 'down',
    percentage: 5,
  },
]

export function TopProducts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between space-x-4"
            >
              <div className="flex flex-col space-y-1">
                <span className="font-medium">{product.name}</span>
                <span className="text-sm text-muted-foreground">
                  {product.sales} sales
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-bold">
                  ${product.revenue.toLocaleString()}
                </span>
                <Badge
                  variant={product.trend === 'up' ? 'default' : 'destructive'}
                  className="flex items-center gap-1"
                >
                  {product.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {product.percentage}%
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

