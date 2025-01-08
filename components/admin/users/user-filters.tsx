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

export function UserFilters() {
  return (
    <div className="mb-6 flex flex-wrap gap-4">
      <Input
        placeholder="Search users..."
        className="max-w-xs"
      />
      <Select defaultValue="all-roles">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-roles">All Roles</SelectItem>
          <SelectItem value="buyer">Buyers</SelectItem>
          <SelectItem value="vendor">Vendors</SelectItem>
          <SelectItem value="admin">Admins</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all-status">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-status">All Status</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="suspended">Suspended</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="secondary" className="ml-auto">
        Export Users
      </Button>
    </div>
  )
}

