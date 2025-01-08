import { CheckCircle2, Package, Truck } from 'lucide-react'

interface OrderTimelineProps {
  orderId: string
}

export function OrderTimeline({ orderId }: OrderTimelineProps) {
  // This would normally be fetched based on the order ID
  const events = [
    {
      id: '1',
      title: 'Order Confirmed',
      description: "We've received your order",
      date: '2024-01-07 09:00 AM',
      icon: CheckCircle2,
      status: 'complete',
    },
    {
      id: '2',
      title: 'Order Processing',
      description: 'Your order is being prepared',
      date: '2024-01-07 02:30 PM',
      icon: Package,
      status: 'complete',
    },
    {
      id: '3',
      title: 'Out for Delivery',
      description: 'Your order is on its way',
      date: '2024-01-08 10:15 AM',
      icon: Truck,
      status: 'current',
    },
  ]

  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {events.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== events.length - 1 ? (
                <span
                  className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-muted"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-inset ${event.status === 'complete'
                        ? 'bg-primary text-primary-foreground ring-primary'
                        : event.status === 'current'
                          ? 'bg-secondary text-secondary-foreground ring-secondary'
                          : 'bg-muted text-muted-foreground ring-muted'
                      }`}
                  >
                    <event.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4">
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-muted-foreground">
                    {new Date(event.date).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

