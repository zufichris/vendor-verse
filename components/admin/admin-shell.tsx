interface AdminShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AdminShell({
  children,
  className,
  ...props
}: AdminShellProps) {
  return (
    <div className="space-y-4 p-8 pt-6" {...props}>
      {children}
    </div>
  )
}

