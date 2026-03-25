interface AvatarPlaceholderProps {
  initials?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function AvatarPlaceholder({ initials = 'YN', size = 'lg' }: AvatarPlaceholderProps) {
  const sizeClasses = {
    sm: 'w-12 h-12 text-sm',
    md: 'w-20 h-20 text-xl',
    lg: 'w-32 h-32 text-3xl',
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center font-bold text-gray-500 dark:text-gray-400 flex-shrink-0`}
      aria-label={`Avatar placeholder with initials ${initials}`}
    >
      {initials}
    </div>
  )
}
