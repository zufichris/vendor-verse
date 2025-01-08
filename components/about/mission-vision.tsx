import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, Lightbulb, Heart, Shield } from 'lucide-react'

export function MissionVision() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Our Mission
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            To create a trusted global marketplace that empowers entrepreneurs and
            provides customers with unique, quality products. We strive to make commerce
            easier, more accessible, and more sustainable for everyone.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Our Vision
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            To be the world's most customer-centric marketplace, where people can find
            and discover anything they want to buy online, while fostering a community
            of successful entrepreneurs.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Our Values
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium">Customer Obsession</h4>
            <p className="text-sm text-muted-foreground">
              We start with the customer and work backwards.
            </p>
          </div>
          <div>
            <h4 className="font-medium">Innovation</h4>
            <p className="text-sm text-muted-foreground">
              We constantly push boundaries and embrace new ideas.
            </p>
          </div>
          <div>
            <h4 className="font-medium">Integrity</h4>
            <p className="text-sm text-muted-foreground">
              We earn trust through ethical practices and transparency.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Our Commitment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium">Quality Assurance</h4>
            <p className="text-sm text-muted-foreground">
              Rigorous standards for all products and sellers.
            </p>
          </div>
          <div>
            <h4 className="font-medium">Sustainable Practices</h4>
            <p className="text-sm text-muted-foreground">
              Commitment to environmental responsibility.
            </p>
          </div>
          <div>
            <h4 className="font-medium">Community Support</h4>
            <p className="text-sm text-muted-foreground">
              Empowering local businesses and communities.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

