interface VendorShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function VendorShell({
  children,
  className,
  ...props
}: VendorShellProps) {
  return (
    <div className="space-y-4 p-8 pt-6" {...props}>
      {children}
    </div>
  )
}

