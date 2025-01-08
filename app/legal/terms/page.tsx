import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using our marketplace',
}

export default function TermsPage() {
  return (
    <main className=" mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Terms & Conditions</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: January 1, 2024</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="prose prose-gray max-w-none dark:prose-invert">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using this marketplace, you accept and agree to be bound by the
                terms and provision of this agreement.
              </p>

              <h2>2. User Registration</h2>
              <p>
                To access certain features of the marketplace, you must register for an account.
                You agree to:
              </p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain and update your information</li>
                <li>Maintain the security of your account</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>

              <h2>3. Marketplace Rules</h2>
              <p>When using our marketplace, you agree not to:</p>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Post false, inaccurate, or misleading content</li>
                <li>Interfere with the proper working of the marketplace</li>
              </ul>

              <h2>4. Product Listings</h2>
              <p>
                Vendors must ensure that product listings are accurate and comply with all
                applicable laws and regulations. Products must:
              </p>
              <ul>
                <li>Be described accurately and completely</li>
                <li>Include clear pricing information</li>
                <li>Comply with our prohibited items policy</li>
                <li>Include accurate shipping information</li>
              </ul>

              <h2>5. Payments and Fees</h2>
              <p>
                All payments are processed securely through our payment providers. Vendors agree
                to pay applicable fees as outlined in our fee schedule.
              </p>

              <h2>6. Shipping and Delivery</h2>
              <p>
                Vendors are responsible for shipping products in a timely manner and providing
                tracking information when available.
              </p>

              <h2>7. Returns and Refunds</h2>
              <p>
                Our return and refund policy aims to ensure customer satisfaction while
                protecting vendors. Details can be found in our Returns Policy.
              </p>

              <h2>8. Privacy and Data Protection</h2>
              <p>
                We take your privacy seriously. Please review our Privacy Policy to understand
                how we collect, use, and protect your data.
              </p>

              <h2>9. Intellectual Property</h2>
              <p>
                All content on the marketplace, unless user-generated, is the property of our
                company and is protected by copyright laws.
              </p>

              <h2>10. Termination</h2>
              <p>
                We reserve the right to terminate or suspend accounts that violate these terms
                or for any other reason at our discretion.
              </p>

              <h2>11. Changes to Terms</h2>
              <p>
                We may modify these terms at any time. Continued use of the marketplace
                constitutes acceptance of modified terms.
              </p>

              <h2>12. Contact Information</h2>
              <p>
                For questions about these terms, please contact our support team at{' '}
                <a href="mailto:legal@yourmarketplace.com">legal@yourmarketplace.com</a>.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center gap-4">
          <Button variant="outline" asChild>
            <a href="/legal/privacy">Privacy Policy</a>
          </Button>
          <Button asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </main>
  )
}

