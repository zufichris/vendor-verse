import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your purchase",
}

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-muted/50">
      {children}
    </div>
  )
}

