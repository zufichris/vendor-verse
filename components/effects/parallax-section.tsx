'use client'

import * as React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function ParallaxSection() {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Transform values for parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const opacityText = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])

  return (
    <div
      ref={ref}
      className="relative h-[50vh] min-h-[400px] w-full overflow-hidden md:h-[80vh]"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <img
          src="/placeholder.svg?height=1000&width=2000"
          alt=""
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Content with Parallax */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ y: textY, opacity: opacityText }}
      >
        <div className="relative space-y-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Discover Amazing Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-muted-foreground"
          >
            Shop the latest trends and find your next favorite item from our
            curated collection of premium products.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg">Shop Now</Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

