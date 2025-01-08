import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// This would normally be fetched from your API
const recentOrders = [
    {
        id: '1234',
        customer: 'John Doe',
        product: 'Wireless Headphones',
        date: '2024-01-07',
        status: 'Processing',
        total: 199.99,
    },
    {
        id: '1235',
        customer: 'Jane Smith',
        product: 'Smart Watch',
        date: '2024-01-07',
        status: 'Shipped',
        total: 299.99,
    },
    {
        id: '1236',
        customer: 'Mike Johnson',
        product: 'Bluetooth Speaker',
        date: '2024-01-06',
        status: 'Delivered',
        total: 149.99,
    },
]

export function RecentOrders() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Product</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Total</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {recentOrders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell className="font-medium">#{order.id}</TableCell>
                                <TableCell>{order.customer}</TableCell>
                                <TableCell>{order.product}</TableCell>
                                <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={
                                            order.status === 'Delivered'
                                                ? 'default'
                                                : order.status === 'Processing'
                                                    ? 'secondary'
                                                    : 'outline'
                                        }
                                    >
                                        {order.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    ${order.total.toFixed(2)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

