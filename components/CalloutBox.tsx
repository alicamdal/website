type CalloutType = 'info' | 'warning' | 'tip'

interface CalloutBoxProps {
  type?: CalloutType
  children: React.ReactNode
}

const calloutStyles: Record<CalloutType, { bg: string; border: string; icon: string }> = {
  info: { bg: 'bg-blue-50 dark:bg-blue-950/30', border: 'border-blue-200 dark:border-blue-800', icon: 'ℹ️' },
  warning: { bg: 'bg-amber-50 dark:bg-amber-950/30', border: 'border-amber-200 dark:border-amber-800', icon: '⚠️' },
  tip: { bg: 'bg-green-50 dark:bg-green-950/30', border: 'border-green-200 dark:border-green-800', icon: '💡' },
}

export default function CalloutBox({ type = 'info', children }: CalloutBoxProps) {
  const { bg, border, icon } = calloutStyles[type]
  return (
    <div className={`my-4 p-4 rounded-lg border ${bg} ${border} flex gap-3`} role="note">
      <span aria-hidden="true">{icon}</span>
      <div className="text-sm">{children}</div>
    </div>
  )
}
