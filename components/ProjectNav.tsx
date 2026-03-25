import Link from 'next/link'

interface ProjectNavProps {
  prev?: { slug: string; title: string }
  next?: { slug: string; title: string }
}

export default function ProjectNav({ prev, next }: ProjectNavProps) {
  return (
    <nav aria-label="Project navigation" className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-10 flex justify-between gap-4">
      <div className="flex-1">
        {prev && (
          <Link href={`/industry/${prev.slug}`} className="group flex flex-col gap-1 text-sm" aria-label={`Previous project: ${prev.title}`}>
            <span className="text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">← Previous</span>
            <span className="font-medium text-gray-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{prev.title}</span>
          </Link>
        )}
      </div>
      <div className="flex-1 text-right">
        {next && (
          <Link href={`/industry/${next.slug}`} className="group flex flex-col gap-1 text-sm items-end" aria-label={`Next project: ${next.title}`}>
            <span className="text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">Next →</span>
            <span className="font-medium text-gray-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{next.title}</span>
          </Link>
        )}
      </div>
    </nav>
  )
}
