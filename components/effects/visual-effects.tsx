import { ParallaxSection } from './parallax-section'
import { MicroInteractions } from './micro-interactions'

export function VisualEffects() {
  return (
    <section className="space-y-16">
      <ParallaxSection />
      <div className="mx-auto max-w-6xl px-4">
        <MicroInteractions />
      </div>
    </section>
  )
}

