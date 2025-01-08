'use client'

import * as React from 'react'
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import { Gift, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { toast } from '@/components/ui/use-toast'
import confetti from 'canvas-confetti'

const rewards = [
  { id: 1, label: '10% OFF', color: '#f43f5e', probability: 0.3 },
  { id: 2, label: '20% OFF', color: '#8b5cf6', probability: 0.2 },
  { id: 3, label: '5% OFF', color: '#ec4899', probability: 0.3 },
  { id: 4, label: 'Free Shipping', color: '#06b6d4', probability: 0.1 },
  { id: 5, label: '15% OFF', color: '#10b981', probability: 0.05 },
  { id: 6, label: '25% OFF', color: '#f59e0b', probability: 0.05 },
]

export function SpinWheel() {
  const [isSpinning, setIsSpinning] = React.useState(false)
  const [showReward, setShowReward] = React.useState(false)
  const [currentReward, setCurrentReward] = React.useState<typeof rewards[0] | null>(null)
  const controls = useAnimation()
  const rotate = useMotionValue(0)
  const scale = useTransform(rotate, [0, 360], [1, 1.1])

  const spinWheel = async () => {
    if (isSpinning) return

    setIsSpinning(true)

    // Determine the reward based on probability
    const random = Math.random()
    let probabilitySum = 0
    let selectedReward = rewards[0]

    for (const reward of rewards) {
      probabilitySum += reward.probability
      if (random <= probabilitySum) {
        selectedReward = reward
        break
      }
    }

    // Calculate the final rotation to land on the selected reward
    const rewardIndex = rewards.findIndex((r) => r.id === selectedReward.id)
    const baseRotation = 1440 // 4 full rotations
    const segmentAngle = 360 / rewards.length
    const finalRotation = baseRotation + (360 - (rewardIndex * segmentAngle))

    // Animate the wheel
    await controls.start({
      rotate: finalRotation,
      transition: {
        duration: 4,
        ease: [0.32, 0.72, 0.35, 0.98],
      },
    })

    // Show reward
    setCurrentReward(selectedReward)
    setShowReward(true)
    setIsSpinning(false)

    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }

  return (
    <div className="relative mx-auto max-w-md text-center">
      <div className="mb-4 space-y-2">
        <h2 className="text-2xl font-bold">Spin to Win!</h2>
        <p className="text-sm text-muted-foreground">
          Try your luck and win exclusive discounts
        </p>
      </div>

      <div className="relative aspect-square">
        {/* Wheel */}
        <motion.div
          className="relative h-full w-full"
          style={{ scale }}
          animate={controls}
        >
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full -rotate-90 transform"
          >
            {rewards.map((reward, index) => {
              const angle = (360 / rewards.length) * index
              const rad = (Math.PI / 180) * angle
              const x = 50 + 35 * Math.cos(rad)
              const y = 50 + 35 * Math.sin(rad)

              return (
                <g key={reward.id}>
                  <path
                    d={`M50,50 L50,0 A50,50 0 0,1 ${50 + 50 * Math.cos((Math.PI / 180) * (360 / rewards.length))},${50 + 50 * Math.sin((Math.PI / 180) * (360 / rewards.length))} Z`}
                    fill={reward.color}
                    transform={`rotate(${angle}, 50, 50)`}
                    className="transition-opacity hover:opacity-90"
                  />
                  <text
                    x={x}
                    y={y}
                    dy=".3em"
                    fill="white"
                    fontSize="4"
                    textAnchor="middle"
                    transform={`rotate(${angle + 90}, ${x}, ${y})`}
                  >
                    {reward.label}
                  </text>
                </g>
              )
            })}
          </svg>

          {/* Center Button */}
          <Button
            className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
            onClick={spinWheel}
            disabled={isSpinning}
          >
            {isSpinning ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              <Gift className="h-6 w-6" />
            )}
            <span className="sr-only">Spin the wheel</span>
          </Button>
        </motion.div>

        {/* Pointer */}
        <div className="absolute left-1/2 top-0 h-6 w-4 -translate-x-1/2 overflow-hidden">
          <div className="h-6 w-4 origin-bottom rotate-45 transform bg-primary" />
        </div>
      </div>

      <Dialog open={showReward} onOpenChange={setShowReward}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Congratulations! 🎉</DialogTitle>
            <DialogDescription>
              You&apos;ve won {currentReward?.label}! Use code{' '}
              <span className="font-mono font-bold">
                WIN{currentReward?.label.replace(/\D/g, '')}
              </span>{' '}
              at checkout.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-4">
            <Button
              variant="secondary"
              onClick={() => {
                setShowReward(false)
                toast({
                  title: 'Discount code copied!',
                  description: 'The code has been copied to your clipboard.',
                })
                navigator.clipboard.writeText(
                  `WIN${currentReward?.label.replace(/\D/g, '')}`
                )
              }}
            >
              Copy Code
            </Button>
            <Button onClick={() => setShowReward(false)}>Shop Now</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

