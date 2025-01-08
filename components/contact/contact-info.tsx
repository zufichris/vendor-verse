import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Office Location</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Main Office</p>
              <p className="text-sm text-muted-foreground">
                123 Market Street
                <br />
                San Francisco, CA 94105
                <br />
                United States
              </p>
            </div>
          </div>
          <Button variant="outline" className="w-full" asChild>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Map
            </a>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted-foreground">
                support@yourmarketplace.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Business Hours</p>
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM PST
                <br />
                Saturday: 10:00 AM - 4:00 PM PST
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Connect With Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Follow us on social media for updates, tips, and community highlights.
          </p>
          <div className="mt-4 flex gap-2">
            <Button variant="outline" className="flex-1" asChild>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </Button>
            <Button variant="outline" className="flex-1" asChild>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="flex-1" asChild>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

