'use client'

import * as React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ShippingForm } from './shipping-form'
import { PaymentForm } from './payment-form'
import { ReviewOrder } from './review-order'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const steps = [
  { id: 'shipping', title: 'Shipping' },
  { id: 'payment', title: 'Payment' },
  { id: 'review', title: 'Review' },
]

export function CheckoutSteps() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentStep = searchParams.get('step') || 'shipping'
  const [progress, setProgress] = React.useState(33)

  React.useEffect(() => {
    switch (currentStep) {
      case 'shipping':
        setProgress(33)
        break
      case 'payment':
        setProgress(66)
        break
      case 'review':
        setProgress(100)
        break
    }
  }, [currentStep])

  const goToStep = (step: string) => {
    router.push(`/checkout?step=${step}`)
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between text-sm">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`${
                currentStep === step.id
                  ? 'font-semibold text-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {step.title}
            </div>
          ))}
        </div>
      </div>

      <Card className="p-6">
        {currentStep === 'shipping' && (
          <ShippingForm
            onSubmit={(data) => {
              // Save shipping data
              goToStep('payment')
            }}
          />
        )}
        {currentStep === 'payment' && (
          <PaymentForm
            onSubmit={(data) => {
              // Process payment
              goToStep('review')
            }}
          />
        )}
        {currentStep === 'review' && (
          <ReviewOrder
            onSubmit={async () => {
              // Place order
              router.push('/checkout/confirmation')
            }}
          />
        )}
      </Card>

      <div className="flex justify-between">
        {currentStep !== 'shipping' && (
          <Button
            variant="outline"
            onClick={() => {
              goToStep(
                currentStep === 'review' ? 'payment' : 'shipping'
              )
            }}
          >
            Back
          </Button>
        )}
        {currentStep === 'shipping' && <div />}
      </div>
    </div>
  )
}

