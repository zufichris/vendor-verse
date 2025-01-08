import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our privacy policy and data protection practices',
}

export default function PrivacyPage() {
  return (
    <main className=" mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: January 1, 2024</p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="prose prose-gray max-w-none dark:prose-invert">
              <h2>1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul>
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
                <li>Transaction history</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul>
                <li>Process your orders and payments</li>
                <li>Communicate with you about your orders</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our services</li>
                <li>Prevent fraud and maintain security</li>
              </ul>

              <h2>3. Information Sharing</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Vendors for order fulfillment</li>
                <li>Payment processors for transactions</li>
                <li>Service providers who assist our operations</li>
                <li>Law enforcement when required by law</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your
                personal information, including:
              </p>
              <ul>
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Secure data storage</li>
              </ul>

              <h2>5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Withdraw consent</li>
              </ul>

              <h2>6. Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to improve your browsing experience and
                analyze site traffic. You can control cookies through your browser settings.
              </p>

              <h2>7. Marketing Communications</h2>
              <p>
                You can opt out of marketing communications at any time by:
              </p>
              <ul>
                <li>Clicking the unsubscribe link in our emails</li>
                <li>Updating your communication preferences in your account</li>
                <li>Contacting our support team</li>
              </ul>

              <h2>8. Children's Privacy</h2>
              <p>
                Our services are not directed to children under 13. We do not knowingly collect
                personal information from children under 13.
              </p>

              <h2>9. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than
                your own. We ensure appropriate safeguards are in place for such transfers.
              </p>

              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this policy periodically. We will notify you of any material
                changes by posting the new policy on this page.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                For questions about this privacy policy or our data practices, please contact:
              </p>
              <p>
                Email:{' '}
                <a href="mailto:privacy@yourmarketplace.com">privacy@yourmarketplace.com</a>
                <br />
                Address: 123 Market Street, San Francisco, CA 94105
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center gap-4">
          <Button variant="outline" asChild>
            <a href="/legal/terms">Terms & Conditions</a>
          </Button>
          <Button asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </main>
  )
}

