'use client'

import * as React from 'react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export function TicketFilters() {
  return (
    <div className="mb-6 flex flex-wrap gap-4">
      <Input
        placeholder="Search tickets..."
        className="max-w-xs"
      />
      <Select defaultValue="all-types">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-types">All Types</SelectItem>
          <SelectItem value="complaint">Complaints</SelectItem>
          <SelectItem value="dispute">Disputes</SelectItem>
          <SelectItem value="inquiry">Inquiries</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all-status">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-status">All Status</SelectItem>
          <SelectItem value="open">Open</SelectItem>
          <SelectItem value="in-progress">In Progress</SelectItem>
          <SelectItem value="resolved">Resolved</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all-priority">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-priority">All Priority</SelectItem>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="low">Low</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="secondary" className="ml-auto">
        Export Report
      </Button>
    </div>
  )
}

