import Link from 'next/link'
import MediaPlaceholder from './MediaPlaceholder'
import Tag from './Tag'
import TechChips from './TechChips'
import type { IndustryProject } from '@/data/industry-projects'

const colorMap: Record<IndustryProject['categoryColor'], 'blue' | 'green' | 'orange' | 'purple' | 'teal'> = {
  blue: 'blue',
  green: 'green',
  orange: 'orange',
  purple: 'purple',
  teal: 'teal',
}

export default function IndustryProjectCard({ project }: { project: IndustryProject }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5 flex-shrink-0">
          <MediaPlaceholder label="Video / GIF — coming soon" aspectRatio="16/9" />
        </div>
        <div className="flex-1 p-6 flex flex-col gap-3">
          <div>
            <Tag variant={colorMap[project.categoryColor]}>{project.category}</Tag>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-slate-100">{project.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.shortDescription}</p>
          <TechChips items={project.tech} />
          <div className="mt-auto pt-2">
            <Link href={`/industry/${project.slug}`} className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline" aria-label={`View project: ${project.title}`}>
              View Project →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
