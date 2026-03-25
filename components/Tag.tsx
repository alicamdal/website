type TagVariant = 'blue' | 'green' | 'orange' | 'purple' | 'teal' | 'gray'

interface TagProps {
  children: React.ReactNode
  variant?: TagVariant
  size?: 'sm' | 'md'
}

const variantClasses: Record<TagVariant, string> = {
  blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  green: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
  purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  teal: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300',
  gray: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
}

export default function Tag({ children, variant = 'gray', size = 'sm' }: TagProps) {
  const sizeClass = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
  return (
    <span className={`inline-block rounded-full font-medium ${sizeClass} ${variantClasses[variant]}`}>
      {children}
    </span>
  )
}
