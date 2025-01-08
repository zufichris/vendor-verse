'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
})

export function NewsletterSignup() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: 'Subscribed!',
      description: 'Thank you for subscribing to our newsletter.',
    })
    form.reset()
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Stay Updated</h3>
        <p className="text-sm text-muted-foreground">
          Subscribe to get exclusive deals and personalized recommendations
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                    />
                    <Button type="submit">Subscribe</Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <p className="text-xs text-muted-foreground">
        By subscribing, you agree to our Privacy Policy and consent to receive
        updates from our company.
      </p>
    </div>
  )
}

