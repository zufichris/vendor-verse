'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { DialogClose } from '@/components/ui/dialog'

const formSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string().min(10, {
    message: 'Comment must be at least 10 characters.',
  }),
})

interface FeedbackFormProps {
  orderId: string
}

export function FeedbackForm({ orderId }: FeedbackFormProps) {
  const [hoveredStar, setHoveredStar] = React.useState(0)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 0,
      comment: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // This would normally make an API call
    console.log('Submitting feedback for order:', orderId, values)
    toast({
      title: 'Feedback submitted',
      description: 'Thank you for your feedback!',
    })
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <FormControl>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-2xl focus:outline-none"
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      onClick={() => field.onChange(star)}
                    >
                      <span
                        className={
                          star <= (hoveredStar || field.value)
                            ? 'text-yellow-400'
                            : 'text-muted'
                        }
                      >
                        ★
                      </span>
                    </button>
                  ))}
                </div>
              </FormControl>
              <FormDescription>Rate your experience</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your experience with this order..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-4">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit">Submit Feedback</Button>
        </div>
      </form>
    </Form>
  )
}

