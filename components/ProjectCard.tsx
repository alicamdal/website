import TechChips from './TechChips'

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

export default function ProjectCard({ title, description, tech, github, demo }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-colors flex flex-col gap-3">
      <h2 className="font-semibold text-lg text-gray-900 dark:text-slate-100">{title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">{description}</p>
      <TechChips items={tech} />
      <div className="flex gap-3 mt-1">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 hover:underline" aria-label={`GitHub repository for ${title}`}>
            GitHub →
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 hover:underline" aria-label={`Demo for ${title}`}>
            Demo →
          </a>
        )}
      </div>
    </div>
  )
}
