'use client'

import * as React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'

// This would normally be fetched from your API
const tickets = [
  {
    id: 'T-1234',
    subject: 'Order Delivery Delayed',
    customer: 'John Doe',
    type: 'complaint',
    status: 'open',
    priority: 'high',
    createdAt: '2024-01-07T10:00:00',
    description: 'My order #123456 was supposed to be delivered yesterday but I haven\'t received it yet.',
  },
  {
    id: 'T-1235',
    subject: 'Refund Request',
    customer: 'Jane Smith',
    type: 'dispute',
    status: 'in-progress',
    priority: 'medium',
    createdAt: '2024-01-07T09:00:00',
    description: 'I would like to request a refund for my recent purchase as the item received was damaged.',
  },
]

export function TicketList() {
  const [selectedTicket, setSelectedTicket] = React.useState<typeof tickets[0] | null>(null)
  const [response, setResponse] = React.useState('')

  const handleResponse = async () => {
    if (!selectedTicket || !response) return

    // This would normally make an API call
    toast({
      title: 'Response sent',
      description: 'Your response has been sent to the customer.',
    })

    setSelectedTicket(null)
    setResponse('')
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ticket ID</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Created</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell className="font-medium">{ticket.id}</TableCell>
              <TableCell>{ticket.subject}</TableCell>
              <TableCell>{ticket.customer}</TableCell>
              <TableCell>
                <Badge variant={ticket.type === 'dispute' ? 'destructive' : 'secondary'}>
                  {ticket.type}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    ticket.status === 'open'
                      ? 'default'
                      : ticket.status === 'in-progress'
                      ? 'secondary'
                      : 'outline'
                  }
                >
                  {ticket.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    ticket.priority === 'high'
                      ? 'destructive'
                      : ticket.priority === 'medium'
                      ? 'secondary'
                      : 'outline'
                  }
                >
                  {ticket.priority}
                </Badge>
              </TableCell>
              <TableCell>
                {new Date(ticket.createdAt).toLocaleString()}
              </TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  onClick={() => setSelectedTicket(ticket)}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={!!selectedTicket} onOpenChange={() => setSelectedTicket(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Ticket #{selectedTicket?.id}</DialogTitle>
            <DialogDescription>
              View and respond to the support ticket
            </DialogDescription>
          </DialogHeader>
          {selectedTicket && (
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="grid gap-1">
                  <h3 className="font-semibold">Subject</h3>
                  <p>{selectedTicket.subject}</p>
                </div>
                <div className="grid gap-1">
                  <h3 className="font-semibold">Description</h3>
                  <p>{selectedTicket.description}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h3 className="font-semibold">Customer</h3>
                    <p>{selectedTicket.customer}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Created</h3>
                    <p>{new Date(selectedTicket.createdAt).toLocaleString()}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Response</h3>
                <Textarea
                  placeholder="Type your response here..."
                  value={response}
                  onChange={(e) => setResponse(e.target.value)}
                  rows={4}
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedTicket(null)}>
              Cancel
            </Button>
            <Button onClick={handleResponse} disabled={!response}>
              Send Response
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

