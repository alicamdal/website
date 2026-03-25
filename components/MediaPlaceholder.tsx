interface MediaPlaceholderProps {
  label: string
  aspectRatio?: '16/9' | '4/3'
  className?: string
}

export default function MediaPlaceholder({
  label,
  aspectRatio = '16/9',
  className = '',
}: MediaPlaceholderProps) {
  const paddingMap = {
    '16/9': 'pb-[56.25%]',
    '4/3': 'pb-[75%]',
  }

  return (
    <div className={`relative w-full ${paddingMap[aspectRatio]} ${className}`}>
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center">
        <p className="text-sm italic text-gray-400 dark:text-gray-500 text-center px-4">
          [ {label} ]
        </p>
      </div>
    </div>
  )
}
