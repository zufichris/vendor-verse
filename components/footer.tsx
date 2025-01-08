import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className=" grid gap-8 px-4 py-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-semibold">About Us</h3>
          <p className="text-sm text-muted-foreground">
            Your Marketplace is a global platform connecting buyers with trusted vendors,
            offering quality products and exceptional service.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/vendors" className="text-muted-foreground hover:text-foreground">
                Become a Vendor
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/help/shipping"
                className="text-muted-foreground hover:text-foreground"
              >
                Shipping Information
              </Link>
            </li>
            <li>
              <Link
                href="/help/returns"
                className="text-muted-foreground hover:text-foreground"
              >
                Returns & Exchanges
              </Link>
            </li>
            <li>
              <Link
                href="/help/faq"
                className="text-muted-foreground hover:text-foreground"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/help/support"
                className="text-muted-foreground hover:text-foreground"
              >
                Customer Support
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
          <div className="flex space-x-4">
            <Link
              href="https://twitter.com"
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://facebook.com"
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://instagram.com"
              className="text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <p className="text-muted-foreground">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border bg-background px-3 py-2"
              />
              <button
                type="submit"
                className="rounded-md bg-primary px-3 py-2 text-primary-foreground hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="x-col items-center gap-4 px-4 py-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Marketplace. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/legal/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

