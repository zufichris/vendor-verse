'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface ProductTabsProps {
  product: any // Replace with proper type
}

export function ProductTabs({ product }: ProductTabsProps) {
  return (
    <Tabs defaultValue="specifications" className="space-y-4">
      <TabsList>
        <TabsTrigger value="specifications">Specifications</TabsTrigger>
        <TabsTrigger value="features">Features</TabsTrigger>
      </TabsList>
      <TabsContent value="specifications">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Specification</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {product.specifications.map((spec: any) => (
              <TableRow key={spec.name}>
                <TableCell className="font-medium">{spec.name}</TableCell>
                <TableCell>{spec.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="features">
        <ul className="list-inside list-disc space-y-2">
          {product.features.map((feature: string) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </TabsContent>
    </Tabs>
  )
}

