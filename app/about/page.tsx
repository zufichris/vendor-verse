import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { TeamMember } from '@/components/about/team-member'
import { MissionVision } from '@/components/about/mission-vision'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about our marketplace and team',
}

export default function AboutPage() {
  return (
    <main className=" mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About Our Marketplace
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Building the future of e-commerce, one connection at a time.
          </p>
        </div>

        {/* Mission & Vision */}
        <MissionVision />

        <Separator />

        {/* Stats */}
        <div className="grid gap-8 rounded-lg border bg-card p-8 text-card-foreground sm:grid-cols-3">
          <div className="text-center">
            <div className="text-4xl font-bold">10K+</div>
            <div className="mt-2 text-sm text-muted-foreground">Active Vendors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">1M+</div>
            <div className="mt-2 text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">100K+</div>
            <div className="mt-2 text-sm text-muted-foreground">Products Listed</div>
          </div>
        </div>

        {/* Team Section */}
        <section className="space-y-8">
          <h2 className="text-center text-3xl font-bold">Meet Our Team</h2>
          <p className="text-center text-muted-foreground">
            The passionate individuals driving innovation and excellence in our marketplace.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TeamMember
              name="Sarah Johnson"
              role="CEO & Founder"
              image="/placeholder.svg?height=400&width=400"
              bio="With 15 years of e-commerce experience, Sarah leads our vision for the future of online marketplaces."
            />
            <TeamMember
              name="Michael Chen"
              role="CTO"
              image="/placeholder.svg?height=400&width=400"
              bio="A tech veteran bringing over a decade of experience in building scalable platforms."
            />
            <TeamMember
              name="Emily Rodriguez"
              role="Head of Customer Experience"
              image="/placeholder.svg?height=400&width=400"
              bio="Passionate about creating exceptional experiences for both buyers and sellers."
            />
            <TeamMember
              name="David Kim"
              role="Head of Product"
              image="/placeholder.svg?height=400&width=400"
              bio="Leading product innovation with a focus on user-centered design and functionality."
            />
            <TeamMember
              name="Lisa Patel"
              role="Head of Marketing"
              image="/placeholder.svg?height=400&width=400"
              bio="Driving growth and brand awareness through strategic marketing initiatives."
            />
            <TeamMember
              name="James Wilson"
              role="Head of Operations"
              image="/placeholder.svg?height=400&width=400"
              bio="Ensuring smooth operations and continuous improvement of our marketplace."
            />
          </div>
        </section>

        <Separator />

        {/* Join Us Section */}
        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-bold">Join Our Journey</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We're always looking for talented individuals who share our passion for
            revolutionizing e-commerce. Check out our current opportunities or reach out
            to learn more.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <a href="/careers">View Careers</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}

