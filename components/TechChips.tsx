interface TechChipsProps {
  items: string[]
}

export default function TechChips({ items }: TechChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="px-2.5 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
        >
          {item}
        </span>
      ))}
    </div>
  )
}
