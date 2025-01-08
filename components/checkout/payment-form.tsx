'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const formSchema = z.object({
  paymentMethod: z.enum(['card', 'paypal']),
  cardNumber: z.string().regex(/^\d{16}$/).optional(),
  cardExpiry: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/).optional(),
  cardCvc: z.string().regex(/^\d{3,4}$/).optional(),
}).refine((data) => {
  if (data.paymentMethod === 'card') {
    return data.cardNumber && data.cardExpiry && data.cardCvc
  }
  return true
}, {
  message: "Card details are required",
  path: ["cardNumber"],
})

interface PaymentFormProps {
  onSubmit: (data: z.infer<typeof formSchema>) => void
}

export function PaymentForm({ onSubmit }: PaymentFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentMethod: 'card',
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Payment Method</h2>
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex items-center space-x-4 rounded-lg border p-4">
                      <RadioGroupItem value="card" id="card" />
                      <div className="flex-1">
                        <Label htmlFor="card" className="font-semibold">
                          Credit/Debit Card
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Pay securely with your card
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 rounded-lg border p-4">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <div className="flex-1">
                        <Label htmlFor="paypal" className="font-semibold">
                          PayPal
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Pay with your PayPal account
                        </p>
                      </div>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {form.watch('paymentMethod') === 'card' && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Card Details</h2>
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input placeholder="1234 5678 9012 3456" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="cardExpiry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiry Date</FormLabel>
                    <FormControl>
                      <Input placeholder="MM/YY" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cardCvc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVC</FormLabel>
                    <FormControl>
                      <Input type="password" maxLength={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        )}

        <Button type="submit" className="w-full">
          Continue to Review
        </Button>
      </form>
    </Form>
  )
}

