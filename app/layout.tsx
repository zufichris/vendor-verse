import { Metadata } from 'next'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/language-provider'
import { Header } from '@/components/header'
import { EnhancedFooter } from '@/components/footer/enhanced-footer'
import NextTopLoader from 'nextjs-toploader';
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Your Marketplace',
    template: '%s | Your Marketplace'
  },
  description: 'Discover amazing products from vendors worldwide',
  keywords: ['marketplace', 'ecommerce', 'online shopping'],
  authors: [{ name: 'Your Company' }],
  creator: 'Your Company',
  metadataBase: new URL('https://yourmarketplace.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourmarketplace.com',
    title: 'Your Marketplace',
    description: 'Discover amazing products from vendors worldwide',
    siteName: 'Your Marketplace'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Marketplace',
    description: 'Discover amazing products from vendors worldwide',
    creator: '@yourmarketplace'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
           <NextTopLoader/>
          <LanguageProvider>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <EnhancedFooter />
            </div>
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

