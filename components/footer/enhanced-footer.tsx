import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { NewsletterSignup } from './newsletter-signup'
import { SocialFeed } from './social-feed'
import { Separator } from '@/components/ui/separator'

const companyLinks = [
  { title: 'About Us', href: '/about' },
  { title: 'Careers', href: '/careers' },
  { title: 'Press', href: '/press' },
  { title: 'Blog', href: '/blog' },
]

const supportLinks = [
  { title: 'Help Center', href: '/help' },
  { title: 'Contact Us', href: '/contact' },
  { title: 'Returns', href: '/returns' },
  { title: 'Track Order', href: '/track' },
]

const legalLinks = [
  { title: 'Terms of Service', href: '/legal/terms' },
  { title: 'Privacy Policy', href: '/legal/privacy' },
  { title: 'Cookie Policy', href: '/legal/cookies' },
  { title: 'Accessibility', href: '/legal/accessibility' },
]

const socialLinks = [
  {
    title: 'Instagram',
    href: 'https://instagram.com',
    icon: Instagram,
  },
  {
    title: 'Facebook',
    href: 'https://facebook.com',
    icon: Facebook,
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com',
    icon: Twitter,
  },
  {
    title: 'YouTube',
    href: 'https://youtube.com',
    icon: Youtube,
  },
]

export function EnhancedFooter() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-8">
            <div>
              <Link href="/" className="text-xl font-bold">
                Your Store
              </Link>
              <p className="mt-2 text-sm text-muted-foreground">
                Discover amazing products from trusted vendors worldwide.
              </p>
            </div>
            <NewsletterSignup />
          </div>
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-2">
            <div>
              <h3 className="mb-4 text-sm font-semibold">Company</h3>
              <ul className="space-y-3 text-sm">
                {companyLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Support</h3>
              <ul className="space-y-3 text-sm">
                {supportLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold">Legal</h3>
              <ul className="space-y-3 text-sm">
                {legalLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <SocialFeed />

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Store. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

