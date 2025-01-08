import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Your Marketplace',
    default: 'Legal | Your Marketplace',
  },
}

interface LegalLayoutProps {
  children: React.ReactNode
}

export default function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-muted/50">
      {children}
    </div>
  )
}

